/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react'
import {DeliveryNewAddressWrap} from './DeliveryNewAddressWrap'
import DeliveryDetailsWrap from './DeliveryDetailsWrap'
import { Formik, Field } from "formik";

export default class Checkout extends Component {
    render() {
        return (
            <div className="pageContent_wrap">

        <div className="content-wrapper-wider">

            <div className="breadcrumb_wrap d-none d-md-block">
                <a className="breadcrumb__link" href="#"><span>首頁</span></a>
                <a className="breadcrumb__link" href="#"><span>我的購物袋</span></a>
            </div>

            <p className="pageBigTitle">結帳</p>

            <div className="row no-gutters parent_forSticky">
                <div className="col-12 col-md-7 left_wrap">

                    <section className="chectout_sect chectout_pdts opened">
                        <div className="sectTitle">
                            <span className="num">1</span>我的購物袋(<span className="shoppingBagNum">3</span>)
                            <hr />
                        </div>

                        <div className="sectContent pdts_wrap">
                            <div className="pdt_wrap row no-gutters">
                                <div className="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_1/thm.png' />
                                </div>
                                <div className="col-5 col-md-4 details_col_wrap">
                                    <div className="name_wrap">
                                        <div className="collectionName">MANON</div>
                                        <div className="name">黑鑽石戒指</div>
                                    </div>
                                    <div className="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div className="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div className="col-0 col-md-2 notes notes_col_wrap">                                    
                                    ( 減價貨品 )
                                </div>
                                <div className="col-4 col-md-3 price_col_wrap">
                                    <div className="price">HK$17,200</div>
                                    <div className="originalPrice_wrap">
                                        <div className="price">HK$18,000</div>
                                    </div>
                                    <div className="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" className="closeBtn" aria-label="Remove item">
                                    <span className="stroke" aria-hidden="true"></span>
                                    <span className="stroke" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="pdt_wrap row no-gutters">
                                <div className="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_2/thm.png' />
                                </div>
                                <div className="col-5 col-md-4 details_col_wrap">
                                    <div className="name_wrap">
                                        <div className="collectionName">MANON</div>
                                        <div className="name">黑鑽石戒指</div>
                                    </div>
                                    <div className="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div className="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div className="col-0 col-md-2 notes notes_col_wrap">
                                    ( 減價貨品 )
                                </div>
                                <div className="col-4 col-md-3 price_col_wrap">
                                    <div className="price">HK$17,200</div>
                                    <div className="originalPrice_wrap">
                                        <div className="price">HK$18,000</div>
                                    </div>
                                    <div className="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" className="closeBtn" aria-label="Remove item">
                                    <span className="stroke" aria-hidden="true"></span>
                                    <span className="stroke" aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="pdt_wrap row no-gutters">
                                <div className="col-3 thm_col_wrap">
                                    <img src='../images/pdt/pdtID_4/thm.png' />
                                </div>
                                <div className="col-5 col-md-4 details_col_wrap">
                                    <div className="name_wrap">
                                        <div className="collectionName">MANON</div>
                                        <div className="name">黑鑽石戒指</div>
                                    </div>
                                    <div className="details_wrap">
                                        材質： 黑鑽石<br/>
                                        圈度： 16<br/>
                                        數量： 1<br/>
                                    </div>
                                    <div className="services">
                                        7天無理由退換貨
                                    </div>
                                </div>
                                <div className="col-0 col-md-2 notes notes_col_wrap">
                                    ( 減價貨品 )
                                </div>
                                <div className="col-4 col-md-3 price_col_wrap">
                                    <div className="price">HK$17,200</div>
                                    <div className="originalPrice_wrap">
                                        <div className="price">HK$18,000</div>
                                    </div>
                                    <div className="notes notes_wrap_m">
                                        ( 減價貨品 )
                                    </div>
                                </div>

                                <button type="button" className="closeBtn" aria-label="Remove item">
                                    <span className="stroke" aria-hidden="true"></span>
                                    <span className="stroke" aria-hidden="true"></span>
                                </button>
                            </div>

                            <div className="right_wrap right_wrap_m d-block d-md-none">
                                <div className="content">
                                    <div className="order_summary">
                                        <div className="title">訂單摘要</div>
                                        <table className="order_listing_table">
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
                                        <table className="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td className="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table className="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span className="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    <div>
                                    <a className="openModelMobile_btn" data-toggle="modal" data-target="#modal_discountCode">
                                        使用優惠券或現金券代碼
                                        <button className="go_btn" tabindex="0" role="button" aria-label="New overlay"></button>
                                    </a>
                                </div>
                                    

                                </div>
                            </div>

                            <div className="buttons_wrap">
                                <a className="blockBtn goSectBtn" data-gosect=".chectout_deliver" href="javascript:void(0)">下一步</a>
                            </div>

                            <div className="buttons_wrap">
                                <div><a id="checkout_contShopping_btn" className="blockBtn grey" href="#" >繼續購物</a><a id="checkout_Login_btn" className="blockBtn" href="#">登入</a></div>
                            </div>

                        </div>

                        <div className="sectContent emptyBag_wrap">
                            <p>您的購物袋沒有任何貨品。</p>
                        </div>

                    </section>

                    <section className="chectout_sect chectout_deliver">
                        <div className="sectTitle">
                            <span className="num">2</span>配送選擇
                            <hr />
                        </div>

                        <div className="sectContent">
                            <div className="options_wrap row no-gutters with-gaps">
                                <div className="col-6 pickup_col_wrap">
                                    <button className="deliverOption_btn active" data-optioncontent=".chectout_deliver .pickup_wrap">
                                        <div className="content">
                                            <div className="icon_wrap">
                                                <img className="icon" src="../images/eshop/checkout-instore-active.svg" />
                                            </div>
                                            <div className="txts_wrap">
                                                <div className="optionName">到分店取貨</div>
                                                <div>免費配送 (只限香港分店)</div>
                                            </div>                                        
                                        </div>
                                    </button>
                                </div>
                                <div className="col-6 delivery_col_wrap">
                                    <button className="deliverOption_btn" data-optioncontent=".chectout_deliver .delivery_wrap">
                                        <div className="content">
                                            <div className="icon_wrap">
                                                <img className="icon" src="../images/eshop/checkout-local-delivery.svg" />
                                            </div>
                                            <div className="txts_wrap">
                                                <div className="optionName">送貨服務</div>
                                                <div>香港:免費, 海外:隨地區調整</div>
                                            </div>                                        
                                        </div>
                                    </button>
                                </div>
                         
                            </div>

                            <div className="pickup_wrap active">
                                <div className="row no-gutters with-gaps">
                                    <div className="col-12 col-md-6">
                                        <div className="subtitle subtitle_sect">取貨分店</div>
                                        <p>
                                            <select id="pickup_area" name="pickup_area" required >
                                                <option value="0">區域*</option>
                                                <option value="HK-HK">香港島</option>
                                                <option value="HK-KLN">九龍</option>
                                                <option value="HK-NT">新界</option>
                                             </select>
                                             <span className="text-error">必須選取一個項目</span>
                                        </p>
                                        <p>
                                            <select id="pickup_district" name="pickup_district" required >
                                                <option value="0">分區*</option>
                                                <option value="北角">北角</option>
                                                <option value="鰂魚涌">鰂魚涌</option>
                                                <option value="銅鑼灣">銅鑼灣</option>
                                                <option value="中環">中環</option>
                                            </select>
                                             <span className="text-error">必須選取一個項目</span>
                                        </p>
                                        <p>
                                            <select id="pickup_stores" name="pickup_stores" required >
                                                <option value="0">分店*</option>
                                                <option value="125">北角分店</option>
                                            </select>
                                             <span className="text-error">必須選取一個項目</span>
                                        </p>
                                        <div className="store_details">
                                            <p className="subtitle shorter">北角分店<a href="googlemaplink" target="_blank"><span className="icon icon-header-icon-location"></span></a></p>
                                            <p className="desc">北角英皇道395號<br/>
                                            星期一至星期日 : 上午10:30 - 下午08:30<br/>
                                            電話 : +852 2561 8399</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="subtitle subtitle_sect">取貨人資料</div>
                                        <div className="clearfix">
                                            <div className="narrowerInput_wrap">     
                                                <p>
                                                    <select id="pickup_customerTitle" name="pickup_customerTitle" className="narrowerInput" required >
                                                        <option value="0">稱謂*</option>
                                                        <option value="ms">女士</option>
                                                        <option value="mr">先生</option>
                                                        <option value="mrs">太太</option>
                                                        <option value="miss">小姐</option>
                                                    </select>
                                                    <span className="text-error">必須選取一個項目</span>
                                                </p>
                                            </div>
                                            <div className="widerInput_wrap">
                                                <p>
                                                    <input type="text" id="pickup_customerName" name="pickup_customerName" className="widerInput" placeholder="姓名*" required />
                                                    <span className="text-error">必須填寫</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="clearfix">
                                            <div className="narrowerInput_wrap">     
                                                <p>
                                                    <select id="pickup_phoneCode" name="pickup_phoneCode" className="narrowerInput" required >
                                                        <option value="+852">+852</option>
                                                        <option value="+86">+86</option>
                                                    </select>
                                                    <span className="text-error">必須選取一個項目</span>
                                                </p>
                                            </div>
                                            <div className="widerInput_wrap">
                                                <p>
                                                    <input type="text" id="pickup_phoneNo" name="pickup_phoneNo" className="widerInput" placeholder="電話號碼*" required />
                                                    <span className="text-error">必須填寫</span>
                                                </p>
                                            </div>
                                            <p className="note">*您或您的取貨人須出示附有近照的身份證明文件正本，而輸入的取貨人姓名資料必須與身份證明文件相符，以核實身份。</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="buttons_wrap">
                                    <div>
                                        <a className="blockBtn grey goSectBtn" data-gosect=".chectout_pdts" href="javascript:void(0)">返回</a>
                                        <a className="blockBtn goSectBtn" data-gosect=".chectout_payment" href="javascript:void(0)">下一步</a>
                                    </div>
                                </div>

                            </div>


                            <div className="delivery_wrap">                                
                                <DeliveryDetailsWrap />                                    
                                <DeliveryNewAddressWrap submit={async (values)=>{
                                    console.log('values', values)
                                }}/>                         
                            </div>


                            <div className="right_wrap right_wrap_m d-block d-md-none">
                                <div className="content">
                                    <div className="order_summary">
                                        <div className="title">訂單摘要</div>
                                        <table className="order_listing_table">
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
                                        <table className="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td className="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table className="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span className="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    

                                </div>
                            </div>

                        </div>



                    </section>

                    <section className="chectout_sect chectout_payment">
                        <div className="sectTitle">
                            <span className="num">3</span>付款方式選擇
                            <hr />
                        </div>

                        <div className="sectContent">
                            <p>請選擇付款方法。</p>
                            <div>
                                <a className="paymentBtn"><img src="../images/eshop/payment-visa.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-mastercard.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-paypal.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-pps.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-unionpay.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-alipay.jpg" /></a>
                                <a className="paymentBtn"><img src="../images/eshop/payment-ae.jpg" /></a>
                            </div>
                            <p><span className="text-error">必須選取一個項目</span></p>

                            <div className="buttons_wrap">
                                <div>
                                    <a className="blockBtn grey goSectBtn" data-gosect=".chectout_deliver" href="javascript:void(0)">返回</a>
                                    <a className="blockBtn" href="checkout-result.html">立即購買</a>
                                </div>
                            </div>

                            <div className="right_wrap right_wrap_m d-block d-md-none">
                                <div className="content">
                                    <div className="order_summary">
                                        <div className="title">訂單摘要</div>
                                        <table className="order_listing_table">
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
                                        <table className="order_conclusion_table">
                                            <tr>
                                                <td>總計</td>
                                                <td className="text-gold"><b>HK$33,600.00</b></td>
                                            </tr>
                                            <tr>
                                                <td>預估關稅、稅收及費用：</td>
                                                <td>HK$0.00</td>
                                            </tr>
                                        </table>
                                        <table className="order_moreInfo_table">
                                            <tr>
                                                <td>預計送貨日期：</td>
                                                <td>2019/08/13 <span className="d-inline-block">(星期二)</span></td>
                                            </tr>
                                        </table>
                                    </div>

                                    

                                </div>

                            </div>
                        </div>

                    </section>




                </div>

                <div className="col-1 d-none d-md-block">
                </div>

                <div className="col-4 right_wrap d-none d-md-block sidebar_forSticky">
                    <div className="content sidebarInner_forSticky">
                        <div className="order_summary">
                            <div className="title">訂單摘要</div>
                            <table className="order_listing_table">
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
                            <table className="order_conclusion_table">
                                <tr>
                                    <td>總計</td>
                                    <td className="text-gold"><b>HK$33,600.00</b></td>
                                </tr>
                                <tr>
                                    <td>預估關稅、稅收及費用：</td>
                                    <td>HK$0.00</td>
                                </tr>
                            </table>
                            <table className="order_moreInfo_table">
                                <tr>
                                    <td>預計送貨日期：</td>
                                    <td>2019/08/13 <span className="d-inline-block">(星期二)</span></td>
                                </tr>
                            </table>
                        </div>
                        <div className="checkout_discountCode_wrap">
                            <div className="title">使用優惠券或現金券代碼</div>
                            <div>
                                <input type="text" id="checkout_discountCode" name="checkout_discountCode" placeholder="請在此輸入優惠券或現金券代碼" required />
                                <p className="appliedCodeTag_wrap">
                                    <span className="appliedCodeTag">
                                        <img className="icon" src="../images/eshop/discount-code-percent.svg" />
                                        <span className="text">8折 折扣</span>
                                        <button type="button" className="closeBtn">
                                            <span className="stroke" aria-hidden="true"></span>
                                            <span className="stroke" aria-hidden="true"></span>
                                        </button>
                                    </span>
                                    <span className="appliedCodeTag">
                                        <img className="icon" src="../images/eshop/discount-code-percent.svg" />
                                        <span className="text">HK$100 折扣</span>
                                        <button type="button" className="closeBtn">
                                            <span className="stroke" aria-hidden="true"></span>
                                            <span className="stroke" aria-hidden="true"></span>
                                        </button>
                                    </span>
                                </p>
                                <p className="text-error">
                                    
                                    只限使用一個優惠代碼<br/>只限使用一張現金券
                                </p>
                            </div>
                            <div><a href="#" className="blockBtn">立即使用</a></div>
                        </div>
                        <p className="help">需要協助?   <a href="tel:+852 0000 0000">+852 0000 0000</a></p>
                    </div>
                </div>
            </div>

        </div>




    </div>
        )
    }
}
