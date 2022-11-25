difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(350,300);

    canvas = createCanvas(550,500)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded()
{
    console.log('Model is Loaded')
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX +  "difference = " + difference);
    }
}

function draw() {
    background('pink');

    textSize(difference);
    fill('black');
    text('Tehzeeb', 50, 400);
    
    

}