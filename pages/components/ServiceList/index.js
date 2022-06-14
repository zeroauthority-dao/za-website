import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "../../../utils/supabaseClient";

const ServiceList = ({
  results
  }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    let { data: services, error } = await supabase.from("services").select("*");
    console.log(services)
    setServices(services);
  };
  console.log(results)
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {services.map((service) => {
        return (
          <Link href={results ? `${service.id}` : `results/${service.id}`} key={service.id}>
            <a className="bg-primary p-4 rounded-xl text-white font-semibold">
              {service.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default ServiceList