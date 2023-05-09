import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFoo } from './store';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';

const App = ()=> {
  const { foo } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(updateFoo());
  }, []);

  return (
    <div>
      <h1>CocktailDB { foo } </h1>
      <Link to='home'>Home</Link>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
};

export default App;
