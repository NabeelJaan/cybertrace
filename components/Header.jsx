import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (

    <header>
        <div className="header-wrapper bg-black py-5 px-5 xl:px-0">
            <nav className="max-w-1140px mx-auto flex items-center justify-between">
                
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image src="/images/cybertrace.webp" width="191" height="72" alt="Cybertrace logo"/>
                    </Link>
                </div>

                <div className="hidden lg:block">
                    <Link href="/">
                        <a className="text-white text-base font-nunito mr-8">Home</a>
                    </Link>

                    <Link href="/about">
                        <a className="text-white text-base font-nunito mr-8">About</a>
                    </Link>
                    <Link href="/about">
                        <a className="text-white text-base font-nunito mr-8">Services</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-base font-nunito mr-8">Blogs & Media</a>
                    </Link>
                    <Link href="/">
                        <a className="text-white text-base font-nunito mr-8">Databases</a>
                    </Link>
                    <Link href="/contact">
                        <a className="text-white text-base font-nunito">Contact</a>
                    </Link>
                </div>

                <div class="toggle lg:hidden">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
				</div>

            </nav>
        </div>
    </header>

  )
}


export default Header