console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Usind For Each
Create a function called addKeyPowerIndex
that takes an array of objects as a parameter
and return this array with add a key to each object
that is the (index) of this object in this array
and the value will be the (power) of the index
var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]
Ex: addKeyPowerIndex(arrOfObj1)
=> [
  {0: 0, a: 12},
  {1: 1, b: 5},
  {2: 4, c: 16},
  {3: 9, d: 4},
  {4: 16, e: 3}
] 
var arrOfObj2 = [
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]
Ex: addKeyPowerIndex(arrOfObj2)
=> [
  {0: 0, a: 'cat'},
  {1: 1, b: 'dog'},
  {2: 4, c: 'duck'}
]   
*/
function addKeyPowerIndex(obj){
  obj.forEach((element,i) => {
    element[i] = i;  
  });

return obj;
};

var arrOfObj2 = [
  {a: 'cat'},
  {b: 'dog'},
  {c: 'duck'},
]

// console.log( addKeyPowerIndex(arrOfObj2));





/* Q2:
Usind Map
Create a function called decreseBy
that takes an array of numbers and number as a parameter
and return a new array after will decrease this number 
from each element in this array
var arrOfNum1 = [77,5,33]
Ex: decreseBy(arrOfnum1,10)
=> [67,-5,23]
Ex: decreseBy(arrOfNum1,-6)
=> [83, 11, 39]
*/


function decreseBy(arr,y){
    newArr = arr.map(x => console.log(x-y));
};
  
decreseBy([77,5,33], 10);
decreseBy([77,5,33], -6);



/* Q3:
Using Filter
Create a function called nameLongerThan
that takes an array of objects and number as a parameter
and return a new array with only the object has a value inside 
the key name longer than this number
var arrOfObj4 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj4,4)
=>[
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj4,6)
=>[
  { name: "elizabeth"}
]
*/

function nameLongerThan(obj,num){
return obj.filter(a => {
   if(a.name.length > num){
     return a.name
   };
 })
};

var arrOfObj4 = [
  {name: "alex"},
  {name: "mercer"},
  {name: "alice"},
  {name: "zaheer"},
  {name: "elizabeth"},
]

// console.log(nameLongerThan(arrOfObj4,6))


/* Q4:
Using Reduce
Create a function called avgLength
that takes an array of objects of strings and key as a parameter
and return the avg of the length of this key inside this objects
var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]
Ex: avgLength(arrOfObj4,"name")
=> 6
Ex: avgLength(arrOfObj4,"food")
=> 6.8
*/
function avgLength(obj,str){
    var sum = 0;
    obj.reduce((acc,current) => {
        if(str == "name"){
        sum += current.name.length;
    }

    else if(str == "food") {
    sum += current.food.length;
    };
},0);

return sum / obj.length ;
}

var arrOfObj4 = [
  {name: "alex", food: "fried chiken"},
  {name: "mercer", food: "pizaa"},
  {name: "alice", food: "burger"},
  {name: "zaheer", food: "hot dog"},
  {name: "elizabeth", food: "eggs"}
]

console.log(avgLength(arrOfObj4,"food"));