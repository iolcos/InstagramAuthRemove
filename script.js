/**** Remove overlay et restaire body overflow auto ****/

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
		// console.log(mutation)
		/*** remove overlay ***/
        if (mutation.addedNodes && mutation.addedNodes.length > 0) {
            var attr = $(mutation.addedNodes).attr('role');
	
			if (typeof attr !== typeof undefined && attr !== false && attr === "presentation") {
				$(mutation.addedNodes).remove();
			}
        }
		
		/*** restaure body overflow auto ***/
		if(mutation.type === "attributes" && mutation.attributeName === "style"){
			$(mutation.target).css("overflow", "auto");
		}
		
		
    });
});

var config = {
    attributes: true,
    childList: true,
    characterData: true
};

observer.observe(document.body, config);


/**** Restaure click lien ****/
$(document).on("click", "a", function(e){
	window.location.href = $(e.currentTarget).attr("href");
});
