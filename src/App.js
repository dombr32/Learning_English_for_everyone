import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, NavLink } from 'react-router-dom';

import { PagesRouter } from './routes/PagesRouter';
import { Points } from './components/Points';
import {articlesReducer} from './redux/articlesReducer';

import './styles/style.css'


const store=createStore(articlesReducer);

//выделяем открытую в данный момент страницу
function getLinkClass(obj) {
  let className="PageLink";
  if ( obj.isActive )
    className+=" ActivePageLink";
  return className;
}

export const App = () => {

  const [styleEnabled, setStyle] = useState(false);
  
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className="wrapper">

      {/* container header */}
      <div className='center'>
        <header>
          <div className='logo'>
            <NavLink to='/'><img src="images/favicon.png" alt="logo"/></NavLink>
            <NavLink to='/' className='logoText'><p>Learning English for everyone</p></NavLink>
          </div>

          
          <NavLink to='/studied' className='points'><Points/></NavLink>
          

          <nav className={styleEnabled ? "menu" : "menu menu-show" }>
            <ul>
              <li><NavLink to="/level1" end className={getLinkClass}>Level 1</NavLink></li>
              <li><NavLink to="/level2" end className={getLinkClass}>Level 2</NavLink></li>
              <li><NavLink to="/level3" end className={getLinkClass}>Level 3</NavLink></li>
              <li className='topics'><a href="">Topics <span>&#9660;</span></a>
                <ul>
                  <li><NavLink to="/topics/world">world</NavLink></li>
                  <li><NavLink to="/topics/interesting">interesting</NavLink></li>
                  <li><NavLink to="/topics/nature">nature</NavLink></li>
                  <li><NavLink to="/topics/news">news</NavLink></li>
                </ul>
              </li>
              
              <li className='contactUs'><a href="#contactUs">Contact us</a></li>
              
              {/* <li>
                <div class="d1">
                  <form>
                    <input type="text" placeholder="Search..."/>
                    <button type="submit"></button>
                  </form>
                </div>
              </li> */}
            </ul>
          </nav> 
          <div class="burger" onClick={ ()=> {setStyle(!styleEnabled)} }>
            <img src="images/burger.png" alt="burger"/>
          </div>
          </header>

          <PagesRouter />
            
        </div>



    {/* Footer */}
        <footer>
            <div  className='center' id="contactUs">
            <span><a href="tel:+375293075997"><img src="images/contact-1.png" alt="phone"/></a></span>
            <span><a href="https://t.me/dambrouski"><img src="images/Telegram.png" alt="Tg"/></a></span>
            <span><a href="https://www.linkedin.com/in/roma-dambrouski"><img src="images/LinkedIn.png" alt="LinkedIn"/></a></span>
            <span><a href="mailto:dombrrom@gmail.com"><img src="images/contact-2.png" alt="mail"/></a></span>
            </div>
        </footer>

      </div>
      </Provider>
    </BrowserRouter>
  );
}
