import Link from "next/link";

export default function Header() {
  return (
    <>
    <header className="container mx-auto">
        <ul className="flex flex-row justify-end text-white px-4 bg-slate-800 rounded-br-xl rounded-bl-xl drop-shadow-xl">
            <li className="list-none "><Link href="/"><a className="menu-item"> Home </a></Link></li>
            <li className="list-none"><Link href="/blog"><a className="menu-item"> Blog </a></Link></li>
            <li className="list-none"><Link href="/about"><a className="menu-item"> About </a></Link></li>
            <li className="list-none"><Link href="/users"><a className="menu-item"> Users </a></Link></li>
        </ul>
    </header>
    </>
  )
}
