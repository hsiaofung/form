//header ===================================
'use strict';
//require('../_footer.css');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return(

<div>

<div id="notifications_wrap">
    <div class="content-wrapper-wider">
        <div class="content">
            <div class="swiper_wrap">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">免費香港本地送貨及分店取貨</div>
                        <div class="swiper-slide">推廣訊息 2</div>
                        <div class="swiper-slide">推廣訊息 3</div>
                    </div>
                </div>
                <div class="swiperArrows_wrap">
                    <button class="button-prev button-v">                        
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                    <button class="button-next button-v">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>                        
                    </button>
                </div>
            </div>                    
            <button type="button" class="closeBtn" aria-label="Close">
                <span class="stroke" aria-hidden="true"></span>
                <span class="stroke" aria-hidden="true"></span>
            </button>
        </div>
    </div>
</div>

<header>
    <div class="content">
        <nav class="nav_wrap">
            <div class="content-wrapper-wider">
                <div class="menu_top_wrap">
                    <div class="left">
                        <div class="menu_btn_wrap menu_currency">
                            <div class="content">
                                <span class="seletedValue hoverChangeColor">HK/HK$</span>
                                <div class="submenu">
                                    <select id="countryNCurrency" name="countryNCurrency" class="countryNCurrency">
                                       <option value="HK/HK$">香港</option>
                                       <option value="CN">中國大陸</option>
                                       <option value="TW">臺灣</option>
                                       <option value="AU/AUD($)">澳洲</option>
                                       <option value="AT/EUR(€)">奧地利</option>
                                       <option value="BE/EUR(€)">比利時</option>
                                       <option value="BN/USD($)">汶萊</option>
                                       <option value="CA/USD($)">加拿大</option>
                                       <option value="CY/EUR(€)">賽普勒斯</option>
                                       <option value="DK/EUR(€)">丹麥</option>
                                       <option value="FI/EUR(€)">芬蘭</option>
                                       <option value="FR/EUR(€)">法國</option>
                                       <option value="DE/EUR(€)">德國</option>
                                       <option value="GR/EUR(€)">希臘</option>
                                       <option value="HU/EUR(€)">匈牙利</option>
                                       <option value="ID/USD($)">印尼</option>
                                       <option value="IE/EUR(€)">愛爾蘭</option>
                                       <option value="IT/EUR(€)">意大利</option>
                                       <option value="JP/USD($)">日本</option>
                                       <option value="LV/EUR(€)">拉脫維亞</option>
                                       <option value="LT/EUR(€)">立陶宛</option>
                                       <option value="LU/EUR(€)">盧森堡</option>
                                       <option value="MO/HKD($)">澳門</option>
                                       <option value="MY/USD($)">馬來西亞</option>
                                       <option value="NL/EUR(€)">荷蘭</option>
                                       <option value="NZ/AUD($)">新西蘭</option>
                                       <option value="NO/EUR(€)">挪威</option>
                                       <option value="PH/USD($)">菲律賓</option>
                                       <option value="PL/EUR(€)">波蘭</option>
                                       <option value="PT/EUR(€)">葡萄牙</option>
                                       <option value="PR/USD($)">波多黎各</option>
                                       <option value="SC/GBP(£)">蘇格蘭</option>
                                       <option value="SG/USD($)">新加坡</option>
                                       <option value="SK/EUR(€)">斯洛伐克</option>
                                       <option value="SI/EUR(€)">斯洛維尼亞共和國</option>
                                       <option value="KR/USD($)">南韓</option>
                                       <option value="ES/EUR(€)">西班牙</option>
                                       <option value="LK/USD($)">斯里蘭卡</option>
                                       <option value="SE/EUR(€)">瑞典</option>
                                       <option value="CH/EUR(€)">瑞士</option>
                                       <option value="TH/USD($)">泰國</option>
                                       <option value="TR/EUR(€)">土耳其</option>
                                       <option value="VG/USD($)">美屬維爾京群島</option>
                                       <option value="AE/USD($)">阿聯酋</option>
                                       <option value="GB/GBP(￡)">英國</option>
                                       <option value="US/USD($)">美國</option>
                                       <option value="VT/USD($)">越南</option>
                                    </select>
                                    <span class="seletedValue">HK/HK$</span>
                                </div>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a href="store-locator.html"><span class="icon icon-header-icon-location"></span></a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a class="seach_menu_btn"></a>
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <a href="./"><img class="brand-logo" src='../images/common/logo-black.svg' /></a>
                    </div>
                    <div class="right">
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a href="login.html">登入 / 註冊</a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a data-toggle="modal" data-target="#modal_wishList"><span class="icon icon-header-icon-heart hoverChangeColor"></span></a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a data-toggle="modal" data-target="#modal_shoppingBag"><span class="icon icon-header-icon-shopping-bag hoverChangeColor"></span></a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap menu_lang">
                            <div class="content">
                                <span class="hoverChangeColor">繁</span>
                                <div class="submenu">
                                   <a>简</a>
                                   <a>EN</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu_btm_wrap">
                    <div class="left">
                        <a href="./"><img class="brand-logo" src='../images/common/logo-black.svg' /></a>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a class="seach_menu_btn"></a>
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a class="menu-page-link" href="about.html">品牌概念</a><a class="menu-page-link submenu_btn menu-page-link-collections" href="collections.html" data-tar="#collections_sets_wrap">產品系列</a>
                                <a class="menu-page-link" href="products.html">所有產品</a>
                                <a class="menu-page-link" href="experience.html">購物體驗</a>
                                <a class="menu-page-link" href="member.html"><span class="icon-member-logo"></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a href="login.html">登入 / 註冊</a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a data-toggle="modal" data-target="#modal_wishList"><span class="icon icon-header-icon-heart hoverChangeColor"></span></a>
                            </div>
                        </div>
                        <div class="menu_btn_wrap">
                            <div class="content">
                                <a data-toggle="modal" data-target="#modal_shoppingBag"><span class="icon icon-header-icon-shopping-bag hoverChangeColor"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="nav_wrap_m clearfix">
            <div class="float-left">
                <a href="./"><img class="brand-logo" src='../images/common/logo-black.svg' /></a>
            </div>
            <div class="float-right">
                <div class="menu_btn_wrap">
                    <div class="content">
                        <a class="seach_menu_btn_m"><span class="icon icon-header-icon-search hoverChangeColor"></span></a>
                    </div>
                </div>
                <div class="menu_btn_wrap">
                    <div class="content">
                        <a data-toggle="modal" data-target="#modal_shoppingBag"><span class="icon icon-header-icon-shopping-bag hoverChangeColor"></span></a>
                    </div>
                </div>
                <div class="menu_btn_wrap">
                    <div class="content">
                        <a href="store-locator.html"><span class="icon icon-header-icon-location"></span></a>
                    </div>
                </div>
                <div class="menu_btn_wrap">
                    <div class="content">
                        <a class="mobileNav_btn" data-toggle="modal" data-target="#modal_mobileNav">
                            <span class="icon icon-hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>




        <div class="submenu_hover_wrap" id="collections_sets_wrap">
            <div class="content content-wrapper">
                <div class="forProportion">
                    <div class="set_menu_wrap">
                        <div class="set_menu set set1" style={{backgroundImage: 'url(../images/header/nav-collection/sleek-modern-bg.jpg)'}} data-tar=".set1">
                            <span class="title_h">
                                <span class="chi">簡約時尚</span><br/>
                                <span class="eng">SLEEK & MODERN</span>
                            </span>
                        </div>
                        <div class="set_submenu set set1">
                            <div class="content">
                                <div class="collection">
                                    <a href="collection/manon.html">
                                        <img class="nav-thm" src="../images/collections/manon/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-manon.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/m.html">
                                        <img class="nav-thm" src="../images/collections/m/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-m.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/mystique.html">
                                        <img class="nav-thm" src="../images/collections/mystique/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-mystique.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/timeless.html">
                                        <img class="nav-thm" src="../images/collections/timeless/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-timeless.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="set_menu set set2" style={{backgroundImage: 'url(../images/header/nav-collection/playful-versatile-bg.jpg)'}} data-tar=".set2">
                            <span class="title_h">
                                <span class="chi">玩味多彩</span><br/>
                                <span class="eng">PLAYFUL & VERSATILE</span>
                            </span>
                        </div>
                        <div class="set_submenu set set2">
                            <div class="content">
                                <div class="collection">
                                    <a href="collection/bloom.html">
                                        <img class="nav-thm" src="../images/collections/bloom/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-bloom.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/symphony.html">
                                        <img class="nav-thm" src="../images/collections/symphony/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-symphony.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/harmony.html">
                                        <img class="nav-thm" src="../images/collections/harmony/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-harmony.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="set_menu set set3" style={{backgroundImage: 'url(../images/header/nav-collection/feminine-elegance-bg.jpg)'}} data-tar=".set3">
                            <span class="title_h">
                                <span class="chi">溫柔爾雅</span><br/>
                                <span class="eng">FEMININE ELEGANCE</span>
                            </span>
                        </div>
                        <div class="set_submenu set set3">
                            <div class="content">
                                <div class="collection">
                                    <a href="collection/embrace.html">
                                        <img class="nav-thm" src="../images/collections/embrace/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-embrace.svg" />
                                    </a>
                                </div>
                                <div class="collection">
                                    <a href="collection/cosmos.html">
                                        <img class="nav-thm" src="../images/collections/cosmos/nav-thm.jpg" />
                                        <img class="logo" src="../images/collections/collection-logos/tc/origin-aligned/logo-cosmos.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <div class="search_input_wrap">
            <div class="searchOlBg_container OlBg_container"></div>
            <div class="content">
                <div class="content-wrapper-wider">
                    <div class="input_wrap">
                        <input id="header_search_input" name="header_search_input" class="search_input" type="text" />
                        <button type="button" class="closeBtn" aria-label="Clear input">
                            <span class="stroke" aria-hidden="true"></span>
                            <span class="stroke" aria-hidden="true"></span>
                        </button>
                    </div>
                    <p class="hot_keywords"><span class="part">熱門搜尋關鍵詞</span><span class="part">|</span><a class="keyword">戒指</a><a class="keyword">串飾</a><a class="keyword">頸鍊</a><a class="keyword">手鍊</a><a class="keyword">耳環</a><a class="keyword">戒指</a></p>
                    <div class="suggestedResult_wrap row">
                        <div class="related_wrap col-md-4 d-none d-md-block">
                            <div class="section section_pdt">
                                <a href="#">Manon 黑鑽石戒指</a><br/>
                                <a href="#">Manon 戒指</a><br/>
                                <a href="#">18K 白色黃金藍寶戒指</a><br/>
                                <a href="#">18K 紅色黃金啡鑽石戒指</a><br/>
                                <a href="#">18K紅色黃金石榴石戒指</a><br/>
                            </div>
                            <div class="section section_brand">
                                <span class="section_title">相關品牌</span><br/>
                                <a href="#">Manon</a><br/>
                                <a href="#">Mystique</a><br/>
                                <a href="#">Timeless</a><br/>
                            </div>
                            <div class="section section_cat">
                                <span class="section_title">相關類別</span><br/>
                                <a href="#">所有產品 > 鑽石戒指</a><br/>
                                <a href="#">Manon > 鑽石戒指</a><br/>
                            </div>
                        </div>
                        <div class="closest_wrap col col-md-8">
                            <div class="content">
                                <p class="section_title">最接近 "Ring" 的產品</p>
                                <div class="swiper_wrap">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_5/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_5/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 白色黃金珍珠戒指</div><div class="originalPrice_wrap">
                                                            <div class="price">HK$18,000</div>
                                                        </div>
                                                        <div class="price">HK$900</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_6/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_6/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 黃金珍珠戒指</div>
                                                        <div class="price">HK$1,000</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_7/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_7/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 白色黃金虎眼石戒指</div>
                                                        <div class="price">HK$1,100</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_8/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_8/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 紅色黃金粉紅蛋白石 拼紫石英硬玉戒指</div>
                                                        <div class="price">HK$500</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_9/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_9/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 紅色黃金鑽石戒指</div>
                                                        <div class="price">HK$1,100</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_10/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_10/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K藍色戒指</div>
                                                        <div class="price">HK$500</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-slide">
                                                <div class="pdt_block_small">
                                                    <a class="pdtImg_link" href="#" style={{backgroundImage: 'url(../images/pdt/pdtID_11/thm.png)'}}>
                                                        <div class="pdtImghover_container" style={{backgroundImage: 'url(../images/pdt/pdtID_11/thm-hover.png)'}}></div>
                                                    </a>
                                                    <div class="desc_wrap">
                                                        <div class="name">18K 白色黃金珍珠戒指</div>
                                                        <div class="price">HK$1,100</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>     
                                    <div class="swiperArrows_wrap">
                                        <button class="button-prev"></button>
                                        <button class="button-next"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>



<div class="modal fade sideBarModal right headerSideBarModal" id="modal_mobileNav" tabIndex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-right" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="title_desktop_wrap d-none d-md-block">
                    <span class="title">目錄</span>
                    <button type="button" class="close closeBtn" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                </div>

                <div class="title_mobile_wrap d-block d-md-none">
                    <button type="button" class="close backBtn d-block d-md-none" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                    <span class="title">目錄</span>
                </div>
            </div>
            <div class="modal-body">
                <div class="navRow">
                    <div class="row no-gutters">
                        <div class="col col-noPadding col-border-right">
                            <a class="menu-page-link" href="login.html">登入 / 註冊</a>
                        </div>
                        <div class="col col-noPadding">
                            <a class="menu-page-link hover" data-toggle="modal" data-target="#modal_wishList"><span class="hoverChangeColor">願望清單</span></a>
                        </div>
                    </div>
                </div>
                <div class="navRow">
                    <a class="menu-page-link" href="about.html">品牌概念</a>
                </div>
                <div class="navRow">
                    <a class="menu-page-link" href="collections.html">產品系列</a>
                </div>
                <div class="navRow">
                    <a class="menu-page-link" href="products.html">所有產品</a>
                </div>
                <div class="navRow">
                    <a class="menu-page-link" href="experience.html">購物體驗</a>
                </div>
                <div class="navRow">
                    <a class="menu-page-link" href="member.html"><span class="icon-member-logo"></span></a>
                </div>
                <div class="navRow">
                    <span class="menu-page-link">需要協助?   <a href="tel:+85200000000">+852 0000 0000</a></span>
                </div>
            </div>
            <div class="modal-footer">
                <div class="row no-gutters">
                    <div class="col-8 currency_col">
                        <span class="seletedValue">HK/HK$</span>
                        <div class="submenu">
                            <select id="countryNCurrency_m" name="countryNCurrency_m" class="countryNCurrency">
                               <option value="HK/HK$">香港</option>
                               <option value="CN">中國大陸</option>
                               <option value="TW">臺灣</option>
                               <option value="AU/AUD($)">澳洲</option>
                               <option value="AT/EUR(€)">奧地利</option>
                               <option value="BE/EUR(€)">比利時</option>
                               <option value="BN/USD($)">汶萊</option>
                               <option value="CA/USD($)">加拿大</option>
                               <option value="CY/EUR(€)">賽普勒斯</option>
                               <option value="DK/EUR(€)">丹麥</option>
                               <option value="FI/EUR(€)">芬蘭</option>
                               <option value="FR/EUR(€)">法國</option>
                               <option value="DE/EUR(€)">德國</option>
                               <option value="GR/EUR(€)">希臘</option>
                               <option value="HU/EUR(€)">匈牙利</option>
                               <option value="ID/USD($)">印尼</option>
                               <option value="IE/EUR(€)">愛爾蘭</option>
                               <option value="IT/EUR(€)">意大利</option>
                               <option value="JP/USD($)">日本</option>
                               <option value="LV/EUR(€)">拉脫維亞</option>
                               <option value="LT/EUR(€)">立陶宛</option>
                               <option value="LU/EUR(€)">盧森堡</option>
                               <option value="MO/HKD($)">澳門</option>
                               <option value="MY/USD($)">馬來西亞</option>
                               <option value="NL/EUR(€)">荷蘭</option>
                               <option value="NZ/AUD($)">新西蘭</option>
                               <option value="NO/EUR(€)">挪威</option>
                               <option value="PH/USD($)">菲律賓</option>
                               <option value="PL/EUR(€)">波蘭</option>
                               <option value="PT/EUR(€)">葡萄牙</option>
                               <option value="PR/USD($)">波多黎各</option>
                               <option value="SC/GBP(£)">蘇格蘭</option>
                               <option value="SG/USD($)">新加坡</option>
                               <option value="SK/EUR(€)">斯洛伐克</option>
                               <option value="SI/EUR(€)">斯洛維尼亞共和國</option>
                               <option value="KR/USD($)">南韓</option>
                               <option value="ES/EUR(€)">西班牙</option>
                               <option value="LK/USD($)">斯里蘭卡</option>
                               <option value="SE/EUR(€)">瑞典</option>
                               <option value="CH/EUR(€)">瑞士</option>
                               <option value="TH/USD($)">泰國</option>
                               <option value="TR/EUR(€)">土耳其</option>
                               <option value="VG/USD($)">美屬維爾京群島</option>
                               <option value="AE/USD($)">阿聯酋</option>
                               <option value="GB/GBP(￡)">英國</option>
                               <option value="US/USD($)">美國</option>
                               <option value="VT/USD($)">越南</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-1">
                    </div>
                    <div class="col-3 lang_col">
                        <div class="content">
                            <select id="lang_select" name="lang_select" class="lang_select">
                               <option value="HK/HK$">繁</option>
                               <option value="CN">简</option>
                               <option value="TW">EN</option>
                            </select>                                 
                        </div>  
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>


<div class="modal fade sideBarModal right headerSideBarModal" id="modal_wishList" tabIndex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-right" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="title_desktop_wrap d-none d-md-block">
                    <span class="title">願望清單</span>
                    <button type="button" class="close closeBtn" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                </div>

                <div class="title_mobile_wrap d-block d-md-none">
                    <button type="button" class="close backBtn d-block d-md-none" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                    <span class="title">願望清單</span>
                </div>
            </div>
            <div class="modal-body">

                <table class="pdtTable">
                  <tbody>
                    <tr>
                        <td>
                            <img class="collectionLogo" src="../images/collections/collection-logos/tc/origin/logo-manon.svg" />
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_9/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 白色黃金珍珠戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_5/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 黃金珍珠戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_6/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 白色黃金虎眼石戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_7/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 紅色黃金粉紅蛋白石 拼紫石英硬玉戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_8/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 紅色黃金鑽石戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <a href="#" class="blockBtn goShoppingBag">查看飾物</a>
            </div>
        </div>
    </div>
</div>

<div class="modal fade sideBarModal right headerSideBarModal" id="modal_shoppingBag" tabIndex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-right" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <div class="title_desktop_wrap d-none d-md-block">
                    <span class="title">我的購物袋</span>
                    <button type="button" class="close closeBtn" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                </div>

                <div class="title_mobile_wrap d-block d-md-none">
                    <button type="button" class="close backBtn d-block d-md-none" data-dismiss="modal" aria-label="Close">
                        <span class="stroke" aria-hidden="true"></span>
                        <span class="stroke" aria-hidden="true"></span>
                    </button>
                    <span class="title">我的購物袋</span>
                </div>
            </div>
            <div class="modal-body">

                <table class="pdtTable">
                  <tbody>
                    <tr>
                        <td>
                            <img class="collectionLogo" src="../images/collections/collection-logos/tc/origin/logo-manon.svg" />
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_9/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 白色黃金珍珠戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_5/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 黃金珍珠戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_6/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 白色黃金虎眼石戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_7/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 紅色黃金粉紅蛋白石 拼紫石英硬玉戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                            <img class="pdt" src="../images/pdt/pdtID_8/thm.png" />
                        </td>
                        <td>
                            <div class="desc_wrap">
                                <p class="fullPdtName">18K 紅色黃金鑽石戒指</p>
                                <p class="selections">材質黑鑽石, 圈度16, 數量 1</p>
                                <p class="price">HK$900</p>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="closeBtn" aria-label="Remove item">
                                <span class="stroke" aria-hidden="true"></span>
                                <span class="stroke" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <a href="#" class="blockBtn goShoppingBag">立即購買</a>
            </div>
        </div>
    </div>
</div>


</div>

    );
  }
}

let domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);



//====================================================================


(function(){


$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 500);
});

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
    checkToMinHeader();
})

function checkToMinHeader() {

	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
	var menuH = $(".menu_top_wrap").height();
	if ( menuH <= 0 ){
		menuH = $(".nav_wrap_m").height();
	}
	if( scrollTop > menuH )
	{
		$("body").addClass("headerMin");
		$("header").addClass("minimize");
	}else{
		$("body").removeClass("headerMin");
		$("header").removeClass("minimize");
	}

}

$(window).on('scroll', function(){
	checkToMinHeader();
});	

$(document).on("click", "header .seach_menu_btn, header .seach_menu_btn_m, header .searchOlBg_container", function(){
	//console.log("fdsf");
	$("header").toggleClass("minimize_wOl");
	$("body").toggleClass("showingOl");

	$('header .search_input_wrap>.content').slideToggle(400);
});

$(document).on("click", "header .search_input_wrap>.content", function(evt){
	evt.stopPropagation();
});

$(document).on("click", "header .mobileNav_btn ", function(evt){
	
});


$(document).on("mouseenter", "header .submenu_btn", function(evt){
	var submenuSelector = $(this).attr("data-tar");	
	$(submenuSelector).addClass("hoverSubmenuBtn");
	$("header").addClass("hoverSubmenuBtn");
});
$(document).on("mouseleave", "header .submenu_btn", function(evt){
	var submenuSelector = $(this).attr("data-tar");	
	$(submenuSelector).removeClass("hoverSubmenuBtn");
	$("header").removeClass("hoverSubmenuBtn");
	//reset
	$(".set").removeClass("inactive");
	$(".set").removeClass("active");
});

$(document).on("mouseenter", "header .submenu_hover_wrap", function(evt){
	$(this).addClass("hoverSubmenu");
	$("header").addClass("hoverSubmenu");
});
$(document).on("mouseleave", "header .submenu_hover_wrap", function(evt){
	$(this).removeClass("hoverSubmenu");
	$("header").removeClass("hoverSubmenu");
	//reset
	$(".set").removeClass("inactive");
	$(".set").removeClass("active");
});

$(document).on("mouseenter", "header .menu-page-link-collections ", function(evt){
	//reset
	$(".set").removeClass("inactive");
	$(".set").removeClass("active");
});

$(document).on("click", "header #collections_sets_wrap .set_menu", function(evt){
	$(".set").addClass("inactive");
	var setClass = $(this).attr("data-tar");	
	$(setClass).removeClass("inactive").addClass("active");	
});

//collections.html


$(document).on("click", "#notifications_wrap .closeBtn", function(){
	var lang = $("html").attr("lang");
	//setCookie("/HKTB/winedinefestival/acceptedCookies",'true',1);

	$("#notifications_wrap").hide();
});



$(document).ready(function() {
	var lang = $("html").attr("lang");
	if( getCookie( lang + "/notificationsClose") == 'true'){
		$("#notifications_wrap").hide();
	}
	checkToMinHeader();

	var notification_swiper = new Swiper('#notifications_wrap .swiper-container', {
		loop: true,
		autoplay: {
			delay: 2500,
		},
		navigation: {
			nextEl: '#notifications_wrap .button-next',
			prevEl: '#notifications_wrap .button-prev',
		},
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
			prevEl: 'header .suggestedResult_wrap .button-prev',
		},
		breakpoints: {
			// when window width is <= 320px
			767: {
				slidesPerView: 'auto',
				slidesPerColumn: 1,
				slidesPerColumnFill: 'row',
				direction: 'vertical',
				freeMode: true,
			},
		}


    });



	$("#header_search_input").on("change keyup paste", function () {
	    if ( $("#header_search_input").val() == "" ){
	    	$("header .search_input_wrap").removeClass("hvTexts");
	    }else{
	    	$("header .search_input_wrap").addClass("hvTexts");
	    	headerSuggestedResult_swiper.update();
	    }
	});
	$("header .search_input_wrap .closeBtn").on("click", function(){
		$("#header_search_input").val("");
		$("header .search_input_wrap").removeClass("hvTexts");
	})
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