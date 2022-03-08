import React, { useState, useEffect } from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar/index";
import MainContainer from "../components/MainContainer/index";

const navItems = ["My Page", "Trade", "Borrow"];

function Dashboard() {
  const [tab, selectedTab] = useState("My Page");
  return (
    <div className="h-screen bg-appBlack">
      <div className="grid grid-cols-12">
        <div className="col-span-2 text-white py-4  mx-4">
          <img src="/pluto.svg" alt="" className="h-14" />
        </div>
        <NavBar />
      </div>
      <div className="grid grid-cols-12">
        <Sidebar handleContainer={selectedTab} />
        <MainContainer tabItems={tab} />
      </div>
    </div>
  );
}

export default Dashboard;
