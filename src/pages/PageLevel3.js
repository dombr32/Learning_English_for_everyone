import React from 'react';

import { Level3 } from '../components/Level3';

import articlesArr from '../articles.json'

export const PageLevel3 = () => {

    const articlesCode = articlesArr.map( article =>
        <Level3 key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}