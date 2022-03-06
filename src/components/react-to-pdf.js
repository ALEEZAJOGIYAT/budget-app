import React, { useRef } from "react";

export const ReactToPdf = (options) => {
  const ref = React.createRef();

  return (
    <div>
      <ReactToPdf
        targetRef={ref}
        filename="div-blue.pdf"
        options={options}
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </ReactToPdf>
      <div style={{ width: 500, height: 500, background: "blue" }} ref={ref} />
    </div>
  );
};
