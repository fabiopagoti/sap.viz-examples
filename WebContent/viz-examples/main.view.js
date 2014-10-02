sap.ui.jsview("viz-examples.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf viz-examples.main
	*/ 
	getControllerName : function() {
		return "viz-examples.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf viz-examples.main
	*/ 
	createContent : function(oController) {

		
		// 1st step: Load a model - What data will be displayed?
		
		var my_model = new sap.ui.model.json.JSONModel(
				 {
					 "sales_info": "by_area",
					 "extration_date": "20141001",
					 "extraction_time": "120003",
					 "areas": [
					 	 { 
							"area": "North",
							"net": "1000",
							"responsible": "Jack"
						 },
						 { 
							 "area": "South",
							 "net": "2000",
							 "responsible": "Fabio"
						 },
						 { 
							 "area": "West",
							 "net": "800",
							 "responsible": "Sue"
						 },				 
						 { 
							 "area": "East",
							 "net": "4500",
							 "responsible": "Martin"
						 }],
					 
				 });
		
		// 2nd step: Define a dataset - Which information will appear in the graph?
		
		var my_dataset = new sap.viz.ui5.data.FlattenedDataset("dataset", 
				{
			
					dimensions: // qualitative 
						[
						 new sap.viz.ui5.data.DimensionDefinition(
								 {
									axis: 1,
									value: "{area}",
									name: "Sales Area",
								 })
						 ],
					
					measures: // quantitative 
						[new sap.viz.ui5.data.MeasureDefinition(
							{
								value: "{net}",
								name: "Net Profit",
							})],
							
					data : { // where is the information inside the model?
							path : "/areas",
						}							
							
				});
		
		// 3rd step: Create the vizualiation - Now choose your graph type - How will the information be displayed?
		
		var viz_pie =  new sap.viz.ui5.Pie("pie", 
				{
					title: {
						text: "Net profit by area",
						visible: true,
					},
					width : "800px",
					height : "400px",
					// dataset: my_dataset, 4th step can be done here are well
				});
		
		// 4th step: Link graph with dataset (Information + Format)
		
		viz_pie.setDataset(my_dataset);
		
		// 5th step: Bind model on the graph (Data + Format)
		
		viz_pie.setModel(my_model);
		
		return viz_pie;
		
	}

});
