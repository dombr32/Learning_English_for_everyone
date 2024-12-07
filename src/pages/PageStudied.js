import React from 'react';
import { useSelector } from 'react-redux';

import { Studied } from '../components/Studied';

import articlesArr from '../articles.json'

export const PageStudied = () => {

    const points = useSelector( state => state.points );

    const articlesCode = articlesArr.map( article =>
        <Studied key={article.id} info={article}  />
      ).reverse()

    return (

        <div>
            {!points && 
            <h2 className="head-content" style={ {fontSize: '38px', color: '#008080'} }>You haven't scored any points yet</h2>}
            {articlesCode}
        </div>
    )
}