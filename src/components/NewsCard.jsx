import { FaEye, FaStar } from "react-icons/fa";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="card w-full bg-base-100 shadow-xl p-4 rounded-lg">
      <div className="flex items-center justify-between mb-4 bg-base-200 px-3">
        <div className="flex items-center py-4 ">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-md">{news.author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex">
        <CiBookmark className="text-2xl"/>
        <CiShare2 className="text-2xl"/>
        </div>
      </div>

      <h1 className="text-lg font-bold mb-2">{news.title}</h1>

      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />

      <p className="text-sm text-gray-700 mb-4">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-primary cursor-pointer">Read More</span>
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <span>{news.rating.number}</span>
        </div>

        <div className="flex items-center text-gray-500">
          <FaEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
