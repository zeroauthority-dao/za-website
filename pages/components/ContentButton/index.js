export default function ContentButton() {
  return (
    <button onClick={()=> window.open("/coming-soon", "_blank", "noopener noreferrer")} className="flex pl-10 ml-10 lg:ml-20 mt-10 md:mt-8">
      <div className="flex items-center px-8 py-2 2xl:px-10 2xl:py-4 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white ml-10 lg:ml-0 lg:mt-0">
        <span className="font-bold leading-7 tracking-wide ml-1 text-lg 2xl:text-xl">Explore Content</span>
      </div>
    </button>
  )
}