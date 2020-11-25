import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class App extends Component {
  constructor(props) {
    super(props);

    // set the state of the application
    this.state = {
      userInput: "",
      list: []
    }
  }

  render() {
    return (<Container>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: '3rem',
        fontWeight: 'bolder',
      }}> TODO LIST :)

      </Row>
    </Container>)
  }
}

export default App;
