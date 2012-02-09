/**
 * This file sets application-wide settings and launches the application when everything has
 * been loaded onto the page. By default we just render the applications Viewport inside the
 * launch method (see app/views/Viewport.js).
 */

quadio = new Ext.Application({
	defaultTarget: "viewport",
	name: "quadio",
	phoneStartupScreen: 'default_phone.png',
	getUrlParam: function(param) {
		var params = Ext.urlDecode(location.search.substring(1));
		return param ? params[param] : params;
	},
	launch: function() {
		this.viewport = new quadio.views.Viewport();
		this.setDefaultData();
		Ext.dispatch({
			controller: 'loans',
			action    : 'list'
		});
	},
	availableDeals: [{
		id: 1203,
		storeId: 1,
		name: 'Buy One Get One Free',
		description: 'Buy a 6 inch sub, get one of equal or lesser value free.',
		storeName: 'Outback Lavista Road',
		imgUrl: 'http://snapfinger.com/api/content/image/83/2'
	},{
		id: 1204,
		storeId: 2,
		name: '20% Off',
		description: '20% off an order of $20.',
		storeName: 'California Pizza Kitchen Perimeter',
		imgUrl: 'http://snapfinger.com/api/content/image/82/2'
	},{
		id: 1205,
		storeId: 3,
		name: '$10 off $30',
		description: 'Get $10 off of a purchase of $30.',
		storeName: 'Carrabba\'s Italian Grill',
		imgUrl: 'http://snapfinger.com/api/content/image/85/2'
	}],
	setDefaultData: function()
	{
		var stores = Ext.StoreMgr.get('deals');
		stores.load();
		if(stores.getCount() == 0)
		{
			stores.add(this.availableDeals);
			stores.sync();
		}
	}
});

/*
 *
 *  {name: "id", type: "int"},
 {name: "name", type: "string"},
 {name: "description", type: "string"},
 {name: "dealType", type: "sting"},
 {name: "storeId", type: "int"}
 */