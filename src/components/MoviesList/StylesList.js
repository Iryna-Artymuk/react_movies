import { styled } from 'styled-components';

export const StyledList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: ${props => {
    console.log('props', props);
    return props.$SearchMoviesList ? '10px' : '100px';
  }};
`;
