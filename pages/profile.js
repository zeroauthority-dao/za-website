import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import Avatar from "./components/Avatar";

export default function Profile() {
  const router = useRouter();

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [stxAddress, setStxAddress] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [discord, setDiscord] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [services, setServices] = useState([]);
  const [servicesChecked, setServicesChecked] = useState([]);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, stx_address, avatar_url, discord, twitter`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setStxAddress(data.stx_address);
        setAvatarUrl(data.avatar_url);
        setDiscord(data.discord);
        setTwitter(data.twitter);
      }
    } catch (error) {
      console.log(error);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getServices();
  }, []);

  async function getServices() {
    let { data: serviceList } = await supabase.from("services").select("*");
    setServices(serviceList);

    let { data: service_offerings } = await supabase
      .from("service_offerings")
      .select("*")
      .eq("profile_id", supabase.auth.user().id);
    service_offerings.forEach((offering) => {
      setServicesChecked(
        service_offerings.map((offering) => offering.service_id)
      );
    });
  }

  async function updateProfile({
    username,
    stxAddress,
    avatar_url,
    discord,
    twitter,
    servicesChecked,
  }) {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      const updates = {
        id: user.id,
        username,
        stx_address: stxAddress,
        avatar_url,
        discord,
        twitter,
        updated_at: new Date(),
      };

      let { error } = await supabase.from("profiles").upsert(updates, {
        returning: "minimal", // Don't return the value after inserting
      });
      console.log(servicesChecked);
      const serviceOfferings = servicesChecked.map((serviceId) => {
        return {
          profile_id: user.id,
          service_id: serviceId,
        };
      });

      const { data, deleteError } = await supabase
        .from("service_offerings")
        .delete()
        .eq("profile_id", user.id);

      let { servicesError } = await supabase
        .from("service_offerings")
        .insert(serviceOfferings, {
          returning: "minimal",
        });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
      alert("Profile updated successfully.");
    }
  }
  if (!session) return null;
  return (
    <div className="flex flex-col min-h-screen gap-8 my-12 mx-auto w-4/5 md:w-3/5 lg:w-2/5">
      <h1 className="text-4xl">Your Profile</h1>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="email"
            type="text"
            value={session.user.email}
            disabled
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="username"
            type="text"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <Avatar
        url={avatar_url}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({
            username,
            stx_address: stxAddress,
            twitter,
            discord,
            avatar_url: url,
          });
        }}
      />
      <div>
        <label
          htmlFor="stxAddress"
          className="block text-sm font-medium text-gray-700"
        >
          STX Address
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="stxAddress"
            type="text"
            value={stxAddress || ""}
            onChange={(e) => setStxAddress(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="discord"
          className="block text-sm font-medium text-gray-700"
        >
          Discord Handle
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="discord"
            type="text"
            value={discord || ""}
            onChange={(e) => setDiscord(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="twitter"
          className="block text-sm font-medium text-gray-700"
        >
          Twitter Handle
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="twitter"
            type="text"
            value={twitter || ""}
            onChange={(e) => setTwitter(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
      <fieldset>
        <legend
          htmlFor="services"
          className="block text-sm font-medium text-gray-700"
        >
          Services
        </legend>
        {services.map((service) => {
          return (
            <div key={service.id} className="flex flex-col gap-8">
              <label htmlFor={service.id} className="">
                <input
                  id={service.id}
                  name={service.name}
                  type="checkbox"
                  checked={servicesChecked.includes(service.id)}
                  value={service.id}
                  onChange={() => {
                    if (servicesChecked.includes(service.id)) {
                      setServicesChecked(
                        servicesChecked.filter(
                          (checkedService) => checkedService !== service.id
                        )
                      );
                    } else {
                      setServicesChecked([...servicesChecked, service.id]);
                    }
                  }}
                />
                <span className="pl-4">{service.name}</span>
              </label>
            </div>
          );
        })}
      </fieldset>
      <div className="flex justify-between">
        <button
          className="bg-primary text-white px-4 py-2 rounded-lg shadow"
          onClick={() =>
            updateProfile({
              username,
              twitter,
              discord,
              stxAddress,
              servicesChecked,
            })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update Profile"}
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded-lg shadow"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
