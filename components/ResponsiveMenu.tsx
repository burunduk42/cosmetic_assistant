"use client";

import React, { useState } from "react";
import {
  Box,
  Link,
  Text,
  Stack,
  Flex,
  Icon,
  FlexProps,
} from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";

// Компонент Logo
const Logo = () => {
  return (
    <Box>
      <Text fontSize="lg" fontWeight="bold" color="black">
        Company
      </Text>
    </Box>
  );
};

// Пропсы для MenuToggle
interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

// Компонент MenuToggle
const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
    </Box>
  );
};

// Пропсы для MenuItem
interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

// Компонент MenuItem
const MenuItem: React.FC<MenuItemProps> = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

// Пропсы для MenuLinks
interface MenuLinksProps {
  isOpen: boolean;
}

// Компонент MenuLinks
const MenuLinks: React.FC<MenuLinksProps> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        // spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        <MenuItem>Beranda</MenuItem>
        <MenuItem to="#">Produk</MenuItem>
        <MenuItem to="#">Profil Perusahaan</MenuItem>
        <MenuItem to="#">Layanan</MenuItem>
        <MenuItem to="#">Hubungi Kami</MenuItem>
      </Stack>
    </Box>
  );
};

// Пропсы для NavBarContainer
interface NavBarContainerProps extends FlexProps {
  children: React.ReactNode;
}

// Компонент NavBarContainer
const NavBarContainer: React.FC<NavBarContainerProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      bg={"transparent"}
      color={"gray.600"}
      {...rest}
    >
      {children}
    </Flex>
  );
};

// Основной компонент Header
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo />
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default Header;
