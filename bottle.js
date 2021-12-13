function preload(){
    
    image1=loadImage("bottle.png")

}
function setup(){
canvas=createCanvas(250,350)
canvas.center()
objectDetector=ml5.objectDetector("cocossd", modelLoaded)
}
function modelLoaded(){
    status1=true
    console.log('model is loaded')
    objectDetector.detect(image1, gotResult)
}
function gotResult(error,results){
    if (error) {
        console.log("error")
    }else{
console.log(results)
    }
}
function draw(){
    image(image1, 0,0,200,400)
    fill("Red")
    text("Bottle",10,10)
    noFill()
    stroke("red")
    rect(1,1,200,400)
    
}
function back(){
    window.location="index.html"
    }
    function fan(){
        window.location="fan.html"
        }
        function chair(){
            window.location="chair.html"
            }
            function bottle(){
                window.location="bottle.html"
                }
                function bed(){
                    window.location="bed.html"
                    }