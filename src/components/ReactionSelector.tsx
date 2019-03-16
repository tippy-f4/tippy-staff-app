import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: right;
`

const Opening = styled.div``

const Closed = styled.div``

export const ReactionSelector = () => {
  const [isOpen, setOpenStatus] = useState(false)

  return (
    <Wrapper onClick={() => setOpenStatus(!isOpen)}>
      {
        isOpen ? (
          <Opening>
            opening
          </Opening>
        ) : (
          <Closed>
            closed
          </Closed>
        )
      }
    </Wrapper>
  )
}