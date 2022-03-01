import Head from "next/head";
import ContentButton from "./components/ContentButton";
import DiscordButton from "./components/DiscordButton";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <title>ZeroAuthority DAO</title>
        <meta name="description" content="Remember why you started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-inter bg-hero bg-cover bg-no-repeat w-screen h-min drop-shadow-lg px-8 md:px-12 lg:px-24 pb-8">
        <Nav />
        <div className="my-20 lg:my-20 w-full md:w-4/5 lg:w-3/5">
          <div className="font-black text-white text-6xl 2xl:text-9xl mt-16 xl:mt-0">
            <h1>Remember why you started</h1>
          </div>
          <div className="text-white leading-7 text-2xl 2xl:text-4xl md:text-2xl mt-10 md:mt-10">
            <p>
              Zero Authority is a comunity of people who believe in open source
              and permissionless systems built on Stacks and secured by Bitcoin
            </p>
          </div>
          <ContentButton />
        </div>
      </div>

      <div className="font-inter pt-12 px-8 md:px-12 lg:px-24 pb-12">
        <div className="w-full md:w-3/5 lg:w-2/5 m-auto">
          <div className="font-black text-5xl 2xl:text-7xl">
            Join us in building a better Internet
          </div>
          <div className="leading-7 text-2xl md:text-xl 2xl:text-2xl mt-10">
            Zero Authority brings together the best content in the Stacks and
            Bitcoin ecosystems to help web3 enthusiasts, developers, and degens
            build a user-owned Internet secured by Bitcoin.
          </div>
          <DiscordButton />
        </div>
      </div>
    </>
  );
}
