"use client";
import { NavIcon, UserMenu, IconButton, Avatar, User, Flex, SmartLink, Text,ThemeSwitcher, Row, Column, Logo, ToggleButton, Icon, Media, Card, Button } from "@/once-ui/components";
import { useState } from "react";
import Sheetz from "@/components/studentSheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


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
        <div className="md:hidden block">
        <NavIcon 
          isActive={isActive} 
          onClick={handleClick} 
          aria-label="Toggle navigation menu"
          aria-expanded={isActive}
          aria-controls="demo-nav"
        />
        </div>
        <div className="md:block hidden">
        <Sheetz />
        </div>
        <ThemeSwitcher />

        
       <Row className="items-center gap-2"> 
        <Popover>
          <PopoverTrigger><IconButton icon="notification" size="m" variant="secondary" /></PopoverTrigger>
          <PopoverContent className="border-none">
            <Column background="surface" className="p-3 rounded-2xl">
              <Text variant="label-default-m">Notifications</Text>
              <Row className="justify-between">
                <Text variant="label-default-s">You have 3 new notifications</Text>
                <Icon name="bell" />
              </Row>
              <Button variant="primary" href="/dashboard/student/notification" fillWidth>View All</Button>
            </Column>
          </PopoverContent>
        </Popover>
        
        <UserMenu
           name="Christian Mmary"
           subline="Student"
           placement="bottom"
           avatarProps={{ }}
          dropdown={
           <Column gap="4" padding="4" minWidth={10}>
               <Button horizontal="start" fillWidth href="/dashboard/student/profile" prefixIcon="settings" id="arrow-button-2" variant="tertiary" >
                  setings
               </Button>
               <Button horizontal="start" fillWidth prefixIcon="logout" id="arrow-button-2" variant="tertiary" >
                   logout
               </Button>
                {/* <Button fillWidth hasPrefix={<Icon size="xs" onBackground="neutral-weak" name="settings" />} label="Settings" />
                <ClientOption fillWidth hasPrefix={<Icon size="xs" onBackground="neutral-weak" name="logout" />} label="Log out" /> */}
              </Column>
  }
/>
       </Row>
        
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
          <Column className="text-2xl font-bold gap-3">
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
          <a href="/dashboard/student/notifications">
            Notifications
          </a>
          </Column>

          <div className="h-screen w-full invisible pointer-events-none"></div>
        </Column>
        </div>
      )}
    </Column>
  );
}