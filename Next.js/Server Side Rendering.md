# Server Side Rendering

## 기존의 코드
```js
import { useEffect, useState } from "react";
import Seo from "./components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {

  // 이것을 축약한 형태가 그 아래에 나오는 코드
  // (async () => {
  //  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  //  const json = await response.json();
  // })();

  (async () => {
  // 처음에 전체를 console에 찍었을 때 여러가지 결과값이 나오는데,
  // 여기서는 results 속성만 필요하므로 {results} 로 비구조화 할당

      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="home" />
      {!movies && <h3>Loading...</h3>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
```

* 위의 코드대로 실행되면, 맨 처음 html 파일에는 `{!movies && <h3>Loading...</h3>}` 이것만 담겨져 내보내지는 형태가 됨
* 그 후에 데이터가 들어오면 map으로 돌려서 화면에 나타나는데, 만약 맨 처음에 로딩중이 뜨는게 싫고   
데이터가 다 들어온 후에 화면을 보여주고 싶다면 아래와 같이 코드를 바꾸면 됨

## 바꾼 코드
```js
import { useEffect, useState } from "react";
import Seo from "./components/Seo";

export default function Home({ results }) {

  return (
    <div className="container">
      <Seo title="home" />
      // 여기에 받아온 results
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

// 이름 바꿀 수 없음
// 어떤 코드를 적든간에 서버에서 돌아감
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3001/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

```

* 이렇게 바꾸면 사용자는 더이상 로딩중... 화면을 볼 수는 없고, 데이터가 받아와진 것부터 화면을 볼 수 있음
* html에도 로딩중 대신 실제 데이터가 들어간 태그들이 있게됨
* 기존대로 CSR 방식을 쓸 것인지, SSR 방식을 쓸 것인지는 선택의 문제!

## getServerSideProps이란 무엇일까?
* `getServerSideProps`는 서버에서 실행됨.  
  여기서 무엇을 return하든지 이걸 props로써 page에게 주게됨
  
```js
// _app.js

import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

```

* 위와 같은 `_app.js` 파일을 보면 Component에서 컴포넌트를 불러주고 pageProps도 받아옴
  * `index.js` 내용이 홈페이지 접속시 보이는 첫 화면. Next.js가 `index.js`의 컴포넌트를 받아서 render하기 위해   
    `_app.js`의 Component 자리에 넣고 `getServerSideProps` 부분을 호출함
  * Next.js는 우리가 이걸(getServerSideProps) 사용할 것이라는걸 알게되고, 우리는 그 안에서 필요한 것 즉 api에서 뭔가 호출함
  * 그 후에  props로 return 해주면, 그걸 PageProps로 받아와서 넣어줌


> 출처 : 노마드코더 'Next.js 시작하기'
