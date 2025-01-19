"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  Flex,
  List,
  Container,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import articlesData from "../../../articles/CA_articles.json";
import NextLink from "next/link";
import NextImage from "next/image";

interface PageParams {
  slug: string;
}

const ArticleDetail: React.FC = () => {
  const params = useParams(); // Используем useParams для получения параметров
  const { slug } = params; // Деструктурируем slug из params
  const [article, setArticle] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    // Проверяем, что slug существует и это строка
    if (slug) {
      const foundArticle = articlesData.find((article) => article.id === slug);
      setArticle(foundArticle);
      setLoading(false); // Загрузка завершена
    }
  }, [slug]);

  // Если данные загружаются, показываем индикатор загрузки
  if (loading) {
    return (
      <Box
        p={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  // Если статья не найдена после завершения загрузки
  if (!article) {
    return (
      <Flex minH="700px" align="center" justify="center">
        <Box p={4}>
          <Heading as="h1" size="xl" mb={4}>
            Извините, статья не найдена
          </Heading>
          <NextLink href="/#news" passHref>
            <ChakraLink
              as="span"
              color="blue.500"
              mb={4}
              display="inline-block"
            >
              &larr; К списку новостей
            </ChakraLink>
          </NextLink>
        </Box>
      </Flex>
    );
  }

  return (
    <Container maxW="7xl" position="relative" zIndex={1}>
      <Box p={4}>
        <NextLink href="/#news" passHref>
          <ChakraLink as="span" color="blue.500" mb={4} display="inline-block">
            &larr; Назад к списку новостей
          </ChakraLink>
        </NextLink>

        <Heading as="h1" size="3xl" mb={4} mt={4}>
          {article.title}
        </Heading>

        <Text fontSize="sm" color="gray.500" mb={4}>
          Дата публикации: {article.date}
        </Text>

        {/* Контейнер для NextImage */}
        <Box mb={6} position="relative" width="100%" height="500px">
          <NextImage
            src={article.coverImage}
            alt={article.title}
            fill
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </Box>

        {article.content.map((contentBlock: any, index: number) => {
          switch (contentBlock.type) {
            case "heading":
              return (
                <Heading
                  key={index}
                  size={
                    contentBlock.level === 1
                      ? "xl"
                      : contentBlock.level === 2
                      ? "lg"
                      : "md"
                  }
                  mt={contentBlock.level === 1 ? 6 : 4}
                  mb={2}
                >
                  {contentBlock.text}
                </Heading>
              );
            case "paragraph":
              return (
                <Text key={index} fontSize="md" mb={4}>
                  {contentBlock.parts.map((part: any, partIndex: number) => {
                    if (part.type === "text") {
                      return <span key={partIndex}>{part.text}</span>;
                    } else if (part.type === "link") {
                      return (
                        <ChakraLink
                          key={partIndex}
                          href={part.url}
                          color="blue.500"
                        >
                          {part.text}
                        </ChakraLink>
                      );
                    }
                    return null;
                  })}
                </Text>
              );
            case "list":
              return (
                <List.Root key={index} mb={4}>
                  {contentBlock.items.map((item: any, itemIndex: number) => (
                    <List.Item key={itemIndex}>{item.text}</List.Item>
                  ))}
                </List.Root>
              );
            default:
              return null;
          }
        })}
      </Box>
    </Container>
  );
};

export default ArticleDetail;
