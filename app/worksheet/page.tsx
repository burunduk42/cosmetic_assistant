"use client";
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Textarea,
  Stack,
  Fieldset,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import {
  NativeSelectRoot,
  NativeSelectField,
} from "../../components/ui/native-select";

const SurveyForm: React.FC = () => {
  const handleSurveySubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const age = formData.get("age") as string;
    const skinType = formData.get("skinType") as string;
    const products = formData.get("products") as string;
    const sensitivity = formData.get("sensitivity") as string;
    const cleansingFrequency = formData.get("cleansingFrequency") as string;
    const moisturizer = formData.get("moisturizer") as string;
    const skinCondition = formData.get("skinCondition") as string;
    const infoSource = formData.get("infoSource") as string;
    const makeupFrequency = formData.get("makeupFrequency") as string;
    const spfProduct = formData.get("spfProduct") as string;
    const interests = formData.get("interests") as string;

    let recommendations = [];

    // Рекомендации по типу кожи
    if (skinType === "сухая") {
      recommendations.push(
        "Для сухой кожи используйте кремы на масляной основе с добавлением гиалуроновой кислоты и сквалана. Это поможет удерживать влагу в коже. Обратите внимание на такие продукты, как CeraVe Hydrating Cream или The Ordinary Natural Moisturizing Factors."
      );
    } else if (skinType === "жирная") {
      recommendations.push(
        "Для жирной кожи выбирайте легкие, безмасляные увлажнители, такие как гелевые текстуры. Продукты с салициловой кислотой помогут контролировать блеск и предотвратить прыщи."
      );
    } else if (skinType === "комбинированная") {
      recommendations.push(
        "Рекомендуется использовать разные продукты для разных участков. Например, легкий гель для области Т-зоны и более насыщенный крем для щек."
      );
    }

    // Очищение кожи
    if (parseInt(cleansingFrequency) < 2) {
      recommendations.push(
        "Увеличьте частоту очищения лица до двух раз в день. Используйте мягкие очищающие средства, особенно если ваша кожа чувствительная."
      );
    } else {
      recommendations.push(
        "Хорошо, что вы регулярно очищаете кожу! Не забывайте о двойном очищении (масло + гель) для лучшего удаления макияжа и загрязнений."
      );
    }

    // Увлажнитель
    if (moisturizer === "") {
      recommendations.push(
        "Непременно используйте увлажнитель. На ночь выбирайте более насыщенные формулы для восстановления кожи."
      );
    }

    // Состояние кожи
    if (parseInt(skinCondition) < 5) {
      recommendations.push(
        "Поскольку вы оценили состояние кожи ниже 5, рассмотрите возможность консультации с дерматологом, чтобы выявить возможные проблемы и получить профессиональные рекомендации."
      );
    } else {
      recommendations.push(
        "Отлично, похоже, ваша кожа в неплохом состоянии! Продолжайте поддерживать её хорошими привычками."
      );
    }

    // Чувствительность
    if (sensitivity) {
      recommendations.push(
        "Если у вас есть чувствительность, избегайте агрессивных продуктов, таких как те, что содержат алкоголь или кислоты. Попробуйте использовать гипоаллергенные марки."
      );
    }

    // Рекомендации по SPF
    if (!spfProduct.toLowerCase().includes("spf")) {
      recommendations.push(
        "Обязательно используйте солнцезащитный крем с спектром защиты от UVA и UVB. Рекомендуется применять его ежедневно, даже в облачный день."
      );
    }

    // Интерес к натуральной косметике
    if (interests === "да") {
      recommendations.push(
        "Попробуйте использовать натуральные продукты, такие как алоэ вера, масла (кокосовое, жожоба) и маски на основе глины. Это может быть полезно для вашей кожи."
      );
    }

    // Вывод рекомендаций
    const recommendationsString = recommendations.join("\n");
    alert("Ваши рекомендации:\n" + recommendationsString);
  };

  return (
    <Flex
      minH="100vh" // Минимальная высота на весь экран
      align="center" // Центрирование по вертикали
      justify="center" // Центрирование по горизонтали
      bg="gray.50" // Светло-серый фон
      py={12}
    >
      <Box
        bg="white"
        p={8} // Внутренние отступы
        borderRadius="lg" // Закругленные углы
        boxShadow="md" // Тень
        maxW="600px" // Максимальная ширина формы
        w="100%" // Ширина формы на 100% от родителя
      >
        {/* Заголовок формы */}
        <Heading as="h1" fontSize="2xl" mb={6} textAlign="center">
          Анкета для рекомендаций по уходу за кожей
        </Heading>

        {/* Форма */}
        <form onSubmit={handleSurveySubmit}>
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              {/* Возраст */}
              <Fieldset.Content>
                <Field label="Ваш возраст">
                  <Input type="number" id="age" name="age" required />
                </Field>
              </Fieldset.Content>

              {/* Тип кожи */}
              <Fieldset.Content>
                <Field label="Тип кожи">
                  <NativeSelectRoot>
                    <NativeSelectField
                      name="skinType"
                      items={[
                        "сухая",
                        "жирная",
                        "комбинированная",
                        "нормальная",
                      ]}
                    />
                  </NativeSelectRoot>
                </Field>
              </Fieldset.Content>

              {/* Используемые продукты */}
              <Fieldset.Content>
                <Field label="Используемые продукты">
                  <Textarea
                    id="products"
                    name="products"
                    placeholder="Например, увлажняющий крем, очищающее средство..."
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Чувствительность */}
              <Fieldset.Content>
                <Field label="Есть ли у вас чувствительность к каким-либо продуктам?">
                  <Textarea
                    id="sensitivity"
                    name="sensitivity"
                    placeholder="Напишите, если да..."
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Частота очищения */}
              <Fieldset.Content>
                <Field label="Сколько раз в неделю вы очищаете лицо?">
                  <Input
                    type="number"
                    id="cleansingFrequency"
                    name="cleansingFrequency"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Ночной крем */}
              <Fieldset.Content>
                <Field label="Какой крем вы используете на ночь?">
                  <Input
                    type="text"
                    id="moisturizer"
                    name="moisturizer"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Состояние кожи */}
              <Fieldset.Content>
                <Field label="Как вы оцениваете состояние своей кожи по шкале от 1 до 10?">
                  <Input
                    type="number"
                    id="skinCondition"
                    name="skinCondition"
                    min="1"
                    max="10"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Источник информации */}
              <Fieldset.Content>
                <Field label="Ваш основной источник информации о косметических продуктах?">
                  <Input
                    type="text"
                    id="infoSource"
                    name="infoSource"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Частота макияжа */}
              <Fieldset.Content>
                <Field label="Сколько раз в неделю вы используете макияж?">
                  <Input
                    type="number"
                    id="makeupFrequency"
                    name="makeupFrequency"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* SPF-продукт */}
              <Fieldset.Content>
                <Field label="Какой тип SPF-продукта вы используете?">
                  <Input
                    type="text"
                    id="spfProduct"
                    name="spfProduct"
                    required
                  />
                </Field>
              </Fieldset.Content>

              {/* Интерес к натуральной косметике */}
              <Fieldset.Content>
                <Field label="Есть ли у вас интерес к натуральной косметике?">
                  <NativeSelectRoot>
                    <NativeSelectField name="interests" items={["да", "нет"]} />
                  </NativeSelectRoot>
                </Field>
              </Fieldset.Content>

              {/* Кнопка отправки */}
              <Button type="submit" colorScheme="teal" width="100%">
                Получить рекомендации
              </Button>
            </Stack>
          </Fieldset.Root>
        </form>
      </Box>
    </Flex>
  );
};

export default SurveyForm;
