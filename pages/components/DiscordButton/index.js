import Image from "next/image";

export default function DiscordButton() {

  return (
    <button onClick={()=> window.open("https://discord.gg/sgU3txDcsV", "_blank", "noopener noreferrer")} className="flex mt-6">
      <div className="flex items-center w-[28rem] px-6 py-1 leading-none rounded-full bg-[#14B8A6] text-white">
        <span className="leading-7 tracking-wide text-md">Join the Discord</span>
        <span className="ml-64"><Image src="/../public/arrow.png" alt="arrow" height="14px" width="14px"/></span>
      </div>
    </button>
  )
}