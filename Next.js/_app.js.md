# _app.js.md

* 컴포넌트의 청사진. 각 컴포넌트를 렌더링하기 전에 이것부터 확인 후 렌더링함
* Component 부분에 해당 페이지에서 렌더링될 컴포넌트를 넣어준다고 생각

```js
import "../styles/globals.css";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {`
          a {
            color: gray;
          }
        `}
      </style>
    </>
  );
}

```
