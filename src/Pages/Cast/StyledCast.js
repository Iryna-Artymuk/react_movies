import { styled } from 'styled-components';

export const List = styled.ul`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
export const Card = styled.div`
  --size: 200px;
  width: var(--size);
  height: var(--size);
  color: ${({ theme }) => theme.colors.primary_color};
  padding: 2rem 1.5rem;
  border-radius: 20px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
`;

/*Image*/
export const CardAvatar = styled.div`
  --size: 100px;

  background-image: ${props => {
    // console.log(props.img);
    return `url(${props.img})`;
  }};
  background-size: cover;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  transition: transform 0.2s ease;
  margin-bottom: 1rem;
`;

/*Card footer*/
//    .card-social {
//     transform: translateY(200%);
//     display: flex;
//     justify-content: space-around;
//     width: 100%;
//     opacity: 0;
//     transition: transform .2s ease, opacity .2s ease;
//    }

//    .card-social__item {
//     list-style: none;
//    }

//    .card-social__item svg {
//     display: block;
//     height: 18px;
//     width: 18px;
//     fill: #515F65;
//     cursor: pointer;
//     transition: fill 0.2s ease ,transform 0.2s ease;
//    }

/*Text*/

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary_color};
  font-size: 1.5em;
  font-weight: 500;
  line-height: 2rem;
`;

export const CardSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary_color};
  font-size: 1em;
  font-weight: 500;
  line-height: 1rem;
`;
/*Hover*/
//    .card:hover {
//     box-shadow: 0 8px 50px #23232333;
//    }

//    .card:hover .card-info {
//     transform: translateY(-5%);
//    }

//    .card:hover .card-social {
//     transform: translateY(100%);
//     opacity: 1;
//    }

//    .card-social__item svg:hover {
//     fill: #232323;
//     transform: scale(1.1);
//    }

//    .card-avatar:hover {
//     transform: scale(1.1);
//    }
