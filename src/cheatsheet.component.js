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
var hotkeys_service_1 = require("./hotkeys.service");
var CheatSheetComponent = (function () {
    function CheatSheetComponent(hotkeysService) {
        this.hotkeysService = hotkeysService;
        this.helpVisible = false;
        this.title = 'Keyboard Shortcuts:';
    }
    CheatSheetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.hotkeysService.cheatSheetToggle.subscribe(function (isOpen) {
            if (isOpen !== false) {
                _this.hotkeys = _this.hotkeysService.hotkeys.filter(function (hotkey) { return hotkey.description; });
            }
            if (isOpen === false) {
                _this.helpVisible = false;
            }
            else {
                _this.toggleCheatSheet();
            }
        });
    };
    CheatSheetComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    CheatSheetComponent.prototype.toggleCheatSheet = function () {
        this.helpVisible = !this.helpVisible;
    };
    return CheatSheetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CheatSheetComponent.prototype, "title", void 0);
CheatSheetComponent = __decorate([
    core_1.Component({
        selector: 'hotkeys-cheatsheet',
        styles: ["\n.cfp-hotkeys-container {\n  display: table !important;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  color: #333;\n  font-size: 1em;\n  background-color: rgba(255,255,255,0.9);\n}\n\n.cfp-hotkeys-container.fade {\n  z-index: -1024;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -moz-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear;\n}\n\n.cfp-hotkeys-container.fade.in {\n  z-index: 10002;\n  visibility: visible;\n  opacity: 1;\n}\n\n.cfp-hotkeys-title {\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.cfp-hotkeys {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys table {\n  margin: auto;\n  color: #333;\n}\n\n.cfp-content {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.cfp-hotkeys-keys {\n  padding: 5px;\n  text-align: right;\n}\n\n.cfp-hotkeys-key {\n  display: inline-block;\n  color: #fff;\n  background-color: #333;\n  border: 1px solid #333;\n  border-radius: 5px;\n  text-align: center;\n  margin-right: 5px;\n  box-shadow: inset 0 1px 0 #666, 0 1px 0 #bbb;\n  padding: 5px 9px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-text {\n  padding-left: 10px;\n  font-size: 1em;\n}\n\n.cfp-hotkeys-close {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  font-size: 2em;\n  font-weight: bold;\n  padding: 5px 10px;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  min-height: 45px;\n  min-width: 45px;\n  text-align: center;\n}\n\n.cfp-hotkeys-close:hover {\n  background-color: #fff;\n  cursor: pointer;\n}\n\n@media all and (max-width: 500px) {\n  .cfp-hotkeys {\n    font-size: 0.8em;\n  }\n}\n\n@media all and (min-width: 750px) {\n  .cfp-hotkeys {\n    font-size: 1.2em;\n  }\n}  "],
        template: "<div class=\"cfp-hotkeys-container fade\" [ngClass]=\"{'in': helpVisible}\" style=\"display:none\"><div class=\"cfp-hotkeys\">\n  <h4 class=\"cfp-hotkeys-title\">{{ title }}</h4>\n  <table><tbody>\n    <tr *ngFor=\"let hotkey of hotkeys\">\n      <td class=\"cfp-hotkeys-keys\">\n        <span *ngFor=\"let key of hotkey.formatted\" class=\"cfp-hotkeys-key\">{{ key }}</span>\n      </td>\n      <td class=\"cfp-hotkeys-text\">{{ hotkey.description }}</td>\n    </tr>\n  </tbody></table>\n  <div class=\"cfp-hotkeys-close\" (click)=\"toggleCheatSheet()\">&#215;</div>\n</div></div>",
    }),
    __metadata("design:paramtypes", [hotkeys_service_1.HotkeysService])
], CheatSheetComponent);
exports.CheatSheetComponent = CheatSheetComponent;
//# sourceMappingURL=cheatsheet.component.js.map