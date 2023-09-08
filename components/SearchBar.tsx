

export default function SearchBar() {
    return (
        <form
        // onSubmit={search}

        >


            <div className="flex justify-center">
                <div className="mb-3 xl:w-96 mt-5">
                    <div className="relative mb-4 flex w-full flex-wrap rounded-full items-stretch">
                        <input
                            type="search"
                            className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-black font-norma outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Type to Search"
                            aria-label="Search"
                            aria-describedby="button-addon3"


                        />
                        {/* <button


                            className="relative z-[2] rounded-full border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                            type="submit"
                            id="button-addon3"
                            data-te-ripple-init>

                          
                            Search
                        </button> */}
                    </div>
                </div>
            </div>


        </form>
    )
}