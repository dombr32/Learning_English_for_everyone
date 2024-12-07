import React from 'react';

import { FilterNews } from '../components/FilterNews';

import articlesArr from '../articles.json'

export const PageNews = () => {

    const articlesCode = articlesArr.map( article =>
        <FilterNews key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}