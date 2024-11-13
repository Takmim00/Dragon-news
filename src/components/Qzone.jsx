import swim from "../assets/swimming.png";
import classImg from "../assets/class.png";
import playGround from "../assets/playground.png";
import bg from '../assets/bg.png'

const Qzone = () => {
  return (
    <div>
      <div className="bg-base-300 px-3 py-4">
        <h2 className="font-semibold mb-3">Q-zone</h2>
        <div className="*:w-full space-y-3">
          <img
            className="border-dashed border-2 border-gray-400"
            src={swim}
            alt=""
          />
          <img
            className="border-dashed border-2 border-gray-400"
            src={classImg}
            alt=""
          />
          <img
            className="border-dashed border-2 border-gray-400"
            src={playGround}
            alt=""
          />
        </div>
      </div>
      <div className="*:w-full pt-4">
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
