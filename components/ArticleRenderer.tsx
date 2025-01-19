import React from "react";
import { Heading, Text, Link, List, Box, Image } from "@chakra-ui/react";
import {
  ArticleContent,
  ArticleParagraph,
  ArticleHeading,
  ArticleList,
} from "../types/article";

interface ArticleRendererProps {
  content: ArticleContent[];
  coverImage: string;
}

const ArticleRenderer: React.FC<ArticleRendererProps> = ({
  content,
  coverImage,
}) => {
  return (
    <Box>
      {coverImage && (
        <Image
          src={coverImage}
          alt="Обложка статьи"
          mb={4}
          borderRadius="md"
          width="100%"
          maxHeight="300px"
          objectFit="cover"
        />
      )}
      {content.map((item, index) => {
        switch (item.type) {
          case "heading":
            return (
              <Heading
                key={index}
                // as={`h${item.level}`}
                size="lg"
                mt={4}
                mb={2}
              >
                {item.text}
              </Heading>
            );
          case "paragraph":
            return (
              <Text key={index} mb={4}>
                {item.parts.map((part, i) => {
                  if (part.type === "text") {
                    return <span key={i}>{part.text}</span>;
                  } else if (part.type === "link") {
                    return (
                      <Link key={i} href={part.url} color="teal.500">
                        {" "}
                        {/* isExternal */}
                        {part.text}
                      </Link>
                    );
                  }
                  return null;
                })}
              </Text>
            );
          case "list":
            return (
              <List.Root key={index} mb={4}>
                {item.items.map((listItem, i) => (
                  <List.Item key={i}>{listItem.text}</List.Item>
                ))}
              </List.Root>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default ArticleRenderer;
