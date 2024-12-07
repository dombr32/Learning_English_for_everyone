import React from 'react';

import { FilterWorld } from '../components/FilterWorld';

import articlesArr from '../articles.json'

export const PageWorld = () => {

    const articlesCode = articlesArr.map( article =>
        <FilterWorld key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}