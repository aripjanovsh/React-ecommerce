import {fromJS} from "immutable";
import productsData from "./products";

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 10) { //set error 20%
                reject(new Error('Something bad happened'));
            } else {
                resolve(fromJS(productsData));
            }
        }, 700);
    });
};

export default {
    getProducts
}