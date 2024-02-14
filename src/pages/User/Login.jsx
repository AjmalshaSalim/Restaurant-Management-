
import BackgroundImage from '../../assets/images/bgImageUser.jpg'
import logo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png'

function Login() {



    return (
<div className="relative h-screen">
    {/* Background Image */}
    <img className="absolute inset-0 w-full h-full object-cover" src={BackgroundImage} alt="bg-image" />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 opacity-60"></div>

    {/* Content */}
    <div className="absolute inset-0 flex flex-col justify-center items-center">
        <img className='h-auto w-[200px] md:w-[300px] ml-2 mt-2 absolute left-2 top-8' src={logo} alt='' />
        <form className='flex flex-col gap-2'>
            <h1 className="text-white text-3xl md:text-6xl font-semibold ml-4 md:ml-20 mb-4">Sign In</h1>
            <div className="mt-4 text-white">
                <input 
                    type="text" 
                    className="border border-gray-300 px-6 md:px-20 py-2 rounded-3xl mb-4 focus:outline-none" 
                    placeholder='Enter your phone number' 
                />
                <button 
                    className='bg-red-500 text-white rounded-full px-5 py-2 flex ml-4 md:ml-24 cursor-pointer' 
                    type='button'
                >
                    Sign In
                </button>
            </div>
        </form>
    </div>
</div>









    )
}

export default Login
