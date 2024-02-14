"use strict";var B=function(e,o){return function(){return o||e((o={exports:{}}).exports,o),o.exports}};var p=B(function(E,m){
function j(e,o,q,t,c){var n,l,s,u,a,v,r,f,i;if(l=o[2],s=o[1],u=o[0],n=[],q){for(a=0;a<l;a++)for(v=0;v<s;v++)for(r=0;r<u;r++)n.push(t.call(c,e[r][v][a],[r,v,a],e));return n}for(r=0;r<u;r++)for(i=e[r],v=0;v<s;v++)for(f=i[v],a=0;a<l;a++)n.push(t.call(c,f[a],[r,v,a],e));return n}m.exports=j
});var R=B(function(F,O){
function w(e,o,q,t,c,n,l,s){var u,a,v,r,f,i,y,d,S;if(u=o[2],a=o[1],v=o[0],S=n,q){for(r=0;r<u;r++)for(f=0;f<a;f++)for(i=0;i<v;i++)t[S]=l.call(s,e[i][f][r],[i,f,r],e),S+=c;return t}for(i=0;i<v;i++)for(d=e[i],f=0;f<a;f++)for(y=d[f],r=0;r<u;r++)t[S]=l.call(s,y[r],[i,f,r],e),S+=c;return t}O.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),C=R();z(g,"assign",C);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
