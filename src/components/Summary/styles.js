import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  display: flex;
  justify-content: left;
  margin-left: 20px;
`;

export const ListSummary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h4 {
    padding: 5px;
    color: #424242;
  }
`;

export const ItemToSummary = styled.div`
  width: 100%;
  padding: 5px;
  color: #616161;
  font-weight: bold;
  font-size: 15px;
`;
