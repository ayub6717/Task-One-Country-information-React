import React, { Component } from "react";
import './App.css';
import axios from 'axios'
class App extends Component {

  state = {
    posts : []
  }

  componentDidMount(){
    axios.get('http://countriesnode.herokuapp.com/v1/countries/')
    .then(Response => {
      this.setState({
        posts: Response.data
      })
    })
    .catch(error => console.log(error ))
  }
  render(){

      let {posts} = this.state

      if (posts.length==0){
        return <h1 style={{textAlign: 'center' }}>Looding...</h1>
      }else{
        return (
          <div className="container"> <br/>
            <ul className="list-group">
              <h2>Information Of <span>Countries</span></h2>
              { posts.map(post => 
                <li 
                  key ={ post.id } 
                  className="list-group-item country"> 
                  <h3>Country : {post.name} </h3>  
                  <h6> Native : {post.native} </h6>
                  <p>Phone : {post.phone}</p>
                  <h6> Continent : {post.continent}</h6>
                  <p> Capital : {post.capital} </p>
                  <h6> Currency : {post.currency} </h6>
                  <p>  Languages : {post.languages} </p>
                  <h6>  Emoji : {post.emoji} <br/></h6>
                  <p>  EmojiU : {post.emojiU} <br/> </p>
                  <h6> Code : {post.code} <br/></h6>
                </li> ) } 
            </ul>
          </div>
        )
      }
  }
}

export default App;
