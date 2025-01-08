"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
const RunningLine: React.FC = () => {
  return (
    <>
      {/* Бегущая строка с использованием CSS анимации */}
      <Box
        bg="teal.500"
        color="white"
        py={3}
        overflow="hidden"
        whiteSpace="nowrap"
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 25s linear infinite",
          }}
        >
          РЕГИСТРАЦИЯ ОТКРЫТА. НЕ УПУСТИТЕ ВОЗМОЖНОСТЬ ПОПРОБОВАТЬ СЕРВИС ПРЯМО
          СЕЙЧАС #КРАСОТА #ЗДОРОВЬЕ #ТЕХНОЛОГИИ
        </div>
      </Box>

      {/* CSS Keyframes для анимации */}
      <style jsx>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default RunningLine;
