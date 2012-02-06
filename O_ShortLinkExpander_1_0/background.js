var injected_script_link;
var injected_script_data;

function step2(event){
	//opera.postError('data: '+ event.data.w);	
    injected_script_data=event.data;		// get data from message
    injected_script_link=event.source;	// save link to injected script that sent this message
    var xmlHttp = new window.XMLHttpRequest();
    if (xmlHttp){
		xmlHttp.open('GET', event.data.w, false);
		xmlHttp.send(null);
		//opera.postError("Received: "+xmlHttp.responseText);
		event.source.postMessage({q:injected_script_data.q,w:xmlHttp.responseText});
	}
}

function step3(){
    if (xmlHttp.readyState == 4){
		//opera.postError("Received: "+xmlHttp.responseText); // debug message
		injected_script_link.postMessage({q:injected_script_data.q,w:xmlHttp.responseText}); //send a message from background process to injected script
	}
};
opera.extension.onmessage = step2;
