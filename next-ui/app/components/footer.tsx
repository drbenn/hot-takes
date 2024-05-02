import Link from "next/link";



export default function Footer() {
  return (
    <>
    {/* <footer>
    <div>footeR</div>
    <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure aspernatur iste dolorem quasi reprehenderit maxime, atque quam et quos sequi?
    </div>

    </footer> */}
    <footer className="bg-gray-200 h-40 w-full text-center p-4">
      <p className="text-2xl pt-8 pb-4">Hot Takes</p>
      <p><Link href="https://danbennett.dev">danbennett.dev</Link></p>
      <p className="text-xs">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
    </>
  )
}
