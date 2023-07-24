import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  /* padding: 10px; */
  /* max-width: calc(100vw); */
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  /* padding: 10px; */
  /* li {
    width: 100%;
    position: relative;
  } */
`;
export const StyledNavLink = styled(NavLink)`
  position: relative;
  background: ${props => props.theme.background};
  color: ${props => props.theme.secondary_color};
  display: block;
  width: 100px;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 700;

  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.primary_color};
  }
  &.active:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 3px;
    background: ${props => props.theme.secondary_color};
  }
  /* &.active {
    display: inline-block;
    pointer-events: none;
    /* opacity: 0.5; */
  /* } */
`;
