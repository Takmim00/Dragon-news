import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center gap-3 bg-base-200 p-3">
            <p className="bg-[#D72050] text-white px-4 py-2 ">Latest</p>
            <Marquee pauseOnHover={true} className="space-x-8">
               <Link Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
               <Link Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
               <Link Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;