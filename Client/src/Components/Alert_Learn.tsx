import { ReactNode } from "react";

interface props {
  children: ReactNode;
  //special props property
  //"children" gets to make us pass like <alert>somename</alert>
  //instead of <alert name ="somename"/>
  //--------------------------------------- And
  // REACT Node pass in with some tags like
  //<p>prop </p>
  //when <alert name = "alert"/>
  //we can "    "    = <p> alert </p> />
}

const Alert = ({ children }: props) => {
  return <div>{children}</div>;
};

export default Alert;
