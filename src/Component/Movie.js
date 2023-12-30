import React, { useContext } from "react";
import { Appcontext } from "./Context";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../src/App.css";
import { Link } from "react-router-dom";

const Movie = () => {
  const { movies,loading } = useContext(Appcontext);
  if(loading){
    return <h1>loading....</h1>
  }
  return (
    <>
      <div className="container">
        
        <div className="row">
          {
            movies

            ?
          
          movies.map((value) => {
            return (
              <div className="col-md-4 card-one">
              <Link to={`/movie/${value.imdbID}`}>
                
                  <div className="card">
                    <div className="card-header">
                      <img src={value.Poster} alt="" />
                    </div>
                    <div className="card-body">
                      <h3 className="title">{value.Title}</h3>
                    </div>
                  </div>
               
              </Link>
              </div>
            );
          }):""}
        </div>
      </div>
    </>
  );
};

export default Movie;
