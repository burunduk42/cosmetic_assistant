export interface ArticleContentPart {
    type: "text" | "link";
    text: string;
    url?: string;
  }
  
  export interface ArticleParagraph {
    type: "paragraph";
    parts: ArticleContentPart[];
  }
  
  export interface ArticleHeading {
    type: "heading";
    level: number;
    text: string;
  }
  
  export interface ArticleList {
    type: "list";
    items: ArticleContentPart[];
  }
  
  export type ArticleContent = ArticleParagraph | ArticleHeading | ArticleList;
  
  export interface Article {
    id: string;
    title: string;
    coverImage: string;
    content: ArticleContent[];
    date: string;
  }