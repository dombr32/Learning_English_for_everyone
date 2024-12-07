import React from 'react';
import { useSelector } from 'react-redux';
import './Points.css'

export const Points = () => {

  const points = useSelector( state => state.points );
  
  return (

      <div className='Points'><h5 >{points}</h5><span>Your points</span></div>
  );

}