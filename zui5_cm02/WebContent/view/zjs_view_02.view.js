sap.ui.jsview("view.zjs_view_02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_01
	*/ 
	getControllerName : function() {
		return "controller.zjs_view_02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_01
	*/ 
	createContent : function(oController) {
		
		var oForm = new sap.ui.layout.form.SimpleForm("idForm1",{	title: "Create a New Product",
														editable: true,
														width: "600px"   });
//		ID
		var oLabelID = new sap.m.Label("idLabel", 
										{ 	text:"{modelFirst>/Label/0/ID}",
											labelFor: "idInput",
											required:true });
		oForm.addContent(oLabelID);
		
		var oInputID = new sap.m.Input("idInput", 
										{ 	value: "",
											placeholder: "{modelFirst>/Placeholder/0/ID}"	});
		oForm.addContent(oInputID);
		
//		Type
		var oLabelType = new sap.m.Label("idLabel1", {
			text : "{modelFirst>/Label/0/Type}",
			labelFor : "idInput",
			required : true
		});
		oForm.addContent(oLabelType);
		
		var oInputType = new sap.m.Input("idInput1", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Type}"
		});
		oForm.addContent(oInputType);
		
//		Group
		var oLabelGroup = new sap.m.Label("idLabelGroup", {
			text : "{modelFirst>/Label/0/Group}",
			labelFor : "idInputGroup",
			required : true
		});
		oForm.addContent(oLabelGroup);

		var oInputGroup = new sap.m.Input("idInputGroup", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Group}"
		});
		oForm.addContent(oInputGroup);
		
//		Quantity
		var oLabelQuantity = new sap.m.Label("idLabelQuantity", {
			text : "{modelFirst>/Label/0/Quantity}",
			labelFor : "idInputQuantity",
			required : true
		});
		oForm.addContent(oLabelQuantity);

		var oInputQuantity = new sap.m.Input("idInputQuantity", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Quantity}"
		});
		oForm.addContent(oInputQuantity);
		
//		"Uom": "Unit of Measure",	
		var oLabelUom = new sap.m.Label("idLabelUom", {
			text : "{modelFirst>/Label/0/Uom}",
			labelFor : "idInputUom",
			required : true
		});
		oForm.addContent(oLabelUom);

		var oInputUom = new sap.m.Input("idInputUom", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Uom}"
		});
		oForm.addContent(oInputUom);
		
//		"Price"		
		var oLabelPrice = new sap.m.Label("idLabelPrice", {
			text : "{modelFirst>/Label/0/Price}",
			labelFor : "idInputPrice",
			required : true
		});
		oForm.addContent(oLabelPrice);

		var oInputPrice = new sap.m.Input("idInputPrice", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Price}"
		});
		oForm.addContent(oInputPrice);
		
//		"Currency": "Currency",
		var oLabelCurrency = new sap.m.Label("idLabelCurrency", {
			text : "{modelFirst>/Label/0/Currency}",
			labelFor : "idInputCurrency",
			required : true
		});
		oForm.addContent(oLabelCurrency);

		var oInputCurrency = new sap.m.Input("idInputCurrency", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Currency}"
		});
		oForm.addContent(oInputCurrency);
		
//		"Description": "Material Description",
		var oLabelDescription = new sap.m.Label("idLabelDescription", {
			text : "{modelFirst>/Label/0/Description}",
			labelFor : "idInputDescription",
			required : true
		});
		oForm.addContent(oLabelDescription);

		var oInputDescription = new sap.m.Input("idInputDescription", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Description}"
		});
		oForm.addContent(oInputDescription);
		
//		"Manufacturer": "Manufactered By",
		var oLabelManufacturer = new sap.m.Label("idLabelManufacturer", {
			text : "{modelFirst>/Label/0/Manufacturer}",
			labelFor : "idInputManufacturer",
			required : true
		});
		oForm.addContent(oLabelManufacturer);

		var oInputManufacturer = new sap.m.Input("idInputManufacturer", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Manufacturer}"
		});
		oForm.addContent(oInputManufacturer);
		
//		"Status": "Availability Status"	
		var oLabelStatus = new sap.m.Label("idLabelStatus", {
			text : "{modelFirst>/Label/0/Status}",
			labelFor : "idInputStatus",
			required : true
		});
		oForm.addContent(oLabelStatus);

		var oInputStatus = new sap.m.Input("idInputStatus", {
			value : "",
			placeholder : "{modelFirst>/Placeholder/0/Status}"
		});
		oForm.addContent(oInputStatus);
		
//		var oLabelDOB = new sap.m.Label("idLabelDOB", {
//			text : "{/Template/0/Group}",
//			labelFor : "idInputDOB",
//			required : true
//		});
//		oForm.addContent(oLabelDOB);
//		
//		var oInputDOB = new sap.m.DateTimeInput("idInputDOB", {
////			dateValue: new Date('2018, 31, 01'),
//			  displayFormat: "dd MMM yyyy",
//			  valueFormat: "yyyy-MM-dd",
////			value : "",
//			placeholder : "{/Individual/0/DOB}"
//		});
//		oForm.addContent(oInputDOB);
		
		var oButton = new sap.m.Button("button1", {
			text:"Save Details",
			press:oController.toView03
		});
		
 		return new sap.m.Page({
			title: "Overview",
			content: [
			oForm,
			oButton
			]
		});
	}

});