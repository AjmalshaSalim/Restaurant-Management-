import gymsoftLogo from '../../assets/images/Gymsoft_Logo1-removebg-preview.png';

function Loader() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative flex items-center justify-center">
                <div className="inline-block h-40 w-40 animate-spin rounded-full border-8 border-solid border-red-700 border-r-transparent align-[-0.25em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                    <span className="absolute inset-0 flex items-center justify-center">
                        <img className="h-32 w-auto" src={gymsoftLogo} alt="Gymsoft Logo" />
                    </span>
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
                <div className="inline-block h-40 w-40 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-red-700 align-[-0.25em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]" role="status">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loader;
