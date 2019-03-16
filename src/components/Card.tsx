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
  padding: 14px 0;
`

const FacePicture = styled.img`
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  height: 40px
  width: 40px;
`

const Name = styled.div`
  display: inline-block;
  font-size: 12px;
  color: #9b9b9b;
  margin-left: 11px;
  font-weight: bold;
`

export const Card = (card: CardVM) => {
  return (
    <Wrapper>
      <FacePicture src={card.employeePictureUrl} />
      <Name>
        {card.employeeName}
      </Name>
      <Message>
        {card.message}
      </Message>
    </Wrapper>
  )
}