import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"; // adjust path if needed

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white h-16 flex items-center"> {/* Fixed height and background */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold">PLP Task Manager</h1>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex flex-row gap-6"> {/* Horizontal menu items */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Dashboard</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Tasks</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/tasks">My Tasks</NavigationMenuLink>
                <NavigationMenuLink href="/completed">Completed</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Profile</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/profile">Account</NavigationMenuLink>
                <NavigationMenuLink href="/settings">Settings</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
