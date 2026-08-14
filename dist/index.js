"use strict";var B=function(e,f){return function(){try{return f||e((f={exports:{}}).exports,f),f.exports}catch(c){throw (f=0, c)}};};var p=B(function(E,m){
function j(e,f,c,t,S){var n,l,s,u,a,v,r,i,o;if(l=f[2],s=f[1],u=f[0],n=[],c){for(a=0;a<l;a++)for(v=0;v<s;v++)for(r=0;r<u;r++)n.push(t.call(S,e[r][v][a],[r,v,a],e));return n}for(r=0;r<u;r++)for(o=e[r],v=0;v<s;v++)for(i=o[v],a=0;a<l;a++)n.push(t.call(S,i[a],[r,v,a],e));return n}m.exports=j
});var R=B(function(F,O){
function w(e,f,c,t,S,n,l,s){var u,a,v,r,i,o,y,d,q;if(u=f[2],a=f[1],v=f[0],q=n,c){for(r=0;r<u;r++)for(i=0;i<a;i++)for(o=0;o<v;o++)t[q]=l.call(s,e[o][i][r],[o,i,r],e),q+=S;return t}for(o=0;o<v;o++)for(d=e[o],i=0;i<a;i++)for(y=d[i],r=0;r<u;r++)t[q]=l.call(s,y[r],[o,i,r],e),q+=S;return t}O.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=p(),C=R();z(g,"assign",C);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
