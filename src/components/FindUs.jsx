import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join join-vertical flex *:bg-white">
                <button className="btn join-item justify-start "><FaFacebook className="text-xl"/>Facebook</button>
                <button className="btn join-item justify-start"><BsTwitter className="text-xl"/>Twitter</button>
                <button className="btn join-item justify-start"><FaInstagram className="text-xl"/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;