import React from 'react';

import { Level1 } from '../components/Level1';

import articlesArr from '../articles.json'

export const PageLevel1 = () => {

    const articlesCode = articlesArr.map( article =>
        <Level1 key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {articlesCode}
        </div>
    )
}