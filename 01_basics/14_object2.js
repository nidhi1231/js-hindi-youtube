//const tinderUser = new Object() // declare object singleton object h
const tinderUser = {} // non-singleton object
//console.log(tinderUser); // {} gives empty object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "somya@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname: "Choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4) //assign()
const obj3 = {...obj1,...obj2} //spread
//console.log(obj3);
const user =[
{
    id:1,
    email: "h@gmail.com"

},
{
    id:2,
    email: "g@gmail.com"

},
{
    id:3,
    email: "i@gmail.com"

}
]
user[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //object se key nikalna
// console.log(Object.values(tinderUser)); // object se value niklna
// console.log(Object.entries(tinderUser)); // object se enteries nikalna
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// course.courseInstructor  // 1 syntax
//const {courseInstructor} = course // 2 syntax
const {courseInstructor: instructor} = course // 3 syntax -  object structure
//console.log(courseInstructor);
console.log(instructor);


