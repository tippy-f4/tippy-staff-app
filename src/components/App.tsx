import * as React from 'react';
import styled from 'styled-components';
import { Card } from './Card';
import { CardVM } from '../cardVM';

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
`

const Subtitle = styled.div`
  font-size: 14px;
  color: white;
  text-align: center;
  position: relative;
  z-index: 100;
`

const HeaderBg = styled.div`
  background-image: linear-gradient(to right, #ffa080, #f47280);
  position: absolute;
  height: 163px;
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

const App = () => {
  const vm =
    new CardVM(
        "もりもり",
        "http://placehold.jp/150x150.png",
        new Date(),
        `
        今日はありがとうございました。春にぴったりの服を一緒に選んでもらって
        とっても嬉しいです！もりおさんのサービスは丁寧で最高です。
        また次回よろしくお願いします！
        `
    )

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
        {Card(vm)}
        {Card(vm)}
        {Card(vm)}
        {Card(vm)}
        {Card(vm)}
      </CardList>
  </Wrapper>
  );
}

export default App;
