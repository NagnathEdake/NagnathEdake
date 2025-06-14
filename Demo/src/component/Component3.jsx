import { useContext } from "react";
import UserContext from "../UserContext";

function Component3() {
  const user = useContext(UserContext);
  return <div>user {user} again!</div>;
}

export default Component3;
