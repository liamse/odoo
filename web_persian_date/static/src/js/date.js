/*global openerp, _, $ */

openerp.web_persian_date = function (instance) {
	var _t = instance.web._t,
	_lt = instance.web._lt;
	QWeb = instance.web.qweb;
    "use strict";

    instance.web.form.FieldDatetime.include({
    	template: "FieldDatetime",
	    render_value: function() {
	        if (!this.get("effective_readonly")) {
				this.datewidget.set_value(this.get('value'));
	        } else {
				jalaliDate = new persianDate();
	            if(this.get('value')){

                	var jDate = jalaliDate.gregorianToJalali(_.escape(instance.web.format_value(this.get('value'), this, '')));
                	if (jDate == undefined) {
                		return ''
                	}
                	if (jDate.indexOf('-') != -1){
                		jDate = jDate.replace(/-/gi, '/')
            		}
                	this.$el.text(jDate + " (" +  instance.web.format_value(this.get('value'), this, '') + ")");
	            }else{
	            	this.$el.text(instance.web.format_value(this.get('value'), this, ''));
	            }
	        }
	    }
    });
    instance.web.list.Column.include({
        _format: function (row_data, options) {
        		if(this.type === 'date'){
                	jalaliDate = new persianDate();
                	var jDate = jalaliDate.gregorianToJalali(_.escape(instance.web.format_value(row_data[this.id].value, this, options.value_if_empty)));
                	if (jDate == undefined) {
                		return ''
                	}
                	if (jDate.indexOf('-') != -1){
                		jDate = jDate.replace(/-/gi, '/')
            		}
            		return jDate + " (" +  _.escape(instance.web.format_value(row_data[this.id].value, this, options.value_if_empty)) + ")";
        		}
        		if(this.type == 'datetime'){
        			jalaliDate = new persianDate();
                	var jDate = jalaliDate.gregorianToJalali(_.escape(instance.web.format_value(row_data[this.id].value, this, options.value_if_empty)));
                	if (jDate == undefined) {
                		return ''
                	}
                	if (jDate.indexOf('-') != -1){
                		jDate = jDate.replace(/-/gi, '/')
            		}
                	
                	
            		return jDate+ " (" +  _.escape(instance.web.format_value(row_data[this.id].value, this, options.value_if_empty)) + ")";
        		}
        		return _.escape(instance.web.format_value(
        				row_data[this.id].value, this, options.value_if_empty));
        }
    });

};

