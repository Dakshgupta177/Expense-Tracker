import Profilebar from "./Profilebar";
import Searchbar from "./Searchbar";

function Topbar () {
    return <div className="ml-1 h-15 shadow-2xs w-full flex">
            <Searchbar />
            <Profilebar 
            profileName={"Md Laraib Alam"}
            // profilePhoto={"/icons/user.png"}
            />

    </div>
}
export default Topbar;