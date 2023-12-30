import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singlemovie  from './Component/Singlemovie';
import Home from './Component/Home';
import Error from './Component/Error';
import Movie from './Component/Movie';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/movie/:id' element={<Singlemovie/>}></Route>
    
    <Route path='*' element={<Error />}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
