# Link

```js
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a className="hello">Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

```

* React.js와 Link 사용법이 거의 비슷하지만, Next.js에서는 그 안에 `<a>` 태그를 넣어줘야함
* className이나 style을 a 태그 내에서 지정해줄 수 있음 (Link에 하는 것 x)
