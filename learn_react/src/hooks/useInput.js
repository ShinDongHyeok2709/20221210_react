import React, { useRef, useState } from "react";

export function useSimpleInput(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialState);
  };

  return [value, setValue, onChange, reset];
}

//const [refTitle, focusTitle] = useHtmlInputFormCheck();
//< ref={refTitle}>, focusTitle()
export function useInputFocus() {
  const valueRef = useRef();
  const focus = () => {
    return valueRef.current.focus();
  };
  return [valueRef, focus];
}

export function useSimpleInputWithFocus(initialState) {
  const [value, setValue, onChange, reset] = useSimpleInput(initialState);
  const [valueRef, focus] = useInputFocus();
  return [value, setValue, onChange, reset, valueRef, focus];
}

export function useObjectInput(initialState) {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setValue(initialState);
  };
  const getProperty = (paramName) => {
    return value[paramName];
  };

  const setProperty = (paramName, paramValue) => {
    setValue({ ...value, [paramName]: paramValue });
  };

  return [value, setValue, onChange, reset, getProperty, setProperty];
}

export function useArrayObjectInput(initialState) {
  const [value, setValue] = useState(initialState);

  const reset = () => {
    setValue(initialState);
  };

  const onCreate = (paramObjectValue) => {
    setValue([...value, paramObjectValue]);
  };

  const onRemove = (paramName, paramValue) => {
    // setValue(
    //   value.filter((objectValue) => objectValue[paramName] !== paramValue)
    // );

    console.log("****before : ", value);
    setValue((arr) =>
      arr.filter((objectValue) => objectValue[paramName] !== paramValue)
    );
  };

  const onUpdate = (keyName, KeyValue, paramName, paramValue) => {
    setValue(
      value.map((objectValue) =>
        objectValue[keyName] === KeyValue
          ? { ...objectValue, [paramName]: paramValue }
          : objectValue
      )
    );
  };

  return [value, setValue, reset, onCreate, onRemove, onUpdate];
}
