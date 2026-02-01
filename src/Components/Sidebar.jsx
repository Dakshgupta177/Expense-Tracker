
function Sidebar() {
  return (
    <div className="bg-white w-55 min-h-screen flex flex-col justify-between px-4 py-6">

      {/* Top portion */}
      <div>

        {/* Logo */}
        
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src="/logo.png" alt="" className=""/>
          </div>

          <div>
            <h3 className="font-semibold text-lg">FinanceTracker</h3>
            <p className="text-sm text-gray-500">Personal Finance</p>
          </div>
        </div>

        {/* Main portion */}

        <div className="space-y-4">
           <div className="flex items-center content-center gap-3 hover:shadow-xl cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform h-8 ml-1  mr-5 ">
            <span className="flex items-center content-center ml-3"><img className="w-5 h-5 " src="/icons/dashboard.png" /></span>
            <span className="font-medium">Dashboard</span>
          </div>

           <div className="flex items-center content-center gap-3 hover:shadow-xl cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform h-8   mr-5 ">
            <span className="flex items-center content-center ml-3"><img className="w-6 h-6" src="/icons/transaction.png" /></span>
            <span className="font-medium">Transactions</span>
          </div>

           <div className="flex items-center content-center gap-3 hover:shadow-amber-50 cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform ml-0.5 h-8 mr-5 ">
            <span className="flex items-center content-center ml-3"><img className="w-5 h-5" src="/icons/budget.png" /></span>
            <span className="font-medium">Budget</span>
          </div>
           <div className="flex items-center content-center  gap-3 hover:shadow-xl cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform -ml-1.5 h-8 mr-5 ">
            <span className="flex items-center content-center pl-2 ml-3"><img className="w-5 h-5" src="/icons/report.png" /></span>
            <span className="font-medium">Reports</span>
          </div>

           <div className="flex items-center content-center gap-3 hover:shadow-xl cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-200 ease-in-out transition-transform h-8 ml-1 mr-5 ">
            <span className="flex items-center content-center ml-3"><img className="w-5 h-5" src="/icons/settings.png" /></span>
            <span className="font-medium text-black">Settings</span>
          </div>
        </div>
      </div>

      {/* Bottom poretion */}

      <div className="space-y-4">
        <div className="flex items-center content-center gap-3 hover:shadow-xl cursor-pointer rounded-4xl bg-blue-400 hover:bg-blue-500 hover:scale-103 duration-300 transition-transform h-8 -ml-1 mr-5 ">
          <span className="flex items-center content-center pl-2"><img className="w-4 h-4" src="/icons/plus.png" /></span>
          <span className="mb-1 -ml-1">Add Transaction</span>
        </div>

         <div className="flex items-center content-center gap-3 hover:shadow-amber-50 cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform ml-0.5 h-8 mr-5 ">
          <span className="flex items-center content-center ml-3"><img className="w-5 h-5" src="/icons/help.png" /></span>
          <span className="font-medium">Help Center</span>
        </div>

         <div className="flex items-center content-center gap-3 hover:shadow-amber-50 cursor-pointer rounded-4xl hover:bg-gray-50 hover:scale-102 duration-75 transition-transform ml-1 h-8 mr-5 ">
         <span className="flex items-center content-center ml-3"><img className="w-5 h-5" src="/icons/logout.png" /></span>
          <span className="font-medium">Logout</span>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;

