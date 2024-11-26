
/**
 * 
 *<div id = "parent">
 <div id  = " child">
 <h1> hello namaste h1</h1>
  <h2> hello namaste h2</h2>
 </div>
 </div> 
 *
 *ReactElement(object) = > HTML(Browser Understands)
 */

 const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child1"},
       [React.createElement("h1",{}, " hello namaste h1"), 
        React.createElement("h2",{}, " hello namaste h2"),
    ]),
    React.createElement("div", {id: "child2"},
        [React.createElement("h1",{}, " hello namaste h1"), 
         React.createElement("h2",{}, " hello namaste h2"),
     ]),
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
//it works only which inside a root div

root.render(parent);




// const heading = React.createElement("h1",
//     {id:"heading",xyz: "abc"},
//     "Hello world From React!");

//     console.log(heading); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);