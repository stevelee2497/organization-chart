import Wrapper from "./styles";

const Node = ({ name, position, avatar, children }) => {
  return (
    <Wrapper>
      {children.length === 0 ? (
        <div className="person">
          <img src={avatar} alt="" />
          <p className="name">
            {name}
            <br />
            <b>{position}</b>
          </p>
        </div>
      ) : (
        <>
          <div className="item-parent">
            <div className="person">
              <img src={avatar} alt="" />
              <p className="name">
                {name}
                <br />
                <b>{position}</b>
              </p>
            </div>
          </div>
          <div className="item-children">
            {children.map((child) => (
              <div className="item-child" key={child.id}>
                <Node {...child} />
              </div>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Node;
