import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { ModeToggle } from "../ui/mode-toggle";

function Navbar() {
  return (
    <div className="flex md:hidden">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <a href="/create-trip">
                  <Button variant="outline" className="w-full">
                    + Create Trip
                  </Button>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink>
                <a href="/my-trips">
                  <Button variant="outline" className="w-full">
                    My Trips
                  </Button>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink className="flex justify-center w-full" >
                < ModeToggle />
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
