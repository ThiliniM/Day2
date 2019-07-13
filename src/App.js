import React from 'react';
import logo from './logo.svg';
import './App.css';
import './compenent/Home/Header'
import Header from './compenent/Home/Header';
import Post from './compenent/Home/post';
import Footer from './compenent/Home/Footer';
import Composer from './compenent/Home/composer';


function App() {
  return (
    <div className="compenet">
      <Header></Header>
      <div classname="content">
      <div classname="composer">

      <Composer></Composer>
      <div className="posts">
     <Post></Post>
     <Post></Post>
     <Post></Post>
      </div>
    </div>
    <hr/>
    <Footer></Footer>
    </div>
    </div>
  );
}



export default App;

