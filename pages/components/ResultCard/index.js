import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabaseClient";

const ResultCard = ({ serviceId }) => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  const getCreators = async () => {
    let { data: profiles, error } = await supabase.from("profiles").select(
      `
        *,
        service_offerings (
            service_id
        )
      `
    );
    const filteredProfiles = profiles.filter((profile) => {
      return (
        profile.service_offerings.filter((service) => {
          return service.service_id.toString() === serviceId.toString();
        }).length > 0
      );
    });
    setCreators(filteredProfiles);
  };

  const card = creators.map((profile, i) => {
    const avatarUrl = supabase.storage
      .from("avatars")
      .getPublicUrl(profile.avatar_url);
    return (
      <div key={i} className="grid bg-[#F8FAFC] rounded-sm">
        <div className="grid grid-rows-3 px-8 py-4">
          <div className="grid grid-cols-3 gap-8 place-items-center">
            <div>
              <Image
                src={
                  profile.avatar_url !== null
                    ? avatarUrl.data.publicURL
                    : `https://ui-avatars.com/api/?name=${profile.username}`
                }
                // src={`https://tthqvxhzvyfntjewmwkf.supabase.co/storage/v1/object/sign/avatars/${profile.avatar_url}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzLzAuMjA2OTc0ODczOTE5NTcyMDMuanBnIiwiaWF0IjoxNjUwNzA2NzIyLCJleHAiOjE5NjYwNjY3MjJ9.eEn8pwJ3rUR4lAAUkcPLXvKZFg6xTmoNGuTnORMWXR8`}
                alt={profile.username}
                height="70px"
                width="70px"
                className="rounded-full"
              />
            </div>
            <div className="grid font-semibold text-3xl ml-8 pl-4">
              {profile.username}
              {/* <span className="text-base">⭐&nbsp;&nbsp;{profile.rating}</span> */}
            </div>
          </div>
          <div className="text-lg text-center py-2">{profile.description}</div>
          <div className="grid place-items-center gap-4">
            {profile.discord && profile.discord.length > 0 ? (
              <p>Discord Handle: {profile.discord}</p>
            ) : (
              ""
            )}
            {profile.twitter && profile.twitter.length > 0 ? (
              <a
                className="rounded-full bg-primary px-4 py-2 text-white"
                href={`https://twitter.com/${profile.twitter}`}
                target="_blank"
                rel="noreferrer"
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

  if (creators.length > 0) {
    return (
      <div className="flex justify-center">
        <div className="py-20 grid grid-cols-3 gap-20 drop-shadow-lg max-w-content">
          {card}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <div className="py-20 grid grid-cols-3 gap-20 drop-shadow-lg max-w-content">
          <p>No creators with this skill.</p>
        </div>
      </div>
    );
  }
};

export default ResultCard;
