sap.ui.controller("controller.zjs_view_03", {

	toView02: function() {
//		app.to("iddPage");
		sap.ui.getCore().byId("idApp").to("iddPage");
	},
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.zjs_view_03
*/
	onInit: function() {
//		var modelProduct = new sap.ui.model.json.JSONModel();
//		modelProduct.loadData("model/zjson_model_02.json");
//		sap.ui.getCore().setModel(modelProduct);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.zjs_view_03
*/
	onBeforeRendering: function() {
//		var oModelList = sap.ui.getCore().getModel("modelList");
//		var oModelData = oModelList.getData();
//		var oProduct = oModelData.Product;
//		
//		var oModelTemp = sap.ui.getCore().getModel("modelTemp");
//		var oSelVal = oModelTemp.getData();
//		
//		
//		for (var i = 0; i < oProduct.length; i++)
//			{
//			if (oProduct[i].ID == oSelVal[0].Value)
//				{
//				var sDesc = oProduct[i].Description;
//				sap.ui.getCore().byId("idInput0301").setValue(sDesc);
//				}
//			}
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.zjs_view_03
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.zjs_view_03
*/
//	onExit: function() {
//
//	}

});