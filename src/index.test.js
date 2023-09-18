/** Non-functional code for unit tests on default HTML items

import './styles/normalize.css';
import './styles/index.css';

const getDocumentElement = require("./index")

test("Check if Root element is not broken", () => {
    expect(getDocumentElement("#root").toString()).toBe("<div id=\"root\">");
});

test("Check if font-size on webpage HTML is not altered", () => {
    expect(getDocumentElement("html").style.fontSize).toBe("16px");
});

 */

test("Simple addition placeholder test", () => {
    expect(1+1).toBe(2);
});