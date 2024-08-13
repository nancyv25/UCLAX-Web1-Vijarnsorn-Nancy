/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/

console.group("Functions: Destructuring");

const readPerson = ({ first, last, email, colors }) => {
    //const { first, last, email, colors } = PersonObj;

    console.log(`Hey ${first} ${last}, your email is ${email}`);

    console.log("Your favorite colors are:");
    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Nancy",
    last: "Vijarnsorn",
    email: "n.vijarnsorn@gmail.com",
    colors: ["red", "green", "blue"],
};

const person2 = {
    first: "Anthony",
    last: "Gonzalez",
    email: "n.vijarnsorn@gmail.com",
    colors: ["cyan", "teal", "purple"],
};

readPerson(person1);
readPerson(person2);
console.groupEnd();
