import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  /* width:100%; */
  margin: 100px auto 0;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
  -moz-box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
  box-shadow: 0 2px 4px 0 rgba(72, 72, 72, 0.83),
    0 10px 15px 0 rgba(126, 126, 126, 0.12),
    0 -2px 6px 1px rgba(199, 199, 199, 0.55) inset,
    0 2px 4px 2px rgba(255, 255, 255, 0.83) inset;
`;
export const Input = styled.input`
  width: 90%;
  height: 30px;
  padding-left: 15px;
  border: none;
  border-radius: 6px;
  color: ${props => props.theme.primary_color};
  font-size: 18px;
  font-weight: 500;
  /* background-color: #fffbf8; */
  /* -webkit-box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;
  -moz-box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset; */
  box-shadow: 0 -2px 2px 0 rgba(199, 199, 199, 0.55), 0 1px 1px 0 #fff,
    0 2px 2px 1px #fafafa, 0 2px 4px 0 #b2b2b2 inset, 0 -1px 1px 0 #f2f2f2 inset,
    0 15px 15px 0 rgba(41, 41, 41, 0.09) inset;

  &:focus {
    outline: 2px solid ${props => props.theme.primary_color};
  }
  &::placeholder {
    /* color: ${props => props.theme.primary_color}; */
    font-size: 18px;
    font-weight: 500;
  }
`;
