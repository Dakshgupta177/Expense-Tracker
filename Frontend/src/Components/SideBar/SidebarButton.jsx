function SidebarButton ({icon , text}) {
    return <>
    <div className="flex items-center content-center gap-3 hover:shadow-amber-50 cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform ml-0.5 h-8 mr-5 ">
          <span className="flex items-center content-center pl-2"><img className="w-4 h-4" src={icon} /></span>
          <span className="mb-1 -ml-1">{text}</span>
        </div>
    </>
}
export default SidebarButton;