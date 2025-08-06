import React from 'react'
import Todo from './todo'
import Toogle from './Toogle'
import Pagination from './Pagination'
import SearchWithDebounce from './SearchWithDebounce'


const App = () => {
  return (
    <>
    <Todo/>
    <Toogle/>
    <Pagination/>
    <SearchWithDebounce/>
    </>
  )
}

export default App