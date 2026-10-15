//q1
const ob = {
    "name" : "tom",
    "grade" : "A",
    "subject" : "Biology"
}
console.log(ob.grade);

//q2
const calcutateGrade =(score)=>{
    if(score >= 90){
        return "A+";
    }
    if(score >= 75){
        return "A";
    }
    if(score >=50){
        return "B";
    }
    else{
        return "C";
    }}

console.log(calcutateGrade(30));

//q3
const arr = [5, 20, 40]

const increaseMarks = arr.map((arr)=>
{
    return arr+10;
    
}) 
console.log(increaseMarks);

//q4
const arr1 =[40,50,70,90]

const filterPassedStudent = arr1.filter((arr1)=>
{
    return arr1>40
}
)
console.log(filterPassedStudent);

//q5
const arr2 =[50,60,30,90]

const grade = arr2.map((arr2)=>{
    if(arr2>=90){
        return "+A";
    }
    if(arr2>=50){
        return "B";
    }
    else{
        return "C"
    }
})

console.log(grade);

const a = arr2.filter((arr2)=>{
    return arr2>75;
})

console.log(a);

const b = arr2.reduce((arr2,total)=>{
    return arr2+total
})

console.log(b);

//q6
const arr3 = [50, 70, 90, 35 ]

const findTopper = (arr)=>{
    return Math.max(...arr)

}

console.log(findTopper(arr3));

//q7
const students = [
    {name:"Tom",marks:75},
     {name:"Jerry",marks:90},
      {name:"Harry",marks:85},
       {name:"John",marks:60},
];

const result = students.filter((student) =>{
    return student.marks > 80;
})

console.log(result);

//q8
const arr4 = [40,60,30,50];

const sum = arr4.reduce((arr4,total) =>{
    return arr4 + total;
})

console.log(sum);

//q9

//q10
class Product {
    constructor(name,productId,price){
        this.name = name;
        this.productId = productId;
        this.price =price;
    }
    displayDetails(){
        console.log("Product Name:" +this.name);
        console.log("Product ID:" +this.productId);
        console.log("Price:" +this.price);
        
    }
}

const p1 = new Product("Laptop", 101, 45000)

p1.displayDetails();


//q11
const person = {
    name: "Tom",
    age:21,
    gender: "Male"
};

console.log(person.name);


//q12
const arr5 = [12,3,5,8]

const square = arr5.map((arr5)=>{
    return arr5*arr5;
})

console.log(square);

//q13
const arr6 = [2,4,6,8]
const multiplyByTwo =  function (arr) {

     return arr.map((num)=> {
    return num*2;
        })
    }

console.log(multiplyByTwo(arr6));

//q14
const arr8 = [2,5,8,10,15,18]
const filterEvenNumber = arr8.filter((arr)=>{
    return arr%2==0
})

console.log(filterEvenNumber);

//q15
const arr9 =[2,4,7,10,5]

const square2 = arr9.map((arr)=>{
    return arr*arr;
})

console.log(square2);

const odd = arr9.filter((arr)=>{
    return arr%2!=0
})

console.log(odd);

const sum2 = arr9.reduce((arr,total)=>{
    return arr+total
})

console.log(sum2);


//q16
const arr7 =[2,4,6,8]
function findMax(arr) {
    return Math.max(...arr)
}

console.log(findMax(arr7));

//q17
//q18










