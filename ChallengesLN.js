//challenge1

var num1= 65;
var num2= 0;
var sum=num1 + num2;

function compare(num1,num2,sum){
  
  if(num1 == 65 || sum == 65){
    return true;
  }
}
console.log(compare(65,0));

//////////////////////////////////////////////////////
//challenge2

var side1 = 7; 
var side2 = 8; 
var side3 = 9; 
var perimeter = (side1 + side2 + side3)/2;
var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);

//////////////////////////

//challenge3

var x,y,z;

x= prompt("type a number");
y= prompt("type another number");
z= prompt("type one last number");
var largestNum  = Math.max(x,y,z);
console.log(x +" "+ y +" "+ z + " " + ", "+ largestNum + " is the largest number");

  
  ///////////////////////////
  
  //challenge4
  
var x = prompt("Please insert a number");

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}
console.log(time_convert(x));

//////////////////////////////

//challenge5

var firstw = prompt("Please enter first word");
var secondw = prompt("Please enter another word");

var arr1= firstw.split("");
var arr2=secondw.split("");
var arr3=[];

for(var i = 0; i< firstw.length; i++){
   for(var j = 0; j< secondw.length; j++){
      if(firstw[i] == secondw[j]){
	     arr3.push(firstw[i]);
		 
}
    }
		 }
   
         console.log(arr3);
   
   
   
   
   
   
   
   


  
  