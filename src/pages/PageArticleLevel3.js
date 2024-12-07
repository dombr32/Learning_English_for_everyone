import React from 'react';
import {useParams} from "react-router-dom";

import { ArticleLevel3 } from '../components/ArticleLevel3';

import articlesArr from '../articles.json'

export const PageArticleLevel3 = () => {
          
  const params = useParams();

    const articleId=parseInt(params.arid);

    const articleData=articlesArr.find( c => c.id===articleId );

  return (

    <div>
       <ArticleLevel3 key={articleData.id} info={articleData}  />
    </div>
  );
    
};