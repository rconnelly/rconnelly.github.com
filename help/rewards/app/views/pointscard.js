quadio.views.HomeCard = Ext.extend(Ext.TabPanel, {
	title: 'Points',
	iconCls:'points',
	defaults: {
		styleHtmlContent: true
	},
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Reward Points'
	}],
	items: [{
		title: '',
		scroll: 'vertical',
		html: '<p>This is cool</p>'
	},{
		title: '',
		scroll: 'vertical',
		html: '<p>Toolbars are cool</p>'
	}]
});

Ext.reg('pointscard',quadio.views.HomeCard);