"use client";
import React from "react";
import { Box, Heading, Text, Link, Flex, Grid } from "@chakra-ui/react";
import Image from "next/image";
import tempBackground from "../public/temp_background.png";

// Словарь с новостями
const newsItems = [
  {
    id: 1,
    title: "Просто заголовок новости номер один",
    date: "9 января, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eros sollicitudin, ultricies urna in, laoreet mauris. ",
    imageUrl: tempBackground,
  },
  {
    id: 2,
    title: "Как поставить цели на 2025 год",
    date: "7 января, 2025",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eros sollicitudin, ultricies urna in, laoreet mauris. ",
    imageUrl: tempBackground,
  },
  {
    id: 3,
    title: "Просто заголовок новости номер три",
    date: "27 декабря, 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum eros sollicitudin, ultricies urna in, laoreet mauris. ",
    imageUrl: tempBackground,
  },
];

const NewsBlock: React.FC = () => {
  return (
    <Box maxW="6xl" mx="auto" mb={12}>
      <Heading
        as="h2"
        textAlign="center"
        mb={12}
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Новости
      </Heading>

      {/* Сетка для карточек */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} // 1 колонка на мобильных, 3 на десктопах
        gap={6} // Отступ между карточками
      >
        {newsItems.map((news) => (
          <Link
            key={news.id}
            // href={`/news/${news.id}`}
            href=""
            _hover={{ textDecoration: "none" }}
          >
            <Box
              bg="white"
              borderRadius="lg"
              borderColor="gray.200"
              borderWidth="1px"
              //   bgColor="gray.50"
              //   boxShadow="md"
              _hover={{ boxShadow: "sm" }}
              transition="all 0.2s"
              overflow="hidden"
              height="100%"
            >
              {/* Изображение */}
              <Box
                position="relative"
                width="100%"
                height="200px" // Фиксированная высота изображения
                overflow="hidden"
              >
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  fill // Заполняет контейнер
                  style={{ objectFit: "cover" }} // Обрезает изображение по размеру контейнера
                  unoptimized // Отключаем оптимизацию для внешних изображений
                />
              </Box>

              {/* Текстовая часть */}
              <Box p={4}>
                {/* Заголовок */}
                <Heading as="h2" fontSize="xl" mb={2} textAlign="left">
                  {news.title}
                </Heading>

                {/* Дата */}
                <Text fontSize="sm" color="gray.500" mb={2}>
                  {news.date}
                </Text>

                {/* Описание */}
                <Text fontSize="md" color="gray.700" textAlign="left">
                  {news.description}
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsBlock;
