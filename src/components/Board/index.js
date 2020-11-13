import data from "../../data";
import Node from "../Node";
import Wrapper from "./styles";

const Board = () => {
  return (
    <Wrapper>
      <h1> 1. Management Hierarchy</h1>
      <div className="container">
        <div className="wrapper">
          {data.map((item) => (
            <Node {...item} key={item.id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Board;
