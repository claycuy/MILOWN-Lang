# Function
> Welcome to the MILOWN-Lang function page. Here you will be told all the functions that MILOWN-Lang has.
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
} stepout {
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
#### Callback functions
```
/*
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      toast.log("The enter button has been clicked");
    }
  });
*/  
run.key("Enter", function() {
toast.log("The enter button has been clicked");
});
```
```
/*
document.addEventListener('mousedown',function (event) {
    if (event.button === 0) {
      toast.log("Left click on the mouse is pressed");
    }
  });
run.mouse(0, function() {
toast.log("Left click on the mouse is pressed");
});
*/
```
#### Operation
###### Arithmetic Operations:
```+``` : summation  
```-``` : subtraction  
```*``` : multiplication  
```/``` : distribution  
```%``` : modulus  
```++``` : increments  
```--``` : decrement  
###### Comparison operations:
```==: or ===:``` : together with  
```!=: or !==:``` : not equal to  
```<``` : less than  
```>``` : more than  
```<=:``` : less than or equal to  
```>=:``` : more than or equal to
###### Logic operations:
```&&``` : and  
```||``` : or  
```!!``` : not  
