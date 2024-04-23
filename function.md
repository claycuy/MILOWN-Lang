# Function
Welcome to the MILOWN-Lang function page. Here you will be told all the functions that MILOWN-Lang has.
#### Variable
###### Reassign variable:
```
// let name = "john";
mutable name = "john";
```
```
// var name = "john";
variable name = "john";
```
###### Assign variable:
```
// const name = "john";
constant name = "john";
```
#### Condition
```
/*


if (name === "john") {
  console.log("your name is john");
} else if (name === "dave") {
  console.log("your name is dave");
} else {
  console.log("your name is wrong");
}
*/
step (name === "john") {
  toast.log("your name is john");
} next (name === "dave") {
  toast.log("your name is dave");
} else {
  toast.log("your name is wrong");
}
```
#### Interaction
###### User Interaction:
```
// alert("hello world");
toast("hello world");
// prompt("your name");
toast.input("your name");
// confirm("confirmation");
toast.confirm("confirmation");
```
###### Logging/Debugging:
```
// console.info("hello world");
toast.info("hello world");
// console.log("hello world");
toast.log("hello world");
// console.error("hello world");
toast.error("hello world");
```
#### Storage:
###### Data Storage
```
// localStorage.setItem(key, value);
create.localData(key, value);
// sessionStorage.setItem(key, value);
create.sessionData(key, value);
```
###### Data Retrieval
```
// localStorage.getItem(key, value);
take.localData(key, value);
// sessionStorage.getItem(key, value);
take.sessionData(key, value);
```
#### Operation
###### Arithmetic Operations:
```+``` : summation\n
```-``` : subtraction
