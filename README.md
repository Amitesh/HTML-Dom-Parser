HTML Dom Parser 
=========================
HTML Dom Parser will parse the html content inside the iframe and provide the document object.

What is HTMLDomParser?
----------------------
HTML Dom Parser will parse the html content inside the iframe and provide the document object.
Browser's inbuild DOMParser() method only parse the xml and it gives error 
while parsing html content (Which has html tags and html entities etc) 

XML parse error explanation gist
gist url : https://gist.github.com/1128275

Examples
---------------------

    <script>
    var callBackFunOnIFrameLoad = function(){};
    var iframeId = "my_parser_iframe";

    var htmlContent = "<html><head><title>Iframe HTML Dom Parser</title></head><body><div id='first_div'>aa</div><div>bb</div><div>cc</div></body></html>";
				
		HTMLDomParser.createIFrame(iframeId, callBackFunOnIFrameLoad);
		var doc = HTMLDomParser.parseHTMLString(htmlContent);
    </script>


About Me
--------
* Author:            Amitesh Kumar (amitesingh@gmail.com)
* License:           Free
* Blog:              http://amiteshkumar.wordpress.com/
* Github Repo:       http://github.com/Amitesh/HTML-Dom-Parser
