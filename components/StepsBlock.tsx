import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "./ui/timeline";
import { Box, Container, Heading } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import { AiOutlineForm } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";

const StepsBlock = () => {
  return (
    <>
      <Box id="steps" mb={12}>
        <Container maxW="5xl">
          <Heading
            as="h2"
            textAlign="center"
            mb={12}
            fontSize={{ base: "3xl", md: "4xl" }}
            // color="gray.800"
          >
            Как это работает
          </Heading>
          <TimelineRoot>
            {/* Этап 1: Заполнение анкеты */}
            <TimelineItem>
              <TimelineConnector width="30px" height="30px">
                <AiOutlineForm />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="2xl" mb={1} lineHeight="25px">
                  Шаг 1: Расскажите о себе
                </TimelineTitle>
                <TimelineDescription mb={1} fontSize="sm" lineHeight="25px">
                  Ответьте на несколько вопросов о вашей коже и предпочтениях, а
                  также загрузите фото лица. Это поможет нам лучше понять ваши
                  потребности и создать индивидуальный план ухода.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            {/* Этап 2: Анализ ИИ */}
            <TimelineItem>
              <TimelineConnector width="30px" height="30px">
                <BsRobot />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="2xl" mb={1} lineHeight="25px">
                  Шаг 2: Персонализированный анализ
                </TimelineTitle>
                <TimelineDescription mb={1} fontSize="sm" lineHeight="25px">
                  Наш ИИ анализирует ваши данные, используя передовые
                  технологии, чтобы подобрать идеальные рекомендации по уходу за
                  вашей кожей.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            {/* Этап 3: Выдача результатов */}
            <TimelineItem>
              <TimelineConnector width="30px" height="30px">
                <LuCheck />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle fontSize="2xl" mb={1} lineHeight="25px">
                  Шаг 3: Ваши персональные рекомендации
                </TimelineTitle>
                <TimelineDescription fontSize="sm" lineHeight="25px">
                  Получите подробный отчет с рекомендациями, которые помогут вам
                  достичь здоровой кожи. Мы подберем подходящие косметические
                  средства и дадим советы по улучшению состояния кожи.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </TimelineRoot>
        </Container>
      </Box>
    </>
  );
};

export default StepsBlock;
