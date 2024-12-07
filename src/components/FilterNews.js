import { NavLink } from 'react-router-dom';

import './Level.css'

export const FilterNews = ( {info} ) => {

    const paragraphs = info.level1.split("\n");

    const firstP = paragraphs.shift()

    return (

        (info.tags=="news") && 
            <div className="projectItemLevel">
                <div className="articlesImg"><NavLink to={'/level1/'+info.id}><img src={info.image} alt={info.title}/></NavLink></div>
                <div>
                    <h2>{info.title}</h2>
                    <p>{firstP}</p>
                </div>

            </div>
        
    )

}
