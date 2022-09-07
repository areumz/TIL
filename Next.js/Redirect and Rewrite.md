# Redirect and Rewrite

* Next.js의 편리한 기능으로 Redirect와 Rewrite가 있음
* `Redirect` : 어떤 url로 접근했을 때, 자동으로 다른 url을 가진 페이지로 보내주는 것
  * 아래 예시에서처럼, old-blog 주소로 접근해도 new-blog로 보내줌
* `Rewrite` : 특정한 A url로 B url 주소를 대체해줌 (덮어 씌우기)

```js
// API KEY를 숨기기 위해 별도의 .env 파일에 저장하고 불러와줌
// .env 파일은 .gitignore에 넣기
const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // path가 어디든간에 redirect 해줌
        // 뒤에 * 붙여주면 모든 것을 캐치해줌
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

```
