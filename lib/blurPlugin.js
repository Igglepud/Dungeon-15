!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).rexkawaseblurpipelineplugin=t()}(this,function(){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(r){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=l(r);if(i){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}(this,e)}}function t(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n){void 0===n&&(n=[]);for(var r=n.length=t;0<r;r--)n[r]=e*(r/t);return n}function h(e){return null==e||""===e||0===e.length}var y=function(){function n(e,t){i(this,n),this.postFXPipeline=e,this.shader=t}return o(n,[{key:"getAnotherFrame",value:function(e){var t=this.postFXPipeline,n=t.fullFrame1,r=t.fullFrame2;return e===n?r:n}},{key:"init",value:function(e,t){var n=this.postFXPipeline;return void 0===t&&(t=n.fullFrame1),n.copyFrame(e,t),t}},{key:"draw",value:function(){}}]),n}(),d=function(){u(t,y);var e=f(t);function t(){return i(this,t),e.apply(this,arguments)}return o(t,[{key:"draw",value:function(e,t){for(var n,r,i,o,u=this.postFXPipeline,l=this.shader,s=e,a=this.getAnotherFrame(s),f=u.pixelWidth/u.renderer.width,c=u.pixelHeight/u.renderer.height,p=0,h=u._quality-1;p<=h;p++)i=(r=u._kernels[p]+.5)*f,o=r*c,u.set2f("uOffset",i,o,l),p<h?(u.bindAndDraw(s,a,!0,!0,l),s=a,a=this.getAnotherFrame(s)):t?(u.bindAndDraw(s,a,!0,!0,l),n=a):u.bindAndDraw(s,null,!0,!0,l);return n}}]),t}(),e=Phaser.Renderer.WebGL.Pipelines.PostFXPipeline,v=Phaser.Utils.Objects.GetValue,m=function(){u(r,e);var n=f(r);function r(e){var t;return i(this,r),(t=n.call(this,{name:"rexKawaseBlurFilterPostFx",game:e,renderTarget:!0,fragShader:"#ifdef GL_FRAGMENT_PRECISION_HIGH\n#define highmedp highp\n#else\n#define highmedp mediump\n#endif\nprecision highmedp float;\n\n// Scene buffer\nuniform sampler2D uMainSampler; \nvarying vec2 outTexCoord;\n\n// Effect parameters\nuniform vec2 uOffset;\n\nvoid main (void) {\n  vec4 color = vec4(0.0);\n\n  // Sample top left pixel\n  color += texture2D(uMainSampler, vec2(outTexCoord.x - uOffset.x, outTexCoord.y + uOffset.y));\n\n  // Sample top right pixel\n  color += texture2D(uMainSampler, vec2(outTexCoord.x + uOffset.x, outTexCoord.y + uOffset.y));\n\n  // Sample bottom right pixel\n  color += texture2D(uMainSampler, vec2(outTexCoord.x + uOffset.x, outTexCoord.y - uOffset.y));\n\n  // Sample bottom left pixel\n  color += texture2D(uMainSampler, vec2(outTexCoord.x - uOffset.x, outTexCoord.y - uOffset.y));\n\n  // Average\n  color *= 0.25;\n\n  gl_FragColor = color;\n}\n"})).drawer=new d(a(t)),t._kernels=[0],t._blur=0,t._quality=1,t.pixelWidth=1,t.pixelHeight=1,t}return o(r,[{key:"resetFromJSON",value:function(e){var t=v(e,"blur",4);return"number"==typeof t?(this.setBlur(t),this.setQuality(v(e,"quality",3))):this.setKernela(t),this.setPixelSize(v(e,"pixelWidth",1),v(e,"pixelHeight",1)),this}},{key:"onPreRender",value:function(){}},{key:"onDraw",value:function(e){this.drawer.draw(this.drawer.init(e))}},{key:"blur",get:function(){return this._blur},set:function(e){this._blur!==e&&(this._blur=e,p(this._blur,this._quality,this._kernels))}},{key:"setBlur",value:function(e){return this.blur=e,this}},{key:"quality",get:function(){return this._quality},set:function(e){this._quality!==e&&(this._quality=e,p(this._blur,this._quality,this._kernels))}},{key:"setQuality",value:function(e){return this.quality=e,this}},{key:"kernels",get:function(){return this._kernels},set:function(e){void 0===e&&(e=[0]),this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,t(e))}},{key:"setKernela",value:function(e){return this.kernels=e,this}},{key:"setPixelWidth",value:function(e){return this.pixelWidth=e,this}},{key:"setPixelHeight",value:function(e){return this.pixelHeight=e,this}},{key:"setPixelSize",value:function(e,t){return void 0===t&&(t=e),this.pixelWidth=e,this.pixelHeight=t,this}}]),r}(),b=Phaser.Utils.Array.SpliceOne,x=function(){u(t,Phaser.Plugins.BasePlugin);var e=f(t);function t(){return i(this,t),e.apply(this,arguments)}return o(t,[{key:"setPostPipelineClass",value:function(e,t){return this.PostFxPipelineClass=e,this.postFxPipelineName=t,this}},{key:"start",value:function(){this.game.events.once("destroy",this.destroy,this),this.game.renderer.pipelines.addPostPipeline(this.postFxPipelineName,this.PostFxPipelineClass)}},{key:"add",value:function(e,t){void 0===t&&(t={}),e.setPostPipeline(this.PostFxPipelineClass);var n=e.postPipelines[e.postPipelines.length-1];return n.resetFromJSON(t),t.name&&(n.name=t.name),n}},{key:"remove",value:function(e,t){var n=this.PostFxPipelineClass;if(void 0===t)for(var r=(i=e.postPipelines).length-1;0<=r;r--){(u=i[r])instanceof n&&(u.destroy(),b(i,r))}else{r=0;for(var i,o=(i=e.postPipelines).length;r<o;r++){var u;(u=i[r])instanceof n&&u.name===t&&(u.destroy(),b(i,r))}}return this}},{key:"get",value:function(e,t){var n=this.PostFxPipelineClass;if(void 0===t){for(var r=[],i=0,o=(u=e.postPipelines).length;i<o;i++){(l=u[i])instanceof n&&r.push(l)}return r}var u;for(i=0,o=(u=e.postPipelines).length;i<o;i++){var l;if((l=u[i])instanceof n&&l.name===t)return l}}}]),t}();Phaser.Utils.Objects.GetValue;var P=function(){u(r,x);var n=f(r);function r(e){var t;return i(this,r),(t=n.call(this,e)).setPostPipelineClass(m,"rexKawaseBlurFilterPostFx"),t}return r}();return function(e,t,n){if("object"===s(e)){if(h(t)){if(null==n)return;"object"===s(n)&&(e=n)}else{"string"==typeof t&&(t=t.split("."));var r=t.pop();(function(e,t,n){var r=e;if(!h(t)){var i;"string"==typeof t&&(t=t.split("."));for(var o=0,u=t.length;o<u;o++){var l;if(null==r[i=t[o]]||"object"!==s(r[i]))l=o!==u-1||void 0===n?{}:n,r[i]=l;r=r[i]}}return r})(e,t)[r]=n}}}(window,"RexPlugins.Pipelines.KawaseBlurFilterPostFx",m),P});