n_x = 0;
n_y = 0;
rwr_x= 0;
lwr_x= 0;
d_f = 30;

function setup(){
    video = createCapture(VIDEO);
    video.size(525, 550);
    video.position(10, 130);

    canvas = createCanvas(533, 425);
    canvas.position(730,200);
    poseNet = ml5.poseNet(video, mdl);
    poseNet.on('pose', gotPoses);
}

function mdl(){
    console.log("Posenet initialized")
}

function draw(){
    background('#808080');
    fill("pink")
    textSize(d_f)
    text("DEMO", n_x, n_y)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        n_x = results[0].pose.nose.x;
        n_y = results[0].pose.nose.y;
        rwr_x= results[0].pose.rightWrist.x;
        lwr_x= results[0].pose.leftWrist.x;
        d_f = Math.abs(Math.floor(lwr_x - rwr_x));
        document.getElementById("f_size").innerHTML = "The size of the text is = " + d_f + "px"
        console.log("Nosex : "+ n_x + " ,Nosey : " + n_y + ", Difference Between Left And Right Wrist : " + d_f)
    }
}