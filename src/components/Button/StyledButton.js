import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background: ${props => props.theme.background};
  color: ${props => props.theme.secondary_color};
  display: block;
  min-width: 100px;
  height: 30px;
  /* border: 2px solid ${props => props.theme.primary_color}; */
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09);

  text-align: center;
  cursor: pointer;
  &:hover svg {
    fill: ${props => props.theme.primary_color};
  }
  svg {
    fill: ${props => props.theme.secondary_color};
  }
`;
