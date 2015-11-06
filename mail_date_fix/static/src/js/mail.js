openerp.mail_date_fix = function(session)
{    		
	 

	 session.mail.MyMessageCommon = session.mail.MessageCommon.include({
		 format_data: function () {
	            //formating and add some fields for render
	            this.date = this.date ? session.web.str_to_datetime(this.date) : false;
	            if (this.date && new Date().getTime()-this.date.getTime() < 7*24*60*60*1000) {
	                this.timerelative = $.timeago(this.date);
	            } 
	            if (this.type == 'email' && (!this.author_id || !this.author_id[0])) {
	                this.avatar = ('/mail/static/src/img/email_icon.png');
	            } else if (this.author_id && this.template != 'mail.compose_message') {
	                this.avatar = session.mail.ChatterUtils.get_image(this.session, 'res.partner', 'image_small', this.author_id[0]);
	            } else {
	                this.avatar = session.mail.ChatterUtils.get_image(this.session, 'res.users', 'image_small', this.session.uid);
	            }
	            if (this.author_id && this.author_id[1]) {
	                var parsed_email = session.mail.ChatterUtils.parse_email(this.author_id[1]);
	                this.author_id.push(parsed_email[0], parsed_email[1]);
	            }
	            if (this.partner_ids && this.partner_ids.length > 3) {
	                this.extra_partners_nbr = this.partner_ids.length - 3;
	                this.extra_partners_str = ''
	                var extra_partners = this.partner_ids.slice(3);
	                for (var key in extra_partners) {
	                    this.extra_partners_str += extra_partners[key][1];
	                }
	            }
	            this.date = this.date ? this.date.toDateString() : false;
	            
	        },
	})

}