import Component2 from "./Component2";
import UserContext from "../UserContext";

function Component1(props) {
  const user = props.user;
  return (
    <>
      <UserContext.Provider value={user}>
        <div>user {props.user}</div>
        <Component2 />
      </UserContext.Provider>
    </>
  );
}

export default Component1;
