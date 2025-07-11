import React from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "@/Article";

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard key={article.id} article={article} />;
      })}
    </div>
  );
}
