 document.addEventListener("DOMContentLoaded", function(){
     GUI.init();
 });

 var GUI = function(){
    
    function init(){
        setEventHandlers();
        generateContent();
    }

    function createFloatBox(id, attr){
        var box = document.createElement("div");
        var imgbox = document.createElement("img");
        var boxshadow = document.createElement("div");
        
        box.id = id;
        box.className = "floaty-boxy " + attr.iconCls;
        
        imgbox.src = attr.type;
        imgbox.style.width = "inherit";
        imgbox.style.height = "inherit";
        
        boxshadow.className = "floaty-shadowy floatr-bigsmall";

        box.appendChild(imgbox);
        document.getElementById("idbox").appendChild(box);
        document.getElementById("idbox-shadow").appendChild(boxshadow);

        box.addEventListener("click", function(){
            attr.clickAction();
        });
    }


    function generateContent(){
        createFloatBox("paul", {color: "whocares", type:"resources/info.svg", iconCls: "floatr", clickAction: function() { var pop =  document.getElementById("content");  pop.style.display = "block"; pop.className = "come-in-once";} });
        createFloatBox("contactme", {color: "whyareyoureadingthis", type:"resources/email.svg", iconCls: "floatr", clickAction: function(){ var pop =  document.getElementById("contact");  pop.style.display = "block"; pop.className = "come-in-once"; }})
        createFloatBox("github", { color: "#330033", type: "resources/GitHub-Mark-120px-plus.png", iconCls : "floatr", clickAction : function(){ var win = window.open("https://github.com/rebstorm", '_blank'); win.focus();}});
        createFloatBox("xing", { color: "#00ff00", type: "resources/xing-logo.png", iconCls: "floatr", clickAction: function(){ var win = window.open("https://www.xing.com/profile/Paul_Jacks", '_blank'); win.focus(); }});
    }


    function setEventHandlers(){
        document.getElementById("close-content").addEventListener("click", function(){
            document.getElementById("content").style.display = "none";
        });

        document.getElementById("icon-attr").addEventListener("click", function(){
            document.getElementById("iconcopy").className ="come-in-once";
            document.getElementById("iconcopy").style.display = "block";
        });

        document.getElementById("close-icon").addEventListener("click", function(){
            document.getElementById("iconcopy").style.display = "none";
        });

        document.getElementById("close-contact").addEventListener("click", function(){
            document.getElementById("contact").style.display = "none";
        });
    }


    return {
        init : init,
    } 
 }()