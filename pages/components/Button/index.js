import Image from "next-image-export-optimizer";
import { useRouter } from "next/router";

const Button = ({ buttonData = { path: "", text: "" } }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(buttonData.path)}
      className="mt-6 w-full max-w-content"
    >
      <div className="grid md:grid-cols-2 px-6 py-2 rounded-full bg-[#14B8A6] text-white">
        <div className="grid md:place-items-start">
          <div className="text-sm whitespace-nowrap md:text-lg font-semibold">
            {buttonData.text}
          </div>
        </div>
        <div className="hidden md:grid place-items-end">
          <div>
            <Image src="/arrow.png" alt="arrow" height="14px" width="14px" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Button;
