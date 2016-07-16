require(["gitbook","jQuery"],function(e,t){e.events.bind("start",function(t,n){var o=n["edit-link"],i=o.label,r=o.base,s=e.state.innerLanguage;s&&("object"==typeof i&&(i=i[s]),s+="/"),"/"!=r.slice(-1)&&(r+="/"),e.toolbar.createButton({icon:"fa fa-edit",text:i,onClick:function(){var t=e.state.filepath;window.open(r+s+t)}})})}),require(["gitbook"],function(e){e.events.bind("start",function(e,t){!function(e,t,n,o,i,r,s){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,r=t.createElement(n),s=t.getElementsByTagName(n)[0],r.async=1,r.src=o,s.parentNode.insertBefore(r,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga");var n=t.ga;ga("create",n.token,n.configuration)}),e.events.bind("page.change",function(){ga("send","pageview",window.location.pathname+window.location.search)})}),require(["gitbook"],function(e){e.events.bind("start",function(t,n){var o=n.github.url;e.toolbar.createButton({icon:"fa fa-github",label:"GitHub",position:"right",onClick:function(){window.open(o)}})})}),require(["gitbook","jquery"],function(e,t){function n(e,t){l=!1,a=new e(t),o(t)}function o(t){if(!a)throw new Error("No engine set for research. Set an engine using gitbook.research.setEngine(Engine).");return a.init(t).then(function(){l=!0,e.events.trigger("search.ready")})}function i(e,t,n){if(!l)throw new Error("Search has not been initialized");return a.search(e,t,n)}function r(){return a?a.name:null}function s(){return l}var a=null,l=!1;e.search={setEngine:n,getEngine:r,query:i,isInitialized:s}}),require(["gitbook","jquery"],function(e,t){function n(e,t){var n;return function(){var o=this,i=arguments;n||(n=setTimeout(function(){n=null,e.apply(o,i)},t))}}function o(n){u.addClass("open");var o=0==n.count;u.toggleClass("no-results",o),f.empty(),d.text(n.count),m.text(n.query),n.results.forEach(function(n){var o=t("<li>",{"class":"search-results-item"}),i=t("<h3>"),r=t("<a>",{href:e.state.basePath+"/"+n.url,text:n.title}),s=n.body.trim();s.length>g&&(s=s.slice(0,g).trim()+"...");var a=t("<p>").html(s);r.appendTo(i),i.appendTo(o),a.appendTo(o),o.appendTo(f)})}function i(t){w.addClass("with-search"),w.addClass("search-loading"),n(e.search.query(t,0,v).then(function(e){o(e)}).always(function(){w.removeClass("search-loading")}),1e3)}function r(){w.removeClass("with-search"),u.removeClass("open")}function s(){var e=l("q");e&&e.length>0&&(h.val(e),i(e))}function a(){function e(){var e=h.val();0==e.length?r():i(e)}h=t("#book-search-input input"),u=t("#book-search-results"),f=u.find(".search-results-list"),p=u.find(".search-results-title"),d=p.find(".search-results-count"),m=p.find(".search-query");var n=!1;h.on("propertychange",function(t){"value"==t.originalEvent.propertyName&&e()}),h.on("input",function(o){n||(t(this).unbind("propertychange"),n=!0),e()}),h.on("blur",function(e){if(y){var n=c("q",t(this).val());history.pushState({path:n},null,n)}})}function l(e){var t=window.location.href;e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i"),o=n.exec(t);return o?o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):"":null}function c(e,t){t=encodeURIComponent(t);var n,o=window.location.href,i=new RegExp("([?&])"+e+"=.*?(&|#|$)(.*)","gi");if(i.test(o))return"undefined"!=typeof t&&null!==t?o.replace(i,"$1"+e+"="+t+"$2$3"):(n=o.split("#"),o=n[0].replace(i,"$1$3").replace(/(&|\?)$/,""),"undefined"!=typeof n[1]&&null!==n[1]&&(o+="#"+n[1]),o);if("undefined"!=typeof t&&null!==t){var r=o.indexOf("?")!==-1?"&":"?";return n=o.split("#"),o=n[0]+r+e+"="+t,"undefined"!=typeof n[1]&&null!==n[1]&&(o+="#"+n[1]),o}return o}var u,h,f,p,d,m,v=15,g=500,y="undefined"!=typeof history.pushState,w=t("body");e.events.on("page.change",function(){a(),r(),e.search.isInitialized()&&s()}),e.events.on("search.ready",function(){a(),s()})}),!function(){var e=function(t){var n=new e.Index;return n.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),t&&t.call(n,n),n};e.version="0.5.12",e.utils={},e.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),e.EventEmitter=function(){this.events={}},e.EventEmitter.prototype.addListener=function(){var e=Array.prototype.slice.call(arguments),t=e.pop(),n=e;if("function"!=typeof t)throw new TypeError("last argument must be a function");n.forEach(function(e){this.hasHandler(e)||(this.events[e]=[]),this.events[e].push(t)},this)},e.EventEmitter.prototype.removeListener=function(e,t){if(this.hasHandler(e)){var n=this.events[e].indexOf(t);this.events[e].splice(n,1),this.events[e].length||delete this.events[e]}},e.EventEmitter.prototype.emit=function(e){if(this.hasHandler(e)){var t=Array.prototype.slice.call(arguments,1);this.events[e].forEach(function(e){e.apply(void 0,t)})}},e.EventEmitter.prototype.hasHandler=function(e){return e in this.events},e.tokenizer=function(e){return arguments.length&&null!=e&&void 0!=e?Array.isArray(e)?e.map(function(e){return e.toLowerCase()}):e.toString().trim().toLowerCase().split(/[\s\-]+/):[]},e.Pipeline=function(){this._stack=[]},e.Pipeline.registeredFunctions={},e.Pipeline.registerFunction=function(t,n){n in this.registeredFunctions&&e.utils.warn("Overwriting existing registered function: "+n),t.label=n,e.Pipeline.registeredFunctions[t.label]=t},e.Pipeline.warnIfFunctionNotRegistered=function(t){var n=t.label&&t.label in this.registeredFunctions;n||e.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},e.Pipeline.load=function(t){var n=new e.Pipeline;return t.forEach(function(t){var o=e.Pipeline.registeredFunctions[t];if(!o)throw new Error("Cannot load un-registered function: "+t);n.add(o)}),n},e.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(t){e.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},e.Pipeline.prototype.after=function(t,n){e.Pipeline.warnIfFunctionNotRegistered(n);var o=this._stack.indexOf(t);if(-1==o)throw new Error("Cannot find existingFn");o+=1,this._stack.splice(o,0,n)},e.Pipeline.prototype.before=function(t,n){e.Pipeline.warnIfFunctionNotRegistered(n);var o=this._stack.indexOf(t);if(-1==o)throw new Error("Cannot find existingFn");this._stack.splice(o,0,n)},e.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},e.Pipeline.prototype.run=function(e){for(var t=[],n=e.length,o=this._stack.length,i=0;n>i;i++){for(var r=e[i],s=0;o>s&&(r=this._stack[s](r,i,e),void 0!==r);s++);void 0!==r&&t.push(r)}return t},e.Pipeline.prototype.reset=function(){this._stack=[]},e.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return e.Pipeline.warnIfFunctionNotRegistered(t),t.label})},e.Vector=function(){this._magnitude=null,this.list=void 0,this.length=0},e.Vector.Node=function(e,t,n){this.idx=e,this.val=t,this.next=n},e.Vector.prototype.insert=function(t,n){this._magnitude=void 0;var o=this.list;if(!o)return this.list=new e.Vector.Node(t,n,o),this.length++;if(t<o.idx)return this.list=new e.Vector.Node(t,n,o),this.length++;for(var i=o,r=o.next;void 0!=r;){if(t<r.idx)return i.next=new e.Vector.Node(t,n,r),this.length++;i=r,r=r.next}return i.next=new e.Vector.Node(t,n,r),this.length++},e.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e,t=this.list,n=0;t;)e=t.val,n+=e*e,t=t.next;return this._magnitude=Math.sqrt(n)},e.Vector.prototype.dot=function(e){for(var t=this.list,n=e.list,o=0;t&&n;)t.idx<n.idx?t=t.next:t.idx>n.idx?n=n.next:(o+=t.val*n.val,t=t.next,n=n.next);return o},e.Vector.prototype.similarity=function(e){return this.dot(e)/(this.magnitude()*e.magnitude())},e.SortedSet=function(){this.length=0,this.elements=[]},e.SortedSet.load=function(e){var t=new this;return t.elements=e,t.length=e.length,t},e.SortedSet.prototype.add=function(){var e,t;for(e=0;e<arguments.length;e++)t=arguments[e],~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t);this.length=this.elements.length},e.SortedSet.prototype.toArray=function(){return this.elements.slice()},e.SortedSet.prototype.map=function(e,t){return this.elements.map(e,t)},e.SortedSet.prototype.forEach=function(e,t){return this.elements.forEach(e,t)},e.SortedSet.prototype.indexOf=function(e){for(var t=0,n=this.elements.length,o=n-t,i=t+Math.floor(o/2),r=this.elements[i];o>1;){if(r===e)return i;e>r&&(t=i),r>e&&(n=i),o=n-t,i=t+Math.floor(o/2),r=this.elements[i]}return r===e?i:-1},e.SortedSet.prototype.locationFor=function(e){for(var t=0,n=this.elements.length,o=n-t,i=t+Math.floor(o/2),r=this.elements[i];o>1;)e>r&&(t=i),r>e&&(n=i),o=n-t,i=t+Math.floor(o/2),r=this.elements[i];return r>e?i:e>r?i+1:void 0},e.SortedSet.prototype.intersect=function(t){for(var n=new e.SortedSet,o=0,i=0,r=this.length,s=t.length,a=this.elements,l=t.elements;!(o>r-1||i>s-1);)a[o]!==l[i]?a[o]<l[i]?o++:a[o]>l[i]&&i++:(n.add(a[o]),o++,i++);return n},e.SortedSet.prototype.clone=function(){var t=new e.SortedSet;return t.elements=this.toArray(),t.length=t.elements.length,t},e.SortedSet.prototype.union=function(e){var t,n,o;return this.length>=e.length?(t=this,n=e):(t=e,n=this),o=t.clone(),o.add.apply(o,n.toArray()),o},e.SortedSet.prototype.toJSON=function(){return this.toArray()},e.Index=function(){this._fields=[],this._ref="id",this.pipeline=new e.Pipeline,this.documentStore=new e.Store,this.tokenStore=new e.TokenStore,this.corpusTokens=new e.SortedSet,this.eventEmitter=new e.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},e.Index.prototype.on=function(){var e=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,e)},e.Index.prototype.off=function(e,t){return this.eventEmitter.removeListener(e,t)},e.Index.load=function(t){t.version!==e.version&&e.utils.warn("version mismatch: current "+e.version+" importing "+t.version);var n=new this;return n._fields=t.fields,n._ref=t.ref,n.documentStore=e.Store.load(t.documentStore),n.tokenStore=e.TokenStore.load(t.tokenStore),n.corpusTokens=e.SortedSet.load(t.corpusTokens),n.pipeline=e.Pipeline.load(t.pipeline),n},e.Index.prototype.field=function(e,t){var t=t||{},n={name:e,boost:t.boost||1};return this._fields.push(n),this},e.Index.prototype.ref=function(e){return this._ref=e,this},e.Index.prototype.add=function(t,n){var o={},i=new e.SortedSet,r=t[this._ref],n=void 0===n||n;this._fields.forEach(function(n){var r=this.pipeline.run(e.tokenizer(t[n.name]));o[n.name]=r,e.SortedSet.prototype.add.apply(i,r)},this),this.documentStore.set(r,i),e.SortedSet.prototype.add.apply(this.corpusTokens,i.toArray());for(var s=0;s<i.length;s++){var a=i.elements[s],l=this._fields.reduce(function(e,t){var n=o[t.name].length;if(!n)return e;var i=o[t.name].filter(function(e){return e===a}).length;return e+i/n*t.boost},0);this.tokenStore.add(a,{ref:r,tf:l})}n&&this.eventEmitter.emit("add",t,this)},e.Index.prototype.remove=function(e,t){var n=e[this._ref],t=void 0===t||t;if(this.documentStore.has(n)){var o=this.documentStore.get(n);this.documentStore.remove(n),o.forEach(function(e){this.tokenStore.remove(e,n)},this),t&&this.eventEmitter.emit("remove",e,this)}},e.Index.prototype.update=function(e,t){var t=void 0===t||t;this.remove(e,!1),this.add(e,!1),t&&this.eventEmitter.emit("update",e,this)},e.Index.prototype.idf=function(e){var t="@"+e;if(Object.prototype.hasOwnProperty.call(this._idfCache,t))return this._idfCache[t];var n=this.tokenStore.count(e),o=1;return n>0&&(o=1+Math.log(this.documentStore.length/n)),this._idfCache[t]=o},e.Index.prototype.search=function(t){var n=this.pipeline.run(e.tokenizer(t)),o=new e.Vector,i=[],r=this._fields.reduce(function(e,t){return e+t.boost},0),s=n.some(function(e){return this.tokenStore.has(e)},this);if(!s)return[];n.forEach(function(t,n,s){var a=1/s.length*this._fields.length*r,l=this,c=this.tokenStore.expand(t).reduce(function(n,i){var r=l.corpusTokens.indexOf(i),s=l.idf(i),c=1,u=new e.SortedSet;if(i!==t){var h=Math.max(3,i.length-t.length);c=1/Math.log(h)}return r>-1&&o.insert(r,a*s*c),Object.keys(l.tokenStore.get(i)).forEach(function(e){u.add(e)}),n.union(u)},new e.SortedSet);i.push(c)},this);var a=i.reduce(function(e,t){return e.intersect(t)});return a.map(function(e){return{ref:e,score:o.similarity(this.documentVector(e))}},this).sort(function(e,t){return t.score-e.score})},e.Index.prototype.documentVector=function(t){for(var n=this.documentStore.get(t),o=n.length,i=new e.Vector,r=0;o>r;r++){var s=n.elements[r],a=this.tokenStore.get(s)[t].tf,l=this.idf(s);i.insert(this.corpusTokens.indexOf(s),a*l)}return i},e.Index.prototype.toJSON=function(){return{version:e.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},e.Index.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},e.Store=function(){this.store={},this.length=0},e.Store.load=function(t){var n=new this;return n.length=t.length,n.store=Object.keys(t.store).reduce(function(n,o){return n[o]=e.SortedSet.load(t.store[o]),n},{}),n},e.Store.prototype.set=function(e,t){this.has(e)||this.length++,this.store[e]=t},e.Store.prototype.get=function(e){return this.store[e]},e.Store.prototype.has=function(e){return e in this.store},e.Store.prototype.remove=function(e){this.has(e)&&(delete this.store[e],this.length--)},e.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},e.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},t={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",o="[aeiouy]",i=n+"[^aeiouy]*",r=o+"[aeiou]*",s="^("+i+")?"+r+i,a="^("+i+")?"+r+i+"("+r+")?$",l="^("+i+")?"+r+i+r+i,c="^("+i+")?"+o,u=new RegExp(s),h=new RegExp(l),f=new RegExp(a),p=new RegExp(c),d=/^(.+?)(ss|i)es$/,m=/^(.+?)([^s])s$/,v=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,y=/.$/,w=/(at|bl|iz)$/,S=new RegExp("([^aeiouylsz])\\1$"),b=new RegExp("^"+i+o+"[^aeiouwxy]$"),k=/^(.+?[^aeiou])y$/,x=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,C=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,_=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,I=/ll$/,$=new RegExp("^"+i+o+"[^aeiouwxy]$"),F=function(n){var o,i,r,s,a,l,c;if(n.length<3)return n;if(r=n.substr(0,1),"y"==r&&(n=r.toUpperCase()+n.substr(1)),s=d,a=m,s.test(n)?n=n.replace(s,"$1$2"):a.test(n)&&(n=n.replace(a,"$1$2")),s=v,a=g,s.test(n)){var F=s.exec(n);s=u,s.test(F[1])&&(s=y,n=n.replace(s,""))}else if(a.test(n)){var F=a.exec(n);o=F[1],a=p,a.test(o)&&(n=o,a=w,l=S,c=b,a.test(n)?n+="e":l.test(n)?(s=y,n=n.replace(s,"")):c.test(n)&&(n+="e"))}if(s=k,s.test(n)){var F=s.exec(n);o=F[1],n=o+"i"}if(s=x,s.test(n)){var F=s.exec(n);o=F[1],i=F[2],s=u,s.test(o)&&(n=o+e[i])}if(s=E,s.test(n)){var F=s.exec(n);o=F[1],i=F[2],s=u,s.test(o)&&(n=o+t[i])}if(s=C,a=_,s.test(n)){var F=s.exec(n);o=F[1],s=h,s.test(o)&&(n=o)}else if(a.test(n)){var F=a.exec(n);o=F[1]+F[2],a=h,a.test(o)&&(n=o)}if(s=N,s.test(n)){var F=s.exec(n);o=F[1],s=h,a=f,l=$,(s.test(o)||a.test(o)&&!l.test(o))&&(n=o)}return s=I,a=h,s.test(n)&&a.test(n)&&(s=y,n=n.replace(s,"")),"y"==r&&(n=r.toLowerCase()+n.substr(1)),n};return F}(),e.Pipeline.registerFunction(e.stemmer,"stemmer"),e.stopWordFilter=function(t){return t&&e.stopWordFilter.stopWords[t]!==t?t:void 0},e.stopWordFilter.stopWords={a:"a",able:"able",about:"about",across:"across",after:"after",all:"all",almost:"almost",also:"also",am:"am",among:"among",an:"an",and:"and",any:"any",are:"are",as:"as",at:"at",be:"be",because:"because",been:"been",but:"but",by:"by",can:"can",cannot:"cannot",could:"could",dear:"dear",did:"did","do":"do",does:"does",either:"either","else":"else",ever:"ever",every:"every","for":"for",from:"from",get:"get",got:"got",had:"had",has:"has",have:"have",he:"he",her:"her",hers:"hers",him:"him",his:"his",how:"how",however:"however",i:"i","if":"if","in":"in",into:"into",is:"is",it:"it",its:"its",just:"just",least:"least","let":"let",like:"like",likely:"likely",may:"may",me:"me",might:"might",most:"most",must:"must",my:"my",neither:"neither",no:"no",nor:"nor",not:"not",of:"of",off:"off",often:"often",on:"on",only:"only",or:"or",other:"other",our:"our",own:"own",rather:"rather",said:"said",say:"say",says:"says",she:"she",should:"should",since:"since",so:"so",some:"some",than:"than",that:"that",the:"the",their:"their",them:"them",then:"then",there:"there",these:"these",they:"they","this":"this",tis:"tis",to:"to",too:"too",twas:"twas",us:"us",wants:"wants",was:"was",we:"we",were:"were",what:"what",when:"when",where:"where",which:"which","while":"while",who:"who",whom:"whom",why:"why",will:"will","with":"with",would:"would",yet:"yet",you:"you",your:"your"},e.Pipeline.registerFunction(e.stopWordFilter,"stopWordFilter"),e.trimmer=function(e){var t=e.replace(/^\W+/,"").replace(/\W+$/,"");return""===t?void 0:t},e.Pipeline.registerFunction(e.trimmer,"trimmer"),e.TokenStore=function(){this.root={docs:{}},this.length=0},e.TokenStore.load=function(e){var t=new this;return t.root=e.root,t.length=e.length,t},e.TokenStore.prototype.add=function(e,t,n){var n=n||this.root,o=e[0],i=e.slice(1);return o in n||(n[o]={docs:{}}),0===i.length?(n[o].docs[t.ref]=t,void(this.length+=1)):this.add(i,t,n[o])},e.TokenStore.prototype.has=function(e){if(!e)return!1;for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return!1;t=t[e[n]]}return!0},e.TokenStore.prototype.getNode=function(e){if(!e)return{};for(var t=this.root,n=0;n<e.length;n++){if(!t[e[n]])return{};t=t[e[n]]}return t},e.TokenStore.prototype.get=function(e,t){return this.getNode(e,t).docs||{}},e.TokenStore.prototype.count=function(e,t){return Object.keys(this.get(e,t)).length},e.TokenStore.prototype.remove=function(e,t){if(e){for(var n=this.root,o=0;o<e.length;o++){if(!(e[o]in n))return;n=n[e[o]]}delete n.docs[t]}},e.TokenStore.prototype.expand=function(e,t){var n=this.getNode(e),o=n.docs||{},t=t||[];return Object.keys(o).length&&t.push(e),Object.keys(n).forEach(function(n){"docs"!==n&&t.concat(this.expand(e+n,t))},this),t},e.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}},function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.lunr=t()}(this,function(){return e})}(),require(["gitbook","jquery"],function(e,t){function n(){this.index=null,this.store={},this.name="LunrSearchEngine"}n.prototype.init=function(){var n=this,o=t.Deferred();return t.getJSON(e.state.basePath+"/search_index.json").then(function(e){n.index=lunr.Index.load(e.index),n.store=e.store,o.resolve()}),o.promise()},n.prototype.search=function(e,n,o){var i=this,r=[];return this.index&&(r=t.map(this.index.search(e),function(e){var t=i.store[e.ref];return{title:t.title,url:t.url,body:t.summary||t.body}})),t.Deferred().resolve({query:e,results:r.slice(0,o),count:r.length}).promise()},e.events.bind("start",function(t,o){var i=e.search.getEngine();i||e.search.setEngine(n,o)})}),require(["gitbook","jquery"],function(e,t){var n={facebook:{label:"Facebook",icon:"fa fa-facebook",onClick:function(e){e.preventDefault(),window.open("http://www.facebook.com/sharer/sharer.php?s=100&p[url]="+encodeURIComponent(location.href))}},twitter:{label:"Twitter",icon:"fa fa-twitter",onClick:function(e){e.preventDefault(),window.open("http://twitter.com/home?status="+encodeURIComponent(document.title+" "+location.href))}},google:{label:"Google+",icon:"fa fa-google-plus",onClick:function(e){e.preventDefault(),window.open("https://plus.google.com/share?url="+encodeURIComponent(location.href))}},weibo:{label:"Weibo",icon:"fa fa-weibo",onClick:function(e){e.preventDefault(),window.open("http://service.weibo.com/share/share.php?content=utf-8&url="+encodeURIComponent(location.href)+"&title="+encodeURIComponent(document.title))}},instapaper:{label:"Instapaper",icon:"fa fa-instapaper",onClick:function(e){e.preventDefault(),window.open("http://www.instapaper.com/text?u="+encodeURIComponent(location.href))}},vk:{label:"VK",icon:"fa fa-vk",onClick:function(e){e.preventDefault(),window.open("http://vkontakte.ru/share.php?url="+encodeURIComponent(location.href))}}};e.events.bind("start",function(o,i){var r=i.sharing,s=t.map(r.all,function(e){var t=n[e];return{text:t.label,onClick:t.onClick}});s.length>0&&e.toolbar.createButton({icon:"fa fa-share-alt",label:"Share",position:"right",dropdown:[s]}),t.each(n,function(t,n){r[t]&&e.toolbar.createButton({icon:n.icon,label:n.text,position:"right",onClick:n.onClick})})})}),require(["gitbook","jquery"],function(e,t){function n(){return S}function o(e){S=e,m()}function i(){return b}function r(e){b=e,m()}function s(){e.storage.set("fontState",g),p()}function a(e){e.preventDefault(),g.size>=y||(g.size++,s())}function l(e){e.preventDefault(),g.size<=w||(g.size--,s())}function c(e,t){t&&t instanceof Event&&t.preventDefault();var n=h(e);g.family=n,s()}function u(t,n){n&&n instanceof Event&&n.preventDefault();var o=e.state.$book;0!==g.theme&&o.removeClass("color-theme-"+g.theme);var i=f(t);g.theme=i,0!==g.theme&&o.addClass("color-theme-"+g.theme),s()}function h(e){var n=t.grep(b,function(t){return t.config==e})[0];return n?n.id:0}function f(e){var n=t.grep(S,function(t){return t.config==e})[0];return n?n.id:0}function p(){var n=e.state.$book;t(".font-settings .font-family-list li").removeClass("active"),t(".font-settings .font-family-list li:nth-child("+(g.family+1)+")").addClass("active"),n[0].className=n[0].className.replace(/\bfont-\S+/g,""),n.addClass("font-size-"+g.size),n.addClass("font-family-"+g.family),0!==g.theme&&(n[0].className=n[0].className.replace(/\bcolor-theme-\S+/g,""),n.addClass("color-theme-"+g.theme))}function d(t){var n=h(t.family),o=f(t.theme);g=e.storage.get("fontState",{size:t.size||2,family:n,theme:o}),p()}function m(){v&&e.toolbar.removeButton(v),v=e.toolbar.createButton({icon:"fa fa-font",label:"Font Settings",className:"font-settings",dropdown:[[{text:"A",className:"font-reduce",onClick:l},{text:"A",className:"font-enlarge",onClick:a}],t.map(b,function(e){return e.onClick=function(t){return c(e.config,t)},e}),t.map(S,function(e){return e.onClick=function(t){return u(e.config,t)},e})]})}var v,g,y=4,w=0,S=[{config:"white",text:"White",id:0},{config:"sepia",text:"Sepia",id:1},{config:"night",text:"Night",id:2}],b=[{config:"serif",text:"Serif",id:0},{config:"sans",text:"Sans",id:1}];e.events.bind("start",function(e,t){var n=t.fontsettings;m(),d(n)}),e.fontsettings={enlargeFontSize:a,reduceFontSize:l,setTheme:u,setFamily:c,getThemes:n,setThemes:o,getFamilies:i,setFamilies:r}});