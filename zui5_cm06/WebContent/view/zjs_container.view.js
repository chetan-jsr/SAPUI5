sap.ui.jsview("sapui5.app06.view.zjs_container", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zui5_cm06.zjs_container
	*/ 
	getControllerName : function() {
		return "sapui5.app06.controller.zjs_container";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zui5_cm06.zjs_container
	*/ 
	createContent : function(oController) {
		
		this.setDisplayBlock(true);
//		return sap.m.App("appCont");
		return sap.m.SplitApp("splitAppCont");
		
	}

});