

//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
// lien ket friebase
const firebaseConfig = {
  apiKey: "AIzaSyCO4a5wddoY5jHMlKI0JapfzrcNzHksltY",
  authDomain: "hoang-iot-ute.firebaseapp.com",
  databaseURL: "https://hoang-iot-ute-default-rtdb.firebaseio.com",
  projectId: "hoang-iot-ute",
  storageBucket: "hoang-iot-ute.appspot.com",
  messagingSenderId: "977695660193",
  appId: "1:977695660193:web:9050119259f007a84838e0"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

   //Den 04
   var btnOn = document.getElementById("btnOnId_04");
   var btnOff = document.getElementById("btnOffId_04");
   
   btnOn.onclick = function(){
     // document.getElementById("denId_04").src = "./img/light_bulb.png"
     //database.ref("/TT_IoT/Hum").remove();
   
     database.ref("/ROOM02").update({
       "led01" : "1"
       // "Hum" : null
     });
   }
   
   btnOff.onclick = function(){
       // document.getElementById("denId_04").src = "./img/light_bulb_off.png"
   
     database.ref("/ROOM02").update({
       "led01" : "0"
     });
   }
   //auto update ImgDen
   database.ref("/ROOM02/led01").on("value", function(snapshot) {
     if(snapshot.exists()){
       var ss = snapshot.val();
       if(ss==1)
       {document.getElementById("denId_04").src = "./img/light_bulb.png";
       document.getElementById("denId_04").style.borderColor= "rgba(230, 240, 35, 0.929)";
       document.getElementById("btnOnId_04").style.backgroundColor= "rgba(247,179,33,0.98)";
       document.getElementById("btnOffId_04").style.backgroundColor= "rgba(100,100,111,0.2)";
     }
     else
      { document.getElementById("denId_04").src = "./img/light_bulb_off.png";
      document.getElementById("denId_04").style.borderColor= "rgba(105, 103, 93, 0.096)";
       document.getElementById("btnOnId_04").style.backgroundColor= "rgba(100,100,111,0.2)";
       document.getElementById("btnOffId_04").style.backgroundColor= "rgba(247,179,33,0.98)";
     }
   }else
     console.log("No data available!")
 });
 
   //Den 05
   var btnOn = document.getElementById("btnOnId_05");
   var btnOff = document.getElementById("btnOffId_05");
   
   btnOn.onclick = function(){
     database.ref("/ROOM02").update({
       "led02" : "1"
     });
   }
   
   btnOff.onclick = function(){
     database.ref("/ROOM02").update({
       "led02" : "0"
     });
   }
   //auto update ImgDen
   database.ref("/ROOM02/led02").on("value", function(snapshot) {
     if(snapshot.exists()){
       var ss = snapshot.val();
       if(ss==1)
       {document.getElementById("denId_05").src = "./img/light_bulb.png";
       document.getElementById("denId_05").style.borderColor= "rgba(230, 240, 35, 0.929)";
       document.getElementById("btnOnId_05").style.backgroundColor= "rgba(247,179,33,0.98)";
       document.getElementById("btnOffId_05").style.backgroundColor= "rgba(100,100,111,0.2)";
     }
     else
      { document.getElementById("denId_05").src = "./img/light_bulb_off.png";
      document.getElementById("denId_05").style.borderColor= "rgba(105, 103, 93, 0.096)";
       document.getElementById("btnOnId_05").style.backgroundColor= "rgba(100,100,111,0.2)";
       document.getElementById("btnOffId_05").style.backgroundColor= "rgba(247,179,33,0.98)";
     }
   }else
     console.log("No data available!")
 });
 
   //Den 06
   var btnOn = document.getElementById("btnOnId_06");
   var btnOff = document.getElementById("btnOffId_06");
   
   btnOn.onclick = function(){
     database.ref("/ROOM02").update({
       "led03" : "1"
     });
   }
   
   btnOff.onclick = function(){
     database.ref("/ROOM02").update({
       "led03" : "0"
     });
   }
   //auto update ImgDen
   database.ref("/ROOM02/led03").on("value", function(snapshot) {
     if(snapshot.exists()){
       var ss = snapshot.val();
       if(ss==1)
       {document.getElementById("denId_06").src = "./img/light_bulb.png";
       document.getElementById("denId_06").style.borderColor= "rgba(230, 240, 35, 0.929)";
       document.getElementById("btnOnId_06").style.backgroundColor= "rgba(247,179,33,0.98)";
       document.getElementById("btnOffId_06").style.backgroundColor= "rgba(100,100,111,0.2)";
     }
     else
      { document.getElementById("denId_06").src = "./img/light_bulb_off.png";
      document.getElementById("denId_06").style.borderColor= "rgba(105, 103, 93, 0.096)";
       document.getElementById("btnOnId_06").style.backgroundColor= "rgba(100,100,111,0.2)";
       document.getElementById("btnOffId_06").style.backgroundColor= "rgba(247,179,33,0.98)";
     }
   }else
     console.log("No data available!")
 });
 
 
   //get Temp from Firebase (auto update when data changes)-------------
   database.ref("/ROOM02/temp").on("value", function(snapshot) {
     if(snapshot.exists()){
       var temp01 = snapshot.val();
       document.getElementById("nhietdo01").innerHTML = temp01;
     }
     else
       console.log("No data available!")
   });
   //get Humi from Firebase (auto update when data changes)-------------
   database.ref("/ROOM02/humi").on("value", function(snapshot) {
     if(snapshot.exists()){
       var humi01 = snapshot.val();
       document.getElementById("doam01").innerHTML = humi01;
     }
     else
       console.log("No data available!")
   });
 
   // test: get once.
   database.ref("/ROOM02").get().then((snapshot) => {
     if(snapshot.exists())
       console.log(snapshot.val())
     else
       console.log("no data available!")
   })






