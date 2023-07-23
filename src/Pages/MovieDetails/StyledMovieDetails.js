import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const MovieCard = styled.div`
  font: 14px/22px 'Lato', Arial, sans-serif;
  color: #a9a8a3;
  padding-top: 40px;
  width: 100%;
  height: 100%;
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: #f0f0ed;
  border-radius: 5px;
  position: relative;
`;

export const StyledHero = styled.div`
  height: 342px;
  margin: 22px auto;
  position: relative;
  overflow: hidden;

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    background-image: ${props => {
      // console.log('props : ', props);

      return `url(${props.img})`;
    }};
    background-size: cover;
    transform: skewY(-2.2deg);
    transform-origin: 0 0;
  }
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    z-index: 3;
    background: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
    transform: skewY(-2.2deg);
    transform-origin: 0 0;
  }
`;

export const Details = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 4;
  color: ${props => props.theme.themeLight.primarycolor};
`;

export const Title1 = styled.div`
  color: ${props => {
    console.log('props: ', props);

    return props.theme.themeLight.primary_color;
  }};
  font-size: 35px;
  margin-bottom: 13px;
  position: relative;
  text-align: center;
`;

//     }

export const Title2 = styled.div`
  color: ${props => props.theme.themeLight.secondary_color};
  font-size: 23px;
  font-weight: 300;
  margin-bottom: 15px;
  text-align: center;
`;

export const Description = styled.div`
  bottom: 0px;
  color: ${props => props.theme.themeLight.text_color};
  font-size: 16px;
  line-height: 26px;

  p {
    padding: 10px;
  }
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  span {
    background: ${props => props.theme.themeLight.background};
    color: ${props => props.theme.themeLight.secondary_color};
    border-radius: 10px;
    padding: 3px 8px;
    font-size: 14px;
    margin-right: 4px;
    line-height: 35px;
  }
`;

export const Likes = styled.span`
  padding: 3px 8px;
  &:before {
    content: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/icon_like.png');
    position: relative;
    top: 2px;
    padding-right: 7px;
  }
`;
export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
`;
export const StyledLink = styled(NavLink)`
  position: relative;
  background: ${props => {
    // console.log('prop: ', props);

    return props.theme.themeLight.background;
  }};
  color: ${props => props.theme.themeLight.secondary_color};
  display: block;

  width: 100px;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 700;

  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.themeLight.primary_color};
  }
  &.active:before {
    content: '';
    width: 100%;
    height: 3px;
    position: absolute;
    bottom: -5px;
    left: 0;
    border-radius: 3px;
    background: ${props => props.theme.themeLight.primary_color};
    /* display: ${props => (props.$Goback ? 'block' : 'none')}; */
  }
  /* &.active {
    display: inline-block;
    pointer-events: none;
  } */
`;
