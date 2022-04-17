function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M2SrPIsa6/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("animal_result").innerHTML= "Detected Voice is of - "+ results[0].label; 
        if(results[0].label== "barking"){
            img.src="dog_barking.gif";
            document.getElementById("result_label1").innerHTML= "Detected Dog - "+ results[Math.floor(Math.random()*255) + 1].label;
        }
        else if(results[0].label== "meowing"){
            img.src="cat_meowing.gif";
            document.getElementById("result_label2").innerHTML= "Detected Cat - "+ results[Math.floor(Math.random()*255) + 1].label;
        }
        else if(results[0].label== "mooing"){
            img.src="cow_mooing.gif";
            document.getElementById("result_label3").innerHTML= "Detected Cow - "+ results[Math.floor(Math.random()*255) + 1].label;
        }
        else if(results[0].label== "mooing"){
            img.src="lion_roaring.gif";
            document.getElementById("result_label4").innerHTML= "Detected Lion - "+ results[Math.floor(Math.random()*255) + 1].label;
        }
        else{
            img.src="background_noise.gif";
        }
    }
}
