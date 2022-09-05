# Link와 useRouter

```js
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "blue" : "black" }}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "blue" : "black" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
```

## Link
* React.js와 Link 사용법이 거의 비슷하지만, Next.js에서는 그 안에 `<a>` 태그를 넣어줘야함
* className이나 style을 a 태그 내에서 지정해줄 수 있음 (Link에 하는 것 x)

## useRouter()
* console에 위의 router를 찍어보면 pathname 등 다양한 정보를 얻을 수 있음
