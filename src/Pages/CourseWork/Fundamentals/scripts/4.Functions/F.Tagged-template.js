/*===================================
||
|| Functions: Tagged Template String Functions
||
===================================*/
console.group("Functions: Tagged Template String Functions");

const myTaggedTmpStrFun = (strings, ...values) => {
    return ` ${strings[0]} ${values[0]} ${strings[1]}`;
};

const location = "pool";

const result = myTaggedTmpStrFun`I went to the ${location} yesterday`;

console.log(result);

console.groupEnd();
