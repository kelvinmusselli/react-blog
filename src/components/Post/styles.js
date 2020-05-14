import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  background-color: #fff;
  border: solid 1.5px #f7f7f7;
`;

export const ListPost = styled.div``;

export const ItemPost = styled.div`
  margin-bottom: 8px;
  border: solid 1px #f7f7f7;
  border-radius: 4px;
  padding: 5px;
  box-shadow: rgba(50, 50, 50, 0.75) 2px 2px 5px 0px;
`;

export const HeadPost = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const InfoPublished = styled.div`
  max-width: 400px;
`;

export const DatePublished = styled.div`
  color: #616161;
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TitlePost = styled.div`
  color: #424242;
  font-weight: bold;
  font-size: 15px;
  text-transform: uppercase;
  margin-bottom: 2px;
`;

export const AutorPost = styled.div`
  color: #616161;
  font-size: 11px;
`;

export const DatePost = styled.div``;

export const BodyPost = styled.div`
  font-family: 'Graphik-Regular', 'Gotham SSm A', 'Gotham SSm B',
    'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  color: #757575;
  font-size: 14px;
  padding-bottom: 10px;
`;
