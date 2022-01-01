import styled from '@emotion/styled';
import SearchBarItem from './categorySearchItem';

const SearchBarContainer = styled.div`
  width: 70vw;
  max-width: 800px;
  padding: 10px;
  border-bottom: 3px solid;
  margin: 0 auto;
  margin-top: 3px;
  display: flex;
  text-align: center;
  @media screen and (max-width: 780px) {
    width: 90vw;
  }
`;
export default function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarItem />
      <SearchBarItem />
    </SearchBarContainer>
  );
}
