import axios from 'axios'
/**
 * Sends an email with axios to google cloud functions
 */
export function sendContactMeEmail(email) {
    const URL = "https://us-central1-kellyferrone-211016.cloudfunctions.net/sendgridEmail"
    return axios.post(URL,email);
}

export function saveLocal(key, value) {
    window.localStorage.setItem(key,value);
    return value;
}

export function getLocal(key) {
    return window.localStorage.getItem(key);
}

export function setTitle(title) {
    document.title = title;
}

export function appendToTitle(extra) {
    document.title += extra;
}

// from: BTemplates.com
export function removeHtmlTag(strx,chop){ 
	if(strx.indexOf("<")!=-1)
	{
		var s = strx.split("<"); 
		for(var i=0;i<s.length;i++){ 
			if(s[i].indexOf(">")!=-1){ 
				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
			} 
		} 
		strx =  s.join(""); 
	}
	chop = (chop < strx.length-1) ? chop : strx.length-2; 
	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
	strx = strx.substring(0,chop-1); 
	return strx+'...'; 
}