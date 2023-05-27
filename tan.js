(function(){
    function markOn(id, ev, func) {
        document.getElementById(id).addEventListener(ev, func);
    }
    (function(){
        //nav
        var fnav = document.getElementById("comp-lgozhmdfdropWrapper");
        markOn("comp-lgozhmdf3", "mouseenter", function(){ fnav.classList.remove("lowhover"); });
        markOn("comp-lgozhmdf5", "mouseenter", function(){ fnav.classList.add("lowhover"); });
        var menu = document.getElementById("comp-lgozhmdfnavContainer");
        markOn("comp-lhvmcvjb", "click", function(){ menu.classList.add("open") });
        markOn("comp-lhvmen3w", "click", function(){ menu.classList.remove("open") });
    })();
})();
