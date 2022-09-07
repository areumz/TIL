# Seo.js.md

* 다른 태그나 Meta Description이나 작성자 정보 등을 prop으로 넣을 수 있음
* `<Head>` 태그는 Next.js에서 기본으로 제공함
* 페이지마다 일일이 Head를 넣어주기보다, 이런 파일을 하나 만들어두고 children props로 내려받는 방식이 효율적임
* **사용 예시**

```js
import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
```

```js
import Seo from "./components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="about" />
      <h1>About</h1>
    </div>
  );
}

```
