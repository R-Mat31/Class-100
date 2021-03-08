var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
 document.getElementById("textbox").innerHTML = "";
 recognition.start(); 
}
recognition.onresult = function(event){
 console.log(event); 
 var Content = event.results[0][0].transcript; 
 document.getElementById("textbox").innerHTML = Content; 
 console.log(Content);
 if(Content == "take my selfie"){
  console.log("Taking Selfie");
  speak();
 }
}
function speak(){
 synth = window.speechSynthesis;
 speakData = "Taking Your Selfie in 5 Seconds";
 utterThis = new SpeechSynthesisUtterance(speakData);
 synth.speak(utterThis);
 Webcam.attach(camera);
 setTimeout(function(){
  take_snapshot();
  save();   
 },5000
 );
}
Webcam.set({
 width : 360,
 height : 250,
 image_format : 'png',
 png_quality : 90
});
camera = document.getElementById("camera");
function take_snapshot(){
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML = "<img id = 'selfieImage' src = " + data_uri + ">";   
 });   
}
function save(){
 link = document.getElementById("link");
 image = document.getElementById("selfieImage").src;
 link.href = image;
 link.click();
}