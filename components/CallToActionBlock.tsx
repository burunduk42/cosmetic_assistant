import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

const CallToActionBlock: React.FC = () => {
  return (
    <Box
      minHeight={{ base: "auto", md: "400px" }}
      bgColor="teal.500"
      borderRadius="20px"
      //   mb={12}
    >
      <Container maxW="7xl" height="100%">
        <Flex
          direction="column"
          align="center"
          justify="center" // Центрируем по вертикали
          textAlign="center"
          height="100%" // Занимаем всю высоту родителя
          py={{ base: "40px", md: "100px" }} // Отступы для центрирования на ПК, на мобильных — 0
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "5xl" }}
            mb={{ base: 6, md: 10 }}
            color="white" // Белый текст для контраста
          >
            Время начинать
          </Heading>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="whiteAlpha.800" // Полупрозрачный белый текст
            mb={8}
            maxW={{ base: "100%", md: "80%" }} // Ограничиваем ширину текста
          >
            {/* Задачи, проекты, канбан-доски, гант, календари, напоминания и
            уведомления в Телеге™ — всё это бесплатно в команде для тебя */}
            Профиль, анкета и получение рекомендаций с использованием ИИ - всё
            это бесплатно в Косметическом Помощнике для тебя
          </Text>
          <Link href="/register" _hover={{ textDecoration: "none" }}>
            <Button colorScheme="whiteAlpha" size="xl" variant="solid" px={10}>
              Начать анализ
            </Button>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToActionBlock;
