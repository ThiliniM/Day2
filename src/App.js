import React from 'react';
import logo from './logo.svg';
import './App.css';
import './compenent/Home/Header'
import Header from './compenent/Home/Header';
import Post from './compenent/Home/post';
import Footer from './compenent/Home/Footer';
import Composer from './compenent/Home/composer';

import posts from "./Data/posts"
import { pseudoRandomBytes } from 'crypto';
import { restElement } from '@babel/types';

const style ={
  post:{
      border : "blue"
  } 
}



class App extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.state);

    this.state = {
      posts
    };
    console.log(posts);
  }
  renderPostItem = (post) => {
    //  return <Post key={posts._id} _id={posts._id} text={posts.text} timestamp={posts.timestamp}></Post>
    return <Post _id={post._id} key={post._id} post={post} onDelete={this.onDelete} />
  }
  onSubmit = (text) => {
    const { posts } = this.state;
    console.log("submiting", posts)
    const _id = posts.length + 1;

    const timestamp = String(new Date());
    const post = { _id, text, timestamp };

    posts.push(post);
    console.log(posts);
    this.setState({
      posts
    })
  }
  onDelete = (_id) => {
    const { posts } = this.state;
    console.log('sss', _id);
    const fill = posts.filter((post) => {
      return post._id !== _id
    });
    console.log(">>>> fill ", fill);
    this.setState({
      posts: fill
    });
  }
  render() {
    return (
      <div className="compenet">
        <Header></Header>
        <div classname="content">
          <div classname="composer">

            <Composer onSubmit={this.onSubmit}></Composer>
            <div className="posts" style={style.post}>
              {this.state.posts.map(this.renderPostItem)}
            </div>
          </div>
          <hr />
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;

