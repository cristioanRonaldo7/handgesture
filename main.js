prediction_1="";
prediction_2="";




Webcam.set({
    width:350,
    height:300,
    image_format  : "png",
    png_quality:90

});

camera = document.getElementById("camera");

 Webcam.attach("#camera");


 function take_snapshot()
 {
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
 }

 console.log('ml5 version:',ml5.version );
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]',modelLoaded);
 function modelLoaded(){
    console.log('modelLoaded');
 }


 function speak(){
    var synth= window.speechSynthesis;
    speak_data_1 = "the first predition is " +prediction_1;
    speak_data_2 = "the second predition is " +prediction_2;
    var utterThis=new SpeechSynthesisUtterancetter(speak_data_1+speak_data_2);
    synth.speak(utterThis);

 }

 function check(){
   img=document.getElementById('captured_image');
   classifier.classify(img,gotResult);

}

function gotResult(error,results){
   if(error){
      console.error(error);
   }
   else{
      console.log(results);
      document.getElementById('Hand_Gesture_name').innerHTML=results[0].label;
      document.getElementById('Hand_Gesture_name2').innerHTML=results[1].label;
      prediction_1=results[0].label;
      prediction_2=results[1].label;
      speak();
      if(results[0].label=="victory"){
         document.getElementById('Update_Gesture').innerHTML="&#9996;"
      }

      if(results[0].label=="best"){
         document.getElementById('Update_Gesture').innerHTML="&#128077;"
      }

      if(results[0].label=="amazing"){
         document.getElementById('Update_Gesture').innerHTML="&#128076;"
      }

      if(results[1].label=="victory"){
         document.getElementById('Update_Gesture2').innerHTML="&#9996;"
      }

      if(results[1].label=="best"){
         document.getElementById('Update_Gesture2').innerHTML="&#128077;"
      }

      if(results[1].label=="amazing"){
         document.getElementById('Update_Gesture2').innerHTML="&#128076;"
      }


   }
}
 
 
 