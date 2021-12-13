function preload(){
    
    image1=loadImage("chair.png")

}
function setup(){
canvas=createCanvas(250,350)
canvas.center()

}
function draw(){
    image(image1, 0,0,300,300)
    fill("Red")
    text("Chair",10,10)
    noFill()
    stroke("red")
    rect(1,1,300,300)
    
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