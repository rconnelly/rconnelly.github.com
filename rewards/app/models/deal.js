quadio.models.Deal = Ext.regModel("deal", {
	fields: [{
		name: "id",
		type: "int"
	},{
		name: "name",
		type: "string"
	},{
		name: "description",
		type: "string"
	},{
		name: "dealType",
		type: "sting"
	},{
		name: "storeId",
		type: "int"
	},{
		name: "expired",
		type: "boolean",
		defaultValue: false
	},{
		name: "redeemed",
		type: "boolean",
		defaultValue: false
	},{
		name: "expirationDate",
		type: "int"
	},{
		name: "maxRewardPoints",
		type: "int"
	},{
		name: "storeName",
		type: "string"
	},{
		name: "imgUrl",
		type: "string"
	}],
	proxy: {
		type: 'localstorage',
		id  : 'deal-proxy'
	}
});