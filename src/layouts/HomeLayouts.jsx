import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-4">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto"></main>
    </div>
  );
};

export default HomeLayouts;
