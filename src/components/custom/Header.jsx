import { Button } from "@/components/ui/Button";
import React from "react";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.svg" />
      <div>
        <Button>Connectez vous</Button>
      </div>
    </div>
  );
}

export default Header;
