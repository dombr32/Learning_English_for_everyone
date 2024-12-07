import React from 'react';
import {useParams} from "react-router-dom";

import { ArticleLevel2 } from '../components/ArticleLevel2';

import articlesArr from '../articles.json'

export const PageArticleLevel2 = () => {
          
  const params = useParams();

    const articleId=parseInt(params.arid);

    const articleData=articlesArr.find( c => c.id===articleId );

  return (

    <div>
       <ArticleLevel2 key={articleData.id} info={articleData}  />
    </div>
  );
    
};