(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[5671,1566,8161,8029],{1566:function(t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];t.exports=function(t){var u=[];for(var r in t)t.hasOwnProperty(r)&&u.push(r);var e=n.concat(u).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+e.join("|")+"|.)","g")}},58161:function(t){function n(t,n,u){var r=function(t,n){return 1===n?t.one:n>=2&&n<=4?t.twoFour:t.other}(t,n);return(r[u]||r).replace("{{count}}",n)}function u(t){var n="";return"almost"===t&&(n="skoro"),"about"===t&&(n="p\u0159ibli\u017en\u011b"),n.length>0?n+" ":""}function r(t){var n="";return"lessThan"===t&&(n="m\xe9n\u011b ne\u017e"),"over"===t&&(n="v\xedce ne\u017e"),n.length>0?n+" ":""}t.exports=function(){var t={xSeconds:{one:{regular:"vte\u0159ina",past:"vte\u0159inou",future:"vte\u0159inu"},twoFour:{regular:"{{count}} vte\u0159iny",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159iny"},other:{regular:"{{count}} vte\u0159in",past:"{{count}} vte\u0159inami",future:"{{count}} vte\u0159in"}},halfAMinute:{other:{regular:"p\u016fl minuty",past:"p\u016fl minutou",future:"p\u016fl minuty"}},xMinutes:{one:{regular:"minuta",past:"minutou",future:"minutu"},twoFour:{regular:"{{count}} minuty",past:"{{count}} minutami",future:"{{count}} minuty"},other:{regular:"{{count}} minut",past:"{{count}} minutami",future:"{{count}} minut"}},xHours:{one:{regular:"hodina",past:"hodinou",future:"hodinu"},twoFour:{regular:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{regular:"{{count}} hodin",past:"{{count}} hodinami",future:"{{count}} hodin"}},xDays:{one:{regular:"den",past:"dnem",future:"den"},twoFour:{regular:"{{count}} dni",past:"{{count}} dny",future:"{{count}} dni"},other:{regular:"{{count}} dn\xed",past:"{{count}} dny",future:"{{count}} dn\xed"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"m\u011bs\xedcem",future:"m\u011bs\xedc"},twoFour:{regular:"{{count}} m\u011bs\xedce",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedce"},other:{regular:"{{count}} m\u011bs\xedc\u016f",past:"{{count}} m\u011bs\xedci",future:"{{count}} m\u011bs\xedc\u016f"}},xYears:{one:{regular:"rok",past:"rokem",future:"rok"},twoFour:{regular:"{{count}} roky",past:"{{count}} roky",future:"{{count}} roky"},other:{regular:"{{count}} rok\u016f",past:"{{count}} roky",future:"{{count}} rok\u016f"}}};return{localize:function(e,o,a){a=a||{};var c,i=function(t){return["lessThan","about","over","almost"].filter((function(n){return!!t.match(new RegExp("^"+n))}))[0]}(e)||"",s=(c=e.substring(i.length)).charAt(0).toLowerCase()+c.slice(1),p=t[s];return a.addSuffix?a.comparison>0?u(i)+"za "+r(i)+n(p,o,"future"):u(i)+"p\u0159ed "+r(i)+n(p,o,"past"):u(i)+r(i)+n(p,o,"regular")}}}},48029:function(t,n,u){var r=u(1566);t.exports=function(){var t=["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],n=["leden","\xfanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\xe1\u0159\xed","\u0159\xedjen","listopad","prosinec"],u=["ne","po","\xfat","st","\u010dt","p\xe1","so"],e=["ned","pon","\xfate","st\u0159","\u010dtv","p\xe1t","sob"],o=["ned\u011ble","pond\u011bl\xed","\xfater\xfd","st\u0159eda","\u010dtvrtek","p\xe1tek","sobota"],a=["DOP.","ODP."],c=["dop.","odp."],i=["dopoledne","odpoledne"],s={MMM:function(n){return t[n.getMonth()]},MMMM:function(t){return n[t.getMonth()]},dd:function(t){return u[t.getDay()]},ddd:function(t){return e[t.getDay()]},dddd:function(t){return o[t.getDay()]},A:function(t){return t.getHours()/12>=1?a[1]:a[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(t){s[t+"o"]=function(n,u){return u[t](n)+"."}})),{formatters:s,formattingTokensRegExp:r(s)}}},95671:function(t,n,u){var r=u(58161),e=u(48029);t.exports={distanceInWords:r(),format:e()}}}]);