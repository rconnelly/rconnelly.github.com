window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var c=[].slice.call(arguments);typeof console.log==="object"?log.apply.call(console.log,console,c):console.log.apply(console,c)}};
(function(c){function f(){}for(var r="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),o;o=r.pop();)c[o]=c[o]||f})(function(){try{return console.log(),window.console}catch(c){return window.console={}}}());
(function(c){var f="Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),r="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),o="January,February,March,April,May,June,July,August,September,October,November,December".split(","),h=[];h.Jan="01";h.Feb="02";h.Mar="03";h.Apr="04";h.May="05";h.Jun="06";h.Jul="07";h.Aug="08";h.Sep="09";h.Oct="10";h.Nov="11";h.Dec="12";c.format=function(){var c=function(e){var c="";e.indexOf(".")!==-1&&(c=e.split("."),e=c[0],c=c[1]);var a=e.split(":");
return a.length===3?(hour=a[0],minute=a[1],second=a[2],{time:e,hour:hour,minute:minute,second:second,millis:c}):{time:"",hour:"",minute:"",second:"",millis:""}};return{date:function(e,l){try{var a=null,k=null,g=null,i=null,m=null,d=null;if(typeof e.getFullYear==="function")k=e.getFullYear(),g=e.getMonth()+1,i=e.getDate(),m=e.getDay(),d=c(e.toTimeString());else if(e.search(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[-+]?\d{2}:?\d{2}/)!=-1)var b=e.split(/[T\+-]/),k=b[0],g=b[1],i=b[2],d=c(b[3].split(".")[0]),
a=new Date(k,g-1,i),m=a.getDay();else switch(b=e.split(" "),b.length){case 6:k=b[5];g=h[b[1]]||b[1];i=b[2];d=c(b[3]);a=new Date(k,g-1,i);m=a.getDay();break;case 2:var j=b[0].split("-"),k=j[0],g=j[1],i=j[2],d=c(b[1]),a=new Date(k,g-1,i),m=a.getDay();break;case 7:case 9:case 10:k=b[3];g=h[b[1]]||b[1];i=b[2];d=c(b[4]);a=new Date(k,g-1,i);m=a.getDay();break;default:return e}b=a="";for(j=0;j<l.length;j++){var q=l.charAt(j);a+=q;switch(a){case "ddd":b+=f[parseInt(m,10)]||m;a="";break;case "dd":if(l.charAt(j+
1)=="d")break;String(i).length===1&&(i="0"+i);b+=i;a="";break;case "MMMM":var s=b,p=g,t=parseInt(p,10)-1,b=s+(o[t]||p),a="";break;case "MMM":if(l.charAt(j+1)==="M")break;var s=b,p=g,u=parseInt(p,10)-1,b=s+(r[u]||p),a="";break;case "MM":if(l.charAt(j+1)=="M")break;String(g).length===1&&(g="0"+g);b+=g;a="";break;case "yyyy":b+=k;a="";break;case "yy":if(l.charAt(j+1)=="y"&&l.charAt(j+2)=="y")break;b+=String(k).slice(-2);a="";break;case "HH":b+=d.hour;a="";break;case "hh":var n=d.hour==0?12:d.hour<13?
d.hour:d.hour-12,n=String(n).length==1?"0"+n:n;b+=n;a="";break;case "h":if(l.charAt(j+1)=="h")break;n=d.hour==0?12:d.hour<13?d.hour:d.hour-12;b+=n;a="";break;case "mm":b+=d.minute;a="";break;case "ss":b+=d.second.substring(0,2);a="";break;case "SSS":b+=d.millis.substring(0,3);a="";break;case "a":b+=d.hour>=12?"PM":"AM";a="";break;case " ":b+=q;a="";break;case "/":b+=q;a="";break;case ":":b+=q;a="";break;default:a.length===2&&a.indexOf("y")!==0&&a!="SS"?(b+=a.substring(0,1),a=a.substring(1,2)):a.length===
3&&a.indexOf("yyy")===-1&&(a="")}}return b}catch(v){return console.log(v),e}}}}()})(Zepto);Zepto.format.date.defaultShortDateFormat="dd/MM/yyyy";Zepto.format.date.defaultLongDateFormat="dd/MM/yyyy hh:mm:ss";
Zepto(document).ready(function(){Zepto(".shortDateFormat").each(function(c,f){Zepto(f).is(":input")?Zepto(f).val(Zepto.format.date(Zepto(f).val(),Zepto.format.date.defaultShortDateFormat)):Zepto(f).text(Zepto.format.date(Zepto(f).text(),Zepto.format.date.defaultShortDateFormat))});Zepto(".longDateFormat").each(function(c,f){Zepto(f).is(":input")?Zepto(f).val(Zepto.format.date(Zepto(f).val(),Zepto.format.date.defaultLongDateFormat)):Zepto(f).text(Zepto.format.date(Zepto(f).text(),Zepto.format.date.defaultLongDateFormat))})});
