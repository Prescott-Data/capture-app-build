(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[7193],{97193:function(n,e,r){var t=r(1566);n.exports=function(){var n=["jan","feb","mar","apr","mei","jun","jul","aug","sep","okt","nov","dec"],e=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],r=["zo","ma","di","wo","do","vr","za"],a=["zon","maa","din","woe","don","vri","zat"],u=["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],o=["AM","PM"],d=["am","pm"],i=["a.m.","p.m."],f={MMM:function(e){return n[e.getMonth()]},MMMM:function(n){return e[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return a[n.getDay()]},dddd:function(n){return u[n.getDay()]},A:function(n){return n.getHours()/12>=1?o[1]:o[0]},a:function(n){return n.getHours()/12>=1?d[1]:d[0]},aa:function(n){return n.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){f[n+"o"]=function(e,r){return r[n](e)+"e"}})),{formatters:f,formattingTokensRegExp:t(f)}}}}]);