"use client";
import React from "react";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";

import { Button, Fieldset, Input, Stack } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { PasswordInput } from "../../components/ui/password-input";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "../../components/ui/native-select";

const Home: React.FC = () => {
  return (
    <Flex
      minH="100vh" // Минимальная высота на весь экран
      align="center" // Центрирование по вертикали
      justify="center" // Центрирование по горизонтали
      bg="gray.50" // Светло-серый фон
    >
      <Box
        bg="white"
        p={8} // Внутренние отступы
        borderRadius="lg" // Закругленные углы
        boxShadow="md" // Тень
        maxW="500px" // Максимальная ширина формы
        w="100%" // Ширина формы на 100% от родителя
      >
        {/* Заголовок формы */}
        <Heading as="h1" fontSize="2xl" mb={6} textAlign="center">
          Регистрация
        </Heading>

        {/* Форма */}
        <form>
          <Fieldset.Root size="lg" maxW="md">
            <Fieldset.Content>
              <Field label="Имя пользователя">
                <Input name="username" type="text" />
              </Field>
            </Fieldset.Content>
            <Fieldset.Content>
              <Field label="Электронная почта">
                <Input name="email" type="email" />
              </Field>
            </Fieldset.Content>
            <Fieldset.Content>
              <Field label="Пароль">
                <PasswordInput name="password" />
              </Field>
            </Fieldset.Content>

            <Button type="submit" width="100%">
              Зарегистрироваться
            </Button>
          </Fieldset.Root>
        </form>

        {/* Ссылка на регистрацию */}
        <Text mt={4} textAlign="center">
          Уже зарегистрированны?{" "}
          <Link color="teal.500" href="/login">
            Войдите
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Home;
