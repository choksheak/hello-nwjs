//
//  base.js
//
//  Shared JS across the whole project.
//  Usage: const base = require("./base").setWindow(window);
//

module.exports = class Base {
    static window;

    static wr = s => { Base.window.document.write(s); };
    static wl = s => { Base.window.document.writeln(s); };

    static setWindow = window => {
        // Set the window object needed by some functions in Base.
        Base.window = window;

        // Add all the functions in this class to the window object.
        for (const key in Base) {
            if (key !== 'window' && key !== 'setWindow') {
                window[key] = Base[key];
            }
        }

        return Base;
    };
}
