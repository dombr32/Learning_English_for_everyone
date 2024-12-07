import { NavLink } from 'react-router-dom';

import './Level.css'

export const FilterWorld = ( {info} ) => {

    const paragraphs = info.level1.split("\n");

    const firstP = paragraphs.shift()

    const article = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))

    return (

        (info.tags=="world") && 
            <div className="projectItemLevel">
                <div className="articlesImg"><NavLink to={'/level1/'+info.id}><img src={info.image} alt={info.title}/></NavLink></div>
                <div>
                    <h2>{info.title}</h2>
                    <p>{firstP}</p>
                </div>

            </div>
        
    )

}
