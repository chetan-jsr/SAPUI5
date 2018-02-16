sap.ui.jsview("view.zjs_view_detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_detail
	*/ 
	getControllerName : function() {
		return "controller.zjs_view_detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_detail
	*/ 
	createContent : function(oController) {
		
		var oDetail = new sap.ui.layout.form.SimpleForm("idDetailForm",{	title: "View Details",
			editable: true,
			width: "600px"   });
		
//		ID
		var oDetLabelID = new sap.m.Label("idDetLabelID", 
										{ 	text:"{modelFirst>/Label/0/ID}",
											labelFor: "idDetID"
											});
		oDetail.addContent(oDetLabelID);
		
		var oDetInputID = new sap.m.Input("idDetID", 
										{ 	editable:false	});
		oDetail.addContent(oDetInputID);
		
//		Type
		var oDetLabelType = new sap.m.Label("idDetLabelType", {
			text : "{modelFirst>/Label/0/Type}",
			labelFor : "idDetInputType"
		});
		oDetail.addContent(oDetLabelType);
		
		var oDetInputType = new sap.m.Input("idDetInputType", {	
			editable:false
		});
		oDetail.addContent(oDetInputType);
		
//		Group
		var oDetLabelGroup = new sap.m.Label("idDetLabelGroup", {
			text : "{modelFirst>/Label/0/Group}",
			labelFor : "idDetInputGroup"
		});
		oDetail.addContent(oDetLabelGroup);

		var oDetInputGroup = new sap.m.Input("idDetInputGroup", {	
			editable:false
		});
		oDetail.addContent(oDetInputGroup);
		
//		Quantity
		var oDetLabelQuantity = new sap.m.Label("idDetLabelQuantity", {
			text : "{modelFirst>/Label/0/Quantity}",
			labelFor : "idDetInputQuantity"
		});
		oDetail.addContent(oDetLabelQuantity);

		var oDetInputQuantity = new sap.m.Input("idDetInputQuantity", {	
			editable:false
		});
		oDetail.addContent(oDetInputQuantity);
		
//		"Uom": "Unit of Measure",	
		var oDetLabelUom = new sap.m.Label("idDetLabelUom", {
			text : "{modelFirst>/Label/0/Uom}",
			labelFor : "idDetInputUom"
		});
		oDetail.addContent(oDetLabelUom);

		var oDetInputUom = new sap.m.Input("idDetInputUom", {	
			editable:false
		});
		oDetail.addContent(oDetInputUom);
		
//		"Price"		
		var oDetLabelPrice = new sap.m.Label("idDetLabelPrice", {
			text : "{modelFirst>/Label/0/Price}",
			labelFor : "idDetInputPrice"
		});
		oDetail.addContent(oDetLabelPrice);

		var oDetInputPrice = new sap.m.Input("idDetInputPrice", {	
			editable:false
		});
		oDetail.addContent(oDetInputPrice);
		
//		"Currency": "Currency",
		var oDetLabelCurrency = new sap.m.Label("idDetLabelCurrency", {
			text : "{modelFirst>/Label/0/Currency}",
			labelFor : "idDetInputCurrency"
		});
		oDetail.addContent(oDetLabelCurrency);

		var oDetInputCurrency = new sap.m.Input("idDetInputCurrency", {	
			editable:false
		});
		oDetail.addContent(oDetInputCurrency);
		
//		"Description": "Material Description",
		var oDetLabelDescription = new sap.m.Label("idDetLabelDescription", {
			text : "{modelFirst>/Label/0/Description}",
			labelFor : "idDetInputDescription"
		});
		oDetail.addContent(oDetLabelDescription);

		var oDetInputDescription = new sap.m.Input("idDetInputDescription", {
				editable:false
		});
		oDetail.addContent(oDetInputDescription);
		
//		"Manufacturer": "Manufactered By",
		var oDetLabelManufacturer = new sap.m.Label("idDetLabelManufacturer", {
			text : "{modelFirst>/Label/0/Manufacturer}",
			labelFor : "idDetInputManufacturer"
		});
		oDetail.addContent(oDetLabelManufacturer);

		var oDetInputManufacturer = new sap.m.Input("idDetInputManufacturer", {	
			editable:false
		});
		oDetail.addContent(oDetInputManufacturer);
		
//		"Status": "Availability Status"	
		var oDetLabelStatus = new sap.m.Label("idDetLabelStatus", {
			text : "{modelFirst>/Label/0/Status}",
			labelFor : "idDetInputStatus"
		});
		oDetail.addContent(oDetLabelStatus);

		var oDetInputStatus = new sap.m.Input("idDetInputStatus", {	
			editable:false
		});
		oDetail.addContent(oDetInputStatus);
		
		
 		return new sap.m.Page({
			title: "Title",
			content: [
			oDetail
			]
		});
	}

});