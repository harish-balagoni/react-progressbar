"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar(Props) {
        var _this = _super.call(this, Props) || this;
        _this.state = {
            sqSize: _this.props.sqSize | 0,
            strokeWidth: _this.props.strokeWidth | 0,
            percentage: _this.props.percentage | 10
        };
        return _this;
    }
    ProgressBar.prototype.render = function () {
        var sqSize = this.props.sqSize;
        var radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        var viewBox = "0 0 " + sqSize + " " + sqSize;
        var dashArray = radius * Math.PI * 2;
        var dashOffset = dashArray - dashArray * this.props.percentage / 100;
        return (React.createElement("svg", { width: this.props.sqSize, height: this.props.sqSize, fill: '#ffffff', viewBox: viewBox },
            React.createElement("circle", { cx: this.props.sqSize / 2, cy: this.props.sqSize / 2, r: radius, stroke: '#fdc726', fill: '#0000', strokeWidth: this.props.strokeWidth + 2 + "px", style: {
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                } }),
            React.createElement("circle", { cx: this.props.sqSize / 2, cy: this.props.sqSize / 2, r: radius - this.props.strokeWidth - 2, fill: '#61caf3' }),
            React.createElement("text", { x: '50%', y: '50%', dy: '.3em', fontSize: '30px', fontWeight: 'bold', textAnchor: 'middle' }, this.props.percentage + "%")));
    };
    return ProgressBar;
}(React.Component));
exports.default = ProgressBar;
//# sourceMappingURL=index.js.map