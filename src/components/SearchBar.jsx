import React, { useContext } from 'react';
import {AppContext} from '../contexts/app_context'

const SearchBar = () => {

    let { handleInput, searchEmployee } = useContext(AppContext)
  return (
      <form>
        <input type='text' placeholder='Employee name'
        value={searchEmployee} 
        onChange={(e) => handleInput(e)} />
      </form>
  )
}

export default SearchBar
