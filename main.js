var sounds=window.webkitSpeechRecognition;
var voice=new sounds();
function start(){
    document.getElementById("textbox").innerHTML="" ;
    voice.start() ; }
    voice.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
    speak();
    console.log("takeing selfie")

      
    }
}
   
    function speak(){
      var synth = window.speechSynthesis;
      speak_data = "takeing your photo in 5  4, 3, 2, 1, ";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera);
      setTimeout(function() {
        snap();
        save();
      }, 5000);
    }
    camera = document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format : 'jpeg',
        jpeg_quality:90
    });












function snap(){
  Webcam.snap(function(data_uri){
    document.getElementById("whatulooklike").innerHTML="<img id='captured_image' src='"+data_uri+"' >";

  })

}










function save(){
  link=document.getElementById("link");
image=document.getElementById("captured_image").src;
link.href=image;
link.click()
}