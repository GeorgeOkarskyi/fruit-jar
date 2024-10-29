import React from "react";

import { FilterControls } from "../components/filters-controls/filters-controls";
import { FruitsContainer } from "../components/fruits-container/fruits-container";
import { JarContainer } from "../components/jar-container/jar-container";

export const Layout: React.FC = () => {
  return (
    <div className="container vh-100 p-3">
      <div className="row h-100">
        <div className="col-lg-6 h-100 d-grid">
          <h2 className="text-center mt-2">Fruits</h2>
          <FilterControls></FilterControls>
          <FruitsContainer></FruitsContainer>
        </div>
        <div className="col-lg-6 h-100 d-flex flex-column justify-content-between align-items-center">
          <JarContainer/>
        </div>
      </div>
    </div>
  );
};