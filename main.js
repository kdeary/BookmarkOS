function dragElement(elmnt) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById(elmnt.id + "header")) {
		/* if present, the header is where you move the DIV from:*/
		document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
	} else {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
		e = e || window.event;
		// get the mouse cursor position at startup:
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		// set the element's new position:
		elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
		elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		/* stop moving when mouse button is released:*/
		document.onmouseup = null;
		document.onmousemove = null;
	}
}

jQuery("head").append(`<style>#jsNotepad {position: fixed;z-index: 996;background-color: #f1f1f1;border: 1px solid #d3d3d3;text-align: left;}#jsNotepadheader {font-family: sans-serif;padding: 10px;cursor: move;z-index: 997;background-color: #2196F3;color: #fff;}#jsNotepadheader button {float: right;background-color: #6dbeff;border:none;margin-left: 5px;}</style>`);
jQuery("body").append("<div id='jsNotepad'><div id='jsNotepadheader'>Notepad <button id='closeJsNotepad'>&times;</button></div><textarea></textarea></div>");

jQuery("#closeJsNotepad").click(function(e){
	jQuery("#jsNotepad").remove();
});

dragElement(jQuery("#jsNotepad")[0]);