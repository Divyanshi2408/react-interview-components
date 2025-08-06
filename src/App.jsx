import React from 'react'
import Todo from './todo'
import Toogle from './Toogle'
import Pagination from './Pagination'
import SearchWithDebounce from './SearchWithDebounce'
import UserDirectory from './UserDirectory'


const App = () => {
  return (
    <>
    <Todo/>
    <Toogle/>
    <Pagination/>
    <SearchWithDebounce/>
    <UserDirectory/>
    </>
  )
}

export default App