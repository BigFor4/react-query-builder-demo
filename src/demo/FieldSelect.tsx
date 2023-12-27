import React, { useState } from "react";
import { Input, Select } from "antd";
const { Option } = Select;
import PropTypes from "prop-types";
export const SELECT_WIDTH_OFFSET_RIGHT = 120;
const DEFAULT_FONT_SIZE = "14px";
const DEFAULT_FONT_FAMILY = "'Helvetica Neue', Helvetica, Arial, sans-serif";

export const calcTextWidth = function(str, fontFamily = DEFAULT_FONT_FAMILY, fontSize = DEFAULT_FONT_SIZE) {
  var div = document.createElement("div");
  div.innerHTML = str;
  var css = {
    "position": "absolute", "float": "left", "white-space": "nowrap", "visibility": "hidden", 
    "font-size": fontSize, "font-family": fontFamily
  };
  for (let k in css) {
    div.style[k] = css[k];
  }
  div = document.body.appendChild(div);
  var w = div.offsetWidth;
  document.body.removeChild(div);
  return w;
};

const FieldSelect = (props) => {
  const [selectedKey, setSelectedKey] = useState(props.selectedKey);

  const onChange = (e) => {
    const key = e.target.value
    setSelectedKey(key);
    props.setField(key);
  };
  const {
    config,
  } = props;
  console.log(config)
  const renderOperators = () => {
    const options = Object.keys(config.operators).map((key) => {
        const operator = config.operators[key];
        return (
          <Option key={key} value={key}>
            {operator.label}
          </Option>
        );
      });
      return options
  }
  const width =  SELECT_WIDTH_OFFSET_RIGHT;
  let res = (
    <div>
        <Input style={{ width }}
        onChange={onChange}  value={selectedKey}/>
        <Select style={{ width }} >
      {renderOperators()}
    </Select>
    </div>
  );


  return res;
};

FieldSelect.propTypes = {
  config: PropTypes.object.isRequired,
};

export default FieldSelect;
