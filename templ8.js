// The MIT License (MIT)

// Copyright (c) 2013 Amaury Leroux de Lens, amaury@lerouxdelens.com

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var templ8 = (function(){

	var templates = {}, // there we store every templates of the page
		templatesLoaded = false; // flag to store wether or not the page has been parsed for templates

	var version = "0.1",
		author = "Amaury Leroux de Lens",
		credits = 'Huge part of this was inspired by iCanHaz.js source-code',
		description = 'Small plugin to extract template from html <script type="text/html" id="myTemplateName"> tags',
		usage = 'templ8.get("myTemplateName")';

	function load() 
	{
		if (templatesLoaded == true){
			// load all tempates only once
			return;
		}

		var scripts = document.getElementsByTagName('script');

		for(i in scripts) {
			// foreach <script /> html tag, check wich are templates
			var script = scripts[i];
			// if has an id, a content and a content-type 'text/html'
			if (script && script.id && script.innerHTML && (script.type === "text/html")) {
				// Store the content as a template
				// dirty hack to remove CDATA wrapper
				templates[script.id] = script.innerHTML.replace("<![CDATA[", "").replace("]]>", ""); 
			}
		}
	}

	function get(name) 
	{
		// Ensure templates are loaded
		load();

		// return the template
		// will return "undefined" if name do not match any known template
		return templates[name];
	}

	// Public methods & properties
	return {
		get 		: get, 
		version		: version, 
		help		: usage, 
		usage		: usage
	};

})();
