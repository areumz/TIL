# Styled JSX

```js
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>
        {`
          nav {
            background-color: tomato;
          }
          a {
            text-decoration: none;
          }
          .active {
            color: yellow;
          }
        `}
      </style>
    </nav>
  );
}

```

* 위와 같이 할 수 있고, 범위는 오직 컴포넌트 내부에서만 적용됨
