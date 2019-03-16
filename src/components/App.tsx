import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { CardVM } from '../cardVM';
import superagent from 'superagent';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: HiraginoSans-W3;
`

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
  position: relative;
  z-index: 100;
  font-weight: bold;
`

const Subtitle = styled.div`
  font-size: 14px;
  color: white;
  text-align: center;
  position: relative;
  z-index: 100;
  margin-top: 23px;
  font-weight: bold;
`

const HeaderBg = styled.div`
  background-image: linear-gradient(to right, #ffa080, #f47280);
  position: absolute;
  height: 150px;
  left: 0;
  z-index: 1;
  right: 0;
  top: 0;
`

const CardList = styled.div`
  position: relative;
  z-index: 100;
  width: 100%;
`

interface AppState {
  cards: Array<CardVM>
}

interface CardResponse {
  id: string,
  message: string,
  employee_name: string,
  employee_image: string,
  is_praisable: boolean,
  praise_count: number,
  created_at: string
}

const App = () => {
  const [state, setAppState] = useState<AppState>({
    cards: []
  });

  useEffect(() => {
    const fetchCards = async () => {
      const { body } = await superagent
        .get('http://localhost:3030/employee_posts')
        .set('accept', 'json')

      setAppState({
        cards: body.cards.map((c: CardResponse) =>
          new CardVM(
            c.id,
            c.employee_name,
            c.employee_image,
            c.message,
            c.praise_count,
            c.is_praisable,
            new Date(c.created_at)
          )
        )
      })
    }

    fetchCards()
  }, [])

  return (
    <Wrapper>
      <HeaderBg />
      <Title>
        F4 Tip サービス
      </Title>
      <Subtitle>
        東大宮店の店員が過去にもらったカード
      </Subtitle>
      <CardList>
        {state.cards.map(vm =>
          <Card key={vm.cardId} card={vm} />
        )}
      </CardList>
  </Wrapper>
  );
}

export default App;
