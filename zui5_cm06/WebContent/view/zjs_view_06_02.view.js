sap.ui.jsview("sapui5.app06.view.zjs_view_06_02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_06_02
	*/ 
	getControllerName : function() {
		return "sapui5.app06.controller.zjs_view_06_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_06_02
	*/ 
	createContent : function(oController) {
		
		var oButtonToView01 = new sap.m.Button("buttonToView01", {
																	text: "{i18n>navView02ToView01}",
																	press: [oController.onToView01, oController]
												});																				
		
		var oFooterView02 = new sap.m.Bar("footerView02", {
															contentLeft : [oButtonToView01], // sap.ui.core.Control
															contentMiddle : [], // sap.ui.core.Control
															contentRight : [], // sap.ui.core.Control
											});
		
 		return new sap.m.Page({
			title: "{i18n>TitleView02}",
			showNavButton : true, // boolean
			navButtonTooltip : "Back to View 01", // string
			navButtonType : sap.m.ButtonType.Back, // sap.m.ButtonType, since 1.12
			content: [ 			],
			footer:[oFooterView02],
 		navButtonPress : [ oController.onToView01, oController ]
		});
	}

});