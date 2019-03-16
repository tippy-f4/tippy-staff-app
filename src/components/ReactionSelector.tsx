import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from './heart.svg'
import HeartPressed from './heart-pressed.svg'

/*
interface SelectorProps {
  isOpen: Boolean
}

const Selector = styled.div`
  box-shadow: 0 1px 5px 0 rgba(195, 195, 195, 0.5);
  border-radius: 10px;
  transition: all .3s cubic-bezier(0.4, 0.0, 0.2, 1);
  transform: translateY(${(props: SelectorProps) => props.isOpen ? "-30px" : "0"});
  visibility: ${(props: SelectorProps) => props.isOpen ? 'visible' : 'hidden' };
  opacity: ${(props: SelectorProps) => props.isOpen ? '1' : '0'};
  background: white;
  position: absolute;
  z-index: 200;
  right: 0;
`
*/

const Toggler = styled.div`
  text-align: right;
  position: relative;
  display: inline-block;
  float: right;
`

const FloatedButton = styled.img`
  box-shadow: 0 1px 5px 0 rgba(195, 195, 195, 0.5);
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  margin-left: 8px;
`

const Points = styled.div`
  display: inline-block;
  vertical-align: middle;
  color: #7b7b7b;
  font-size: 14px;
`

export const ReactionSelector = (points: number) => {
  const [isPressed, setPressStatus] = useState(false)
  const [currentPoints, updatePoints] = useState(points)

  const incrementPoints = () => {
    updatePoints(currentPoints + 1)
  }

  // まだ押してないときしかハートをつけられない
  const giveHeart = () => {
    if (!isPressed) {
      setPressStatus(!isPressed)
      incrementPoints()
    }
  }

  return (
    <Toggler onClick={() => giveHeart()}>
      <Points>{currentPoints}</Points>
      <FloatedButton src={isPressed ? HeartPressed : Heart} />
    </Toggler>
  )
}