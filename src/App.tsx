import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

class App extends Component {
  render() {
    return (
      <Wrapper className="App">
        <header className="App-header">
          <p>
            f4employee-app
          </p>
        </header>
      </Wrapper>
    );
  }
}

export default App;
