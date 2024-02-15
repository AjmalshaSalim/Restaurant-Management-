import BackgroundImage from '../../assets/images/bgImageUser.jpg';
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';

function Otp() {
    return (
        <div className="relative h-screen">
            {/* Background Image */}
            <img className="absolute inset-0 w-full h-full object-cover" src={BackgroundImage} alt="bg-image" />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
                <div className="font-semibold text-3xl text-white">Email Verification</div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                    <p>We have sent a code to your phone number +91 ********67</p>
                </div>
                <form>
                    <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                        <div className="flex flex-row space-x-4">
                            <input className="w-12 h-12 text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" maxLength="1" />
                            <input className="w-12 h-12 text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" maxLength="1" />
                            <input className="w-12 h-12 text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" maxLength="1" />
                            <input className="w-12 h-12 text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" maxLength="1" />
                        </div>
                        <button className='bg-red-500 text-white rounded-full px-5 py-2 cursor-pointer hover:opacity-80 disabled:opacity-80' type='submit'>
                            Verify
                        </button>
                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't receive code?</p> 
                            <a className="text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Otp;
