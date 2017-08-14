# [jaimemendozadev WordPress Plugin](https://github.com/jaimemendozadev/jm-wp-plugin)

This is just a simple plugin that enables you to easily update your five most recent WordPress posts!

## Description

When activated, the plugin should: 

- display the 5 most recent WordPress posts, 
- support editing post titles for the displayed posts, 
- support deleting any of the displayed posts, and 
- always display 5 posts after deletion.

## Table of contents

- Installing the plugin
- Current issues
- Created by

## Installing the plugin

To install the plugin, you'll need access to your WordPress blog, either through SSH or FTP. 

- First, fire up your terminal, and from a location of your choice, clone the repo locally to your computer by typing and entering `$ git clone https://github.com/jaimemendozadev/jm-wp-plugin`.

- Once the repo's cloned, access your WordPress site via FTP or SSH. Go to `/wp-content/plugins` and inside the plugins folder, dump the repo folder. 

- Activate the plugin `jaimemendozadev-wp-plugin` from the WordPress Admin panel. Once activated, it should appear nested underneath the `Posts` tab under the label `Edit First Five Posts`. 

## Current issues

- Here are some bugs that still need to be addressed:
  - Must fix the TypeError "can't read property 'id' of undefined" error. 
  - App doesn't always rerender properly when post deleted. 
  - Have not tested rendering rich media assets in SinglePost component.


## Created by

**Jaime Mendoza**
[https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)