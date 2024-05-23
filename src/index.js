import _ from "lodash";
import "./css/styles.css";
import Icon from "./images/profile-1.png";
import Data from "./data/data.xml";
import Notes from "./data/data.csv";
import toml from "./data/data.toml";
import json5 from "./data/data.json5";
import yaml from "./data/data.yaml";

console.log(toml.title);
console.log(toml.owner.name);

console.log(json5.title);
console.log(json5.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

function component() {
  const element = document.createElement("div");

  // Lodash thing. Imported by this script
  element.textContent = _.join(["Hello", "Webpack"], " ");
  element.classList.add("hello");


  // add image to the existing div
  const myIcon = new Image();
  myIcon.src = Icon;


  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}


document.body.appendChild(component());
