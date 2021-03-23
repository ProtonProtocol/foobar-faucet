import React from 'react';
import {
  Container,
  Button,
  Title,
  Description,
  FeatureText,
  Coin,
  Header,
  Br,
} from '../Styles/TopStyles';

const Login = ({ login }) => {
  return (
    <Container data-testid="login">
      <Header />
      <Coin src="./images/coin.svg" />

      <Title>
        The Foobar token is <Br styledFor="mobile" />
        the <Br styledFor="desktop" />
        <FeatureText>demo token</FeatureText> for all Proton Demos{' '}
      </Title>
      <Description>
        Click to get 2,000 FooBar tokens delivered into your Proton Wallet. These
        tokens can be used in multiple demo apps. New tokens available every
        hour.
      </Description>
      <Button onClick={login}>Connect Wallet</Button>
    </Container>
  );
};

export default Login;
