import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #303840;
  min-height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .container {
    flex-grow: 1;
    overflow: auto;
    justify-content: center;
    padding: 50px;
  }

  h1 {
    color: #fff;
    text-align: center;
    margin-top: 70px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
  }
`;

export default Wrapper;
