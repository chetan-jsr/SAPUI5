sap.ui.jsview("view.zjs_view_list", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf view.zjs_view_list
	 */
	getControllerName : function() {
		return "controller.zjs_view_list";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf view.zjs_view_list
	 */
	createContent : function(oController) {
		var oList = new sap.m.List("idListProduct",{
			items : {
				path : "modelList>/Product",
				template : new sap.m.ObjectListItem("idObjectList", {
					title : "{modelList>ID}",
					type : "Active",
					press: oController.selectItem,
					number : "{modelList>Price}",
					numberUnit: "{modelList>Currency}",
					intro : "{modelList>Description}",
					
					attributes : [ 
					               { 	"text" : "{modelList>Manufacturer}" },
					               {	"text" : "{modelList>Type}" 		} ],
					firstStatus : {		"text" : "{modelList>Status}" 	},
					secondStatus : {	"text" : "{modelList>Quantity} {modelList>Uom}" },
					
				}),
			},
//			itemPress: function(oEvent){	oController.selectItem(oEvent);	},
			
		});
	

		return new sap.m.Page({
			title : "Products",
			content : [ oList ]
		});
	}

});