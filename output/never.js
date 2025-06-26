"use strict";
function loopFunction() {
    setInterval(() => {
        console.log("hello");
    }, 1000);
}
loopFunction();
//never effectively throws an error whenever it is defined.
//never is rarely used, especially by itself, its primary use is in advanced generics.
