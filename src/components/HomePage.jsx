import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import Employee from './Employee'


const HomePage = () => {
  return (
    <div className='page'>
        <Header page='home'/>
        <SearchBar />
        <Employee />
       
    </div>
  )
}

export default HomePage


