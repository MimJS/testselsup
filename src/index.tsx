import React from "react";
import ReactDOM from "react-dom";
import ParamEditor from "./ParamEditor";

ReactDOM.render(
  <React.StrictMode>
    <ParamEditor
      params={[
        {
          id: 1,
          name: "Назначение",
          type: "string",
        },
        {
          id: 2,
          name: "Длина",
          type: "string",
        },
      ]}
      model={{
        paramValues: [
          {
            paramId: 1,
            value: "повседневное",
          },
          {
            paramId: 3,
            value: "повседневное",
          },
          {
            paramId: 4,
            value: "повседневное",
          },
          {
            paramId: 5,
            value: "повседневное",
          },
          {
            paramId: 6,
            value: "повседневное",
          },
          {
            paramId: 7,
            value: "повседневное",
          },
        ],
        colors: []
      }}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
