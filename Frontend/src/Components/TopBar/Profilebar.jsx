import Searchbar from "./Searchbar";

function Profilebar ({profileName, profilePhoto}) {
    return <>
    <div className="flex justify-center">
        <div>{profileName}</div>
        <div>{profilePhoto}</div>
        <Searchbar />
    </div>
    </>
}
export default Profilebar;