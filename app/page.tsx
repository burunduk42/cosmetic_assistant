import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import Pricing from "../components/Pricing";
import CallToActionBlock from "../components/CallToActionBlock";
import StepsBlock from "../components/StepsBlock";
import NewsBlock from "../components/NewsBlock";
import RunningLine from "../components/RunningLine";

import girlWithMagnifyingGlass from "../public/girl_with_magnifying_glass.jpeg";
// import RunningLine from "../components/RunningLine";

export default function Home() {
  return (
    <>
      <RunningLine />
      <Box bg="white" py={20} position="relative" overflow="hidden" mb={12}>
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="to-r"
          gradientFrom="teal.100"
          gradientTo="purple.100"
          opacity="0.5"
          zIndex={0}
        />
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 8, md: 12 }}
          >
            {/* Левая часть с текстом и кнопкой */}
            <Box
              flex={1.3}
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: 6, md: 0 }}
              animation="fadeIn" // Применяем анимацию fadeIn
            >
              {/* Заголовок с градиентом */}
              <Heading
                as="h1"
                size={{ base: "4xl", md: "6xl" }}
                mb={7}
                lineHeight="1.2"
                bgGradient="to-r"
              >
                Красота в деталях
              </Heading>
              {/* Подзаголовок с акцентом */}
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                mb={10}
                // color="gray.600"
                maxW={{ md: "80%" }}
              >
                Инновационный сервис для ухода за кожей с использованием ИИ.
                Получите персонализированные рекомендации всего за минуту.
              </Text>
              {/* Контейнер для кнопок */}
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={4}
                align={{ base: "center", md: "flex-start" }}
              >
                <Link href="/register" _hover={{ textDecoration: "none" }}>
                  <Button
                    colorScheme="teal"
                    size="xl"
                    px={12}
                    _hover={{ bg: "teal.600" }}
                    transition="all 0.2s"
                    color="white"
                    boxShadow="xl"
                  >
                    Начать анализ
                  </Button>
                </Link>

                <Link
                  // key={index}
                  href="#steps"
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    variant="outline"
                    size="xl"
                    px={12}
                    _hover={{ bg: "bg" }}
                    borderColor="gray.500"

                    // color="teal.500"
                  >
                    Узнать больше
                  </Button>
                </Link>
              </Flex>
            </Box>

            {/* Правая часть с изображением */}
            <Box
              flex={1}
              ml={{ md: 10 }}
              width="100%"
              position="relative"
              minH={{ base: "200px", md: "400px" }}
              borderRadius="2xl" // Более скругленные углы
              overflow="hidden"
              boxShadow="2xl" // Более выраженная тень
              animation="fadeIn 1s ease-out 0.5s" // Анимация с задержкой
            >
              <Image
                src={girlWithMagnifyingGlass}
                alt="Девушка с идеальной кожей"
                fill
                style={{ objectFit: "cover" }}
                priority // Ускорение загрузки изображения
              />
            </Box>
          </Flex>
        </Container>
      </Box>
      <StepsBlock />
      <Pricing />
      <NewsBlock />
      <CallToActionBlock />

      {/* <Box marginBottom={5000}></Box> */}
    </>
  );
}
