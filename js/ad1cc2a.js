window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){arguments.callee=arguments.callee.caller;var a=[].slice.call(arguments);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());
$("document").ready(function(){$("#pageSelect").bind("change",function(){window.location=$(this).val()})});
