import React, { useState } from 'react'

export const Tour = ({sptour, deleteTour}) => {

    const [showmore, setShow]=useState(false);

  return (

    <div style={{display: 'flex', flexDirection: 'column',margin: '20px', border: '1px solid black', padding: '10px', fontFamily: 'consolas', fontSize:'20px'}}>
        
        <h2>{sptour.name}</h2>
        <p id={`tour-item-para-${sptour.id}`}>{showmore? sptour.info : sptour.info.slice(0,199)}</p>
        <img src={sptour.image} style={{height: '100px', width: '150px', border: '1px soild blue', borderRadius: '5px'}}/>
        <span>${sptour.price}</span>

         <button id={`see-more-${sptour.id}`} onClick={()=> setShow(!showmore)}>{showmore && 'Show less'}{!showmore && 'See more'}</button>
        <button id={`delete-btn-${sptour.id}`} onClick={()=> deleteTour(sptour.name)}>Delete this tour from list</button>
    </div>
  )
}
