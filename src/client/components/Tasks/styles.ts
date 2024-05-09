import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 120px;
`;

export const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.secondary};
`;

export const List = styled.div`
  width: 50%;
  height: 50vh;
  border: 1px solid ${(props) => props.theme.secondary};
  border-radius: 4px;
  margin: 24px auto 0px auto;
  padding: 12px;
  overflow: auto;
`;
