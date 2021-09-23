function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tzIY7gAkYW":
        Script1();
        break;
      case "67oe0RjGwlm":
        Script2();
        break;
      case "6WWxn8FCFTa":
        Script3();
        break;
      case "6n1hYMVncDQ":
        Script4();
        break;
      case "6JkvK3IxRg9":
        Script5();
        break;
      case "5g3pZzb51YB":
        Script6();
        break;
      case "5r4Mx9qnpus":
        Script7();
        break;
      case "6JUStZGEqYs":
        Script8();
        break;
      case "5Zyev4oBUf9":
        Script9();
        break;
      case "6VKImqdlYGe":
        Script10();
        break;
      case "6f4FSD8g8pD":
        Script11();
        break;
      case "6ILGGXXqxIo":
        Script12();
        break;
      case "6fsZzFBtwrT":
        Script13();
        break;
      case "64EhQa8Fwg7":
        Script14();
        break;
      case "6CvRHmbxj39":
        Script15();
        break;
      case "6ajXaGnmjfX":
        Script16();
        break;
      case "6OX8T9ot3yA":
        Script17();
        break;
      case "6WVsdZWj56n":
        Script18();
        break;
      case "67iCBKZqZyS":
        Script19();
        break;
      case "5gwZKGq1t1y":
        Script20();
        break;
      case "5y7bs78ApOa":
        Script21();
        break;
      case "5nyuCRAV4kD":
        Script22();
        break;
      case "5uQyZDscZEA":
        Script23();
        break;
      case "64HfeacfB29":
        Script24();
        break;
      case "5qkiDDP0RUL":
        Script25();
        break;
      case "6q1QZuHxo4O":
        Script26();
        break;
      case "6eCnFJ86VEQ":
        Script27();
        break;
      case "6RilccHY0Jw":
        Script28();
        break;
      case "5wIr0gNLPaU":
        Script29();
        break;
      case "6fLD2TGcUAw":
        Script30();
        break;
      case "61TKGu1XOMO":
        Script31();
        break;
      case "5htVSRz5uio":
        Script32();
        break;
      case "694W6dKj7rj":
        Script33();
        break;
      case "6A457DE7Xvp":
        Script34();
        break;
      case "6pVZnLzNOhC":
        Script35();
        break;
      case "61hs9pyoowf":
        Script36();
        break;
      case "6i8JCGotxxs":
        Script37();
        break;
      case "6Wg8gPWSSuR":
        Script38();
        break;
      case "61rhjYCYfmA":
        Script39();
        break;
      case "6AtGHJ89P7T":
        Script40();
        break;
      case "5VqO6okajr2":
        Script41();
        break;
      case "68D7mJVV27w":
        Script42();
        break;
      case "697RRzNuKFI":
        Script43();
        break;
      case "6E3vZzydXTa":
        Script44();
        break;
      case "6MJOcOCFVjc":
        Script45();
        break;
      case "5rMQqndDLRD":
        Script46();
        break;
      case "5x2r9JLxobd":
        Script47();
        break;
      case "5yc9xo01oVw":
        Script48();
        break;
      case "6c6RqcNJ7Lf":
        Script49();
        break;
      case "6kIYgArn26v":
        Script50();
        break;
      case "5iSwIek8tr0":
        Script51();
        break;
      case "60ds4BLJP9l":
        Script52();
        break;
      case "5oPvbjfgwhd":
        Script53();
        break;
      case "5zM4Q09XBtc":
        Script54();
        break;
      case "5qgnoDubhm3":
        Script55();
        break;
      case "64jBnUPzcS6":
        Script56();
        break;
      case "6j0cSIfNUQy":
        Script57();
        break;
      case "6opSC0q52Ch":
        Script58();
        break;
      case "6OVIli646OF":
        Script59();
        break;
      case "5uGhUdfv4u3":
        Script60();
        break;
      case "5z6sLj4QEPv":
        Script61();
        break;
      case "6V8jGhttdM9":
        Script62();
        break;
      case "6czlZQ3XLaj":
        Script63();
        break;
      case "6XM8sZzKJHp":
        Script64();
        break;
      case "67mSldAS6Hh":
        Script65();
        break;
      case "6VmYKaU8pQ1":
        Script66();
        break;
      case "6NDEjPcnYe7":
        Script67();
        break;
      case "6JFfam4kfsH":
        Script68();
        break;
      case "6PC574n6jO4":
        Script69();
        break;
      case "5r1fwrdccJj":
        Script70();
        break;
  }
}

function Script1()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script2()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script3()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script4()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script5()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script6()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script7()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script8()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script9()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script10()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script11()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script12()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script13()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script14()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script15()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script16()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script17()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script18()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script19()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script20()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script21()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script22()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script23()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script24()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script25()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script26()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script27()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script28()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script29()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script30()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script31()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script32()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script33()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script34()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script35()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script36()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script37()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script38()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script39()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script40()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script41()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script42()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script43()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script44()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script45()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script46()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script47()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script48()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script49()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script50()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script51()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script52()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script53()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script54()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script55()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script56()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script57()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script58()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script59()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script60()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script61()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script62()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script63()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script64()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script65()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

function Script66()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script67()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script68()
{
   var $ROOTPATHOFWPAINT="../";
  if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("board");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","board");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {                   
      var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);

      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script69()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptWpaint")!=undefined)
  {       
    showHidenWpaint("pen");
  }
  else    
  {                 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptWpaint");    
    fileref.setAttribute("name","pen");    
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"wPaint/includeJavascript.js");
    if (typeof fileref!="undefined")
    {           
    var tagDiv= document.getElementById("div_cnt_js_css");
      if(tagDiv==undefined)
      {
       tagDiv= document.createElement('div');
       tagDiv.setAttribute("id","div_cnt_js_css");              
      }
      else{tagDiv.innerHTML="";}
      tagDiv.appendChild(fileref);      
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }  
}

function Script70()
{
  var $ROOTPATHOFWPAINT="../";
 if(document.getElementById("includeJavascriptCalculator")!=undefined)
  {       
    showhide_calculator();
  }
  else    
  { 
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("id","includeJavascriptCalculator");
    fileref.setAttribute("name","Cal");
    fileref.setAttribute("src",$ROOTPATHOFWPAINT+"Calculator/initCalculator.js");
    if (typeof fileref!="undefined")
    {   
      var tagDiv= document.getElementById("div_cnt_js_cal");
      if(tagDiv==undefined)
      {
         tagDiv= document.createElement('div');
        tagDiv.setAttribute("id","div_cnt_js_cal");              
      }
      else{tagDiv.innerHTML="";}

      tagDiv.appendChild(fileref);
      var divdialog=document.createElement('div');
        divdialog.setAttribute("id","dialog_calculator");              
        divdialog.setAttribute("class","dialog-calculator");                    
        tagDiv.appendChild(divdialog);
      document.getElementsByTagName("body")[0].appendChild(tagDiv);                              
    }
  }
}

