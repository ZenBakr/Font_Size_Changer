difference=0;
LeftWristx=0;
RightWrist=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(900,500);
    canvas. position(600,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('poses',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        LeftWristx=results[0].pose.leftWrist.x;
        RightWristx=results[0].pose.rightWrist.x;
        difference=floor(LeftWristx-RightWristx);
        console.log("LeftWristx="+ LeftWristx + "RightWristx=" + RightWristx + "difference=" + difference);
    }
}

function draw()
{
    background('#fdf0ff');
    textSize(difference);
    fill('#020003');
    text("Vedika",50,100);
    document.getElementById("font_size").innerHTML="The size of the font will be = " + difference + "px";
}