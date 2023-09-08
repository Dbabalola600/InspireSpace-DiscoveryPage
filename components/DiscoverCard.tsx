export default function DiscoverCard() {
  return (

    <div
      className="bg-gray-200 m-5  p-3 break-words"
    >

      <div
        className="bg-white mb-5 border-[1px] h-[150px] border-black "
      >
        image
      </div>

      <div
        className="bg-white border px-4 border-black  space-y-3"
      >
        <div>
          Inspire Space
        </div>


        <div> HackAthin group 3</div>

        <div> N0.00  </div>
        <div
          className=" flex justify-between gap-x-3 w-1/4  ml-5"
        >
          <div className="bg-green-500 px-2 text-white"> free</div>
          <div className="bg-red-500 px-2 text-white">Live</div>
        </div>
        <div> # project</div>
      </div>

    </div>
  )
}