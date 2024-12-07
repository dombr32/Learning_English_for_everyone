import React from 'react';

import { FilterNature } from '../components/FilterNature';

import articlesArr from '../articles.json'

export const PageNature = () => {

    const articlesCode = articlesArr.map( article =>
        <FilterNature key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}