(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[8769],{18769:function(n,t,o){var e=o(1566);n.exports=function(){var n=["sij","velj","o\u017eu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],t=["sije\u010danj","velja\u010da","o\u017eujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"],o=["sije\u010dnja","velja\u010de","o\u017eujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"],r=["ne","po","ut","sr","\u010de","pe","su"],u=["ned","pon","uto","sri","\u010det","pet","sub"],a=["nedjelja","ponedjeljak","utorak","srijeda","\u010detvrtak","petak","subota"],s=["ujutro","popodne"],i=["ujutro","popodne"],p=["ujutro","popodne"],j={MMM:function(t){return n[t.getMonth()]},MMMM:function(n){return t[n.getMonth()]},dd:function(n){return r[n.getDay()]},ddd:function(n){return u[n.getDay()]},dddd:function(n){return a[n.getDay()]},A:function(n){return n.getHours()/12>=1?s[1]:s[0]},a:function(n){return n.getHours()/12>=1?i[1]:i[0]},aa:function(n){return n.getHours()/12>=1?p[1]:p[0]}};return["M","D","DDD","d","Q","W"].forEach((function(n){j[n+"o"]=function(t,o){return o[n](t)+"."}})),["D","Do","DD"].forEach((function(n){j[n+" MMM"]=function(t,e){return(j[n]||e[n])(t,e)+" "+o[t.getMonth()]}})),{formatters:j,formattingTokensRegExp:e(j)}}}}]);