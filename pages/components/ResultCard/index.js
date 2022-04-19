
import Image from "next/image";
import Button from "../Button";

const ResultCard = () => {

  const buttonData = {
    text: "View",
    path: "/results"
  }

  const cardData = [
    {
      pfp: "/stx.png",
      name: "Joe.btc",
      rating: "4.8",
      desc: "Joe.btc has been in the crypto industry for over 3 years writing and auditing smart contracts for ballers.",
      path: "/"
    },
    {
      pfp: "/stx.png",
      name: "Joe.btc",
      rating: "4.8",
      desc: "Joe.btc has been in the crypto industry for over 3 years writing and auditing smart contracts for ballers.",
      path: "/"
    },
    {
      pfp: "/stx.png",
      name: "Joe.btc",
      rating: "4.8",
      desc: "Joe.btc has been in the crypto industry for over 3 years writing and auditing smart contracts for ballers.",
      path: "/"
    },
    {
      pfp: "/stx.png",
      name: "Joe.btc",
      rating: "4.8",
      desc: "Joe.btc has been in the crypto industry for over 3 years writing and auditing smart contracts for ballers.",
      path: "/"
    },
    {
      pfp: "/stx.png",
      name: "Joe.btc",
      rating: "4.8",
      desc: "Joe.btc has been in the crypto industry for over 3 years writing and auditing smart contracts for ballers.",
      path: "/"
    }
  ]

  const card = cardData.map((data, i) => {
    return (
      <div key={i} className="grid bg-[#F8FAFC] rounded-sm">
        <div className="grid grid-rows-3 px-8 py-2">
          <div className="grid grid-cols-3 gap-8 place-items-center">
            <div>
            <Image
              src={data.pfp}
              alt={data.name}
              height="70px"
              width="70px"
            />
            </div>
            <div className="grid font-semibold text-3xl ml-8">
              {data.name}
              <span className="text-base">
                ⭐&nbsp;&nbsp;{data.rating}
              </span>
            </div>
          </div>
          <div className="text-lg">
            {data.desc}
          </div>
          <div className="grid place-items-center">
            <Button
              buttonData={buttonData}
            />
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className="flex justify-center">
      <div className="py-20 grid grid-cols-3 gap-20 drop-shadow-lg max-w-content">
        {card}
      </div>
    </div>
  );
}

export default ResultCard;