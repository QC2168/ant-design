(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{3847:function(t,e){t.exports={content:["section",["p","Display the current progress of an operation flow."],["h2","When To Use"],["p","If it will take a long time to complete an operation, you can use ",["code","Progress"]," to show the current progress and status."],["ul",["li",["p","When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds."]],["li",["p","When you need to display the completion percentage of an operation."]]]],meta:{category:"Components",type:"Feedback",title:"Progress",cover:"https://gw.alipayobjects.com/zos/alicdn/xqsDu4ZyR/Progress.svg",filename:"components/progress/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Properties that shared by all types."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","format"],["td","The template function of the content"],["td","function(percent, successPercent)"],["td","(percent) => percent + ",["code","%"]]],["tr",["td","percent"],["td","To set the completion percentage"],["td","number"],["td","0"]],["tr",["td","showInfo"],["td","Whether to display the progress value and the status icon"],["td","boolean"],["td","true"]],["tr",["td","status"],["td","To set the status of the Progress, options: ",["code","success"]," ",["code","exception"]," ",["code","normal"]," ",["code","active"],"(line only)"],["td","string"],["td","-"]],["tr",["td","strokeColor"],["td","The color of progress bar"],["td","string"],["td","-"]],["tr",["td","strokeLinecap"],["td","To set the style of the progress linecap"],["td",["code","round"]," ","|"," ",["code","butt"]," ","|"," ",["code","square"],", see ",["a",{title:null,href:"https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap"},"stroke-linecap"]],["td",["code","round"]]],["tr",["td","success"],["td","Configs of successfully progress bar"],["td","{ percent: number, strokeColor: string }"],["td","-"]],["tr",["td","trailColor"],["td","The color of unfilled part"],["td","string"],["td","-"]],["tr",["td","type"],["td","To set the type, options: ",["code","line"]," ",["code","circle"]," ",["code","dashboard"]],["td","string"],["td",["code","line"]]]]],["h3",["code",'type="line"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","steps"],["td","The total step count"],["td","number"],["td","-"],["td","-"]],["tr",["td","strokeColor"],["td","The color of progress bar, render ",["code","linear-gradient"]," when passing an object, could accept ",["code","string[]"]," when has ",["code","steps"],"."],["td","string ","|"," string[] ","|"," { from: string; to: string; direction: string }"],["td","-"],["td","4.21.0: ",["code","string[]"]]],["tr",["td","strokeWidth"],["td","To set the width of the progress bar, unit: ",["code","px"]],["td","number"],["td","10"],["td","-"]]]],["h3",["code",'type="circle"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","strokeColor"],["td","The color of circular progress, render ",["code","linear-gradient"]," when passing an object"],["td","string ","|"," object"],["td","-"]],["tr",["td","strokeWidth"],["td","To set the width of the circular progress, unit: percentage of the canvas width"],["td","number"],["td","6"]],["tr",["td","width"],["td","To set the canvas width of the circular progress, unit: ",["code","px"]],["td","number"],["td","132"]]]],["h3",["code",'type="dashboard"']],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","gapDegree"],["td","The gap degree of half circle, 0 ~ 295"],["td","number"],["td","75"]],["tr",["td","gapPosition"],["td","The gap position, options: ",["code","top"]," ",["code","bottom"]," ",["code","left"]," ",["code","right"]],["td","string"],["td",["code","bottom"]]],["tr",["td","strokeWidth"],["td","To set the width of the dashboard progress, unit: percentage of the canvas width"],["td","number"],["td","6"]],["tr",["td","width"],["td","To set the canvas width of the dashboard progress, unit: ",["code","px"]],["td","number"],["td","132"]]]]]}}}]);
