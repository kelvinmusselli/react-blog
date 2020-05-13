import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #fc4a1a;
  background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
  background: linear-gradient(to right, #f7b733, #fc4a1a);
  width: 100%;
  height: 64px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 750px;
  height: 100%;
  padding: 0 auto;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
