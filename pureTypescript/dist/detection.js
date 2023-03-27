"use strict";
const detectType = (val) => {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
};
const provideId = (id) => {
    if (!id) {
        console.log("Provide id here");
        return;
    }
    id.toLowerCase();
};
const printAll = (strs) => {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
};
