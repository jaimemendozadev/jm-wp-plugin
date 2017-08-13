<?php
/*
Plugin Name: jaimemendozadev-wp-plugin
Plugin URI:  https://github.com/jaimemendozadev/jm-wp-plugin
Description: a simple plugin for the ProPhoto coding challenge
Version:     20170813
Author:      jaimemendoza.com
Author URI:  http://jaimemendoza.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

/*
jaimemendozadev-wp-plugin is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 2 of the License, or any later version.
 
jaimemendozadev-wp-plugin is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with jaimemendozadev-wp-plugin. If not, see {URI to Plugin License}.
*/


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Adds a submenu for this plugin to the 'Tools' menu.
 * admin_menu is the hook that will add an extra submenu in our admin panel
 * https://codex.wordpress.org/Plugin_API/Action_Reference/admin_menu
 */

 add_action( 'admin_menu', 'add_submenu');

 function add_submenu() {
   add_submenu_page( 
     'edit.php', 
     'Edit First Five Posts', 
     'Edit First Five Posts', 
     'manage_options', 
     'edit_recent_posts', 
     'render_react'
   );
 }


function render_react() {
    include(dirname( __FILE__ ) . '/view/index.php');
    include(dirname( __FILE__ ) . '/view/script.php');

}


?>