import React from "react";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import NavMahjong from "features/nav/NavMahjong";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { BreadcrumbsMJ } from "features/BreadcrumbsMJ/BreadcrumbsMJ";
import HuEditor from "features/HuEditor/HuEditor";
import HuSelector from "./features/HuSelector/HuSelector";

const App = () => {
  return (
    <Provider store={store}>
      <div className="bp3-dark">
        <NavMahjong></NavMahjong>
        <div className="breadcrumbs">
          <BreadcrumbsMJ></BreadcrumbsMJ>
        </div>
        <div>
          <HuSelector></HuSelector>
          <HuEditor></HuEditor>
        </div>
      </div>
    </Provider>
  );
};

export default App;
