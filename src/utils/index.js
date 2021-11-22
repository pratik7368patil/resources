import React from "react";

export default function buildData(data) {
  if (!data) {
    return [];
  }
  const result = createElements(data.editor);
  return result;
}

function createElements(elements) {
  if (!elements) {
    return [];
  }
  const result = [];
  for (let i = 0; i < elements.length; i++) {
    result.push(
      React.createElement(
        elements[i].comp,
        elements[i].props ? { ...elements[i].props, key: i } : { key: i },
        elements[i].childs
          ? createElements(elements[i].childs)
          : elements[i].data
      )
    );
  }
  return result;
}
