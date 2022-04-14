
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  return (
    <div className="grid place-items-center pt-40 pb-4 antialiased font-semibold">
      <div className="flex flex-cols gap-12">
        <Link href="https://discord.gg/bANtPU5gss">
          <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
          >
            <Image
              src="/discord.png"
              alt="discord"
              width="42px"
              height="40px"
            />
          </a>
        </Link>

        <Link href="https://twitter.com/ZeroAuthDAO">
          <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
          >
            <Image
              src="/twitter.png"
              alt="twitter"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/zeroauthoritydao/">
          <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
          >
            <Image
              src="/insta.png"
              alt="instagram"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCgVlYD-CoJmDQrja8lL7gjg">
          <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
          >
            <Image
              src="/youtube.png"
              alt="youtube"
              width="40px"
              height="40px"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;