import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  text-align: center;

  p {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.themeLight.primary_color};
    font-size: 30px;
    animation: type 0.5s alternate infinite;
  }
`;
