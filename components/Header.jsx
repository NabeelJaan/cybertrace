import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from '@headlessui/react'

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

                    <Menu>
                        <Menu.Button className="text-white text-base font-medium font-roboto mr-8">About</Menu.Button>
                            <Menu.Items className="bg-gold">
                                <Menu.Item className="text-white text-base font-medium font-roboto">
                                {({ active }) => (
                                    <a className={`${active && ''}`} href="#">Accreditation</a>
                                )}
                                </Menu.Item>
                                <Menu.Item className="text-white text-base font-medium font-roboto">
                                {({ active }) => (
                                    <a className={`${active && ''}`} href="#">Careers</a>
                                )}
                                </Menu.Item>
                                <Menu.Item className="text-white text-base font-medium font-roboto">
                                {({ active }) => (
                                    <a className={`${active && ''}`} href="#">privacy policy</a>
                                )}
                                </Menu.Item>
                                <Menu.Item className="text-white text-base font-medium font-roboto">
                                {({ active }) => (
                                    <a className={`${active && ''}`} href="#">disclaimer</a>
                                )}
                                </Menu.Item>
                            </Menu.Items>
                    </Menu>
                </div>
            </nav>
        </div>

  )
}


export default Header