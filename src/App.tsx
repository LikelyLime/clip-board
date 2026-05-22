import React, { useState } from 'react';
import Header from './component/Header';
import FilterBar from './component/FillterBar';
import ClipCard from './component/ClipCard';
import { Clip } from './type';
function App() {

  const [clips, setClips] = useState<Clip[]>([]);

  return(
    <div>
      <Header/>
      <FilterBar/>
      
      {
        clips.map(function(a, i){
          return(
            <ClipCard clip={a}/>
          )
        })
      }
      
    </div>
  )
    
}


export default App