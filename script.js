const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);

const parent = React.createElement(
  "div",
  { id: "div1" },
  React.createElement("div", { id: "div2" }, [
    /// nesting
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
