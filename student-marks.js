// Student Marks 
// Problem
// Write a calPer() constructor function that can calculate
//  percentage of students.
// create 10 students using a different constructor function.
//  Students should have marksobtained, marksoutof key-value pairs.
// Use call and bind on the calPer() constructor function to change
//  the value of 'this' and find the percentage of each student.
// Be creative. See if you could take help of any loop to minimize
//  the amount of code you have to write.


function Calper(marks,total) {
    this.marks=marks;
    this.total=total;
    this.per=function () {
        console.log((this.marks/this.total)*100);
    }

}


function Student(marks,total) {
    this.marks=marks;
    this.total=total;
}

var array=[
{marks:90,total:100},
{marks:85,total:100},
{marks:80,total:100},
{marks:65,total:100},
{marks:55,total:100},
{marks:45,total:100},
{marks:87,total:100},
{marks:92,total:100},
{marks:45,total:100},
{marks:59,total:100}, ]

for(var i=0;i<array.length;i++){
    var student=new Student(array[i].marks,array[i].total);
    var calper=new Calper(array[i].marks,array[i].total);
    console.log(student);
    calper.per();
    
}







// function User(name) {
//     this.name = name;
  
//     this.sayHi = function() {
//      console.log( "My name is: " + this.name );
//     };
//   }
  
//   let john = new User("John");
  
//   john.sayHi(); // My name is: John


