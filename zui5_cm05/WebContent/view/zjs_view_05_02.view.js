sap.ui.jsview("sapui5.app05.view.zjs_view_05_02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_05_02
	*/ 
	getControllerName : function() {
		return "sapui5.app05.controller.zjs_view_05_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_05_02
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Title - Page 2",
			content: [
			
			]
		});
	}

});