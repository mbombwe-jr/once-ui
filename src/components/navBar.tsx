"use client";
import { NavIcon, User, Flex, SmartLink, Text,ThemeSwitcher, Row, Column, Logo, ToggleButton, Icon, Media } from "@/once-ui/components";
import { useState } from "react";

export default function NavIconToggle() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Column suppressHydrationWarning fillWidth className="position-fixed top-0 left-0 z-50">
      <Flex 
        paddingX="20" 
        paddingY="8" 
        
        className="bg-gradient-to-b from-black to-transparent backdrop-blur-xl  w-full"        
        horizontal="space-between" 
        vertical="center"
        fillWidth
      >
        
        <NavIcon 
          isActive={isActive} 
          onClick={handleClick} 
          aria-label="Toggle navigation menu"
          aria-expanded={isActive}
          aria-controls="demo-nav"
          className="md:hidden"
        />
        <ThemeSwitcher />
        
      </Flex>
      
      {isActive && (
        <div className="flex-1 h-screen bg-black/40 backdrop-blur-xl">
        <Column 
          id="demo-nav"
          className="backdrop-blur-md font-xl"
          padding="16" 
          marginTop="0"
          fillWidth
          gap="12"
        >
          <a  href="/dashboard/student" >
             Home
          </a>
          <a href="/dashboard/student/transactions">
            Transactions
          </a>
          <a href="/dashboard/student/invoices" >
            Invoices
          </a>
          <a href="/dashboard/student/profile" >
            Profile
          </a>
          <a href="/dashboard/student/invoices">
            invoices
          </a>

          <div className="h-screen w-full invisible pointer-events-none"></div>
        </Column>
        </div>
      )}
    </Column>
  );
}