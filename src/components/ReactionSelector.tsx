import React, { useState } from 'react';
import styled from 'styled-components';
import Heart from './heart.svg'
import HeartPressed from './heart-pressed.svg'

const Toggler = styled.div`
  text-align: right;
  position: relative;
  display: inline-block;
  float: right;
`

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

export const ReactionSelector = () => {
  const [isPressed, setPressStatus] = useState(false)

  return (
    <Toggler onClick={() => setPressStatus(!isPressed)}>
      <img src={isPressed ? HeartPressed : Heart} />
    </Toggler>
  )
}