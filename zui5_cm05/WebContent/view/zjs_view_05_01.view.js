sap.ui.jsview("sapui5.app05.view.zjs_view_05_01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_05_01
	*/ 
	getControllerName : function() {
		return "sapui5.app05.controller.zjs_view_05_01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_05_01
	*/ 
	createContent : function(oController) {
		
		var oButton = new sap.m.Button("idButton0501", {
			text:"Go to Next Page",
			press:[oController.onNext, oController]
		});
		
		var oFooter = new sap.m.Bar("footerPage1", {
//			contentLeft : [], // sap.ui.core.Control
//			contentMiddle : [], // sap.ui.core.Control
			contentRight : [oButton], // sap.ui.core.Control
		});
		
		
 		return new sap.m.Page({
			title: "Title - First Page",
			content: [
			          ],
			footer: [
			         	oFooter
			         ]
		});
	}

});