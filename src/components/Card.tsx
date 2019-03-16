import React, { useState } from 'react';
import styled from 'styled-components';
import { CardVM } from '../cardVM';
import { ReactionSelector } from './ReactionSelector'

const Wrapper = styled.div`
  padding: 10px;
  margin: 16px 10px;
  border-radius: 9px;
  box-shadow: 0 1px 5px 0 rgba(195, 195, 195, 0.5);
  background-color: #ffffff;
  opacity: .94;
`

const Message = styled.div`
  line-height: 1.5;
  font-size: 14px;
  letter-spacing: normal;
  color: #4a4a4a;
  font-family: HiraginoSans-W3;
  padding: 20px 0;
  padding-bottom: 12px;
`

const FacePicture = styled.img`
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  position: relative;
  top: 2px;
  left: 2px;
`

const FacePictureBg = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(to right,#ffa080,#f47280);
  height: 44px;
  width: 44px;
  position: absolute;
`

const Name = styled.div`
  display: inline-block;
  font-size: 12px;
  color: #9b9b9b;
  margin-left: 11px;
  font-weight: bold;
`

const Footer = styled.div`
  height: 35px;
`

const CreatedAt = styled.div`
  color: #b2b2b2;
  font-size: 10px;
  display: inline-block;
  vertical-align: -webkit-baseline-middle;
`

interface CardProps {
  card: CardVM
}

export const Card = (props: CardProps) => {
  const { card } = props

  return (
    <Wrapper>
      <FacePictureBg/>
      <FacePicture src={card.employeePictureUrl} />
      <Name>
        {card.employeeName}
      </Name>
      <Message>
        {card.message}
      </Message>
      <Footer>
        <CreatedAt>
          {card.toFormattedCreatedAt()}
        </CreatedAt>
        <ReactionSelector points={card.points} isPraisable={card.isPraisable} />
      </Footer>
    </Wrapper>
  )
}

