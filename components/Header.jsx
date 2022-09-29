import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return(
        <div className="header-wrapper bg-black py-5">
            <nav className="max-w-1140px mx-auto flex items-center justify-between">
                <div>
                    <Link href="#">
                        <Image src="/images/cybertrace.webp" width="191" height="72" />
                    </Link>
                </div>
                <div>
                    <ul>
                        <Link href="/">
                            <a className="text-white text-base font-normal font-roboto mr-8">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="text-white text-base font-normal font-roboto mr-8">About</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-base font-normal font-roboto mr-8">Services</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-base font-normal font-roboto mr-8">Blog and Press</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-base font-normal font-roboto mr-8">Database</a>
                        </Link>
                        <Link href="/">
                            <a className="text-white text-base font-normal font-roboto"font-roboto >Contact</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header