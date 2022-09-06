/* eslint-disable */
import "./src/styles/global.css";

/**
 * Trust All Scripts
 *
 * This is a dirty little script for iterating over script tags
 * of your Ghost posts and adding them to the document head.
 *
 * This works for any script that then injects content into the page
 * via ids/classnames etc.
 *
 */
export const trustAllScripts = function () {
  let scriptNodes = document.querySelectorAll(".load-external-scripts script");

  for (let i = 0; i < scriptNodes.length; i += 1) {
    let node = scriptNodes[i];
    let s = document.createElement("script");
    s.type = node.type || "text/javascript";

    if (node.attributes.src) {
      s.src = node.attributes.src.value;
    } else {
      s.innerHTML = node.innerHTML;
    }

    document.getElementsByTagName("head")[0].appendChild(s);
  }
};
