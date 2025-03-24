{/* <body>
    
    <p>Enter Moving speef</p>
    <input type="number" placeholder="enter Speed" id="speed"/>
    <button type="button" id="getSpeed" onclick="checkSpeed()">Check Speed</button>
    <p id="response"></p>
</body>
 */}



function checkSpeed(){
   const input=Number( document.getElementById('speed').value)
    let response=document.getElementById('response')


//    Challenge 2: Speed Detector (Toy Problem)

// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”. 
// Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points,
//     the function should print: “License suspended”.

if(isNaN(input)){
   response.innerHTML="Empty speed"
   return
  
}
if(input <=70 ){
   response.innerHTML="OK"
}else if(input >70){
   let speedAbove = input -70
   let merit = Math.floor(speedAbove/5)
   if(merit){
      response.innerHTML=`${merit} demerit Point`
   }
   if(merit >12){
       response.innerHTML=`${merit} demerit Points. License suspended`
   }
}


}
