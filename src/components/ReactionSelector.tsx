import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from './heart.svg'
import HeartPressed from './heart-pressed.svg'
import superagent from 'superagent';

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

interface ReactionSelectorProps {
  cardId: string,
  points: number,
  isPraisable: boolean
}

export const ReactionSelector = (props: ReactionSelectorProps) => {
  const { cardId, points, isPraisable } = props
  const [isPraised, setPraisedStatus] = useState(!isPraisable)
  const [currentPoints, updatePoints] = useState(points)

  // 状態としてのリアクション数を加算してAPIにリクエストを飛ばす
  const incrementPoints = async () => {
    updatePoints(currentPoints + 1)

    const currentEmployee = '22222222-2222-2222-2222-222222222222'
    const result = await superagent
      .post(`${process.env.REACT_APP_HOST_BASE}/card/praise`)
      .send({ card_id: cardId, employee_id: currentEmployee })
      .withCredentials()
      .set('accept', 'json')
  }

  // まだ押してないときしかハートをつけられない
  const giveHeart = () => {
    if (!isPraised) {
      setPraisedStatus(!isPraised)
      incrementPoints()
    }
  }

  return (
    <Toggler onClick={() => giveHeart()}>
      <Points>{currentPoints}</Points>
      <FloatedButton src={isPraised ? HeartPressed : Heart} />
    </Toggler>
  )
}