sap.ui.jsview("view.zjs_view_01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_01
	*/ 
	getControllerName : function() {
		return "controller.zjs_view_01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_01
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "List",
			content: [
			
			]
		});
	}

});