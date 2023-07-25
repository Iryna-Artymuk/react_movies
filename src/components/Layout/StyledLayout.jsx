import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1220px;
  /* width: 1200px; */
  /* не задаємо фіксовану ширину щоб контейнер був гумовим  */
  margin: auto;
  padding: 10px;
  /* outline: 2px solid red; */
`;
export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  border-radius: 6px;

  /* display: flex;
 justify-content: center;
   ;
 gap: 20px; */
  align-items: center;
  height: 80px;
  /* border-radius: 5px; */
  background: ${({ theme }) => theme.colors.secondary_color};
  box-shadow: ${({ theme }) => theme.colors.box_shadow};
`;
