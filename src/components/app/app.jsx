import React from "react";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesToStay} = props;
  return (
    <MainPage placesToStay={placesToStay} />
  );
};

export default App;
