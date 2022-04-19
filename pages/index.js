import Head from "next/head";
import Button from "./components/Button";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Footer from "./components/Footer";

export default function Home() {

  const provideData = {
    text: "Provide a Service",
    path: "https://forms.gle/m7LQzcGtFefeTQzC9"
  }

  const lookingData = {
    text: "Looking for a Service",
    path: "https://forms.gle/KXqNriutVt9f9gFm6"
  }

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

      <div className="font-inter bg-hero bg-cover bg-no-repeat w-screen h-min drop-shadow-lg px-8 md:px-12 lg:px-24 pb-8 antialiased">
        <Nav />
        <div className="my-20 lg:my-20 max-w-content md:w-4/5 lg:w-3/5">
          <div className="font-black text-white text-5xl md:text-7xl mt-16 xl:mt-0">
            <h1>Find talent for your next Stacks project</h1>
          </div>
          <div className="text-white leading-7 text-2xl mt-10 md:mt-10">
            <p>
              Zero Authority is a comunity of people who believe in open source
              and permissionless systems built on Stacks and secured by Bitcoin
            </p>
          </div>
          <Search />
        </div>
      </div>

      <div className="flex justify-center font-inter py-52 px-2 antialiased">
        <div className="grid grid-cols-2 gap-8 md:gap-20 max-w-content">
         <div className="grid grid-rows-3 md:gap-8">
          <div className="font-black text-2xl md:text-4xl">
            Do you have a service to offer?
          </div>
          <div className="text-xl md:text-2xl row-span-2">
            There is much to be done in the Stacks ecosystem, and we aim to play a 
            part in spreading reputable knowledge and bringing together folks
            that are passionate about building for the future.
          </div>
            <Button
              buttonData={provideData}
            />
          </div>
         <div className="grid grid-rows-3">
          <div className="font-black text-2xl md:text-4xl">
            Are you looking for talent?
          </div>
          <div className="text-xl md:text-2xl row-span-2">
            Are you looking for a talented individual to review your protocol's
            smart contract? Do you need a meme master? Maybe someone to 
            send retweets? Make tutorials? Write blogs?
          </div>
            <Button
              buttonData={lookingData}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
