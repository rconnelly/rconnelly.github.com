quadio.views.NewCard = Ext.extend(Ext.TabPanel, {
	title: 'New',
	iconCls:'info_plain',
	defaults: {
		styleHtmlContent: true
	},
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Deals'
	}],items: [{
		title: 'TabPanels',
		scroll: 'vertical',
		html: '<p>This is cool</p>'
	},{
		title: 'Toolbars',
		scroll: 'vertical',
		html: '<p>Toolbars are cool</p>'
	}]
});

Ext.reg('newcard',quadio.views.NewCard);