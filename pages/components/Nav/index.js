import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../../utils/supabaseClient";

export default function Nav() {
  const [stxPrice, setStxPrice] = useState();
  const [btcPrice, setBtcPrice] = useState();
  const [session, setSession] = useState(null);

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
    <nav className="flex items-center justify-between flex-wrap text-white mb-10 pt-20">
      <div className="w-full flex-grow flex items-center lg:w-auto flex-wrap justify-between">
        <div className="font-medium text-sm md:text-lg md:text-md leading-7 tracking-wide lg:flex-grow uppercase flex gap-8 flex-wrap items-center">
          <Link href="/coming-soon">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-block lg:mt-0"
            >
              Join
            </a>
          </Link>
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
          <Link href="https://docs.google.com/forms/d/1iu5TFc6an_GB9Wp4NgM-YCwSsSjJbtr4GON8yrsrTK4/edit">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="lg:inline-block lg:mt-0"
            >
              Feedback
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
            <span className="ml-1 mr-4">{stxPrice}</span>
            <Image
              src="/btc.png"
              alt="Bitcoin logo"
              height="24px"
              width="24px"
            />
            <span className="ml-1">{btcPrice}</span>
          </div>
          {session ? (
            <Link href="/profile">
              <a className="ml-4 flex items-center px-4 py-2 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white">
                Edit Profile
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className="ml-4 flex items-center px-4 py-2 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white">
                Creator Login
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
