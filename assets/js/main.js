

// for (var i = 2; i <= 100; i++) {
//   numeri.push(i);
// }

// for (var j = 0; j < numeri.length; j++) {
//   // if (i % 3 == 0){
//   //   console.log(numeri[i]);
//     // document.getElementById('numeri').innerHTML += "<li>" + "fizz" + "</li>";
//   }
//   console.log(numeri[j]);
//   // document.getElementById('numeri').innerHTML += "<li>" + numeri[j] + "</li>";
// }


for (var i = 1; i < 101; i++) {
  if (i %15 == 0) {
    console.log("FizzBuzz");
  }
  else if (i %5 == 0){
    console.log("Buzz");
  }
  else if (i %3 == 0){
    console.log("Fizz");
  }
  else{
    console.log(i);
  }
}


// for (var i=1; i < 101; i++){
//     if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }
