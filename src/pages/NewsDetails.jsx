import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/Layout-component/RightNavbar";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];

  return (
    <div>
      <header>
        <Header></Header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
          <section className="col-span-9">
            <h2 className="font-semibold mb-3">Dragon news</h2>
            <div className="card bg-base-100 rounded-xl border">
              <figure className="px-10 pt-10">
                <img
                  src={news?.image_url}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{news?.title}</h2>
                <p>{news?.details}</p>
                <div className="card-actions">
                  <Link to={`/category/${news?.category_id}`} className="btn bg-[#D72050] text-white"><FaArrowLeft /> News in this category</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-3">
            <RightNavbar></RightNavbar>
          </section>
        </main>
      </header>
    </div>
  );
};

export default NewsDetails;
