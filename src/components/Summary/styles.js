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
  h5 {
    padding: 5px;
  }
`;

export const ItemToSummary = styled.div`
  width: 100%;
  padding: 5px;
  color: #616161;
  font-weight: bold;
  font-size: 15px;
`;
