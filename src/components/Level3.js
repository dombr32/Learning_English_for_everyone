import { NavLink } from 'react-router-dom';
import './Level.css'

export const Level3 = ( {info} ) => {

    const paragraphs = info.level3.split("\n");

    const firstP = paragraphs.shift()


    return (

         (info.level3) && 
            <div className="projectItemLevel">
                <div className="articlesImg"><NavLink to={'/level3/'+info.id}><img src={info.image} alt={info.title}/></NavLink></div>
                <div>
                    <h2>{info.title}</h2>
                    <p>{firstP}</p>
                </div>

            </div>
        
    )

}
