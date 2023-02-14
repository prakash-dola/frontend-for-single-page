import React from 'react'
import Bar from './Page/Bar';
import Cards from './Page/MediaCard';
import Components from './Page/Components';

import Mini from './Page/Mini';
import Para from './Page/Para';
import MediaCard from './Page/MediaCard';

import MiniBar from './MiniBar';



function App() {
  return (
    <>
    <MiniBar/>
   {/* <div>
      <a href='#' className="text-black hover:text-blue-500 p-5">services</a>
      <a href='#'>home</a>
      <a href='#'>about</a>
  </div>*/}
 <Bar/>
 <Para/>
 <Mini/>
 <MediaCard/>
 
  
    </>
  )
}
export default App;