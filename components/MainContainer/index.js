import React from "react";
import Main from "../Main/index";
import Borrow from "../BorrowContainer";
import Trade from "../TradeContainer";

function MainContainer({ tabItems }) {
  console.log(tabItems);
  const SwitchTab = () => {
    switch (tabItems) {
      case "Dashboard":
        return <Main />;
      case "Borrow":
        return <Borrow />;
      case "Trade":
        return <Trade />;
      default:
        return <Main />;
    }
  };
  return <div className="col-span-10 text-white h-screen">{SwitchTab()}</div>;
}

export default MainContainer;
