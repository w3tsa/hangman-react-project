import React from "react";
function AlphaButtons() {
  return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
    <button value={ltr} key={ltr}>
      {ltr}
    </button>
  ));
}
export { AlphaButtons };

/*
 */
