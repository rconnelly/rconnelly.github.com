/**
 * @class quadio.proxies.oDataProxy
 * @extends Ext.data.LocalStorageProxy,
 * 
 * This simple proxy allows us to use the oData Protocol for crud operations.
 * 
 */
quadio.proxies.oDataProxy = Ext.extend(Ext.data.LocalStorageProxy, {
    //this is the url we always query when searching for tweets
    url: 'http://search.twitter.com/search.json',
    perPage: 50,
    filterParam: undefined,
    constructor: function(config) {
        config = config || {};
        
        Ext.applyIf(config, {
            extraParams: {
                suppress_response_codes: true
            },            
            reader: {
                type: 'json',
                root: 'results'
            }
        });

        quadio.proxies.oDataProxy.superclass.constructor.call(this, config);
    },
    
    /**
     * We need to add a slight customization to buildRequest - we're just checking for a filter on the 
     * Operation and adding it to the request params/url, and setting the start/limit if paging
     */
    buildRequest: function(operation) {
        var request = quadio.proxies.oDataProxy.superclass.buildRequest.apply(this, arguments);
          //  filter  = operation.filters[0],
          //  params  = request.params;
        
        /*Ext.apply(params, {
            rpp: operation.limit,
            page: operation.page
        });
        
        if (filter) {
            Ext.apply(params, {
                q: filter.value
            });
            
            //as we're modified the request params, we need to regenerate the url now
            request.url = this.buildUrl(request);
        }
        */
        return request;
    }
});

Ext.data.ProxyMgr.registerType('odataproxy', quadio.proxies.oDataProxy);