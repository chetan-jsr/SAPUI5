sap.ui.controller("controller.zjs_view_detail", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.zjs_view_detail
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.zjs_view_detail
*/
	onBeforeRendering: function() {
		var oModelList = sap.ui.getCore().getModel("modelList");
		var oModelData = oModelList.getData();
		var oProduct = oModelData.Product;
		
		var oModelTemp = sap.ui.getCore().getModel("modelTemp");
		var oSelVal = oModelTemp.getData();
		
		
		for (var i = 0; i < oProduct.length; i++)
			{
			if (oProduct[i].ID == oSelVal[0].Value)
				{
				var sDesc = oProduct[i].Description;
				sap.ui.getCore().byId("idDetID").setValue(oProduct[i].ID);
				sap.ui.getCore().byId("idDetInputType").setValue(oProduct[i].Type);
				sap.ui.getCore().byId("idDetInputGroup").setValue(oProduct[i].Group);
				sap.ui.getCore().byId("idDetInputQuantity").setValue(oProduct[i].Quantity);
				sap.ui.getCore().byId("idDetInputUom").setValue(oProduct[i].Uom);
				sap.ui.getCore().byId("idDetInputPrice").setValue(oProduct[i].Price);
				sap.ui.getCore().byId("idDetInputCurrency").setValue(oProduct[i].Currency);
				sap.ui.getCore().byId("idDetInputDescription").setValue(oProduct[i].Description);
				sap.ui.getCore().byId("idDetInputManufacturer").setValue(oProduct[i].Manufacturer);
				sap.ui.getCore().byId("idDetInputStatus").setValue(oProduct[i].Status);
				}
			}
	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.zjs_view_detail
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.zjs_view_detail
*/
//	onExit: function() {
//
//	}

});