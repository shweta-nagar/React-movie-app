import React, { useContext } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import "../../src/App.css"
import { Appcontext } from './Context'

 const Search = () => {
    const {search,setSearch}=useContext(Appcontext)
  return (
   
    <>
    <form className='form' onSubmit={(e)=>e.preventDefault()}>
    
    <input className='' type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search'/>

    </form>
    </>
  )
}
export default Search
