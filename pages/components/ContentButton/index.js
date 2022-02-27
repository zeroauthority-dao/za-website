export default function ContentButton() {
  return (
    <button
      onClick={() =>
        window.open("/coming-soon", "_blank", "noopener noreferrer")
      }
      className="flex mt-10 md:mt-8"
    >
      <div className="flex items-center px-8 py-2 2xl:px-10 2xl:py-4 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white lg:mt-0">
        <span className="font-bold leading-7 tracking-wide ml-1 text-lg 2xl:text-xl">
          Explore Content
        </span>
      </div>
    </button>
  );
}
