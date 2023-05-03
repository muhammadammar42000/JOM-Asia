import React from "react";
import Leftbar from "../../components/leftbar";
import Cards from "../../components/cards";
import EditorChoice from "./EditorChoice";
const Index = () => {
  return (
    <div>
      <div>
        <div className="main_layout">
          <Leftbar index={2} />
          <div className="right_bar">
            <div className="main_notifications_heading">
              <div>Top Places</div>
            </div>
            <Cards />
            <EditorChoice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
