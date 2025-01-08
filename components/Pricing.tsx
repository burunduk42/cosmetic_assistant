import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Heading,
  Text,
  Badge,
  Link,
} from "@chakra-ui/react";
import { MdCheckCircle, MdStar } from "react-icons/md";

const Pricing: React.FC = () => {
  return (
    <>
      <Box mb={16} id="pricing">
        <Container maxW="7xl">
          <Heading
            as="h2"
            textAlign="center"
            mb={12}
            fontSize={{ base: "3xl", md: "4xl" }}
            // color="gray.800"
          >
            Цены
          </Heading>
          <Flex justify="center" wrap="wrap" gap={8}>
            {/* Basic Plan Card */}
            <Box
              p={6}
              borderRadius="2xl"
              // boxShadow="xl"
              bg="white"
              w={{ base: "100%", md: "40%" }}
              display="flex"
              borderColor="gray.200"
              borderWidth="1px"
              flexDirection="column"
              justifyContent="space-between"
              position="relative" // Добавляем relative для позиционирования Badge
            >
              <Box>
                <Heading
                  as="h3"
                  fontSize="4xl"
                  mb={4}
                  color="teal.500"
                  fontWeight="bold"
                >
                  BASIC
                  <Text fontSize="md" color="teal.800" mt={2}>
                    Минимум
                  </Text>
                </Heading>

                <Text fontSize="2xl" mb={6} color="teal.800">
                  0 руб/мес
                </Text>
                <Stack color="gray.600">
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={1}>Связь с другими пользователями</Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={1}>Сбор данных и анализ кожи</Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={1}>Получение базовых рекомендаций по уходу</Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={1}>Доступ к новостным статьям о косметике</Text>
                  </Flex>
                </Stack>
              </Box>
              <Link href="/register" _hover={{ textDecoration: "none" }}>
                <Button
                  mt={8}
                  colorScheme="teal"
                  variant="outline"
                  w="full"
                  size="lg"
                >
                  Начать анализ
                </Button>
              </Link>
            </Box>

            {/* Price Plan Card */}
            <Box
              p={6}
              borderRadius="2xl"
              bg="teal.50"
              //   boxShadow="xl"
              borderColor="gray.200"
              borderWidth="1px"
              w={{ base: "100%", md: "40%" }}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              position="relative"
            >
              {/* Badge "Популярный" */}
              <Badge
                position="absolute"
                top={{ base: 0, md: 0 }}
                right={{ base: -4, md: -8 }}
                bg="teal.500"
                color="white"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                transform="rotate(16deg)"
                zIndex={1}
                fontWeight="bold"
              >
                Популярный
              </Badge>

              <Box>
                <Heading
                  as="h3"
                  fontSize="4xl"
                  mb={4}
                  color="teal.800"
                  fontWeight="bold"
                >
                  PRICE
                  <Text fontSize="md" color="teal.600" mt={2}>
                    Максимум возможностей
                  </Text>
                </Heading>
                <Text fontSize="2xl" mb={6} color="teal.800">
                  750 руб/мес
                </Text>
                <Stack color="teal.800">
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={1}>Все функции бесплатного тарифа</Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={2}>
                      Расширенные рекомендации с учетом индивидуальных
                      особенностей
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={2}>
                      Персонализированные планы ухода с пошаговыми инструкциями
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={2}>
                      Возможность отслеживания изменений с анализом прогресса
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={2}>
                      Доступ к функциям виртуального макияжа и пробам масок
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box width={5}>
                      <MdCheckCircle color="teal.500" />
                    </Box>
                    <Text ml={2}>
                      Эксклюзивные статьи и советы от экспертов в области
                      косметики
                    </Text>
                  </Flex>
                </Stack>
              </Box>
              <Link href="/register" _hover={{ textDecoration: "none" }}>
                <Button
                  mt={8}
                  colorScheme="teal"
                  w="full"
                  size="lg"
                  fontWeight="bold"
                >
                  Обновиться <MdStar />
                </Button>
              </Link>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Pricing;
