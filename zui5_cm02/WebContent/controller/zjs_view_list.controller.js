sap.ui.controller("controller.zjs_view_list", {

	selectItem: function ( oEvent ) {
		// To get the selected Category ID
//		var oItemSelect = oEvent.getParameter("listItem");
//		var	oPath = oItemSelect.oBindingContexts.modelList.sPath;
//		alert(oPath);
//		var Context = oItemSelect.getBindingContext();
//		var CatID = Context.getProperty("ID");
//		alert(CatID);
		
//		Working for Press event of objectListItem
		var oSource = oEvent.getSource();
		var sTitle = oSource.getTitle();
		
		var dataObject = [
		                  {
		                	  "Value":sTitle
		                  }
		                  ];
		
		var oModelTemp = new sap.ui.model.json.JSONModel();
        oModelTemp.setData(dataObject);
        sap.ui.getCore().setModel(oModelTemp,"modelTemp");
        
		app.to("idDetailPage");
	},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.zjs_view_list
*/
	onInit: function() {
		var modelList = new sap.ui.model.json.JSONModel();
		modelList.loadData("model/zjson_model_01.json");
		sap.ui.getCore().setModel(modelList,"modelList");
		
//		var modelTemp = new sap.ui.model.json.JSONModel();
////		modelList.loadData("model/zjson_model_01.json");
//		sap.ui.getCore().setModel(modelTemp,"modelTemp");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.zjs_view_list
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.zjs_view_list
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.zjs_view_list
*/
//	onExit: function() {
//
//	}

});