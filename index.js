"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var hotkeys_directive_1 = require("./src/hotkeys.directive");
var cheatsheet_component_1 = require("./src/cheatsheet.component");
var hotkey_options_1 = require("./src/hotkey.options");
var hotkeys_service_1 = require("./src/hotkeys.service");
__export(require("./src/cheatsheet.component"));
__export(require("./src/hotkey.model"));
__export(require("./src/hotkey.options"));
__export(require("./src/hotkeys.directive"));
__export(require("./src/hotkeys.service"));
var HotkeyModule = HotkeyModule_1 = (function () {
    function HotkeyModule() {
    }
    HotkeyModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HotkeyModule_1,
            providers: [
                hotkeys_service_1.HotkeysService,
                { provide: hotkey_options_1.HotkeyOptions, useValue: options }
            ]
        };
    };
    return HotkeyModule;
}());
HotkeyModule = HotkeyModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [hotkeys_directive_1.HotkeysDirective, cheatsheet_component_1.CheatSheetComponent],
        declarations: [hotkeys_directive_1.HotkeysDirective, cheatsheet_component_1.CheatSheetComponent]
    })
], HotkeyModule);
exports.HotkeyModule = HotkeyModule;
var HotkeyModule_1;
//# sourceMappingURL=index.js.map