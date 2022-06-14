import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../Button";
import { supabase } from "../../../utils/supabaseClient";

const ResultCard = ({ serviceId }) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    console.log("here")
    getCreators();
  }, []);

  const getCreators = async () => {
    // let { data: service_offerings, error } = await supabase
    // .from("service_offerings")
    // .select(
    //   `
    //       profiles (
    //           id,
    //           username,
    //           avatar_url,
    //           discord,
    //           twitter,
    //           description
    //       )
    //   `
    // )
    // .eq("service_id", serviceId);
    // setCreators(service_offerings);
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select("username, avatar_url, discord, twitter, description")
      
    setCreators(profiles);
  };
  console.log(creators)
  const card = creators.map(( profiles , i) => {
    console.log(profiles)
    return (
      <div key={i} className="grid bg-[#F8FAFC] rounded-sm">
        <div className="grid grid-rows-3 px-8 py-4">
          <div className="grid grid-cols-3 gap-8 place-items-center">
            <div>
              <Image
                src={`https://tthqvxhzvyfntjewmwkf.supabase.co/storage/v1/object/sign/avatars/${profiles.avatar_url}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuMjA2OTc0ODczOTE5NTcyMDMuanBnIiwiaWF0IjoxNjUwNzA2NzIyLCJleHAiOjE5NjYwNjY3MjJ9.eEn8pwJ3rUR4lAAUkcPLXvKZFg6xTmoNGuTnORMWXR8`}
                alt={profiles.username}
                height="70px"
                width="70px"
                className="rounded-full"
              />
            </div>
            <div className="grid font-semibold text-3xl ml-8">
              {profiles.username}
              {/* <span className="text-base">⭐&nbsp;&nbsp;{profiles.rating}</span> */}
            </div>
          </div>
          <div className="text-lg text-center py-2">{profiles.description}</div>
          <div className="grid place-items-center gap-4 whitespace-nowrap">
            {profiles.twitter.length > 0 ? (
              <p>Discord Handle: {profiles.discord}</p>
            ) : (
              ""
            )}
            {profiles.twitter.length > 0 ? (
              <a
                className="rounded-full bg-primary px-4 py-2 text-white"
                href={`https://twitter.com/${profiles.twitter}`}
              >
                View Twitter
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex justify-center">
      <div className="py-20 grid grid-cols-3 gap-20 drop-shadow-lg max-w-content">
        {card}
      </div>
    </div>
  );
};

export default ResultCard;
