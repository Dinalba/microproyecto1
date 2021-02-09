//Carrusel

document.getElementById("btn1").onclick = function () {
  var imagen1 = document.getElementById("slide");
  imagen1.style.background = "url(images/Background1.png)";
  imagen1.style.backgroundSize = "100vw 100vh";
};

document.getElementById("btn2").onclick = function () {
  var imagen2 = document.getElementById("slide");
  imagen2.style.backgroundImage = "url(images/Background6.png)";
  imagen2.style.backgroundSize = "100vw 100vh";
};

document.getElementById("btn3").onclick = function () {
  var imagen3 = document.getElementById("slide");
  imagen3.style.backgroundImage = "url(images/Background3.png)";
  imagen3.style.backgroundSize = "100vw 100vh";
};
document.getElementById("btn4").onclick = function () {
  var imagen4 = document.getElementById("slide");
  imagen4.style.backgroundImage = "url(images/Background7.png)";
  imagen4.style.backgroundSize = "100vw 100vh";
};
document.getElementById("btn5").onclick = function () {
  var imagen5 = document.getElementById("slide");
  imagen5.style.backgroundImage = "url(images/Background5.png)";
  imagen5.style.backgroundSize = "100vw 100vh";
};

//My Skills Bars

var skill = [
  { name: "JAVA", level: "90%", height: "40px", radius: "40px" },
  { name: "HTML", level: "60%", height: "40px", radius: "40px" },
  { name: "CSS", level: "50%", height: "40px", radius: "40px" },
  { name: "JavaScript", level: "30%", height: "40px", radius: "40px" },
  { name: "English", level: "70%", height: "40px", radius: "40px" },
  { name: "Excel", level: "80%", height: "40px", radius: "40px" },
  { name: "Assembler", level: "20%", height: "40px", radius: "40px" },
];

window.addEventListener("load", function (e) {
  let bar1 = document.getElementById("bar1");

  bar1.style.width = skill[0].level;
  bar1.style.height = skill[0].height;
  bar1.style.borderRadius = skill[0].radius;
  bar1.style.backgroundColor = skill[0].color;

  let bar2 = document.getElementById("bar2");

  bar2.style.width = skill[1].level;
  bar2.style.height = skill[1].height;
  bar2.style.borderRadius = skill[1].radius;
  bar2.style.backgroundColor = skill[1].color;

  let bar3 = document.getElementById("bar3");

  bar3.style.width = skill[2].level;
  bar3.style.height = skill[2].height;
  bar3.style.borderRadius = skill[2].radius;
  bar3.style.backgroundColor = skill[2].color;

  let bar4 = document.getElementById("bar4");

  bar4.style.width = skill[3].level;
  bar4.style.height = skill[3].height;
  bar4.style.borderRadius = skill[3].radius;
  bar4.style.backgroundColor = skill[3].color;

  let bar5 = document.getElementById("bar5");

  bar5.style.width = skill[4].level;
  bar5.style.height = skill[4].height;
  bar5.style.borderRadius = skill[4].radius;
  bar5.style.backgroundColor = skill[4].color;

  let bar6 = document.getElementById("bar6");

  bar6.style.width = skill[5].level;
  bar6.style.height = skill[5].height;
  bar6.style.borderRadius = skill[5].radius;
  bar6.style.backgroundColor = skill[5].color;

  let bar7 = document.getElementById("bar7");

  bar7.style.width = skill[6].level;
  bar7.style.height = skill[6].height;
  bar7.style.borderRadius = skill[6].radius;
  bar7.style.backgroundColor = skill[6].color;
});

//Email contact
document.getElementById("btn-send-msg").onclick = function () {
  let name = document.getElementById("name");
  let phone = document.getElementById("cellphone");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  if (isEmpty(name)==false && isEmpty(phone)==false && isEmpty(email)==false && isEmpty(message)==false){
        alert("The email has been send sucesfully. Please, check console");
  } else {
    alert("The form is not fill correctly. Please, try again.");
  }

  name.value="";
  phone.value="";
  email.value="";
  message.value="";
};

function isEmpty(txt){
  if(txt.value==null || txt.value==""){
    return true;
  }else{
    return false;
  }
}

