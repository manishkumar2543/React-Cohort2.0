// console.log(React)
// console.log(ReactDOM)


// let h1=React.createElement("h1",null,"Hello World from React");
// let container=document.getElementById("container");
// let root=ReactDOM.createRoot(container);
// root.render(h1)


// let h1=React.createElement('h1',null,'i am h1 tag');
// let h2=React.createElement('h2',null,'i am h2 tag');
// let div=React.createElement('div',null,[h1,h2]);
// let root=ReactDOM.createRoot(document.querySelector('#container'));
// root.render(div);


// function h1(){
//     return React.createElement('h1',null,'i am h1 tag');
// }

// let root=ReactDOM.createRoot(document.getElementById('container'))
// root.render(h1());



// const h1=()=>React.createElement('h1',null,'i am h1 tag');
// const root=ReactDOM.createRoot(document.getElementById('container'));
// root.render(h1());



// import box from './app.js';
// import circle from './test.js';
// const root=ReactDOM.createRoot(document.querySelector('#container'));
// const parent=()=>React.createElement('div',null,[box(),circle()]);
// root.render(parent());

import parent from './parent.js';
const root= ReactDOM.createRoot(document.querySelector('#container'));
root.render(parent());