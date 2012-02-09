/**
 * @class quadio.views.DealsList
 * @extends Ext.List
 * 
 * This shows the deals that are avaialble for a user.
 * 
 */
quadio.views.DealsList = Ext.extend(Ext.List, {
    cls: 'deals',
    allowDeselect: false,
    singleSelect: true,
    
    /**
     * @cfg {String} activeCls The CSS class that is added to each item when swiped
     */
    activeCls: 'search-item-active',
    
    itemTpl: [
        '<div class="search-item">',
            '<div class="action delete x-button">Delete</div>',
            '<img class="imgUrl" src="http://src.sencha.io/50/50/{imgUrl}">' + 
            '<span class="storeName">{storeName}</span><br />' +
            '<span class="name">{name}</span><br />' + 
            '<span class="description">{description}</span>',
        '</div>'
    ],
    
    initComponent: function() {
        Ext.apply(this, {
            store: Ext.getStore('deals')
        });
    
        quadio.views.DealsList.superclass.initComponent.apply(this, arguments);
        
        this.enableBubble('selectionchange');
        
        this.on({
            scope: this,
            itemswipe: this.onItemSwipe,
            containertap: this.deactivateAll
        });
    },
    
    /**
     * @private
     * Here we intercept the normal tap handler. If the user tapped on the delete button we stop the event here
     * and remove the item from the store, otherwise we allow the event to continue
     */
    onItemTap: function(item, index, e) {

       quadio.RedeemActionSheet.show();
	   
       return quadio.views.DealsList.superclass.onItemTap.apply(this, arguments);
    },
    
    /**
     * @private
     * Removes the 'Delete' button from all items
     */
    deactivateAll: function() {
        Ext.select('div.search-item', this.el.dom).removeCls(this.activeCls);
    },
    
    /**
     * @private
     * Handler for the itemswipe event - shows the Delete button for the swiped item, hiding the Delete button
     * on any other items
     */
    onItemSwipe: function(list, index, node) {
        var el        = Ext.get(node),
            activeCls = this.activeCls,
            hasClass  = el.hasCls(activeCls);
        
        this.deactivateAll();
        
        if (hasClass) {
            el.removeCls(activeCls);
        } else {
            el.addCls(activeCls);
        }
    }
});

Ext.reg('dealslist', quadio.views.DealsList);