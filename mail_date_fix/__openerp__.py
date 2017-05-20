# -*- coding : utf-8 -*-
##############################################################################
#
#    OpenERP, Open Source Management Solution
#    Copyright (C) 2004-2010 Tiny SPRL (<http ://tiny.be>).
#
#    This program is free software : you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as
#    published by the Free Software Foundation, either version 3 of the
#    License, or (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU Affero General Public License for more details.
#
#    You should have received a copy of the GNU Affero General Public License
#    along with this program.  If not, see <http ://www.gnu.org/licenses/>.
#
##############################################################################

{
    'name' : 'Mail thread date patch',  # This will appear on the apps list
    'version' : '1.0', 		# version that will make to upgrade
    'author' : 'Esmaeil Samadi',	
    'category' : 'Web',
    'sequence' : 1,			#
    'website' : 'www.webirani.com',
    'summary' : 'Mail Thread Widget',
    'description' : """
# Messaging Date Fixer
A major problem in Odoo 7.0 is dates in "Massageing Date" part. This date after one week change to a long number that does not mean anything to end user. 

![Odoo 7.0 Chatter with long number date](/images/chatter_date_before.png?raw=true "Odoo 7.0 Chatter with long number date")

After install this module date shows as well as it expected.

![Odoo 7.0 Chatter with formated date](/images/chatter_date_after.png?raw=true "Odoo 7.0 Chatter with date format")
    """,
    'depends' : ['web', 'mail'], # list of dependant modules
    'installable' : True, 
    'application' : True,
    'auto_install' : False,
    'js' : [
           'static/src/js/mail.js',
     ],   
     'license': 'AGPL-3',
}
# vim :expandtab :smartindent :tabstop=4 :softtabstop=4 :shiftwidth=4 :
