import { useRouter } from "next/router"
import Link from "next/link"

export default function NewsItem() {
  const router = useRouter()
  const slug = router.query.slug
  return <>
    <Link href="/news">Back to News</Link>
    <h1>News Item: {slug}</h1>
  </>
}