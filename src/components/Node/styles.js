import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .item-parent {
    margin-bottom: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    p {
      font-weight: bold;
      color: #de5454;
    }
    &:after {
      position: absolute;
      content: "";
      width: 2px;
      height: 25px;
      bottom: 0;
      left: 50%;
      background-color: rgba(255, 255, 255, 0.7);
      transform: translateY(100%);
    }
  }

  .item-children {
    display: flex;
    justify-content: center;
    .item-child {
      padding: 0 15px;
      position: relative;

      &:before,
      &:not(:only-child):after {
        content: "";
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        left: 0;
      }
      &:before {
        left: 50%;
        top: 0;
        transform: translateY(-100%);
        width: 2px;
        height: 25px;
      }
      &:after {
        top: -25px;
        transform: translateY(-100%);
        height: 2px;
        width: 100%;
      }
      &:first-child:after {
        left: 50%;
        width: 50%;
      }
      &:last-child:after {
        width: calc(50% + 1px);
      }
    }
  }
}

.person {
  text-align: center;

  img {
    height: 110px;
    border: 5px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
  }

  .name {
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: normal;
    color: #3baa9d;
    margin: 0;
    position: relative;
    b {
      color: rgba(59, 170, 157, 0.5);
    }
    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 8px;
      background-color: #fff;
      left: 50%;
      top: 0;
      transform: translateY(-100%);
    }
  }
`;

export default Wrapper;
