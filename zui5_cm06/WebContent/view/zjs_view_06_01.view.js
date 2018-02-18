sap.ui.jsview("sapui5.app06.view.zjs_view_06_01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_06_01
	*/ 
	getControllerName : function() {
		return "sapui5.app06.controller.zjs_view_06_01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_06_01
	*/ 
	createContent : function(oController) {
		
		var oButtonToView02 = new sap.m.Button("buttonToView02",{
																	text : "{i18n>navView01ToView02}", // string
																	press : [ oController.onToView02, oController]
												});
		
		var oFooter = new sap.m.Bar("footerView01", {
											contentLeft : [], // sap.ui.core.Control
											contentMiddle : [], // sap.ui.core.Control
											contentRight : [oButtonToView02], // sap.ui.core.Control
									});
		
		
 		return new sap.m.Page({
 								title: "{i18n>TitleView01}",
 								content: [	],
 								footer : [	oFooter	]
 							});
 		
	}

});