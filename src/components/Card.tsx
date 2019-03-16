import * as React from 'react';
import styled from 'styled-components';
import { CardVM } from '../cardVM';

const Wrapper = styled.div`
  padding: 10px;
  margin: 16px 10px;
  border-radius: 9px;
  box-shadow: 0 1px 5px 0 rgba(195, 195, 195, 0.5);
  background-color: #ffffff;
`

const Message = styled.div`
  line-height: 1.5;
  font-size: 14px;
  letter-spacing: normal;
  color: #9b9b9b;
  font-family: HiraginoSans-W3;
  padding: 10px 0;
`

const Name = styled.div`
  font-size: 12px;
  color: #9b9b9b;
`

export const Card = (card: CardVM) => {
  return (
    <Wrapper>
      <Name>
        {card.employeeName}
      </Name>
      <Message>
        {card.message}
      </Message>
    </Wrapper>
  )
}