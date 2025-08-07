import React from 'react'
import Todo from './todo'
import Toogle from './Toogle'
import Pagination from './Pagination'
import SearchWithDebounce from './SearchWithDebounce'
import UserDirectory from './UserDirectory'
import Model from './Model'


const App = () => {
  return (
    <>
    <Todo/>
    <Toogle/>
    <Pagination/>
    <SearchWithDebounce/>
    <UserDirectory/>
    <Model/>
    </>
  )
}

export default App