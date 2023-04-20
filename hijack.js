(function(){
    var fr = undefined;
    var inp = undefined;
    var ig = undefined;
    function reload(e) {
        if (e.key != "k") {
            return;
        }
        e.preventDefault();
        if (fr) {
            fr.style.display = "block";
            inp.focus();
            return;
        }
        fr = document.createElement("div");
        fr.id = 'mfr';
        fr.style.position = "fixed";
        fr.style.top = "10px";
        fr.style.bottom = "10px";
        fr.style.left = "10px";
        fr.style.right = "10px";
        fr.style['z-index'] = "1000";
        fr.style['box-shadow'] = "-2px 2px 8px lightgrey";
        document.body.appendChild(fr);
        inp = document.createElement("textarea");
        inp.style.display = "block";
        inp.style.width = "100%";
        inp.style.height = "100%";
        inp.style.background = "white";
        inp.style.border = "1px solid teal";
        inp.style['border-radius'] = "4px";
        inp.style.position = "absolute";
        inp.style.resize = "none";
        inp.style.padding = "12px";
        var btn = document.createElement("button");
        btn.type = "submit"
        btn.innerText = "Go!";
        btn.style.position = "absolute";
        btn.style['border-radius'] = "50%";
        btn.style.bottom = "20px";
        btn.style.right = "20px";
        btn.style['line-height'] = "40px";
        btn.style.width = "40px";
        btn.style['box-shadow'] = "0 0 6px lightgrey";
        btn.style['text-align'] = "center";
        var dok = document.createElement("form");
        dok.appendChild(inp);
        dok.appendChild(btn);
        fr.appendChild(dok);
        dok.addEventListener("submit", function(e) {
            e.preventDefault();
            var s = inp.value;
            loadStyle(s);
            inp.value = "";
            fr.style.display = "none";
        });
        ig = document.createElement("style");
        document.head.appendChild(ig);
        inp.focus();
    };
    function loadStyle(s) {
        ig.innerHTML = s;
    };
    document.addEventListener("keydown", reload);
})();
