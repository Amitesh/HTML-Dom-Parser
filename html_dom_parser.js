/**
 * HTML Dom Parser will parse the html content inside the 
 * iframe and provide the document object.
 * 
 * Browser's inbuild DOMParser() method only parse the xml and it gives error 
 * while parsing html content (Which has html tags and html entities etc) 
 * 
 * gist url : https://gist.github.com/1128275
 * 
 * @author : Amitesh Kumar
 * @email  : amitesingh@gmail.com
 * 
 * license : simply free :)
 * 
 * Feel free to send bugs, issue and enhancement for it.
 *
 */

var HTMLDomParser = function (){
	    //iframe id
	    var _iframeId;
    return {
	    parseHTMLString : function(html){
		    var iframe = document.getElementById(_iframeId);
		
		    if(!iframe){
			    iframe = this.createIFrame();
		    }
		
		    var iframeDoc = this.getIFrameDocument(iframe);	//iframe document object
		
		    if (iframeDoc) {
	      	iframeDoc.open();
	      	iframeDoc.write(html);
	      	iframeDoc.close();
	      }
		
		    //Now, we can use the all browser dom provided functions
		    //var allDivs = iframeDoc.getElementsByTagName("div");
		    //var firstDiv = iframeDoc.getElementById("first_div");
		
		    return iframeDoc;
	    },
	
	    /* Gets the document for the iframe. 
	     * Returns null if no suitable document can be found.
	     *
	     * @return DOMDocument The document for the loaded iframe.
	     */
	    getIFrameDocument : function( iframe ) {
	
		    if (iframe.contentDocument) { 			// For NS6
			    return iframe.contentDocument; 
		    } else if (iframe.contentWindow) { 	// For IE5.5 and IE6
			    return iframe.contentWindow.document;
		    } else if (iframe.document) {				// For IE5
			    return iframe.document;
		    } else {														//Not able to get document obj
			    return null;
		    }
	    },
	
	    createIFrame : function(iframeId, onloadCallBack){
		    var iframe;
		    if (document.createElement && (iframe = document.createElement('iframe'))) {
			    _iframeId 		= iframeId || "html_dom_parser_hidden_iframe";
			
			    iframe.id 		= iframeId;
			    iframe.src 		= 'about:blank';
			    iframe.onload = onloadCallBack || function(){};
			    //iframe.style.visibility = "hidden";
			
			    document.body.appendChild(iframe);
		    }
		    return iframe;
	    }
    }
    }();
