// the below are javascript functions and properties that can be used in -
// Ignition's perspective app on browser dev console -
// these are some interesting ways to reach and read the page properties

// open perspective app and go to the browser console 
// and type below to see the perspective page properties that has been set in the app
window.__client.page.pageProps.toPlainObject();

// view gateway properties
window.__client.system.gateway;

// all prototype props available on this object
window.__client.page.__proto__;

// access perspective session custom properties set by and in the app
window.__client.page.sessionCustom.toPlainObject();

// access perspective ignition session props set by ignition
window.__client.page.sessionProps.toPlainObject();

/***********************************************************************************************************
 * IMPORTANT: BELOW FUNCTIONS ARE NOT COMPLETELY TESTED AND DO NOT USE IF NOT SURE ABOUT THESE
 * THESE CAN BE USED TO WRITE BACK TO PROPERTIES OF PAGE AND SESSION OF THE PERSPECTIVE APP ON CLIENT SIDE
 * THERE ARE HIGH-POSSIBILITY IF ANY UNINTENDED PROPERTIES ARE EDITED - IT MIGHT AFFECT APP FUNCTIONALITY
***********************************************************************************************************/

// create or update perspective page properties
window.__client.page.pageProps.write(key,val);

// create or update perspective session custom properties
window.__client.page.sessionCustom.write(key,val);

// if there are NO 2-way binding set on the properties or
// if there are NO custom added ignition code in perspective to refresh your view binding on property changes
// below option can be tried - not completely tested
window.__client.page.pendingSync = true;
// and trigger this for page wide sync - not completely tested
window.__client.page.sync();
