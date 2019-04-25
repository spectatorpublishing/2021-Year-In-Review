import React from 'react';
import styled from 'styled-components';
import scroll from '../assets/scroll.svg';

const Title1 = styled.h1`
  font-size: 30px;
  margin: 0px;
  text-align: center;
  `;

const Text1 = styled.p`
  font-size: 15px;
  text-align: center;
  `;

const Title2 = styled.h1`
  font-size: 30px;
  margin: 0px;
  `;

const Text2 = styled.p`
  font-size: 15px;
  `;

const Image = styled.div`
  background-image: url(${({img_src}) => img_src});
  height: 50vh;
  `;
const Background = styled.div`
  background: lightblue;
  height: 50vh;
  `;
const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  margin-top: 100px;
  `;

  
const pageIntro = (props) =>{
  return (
    <div className="PageIntro">
      <Image {...props}>
      <Title1>{props.title1}</Title1>
      <Text1>{props.text1}</Text1>
      <Logo src={scroll} alt="scroll"/> 
      </Image>
      <Background>
      <Title2>{props.title2}</Title2>
      <Text2>{props.text2}</Text2>  
      </Background>    
    </div>
  );
}

export default pageIntro;