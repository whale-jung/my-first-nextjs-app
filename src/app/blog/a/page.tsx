import Link from "next/link"
export default function APage() {
    return (
        <div>
            <h1>A Page</h1>
            <Link href="/blog/b">跳转B</Link>
        </div>
    )
}