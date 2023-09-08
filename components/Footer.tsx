


import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-300 tracking-wide text-center font-medium">
            <div className="text-gray-500 p-4">
                <Link href="/" passHref>
                    <div className="cursor-pointer text-gray-500">InspireSpace&copy; {new Date().getFullYear()}</div>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
