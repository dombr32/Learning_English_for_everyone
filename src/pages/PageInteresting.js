import React from 'react';

import { FilterInteresting } from '../components/FilterInteresting';

import articlesArr from '../articles.json'

export const PageInteresting = () => {

    const articlesCode = articlesArr.map( article =>
        <FilterInteresting key={article.id} info={article}  />
      )

    return (

        <div>
            {articlesCode}
        </div>
    )
}