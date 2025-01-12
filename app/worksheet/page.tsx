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

    // Рекомендации по возрасту
    if (parseInt(age) < 18) {
      recommendations.push(
        "Для вашей кожи нужно использовать средства с более легкой текстурой."
      );
    } else if (parseInt(age) >= 40) {
      recommendations.push(
        "Уделите особое внимание увлажнению и антивозрастному уходу."
      );
    }

    // Рекомендации по типу кожи
    if (skinType === "сухая") {
      recommendations.push(
        "Краткие рекомендации для сухого типа кожи: Мягкое очищение: Умывайтесь тёплой водой, используйте нежные средства без сульфатов. Увлажнение: Наносите увлажняющий крем сразу после умывания, когда кожа еще влажная. Ищите кремы с керамидами, гиалуроновой кислотой, глицерином и маслам. Используйте увлажнители воздуха в помещении, особенно в зимний период. Защита: используйте солнцезащитный крем SPF 30+. Ограничение:Избегайте грубых скрабов и пилингов, особенно на спиртовой основе. Ограничьте использование ароматизированных продуктов и средств с агрессивными химикатами. Регулярность: Применяйте увлажняющие маски 1-2 раза в неделю. Не забывайте об увлажнении губ. Пить воду: достаточное количество жидкости. Краткий список продуктов: Очищение: Кремовое/масляное, молочко, мицеллярка. Увлажнение: Керамиды, гиалуронка, глицерин.  Масла: ши, кокос, жожоба, авокадо. Сквалан, пантенол. Маски: Кремовые, масляные, с гиалуронкой. Губы: Бальзамы с маслами и воском. Солнцезащита: С увлажнением, SPF 30+. Дополнительно: Овсянка, алоэ вера. Избегать: Спирты, сульфаты, отдушки, скрабы. Обратите внимание на такие продукты, как CeraVe Hydrating Cream или The Ordinary Natural Moisturizing Factors."
      );
    } else if (skinType === "жирная") {
      recommendations.push(
        "Краткие рекомендации для жирного типа кожи: Очищение: Дважды в день, гелем или пенкой. Тонизация: Бесспиртовым тоником. Увлажнение: Легким, нежирным кремом или гелем. Отшелушивание: Регулярно, 2-3 раза в неделю. Матирование: По необходимости (салфетки, пудра). Защита: Солнцезащитный крем SPF 30+, легкий. Не трогать: Не выдавливать прыщи. Краткий список продуктов: Очищение: Гели, пенки, муссы для жирной кожи. Тоники: Бесспиртовые, с салициловой или гликолевой кислотой. Увлажнение: Легкие гели, лосьоны, эмульсии. Отшелушивание: скрабы с использованием частиц, пилинги с кислотами AHA/BHA. Маски: Глиняные, с активированным углем. Солнцезащита: Флюиды, гели, матирующие кремы. Сыворотки: С ниацинамидом, цинком, салициловой кислотой. Избегать: Тяжелых, жирных кремов. Спирт в больших количествах. Чрезмерного отшелушивания.  Главное: Глубокое очищение, легкое увлажнение, матирование."
      );
    } else if (skinType === "комбинированная") {
      recommendations.push(
        "Краткие рекомендации для комбинированного типа кожи: Очищение: Мягкое, утром и вечером, с акцентом на Т-зону. Тонизация: Балансирующий тоник (без спирта). Увлажнение: легкий крем или лосьон, а также увлажняющий уход за поврежденными местами. Отшелушивание: Регулярно, 1-2 раза в неделю, особенно для Т-зоны. Матирование: По необходимости, для Т-зон. Наблюдение: Следить за балансом жирности/сухости, подстраивайте и корректируйте уход. Не перегружать: Выбирать легкие текстуры, обращайтесь к комедогенными продуктами. Краткий список продуктов: Очищение: Гель или пенка для комбинированной кожи, мицеллярная вода. Тоники: Бесспиртовые, с салициловой или гликолевой кислотой для Т-зон. Увлажнение: легкие кремы, лосьоны, эмульсии, отдельно увлажняющий крем для зоны увлажнения. Отшелушивание: Скрабы, пилинги, энзимные пудры, особенно для Т-зон. Маски: Глиняные для Т-зон, увлажнение для сухих участков. Сыворотки: С ниацинамидом, гиалуроновой кислотой, при необходимости. Солнцезащита: SPF 30+, с легкой текстурой. Главное: Баланс, умеренность, избирательность."
      );
    } else if (skinType === "нормальная") {
      recommendations.push(
        "Краткие рекомендации для нормального типа кожи: Очищение: Мягкое, умывание два раза в день (утром и вечером). Увлажнение: Ежедневно используйте легкий увлажняющий крем. Защита: Солнцезащитный крем SPF 30+ утром. Баланс: Не пересушивайте и не переувлажняйте кожу. Отшелушивание: Используйте мягкий пилинг 1-2 раза в неделю. Наблюдение: Следите за изменениями, корректируйте уход. Краткий список продуктов: Очищение: Пенка или гель для умывания, мицеллярная вода. Увлажнение: Легкий лосьон, эмульсия или крем. Солнцезащита: SPF 30+, легкая текстура. Отшелушивание: Мягкие скрабы, энзимные пилинги. Маски: Увлажняющие, очищающие (по необходимости). Сыворотки: Указания по конкретным проблемам (при необходимости). Главное: Легкость, сбалансированность, умеренность."
      );
    }

    // Очищение кожи
    if (parseInt(cleansingFrequency) < 7) {
      recommendations.push(
        "Увеличьте частоту очищения лица до двух раз в день. Используйте мягкие очищающие средства, особенно если ваша кожа чувствительная."
      );
    } else if (parseInt(cleansingFrequency) < 15) {
      recommendations.push(
        "Хорошо, что вы регулярно очищаете кожу! Не забывайте о двойном очищении (масло + гель) для лучшего удаления макияжа и загрязнений."
      );
    } else if (parseInt(cleansingFrequency) > 14) {
      recommendations.push(
        "Необходимо сократить частоту умываний до двух раз в день. Чрезмерное умывание может привести к пересушиванию кожи и снижению кожного барьера."
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
    } else if (parseInt(skinCondition) === 6) {
      recommendations.push(
        "Оценка 6 из 10 означает, что кожа нуждается в регулярном, продуманном уходе. Важно не только следовать общим рекомендациям, но и обращать внимание на реакцию кожи на различные продукты. При регулярном и правильном уходе состояние кожи может значительно улучшиться."
      );
    } else if (parseInt(skinCondition) === 5) {
      recommendations.push(
        "Оценка 5 из 10 означает, что кожа требует более внимательного и целенаправленного ухода. Важно использовать мягкие и смягчающие средства, защищать кожу от барьера и не забывать о защите от солнца. Также не помешает консультация с дерматологом."
      );
    } else if (parseInt(skinCondition) === 7) {
      recommendations.push(
        "Оценка 7 из 10 означает, что кожа находится в хорошем состоянии, но требует регулярного ухода для поддержания баланса и решения незначительных проблем. Внимательно следите за реакцией кожи на используемые продукты и корректируйте уход за ней."
      );
    } else if (parseInt(skinCondition) === 8) {
      recommendations.push(
        "Оценка 8 из 10 говорит о том, что кожа находится в очень хорошем состоянии. Продолжайте поддерживать здоровый образ жизни. Достаточный сон и управление стрессом важны для здоровья кожи. Соблюдайте регулярный уход, но не перегружайте кожу. Внимательно следите за реакцией кожи, если есть какие-либо изменения, скорректируйте уход."
      );
    } else if (parseInt(skinCondition) === 9) {
      recommendations.push(
        "Оценка 9 из 10 говорит о том, что кожа находится в практически идеальном состоянии. Ваша основная задача – удержать нынешнее состояние кожи и своевременно реагировать на небольшие изменения. Минимализм, мягкость и регулярность — главные помощники."
      );
    } else if (parseInt(skinCondition) === 10) {
      recommendations.push(
        "Отлично, похоже, ваша кожа в неплохом состоянии! Продолжайте поддерживать её хорошими привычками."
      );
    }

    // Чувствительность
    if (sensitivity === "да") {
      recommendations.push(
        "Уход за чувствительной кожей с непереносимостью компонентов требует особой осторожности и внимания к составу продуктов. Используйте продукты с простым, минималистичным составом, избегайте отдушек, красителей, спирта и других активных раздражителей. Не будьте осторожны с тестированием новых продуктов и следите за реакцией вашей кожи. В случае необходимости обратитесь к дерматологу. Вот некоторые ингредиенты, которые могут вызывать раздражение: Отдушки и ароматизаторы: Чаще всего вызывают раздражение. Спирт: Особый денатурированный спирт. Консерванты: парабены, феноксиэтанол и др. Красители: Синтетические красители. Эфирные масла: могут вызвать аллергию или раздражение. Некоторые кислоты: например, ретинол и высокие концентрации кислот AHA/BHA. Ланолин: Может быть переменное состояние."
      );
    } else if (sensitivity === "нет") {
      recommendations.push(
        "Ваша кожа не чувствительна, что дает вам большую свободу в выборе средств и методов ухода. Главное – это создать сбалансированную рутину, решить конкретные проблемы по мере их проявления, и не забывать о здоровом образе жизни. Слушайте свою кожу, будьте терпеливы и наслаждайтесь процессом."
      );
    }

    // Рекомендации по защите от солнца
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
