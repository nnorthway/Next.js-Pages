//domain.com/news
import Link from "next/link"

export default function NewsPage() {
  return (<>
    <Link href="/">Back to Home</Link>
    <h1>News</h1>
    <ul>
      <li><Link href="/news/next-js-is-fun">Next.js Is Fun</Link></li>
      <li><Link href="/news/react-is-cool">React Is Cool</Link></li>
      <li><Link href="/news/i-love-coding">I Love Coding</Link></li>
    </ul>
  </>)
}