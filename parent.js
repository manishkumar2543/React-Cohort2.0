import box from "./app";
import circle from "./test";
const parent=()=>{
    return React.createElement('div',{id:'parent'},[box(),circle()]);
}

export default parent;