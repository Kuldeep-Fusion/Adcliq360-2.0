'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";// Adjust path as per your folder structure
const Header = ({ className }) => {
  const [active, setActive] = useState(null);
  
  return (

    <nav>
      <div className="flex justify-around bg-black m-auto items-center">
        <div className="logo">
          <Image src="/logo.png" alt="Logo" width={80} height={50} />
        </div>
        <ul className="nav-links">
        <div className={cn("bg-dark", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="#"
              src="/"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="#"
                  src="/"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="#"
        src="/"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="#"
        src="/"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>

        </ul>
        <Button>
          get Quote
        </Button>
      </div>

    </nav>
   
  );
};

export default Header;