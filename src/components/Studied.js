import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import './Level.css'

export const Studied = ( {info} ) => {

    const paragraphs = info.level1.split("\n");

    const firstP = paragraphs.shift()

    const studiedArticles = useSelector( state => state.articlesId );
    const levelArticles = useSelector( state => state.articlesIdLevel );

    return (

         (studiedArticles.includes(info.id)) && 
            <div className="projectItemLevel">
                <div className="articlesImg"><NavLink to={'/level1/'+info.id}><img src={info.image} alt={info.title}/></NavLink></div>
                <div>
                    <h2>{info.title}</h2>
                    <p>{firstP}</p>
                    <div className="btnType">
                        { (levelArticles.includes(info.id + 'lvl1')) && 
                        <NavLink to={'/level1/'+info.id} className="btn1">Level 1</NavLink>}

                        { (levelArticles.includes(info.id + 'lvl2')) &&
                        <NavLink to={'/level2/'+info.id} className="btn2">Level 2</NavLink>}
                        
                        { (levelArticles.includes(info.id + 'lvl3')) &&
                        <NavLink to={'/level3/'+info.id} className="btn3">Level 3</NavLink>}
                    </div>
                </div>

            </div>
        
    )

}
