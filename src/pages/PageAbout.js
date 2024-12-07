import React from 'react';

import '../styles/style.css'

import { Home } from '../components/Home';

import articlesArr from '../articles.json'

export const PageAbout = () => {

  const arrForMainPage = articlesArr.slice(-10).reverse() // оставляем на главной странице только 10 статей и сначала показываем последние

  const articlesCode = arrForMainPage.map( article =>
    <Home key={article.id} info={article}  />
  )
          
    return (
    <section>
      <div className="head-content">
        <h2>How to improve your English with Learning English for everyone: </h2> <br></br>
        <ul>
          <li>Read two news articles every day.</li>
          <li>Read the news articles from the day before and check if you remember all new words.</li>
          <li>Answer the question under today’s news.</li>
          <li>Get points for every article you study.</li>
        </ul>
      </div> 

        <div className='center contentMainPage'>
          <h3>News in levels</h3> <br></br>
          <div className='articles'>
              {articlesCode}
          </div>
        </div>

    </section>  

      
    );
    
};
