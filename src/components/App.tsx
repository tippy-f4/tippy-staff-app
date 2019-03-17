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
  background-image: linear-gradient(93deg, #75d997, #2cbdae);
  // background-image: linear-gradient(to right, #ffa080, #f47280);
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
  enable_praise: boolean,
  praise_count: number,
  created_at: string
}

const App = () => {
  const [state, setAppState] = useState<AppState>({
    cards: []
  });

  useEffect(() => {
    const fetchCards = async () => {
      const currentEmployee = '22222222-2222-2222-2222-222222222222'
      const { body } = await superagent
        .get(`${process.env.REACT_APP_HOST_BASE}/cards/employee_id?employee_id=${currentEmployee}`)
        .withCredentials()
        .set('accept', 'json')

      setAppState({
        cards: body
          .cards
          .map((c: CardResponse) =>
            new CardVM(
              c.id,
              c.employee_name,
              c.employee_image,
              c.message,
              c.praise_count,
              c.enable_praise,
              new Date(c.created_at)
            )
          )
          .sort((a: CardVM, b: CardVM) => {
            return b.createdAt.getTime() - a.createdAt.getTime()
          })
      })
    }

    fetchCards()
  }, [])

  return (
    <Wrapper>
      <HeaderBg />
      <Title>
        tippy
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
