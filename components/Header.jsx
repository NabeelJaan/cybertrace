import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (

        <div className="header-wrapper bg-black py-5">
            <nav className="max-w-1140px mx-auto flex items-center justify-between px-5 xl:px-0">
                
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image src="/images/cybertrace.webp" width="191" height="72" alt="Cybertrace logo"/>
                    </Link>
                </div>

                <div>
                    <Link href="/">
                        <a className="text-white text-base font-roboto mr-8">Home</a>
                    </Link>

                    <Link href="/about">
                        <a className="text-white text-base font-roboto mr-8">About</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-base font-roboto mr-8">Blog</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-base font-roboto">Contact</a>
                    </Link>
                </div>
            </nav>
        </div>

  )
}


export default Header