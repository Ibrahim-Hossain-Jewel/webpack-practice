import { container } from "./test";
import '../styles/style.css';

const array = [1,21,33,4,5,6];
const customFunction = (val) => {
    for(const mother of val){
        console.log(mother + container);
    }
}
customFunction(array);
