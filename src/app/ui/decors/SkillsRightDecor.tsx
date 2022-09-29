import React from "react";
import {Decor} from "./Decor";

export const SkillsRightDecor: React.FC = () => (
  <Decor style={{
    zIndex: -1,
    top: -100,
    left: "100%",
    marginLeft: 50,
    width: 1000,
    height: 300,
    backgroundColor: "#142eb5"
  }}/>
)