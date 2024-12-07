import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Article.css'

export const ArticleLevel1 = ( {info} ) => {

    const paragraphs = info.level1.split("\n");

    const article = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))

    function getLinkClass(obj) {
        let className="PageLink";
        if ( obj.isActive )
            className+=" ActivePageLevel";
        return className;
    }

    const dispatch = useDispatch();
    const levelArticles = useSelector( state => state.articlesIdLevel );

    const [enabledBut, setEnabledBut] = useState(); //добавляем для перерендера страницы

    function completeArticle() {
        dispatch( {
          type: 'study_the_article_level1',
          id: info.id,
          idLevel: info.id + 'lvl1'
        } );

        if (levelArticles.includes(info.id + 'lvl1')) setEnabledBut(true);
      };
      
    return (


        <div className="content">
            <div>   
                
                <h2 className="nameArticle">{info.title}</h2>
                <p className='textArticle'>{article}</p>
                <img src={info.image} alt={info.title}/>
                <h3>{info.question}</h3>
                <button disabled={(levelArticles.includes(info.id + 'lvl1')) ? true : false} onClick={completeArticle} >I studied</button>
            </div>
            <menu>
                <ul>
                    {info.level1 &&
                    <li><NavLink to={'/level1/'+info.id} end className={getLinkClass}>Level 1</NavLink></li>}
                    {info.level2 && 
                    <li><NavLink to={'/level2/'+info.id} end className={getLinkClass}>Level 2</NavLink></li>}
                    {info.level3 && 
                    <li><NavLink to={'/level3/'+info.id} end className={getLinkClass}>Level 3</NavLink></li>}       
                </ul>
            </menu>
        </div>


    )
}