sap.ui.controller("sapui5.app05.controller.zjs_view_05_01", {

	onNext: function()	{
		// Get the Router Info
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		// Tell the Router to Navigate To view "zjs_view_05_02" using the route "secondView" defined in manifest.json
		oRouter.navTo("secondView");
	}
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.zjs_view_05_01
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.zjs_view_05_01
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.zjs_view_05_01
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.zjs_view_05_01
*/
//	onExit: function() {
//
//	}

});