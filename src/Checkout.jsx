/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react'

export default class Checkout extends Component {
    render() {
        return (
            <div class="pageContent_wrap">

        <div class="content-wrapper-wider">

            <div class="breadcrumb_wrap d-none d-md-block">
                <a class="breadcrumb__link" href="#"><span>首頁</span></a>
                <a class="breadcrumb__link" href="#"><span>我的購物袋</span></a>
            </div>

            <p class="pageBigTitle">結帳</p>

            <div class="row no-gutters parent_forSticky">
                <div class="col-12 col-md-7 left_wrap">

                    <section class="chectout_sect chectout_pdts opened">
                        <div class="sectTitle">
                            <span class="num">1</span>我的購物袋(<span class="shoppingBagNum">3</span>)
                            <hr />
                        </div>

                        <div class="sectContent pdts_wrap">
                            <div class="pdt_wrap row no-gutters">
                                <div class="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_1/thm.png' />
                                </div>
                                <div class="col-5 col-md-4 details_col_wrap">
                                    <div class="name_wrap">
                                        <div class="collectionName">MANON</div>
                                        <div class="name">黑鑽石戒指</div>
                                    </div>
                                    <div class="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div class="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div class="col-0 col-md-2 notes notes_col_wrap">                                    
                                    ( 減價貨品 )
                                </div>
                                <div class="col-4 col-md-3 price_col_wrap">
                                    <div class="price">HK$17,200</div>
                                    <div class="originalPrice_wrap">
                                        <div class="price">HK$18,000</div>
                                    </div>
                                    <div class="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" class="closeBtn" aria-label="Remove item">
                                    <span class="stroke" aria-hidden="true"></span>
                                    <span class="stroke" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div class="pdt_wrap row no-gutters">
                                <div class="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_2/thm.png' />
                                </div>
                                <div class="col-5 col-md-4 details_col_wrap">
                                    <div class="name_wrap">
                                        <div class="collectionName">MANON</div>
                                        <div class="name">黑鑽石戒指</div>
                                    </div>
                                    <div class="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div class="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div class="col-0 col-md-2 notes notes_col_wrap">
                                    ( 減價貨品 )
                                </div>
                                <div class="col-4 col-md-3 price_col_wrap">
                                    <div class="price">HK$17,200</div>
                                    <div class="originalPrice_wrap">
                                        <div class="price">HK$18,000</div>
                                    </div>
                                    <div class="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" class="closeBtn" aria-label="Remove item">
                                    <span class="stroke" aria-hidden="true"></span>
                                    <span class="stroke" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div class="pdt_wrap row no-gutters">
                                <div class="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_4/thm.png' />
                                </div>
                                <div class="col-5 col-md-4 details_col_wrap">
                                    <div class="name_wrap">
                                        <div class="collectionName">MANON</div>
                                        <div class="name">黑鑽石戒指</div>
                                    </div>
                                    <div class="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div class="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div class="col-0 col-md-2 notes notes_col_wrap">
                                    ( 減價貨品 )
                                </div>
                                <div class="col-4 col-md-3 price_col_wrap">
                                    <div class="price">HK$17,200</div>
                                    <div class="originalPrice_wrap">
                                        <div class="price">HK$18,000</div>
                                    </div>
                                    <div class="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" class="closeBtn" aria-label="Remove item">
                                    <span class="stroke" aria-hidden="true"></span>
                                    <span class="stroke" aria-hidden="true"></span>
                                </button>
                            </div>

                            <div class="right_wrap right_wrap_m d-block d-md-none">
                                <div class="content">
                                    <div class="order_summary">
                                        <div class="title">訂單摘要</div>
                                        <table class="order_listing_table">
                                            <tr>
                                                <td>商品總金額</td>
                                                <td>HK$33,600.00</td>
                                            </tr>
                                            <tr>
                                                <td>運費</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                            <tr>
                                                <td>HK$100 折扣 (優惠代碼: FTV100A)</td>
                                                <td>- HK$100.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td class="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span class="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <div>
                                    <a class="openModelMobile_btn" data-toggle="modal" data-target="#modal_discountCode">
                                        使用優惠券或現金券代碼
                                        <button class="go_btn" tabindex="0" role="button" aria-label="New overlay"></button>
                                    </a>
                                </div>
                                    

                                </div>
                            </div>

                            <div class="buttons_wrap">
                                <a class="blockBtn goSectBtn" data-gosect=".chectout_deliver" href="">下一步</a>
                            </div>

                            <div class="buttons_wrap">
                                <div><a id="checkout_contShopping_btn" class="blockBtn grey" href="#" >繼續購物</a><a id="checkout_Login_btn" class="blockBtn" href="#">登入</a></div>
                            </div>

                        </div>

                        <div class="sectContent emptyBag_wrap">
                            <p>您的購物袋沒有任何貨品。</p>
                        </div>

                    </section>

                    <section class="chectout_sect chectout_deliver">
                        <div class="sectTitle">
                            <span class="num">2</span>配送選擇
                            <hr />
                        </div>

                        <div class="sectContent">
                            <div class="options_wrap row no-gutters with-gaps">
                                <div class="col-6 pickup_col_wrap">
                                    <button class="deliverOption_btn active" data-optioncontent=".chectout_deliver .pickup_wrap">
                                        <div class="content">
                                            <div class="icon_wrap">
                                                <img class="icon" src="../images/eshop/checkout-instore-active.svg" />
                                            </div>
                                            <div class="txts_wrap">
                                                <div class="optionName">到分店取貨</div>
                                                <div>免費配送 (只限香港分店)</div>
                                            </div>                                        
                                        </div>
                                    </button>
                                </div>
                                <div class="col-6 delivery_col_wrap">
                                    <button class="deliverOption_btn" data-optioncontent=".chectout_deliver .delivery_wrap">
                                        <div class="content">
                                            <div class="icon_wrap">
                                                <img class="icon" src="../images/eshop/checkout-local-delivery.svg" />
                                            </div>
                                            <div class="txts_wrap">
                                                <div class="optionName">送貨服務</div>
                                                <div>香港:免費, 海外:隨地區調整</div>
                                            </div>                                        
                                        </div>
                                    </button>
                                </div>
                         
                            </div>

                            <div class="pickup_wrap active">
                                <div class="row no-gutters with-gaps">
                                    <div class="col-12 col-md-6">
                                        <div class="subtitle subtitle_sect">取貨分店</div>
                                        <p>
                                            <select id="pickup_area" name="pickup_area" required >
                                                <option value="0">區域*</option>
                                                <option value="HK-HK">香港島</option>
                                                <option value="HK-KLN">九龍</option>
                                                <option value="HK-NT">新界</option>
                                             </select>
                                             <span class="text-error">必須選取一個項目</span>
                                        </p>
                                        <p>
                                            <select id="pickup_district" name="pickup_district" required >
                                                <option value="0">分區*</option>
                                                <option value="北角">北角</option>
                                                <option value="鰂魚涌">鰂魚涌</option>
                                                <option value="銅鑼灣">銅鑼灣</option>
                                                <option value="中環">中環</option>
                                            </select>
                                             <span class="text-error">必須選取一個項目</span>
                                        </p>
                                        <p>
                                            <select id="pickup_stores" name="pickup_stores" required >
                                                <option value="0">分店*</option>
                                                <option value="125">北角分店</option>
                                            </select>
                                             <span class="text-error">必須選取一個項目</span>
                                        </p>
                                        <div class="store_details">
                                            <p class="subtitle shorter">北角分店<a href="googlemaplink" target="_blank"><span class="icon icon-header-icon-location"></span></a></p>
                                            <p class="desc">北角英皇道395號<br/>
                                            星期一至星期日 : 上午10:30 - 下午08:30<br/>
                                            電話 : +852 2561 8399</p>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="subtitle subtitle_sect">取貨人資料</div>
                                        <div class="clearfix">
                                            <div class="narrowerInput_wrap">     
                                                <p>
                                                    <select id="pickup_customerTitle" name="pickup_customerTitle" class="narrowerInput" required >
                                                        <option value="0">稱謂*</option>
                                                        <option value="ms">女士</option>
                                                        <option value="mr">先生</option>
                                                        <option value="mrs">太太</option>
                                                        <option value="miss">小姐</option>
                                                    </select>
                                                    <span class="text-error">必須選取一個項目</span>
                                                </p>
                                            </div>
                                            <div class="widerInput_wrap">
                                                <p>
                                                    <input type="text" id="pickup_customerName" name="pickup_customerName" class="widerInput" placeholder="姓名*" required />
                                                    <span class="text-error">必須填寫</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="clearfix">
                                            <div class="narrowerInput_wrap">     
                                                <p>
                                                    <select id="pickup_phoneCode" name="pickup_phoneCode" class="narrowerInput" required >
                                                        <option value="+852">+852</option>
                                                        <option value="+86">+86</option>
                                                    </select>
                                                    <span class="text-error">必須選取一個項目</span>
                                                </p>
                                            </div>
                                            <div class="widerInput_wrap">
                                                <p>
                                                    <input type="text" id="pickup_phoneNo" name="pickup_phoneNo" class="widerInput" placeholder="電話號碼*" required />
                                                    <span class="text-error">必須填寫</span>
                                                </p>
                                            </div>
                                            <p class="note">*您或您的取貨人須出示附有近照的身份證明文件正本，而輸入的取貨人姓名資料必須與身份證明文件相符，以核實身份。</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="buttons_wrap">
                                    <div>
                                        <a class="blockBtn grey goSectBtn" data-gosect=".chectout_pdts" href="">返回</a>
                                        <a class="blockBtn goSectBtn" data-gosect=".chectout_payment" href="">下一步</a>
                                    </div>
                                </div>

                            </div>


                            <div class="delivery_wrap">
                                <div class="delivery_newAddress_wrap">
                                    <div class="subtitle subtitle_sect">送貨地址</div>
                                    <div class="delivery_addressForm_wrap">
                                        <div class="row no-gutters with-gaps">
                                            <div class="col-12 col-md-6 clearfix">
                                                <div class="narrowerInput_wrap">
                                                    <p>
                                                        <select id="delivery_customerTitle" name="delivery" required >
                                                            <option value="0">稱謂*</option>
                                                            <option value="ms">女士</option>
                                                            <option value="mr">先生</option>
                                                            <option value="mrs">太太</option>
                                                            <option value="miss">小姐</option>
                                                        </select>
                                                        <span class="text-error">必須選取一個項目</span>
                                                    </p>                                                    
                                                </div>
                                                <div class="widerInput_wrap">
                                                    <p>
                                                        <input type="text" id="delivery_customerName" name="delivery_customerName" placeholder="姓名*" required />
                                                        <span class="text-error">必須填寫</span>
                                                    </p>                                                    
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6 clearfix">  
                                                <div class="narrowerInput_wrap">
                                                    <p>
                                                        <select id="delivery_phoneCode" name="delivery_phoneCode" class="narrowerInput" required >
                                                            <option value="+852">+852</option>
                                                            <option value="+86">+86</option>
                                                        </select>
                                                        <span class="text-error">必須選取一個項目</span>
                                                    </p>                                                    
                                                </div>
                                                <div class="widerInput_wrap">
                                                    <p>
                                                        <input type="text" id="delivery_phoneNo" name="delivery_phoneNo" placeholder="電話號碼*" required />
                                                        <span class="text-error">必須填寫</span>
                                                    </p>                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            <input type="text" id="delivery_addressLine1" name="delivery_addressLine1" placeholder="地址1*" required />
                                            <span class="text-error">必須填寫</span>
                                        </p>
                                        <p>
                                            <input type="text" id="delivery_addressLine1" name="delivery_addressLine1" placeholder="地址2" required />
                                        </p>
                                        <div class="row no-gutters with-gaps">
                                            <div class="col-12 col-md-6">
                                                <p>
                                                    <select id="delivery_area" name="delivery_area" class="narrowerInput" required >
                                                        <option value="HK">香港</option>
                                                        <option value="CN">中國大陸</option>
                                                        <option value="AU">澳洲</option>
                                                        <option value="AT">奧地利</option>
                                                        <option value="BE">比利時</option>
                                                     </select>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons_wrap">         
                                        <div><a id="cancelSaveAdd_btn" class="blockBtn grey" href="">取消</a><a id="saveAdd_btn" class="blockBtn" href="">儲存地址</a></div>
                                    </div>
                                </div>

                                <div class="delivery_details_wrap">
                                    <div class="row no-gutters with-gaps">
                                        <div class="col-12 col-md-6">
                                            <div class="part">
                                                <div class="subtitle_withLine_wrap">
                                                    <p class="subtitle shorter subtitle_sect">送貨地址</p>
                                                    <hr />
                                                </div>
                                                <div class="radioBtns_wrap vertical">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="delivery_address1" name="delivery_address_radioGrp" checked />
                                                            <label for="delivery_address1">LANCE,15629124552<br/>LA, 90001<br/>Los Angeles, CA, 美國</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <a id="newAdd_btn" class="content-link" href="">＋新增地址</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <div class="part">
                                                <div class="subtitle_withLine_wrap">
                                                    <p class="subtitle shorter subtitle_sect">運送模式</p>
                                                    <hr />
                                                </div>
                                                <div class="radioBtns_wrap vertical">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="delivery_mode1" name="delivery_mode_radioGrp" checked />
                                                            <label for="delivery_mode1">優先送递 (3-5天)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="part">
                                                <div class="subtitle_withLine_wrap">
                                                    <p class="subtitle shorter subtitle_sect">稅項及關稅（如適用）</p>
                                                    <hr />
                                                </div>
                                                <div class="radioBtns_wrap vertical">
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="delivery_taxPay1" name="delivery_taxPay_radioGrp" checked />
                                                            <label for="delivery_taxPay1">收件者支付</label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="delivery_taxPay2" name="delivery_taxPay_radioGrp"/>
                                                            <label for="delivery_taxPay2">寄件者預繳</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="buttons_wrap">
                                        <div>
                                            <a class="blockBtn grey goSectBtn" data-gosect=".chectout_pdts" href="">返回</a>
                                            <a class="blockBtn goSectBtn" data-gosect=".chectout_payment" href="">下一步</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="right_wrap right_wrap_m d-block d-md-none">
                                <div class="content">
                                    <div class="order_summary">
                                        <div class="title">訂單摘要</div>
                                        <table class="order_listing_table">
                                            <tr>
                                                <td>商品總金額</td>
                                                <td>HK$33,600.00</td>
                                            </tr>
                                            <tr>
                                                <td>運費</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                            <tr>
                                                <td>HK$100 折扣 (優惠代碼: FTV100A)</td>
                                                <td>- HK$100.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td class="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span class="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>



                    </section>

                    <section class="chectout_sect chectout_payment">
                        <div class="sectTitle">
                            <span class="num">3</span>付款方式選擇
                            <hr />
                        </div>

                        <div class="sectContent">
                            <p>請選擇付款方法。</p>
                            <div>
                                <a class="paymentBtn"><img src="../images/eshop/payment-visa.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-mastercard.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-paypal.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-pps.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-unionpay.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-alipay.jpg" /></a>
                                <a class="paymentBtn"><img src="../images/eshop/payment-ae.jpg" /></a>
                            </div>
                            <p><span class="text-error">必須選取一個項目</span></p>

                            <div class="buttons_wrap">
                                <div>
                                    <a class="blockBtn grey goSectBtn" data-gosect=".chectout_deliver" href="">返回</a>
                                    <a class="blockBtn" href="checkout-result.html">立即購買</a>
                                </div>
                            </div>

                            <div class="right_wrap right_wrap_m d-block d-md-none">
                                <div class="content">
                                    <div class="order_summary">
                                        <div class="title">訂單摘要</div>
                                        <table class="order_listing_table">
                                            <tr>
                                                <td>商品總金額</td>
                                                <td>HK$33,600.00</td>
                                            </tr>
                                            <tr>
                                                <td>運費</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                            <tr>
                                                <td>HK$100 折扣 (優惠代碼: FTV100A)</td>
                                                <td>- HK$100.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td class="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table class="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span class="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    

                                </div>

                            </div>
                        </div>

                    </section>




                </div>

                <div class="col-1 d-none d-md-block">
                </div>

                <div class="col-4 right_wrap d-none d-md-block sidebar_forSticky">
                    <div class="content sidebarInner_forSticky">
                        <div class="order_summary">
                            <div class="title">訂單摘要</div>
                            <table class="order_listing_table">
                                <tr>
                                    <td>商品總金額</td>
                                    <td>HK$33,600.00</td>
                                </tr>
                                <tr>
                                    <td>運費</td>
                                    <td>HK$0.00</td>
                                </tr>
                                <tr>
                                    <td>HK$100 折扣 (優惠代碼: FTV100A)</td>
                                    <td>- HK$100.00</td>
                                </tr>
                            </table>
                            <table class="order_conclusion_table">
                                <tr>
                                    <td>總計</td>
                                    <td class="text-gold"><b>HK$33,600.00</b></td>
                                </tr>
                                <tr>
                                    <td>預估關稅、稅收及費用：</td>
                                    <td>HK$0.00</td>
                                </tr>
                            </table>
                            <table class="order_moreInfo_table">
                                <tr>
                                    <td>預計送貨日期：</td>
                                    <td>2019/08/13 <span class="d-inline-block">(星期二)</span></td>
                                </tr>
                            </table>
                        </div>
                        <div class="checkout_discountCode_wrap">
                            <div class="title">使用優惠券或現金券代碼</div>
                            <div>
                                <input type="text" id="checkout_discountCode" name="checkout_discountCode" placeholder="請在此輸入優惠券或現金券代碼" required />
                                <p class="appliedCodeTag_wrap">
                                    <span class="appliedCodeTag">
                                        <img class="icon" src="../images/eshop/discount-code-percent.svg" />
                                        <span class="text">8折 折扣</span>
                                        <button type="button" class="closeBtn">
                                            <span class="stroke" aria-hidden="true"></span>
                                            <span class="stroke" aria-hidden="true"></span>
                                        </button>
                                    </span>
                                    <span class="appliedCodeTag">
                                        <img class="icon" src="../images/eshop/discount-code-percent.svg" />
                                        <span class="text">HK$100 折扣</span>
                                        <button type="button" class="closeBtn">
                                            <span class="stroke" aria-hidden="true"></span>
                                            <span class="stroke" aria-hidden="true"></span>
                                        </button>
                                    </span>
                                </p>
                                <p class="text-error">
                                    
                                    只限使用一個優惠代碼<br/>只限使用一張現金券
                                </p>
                            </div>
                            <div><a href="#" class="blockBtn">立即使用</a></div>
                        </div>
                        <p class="help">需要協助?   <a href="tel:+852 0000 0000">+852 0000 0000</a></p>
                    </div>
                </div>
            </div>

        </div>




    </div>
        )
    }
}
