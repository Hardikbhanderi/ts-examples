"use strict";
const score = [];
const names = [];
const checkValidation = (val) => {
    return val;
};
const checkValidationTwo = (val) => {
    return val;
};
const checkFinal = (val) => {
    return val;
};
checkFinal({ type: "suv", modalYear: 2018 });
function getSearchValue(products) {
    return products[3];
}
const getMoreSearchValue = (prod) => {
    return prod[2];
};
const anotherFunction = (valOne, valTwo) => {
    return { valOne, valTwo };
};
anotherFunction(3, {
    connection: "direct",
    username: "test",
    password: "Test@123"
});
class Playlist {
    constructor() {
        this.video = [];
    }
    addVideo(link) {
        this.video.push(link);
    }
}
