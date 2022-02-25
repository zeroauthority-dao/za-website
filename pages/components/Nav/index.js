import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link'

export default function Nav() {
  const [stxPrice, setStxPrice] = useState();
  const [btcPrice, setBtcPrice] = useState();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cblockstack&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
      const btcFormatted = formatter.format(data.bitcoin.usd).split('.')[0]
      const stxFormatted = formatter.format(data.blockstack.usd)
      setBtcPrice(btcFormatted);
      setStxPrice(stxFormatted);
    })
  });

  return (
    <nav className="flex items-center justify-between flex-wrap text-white mb-10 pt-20 xl:p-10 ml-8 xl:ml-20">
      <div className="w-full flex-grow flex items-center lg:w-auto">
        <div className="font-medium text-lg md:text-md leading-7 tracking-wide lg:flex-grow uppercase">
        <Link href="/coming-soon">
          <a target='_blank' rel="noopener noreferrer" className="lg:inline-block lg:mt-0 mr-20 xl:mr-30">
            Join
          </a>
        </Link>
          <a href="https://zero-authority-dao.gitbook.io/internal-wiki/" target='_blank' rel="noopener noreferrer" className="lg:inline-block lg:mt-0 mr-20 xl:mr-30">
            Litepaper
          </a>
        <Link href="/coming-soon">
          <a target='_blank' rel="noopener noreferrer" className="lg:inline-block lg:mt-0 mr-20 xl:mr-30">
            Learn
          </a>
        </Link>
        <Link href="/coming-soon">
          <a target='_blank' rel="noopener noreferrer" className="lg:inline-block lg:mt-0 mr-20 xl:mr-30">
            Community
          </a>
        </Link>
        <Link href="https://docs.google.com/forms/d/1iu5TFc6an_GB9Wp4NgM-YCwSsSjJbtr4GON8yrsrTK4/edit">
          <a target='_blank' rel="noopener noreferrer" className="lg:inline-block lg:mt-0">
            Feedback
          </a>
        </Link>
        </div>
        <div className="flex mr-8 xl:mr-40">
          <div className="flex items-center px-4 py-2 leading-none border rounded-full bg-white text-black drop-shadow-lg border-white ml-10 lg:ml-0 lg:mt-0">
            <Image src="/../public/stx.png" alt="Stacks logo" height="24px" width="24px"/>
            <span className="ml-1 mr-4">{stxPrice}</span>
            <Image src="/../public/btc.png" alt="Bitcoin logo" height="24px" width="24px"/>
            <span className="ml-1">{btcPrice}</span>
          </div>
        </div>
      </div>
</nav>
  )
}
