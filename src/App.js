import React from "react";
import { Header, Cards } from "./App.styles";

import Container from "./components/container/container.component";

class App extends React.Component {
  state = {
    error: null,
    isLoaded: false,
    res: []
  };
  async componentDidMount() {
    let res = await fetch("https://swapi.co/api/people/");
    let data = await res.json();
    let count = 0;
    let object = data.results.filter(() => {
      count += 1;
      return count <= 10;
    });
    // console.log("obj", object);
    this.setState({
      res: object,
      isLoaded: true
    });
    // console.log(this.state);
  }

  render() {
    const { res } = this.state;
    return (
      <div>
        <Header>Star Wars</Header>
        <Cards>
          {res.map(r => (
            <Container key={r.name} person={r} />
          ))}
        </Cards>
      </div>
    );
  }
}

export default App;
