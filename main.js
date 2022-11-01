function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/W8l_nDDlT/model.json',{probabilityThreshold:0.7},modelReady);
}
function modelReady(){
    classifier.classify(gotResults) 
}
dog=0
cat=0
cow=0

background_noise=0
function gotResults(error,results){
    console.log("gotResults")
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1
        random_number_g=Math.floor(Math.random()*255)+1
        random_number_b=Math.floor(Math.random()*255)+1
        document.getElementById("#ofanimalSounds").innerHTML='detected voice is of - '+results[0].label; 
        document.getElementById("soundtype").innerHTML='detected dog -  '+dog+'detected cat - '+cat+'detected cow - '+cow;
        document.getElementById("#ofanimalSounds").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("soundtype").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_r+")"; 

        img=document.getElementById("image");
        if(results[0].label=="bark"){
            img.src='dog.jpg'
            dog=dog+1
        }
        else if(results[0].label=="meow"){
            img.src='cat.webp'
            cat=cat+1
        }
        else if(results[0].label=="moo"){
            img.src='cow.jpg'
            cow=cow+1
        }
        else{
            img.src='hearing.png'
        }
    }
}
