import { styled } from 'styled-components';
import { setBg } from '../../Services/SetBackground';
import { setRotationMinus, setRotationPlus } from '../../Services/SetRotation';

// console.log(setBg());
export const Container = styled.div`
  perspective: 40em;
`;

export const Card = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  padding: 3em;
  border-radius: 1em;
  /* color: black; */
  transform: ${() => setRotationPlus()};
  transform-style: preserve-3d;
  transition: transform 1s;
  color: ${({ theme }) => theme.colors.box_shadow};
  overflow: hidden;
  &:hover {
    transform: ${() => setRotationMinus()};
  }
  p {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary_color};
    font-weight: 700;
    text-align: center;
    margin-top: 30px;
  }
`;

export const Layers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
`;
// export const Backdrop = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
//   background-image: ${props => {

//     return `url(${props.backimage})`;
//   }};
// `;

export const Backdrop = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.backimage})`,
    backgroundPosition: ' center ',
  },
}))`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* background-size: cover; */
  /* background: ${setBg()}; */

  /* &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* background-size: cover; */
  /* background: ${props => props.theme.background}; */
  /* } */
`;
