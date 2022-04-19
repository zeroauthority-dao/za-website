import Footer from "./components/Footer";
import ResultCard from "./components/ResultCard";
import Search from "./components/Search";
import SecondaryNav from "./components/SecondaryNav";

const Results = () => {

  return (
    <div className="font-inter antialiased bg-[#E5E5E5]">
      <SecondaryNav />
      <Search />
      <ResultCard />
      <Footer />
    </div>
  );
}

export default Results