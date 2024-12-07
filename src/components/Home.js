import { NavLink } from 'react-router-dom';

import './Home.css'

export const Home = ( {info} ) => {

    const paragraphs = info.level1.split("\n");

    const firstP = paragraphs.shift()

    return (

        <div className="projectItem">
            <div className="articlesImg"><img src={info.image} alt={info.title}/></div>
            <div className="btnType">
                { (info.level1) && 
                <NavLink to={'/level1/'+info.id} className="btn1">Level 1</NavLink>}

                { (info.level2) &&
                <NavLink to={'/level2/'+info.id} className="btn2">Level 2</NavLink>}
                
                { (info.level3) &&
                <NavLink to={'/level3/'+info.id} className="btn3">Level 3</NavLink>}
            </div>
            <h2>{info.title}</h2>
            <p>{firstP}</p>
        </div>

    )

}
