sap.ui.jsview("view.zjs_view_03", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.zjs_view_03
	*/ 
	getControllerName : function() {
		return "controller.zjs_view_03";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.zjs_view_03
	*/ 
	createContent : function(oController) {
		var oLabel = new sap.m.Label("idLabel0301", 
										{ 	text:"Name",	//"{/MARA/0/MAKTX}",
											labelFor: "idInput0301",
											required:true });
		
		var oInput = new sap.m.Input("idInput0301", 
									{ 	value: "",
										placeholder: "Name" });//{/MARA/0/MATNR}"	});
		
		var oButton = new sap.m.Button("button0301", {	text:"Back to Overview Page",
														press:oController.toView02 });
 		return new sap.m.Page({
			title: "Details",
			content: [
			          
			oLabel,
			oInput,
			oButton
			]
		});
	}

});