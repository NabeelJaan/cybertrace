import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {

    const router = useRouter;
    function isActive(route){
        if(route == router.pathname){
            return "active"
        }
        else ""
    }

    return(
        <div className="header-wrapper bg-black py-5">
            <nav className="max-w-1140px mx-auto flex items-center justify-between px-5 xl:px-0">
                <div className="cursor-pointer">
                    <Link href="/">
                        <Image src="/images/cybertrace.webp" width="191" height="72" alt="Cybertrace logo"/>
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className={isActive('/')}>
                            <Link href="/"><a className="text-white text-base font-medium font-roboto mr-8">Home</a></Link>
                        </li>
                        <li className={isActive('/about')}>
                            <Link href="/about"><a className="text-white text-base font-medium font-roboto mr-8">About</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="text-white text-base font-medium font-roboto mr-8">Services</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="text-white text-base font-medium font-roboto mr-8">Blog and Press</a></Link>
                        </li>
                        <li>
                            <Link href="#"><a className="text-white text-base font-medium font-roboto mr-8">Database</a></Link>
                        </li>
                        <li className={isActive('/contact')}>
                            <Link href="/contact"><a className="text-white text-base font-medium font-roboto">Contact</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header