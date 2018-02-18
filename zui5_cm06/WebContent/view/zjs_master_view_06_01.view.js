sap.ui.jsview("sapui5.app06.view.zjs_master_view_06_01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_master_view_06_01
	*/ 
	getControllerName : function() {
		return "sapui5.app06.controller.zjs_master_view_06_01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_master_view_06_01
	*/ 
	createContent : function(oController) {
		
		var oButtonMaster = new sap.m.Button("buttonMaster",{
																text:"To Second View",
																press:[oController.onMasterButton, oController]
		});
		
 		return new sap.m.Page({
			title: "Master Title 1",
			content: [
			oButtonMaster
			]
		});
	}

});