var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//red rectangle
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();


//green ellipse
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

//stroke
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();


function hint1Mod5() {
    document.getElementById("hint1").innerHTML = "Make the message all lowercase. Use a for loop that counts by two to make every other letter uppercase";
}

function hint2Mod5() {
    document.getElementById("hint2").innerHTML = "for(var i = 0; i &lt msg.length; i += 2)";
}

function hint3Mod5() {
    document.getElementById("hint3").innerHTML = "{ MsG = MsG + msg(i) + msg(i+1); }";
}


 /*<pre class="prettyprint"><code> 
  for(var i = 0; i == msg.length; i += 2) {
    MsG = MsG + msg(i) + msg(i+1); 
  }
        </code></pre>"; */
