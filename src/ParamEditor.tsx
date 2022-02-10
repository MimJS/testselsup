import "./paramEditor.scss";

interface Param {
  id: number;
  name: string;
  type: string;
}
interface ParamValue {
  paramId: number;
  value: string;
}
interface Color {}
interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}
interface Props {
  params: Param[];
  model: Model;
}

const ParamEditor = ({ params, model }: Props) => {
  function getModel(): Model {
    let array = [];
    for (let i in params) {
      const data = params[i];
      const paramIndex = model.paramValues.findIndex(
        (v) => v.paramId === data.id
      );
      if (paramIndex < 0) {
        array.push({
          paramId: data.id,
          value: "",
        });
      } else {
        array.push(model.paramValues[paramIndex]);
      }
    }
    return {
      paramValues: array,
      colors: [],
    };
  }
  const changeValue = (newValue: string, id: number) => {
    const inputDataIndex = model.paramValues.findIndex(
      (data) => data.paramId === id
    );
    if (inputDataIndex === -1) {
      model.paramValues.push({
        paramId: id,
        value: newValue,
      });
    } else {
      model.paramValues[inputDataIndex].value = newValue;
    }
  };
  return (
    <>
      {params.map((v, i) => {
        const inputDataIndex = model.paramValues.findIndex(
          (data) => data.paramId === v.id
        );
        const inputData =
          inputDataIndex !== -1 ? model.paramValues[inputDataIndex].value : "";
        return (
          <div className="Input" key={i}>
            <span className="Input--name">{v.name}</span>
            <input
              className="Input--in"
              defaultValue={inputData}
              onChange={(e) => changeValue(e.currentTarget.value, v.id)}
            />
          </div>
        );
      })}
      <button onClick={() => console.log(getModel())}>Get paramValues</button>
    </>
  );
};

export default ParamEditor;
