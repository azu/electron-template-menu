// LICENSE : MIT
"use strict";
var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var path = require("path");
if (typeof app.getAppPath !== "function") {
    throw new Error("electron-template-menu needs electron >~ 0.30.0 \n https://github.com/atom/electron/releases/tag/v0.30.0")
}
var packageData = require(path.join(app.getAppPath(), 'package.json'));
var appName = packageData.name;
var template = [
    {
        label: appName,
        submenu: [
            {
                label: 'About ' + appName,
                selector: 'orderFrontStandardAboutPanel:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                label: 'Hide ' + appName,
                accelerator: 'Command+H',
                selector: 'hide:'
            },
            {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
            },
            {
                label: 'Show All',
                selector: 'unhideAllApplications:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: function () {
                    app.quit();
                }
            }

        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'Command+Z',
                selector: 'undo:'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+Command+Z',
                selector: 'redo:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'Command+X',
                selector: 'cut:'
            },
            {
                label: 'Copy',
                accelerator: 'Command+C',
                selector: 'copy:'
            },
            {
                label: 'Paste',
                accelerator: 'Command+V',
                selector: 'paste:'
            },
            {
                label: 'Select All',
                accelerator: 'Command+A',
                selector: 'selectAll:'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'Command+R',
                click: function () {
                    BrowserWindow.getFocusedWindow().reloadIgnoringCache();
                }
            },
            {
                label: 'Toggle DevTools',
                accelerator: 'Alt+Command+I',
                click: function () {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }
        ]
    },
    {
        label: 'Window',
        submenu: [
            {
                label: 'Minimize',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
            },
            {
                label: 'Close',
                accelerator: 'Command+W',
                selector: 'performClose:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Bring All to Front',
                selector: 'arrangeInFront:'
            }
        ]
    },
    {
        label: 'Help',
        submenu: []
    }
];
module.exports.template = template;
module.exports = function applyTemplate(altTemplate) {
    if (altTemplate == null) {
        Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    } else {
        Menu.setApplicationMenu(Menu.buildFromTemplate(altTemplate));
    }
};
