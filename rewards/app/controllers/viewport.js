/**
 * @class loans
 * @extends Ext.Controller
 * 
 * The only controller in this simple application - this simply sets up the fullscreen viewport panel
 * and renders a detailed overlay whenever a Loan is tapped on.
 */
Ext.regController("viewport", {

    /**
     * Shows a details overlay for a given Loan. This creates a single reusable detailView and simply
     * updates it each time a Loan is tapped on.
     */
    show: function(options) {
        var view = this.viewport;
        
        if (!view) {
            this.viewport = this.render({
                xtype: 'redeemcard',
                listeners: {
                    scope: this,
                    hide : function() {
                        this.listView.getSelectionModel().deselectAll();
                    }
                }
            }, false);
            
            view = this.viewport;
        }
        
        view.setLoan(options.instance);
        view.show();
    }
});