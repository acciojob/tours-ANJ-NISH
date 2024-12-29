import React from 'react';
import { Tour } from './Tour';

export const Tours=({tours, setTours})=>
{

    function deleteTour(tourname)
    {
     let newtourlist=tours.filter((inditour)=> inditour.name!==tourname);
     setTours(newtourlist);
    }

    return(
        <>
         {tours.map((sptour,index)=> <Tour key={index} sptour={sptour} deleteTour={deleteTour}/>)}
        </>
    )
}