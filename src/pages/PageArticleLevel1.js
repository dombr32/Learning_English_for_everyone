import React from 'react';
import {useParams} from "react-router-dom";

import { ArticleLevel1 } from '../components/ArticleLevel1';

import articlesArr from '../articles.json'

export const PageArticleLevel1 = () => {
          
  const params = useParams();
    // console.log(useParams());

    const articleId=parseInt(params.arid);

    const articleData=articlesArr.find( c => c.id===articleId );


  // const articlesCode = articlesArr.map( article =>
  //   <Article key={article.id} info={article}  />
  // )

  return (

    <div>
       <ArticleLevel1 key={articleData.id} info={articleData}  />
    </div>
  );
    
};