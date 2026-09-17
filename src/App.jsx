import React, { useState } from 'react'
import Navbar from './components/Navbar'
import MovieGrid from './components/MovieGrid'
import Footer from './components/Footer';

const App = () => {
  const[searchQuery,setSearchQuery] = useState("");
  return (
    <>
    <div>
     <Navbar onSearch = {setSearchQuery}/>
    <MovieGrid search = {searchQuery}/>
    <Footer/>
    </div>
   
    </>
  )
}

export default App
