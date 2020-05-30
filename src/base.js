// Shared JS across the whole project.

module.exports = class Base {
    static window;
    static setWindow = w => { Base.window = w; return Base; };
    static w = s => { Base.window.document.write(s); };
    static wl = s => { Base.window.document.writeln(s); };
}
