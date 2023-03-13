/*
Fading Scroller- By DynamicDrive.com
For full source code, 100's more DHTML scripts, and TOS,
visit http://www.dynamicdrive.com
*/

var delay=2500 //set delay between message change (in miliseconds)
var fcontent=new Array()
begintag='<font face="verdana" size=2>' //set opening tag, such as font declarations
fcontent[0]="<center><strong>'The Circle is just beginning'</strong></center><p>"
fcontent[1]="<center><strong>Saturday</strong></center><p><b>It is extremely important</b> to attend every rehearsal. (especially on show days...) Remember rehearsal <i>starts</i> at 7am."
fcontent[2]="<center><strong>Lake Park</strong></center><p>For the upcoming competition, <b>Bring your black wristbands!</b> And your shoes, <i>black</i> socks, shako, white shirt, etc."
fcontent[3]="<center><strong>School is here</strong></center><p>Stay on top of your assignments. Stay on top of your practicing."
fcontent[4]="<center><strong>Viva la Max, France...</strong></center><p> Bwup-Bwüw (Vietnam) Max Will Die."
fcontent[5]="<center><strong>Practice, Practice, Practice, is the key.</strong></center><p>"
closetag='</font>'

var fwidth=150 //set scroller width
var fheight=150 //set scroller height

///No need to edit below this line/////////////////

var ie4=document.all&&!document.getElementById
var ns4=document.layers
var DOM2=document.getElementById
var faderdelay=0
var index=0

if (DOM2)
faderdelay=2000

//function to change content
function changecontent(){
if (index>=fcontent.length)
index=0
if (DOM2){
document.getElementById("fscroller").style.color="rgb(255,255,255)"
document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag
colorfade()
}
else if (ie4)
document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag
else if (ns4){
document.fscrollerns.document.fscrollerns_sub.document.write(begintag+fcontent[index]+closetag)
document.fscrollerns.document.fscrollerns_sub.document.close()
}

index++
setTimeout("changecontent()",delay+faderdelay)
}

// colorfade() partially by Marcio Galli for Netscape Communications.  ////////////
// Modified by Dynamicdrive.com

frame=20;
hex=255  // Initial color value.

function colorfade() {	         	
// 20 frames fading process
if(frame>0) {	
hex-=12; // increase color value
document.getElementById("fscroller").style.color="rgb("+hex+","+hex+","+hex+")"; // Set color value.
frame--;
setTimeout("colorfade()",20);	
}
else{
document.getElementById("fscroller").style.color="rgb(0,0,0)";
frame=20;
hex=255
}   
}

if (ie4||DOM2)
document.write('<div id="fscroller" style="border:0px solid black;width:'+fwidth+';height:'+fheight+';padding:2px"></div>')

window.onload=changecontent
