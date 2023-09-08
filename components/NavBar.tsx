import React from "react";
import Image from "next/image";
import {CgProfile} from "react-icons/cg"


import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
    const router = useRouter();

    const [mobileClicked, setMobileClicked] = React.useState(false);

    return (
        <>
            <nav className="shadow-md bg-black text-white">
                <div className="flex items-center justify-between px-5 md:px-10 lg:px-2 py-2 mx-auto">
                    <Link href="/" passHref>
                        <div className="w-40 text-center  text-xl lg:block hidden ">
                            {/* <Image src={logo_trans} alt="logo" /> */}
                            InspireSpace
                        </div>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:inline-flex md:space-x-6 lg:space-x-10 md:items-center">
                        <div className="flex md:space-x-4 lg:space-x-6">
                            <Link href="/" passHref>
                                <p className="cursor-pointer py-2 px-4 rounded-sm ring-primary hover:ring-secondary">Dicover</p>
                            </Link>
                            <Link href="/" passHref>
                                <p className="cursor-pointer py-2 px-4 bg-primary hover:bg-secondary text-white rounded-sm ring-primary hover:ring-secondary"> Inbox</p>
                            </Link>
                            <Link href="/" passHref>
                                <p className="cursor-pointer py-2 px-4 bg-primary hover:bg-secondary text-white rounded-sm  ring-primary hover:ring-secondary"> Discovery</p>
                            </Link>

                            <Link href="/" passHref>
                                <div
                                className="text-white py-2 px-4 cursor-pointer  text-[25px]"
                                >
                                <CgProfile
                                className=""
                                />
                                </div>
                         
                           </Link>
                        </div>
                    </div>

                    {/* Mobile Nav Text */}
                    <Link href="/" passHref>
                        <h1 className="font-WorkSans md:hidden text-xl hover:text-secondary font-bold tracking-wider text-primary">Inspire Space</h1>
                    </Link>

                    {/* Mobile Nav Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setMobileClicked(!mobileClicked)} className="mobile-menu-button">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Links */}
                <div className={mobileClicked ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"}>
                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Discover</p>
                        </Link>
                    </a>
                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/hackathon/2023" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Inbox</p>
                        </Link>
                    </a>

                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/hackathon/2023" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Notifications</p>
                        </Link>
                    </a>

                    <a onClick={() => setMobileClicked(false)}>
                        <Link href="/hackathon/2023" passHref>
                            <p className="block py-2 px-4 text-m hover:bg-primary hover:text-white">Profile</p>
                        </Link>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
