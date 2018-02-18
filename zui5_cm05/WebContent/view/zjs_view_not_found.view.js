sap.ui.jsview("sapui5.app05.view.zjs_view_not_found", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zjs_view_not_found
	*/ 
	getControllerName : function() {
		return "sapui5.app05.controller.zjs_view_not_found";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zjs_view_not_found
	*/ 
	createContent : function(oController) {
		
		var oText = new sap.m.Text({
            text: "404. This is not the web page you are looking for :( .\n"
          });
		
		var oLink = new sap.m.Link({
            text: "Top page is here.",
            href: "./"
          });
		
		
 		return new sap.m.Page({
			title: "Page Not Found",
			content: [
			          oText,
			          oLink
			]
		});
	}

});