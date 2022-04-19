import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../Search";

export default function SecondaryNav() {
  const [stxPrice, setStxPrice] = useState();
  const [btcPrice, setBtcPrice] = useState();

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
    <nav className="flex items-center justify-between flex-wrap bg-hero bg-cover bg-no-repeat text-white py-12 drop-shadow-xl">
      <div className="w-full flex-grow flex lg:w-auto">
        <div className="font-semibold text-sm md:text-xl leading-7 tracking-wide lg:flex-grow uppercase flex gap-32 flex-wrap items-center justify-center">
        <Link href="/">
            <a
              className="lg:inline-block lg:mt-0"
            >
              Home
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
          </div>
        </div>


      </div>
    </nav>
  );
}