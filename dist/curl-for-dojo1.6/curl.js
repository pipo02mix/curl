var n=!0,p=!1;
(function(l,i,c){function g(a,b){return 0==I.call(a).indexOf("[object "+b)}function C(a){function b(b){if(b in a)return b=a[b],b="."!=b.charAt(0)?(!a.path||w(a.path)?a.path:a.path+"/")+b:j.d(b,a.path),t(b)}a.path=a.path||"";a.m=a.config;a.D=b("lib");a.s=b("main");return a}function w(a){return"/"==a.charAt(a.length-1)}function t(a){return w(a)?a.substr(0,a.length-1):a}function z(){}function D(a){z.prototype=a;a=new z;z.prototype=q;return a}function x(a){function b(a,b){F.push([a,b])}function d(a){f(n,
a)}function e(a){f(p,a)}function f(a,f){b=a?function(a){a&&a(f)}:function(a,b){b&&b(f)};d=e=function(){};for(var h,j=0;h=F[j++];)(h=h[a?0:1])&&h(f)}var h=this,F=[];this.id=a;this.I=function(a,e){b(a,e)};this.f=function(a){h.L=a;d(a)};this.a=function(a){h.K=a;e(a)}}function r(a,b,d){a instanceof x?a.I(b,d):b(a)}function u(a,b,d){if(g(a,"String")){a=j.d(a,d.l);d=m[a];if(!(a in m)||d instanceof v)throw Error("Module is not already resolved: "+a);if(b)throw Error("require(<string>, callback) not allowed. use <array>.");
return d}j.r(q,a,d,function(a){b.f?b.f(a):b.apply(q,a)},function(a){if(b.a)b.a(a);else throw a;})}function y(){function a(b,f,h){var j=new x;this.then=function(a,b){r(j,function(b){a&&a.apply(q,b)},function(a){if(b)b(a);else throw a;});return this};this.next=function(b,d){return new a(b,d,j)};f&&this.then(f);r(h,function(){u([].concat(b),j,d)})}var b=J.call(arguments),d;g(b[0],"Object")&&(c=j.p(b.shift()));d=j.c("",c);return new a([].concat(b[0]),b[1])}function B(a){var b=a.id;if(b==q)if(k!==q)k=
{o:"Multiple anonymous defines found in ${url}."};else if(!(b=j.B()))k=a;if(b!=q){var d=m[b];d||(d=m[b]=new v(b));if(d instanceof v)d.J=p,j.t(d,a)}}var A=i.head||i.getElementsByTagName("head")[0],m={},s=p,k,o={},I={}.toString,q,J=[].slice,G=/^\/|^[^:]+:\/\//,K=/^(\.)(\.)?(\/|$)/,L=/\//g,M=/\?/,N=/\/\*[\s\S]*?\*\/|(?:[^\\])\/\/.*?[\n\r]/g,O=/require\s*\(\s*["']([^"']+)["']\s*\)|((?:[^\\])?["'])/,P={loaded:1,interactive:1,complete:1},j,v=x;j={p:function(a){function b(b,d){var f,h,c,k,g,E;for(E in b){h=
b[E];g=a;f=t(h.id||E);c=f.indexOf("!");if(0<c){k=f.substr(0,c);g=e[k];if(!g)g=e[k]=D(a),g.e=D(a.e),g.b=[];f=f.substr(c+1);delete b[E]}c=d?C(h):{path:t(h)};c.u=(f.match(L)||[]).length;f?(g.e[f]=c,g.b.push(f)):g.n=j.k(h,a)}}function d(a){var b=a.e;a.G=RegExp("^("+a.b.sort(function(a,d){return b[a].u<b[d].u}).join("|").replace(/\//g,"\\/")+")(?=\\/|$)");delete a.b}var e;a.n=a.baseUrl||"";a.h=a.pluginPath||"curl/plugin";a.e={};e=a.plugins=a.plugins||{};a.b=[];b(a.paths,p);b(a.packages,n);for(var f in e){var h=
e[f].b;if(h)e[f].b=h.concat(a.b),d(e[f])}d(a);a.preload&&r(s,function(){var b=j.c("",a);s=new v("*preload");b.C=n;u(a.preload,s,b)});return a},c:function(a,b){function d(a){a=j.j(j.d(a,f),b).path;return j.k(a,b)}function e(a,b){return u(a,b&&function(){b.apply(q,arguments)},h)}var f,h,c;f=a.substr(0,a.lastIndexOf("/"));c={};h={l:f,i:e,g:{require:e,exports:c,module:{id:a,uri:d(a),exports:c}}};h.i.toUrl=d;return h},j:function(a,b){var d,e,f;d=b.e;return{path:G.test(a)?a:a.replace(b.G,function(b){e=
d[b]||{};f=e.m;return e.s&&b==a?e.s:e.D||e.path||""}),m:f||c}},k:function(a,b,d){b=b.n;return(b&&!G.test(a)?(!b||w(b)?b:b+"/")+a:a)+(d&&!M.test(a)?".js":"")},F:function(a,b,d){var e=i.createElement("script");e.type="text/javascript";e.onload=e.onreadystatechange=function(d){d=d||l.event;if("load"===d.type||P[this.readyState])delete o[a.id],this.onload=this.onreadystatechange=this.onerror="",b(e)};e.onerror=function(){d(Error("Syntax error or http error: "+a.url))};e.charset=a.charset||"utf-8";e.async=
n;e.src=a.url;o[a.id]=e;A.insertBefore(e,A.firstChild)},w:function(a){var b=[],d;("string"==typeof a?a:a.toSource?a.toSource():a.toString()).replace(N,"").replace(O,function(a,f,h){h?d=d==h?q:d:d||b.push(f);return a});return b},A:function(a){var b,d,e,f,h=a.length;e=a[h-1];f=g(e,"Function");2==h?g(a[0],"Array")?d=a[0]:b=a[0]:3==h&&(b=a[0],d=a[1]);!d&&f&&0<e.length&&(d=["require","exports","module"].concat(j.w(e)));return{id:b,v:d||[],H:f?e:function(){return e}}},t:function(a,b){var d=j.c(a.id,c);
j.r(a,b.v,d,function(e){var f;try{f=b.H.apply(d.g.exports,e),f===q&&(f=d.g.module.exports)}catch(h){a.a(h)}m[a.id]=f;a.f(f)},a.a)},q:function(a){j.F(a,function(){var b=k;k=q;a.J!==p&&(b?b.o?a.a(Error(b.o.replace("${url}",a.url))):j.t(a,b):a.a(Error("define() not found or duplicates found: "+a.url)))},a.a);return a},d:function(a,b){return a.replace(K,function(a,e,f){return(f?b.substr(0,b.lastIndexOf("/")):b)+"/"})},z:function(a,b){var d,e,f,h,g,k,i;e=a.indexOf("!");h=j.d(a.substr(e+1),b.l);0<=e?(f=
a.substr(0,e),i=c.plugins[f]||c):(g=j.j(h,c),i=g.m||c,f=i.moduleLoader);if(f){var o=m[f];if(!o)g=j.j(f,c),0<=e&&0>g.path.indexOf("/")&&(g=j.j((!c.h||w(c.h)?c.h:c.h+"/")+g.path,c)),o=m[f]=new v(f),o.url=j.k(g.path,c,n),j.q(o);var l=function(a){return j.d(a,b.l)};k=new v(a);r(o,function(a){var b,e;"normalize"in a&&(h=a.normalize(h,l,i));b=j.c(h,i);d=f+"!"+h;e=m[d];if(!e){e=new v(d);a.dynamic||(m[d]=e);var c=function(b){a.dynamic||(m[d]=b);e.f(b)};c.resolve=c;c.reject=e.a;a.load(h,b.i,c,i)}k!=e&&r(e,
k.f,k.a)},k.a)}else if(k=m[h],!k)k=m[h]=new v(h),k.url=j.k(g.path,i,n),j.q(k);return k},r:function(a,b,d,e,f){function h(a){i=n;f(a)}function c(){0==--g&&(i=n,e(k))}var k=[],g=b.length,i=p,o,l;r(d.C||s,function(){s=n;for(l=0,o=b.length;l<o&&!i;l++)(function(a,b){b in d.g?(k[a]=d.g[b],c()):b?r(j.z(b,d),function(b){k[a]=b;c()},h):g--})(l,b[l]);0==g&&!i&&e(k)},h)},B:function(){var a;if(!g(l.opera,"Opera"))for(var b in o)if("interactive"==o[b].readyState){a=b;break}return a}};if(!g(c,"Function")){var c=
j.p(c||{}),H;(c.apiContext||l)[c.apiName||"curl"]=y;H=l.define=function(){var a=j.A(arguments);B(a)};y.version="0.5.5dev";H.amd={plugins:n,jQuery:n,curl:"0.5.5dev"};m.curl=y;m["curl/_privileged"]={core:j,cache:m,cfg:c,_require:u,_define:B,_curl:y,global:l,ResourceDef:v}}})(this,document,this.curl);
(function(l,i){function c(){if(!i.body)return p;s||(s=i.createTextNode(""));try{return i.body.removeChild(i.body.appendChild(s)),s=m,n}catch(c){return p}}function g(){var k;k=t[i[w]]&&c();if(!x&&k){x=n;for(clearTimeout(A);y=B.pop();)y();D&&(i[w]="complete");for(var g;g=z.shift();)g()}return k}function C(){g();x||(A=setTimeout(C,r))}var w="readyState",t={loaded:1,interactive:1,complete:1},z=[],D="string"!=typeof i[w],x=p,r=10,u,y,B=[],A,m,s;u="addEventListener"in l?function(c,i){c.addEventListener(i,
g,p);return function(){c.removeEventListener(i,g,p)}}:function(c,i){c.attachEvent("on"+i,g);return function(){c.detachEvent(i,g)}};i&&!g()&&(B=[u(l,"load"),u(i,"readystatechange"),u(l,"DOMContentLoaded")],A=setTimeout(C,r));define("curl/domReady",function(){function c(g){x?g():z.push(g)}c.then=c;c.amd=n;return c})})(this,document);
define("curl/shim/dojo16",["curl/_privileged","curl/domReady"],function(l,i){function c(c){c.ready||(c.ready=function(c){i(c)});c.nameToUrl||(c.nameToUrl=function(g,i){return c.toUrl(g+(i||""))});return c}var g=l.core.c;c(l._curl);l.core.c=function(i,l){var t=g(i,l);t.i=c(t.i);return t};return n});define("domReady",["curl/domReady"],function(l){return{load:function(i,c,g){l(g)}}});
