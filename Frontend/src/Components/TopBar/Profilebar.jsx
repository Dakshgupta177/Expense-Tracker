
function Profilebar ({profileName,plan, profilePhoto}) {
    return <div className="flex ml-1 bg-white justify-between items-center gap-3">
        <div className="flex flex-col justify-center">

            <h2 className="text-gray-900 font-semibold leading-tight">{profileName}</h2>
            <h4 className="text-gray-500 text-sm">{plan} </h4>

        </div>

        <div>
            {/* <img className="w-8 h-8" src= {profilePhoto} alt="" />
             */}
             <img
                className="w-9 h-9 rounded-full object-cover cursor-pointer"
                src={profilePhoto}
                alt="Profile"
            />

        </div>

    </div>
    
}
export default Profilebar;