import { NavLink } from 'react-router-dom';

import './Level.css'

export const Level2 = ( {info} ) => {

    const paragraphs = info.level2.split("\n");

    const firstP = paragraphs.shift()

    const article = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))

    return (

         (info.level2) && 
            <div className="projectItemLevel">
                <div className="articlesImg"><NavLink to={'/level2/'+info.id}><img src={info.image} alt={info.title}/></NavLink></div>
                <div>
                    <h2>{info.title}</h2>
                    <p>{firstP}</p>
                </div>

            </div>
        
    )

}
