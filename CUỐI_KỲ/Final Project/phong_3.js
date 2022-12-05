
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
  
  //Den 07
  var btnOn = document.getElementById("btnOnId_07");
  var btnOff = document.getElementById("btnOffId_07");
  
  btnOn.onclick = function(){
    database.ref("/ROOM03").update({
      "led01" : "1"
    });
    
  }
  
  btnOff.onclick = function(){
    database.ref("/ROOM03").update({
      "led01" : "0"
    });
  }
  //auto update ImgDen
  database.ref("/ROOM03/led01").on("value", function(snapshot) {
    if(snapshot.exists()){
      var ss = snapshot.val();
      if(ss==1)
      {document.getElementById("denId_07").src = "./img/light_bulb.png";
       document.getElementById("denId_07").style.borderColor= "rgba(230, 240, 35, 0.929)";
      document.getElementById("btnOnId_07").style.backgroundColor= "rgba(247,179,33,0.98)";
      document.getElementById("btnOffId_07").style.backgroundColor= "rgba(100,100,111,0.2)";
    }
    else
     { document.getElementById("denId_07").src = "./img/light_bulb_off.png";
     document.getElementById("denId_07").style.borderColor= "rgba(105, 103, 93, 0.096)";
      document.getElementById("btnOnId_07").style.backgroundColor= "rgba(100,100,111,0.2)";
      document.getElementById("btnOffId_07").style.backgroundColor= "rgba(247,179,33,0.98)";
    }
  }else
    console.log("No data available!")
});
    //Den 08
  var btnOn = document.getElementById("btnOnId_08");
  var btnOff = document.getElementById("btnOffId_08");
  
  btnOn.onclick = function(){
    database.ref("/ROOM03").update({
      "led02" : "1"
    });
  }
  
  btnOff.onclick = function(){
    database.ref("/ROOM03").update({
      "led02" : "0"
    });
  }
  //auto update ImgDen
  database.ref("/ROOM03/led02").on("value", function(snapshot) {
    if(snapshot.exists()){
      var ss = snapshot.val();
      if(ss==1)
      {document.getElementById("denId_08").src = "./img/light_bulb.png";
      document.getElementById("denId_08").style.borderColor= "rgba(230, 240, 35, 0.929)";
      document.getElementById("btnOnId_08").style.backgroundColor= "rgba(247,179,33,0.98)";
      document.getElementById("btnOffId_08").style.backgroundColor= "rgba(100,100,111,0.2)";
    }
    else
     { document.getElementById("denId_08").src = "./img/light_bulb_off.png";
     document.getElementById("denId_08").style.borderColor= "rgba(105, 103, 93, 0.096)";
      document.getElementById("btnOnId_08").style.backgroundColor= "rgba(100,100,111,0.2)";
      document.getElementById("btnOffId_08").style.backgroundColor= "rgba(247,179,33,0.98)";
    }
  }else
    console.log("No data available!")
});

  //Den 09
  var btnOn = document.getElementById("btnOnId_09");
  var btnOff = document.getElementById("btnOffId_09");
  
  btnOn.onclick = function(){
    database.ref("/ROOM03").update({
      "led03" : "1"
    });
  }
  
  btnOff.onclick = function(){
    database.ref("/ROOM03").update({
      "led03" : "0"
    });
  }
  //auto update ImgDen
  database.ref("/ROOM03/led03").on("value", function(snapshot) {
    if(snapshot.exists()){
      var ss = snapshot.val();
      if(ss==1)
      {document.getElementById("denId_09").src = "./img/light_bulb.png";
      document.getElementById("denId_09").style.borderColor= "rgba(230, 240, 35, 0.929)";
      document.getElementById("btnOnId_09").style.backgroundColor= "rgba(247,179,33,0.98)";
      document.getElementById("btnOffId_09").style.backgroundColor= "rgba(100,100,111,0.2)";
    }
    else
     { document.getElementById("denId_09").src = "./img/light_bulb_off.png";
     document.getElementById("denId_09").style.borderColor= "rgba(105, 103, 93, 0.096)";
      document.getElementById("btnOnId_09").style.backgroundColor= "rgba(100,100,111,0.2)";
      document.getElementById("btnOffId_09").style.backgroundColor= "rgba(247,179,33,0.98)";
    }
  }else
    console.log("No data available!")
});


  //get Temp from Firebase (auto update when data changes)-------------
  database.ref("/ROOM03/temp").on("value", function(snapshot) {
    if(snapshot.exists()){
      var temp01 = snapshot.val();
      document.getElementById("nhietdo02").innerHTML = temp01;
    }
    else
      console.log("No data available!")
  });
  //get Humi from Firebase (auto update when data changes)-------------
  database.ref("/ROOM03/humi").on("value", function(snapshot) {
    if(snapshot.exists()){
      var humi01 = snapshot.val();
      document.getElementById("doam02").innerHTML = humi01;
    }
    else
      console.log("No data available!")
  });

  // test: get once.
  database.ref("/ROOM03").get().then((snapshot) => {
    if(snapshot.exists())
      console.log(snapshot.val())
    else
      console.log("no data available!")
  })

  
  
  
  
  
  