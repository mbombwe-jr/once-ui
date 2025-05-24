"use client";
import { NavIcon, Flex, Text, Row, Column, Logo, ToggleButton } from "@/once-ui/components";
import { useState } from "react";

export default function NavIconToggle() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Column fillWidth>
      <Flex 
        paddingX="20" 
        paddingY="8" 
        background="surface"
        border="surface"
        radius="l" 
        horizontal="space-between" 
        vertical="center"
        fillWidth
      >
        <Logo wordmark={false}/>
        <NavIcon 
          isActive={isActive} 
          onClick={handleClick} 
          aria-label="Toggle navigation menu"
          aria-expanded={isActive}
          aria-controls="demo-nav"
        />
      </Flex>
      
      {isActive && (
        <Column 
          id="demo-nav"
          padding="16" 
          background="surface" 
          border="surface"
          radius="l" 
          marginTop="8"
          fillWidth
          gap="8"
        >
          <ToggleButton fillWidth horizontal="start" size="l">
            Home
          </ToggleButton>
          <ToggleButton fillWidth horizontal="start" size="l">
            Products
          </ToggleButton>
          <ToggleButton fillWidth horizontal="start" size="l">
            About
          </ToggleButton>
          <ToggleButton fillWidth horizontal="start" size="l">
            Contact
          </ToggleButton>
        </Column>
      )}
    </Column>
  );
}