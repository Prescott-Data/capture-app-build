(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[7520,1566],{1566:function(e){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var r=[];for(var t in e)e.hasOwnProperty(t)&&r.push(t);var o=n.concat(r).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},77520:function(e,n,r){var t=r(1566);e.exports=function(){var e=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],n=["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"],r=["ne","po","to","sr","\u010de","pe","so"],o=["ned","pon","tor","sre","\u010det","pet","sob"],u=["nedelja","ponedeljek","torek","sreda","\u010detrtek","petek","sobota"],a=["AM","PM"],s=["am","pm"],p=["a.m.","p.m."],c={MMM:function(n){return e[n.getMonth()]},MMMM:function(e){return n[e.getMonth()]},dd:function(e){return r[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?s[1]:s[0]},aa:function(e){return e.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){c[e+"o"]=function(n,r){return r[e](n)+"."}})),{formatters:c,formattingTokensRegExp:t(c)}}}}]);