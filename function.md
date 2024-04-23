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
