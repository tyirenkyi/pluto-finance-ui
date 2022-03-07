import React, { useState, useEffect } from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

function Dashboard() {
  return (
    <div className="h-screen bg-appBlack">
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white py-4 bg-slate-500">Pluto</div>
        <div className="col-span-9 text-white">
          <div className="flex flex-row justify-end py-4 bg-slate-400 items-center">
            <div className="mx-2">
              {" "}
              <WalletMultiButton />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 text-white bg-red-400 h-screen">SideBar</div>
        <div className="col-span-9 text-white h-screen">Main Content</div>
      </div>
    </div>
  );
}

export default Dashboard;
