import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageAbout } from '../pages/PageAbout';
import { PageLevel1 } from '../pages/PageLevel1';
import { PageLevel2 } from '../pages/PageLevel2';
import { PageLevel3 } from '../pages/PageLevel3';

import { PageStudied } from '../pages/PageStudied';

import { PageWorld } from '../pages/PageWorld';
import { PageInteresting } from '../pages/PageInteresting';
import { PageNature } from '../pages/PageNature';
import { PageNews } from '../pages/PageNews';

import { PageArticleLevel1 } from '../pages/PageArticleLevel1';
import { PageArticleLevel2 } from '../pages/PageArticleLevel2';
import { PageArticleLevel3 } from '../pages/PageArticleLevel3';

// import { PageSearch } from '../pages/PageSearch';


export const PagesRouter = () => {
          
    return (
      <Routes>
        <Route path="/" element={<PageAbout/>} />

        <Route path="/level1" element={<PageLevel1/>}/>
        <Route path="/level1/:arid" element={<PageArticleLevel1/>}/>
        <Route path="/level2" element={<PageLevel2/>} />
        <Route path="/level2/:arid" element={<PageArticleLevel2/>}/>
        <Route path="/level3" element={<PageLevel3/>} />
        <Route path="/level3/:arid" element={<PageArticleLevel3/>}/>

        <Route path="/studied" element={<PageStudied/>}/>

        <Route path="/topics/world" element={<PageWorld/>} />
        <Route path="/topics/interesting" element={<PageInteresting/>} />
        <Route path="/topics/nature" element={<PageNature/>} />
        <Route path='/topics/news' element={<PageNews/>}/>

        {/* <Route path="/search" element={<PageSearch/>}/> */}

      </Routes>
    );
    
};
