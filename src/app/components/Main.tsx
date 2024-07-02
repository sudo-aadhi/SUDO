import React from "react";
import { GridBackgroundDemo } from "../addon/GridBackgroundDemo";
import Window from "../addon/window";


const Main = () => {
  return (
    <div className="flex items-center w-full flex-col">
      <GridBackgroundDemo />
      <Window />
    </div>
  );
};

export default Main;
