import { styled } from 'styled-components';

//  .title {
//      text-align: center;
//      margin-bottom: 4rem;
//    }
//    .underline {
//      height: 0.25rem;
//      width: 5rem;
//      background: var(--clr-primary-5);
//      margin-left: auto;
//      margin-right: auto;
//    }

export const Review = styled.article`
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --clr-white: #fff;
  --transition: all 0.3s linear;
  --radius: 0.25rem;
  position: relative;
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;

  &:hover {
    box-shadow: var(--dark-shadow);
  }
`;

export const ImgContainer = styled.div`
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: var(--clr-primary-5);
    position: absolute;
    top: -0.25rem;
    right: -0.5rem;
    border-radius: 50%;
  }
`;
export const PersonImage = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
`;
export const QuoteIcon = styled.span`
  /* primary/main color */
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};
  --clr-white: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: var(--clr-primary-5);
  color: var(--clr-white);
`;

export const Author = styled.h4`
  margin-bottom: 0.25rem;
`;
export const PostData = styled.p`
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: var(--clr-primary-5);
  font-size: 0.85rem;
`;
export const ReviewContext = styled.div`
  p {
    margin-bottom: 0.75rem;
    max-height: 200px;
    overflow: auto;
  }
  scrollbar-color: red yellow;
`;
export const PrevButton = styled.button`
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};

  color: var(--clr-primary-5);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: var(--clr-primary-5);
  }
`;
export const NextButton = styled.button`
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};
  --clr-primary-7: hsl(205, 90%, 76%);
  color: var(--clr-primary-5);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const RandomBtn = styled.button`
  --clr-primary-1: hsl(205, 86%, 17%);
  --clr-primary-5: ${props => props.theme.themeLight.primary_color};
  --clr-primary-10: ${props => props.theme.themeLight.background};
  margin-top: 0.5rem;
  background: var(--clr-primary-10);
  color: var(--clr-primary-5);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
  border-color: transparent;
  cursor: pointer;
  &:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`;
export const ReviewCount = styled.div`
  color: ${props => props.theme.themeLight.primary_color};
  position: absolute;
  top: 8px;
  left: 21px;
`;
