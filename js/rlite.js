!function(n,r){var e=n.define;e&&e.amd?e("rlite",[],r):"undefined"!=typeof module&&module.exports?module.exports=r():n.Rlite=r()}(this,function(){return function(){function n(n){return n}function r(n){return~n.indexOf("/?")&&(n=n.replace("/?","?")),"/"==n[0]&&(n=n.slice(1)),"/"==n[n.length-1]&&(n=n.slice(0,-1)),n}function e(n,r){for(var e=n.split("/"),t=o,i={},u=0;u<e.length&&t;++u){var a=r(e[u]);t=t[a.toLowerCase()]||t[":"],t&&t["~"]&&(i[t["~"]]=a)}return t&&{cb:t["@"],params:i}}function t(n,r,e){if(n&&r.cb)for(var t=n.indexOf("#"),i=(t<0?n:n.slice(0,t)).split("&"),o=0;o<i.length;++o){var u=i[o].split("=");r.params[u[0]]=e(u[1])}return r}function i(i){var o=r(i).split("?"),a=~i.indexOf("%")?u:n;return t(o[1],e(o[0],a)||{},a)}var o={},u=decodeURIComponent;return{add:function(n,r){for(var e=n.split("/"),t=o,i=0;i<e.length;++i){var u=e[i],a=":"==u[0]?":":u.toLowerCase();t=t[a]||(t[a]={}),":"==a&&(t["~"]=u.slice(1))}t["@"]=r},exists:function(n){return!!i(n).cb},lookup:i,run:function(n){var r=i(n);return r.cb&&r.cb({url:n,params:r.params}),!!r.cb}}}});