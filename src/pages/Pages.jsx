import React from 'react'
import Cuisine from './Cuisine'
import Home from './Home'
import { Route, Routes,useLocation } from 'react-router-dom'
import Recipe from './Recipe'
import Searched from './Searched'
import {AnimatePresence} from 'framer-motion'
import Favourites from "./Favourites";
function Pages() {
  const location =useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
      <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
    </AnimatePresence>

  )
}

export default Pages
