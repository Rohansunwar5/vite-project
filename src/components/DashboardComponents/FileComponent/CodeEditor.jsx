import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeEditor.css";

const CodeEditor = ({ fileName, data, setData }) => {
//   const [data, setData] = useState(`\n`);

  const codes = {
    html: "xml",
    php: "php",
    js: "javascript",
    jsx: "jsx",
    tsx: "typescript",
    txt: "textile",
    xml: "xml",
    css: "css",
    c: "clike",
    cpp: "clike",
    java: "java",
    cs: "clike",
    py: "python",
    json: "javascript",
  };

  const handleKeyDown = (evt) => {
    let value = data,
      selStartPos = evt.currentTarget.selectionStart;

    if (evt.key === "Tab") {
      value =
        value.substring(0, selStartPos) +
        "   " +
        value.substring(selStartPos, value.length);
      evt.currentTarget.selectionStart = selStartPos + 3;
      evt.currentTarget.selectionEnd = selStartPos + 4;
      evt.preventDefault();

      setData(value);
    }
  };

  // Calculate the line count by splitting the data and filtering out empty lines
  const lineCount = data.split("\n").filter(line => line.trim() !== "").length;

  return (
    <div className="row px-5 mt-3">
      <div className="col-md-12 mx-auto code-edit-container p-3">
        <div className="line-numbers">
          {Array.from({ length: lineCount }, (_, index) => (
            <span key={index} className="line-number">
              {index + 1}
            </span>
          ))}
        </div>
        <div className="slash">/</div>
        <textarea
          className="code-input w-100"
          value={data}
          // onKeyDown={handleKeyDown}
          onChange={(e) => setData(e.target.value)}
        />
        <div className="code-output">
          <SyntaxHighlighter
            language={codes[fileName.split(".")[1]]}
            showLineNumbers
            style={duotoneLight}
            wrapLines
            startingLineNumber={1}
          >
            {data}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
