import React from 'react';
import './App.css';
import Top from './top'
import Meme from './meme'


function Full(props) {
   

 
  return (
    <div className="App">
      <section  className='top-section '>
          < Top />
      </section>
      <section className='input-data' >
         <Meme/>
      </section>
     </div>
  );
}

export default Full;

