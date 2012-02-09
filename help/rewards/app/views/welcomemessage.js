quadio.views.WelcomeMessage = Ext.extend(Ext.Panel, {
	floating: true,
	modal: true,
	centered: true,
	scrollable: false,
	width: Math.min(Ext.Element.getViewportWidth() - 50, 500),
	height: 160,
	styleHtmlContent: true,
	storeName: quadio.getUrlParam('storeName'),
	storeNumber: quadio.getUrlParam('storeNumber'),
	layout: {
		type: 'vbox',
		pack: 'center',
		align: 'stretch'
	},
	items: [{
		text: 'Normal'
	},{
		ui: 'round',
		text: 'Round'
	}
	],
	tpl: ['<div><strong>You got a Deal!</strong> <br/ ><br />',
          '<img class="imgUrl" src="http://src.sencha.io/50/50/{imgUrl}" /><br />',
          '<strong>{name}</strong><br />{description}</p></div>'],
	scroll: 'vertical',
	initComponent: function() {
		var storeId = quadio.getUrlParam('sid');
		if(storeId)
			this.data = quadio.availableDeals[storeId];
		quadio.views.WelcomeMessage.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('welcomemessage', quadio.views.WelcomeMessage);