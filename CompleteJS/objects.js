const student = {
    fullname: "Roshan kumar",
    age: 19,
    cgpa: 8.8,
    isPass: true,
};
student["age"] = student["age"] +1;
student["name"] = "Ashu Sharma";
student["fullname"] = "Anshu Sharma";

console.log(student["isPass"]);
console.log(student["age"]);
console.log(student["cgpa"]);
console.log(student[`fullname`]);

const profile = {
    username : "@pkmahto",
    isFollow: false, 
    followers: 75,
    followint: 80,
};
console.log(typeof profile["followers"]); 