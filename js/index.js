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
        var imgBox = document.createElement("img");
        var boxShadow = document.createElement("div");
        var boxContainer = document.createElement("div");

        box.id = id;
        box.className = "floaty-boxy " + attr.iconCls;

        imgBox.src = attr.type;
        imgBox.style.width = "50%";

        boxShadow.className = "floaty-shadowy floatr-bigsmall";
        boxContainer.className = "box-container";

        box.appendChild(imgBox);
        boxContainer.appendChild(box);
        boxContainer.appendChild(boxShadow);

        document.getElementById("idbox").appendChild(boxContainer);


        box.addEventListener("click", function(){
            attr.clickAction();
        });
    }


    function generateContent(){
        createFloatBox("paul", {color: "whocares", type:"resources/info.svg", iconCls: "floatr", clickAction: function() { var pop =  document.getElementById("content");  pop.style.display = "block"; pop.className = "come-in-once";} });
        createFloatBox("contactme", {color: "whyareyoureadingthis", type:"resources/email.svg", iconCls: "floatr", clickAction: function(){ var pop =  document.getElementById("contact");  pop.className = "come-in-once"; pop.style.display = "block"; }})
        createFloatBox("github", { color: "#330033", type: "resources/GitHub-Mark-120px-plus.png", iconCls : "floatr", clickAction : function(){ var win = window.open("https://github.com/rebstorm", '_blank'); win.focus();}});
        createFloatBox("xing", { color: "#00ff00", type: "resources/xing-logo.png", iconCls: "floatr", clickAction: function(){ var win = window.open("https://www.xing.com/profile/Paul_Jacks", '_blank'); win.focus(); }});
        createFloatBox("twitter", { color: "#00ff00", type: "resources/twitt.svg", iconCls: "floatr", clickAction: function(){ var win = window.open("https://twitter.com/rebstorm", '_blank'); win.focus(); }});
    }


    function setEventHandlers(){
        // CONTENT CLOSE
        document.getElementById("close-content").addEventListener("click", function(){
            document.getElementById("content").className = "leave-once";
            window.setTimeout(function(){
               document.getElementById("content").style.display = "none";
            }, 450);
        });

        document.getElementById("icon-attr").addEventListener("click", function(){
            document.getElementById("iconcopy").className ="come-in-once";
        });

        document.getElementById("close-icon").addEventListener("click", function(){
            document.getElementById("iconcopy").style.display = "none";
        });
        // CONTACT CLOSE
        document.getElementById("close-contact").addEventListener("click", function(){
            document.getElementById("contact").className = "leave-once";
            window.setTimeout(function(){
               document.getElementById("contact").style.display = "none";
            }, 450);
        });
    }


    return {
        init : init,
    }
 }()
