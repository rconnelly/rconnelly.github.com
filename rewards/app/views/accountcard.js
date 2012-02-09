quadio.views.AccountCard = Ext.extend(Ext.TabPanel, {
	title: 'Account',
	iconCls:'user',
	defaults: {
		styleHtmlContent: true
	},
	dockedItems: [{
		xtype: 'toolbar',
		title: 'Account'
	}]
});

Ext.reg('accountcard',quadio.views.AccountCard);