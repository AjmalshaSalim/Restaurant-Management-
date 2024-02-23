import gymsoftLogo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';

function Loader() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            <img className="h-32 md:h-48 lg:h-64 w-auto animate-spin-slow" src={gymsoftLogo} alt="Gymsoft Logo" />
            <div className="flex justify-center items-center space-x-4 mt-8">
                <div className="loader-spinner animate-spin"></div>
                <div className="loader-spinner animate-spin"></div>
            </div>
            
        </div>
    );
}

export default Loader;
