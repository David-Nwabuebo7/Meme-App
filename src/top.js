
import troll from './images/troll-face.png'
 function top(){
    return(
     <div className="top">
            <header>
                <img src={troll} className='troll'/>

                <h2 className='title'>
                    Meme Generator
                </h2>
                
                <h4 className='project'>
                        React Course - Project 3
                </h4>
        
            </header>
      
     </div>

    );
}
export default top;