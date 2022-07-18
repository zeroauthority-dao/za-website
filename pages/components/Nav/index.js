import React, { useState, useEffect } from "react";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import { supabase } from "../../../utils/supabaseClient";

export default function Nav() {
  const [stxPrice, setStxPrice] = useState();
  const [btcPrice, setBtcPrice] = useState();
  const [session, setSession] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  
    const handleMenuClick = () => {
      setOpenMenu(true);
    }
  
    const handleMenuClose = () => {
      setOpenMenu(false);
    }

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cblockstack&vs_currencies=usd"
    )
      .then((response) => response.json())
      .then((data) => {
        const btcFormatted = formatter.format(data.bitcoin.usd).split(".")[0];
        const stxFormatted = formatter.format(data.blockstack.usd);
        setBtcPrice(btcFormatted);
        setStxPrice(stxFormatted);
      });
  });

  return (
    <>
    <nav className="hidden lg:flex items-center justify-between flex-wrap text-white mb-10 pt-20">
      <div className="flex w-full flex-grow items-center lg:w-auto flex-wrap justify-between">
        <div className="font-semibold text-sm md:text-xl leading-7 tracking-wide lg:flex-grow uppercase flex gap-8 flex-wrap items-center">
          <a
            href="https://zero-authority-dao.gitbook.io/internal-wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:inline-block lg:mt-0"
          >
            Litepaper
          </a>
          <Link href="/coming-soon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-block lg:mt-0"
            >
              Learn
            </a>
          </Link>
          <Link href="/coming-soon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-block lg:mt-0"
            >
              Community
            </a>
          </Link>
        </div>

        <div className="flex mt-4 md:mt-0">
          <div className="flex items-center px-4 py-2 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white">
            <Image
              src="/stx.png"
              alt="Stacks logo"
              height="24px"
              width="24px"
            />
            <span className="ml-1 mr-4 md:font-semibold">{stxPrice}</span>
            <Image
              src="/btc.png"
              alt="Bitcoin logo"
              height="24px"
              width="24px"
            />
            <span className="ml-1 md:font-semibold">{btcPrice}</span>
          </div>
          {session ? (
            <Link href="/profile">
              <a className="ml-4 flex items-center px-4 py-2 leading-none border rounded-full text-black font-bold bg-white drop-shadow-lg border-white">
                Edit Profile
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="ml-4 flex items-center px-4 py-2 leading-none border rounded-full text-black font-bold bg-white drop-shadow-lg border-white">
                Creator Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
    {/* mobile menu closed */}
    {!openMenu &&
    <nav className="top-0 lg:hidden">
      <div className="max-w-content mx-auto">
        <div className="flex justify-between items-center p-2 text-white">
            <button
              onClick={handleMenuClick}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="flex items-center px-4 py-2 leading-none border rounded-full bg-white text-sm text-black drop-shadow-lg border-white">
            <Image
              src="/stx.png"
              alt="Stacks logo"
              height="20px"
              width="20px"
            />
            <span className="ml-1 mr-4 md:font-semibold">{stxPrice}</span>
            <Image
              src="/btc.png"
              alt="Bitcoin logo"
              height="20px"
              width="20px"
            />
            <span className="ml-1 md:font-semibold">{btcPrice}</span>
          </div>
        </div>
      </div>
    </nav>
  }

    {/* mobile menu open */}
    {openMenu &&
      <>
        <div className="flex justify-between items-center p-2 text-white lg:hidden">
        <button
          onClick={handleMenuClose}
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        </div>
        <div className="grid place-items-center gap-4 py-2 px-4 text-lg font-medium antialiased text-white lg:hidden">
        <a
        href="https://zero-authority-dao.gitbook.io/internal-wiki/"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:inline-block lg:mt-0"
      >
        Litepaper
      </a>
      <Link href="/coming-soon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
        >
          Learn
        </a>
      </Link>
      <Link href="/coming-soon">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="lg:inline-block lg:mt-0"
        >
          Community
        </a>
      </Link>
      {session ? (
            <Link href="/profile">
              <a className="flex items-center px-4 py-2 leading-none border rounded-full bg-white text-base text-black drop-shadow-lg border-white">
                Edit Profile
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="flex items-center px-4 py-2 leading-none border rounded-full bg-white text-base text-black drop-shadow-lg border-white">
                Creator Login
              </a>
            </Link>
          )}
    </div>
      </>
    }
  </>
  );
}
