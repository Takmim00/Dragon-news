import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    console.log(import.meta.env.VITE_a);
    return (
        <div className='flex flex-col justify-center items-center gap-3 py-4'>
            <div>
                <img src={logo} alt="" className='w-[350px]'/>
            </div>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='text-gray-600 font-medium '>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;