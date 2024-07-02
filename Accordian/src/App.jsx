import React from "react";
// import Index from "./components/index";
import ImageSlider from "./components/ImageSlider";

const App = () => {
  return (
    <div>
      {/* <Index /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
};

export default App;
