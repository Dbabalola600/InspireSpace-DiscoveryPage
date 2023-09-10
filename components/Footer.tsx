


import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-gray-300 tracking-wide text-center lg:py-2 py-1 mt-10 font-medium fixed bottom-0 left-0 w-full">
            <div className="flex flex-col items-center">
                <div className="grid grid-cols-2 gap-[50px] mx-10 ">
                    
                    
                    <div className=" text-sm lg:text-lg text-white bg-gray-600 border border-white p-2 max-w-xs truncate">
                        For You
                    </div>
                  
                    {/* 
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white rounded-full bg-red-500 w-12 h-12 flex items-center justify-center">
                                +
                            </div>
                        </div>
                    </div> */}

                    <div className=" text-sm lg:text-lg text-white bg-black border border-white p-2 max-w-xs truncate">
                        Following
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
