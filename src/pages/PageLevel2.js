import React from 'react';

import { Level2 } from '../components/Level2';

import articlesArr from '../articles.json'

export const PageLevel2 = () => {

    const articlesCode = articlesArr.map( article =>
        <Level2 key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}