import logo from './logo.svg';
// import './App.css';
import Form from './components/Form'
import Post from './components/Post'
import Approval from './components/Approval';
import axios from 'axios';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';
import React from 'react';

class App extends React.Component {
  state= {images: [] };

  onSearchSubmit= async term => {
    const response = await axios.get('https://api.unsplash.com//search/photos', { 
    params: { query: term },
    headers: { 
      Authorization: 
      'Client-ID CX_bWjyY8Z7_Y2q_6l18wIaWvezh3YDU5kwRd4R0dfU'
    }
  }
    );
    // console.log(response.data.results)
    this.setState({images:response.data.results})
  }

  render(){

  return (
    <div className="App">
      <SearchBar onSubmit={this.onSearchSubmit}/>
      found: {this.state.images.length} images
      <ImageList images={this.state.images}/>   
       </div>
  );
  }
}

export default App;
