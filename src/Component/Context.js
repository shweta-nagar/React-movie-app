import { createContext, useEffect, useState } from "react";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const[search,setSearch]=useState("titanic");
  const[loading,setLoading]=useState(true)
  const getData = async () => {
    try {
      const data = await fetch(
        `http://www.omdbapi.com/?apikey=2d6b8d61&s=${search}`
      );
      const result = await data.json();
      console.log(result);
     
        if(result.Response==="True"){
          setMovies(result.Search)

          setLoading(false);
        }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <Appcontext.Provider value={{ movies,setSearch ,loading}}>{children}</Appcontext.Provider>
  );
};
export { Appcontext, AppProvider };
