"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  IconButton,
  useBreakpointValue,
  Stack,
  Collapsible,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import RunningLine from "./RunningLine";
import logotype from "../public/var 1 svg.svg";

// Словарь с ссылками
const menuLinks = [
  { label: "Главная", href: "/" },
  { label: "Как это работает", href: "/#steps" },
  { label: "Цены", href: "/#pricing" },
  { label: "Пройти анкету", href: "/recomendations" },
  { label: "Анализ состава", href: "/worksheet" },
];

const MyMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Определяем, является ли устройство мобильным
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box
        bg="bg"
        py={5}
        position="relative"
        borderBottomWidth="1px"
        borderColor="gray.200"
        overflow="hidden"
      >
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Flex align="center" justify="space-between">
            {/* Логотип */}
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <Box>
                <Image
                  src={logotype}
                  alt="Cosmetic assistant logo"
                  width={168}
                />
              </Box>
            </Link>

            {/* Ссылки по центру (скрываются на мобильных устройствах) */}
            <Flex align="center" gap={8} display={{ base: "none", md: "flex" }}>
              {menuLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  color="gray.700"
                  _hover={{ textDecoration: "none", color: "teal.500" }}
                >
                  {link.label}
                </Link>
              ))}
            </Flex>

            {/* Кнопка "Начать анализ" (скрывается на мобильных устройствах) */}
            <Link href="/register" _hover={{ textDecoration: "none" }}>
              <Button
                colorScheme="teal"
                size="md"
                display={{ base: "none", md: "block" }}
                _hover={{ bg: "teal.600" }}
                transition="all 0.2s"
              >
                Начать анализ
              </Button>
            </Link>

            {/* Иконка "бургера" для мобильных устройств */}
            {isMobile && (
              <IconButton
                aria-label="Открыть меню"
                onClick={toggleMenu}
                variant="outline"
              >
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </IconButton>
            )}
          </Flex>

          {/* Выпадающее меню для мобильных устройств */}
          {isMobile && (
            <Collapsible.Root open={isOpen}>
              <Collapsible.Content>
                <Stack
                  mt={2}
                  align="center"
                  display={{ base: "flex", md: "none" }}
                >
                  {menuLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      color="gray.700"
                      my={1}
                      _hover={{ textDecoration: "none", color: "teal.500" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/register" _hover={{ textDecoration: "none" }}>
                    <Button
                      colorScheme="teal"
                      size="md"
                      w="full"
                      _hover={{ bg: "teal.600" }}
                      transition="all 0.2s"
                    >
                      Начать анализ
                    </Button>
                  </Link>
                </Stack>
              </Collapsible.Content>
            </Collapsible.Root>
          )}
        </Container>
      </Box>
    </>
  );
};

export default MyMenu;
