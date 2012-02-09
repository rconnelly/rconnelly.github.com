

quadio.models.StoreLocation = Ext.regModel("store", {
    fields: [
        {name: "id", type: "int"},
        {name: "name", type: "string"},
        {name: "number", type: "string"},
        {name: "emails", type: "auto"},
        {name: "phoneNumbers", type: "auto"},
        {name: "url", type:"string"}
    ],
    proxy: {
    	type: 'localstorage',
    	id  : 'store-proxy'
    }
});