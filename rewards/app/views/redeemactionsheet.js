
quadio.RedeemActionSheet = new Ext.ActionSheet({
    items: [
        {
            text: 'Redeem',
            ui  : 'confirm',
            handler: function(){
                 quadio.RedeemActionSheet.hide();
            }
        },
        {
            text: 'Cancel',
            handler: function(){
                 quadio.RedeemActionSheet.hide();
            }
        }
    ]
});

