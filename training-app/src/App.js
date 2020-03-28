import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { ReactLoader } from './functions/ReactLoader';

export const USER_MIHAI = {
  name: "Mihai",
  job: "Programmer"
}

export const USER_ANDREI = {
  name: "Andrei",
  job: "Manager"
}

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: USER_ANDREI
    };

    this.setName = this.setName.bind(this);
  }

  setName() {
    this.setState(this.updateUser())
  }

  updateUser() {
    if (this.state.user.name === "Andrei") {
      return {
        user: USER_MIHAI,
        reverse: true
      }
    }
    return {
      user: USER_ANDREI,
      reverse: false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ReactLoader reverse={this.state.reverse}></ReactLoader>
          <p>
            <Greet user={this.state.user}></Greet>
          </p>
          <button onClick={this.setName}> Change User</button>
        </header>
      </div>
    );
  }
}

export default App;
