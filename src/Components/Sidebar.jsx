import SidebarButton from "./SidebarButton";

function Sidebar() {
  return (
    <div className="bg-white w-55 min-h-screen flex flex-col justify-between px-4 py-6">

      {/* Top portion */}
      <div>

        {/* Logo */}
        
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            logo
          </div>

          <div>
            <h3 className="font-semibold text-lg">FinanceTracker</h3>
            <p className="text-sm text-gray-500">Personal Finance</p>
          </div>
        </div>

        {/* Main portion */}

        <div className="space-y-4">

           <SidebarButton icon={"/icons/dashboard.png"} text={"Dashboard"} />
           <SidebarButton icon={"/icons/transaction.png"} text={"Transactions"} />
           <SidebarButton icon={"/icons/budget.png"} text={"Budget"} />
           <SidebarButton icon={"/icons/report.png"} text={"Reports"} />
           <SidebarButton icon={"/icons/settings.png"} text={"Settings"} />

        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center content-center gap-3 hover:shadow-xl cursor-pointer rounded-4xl bg-blue-400 hover:bg-blue-500 hover:scale-103 duration-300 transition-transform h-8 -ml-1 mr-5 ">
          <span className="flex items-center content-center pl-2"><img className="w-4 h-4" src="/icons/plus.png" /></span>
          <span className="mb-1 -ml-1">Add Transaction</span>
        </div>

        <SidebarButton icon={"/icons/help.png"} text={"Help Center"} />
        <SidebarButton icon={"/icons/logout.png"} text={"Logout"} />
      </div>

    </div>
  );
}

export default Sidebar;

