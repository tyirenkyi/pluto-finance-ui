import React from "react";

const navItems = ["My Page", "Trade", "Borrow"];

function SideBar({ handleContainer }) {
  return (
    <div className="col-span-2 text-white px-4 flex flex-col align-center justify-evenly   pt-5 bg-red-400 h-screen ">
      <div className="flex flex-col color-white">
        {navItems.map((item, index) => {
          return (
            <div key={index} className="flex flex-row justify-between py-2">
              <p
                onClick={() => handleContainer(item)}
                className="text-gray-600 cursor-pointer hover:text-text-sky-600"
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="text-white">Docs</h1>
        <div className="text-white">Social Media</div>
      </div>
    </div>
  );
}

export default SideBar;
