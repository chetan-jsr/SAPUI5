sap.ui.jsview("sapui5.app05.view.zjs_view_container", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_container
	*/ 
	getControllerName : function() {
		return "sapui5.app05.controller.zjs_view_container";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_container
	*/ 
	createContent : function(oController) {
		this.setDisplayBlock(true);
		return sap.m.App("appContainer")
		
// 		return new sap.m.Page({
//			title: "Title",
//			content: [
//			
//			]
//		});
	}

});