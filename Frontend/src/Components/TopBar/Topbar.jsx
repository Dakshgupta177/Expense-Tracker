import Profilebar from "./Profilebar";
import Searchbar from "./Searchbar";

function Topbar () {
    return <div className="ml-1 h-15 shadow-2xs w-full text-amber-50 flex">
        {/* <div className="flex items-center justify-between"> */}
            {/* <div> this is for search and dark mode bar</div> */}
            {/* <div>this is for the profilebar div</div> */}
            <Searchbar />
        {/* </div> */}
        {/* <Profilebar profileName={"Laraib"} profilePhoto={"/icons/profile.png"} /> */}
    </div>
}
export default Topbar;