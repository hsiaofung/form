//header ===================================
'use strict';
//require('../_footer.css');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = { liked: false };
        return _this;
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "div",
                    { id: "notifications_wrap" },
                    React.createElement(
                        "div",
                        { className: "content-wrapper-wider" },
                        React.createElement(
                            "div",
                            { className: "content" },
                            React.createElement(
                                "div",
                                { className: "swiper_wrap" },
                                React.createElement(
                                    "div",
                                    { className: "swiper-container" },
                                    React.createElement(
                                        "div",
                                        { className: "swiper-wrapper" },
                                        React.createElement(
                                            "div",
                                            { className: "swiper-slide" },
                                            "\u514D\u8CBB\u9999\u6E2F\u672C\u5730\u9001\u8CA8\u53CA\u5206\u5E97\u53D6\u8CA8"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "swiper-slide" },
                                            "\u63A8\u5EE3\u8A0A\u606F 2"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "swiper-slide" },
                                            "\u63A8\u5EE3\u8A0A\u606F 3"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "swiperArrows_wrap" },
                                    React.createElement(
                                        "button",
                                        { className: "button-prev button-v" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    ),
                                    React.createElement(
                                        "button",
                                        { className: "button-next button-v" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    )
                                )
                            ),
                            React.createElement(
                                "button",
                                { type: "button", className: "closeBtn", "aria-label": "Close" },
                                React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                            )
                        )
                    )
                ),
                React.createElement(
                    "header",
                    null,
                    React.createElement(
                        "div",
                        { className: "content" },
                        React.createElement(
                            "nav",
                            { className: "nav_wrap" },
                            React.createElement(
                                "div",
                                { className: "content-wrapper-wider" },
                                React.createElement(
                                    "div",
                                    { className: "menu_top_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "left" },
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap menu_currency" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "span",
                                                    { className: "seletedValue hoverChangeColor" },
                                                    "HK/HK$"
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "submenu" },
                                                    React.createElement(
                                                        "select",
                                                        { id: "countryNCurrency", name: "countryNCurrency", className: "countryNCurrency" },
                                                        React.createElement(
                                                            "option",
                                                            { value: "HK/HK$" },
                                                            "\u9999\u6E2F"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "CN" },
                                                            "\u4E2D\u570B\u5927\u9678"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "TW" },
                                                            "\u81FA\u7063"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "AU/AUD($)" },
                                                            "\u6FB3\u6D32"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "AT/EUR(\u20AC)" },
                                                            "\u5967\u5730\u5229"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "BE/EUR(\u20AC)" },
                                                            "\u6BD4\u5229\u6642"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "BN/USD($)" },
                                                            "\u6C76\u840A"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "CA/USD($)" },
                                                            "\u52A0\u62FF\u5927"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "CY/EUR(\u20AC)" },
                                                            "\u8CFD\u666E\u52D2\u65AF"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "DK/EUR(\u20AC)" },
                                                            "\u4E39\u9EA5"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "FI/EUR(\u20AC)" },
                                                            "\u82AC\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "FR/EUR(\u20AC)" },
                                                            "\u6CD5\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "DE/EUR(\u20AC)" },
                                                            "\u5FB7\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "GR/EUR(\u20AC)" },
                                                            "\u5E0C\u81D8"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "HU/EUR(\u20AC)" },
                                                            "\u5308\u7259\u5229"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "ID/USD($)" },
                                                            "\u5370\u5C3C"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "IE/EUR(\u20AC)" },
                                                            "\u611B\u723E\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "IT/EUR(\u20AC)" },
                                                            "\u610F\u5927\u5229"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "JP/USD($)" },
                                                            "\u65E5\u672C"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "LV/EUR(\u20AC)" },
                                                            "\u62C9\u812B\u7DAD\u4E9E"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "LT/EUR(\u20AC)" },
                                                            "\u7ACB\u9676\u5B9B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "LU/EUR(\u20AC)" },
                                                            "\u76E7\u68EE\u5821"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "MO/HKD($)" },
                                                            "\u6FB3\u9580"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "MY/USD($)" },
                                                            "\u99AC\u4F86\u897F\u4E9E"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "NL/EUR(\u20AC)" },
                                                            "\u8377\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "NZ/AUD($)" },
                                                            "\u65B0\u897F\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "NO/EUR(\u20AC)" },
                                                            "\u632A\u5A01"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "PH/USD($)" },
                                                            "\u83F2\u5F8B\u8CD3"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "PL/EUR(\u20AC)" },
                                                            "\u6CE2\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "PT/EUR(\u20AC)" },
                                                            "\u8461\u8404\u7259"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "PR/USD($)" },
                                                            "\u6CE2\u591A\u9ECE\u5404"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "SC/GBP(\xA3)" },
                                                            "\u8607\u683C\u862D"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "SG/USD($)" },
                                                            "\u65B0\u52A0\u5761"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "SK/EUR(\u20AC)" },
                                                            "\u65AF\u6D1B\u4F10\u514B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "SI/EUR(\u20AC)" },
                                                            "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E\u5171\u548C\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "KR/USD($)" },
                                                            "\u5357\u97D3"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "ES/EUR(\u20AC)" },
                                                            "\u897F\u73ED\u7259"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "LK/USD($)" },
                                                            "\u65AF\u91CC\u862D\u5361"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "SE/EUR(\u20AC)" },
                                                            "\u745E\u5178"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "CH/EUR(\u20AC)" },
                                                            "\u745E\u58EB"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "TH/USD($)" },
                                                            "\u6CF0\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "TR/EUR(\u20AC)" },
                                                            "\u571F\u8033\u5176"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "VG/USD($)" },
                                                            "\u7F8E\u5C6C\u7DAD\u723E\u4EAC\u7FA4\u5CF6"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "AE/USD($)" },
                                                            "\u963F\u806F\u914B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "GB/GBP(\uFFE1)" },
                                                            "\u82F1\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "US/USD($)" },
                                                            "\u7F8E\u570B"
                                                        ),
                                                        React.createElement(
                                                            "option",
                                                            { value: "VT/USD($)" },
                                                            "\u8D8A\u5357"
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "span",
                                                        { className: "seletedValue" },
                                                        "HK/HK$"
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { href: "store-locator.html" },
                                                    React.createElement("span", { className: "icon icon-header-icon-location" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement("a", { className: "seach_menu_btn" })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "mid" },
                                        React.createElement(
                                            "a",
                                            { href: "./" },
                                            React.createElement("img", { className: "brand-logo", src: "../images/common/logo-black.svg" })
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "right" },
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { href: "login.html" },
                                                    "\u767B\u5165 / \u8A3B\u518A"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { "data-toggle": "modal", "data-target": "#modal_wishList" },
                                                    React.createElement("span", { className: "icon icon-header-icon-heart hoverChangeColor" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { "data-toggle": "modal", "data-target": "#modal_shoppingBag" },
                                                    React.createElement("span", { className: "icon icon-header-icon-shopping-bag hoverChangeColor" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap menu_lang" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "span",
                                                    { className: "hoverChangeColor" },
                                                    "\u7E41"
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "submenu" },
                                                    React.createElement(
                                                        "a",
                                                        null,
                                                        "\u7B80"
                                                    ),
                                                    React.createElement(
                                                        "a",
                                                        null,
                                                        "EN"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "menu_btm_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "left" },
                                        React.createElement(
                                            "a",
                                            { href: "./" },
                                            React.createElement("img", { className: "brand-logo", src: "../images/common/logo-black.svg" })
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement("a", { className: "seach_menu_btn" })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "mid" },
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { className: "menu-page-link", href: "about.html" },
                                                    "\u54C1\u724C\u6982\u5FF5"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { className: "menu-page-link submenu_btn menu-page-link-collections", href: "collections.html", "data-tar": "#collections_sets_wrap" },
                                                    "\u7522\u54C1\u7CFB\u5217"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { className: "menu-page-link", href: "products.html" },
                                                    "\u6240\u6709\u7522\u54C1"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { className: "menu-page-link", href: "experience.html" },
                                                    "\u8CFC\u7269\u9AD4\u9A57"
                                                ),
                                                React.createElement(
                                                    "a",
                                                    { className: "menu-page-link", href: "member.html" },
                                                    React.createElement("span", { className: "icon-member-logo" })
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "right" },
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { href: "login.html" },
                                                    "\u767B\u5165 / \u8A3B\u518A"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { "data-toggle": "modal", "data-target": "#modal_wishList" },
                                                    React.createElement("span", { className: "icon icon-header-icon-heart hoverChangeColor" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "menu_btn_wrap" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "a",
                                                    { "data-toggle": "modal", "data-target": "#modal_shoppingBag" },
                                                    React.createElement("span", { className: "icon icon-header-icon-shopping-bag hoverChangeColor" })
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "nav",
                            { className: "nav_wrap_m clearfix" },
                            React.createElement(
                                "div",
                                { className: "float-left" },
                                React.createElement(
                                    "a",
                                    { href: "./" },
                                    React.createElement("img", { className: "brand-logo", src: "../images/common/logo-black.svg" })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "float-right" },
                                React.createElement(
                                    "div",
                                    { className: "menu_btn_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "content" },
                                        React.createElement(
                                            "a",
                                            { className: "seach_menu_btn_m" },
                                            React.createElement("span", { className: "icon icon-header-icon-search hoverChangeColor" })
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "menu_btn_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "content" },
                                        React.createElement(
                                            "a",
                                            { "data-toggle": "modal", "data-target": "#modal_shoppingBag" },
                                            React.createElement("span", { className: "icon icon-header-icon-shopping-bag hoverChangeColor" })
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "menu_btn_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "content" },
                                        React.createElement(
                                            "a",
                                            { href: "store-locator.html" },
                                            React.createElement("span", { className: "icon icon-header-icon-location" })
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "menu_btn_wrap" },
                                    React.createElement(
                                        "div",
                                        { className: "content" },
                                        React.createElement(
                                            "a",
                                            { className: "mobileNav_btn", "data-toggle": "modal", "data-target": "#modal_mobileNav" },
                                            React.createElement(
                                                "span",
                                                { className: "icon icon-hamburger" },
                                                React.createElement("span", null),
                                                React.createElement("span", null),
                                                React.createElement("span", null)
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "submenu_hover_wrap", id: "collections_sets_wrap" },
                            React.createElement(
                                "div",
                                { className: "content content-wrapper" },
                                React.createElement(
                                    "div",
                                    { className: "forProportion" },
                                    React.createElement(
                                        "div",
                                        { className: "set_menu_wrap" },
                                        React.createElement(
                                            "div",
                                            { className: "set_menu set set1", style: { backgroundImage: 'url(../images/header/nav-collection/sleek-modern-bg.jpg)' }, "data-tar": ".set1" },
                                            React.createElement(
                                                "span",
                                                { className: "title_h" },
                                                React.createElement(
                                                    "span",
                                                    { className: "chi" },
                                                    "\u7C21\u7D04\u6642\u5C1A"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "span",
                                                    { className: "eng" },
                                                    "SLEEK & MODERN"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "set_submenu set set1" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/manon.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/manon/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-manon.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/m.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/m/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-m.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/mystique.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/mystique/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-mystique.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/timeless.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/timeless/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-timeless.svg" })
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "set_menu set set2", style: { backgroundImage: 'url(../images/header/nav-collection/playful-versatile-bg.jpg)' }, "data-tar": ".set2" },
                                            React.createElement(
                                                "span",
                                                { className: "title_h" },
                                                React.createElement(
                                                    "span",
                                                    { className: "chi" },
                                                    "\u73A9\u5473\u591A\u5F69"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "span",
                                                    { className: "eng" },
                                                    "PLAYFUL & VERSATILE"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "set_submenu set set2" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/bloom.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/bloom/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-bloom.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/symphony.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/symphony/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-symphony.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/harmony.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/harmony/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-harmony.svg" })
                                                    )
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "set_menu set set3", style: { backgroundImage: 'url(../images/header/nav-collection/feminine-elegance-bg.jpg)' }, "data-tar": ".set3" },
                                            React.createElement(
                                                "span",
                                                { className: "title_h" },
                                                React.createElement(
                                                    "span",
                                                    { className: "chi" },
                                                    "\u6EAB\u67D4\u723E\u96C5"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "span",
                                                    { className: "eng" },
                                                    "FEMININE ELEGANCE"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "set_submenu set set3" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/embrace.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/embrace/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-embrace.svg" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "collection" },
                                                    React.createElement(
                                                        "a",
                                                        { href: "collection/cosmos.html" },
                                                        React.createElement("img", { className: "nav-thm", src: "../images/collections/cosmos/nav-thm.jpg" }),
                                                        React.createElement("img", { className: "logo", src: "../images/collections/collection-logos/tc/origin-aligned/logo-cosmos.svg" })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "search_input_wrap" },
                            React.createElement("div", { className: "searchOlBg_container OlBg_container" }),
                            React.createElement(
                                "div",
                                { className: "content" },
                                React.createElement(
                                    "div",
                                    { className: "content-wrapper-wider" },
                                    React.createElement(
                                        "div",
                                        { className: "input_wrap" },
                                        React.createElement("input", { id: "header_search_input", name: "header_search_input", className: "search_input", type: "text" }),
                                        React.createElement(
                                            "button",
                                            { type: "button", className: "closeBtn", "aria-label": "Clear input" },
                                            React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                            React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        { className: "hot_keywords" },
                                        React.createElement(
                                            "span",
                                            { className: "part" },
                                            "\u71B1\u9580\u641C\u5C0B\u95DC\u9375\u8A5E"
                                        ),
                                        React.createElement(
                                            "span",
                                            { className: "part" },
                                            "|"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u6212\u6307"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u4E32\u98FE"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u9838\u934A"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u624B\u934A"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u8033\u74B0"
                                        ),
                                        React.createElement(
                                            "a",
                                            { className: "keyword" },
                                            "\u6212\u6307"
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "suggestedResult_wrap row" },
                                        React.createElement(
                                            "div",
                                            { className: "related_wrap col-md-4 d-none d-md-block" },
                                            React.createElement(
                                                "div",
                                                { className: "section section_pdt" },
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Manon \u9ED1\u947D\u77F3\u6212\u6307"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Manon \u6212\u6307"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "18K \u767D\u8272\u9EC3\u91D1\u85CD\u5BF6\u6212\u6307"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "18K \u7D05\u8272\u9EC3\u91D1\u5561\u947D\u77F3\u6212\u6307"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "18K\u7D05\u8272\u9EC3\u91D1\u77F3\u69B4\u77F3\u6212\u6307"
                                                ),
                                                React.createElement("br", null)
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "section section_brand" },
                                                React.createElement(
                                                    "span",
                                                    { className: "section_title" },
                                                    "\u76F8\u95DC\u54C1\u724C"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Manon"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Mystique"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Timeless"
                                                ),
                                                React.createElement("br", null)
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "section section_cat" },
                                                React.createElement(
                                                    "span",
                                                    { className: "section_title" },
                                                    "\u76F8\u95DC\u985E\u5225"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "\u6240\u6709\u7522\u54C1 > \u947D\u77F3\u6212\u6307"
                                                ),
                                                React.createElement("br", null),
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Manon > \u947D\u77F3\u6212\u6307"
                                                ),
                                                React.createElement("br", null)
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "closest_wrap col col-md-8" },
                                            React.createElement(
                                                "div",
                                                { className: "content" },
                                                React.createElement(
                                                    "p",
                                                    { className: "section_title" },
                                                    "\u6700\u63A5\u8FD1 \"Ring\" \u7684\u7522\u54C1"
                                                ),
                                                React.createElement(
                                                    "div",
                                                    { className: "swiper_wrap" },
                                                    React.createElement(
                                                        "div",
                                                        { className: "swiper-container" },
                                                        React.createElement(
                                                            "div",
                                                            { className: "swiper-wrapper" },
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_5/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_5/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u767D\u8272\u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "originalPrice_wrap" },
                                                                            React.createElement(
                                                                                "div",
                                                                                { className: "price" },
                                                                                "HK$18,000"
                                                                            )
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$900"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_6/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_6/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$1,000"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_7/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_7/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u767D\u8272\u9EC3\u91D1\u864E\u773C\u77F3\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$1,100"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_8/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_8/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u7D05\u8272\u9EC3\u91D1\u7C89\u7D05\u86CB\u767D\u77F3 \u62FC\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$500"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_9/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_9/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u7D05\u8272\u9EC3\u91D1\u947D\u77F3\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$1,100"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_10/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_10/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K\u85CD\u8272\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$500"
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            React.createElement(
                                                                "div",
                                                                { className: "swiper-slide" },
                                                                React.createElement(
                                                                    "div",
                                                                    { className: "pdt_block_small" },
                                                                    React.createElement(
                                                                        "a",
                                                                        { className: "pdtImg_link", href: "#", style: { backgroundImage: 'url(../images/pdt/pdtID_11/thm.png)' } },
                                                                        React.createElement("div", { className: "pdtImghover_container", style: { backgroundImage: 'url(../images/pdt/pdtID_11/thm-hover.png)' } })
                                                                    ),
                                                                    React.createElement(
                                                                        "div",
                                                                        { className: "desc_wrap" },
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "name" },
                                                                            "18K \u767D\u8272\u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                                        ),
                                                                        React.createElement(
                                                                            "div",
                                                                            { className: "price" },
                                                                            "HK$1,100"
                                                                        )
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    React.createElement(
                                                        "div",
                                                        { className: "swiperArrows_wrap" },
                                                        React.createElement("button", { className: "button-prev" }),
                                                        React.createElement("button", { className: "button-next" })
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal fade sideBarModal right headerSideBarModal", id: "modal_mobileNav", tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
                    React.createElement(
                        "div",
                        { className: "modal-dialog modal-dialog-right", role: "document" },
                        React.createElement(
                            "div",
                            { className: "modal-content" },
                            React.createElement(
                                "div",
                                { className: "modal-header" },
                                React.createElement(
                                    "div",
                                    { className: "title_desktop_wrap d-none d-md-block" },
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u76EE\u9304"
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close closeBtn", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "title_mobile_wrap d-block d-md-none" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close backBtn d-block d-md-none", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u76EE\u9304"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-body" },
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "div",
                                        { className: "row no-gutters" },
                                        React.createElement(
                                            "div",
                                            { className: "col col-noPadding col-border-right" },
                                            React.createElement(
                                                "a",
                                                { className: "menu-page-link", href: "login.html" },
                                                "\u767B\u5165 / \u8A3B\u518A"
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "col col-noPadding" },
                                            React.createElement(
                                                "a",
                                                { className: "menu-page-link hover", "data-toggle": "modal", "data-target": "#modal_wishList" },
                                                React.createElement(
                                                    "span",
                                                    { className: "hoverChangeColor" },
                                                    "\u9858\u671B\u6E05\u55AE"
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "a",
                                        { className: "menu-page-link", href: "about.html" },
                                        "\u54C1\u724C\u6982\u5FF5"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "a",
                                        { className: "menu-page-link", href: "collections.html" },
                                        "\u7522\u54C1\u7CFB\u5217"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "a",
                                        { className: "menu-page-link", href: "products.html" },
                                        "\u6240\u6709\u7522\u54C1"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "a",
                                        { className: "menu-page-link", href: "experience.html" },
                                        "\u8CFC\u7269\u9AD4\u9A57"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "a",
                                        { className: "menu-page-link", href: "member.html" },
                                        React.createElement("span", { className: "icon-member-logo" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "navRow" },
                                    React.createElement(
                                        "span",
                                        { className: "menu-page-link" },
                                        "\u9700\u8981\u5354\u52A9?   ",
                                        React.createElement(
                                            "a",
                                            { href: "tel:+85200000000" },
                                            "+852 0000 0000"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-footer" },
                                React.createElement(
                                    "div",
                                    { className: "row no-gutters" },
                                    React.createElement(
                                        "div",
                                        { className: "col-8 currency_col" },
                                        React.createElement(
                                            "span",
                                            { className: "seletedValue" },
                                            "HK/HK$"
                                        ),
                                        React.createElement(
                                            "div",
                                            { className: "submenu" },
                                            React.createElement(
                                                "select",
                                                { id: "countryNCurrency_m", name: "countryNCurrency_m", className: "countryNCurrency" },
                                                React.createElement(
                                                    "option",
                                                    { value: "HK/HK$" },
                                                    "\u9999\u6E2F"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "CN" },
                                                    "\u4E2D\u570B\u5927\u9678"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "TW" },
                                                    "\u81FA\u7063"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "AU/AUD($)" },
                                                    "\u6FB3\u6D32"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "AT/EUR(\u20AC)" },
                                                    "\u5967\u5730\u5229"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "BE/EUR(\u20AC)" },
                                                    "\u6BD4\u5229\u6642"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "BN/USD($)" },
                                                    "\u6C76\u840A"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "CA/USD($)" },
                                                    "\u52A0\u62FF\u5927"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "CY/EUR(\u20AC)" },
                                                    "\u8CFD\u666E\u52D2\u65AF"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "DK/EUR(\u20AC)" },
                                                    "\u4E39\u9EA5"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "FI/EUR(\u20AC)" },
                                                    "\u82AC\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "FR/EUR(\u20AC)" },
                                                    "\u6CD5\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "DE/EUR(\u20AC)" },
                                                    "\u5FB7\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "GR/EUR(\u20AC)" },
                                                    "\u5E0C\u81D8"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "HU/EUR(\u20AC)" },
                                                    "\u5308\u7259\u5229"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "ID/USD($)" },
                                                    "\u5370\u5C3C"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "IE/EUR(\u20AC)" },
                                                    "\u611B\u723E\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "IT/EUR(\u20AC)" },
                                                    "\u610F\u5927\u5229"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "JP/USD($)" },
                                                    "\u65E5\u672C"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "LV/EUR(\u20AC)" },
                                                    "\u62C9\u812B\u7DAD\u4E9E"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "LT/EUR(\u20AC)" },
                                                    "\u7ACB\u9676\u5B9B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "LU/EUR(\u20AC)" },
                                                    "\u76E7\u68EE\u5821"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "MO/HKD($)" },
                                                    "\u6FB3\u9580"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "MY/USD($)" },
                                                    "\u99AC\u4F86\u897F\u4E9E"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "NL/EUR(\u20AC)" },
                                                    "\u8377\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "NZ/AUD($)" },
                                                    "\u65B0\u897F\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "NO/EUR(\u20AC)" },
                                                    "\u632A\u5A01"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "PH/USD($)" },
                                                    "\u83F2\u5F8B\u8CD3"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "PL/EUR(\u20AC)" },
                                                    "\u6CE2\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "PT/EUR(\u20AC)" },
                                                    "\u8461\u8404\u7259"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "PR/USD($)" },
                                                    "\u6CE2\u591A\u9ECE\u5404"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "SC/GBP(\xA3)" },
                                                    "\u8607\u683C\u862D"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "SG/USD($)" },
                                                    "\u65B0\u52A0\u5761"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "SK/EUR(\u20AC)" },
                                                    "\u65AF\u6D1B\u4F10\u514B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "SI/EUR(\u20AC)" },
                                                    "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E\u5171\u548C\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "KR/USD($)" },
                                                    "\u5357\u97D3"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "ES/EUR(\u20AC)" },
                                                    "\u897F\u73ED\u7259"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "LK/USD($)" },
                                                    "\u65AF\u91CC\u862D\u5361"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "SE/EUR(\u20AC)" },
                                                    "\u745E\u5178"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "CH/EUR(\u20AC)" },
                                                    "\u745E\u58EB"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "TH/USD($)" },
                                                    "\u6CF0\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "TR/EUR(\u20AC)" },
                                                    "\u571F\u8033\u5176"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "VG/USD($)" },
                                                    "\u7F8E\u5C6C\u7DAD\u723E\u4EAC\u7FA4\u5CF6"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "AE/USD($)" },
                                                    "\u963F\u806F\u914B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "GB/GBP(\uFFE1)" },
                                                    "\u82F1\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "US/USD($)" },
                                                    "\u7F8E\u570B"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "VT/USD($)" },
                                                    "\u8D8A\u5357"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement("div", { className: "col-1" }),
                                    React.createElement(
                                        "div",
                                        { className: "col-3 lang_col" },
                                        React.createElement(
                                            "div",
                                            { className: "content" },
                                            React.createElement(
                                                "select",
                                                { id: "lang_select", name: "lang_select", className: "lang_select" },
                                                React.createElement(
                                                    "option",
                                                    { value: "HK/HK$" },
                                                    "\u7E41"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "CN" },
                                                    "\u7B80"
                                                ),
                                                React.createElement(
                                                    "option",
                                                    { value: "TW" },
                                                    "EN"
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal fade sideBarModal right headerSideBarModal", id: "modal_wishList", tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
                    React.createElement(
                        "div",
                        { className: "modal-dialog modal-dialog-right", role: "document" },
                        React.createElement(
                            "div",
                            { className: "modal-content" },
                            React.createElement(
                                "div",
                                { className: "modal-header" },
                                React.createElement(
                                    "div",
                                    { className: "title_desktop_wrap d-none d-md-block" },
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u9858\u671B\u6E05\u55AE"
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close closeBtn", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "title_mobile_wrap d-block d-md-none" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close backBtn d-block d-md-none", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u9858\u671B\u6E05\u55AE"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-body" },
                                React.createElement(
                                    "table",
                                    { className: "pdtTable" },
                                    React.createElement(
                                        "tbody",
                                        null,
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "collectionLogo", src: "../images/collections/collection-logos/tc/origin/logo-manon.svg" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_9/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u767D\u8272\u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_5/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_6/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u767D\u8272\u9EC3\u91D1\u864E\u773C\u77F3\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_7/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u7D05\u8272\u9EC3\u91D1\u7C89\u7D05\u86CB\u767D\u77F3 \u62FC\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_8/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u7D05\u8272\u9EC3\u91D1\u947D\u77F3\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-footer" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "blockBtn goShoppingBag" },
                                    "\u67E5\u770B\u98FE\u7269"
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "modal fade sideBarModal right headerSideBarModal", id: "modal_shoppingBag", tabIndex: "-1", role: "dialog", "aria-hidden": "true" },
                    React.createElement(
                        "div",
                        { className: "modal-dialog modal-dialog-right", role: "document" },
                        React.createElement(
                            "div",
                            { className: "modal-content" },
                            React.createElement(
                                "div",
                                { className: "modal-header" },
                                React.createElement(
                                    "div",
                                    { className: "title_desktop_wrap d-none d-md-block" },
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u6211\u7684\u8CFC\u7269\u888B"
                                    ),
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close closeBtn", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "title_mobile_wrap d-block d-md-none" },
                                    React.createElement(
                                        "button",
                                        { type: "button", className: "close backBtn d-block d-md-none", "data-dismiss": "modal", "aria-label": "Close" },
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                        React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "title" },
                                        "\u6211\u7684\u8CFC\u7269\u888B"
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-body" },
                                React.createElement(
                                    "table",
                                    { className: "pdtTable" },
                                    React.createElement(
                                        "tbody",
                                        null,
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "collectionLogo", src: "../images/collections/collection-logos/tc/origin/logo-manon.svg" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_9/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u767D\u8272\u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_5/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u9EC3\u91D1\u73CD\u73E0\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_6/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u767D\u8272\u9EC3\u91D1\u864E\u773C\u77F3\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_7/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u7D05\u8272\u9EC3\u91D1\u7C89\u7D05\u86CB\u767D\u77F3 \u62FC\u7D2B\u77F3\u82F1\u786C\u7389\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "tr",
                                            null,
                                            React.createElement("td", null),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement("img", { className: "pdt", src: "../images/pdt/pdtID_8/thm.png" })
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "div",
                                                    { className: "desc_wrap" },
                                                    React.createElement(
                                                        "p",
                                                        { className: "fullPdtName" },
                                                        "18K \u7D05\u8272\u9EC3\u91D1\u947D\u77F3\u6212\u6307"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "selections" },
                                                        "\u6750\u8CEA\u9ED1\u947D\u77F3, \u5708\u5EA616, \u6578\u91CF 1"
                                                    ),
                                                    React.createElement(
                                                        "p",
                                                        { className: "price" },
                                                        "HK$900"
                                                    )
                                                )
                                            ),
                                            React.createElement(
                                                "td",
                                                null,
                                                React.createElement(
                                                    "button",
                                                    { type: "button", className: "closeBtn", "aria-label": "Remove item" },
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" }),
                                                    React.createElement("span", { className: "stroke", "aria-hidden": "true" })
                                                )
                                            )
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "modal-footer" },
                                React.createElement(
                                    "a",
                                    { href: "#", className: "blockBtn goShoppingBag" },
                                    "\u7ACB\u5373\u8CFC\u8CB7"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var domContainer = document.querySelector('#header');
ReactDOM.render(React.createElement(Header, null), domContainer);

//====================================================================


(function () {

    $(window).resize(function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 500);
    });

    $(window).bind('resizeEnd', function () {
        //do something, window hasn't changed size in 500ms
        checkToMinHeader();
    });

    function checkToMinHeader() {

        var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        var menuH = $(".menu_top_wrap").height();
        if (menuH <= 0) {
            menuH = $(".nav_wrap_m").height();
        }
        if (scrollTop > menuH) {
            $("body").addClass("headerMin");
            $("header").addClass("minimize");
        } else {
            $("body").removeClass("headerMin");
            $("header").removeClass("minimize");
        }
    }

    $(window).on('scroll', function () {
        checkToMinHeader();
    });

    $(document).on("click", "header .seach_menu_btn, header .seach_menu_btn_m, header .searchOlBg_container", function () {
        //console.log("fdsf");
        $("header").toggleClass("minimize_wOl");
        $("body").toggleClass("showingOl");

        $('header .search_input_wrap>.content').slideToggle(400);
    });

    $(document).on("click", "header .search_input_wrap>.content", function (evt) {
        evt.stopPropagation();
    });

    $(document).on("click", "header .mobileNav_btn ", function (evt) {});

    $(document).on("mouseenter", "header .submenu_btn", function (evt) {
        var submenuSelector = $(this).attr("data-tar");
        $(submenuSelector).addClass("hoverSubmenuBtn");
        $("header").addClass("hoverSubmenuBtn");
    });
    $(document).on("mouseleave", "header .submenu_btn", function (evt) {
        var submenuSelector = $(this).attr("data-tar");
        $(submenuSelector).removeClass("hoverSubmenuBtn");
        $("header").removeClass("hoverSubmenuBtn");
        //reset
        $(".set").removeClass("inactive");
        $(".set").removeClass("active");
    });

    $(document).on("mouseenter", "header .submenu_hover_wrap", function (evt) {
        $(this).addClass("hoverSubmenu");
        $("header").addClass("hoverSubmenu");
    });
    $(document).on("mouseleave", "header .submenu_hover_wrap", function (evt) {
        $(this).removeClass("hoverSubmenu");
        $("header").removeClass("hoverSubmenu");
        //reset
        $(".set").removeClass("inactive");
        $(".set").removeClass("active");
    });

    $(document).on("mouseenter", "header .menu-page-link-collections ", function (evt) {
        //reset
        $(".set").removeClass("inactive");
        $(".set").removeClass("active");
    });

    $(document).on("click", "header #collections_sets_wrap .set_menu", function (evt) {
        $(".set").addClass("inactive");
        var setClass = $(this).attr("data-tar");
        $(setClass).removeClass("inactive").addClass("active");
    });

    //collections.html


    $(document).on("click", "#notifications_wrap .closeBtn", function () {
        var lang = $("html").attr("lang");
        //setCookie("/HKTB/winedinefestival/acceptedCookies",'true',1);

        $("#notifications_wrap").hide();
    });

    $(document).ready(function () {
        var lang = $("html").attr("lang");
        if (getCookie(lang + "/notificationsClose") == 'true') {
            $("#notifications_wrap").hide();
        }
        checkToMinHeader();

        var notification_swiper = new Swiper('#notifications_wrap .swiper-container', {
            loop: true,
            autoplay: {
                delay: 2500
            },
            navigation: {
                nextEl: '#notifications_wrap .button-next',
                prevEl: '#notifications_wrap .button-prev'
            }
        });

        //should be dynamic update the swiper
        var headerSuggestedResult_swiper = new Swiper('header .suggestedResult_wrap .swiper-container', {
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            direction: 'horizontal',
            freeMode: false,
            spaceBetween: 10,
            navigation: {
                nextEl: 'header .suggestedResult_wrap .button-next',
                prevEl: 'header .suggestedResult_wrap .button-prev'
            },
            breakpoints: {
                // when window width is <= 320px
                767: {
                    slidesPerView: 'auto',
                    slidesPerColumn: 1,
                    slidesPerColumnFill: 'row',
                    direction: 'vertical',
                    freeMode: true
                }
            }

        });

        $("#header_search_input").on("change keyup paste", function () {
            if ($("#header_search_input").val() == "") {
                $("header .search_input_wrap").removeClass("hvTexts");
            } else {
                $("header .search_input_wrap").addClass("hvTexts");
                headerSuggestedResult_swiper.update();
            }
        });
        $("header .search_input_wrap .closeBtn").on("click", function () {
            $("#header_search_input").val("");
            $("header .search_input_wrap").removeClass("hvTexts");
        });
        /*
        $('.headerSideBarModal').on('show.bs.modal', function () {
        	console.log("dsadas");
               $(this).find('.modal-body').css({
                      width:'auto', //probably not needed
                      height:'auto', //probably not needed 
                      'max-height':'100%'
               });
               $(this).find('.modal-body').css({
                      width:'auto', //probably not needed
                      height:'auto', //probably not needed 
                      'max-height':'none'
               });
        });
        */
    });
})();