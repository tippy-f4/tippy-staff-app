import * as React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { CardVM } from '../cardVM';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const App = () => {
  const vm = new CardVM("name", "pictureUrl", new Date(), "message")

  return (
    <Wrapper className="App">
      <header className="App-header">
        <p>
          f4employee-app
        </p>
        <div>
          {Card(vm)}
          {Card(vm)}
          {Card(vm)}
        </div>
      </header>
    </Wrapper>
  );
}

export default App;
