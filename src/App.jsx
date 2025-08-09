import React from 'react'
import Todo from './todo'
import Toogle from './Toogle'
import Pagination from './Pagination'
import SearchWithDebounce from './SearchWithDebounce'
import UserDirectory from './UserDirectory'
import Model from './Model'
import MultiStepForm from './MultiStepForm'
import ProductFilter from './ProductFilter'


const App = () => {
  return (
    <>
    <Todo/>
    <Toogle/>
    <Pagination/>
    <SearchWithDebounce/>
    <UserDirectory/>
    <Model/>
    <MultiStepForm/>
    <ProductFilter/>
    </>
  )
}

export default App