import Link from 'next/link'
import Image from 'next/image'
import  Searchbar from "./Search"
import Navbar from "../Navbar/page"
function Header({placeholder}: {placeholder?: string}) {
  return (
        <header className=' shadow-md w-full '>
            <div className='container flex items-center justify-between py-4 w-full relative'>
            <div >
                <Link href="/">
                <div className="relative w-24 h-12">
                    <Image
                        src="/airbnb-logo.svg"
                        alt="logo"
                        fill
                        className="object-contain"
                    />
                    </div>
                </Link>
            </div>
            <Searchbar placeholder={placeholder} />
            <Navbar />
            </div>
        </header>
  )
}

export default Header