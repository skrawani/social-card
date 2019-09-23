import React from 'react';
import {Header, Cards} from './App.styles'

import Container from './components/container/container.component';

class App extends React.Component {

  state = {
    error: null,
    isLoaded: false,
    res : []
  };
 async componentDidMount() {
    let res = await fetch("https://jsonplaceholder.typicode.com/photos")
    let data = await res.json()
    let count = 0;
    let image = data.filter(()=> {
      count += 1
      return count <= 10
    })
    this.setState({
      res: image,
      isLoaded: true
    })
    console.log(this.state);
}
  


  render(){

    const { res} = this.state;
    return(
      <div>
        <Header>SOCIAL CARDS</Header>
          <Cards>
          {
          res.map((r) =>(
            <Container key = {r.id} imageUrl = {r.url} title ={ r.title} />

          ))}
        
        </Cards>
      </div>
        
    )

  }
}

export default App;
