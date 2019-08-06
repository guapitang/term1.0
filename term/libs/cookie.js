function setCookie(key,value,options){
    options = options || {};

    var date = "";
    if(options.expires){
        var d = new Date();
        d.setDate(d.getDate()+options.expires);
        date = ";expires=" + d;

    }
    var path = "";
    if(options.path){
        path = ";path=" + options.path;
    }

    document.cookie = key + "=" + value + date + path;
}


function removeCookie(key,options){
    options = options || {};
    options.expires = -1;
    setCookie(key,null,options);
}

function getCookie(key){
    var str = document.cookie;
    var arr = str.split("; ");

    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1];
        }
    }
    return "";
}