!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.S3Dropzone=t(require("React")):e.S3Dropzone=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){try{(function(){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(1),c=n(u),p=r(2),l=n(p),f=r(3),d=n(f),y=function(e){function t(e){return o(this,t),i(this,Object.getPrototypeOf(t).call(this,e))}return s(t,e),a(t,[{key:"open",value:function(){this.dropzone&&this.dropzone.open()}},{key:"onProgress",value:function(e){console.log(e.uniqueId+" progress : "+e.percentage),this.props.onProgress&&this.props.onProgress(e)}},{key:"onComplete",value:function(e){console.log(e.uniqueId+" uploaded to : "+e.s3Url),this.props.onComplete&&this.props.onComplete(e)}},{key:"onError",value:function(e){console.log(e.uniqueId+" upload errored!"),this.props.onError&&this.props.onError(e)}},{key:"onAbort",value:function(e){console.log(e.uniqueId+" upload aborted!"),this.props.onAbort&&this.props.onAbort(e)}},{key:"className",value:function(){return this.props.className?this.props.className:this.props.activeClassName?" ":void 0}},{key:"dropFiles",value:function(e){var t=this;e.map(function(e){var r={url:t.props.url,keyPrefix:t.props.keyPrefix,acl:t.props.acl,awsAccessKeyId:t.props.awsAccessKeyId,policy:t.props.policy,signature:t.props.signature,successStatus:t.props.successStatus},n={onProgress:t.onProgress.bind(t),onComplete:t.onComplete.bind(t),onAbort:t.onAbort.bind(t),onError:t.onError.bind(t)};new d["default"](e,r,n)})}},{key:"render",value:function(){var e=this;return c["default"].createElement("div",null,c["default"].createElement(l["default"],{onDrop:this.dropFiles.bind(this),className:this.className(),activeClassName:this.props.activeClassName,ref:function(t){return e.dropzone=t},disableClick:this.props.disableClick},this.props.children))}}]),t}(c["default"].Component);y.propTypes={onComplete:u.PropTypes.func,onProgress:u.PropTypes.func,onError:u.PropTypes.func,onAbort:u.PropTypes.func,url:u.PropTypes.string,keyPrefix:u.PropTypes.string,acl:u.PropTypes.string,awsAccessKeyId:u.PropTypes.string,policy:u.PropTypes.string,signature:u.PropTypes.string,successStatus:u.PropTypes.number,className:u.PropTypes.string,activeClassName:u.PropTypes.string,disableClick:u.PropTypes.bool},t["default"]=y,e.exports=y}).call(this)}finally{}},function(t,r){t.exports=e},function(e,t,r){!function(t,n){e.exports=n(r(1))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(1),l=n(p),f=r(2),d=n(f),y="undefined"!=typeof document&&document&&document.createElement?"multiple"in document.createElement("input"):!0,h=function(e){function t(e,r){i(this,t);var n=s(this,Object.getPrototypeOf(t).call(this,e,r));return n.onClick=n.onClick.bind(n),n.onDragEnter=n.onDragEnter.bind(n),n.onDragLeave=n.onDragLeave.bind(n),n.onDragOver=n.onDragOver.bind(n),n.onDrop=n.onDrop.bind(n),n.state={isDragActive:!1},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){this.enterCounter=0}},{key:"onDragEnter",value:function(e){e.preventDefault(),++this.enterCounter;var t=e.dataTransfer&&e.dataTransfer.items?e.dataTransfer.items:[],r=this.allFilesAccepted(Array.prototype.slice.call(t));this.setState({isDragActive:r,isDragReject:!r}),this.props.onDragEnter&&this.props.onDragEnter.call(this,e)}},{key:"onDragOver",value:function(e){return e.preventDefault(),e.stopPropagation(),!1}},{key:"onDragLeave",value:function(e){e.preventDefault(),--this.enterCounter>0||(this.setState({isDragActive:!1,isDragReject:!1}),this.props.onDragLeave&&this.props.onDragLeave.call(this,e))}},{key:"onDrop",value:function(e){e.preventDefault(),this.enterCounter=0,this.setState({isDragActive:!1,isDragReject:!1});for(var t=e.dataTransfer?e.dataTransfer.files:e.target.files,r=this.props.multiple?t.length:Math.min(t.length,1),n=[],o=0;r>o;o++){var i=t[o];this.props.disablePreview||(i.preview=window.URL.createObjectURL(i)),n.push(i)}this.props.onDrop&&this.props.onDrop.call(this,n,e),this.allFilesAccepted(n)?this.props.onDropAccepted&&this.props.onDropAccepted.call(this,n,e):this.props.onDropRejected&&this.props.onDropRejected.call(this,n,e)}},{key:"onClick",value:function(){this.props.disableClick||this.open()}},{key:"allFilesAccepted",value:function(e){var t=this;return e.every(function(e){return(0,l["default"])(e,t.props.accept)})}},{key:"open",value:function(){this.fileInputEl.value=null,this.fileInputEl.click()}},{key:"render",value:function(){var e=this,t=this.props,r=t.accept,n=t.activeClassName,i=t.inputProps,s=t.multiple,a=t.name,c=t.rejectClassName,p=o(t,["accept","activeClassName","inputProps","multiple","name","rejectClassName"]),l=p.activeStyle,f=p.className,h=p.rejectStyle,v=p.style,g=o(p,["activeStyle","className","rejectStyle","style"]),b=this.state,m=b.isDragActive,P=b.isDragReject;f=f||"",m&&n&&(f+=" "+n),P&&c&&(f+=" "+c),f||v||l||h||(v={width:200,height:200,borderWidth:2,borderColor:"#666",borderStyle:"dashed",borderRadius:5},l={borderStyle:"solid",backgroundColor:"#eee"},h={borderStyle:"solid",backgroundColor:"#ffdddd"});var x=void 0;x=l&&m?u({},v,l):h&&P?u({},v,h):u({},v);var D={accept:r,type:"file",style:{display:"none"},multiple:y&&s,ref:function(t){return e.fileInputEl=t},onChange:this.onDrop};return a&&a.length&&(D.name=a),d["default"].createElement("div",u({className:f,style:x},g,{onClick:this.onClick,onDragEnter:this.onDragEnter,onDragOver:this.onDragOver,onDragLeave:this.onDragLeave,onDrop:this.onDrop}),this.props.children,d["default"].createElement("input",u({},i,D)))}}]),t}(d["default"].Component);h.defaultProps={disablePreview:!1,disableClick:!1,multiple:!0},h.propTypes={onDrop:d["default"].PropTypes.func,onDropAccepted:d["default"].PropTypes.func,onDropRejected:d["default"].PropTypes.func,onDragEnter:d["default"].PropTypes.func,onDragLeave:d["default"].PropTypes.func,children:d["default"].PropTypes.node,style:d["default"].PropTypes.object,activeStyle:d["default"].PropTypes.object,rejectStyle:d["default"].PropTypes.object,className:d["default"].PropTypes.string,activeClassName:d["default"].PropTypes.string,rejectClassName:d["default"].PropTypes.string,disablePreview:d["default"].PropTypes.bool,disableClick:d["default"].PropTypes.bool,inputProps:d["default"].PropTypes.object,multiple:d["default"].PropTypes.bool,accept:d["default"].PropTypes.string,name:d["default"].PropTypes.string},t["default"]=h,e.exports=t["default"]},function(e,t){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";t.__esModule=!0,r(8),r(9),t["default"]=function(e,t){if(e&&t){var r=function(){var r=t.split(","),n=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(e){var t=e.trim();return"."===t.charAt(0)?n.toLowerCase().endsWith(t.toLowerCase()):/\/\*$/.test(t)?i===t.replace(/\/.*$/,""):o===t})}}();if("object"==typeof r)return r.v}return!0},e.exports=t["default"]},function(e,t){var r=e.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var n=r(2),o=r(1),i=r(4),s=r(19),a="prototype",u=function(e,t){return function(){return e.apply(t,arguments)}},c=function(e,t,r){var p,l,f,d,y=e&c.G,h=e&c.P,v=y?n:e&c.S?n[t]||(n[t]={}):(n[t]||{})[a],g=y?o:o[t]||(o[t]={});y&&(r=t);for(p in r)l=!(e&c.F)&&v&&p in v,f=(l?v:r)[p],d=e&c.B&&l?u(f,n):h&&"function"==typeof f?u(Function.call,f):f,v&&!l&&s(v,p,f),g[p]!=f&&i(g,p,d),h&&((g[a]||(g[a]={}))[p]=f)};n.core=o,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,e.exports=c},function(e,t,r){var n=r(5),o=r(18);e.exports=r(22)?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},function(e,t,r){var n=r(20)("wks"),o=r(2).Symbol;e.exports=function(e){return n[e]||(n[e]=o&&o[e]||(o||r(6))("Symbol."+e))}},function(e,t,r){r(26),e.exports=r(1).Array.some},function(e,t,r){r(25),e.exports=r(1).String.endsWith},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t,r){var n=r(10);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r(7)("match")]=!1,!"/./"[e](t)}catch(o){}}return!0}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){var n=r(16),o=r(11),i=r(7)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var n=r(2),o=r(4),i=r(6)("src"),s="toString",a=Function[s],u=(""+a).split(s);r(1).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,s){"function"==typeof r&&(o(r,i,e[t]?""+e[t]:u.join(String(t))),"name"in r||(r.name=t)),e===n?e[t]=r:(s||delete e[t],o(e,t,r))})(Function.prototype,s,function(){return"function"==typeof this&&this[i]||a.call(this)})},function(e,t,r){var n=r(2),o="__core-js_shared__",i=n[o]||(n[o]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t,r){var n=r(17),o=r(13);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},function(e,t,r){e.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},function(e,t,r){var n=r(23),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},function(e,t,r){"use strict";var n=r(3),o=r(24),i=r(21),s="endsWith",a=""[s];n(n.P+n.F*r(14)(s),"String",{endsWith:function(e){var t=i(this,e,s),r=arguments,n=r.length>1?r[1]:void 0,u=o(t.length),c=void 0===n?u:Math.min(o(n),u),p=String(e);return a?a.call(t,p,c):t.slice(c-p.length,c)===p}})},function(e,t,r){var n=r(5),o=r(3),i=r(1).Array||Array,s={},a=function(e,t){n.each.call(e.split(","),function(e){void 0==t&&e in i?s[e]=i[e]:e in[]&&(s[e]=r(12)(Function.call,[][e],t))})};a("pop,reverse,shift,keys,values,entries",1),a("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),a("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",s)}])},function(t,r){t.exports=e}])})},function(e,t,r){try{(function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=function(){function t(r,n,o){var i=this;e(this,t),this.uploadProgress=function(e){var t=0;e.lengthComputable&&(t=Math.round(100*e.loaded/e.total)),i.setProgress(t)},this.uploadComplete=function(e){i.percentage=100,i.uploading=!1;var t=e.target.responseXML,r=t.getElementsByTagName("Location")[0];i.s3Url=r.textContent,i.onComplete&&i.onComplete(i)},this.abort=function(){i.xhr&&i.xhr.abort()},this.uploadCanceled=function(e){i.uploading=!1,i.onAbort&&i.onAbort(i)},this.uploadFailed=function(e){i.uploading=!1,i.onError&&i.onError(i)},this.file=r,this.uniqueId=this.getObjectKey(r,n.keyPrefix),this.onProgress=o.onProgress,this.onComplete=o.onComplete,this.onAbort=o.onAbort,this.onError=o.onError,this.upload(r,n)}return r(t,[{key:"getObjectKey",value:function(e,t){var r=Math.random().toString(36).substr(2,16);return""+t+r+"/"+e.name}},{key:"setProgress",value:function(e){this.percentage=e,this.onProgress&&this.onProgress(this)}},{key:"upload",value:function(e,t){var r=this;this.uploading=!0,this.setProgress(0);var n=new FormData;n.append("key",this.uniqueId),n.append("acl",t.acl),n.append("Content-Type",e.type),n.append("AWSAccessKeyId",t.awsAccessKeyId),n.append("policy",t.policy),n.append("signature",t.signature),n.append("success_action_status",t.successStatus),n.append("file",e);var o=new XMLHttpRequest;o.upload.addEventListener("loadstart",this.uploadProgress,!1),o.upload.addEventListener("progress",this.uploadProgress,!1),o.upload.addEventListener("load",this.uploadProgress,!1),o.upload.addEventListener("abort",this.uploadCanceled,!1),o.addEventListener("readystatechange",function(e){4==e.target.readyState&&(e.target.status===t.successStatus?r.uploadComplete(e):r.uploadFailed(e))}),o.open("POST",t.url,!0),o.send(n),this.xhr=o}}]),t}();t["default"]=n}).call(this)}finally{}}])});