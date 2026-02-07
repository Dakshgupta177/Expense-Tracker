import Searchbar from "./Searchbar";

function Profilebar ({profileName,plan, profilePhoto}) {
    return <div className="flex ml-1 bg-white w-20% h-15 justify-between">
        <div className="items-center justify-center">
            <h2>{profileName}</h2>
            <h4>Premium Plan</h4>
        </div>

        <div>
            <img src= {profilePhoto} alt="Profile" />
        </div>

    </div>
    
}
export default Profilebar;