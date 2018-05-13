"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hotkey_model_1 = require("./hotkey.model");
var hotkeys_service_1 = require("./hotkeys.service");
require("mousetrap");
var HotkeysDirective = (function () {
    function HotkeysDirective(_hotkeysService, _elementRef) {
        this._hotkeysService = _hotkeysService;
        this._elementRef = _elementRef;
        this.hotkeysList = [];
        this.oldHotkeys = [];
        this.mousetrap = new Mousetrap(this._elementRef.nativeElement); // Bind hotkeys to the current element (and any children)
    }
    HotkeysDirective.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.hotkeys; _i < _a.length; _i++) {
            var hotkey = _a[_i];
            var combo = Object.keys(hotkey)[0];
            var hotkeyObj = new hotkey_model_1.Hotkey(combo, hotkey[combo]);
            var oldHotkey = this._hotkeysService.get(combo);
            if (oldHotkey !== null) {
                this.oldHotkeys.push(oldHotkey);
                this._hotkeysService.remove(oldHotkey);
            }
            this.hotkeysList.push(hotkeyObj);
            this.mousetrap.bind(hotkeyObj.combo, hotkeyObj.callback);
        }
    };
    HotkeysDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.hotkeysList; _i < _a.length; _i++) {
            var hotkey = _a[_i];
            this.mousetrap.unbind(hotkey.combo);
        }
        this._hotkeysService.add(this.oldHotkeys);
    };
    return HotkeysDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], HotkeysDirective.prototype, "hotkeys", void 0);
HotkeysDirective = __decorate([
    core_1.Directive({
        selector: '[hotkeys]',
        providers: [hotkeys_service_1.HotkeysService]
    }),
    __metadata("design:paramtypes", [hotkeys_service_1.HotkeysService, core_1.ElementRef])
], HotkeysDirective);
exports.HotkeysDirective = HotkeysDirective;
//# sourceMappingURL=hotkeys.directive.js.map