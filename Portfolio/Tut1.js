var clicked=false;

function toggle(){
 clicked= ! clicked;
 var ind= "";
 if (!clicked) {
	 ind="not ";
 }
 document.getElementById("toogle"). innerHTML = "the button is "+ind+"Clicked"
}