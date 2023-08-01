
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from "./Card";
import Sdata from "./Sdata";

function ncard(val){

return(
  <Card 
  key={val.id}
imgsrc={val.imgsrc}
imgtitle={val.imgtitle}
description={val.description}
link={val.link}
/>
)

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<>
<h1 className='heading_style'>Netflix Top Rank Movies</h1>

{Sdata.map(ncard)};
</>

);