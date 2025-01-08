"use client";
import React from "react";
import Image from "next/image";
import { Box, Flex, Text, Container } from "@chakra-ui/react";
import logotype from "../public/var 1 svg.svg"; // Импортируем логотип

const FooterBlock: React.FC = () => {
  // Получаем текущий год
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="gray.50"
      py={6}
      borderTopWidth="1px"
      borderColor="gray.200"
      mt="auto" // Чтобы футер прижимался к низу страницы
    >
      <Container maxW="6xl" mx="auto">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Логотип */}
          <Box mb={{ base: 4, md: 0 }}>
            <Image src={logotype} alt="Косметический помощник" width={150} />
          </Box>

          {/* Копирайт */}
          <Text fontSize="sm" color="gray.600">
            © Косметический помощник, {currentYear}
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default FooterBlock;
