/**
 * @class quadio.Viewport
 * @extends Ext.Panel
 * This is a default generated class which would usually be used to initialize your application's
 * main viewport. By default this is simply a welcome screen that tells you that the app was
 * generated correctly.
 */
quadio.views.Viewport = Ext.extend(Ext.TabPanel, {
    id:'viewport',
    fullscreen:true,
    sortable:true,
    cardSwitchAnimation:'slide',
    tabBar:{
        dock:'bottom',
        layout:{
            pack:'center'
        },
        scroll:{
            direction:'horizontal',
            useIndicators:false
        }
    },
    items:[
        {
            xtype:'offerscard'
        },
        {
            xtype:'pointscard'
        },
        {
            xtype:'accountcard'
        },
        {
            xtype:'accountcard'
        }
    ],
    initComponent:function () {

        quadio.views.Viewport.superclass.initComponent.apply(this, arguments);
        quadio.welcomeMessage = new quadio.views.WelcomeMessage();
        quadio.welcomeMessage.show('pop');
    }
});