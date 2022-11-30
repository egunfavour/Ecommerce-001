import styled from "styled-components";
import Button from "../../components/atoms/button/button.component";

export const MainDiv = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
`;
export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  #firstname{width:100%}

`;
export const Submit = styled(Button)`
  background-color: #45a049;
  color: #ffffff;
  font-family: Source Sans Pro;
  font-weight: 400;
  font-size: 16px;
`;
