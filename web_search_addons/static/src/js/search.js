/*global openerp, _, $ */

openerp.web_search_addons = function (instance) {
	var _t = instance.web._t,
	_lt = instance.web._lt;
	QWeb = instance.web.qweb;
    "use strict";

instance.web.SearchView.include({
    /**
     * Action to perform in case of selection: create a facet (model)
     * and add it to the search collection
     *
     * @param {Object} e selection event, preventDefault to avoid setting value on object
     * @param {Object} ui selection information
     * @param {Object} ui.item selected completion item
     */
    select_completion: function (e, ui) {
        e.preventDefault();

        var input_index = _(this.input_subviews).indexOf(
            this.subviewForRoot(
                this.$('div.oe_searchview_input:focus')[0]));
        var facet_cp = ui.item.facet
        var facet = ui.item.facet

        //Esmaeil
        try {
        	var txt_search = facet_cp.values[0].value.trim();
        	if (txt_search.search(',') == -1){
        		throw true;
        	}
        	var cells = txt_search.replace(/(\r\n|\n|\r)/gm,"").split(',');
        	for (i in cells){
            	try {
                	var c = cells[i];
                	if (c.trim() == ""){
                		continue;
                	}
                    facet_cp['values'] = {
                    			'label':  c.trim(),
                    			'value': c.trim()
                    };

                	this.query.add(facet_cp, {at: input_index / 2});
            	} catch (e) {}
        	}
        }
        catch(err) {
        	this.query.add(facet, {at: input_index / 2});
        }
        	
        
        
        
    },
});

instance.web.search.Advanced.include({
    commit_search: function () {
    
    	
        // Get domain sections from all propositions
        var children = this.getChildren();
        var propositions = _.invoke(children, 'get_proposition');
        var domain = _(propositions).pluck('value');
        var remove_propositions = new Array();
        try {
        	//var propositions = new Array();
	        for (v in domain){
	        	try {
	        	// if text is not have semicolon we don't do anything
            	if (domain[v][2].search(',') == -1){
            		throw true;
            	}
	        	var cells = domain[v][2].split(',');
	        	
	            // open text as array
	            for (i in cells){
	            	try {
	            		
	                	var c = cells[i];
	                	//if text is empty, omit it
	                	if (c.trim() == ""){
	                		continue;
	                	}
	                	var label = c.trim();
	                	//for first proposition we need to start part
	                	if (i == 0){
	                		try{
	                			label = propositions[v]['label'].split("\"")[0] + c.trim();
	                		}catch(e){
	                			label = domain[v][0]+ " " + domain[v][1] + " " + c.trim();
	                		}
	                	}
	                	propositions.push({
	                		label: label,
	                		value : [domain[v][0], domain[v][1], c.trim()]
	                		
	                	});
	                	
	                	
	            	}
	            	catch (e) {}
	            	
	            }
	            //remove main proposition that system creat
	            remove_propositions.push(domain[v][2]);
	        	}
	        	catch (er) {}
	            
	        	
	        }
        } catch(e) {}
        // remove propositions that break into small pieces and remove it from all propositions
        for (p in propositions){
        	try{
        		var a = remove_propositions.indexOf(propositions[p]['value'][2]);
        		if (remove_propositions.indexOf(propositions[p]['value'][2]) > -1) {
        			propositions.splice(p, 1);
        		}
        		
        	}catch(e){}
        	
        }
        //this part is copy of default code
        var domain = _(propositions).pluck('value');
        for (var i = domain.length; --i;) {
            domain.unshift('|');
        }
        
        this.view.query.add({
            category: _t("Advanced"),
            values: propositions,
            field: {
                get_context: function () { },
                get_domain: function () { return domain;},
                get_groupby: function () { }
            }
        });

        // remove all propositions
        _.invoke(children, 'destroy');
        // add new empty proposition
        this.append_proposition();
        // TODO: API on searchview
        this.view.$el.removeClass('oe_searchview_open_drawer');
    },
	
	
});


};

