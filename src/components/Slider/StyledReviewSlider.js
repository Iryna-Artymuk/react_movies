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
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem 2rem;
  border-radius: 3px;
  box-shadow: ${({ theme }) => theme.colors.box_shadow};

  text-align: center;

  &:hover {
    box-shadow: ${({ theme }) => theme.colors.box_shadow};
  }
`;

export const ImgContainer = styled.div`
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
    background: ${({ theme }) => theme.colors.primary_color};
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

  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transform: translateY(25%);
  background: ${({ theme }) => theme.colors.primary_color};
  color: ${({ theme }) => theme.colors.text_color};
`;

export const Author = styled.h4`
  margin-bottom: 0.25rem;
`;
export const PostData = styled.p`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary_color};
  font-size: 0.85rem;
`;
export const ReviewContext = styled.div`
  p {
    margin-bottom: 0.75rem;
    max-height: 200px;
    overflow: auto;
    color: ${({ theme }) => theme.colors.text_color};
  }
  scrollbar-color: red yellow;
`;
export const PrevButton = styled.button`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  /* transition:${({ theme }) => theme.colors.primary_color}; */
  &:hover {
    color: ${({ theme }) => theme.colors.primary_color};
  }
`;
export const NextButton = styled.button`
  color: ${({ theme }) => theme.colors.text_color};
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;

  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary_color};
  }
`;

export const RandomBtn = styled.button`
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.secondary_color};
  color: ${({ theme }) => theme.colors.text_color};
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  transition: all 0.3s linear;
  border-color: transparent;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.primary_color};
    color: ${({ theme }) => theme.colors.text_color};
  }
`;
export const ReviewCount = styled.div`
  color: ${({ theme }) => theme.colors.text_color};
  position: absolute;
  top: 8px;
  left: 21px;
`;
