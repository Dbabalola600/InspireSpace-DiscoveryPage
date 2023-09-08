import DefaultLayout from "../components/DefaultLayout";
import DiscoverCard from "../components/DiscoverCard";
import SearchBar from "../components/SearchBar";



export default function Index() {
  return (

    <DefaultLayout>
      <div>

        <div
          className="flex justify-between"
        >
          <div
            className="text-black font-bold text-3xl"
          >
            Art for you today
          </div>

          <div
            className="text-2xl font-thin"
          >
            June 7, 2023
          </div>
        </div>



        {/* <div className="bg-gray-300 px-10 py-5 lg:grid  lg:grid-cols-6  lg:divide-x-2 divide-black justify-center  mt-5 w-full grid grid-cols-2 space-y-4"> */}
        <div className="bg-gray-300  px-10 py-5 lg:grid lg:grid-cols-6 lg:divide-x-2 divide-black text-center mt-5 grid grid-cols-2 gap-y-3"    >
          <div className="col-span-1 flex items-center">
            <div className="flex-grow">illustrations</div>

          </div>

          <div className="col-span-1 flex items-center">
            <div className="flex-grow">3D Designs</div>

          </div>

          <div className="col-span-1 flex items-center">
            <div className="flex-grow">Abstract Art</div>

          </div>

          <div className="col-span-1 flex items-center">
            <div className="flex-grow">Paintings</div>

          </div>

          <div className="col-span-1 flex items-center">
            <div className="flex-grow">UI Designs</div>

          </div>

          <div className="col-span-1 flex items-center">
            <div className="flex-grow">Drawings</div>

          </div>
        </div>


        <div
          className=" lg:w-1/4 "
        >

          <div
            className="mt-5"
          >
            <SearchBar />
          </div>

        </div>


        <div
          className=" mt-[30px]  lg:grid lg:grid-cols-3 "
        >

         <DiscoverCard/>
         <DiscoverCard/>


<DiscoverCard/>
          
        </div>





      </div>
    </DefaultLayout>


  )
}