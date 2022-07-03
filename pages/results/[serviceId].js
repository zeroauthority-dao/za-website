import { useRouter } from "next/router";
import Footer from "../components/Footer";
import ResultCard from "../components/ResultCard";
import SecondaryNav from "../components/SecondaryNav";
import ServiceList from "../components/ServiceList";

const Results = () => {
  const router = useRouter();
  const { serviceId } = router.query;
  return (
    serviceId !== undefined && (
      <div className="font-inter antialiased bg-[#E5E5E5] h-screen">
        <SecondaryNav />
        <div className="px-24">
          <ServiceList results={true} />
        </div>
        <ResultCard serviceId={serviceId} />
        <div className="fixed inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    )
  );
};

export default Results;
