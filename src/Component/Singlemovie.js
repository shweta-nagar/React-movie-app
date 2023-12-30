import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "../../src/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


export const Singlemovie = () => {
    const {id}=  useParams()

    const [movie,setMovie]=useState("")
    const[loading,setLoading] = useState(true)

    const getmovie=async()=>{
      try{
        const data = await fetch(`http://www.omdbapi.com/?apikey=2d6b8d61&i=${id}`)
        const res = await data.json()
        console.log(res)
        setMovie(res)

        if(res.Response==="True"){
          setMovie(res)
          setLoading(false)
        }
      }


      catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      getmovie()
    },[])
    if(loading){
      return(
        <h1>loading...</h1>
      )
    }
  return (
    // <div>Singlemovie
    //     <h1>the id is {id}</h1>
    //     <img src={movie.Poster}/>
    // </div>
    <>
    <div className="container-fluid card w-50 align-center mt-5  shadow">
      <div className='row card-body'>
       <div className='col-6'> <img className='img photo' src={movie.Poster}/></div>
      <div className='col-6 card-title'>
      <h5>{movie.Title}</h5>
      <h5>{movie.Released}</h5>
      <h5>{movie.Country}</h5>
      <h5>{movie.Genre}</h5>
      <h5>{movie.imdbRating}</h5>
     <button className='btn bg-primary'><Link to='/'>Go back</Link></button> 
      </div>
      </div>
    </div>
    </>
  )
}
export default Singlemovie