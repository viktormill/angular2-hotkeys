"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hotkey = (function () {
    /**
     * Creates a new Hotkey for Mousetrap binding
     *
     * @param {string}   combo       mousetrap key binding
     * @param {string}   description description for the help menu
     * @param {Function} callback    method to call when key is pressed
     * @param {string}   action      the type of event to listen for (for mousetrap)
     * @param {array}    allowIn     an array of tag names to allow this combo in ('INPUT', 'SELECT', and/or 'TEXTAREA')
     * @param {boolean}  persistent  if true, the binding is preserved upon route changes
     */
    function Hotkey(combo, callback, allowIn, description, action, persistent) {
        this.combo = combo;
        this.callback = callback;
        this.allowIn = allowIn;
        this.description = description;
        this.action = action;
        this.persistent = persistent;
        this.combo = (Array.isArray(combo) ? combo : [combo]);
        this.allowIn = allowIn || [];
        this.description = description || '';
    }
    Hotkey.symbolize = function (combo) {
        var map = {
            command: '\u2318',
            shift: '\u21E7',
            left: '\u2190',
            right: '\u2192',
            up: '\u2191',
            down: '\u2193',
            'return': '\u23CE',
            backspace: '\u232B' // ⌫
        };
        var comboSplit = combo.split('+');
        for (var i = 0; i < comboSplit.length; i++) {
            // try to resolve command / ctrl based on OS:
            if (comboSplit[i] === 'mod') {
                if (window.navigator && window.navigator.platform.indexOf('Mac') >= 0) {
                    comboSplit[i] = 'command';
                }
                else {
                    comboSplit[i] = 'ctrl';
                }
            }
            comboSplit[i] = map[comboSplit[i]] || comboSplit[i];
        }
        return comboSplit.join(' + ');
    };
    Object.defineProperty(Hotkey.prototype, "formatted", {
        get: function () {
            if (!this._formatted) {
                var combo = this.combo[0];
                var sequence = combo.split(/[\s]/);
                for (var i = 0; i < sequence.length; i++) {
                    sequence[i] = Hotkey.symbolize(sequence[i]);
                }
                this._formatted = sequence;
            }
            return this._formatted;
        },
        enumerable: true,
        configurable: true
    });
    return Hotkey;
}());
exports.Hotkey = Hotkey;
//# sourceMappingURL=hotkey.model.js.map