import React from "react";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

function NavBar() {
  return (
    <div className=" col-span-10 text-white flex  flex-row justify-end py-4 bg-slate-400 items-center">
      <div className="mx-2">
        <WalletMultiButton />
      </div>
    </div>
  );
}

export default NavBar;
