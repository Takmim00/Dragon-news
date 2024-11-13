import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/Layout-component/LeftNavbar";
import RightNavbar from "../components/Layout-component/RightNavbar";
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
      <main className="w-11/12 mx-auto pt-4 grid md:grid-cols-12 gap-4">
        <aside className="col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
