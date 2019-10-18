/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */

import React, { Component } from 'react'
import {DeliveryNewAddressWrap} from './DeliveryNewAddressWrap'
import {DeliveryDetailsWrap} from './DeliveryDetailsWrap'
import TempOrderErrorPopup from './TempOrderErrorPopup'
import { Formik, Field } from "formik";

let $ = window.$;
const HOST_URL = 'http://localhost:3001';
const api={
    addressbook:`${HOST_URL}/shopping/v1/customers/addressbook`
}

export default class Checkout extends Component {
    state={
        addressBook:[],
        editAddr:{
            rcptSl: "",
            customerName : "",
            phoneCode : "",
            phoneNo : "",
            addressLine1 : "",
            addressLine2 : "",
            postCode : "",
            city : "",
            province : "",
            countryCode : "",
            //要傳遞id來做地址更新
            id: ""            
          },        
        isNewAddr:true,
        isResetAddr:false,
        deliveryAddrId:null,//此欄位empty必須設null
        deliveryMode:"delivery_mode1",
        deliveryTaxPay:"delivery_taxPay1",
        isShowChinaDialog:false
    }    
    getAddressInitialValue(field){
        if(!this.state.isResetAddr) return field;
        return ""        
    }
    //載入addressbook
    async fetchAddressbook(){
        const res = await fetch(api.addressbook)    
        const data = await res.json()
        
        await this.setState({
            ...this.state,
            addressBook:data
        })
    }    
    //更新address 
    async updateAddress(values, id){
        await fetch(`${api.addressbook}/${id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(values)
          });
    }
    //建立address 
    async createAddress(values){        
        await fetch(api.addressbook, {
            credentials: "include",
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(values)
          });
    }
    //刪除address
    async deleteAddress(id){
        await fetch(`${api.addressbook}/${id}`,{method:'DELETE'})
    }
    async componentDidMount(){
        console.log('XXXX')
        await this.fetchAddressbook()        

        if(this.state.addressBook.length > 0){
            await this.setState({
                ...this.state,
                deliveryAddrId: this.state.addressBook[0].id
            })
        }        
    }
    goSection(e){        
        var chectout_sect = $(e.target).closest(".chectout_sect");
        var goSect = $(e.target).attr("data-gosect");                                    

        $(chectout_sect).removeClass("opened");
        $(chectout_sect).addClass("filled");                                                                        
        $( goSect ).addClass("opened");
        $( goSect ).children(".sectContent").slideDown(300);
        $(chectout_sect).children(".sectContent").slideUp(300)
    }
    render() {
        const {isNewAddr, isResetAddr, editAddr, addressBook, deliveryAddrId, deliveryMode, deliveryTaxPay} = this.state;
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
                                <a className="blockBtn goSectBtn" data-gosect=".chectout_deliver" href="javascript:void(0)" onClick={(e)=>this.goSection(e)}>
                                    下一步
                                </a>
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
                                <DeliveryDetailsWrap 
                                //初始值
                                delivery_address_radioGrp={deliveryAddrId}
                                delivery_mode_radioGrp={deliveryMode}
                                delivery_taxPay_radioGrp={deliveryTaxPay}                                
                                //地址簿 
                                addressBook={addressBook}
                                   //新增地址
                                   clickNewAddrBtn={()=>{
                                        this.setState({
                                            ...this.state,
                                            isNewAddr:true, //新增地址狀態
                                            isResetAddr:true//清空欄位
                                        }) 
                                        //配送選擇 - 送貨服務 - 新增地址                                       
                                        $("#cancelSaveAdd_btn").show();
                                        $(".chectout_sect .delivery_newAddress_wrap").slideDown();
                                        $(".chectout_sect .delivery_details_wrap").slideUp();                                        
                                   }}
                                   //修改地址
                                   clickEditAddrBtn={(address)=>{
                                      this.setState({
                                          ...this.state,
                                          isNewAddr:false,  //設定修改地址狀態
                                          isResetAddr:false,//不要清空欄位，要載入點選的地址到欄位
                                          editAddr:{        //設定欄位值
                                            rcptSl: address.rcptSl,
                                            rcptFirstNam : address.rcptFirstNam,
                                            rcptMobCtryCde : address.rcptMobCtryCde,
                                            rcptMobNbr : address.rcptMobNbr,
                                            address1 : address.address1,
                                            address2 : address.address2,
                                            postCode : address.postCode,
                                            city : address.city,
                                            province : address.province,
                                            countryCode : address.countryCode,
                                            //要傳遞id來做地址更新
                                            id: address.id
                                          }
                                      })
                                      //修改地址-開啟地址表單                                       
                                      $(document).ready(function(){
                                        $("#cancelSaveAdd_btn").show();
                                        $(".chectout_sect .delivery_newAddress_wrap").slideDown();
                                        $(".chectout_sect .delivery_details_wrap").slideUp();
                                      })                                                                           
                                   }}
                                   //刪除地址
                                   clickDeleteAddrBtn={async (values,deleteAddrId)=>{                                                                              
                                       const deliveryAddrId = values.delivery_address_radioGrp,
                                             deliveryMode = values.delivery_mode_radioGrp,
                                             deliveryTaxPay = values.delivery_taxPay_radioGrp

                                       if(deleteAddrId === deliveryAddrId){                                           
                                          //如果刪除了已選擇的寄出的地址，清除delivery_address_radioGrp，更新送貨表單的初始值。
                                          this.setState({
                                              ...this.state,
                                              deliveryAddrId:"",
                                              deliveryMode,
                                              deliveryTaxPay
                                          })
                                       }else{                                        
                                          //如果刪除的地址不是寄出的地址，維持delivery_address_radioGrp的值，更新送貨表單的初始值。
                                          this.setState({
                                              ...this.state,
                                              deliveryAddrId:deliveryAddrId,
                                              deliveryMode,
                                              deliveryTaxPay
                                          }) 
                                       }
                                       await this.deleteAddress(deleteAddrId)
                                       await this.fetchAddressbook();
                                   }}   
                                   handleDeliveryAddrChange={async (values, e)=>{//當點選地址，同步更新deliveryAddrId       
                                    const deliveryMode = values.delivery_mode_radioGrp,
                                          deliveryTaxPay = values.delivery_taxPay_radioGrp
                         
                                       this.setState({
                                           ...this.state,
                                           deliveryAddrId:e.target.value,  
                                           deliveryMode,
                                           deliveryTaxPay                                          
                                       })
                                   }}
                                   submit={async (values)=>{                                              
                                        //配送選擇 - 送貨服務 - 下一步                                                                             
                                        $('.chectout_deliver').removeClass("opened");
                                        $('.chectout_deliver').addClass("filled");    
                                        $('.chectout_payment').addClass("opened");  
                                        $(".chectout_payment .sectContent").slideDown(300);
                                        $(".chectout_deliver .sectContent").slideUp(300);
                                   }}
                                />                                
                                <DeliveryNewAddressWrap                                   
                                  rcptSl={this.getAddressInitialValue(editAddr.rcptSl)}                                   
                                  rcptFirstNam={this.getAddressInitialValue(editAddr.rcptFirstNam)}                                   
                                  rcptMobNbr={this.getAddressInitialValue(editAddr.rcptMobNbr)}
                                  address1={this.getAddressInitialValue(editAddr.address1)}
                                  address2={this.getAddressInitialValue(editAddr.address2)}
                                  countryCode={this.getAddressInitialValue(editAddr.countryCode)}
                                  addressId={this.getAddressInitialValue(editAddr.addressId)}
                                  handleCountryChange={ async (e,values) => {                                      
                                      const country = e.target.value;
                                      if(country === 'CN'){
                                          console.log('顯示中國大陸的Dialog')
                                          this.setState({
                                              ...this.state,
                                              isResetAddr:false,
                                              isShowChinaDialog:true,
                                              editAddr:{ //若地址有更新，要同步更新欄位的值。
                                                ...this.state.editAddr,
                                                rcptSl: values.rcptSl,
                                                rcptFirstNam : values.rcptFirstNam,
                                                rcptMobCtryCde : values.rcptMobCtryCde,
                                                rcptMobNbr : values.rcptMobNbr,
                                                address1 : values.address1,
                                                address2 : values.address2,
                                                postCode : values.postCode,
                                                city : values.city,
                                                province : values.province,
                                                countryCode : values.countryCode
                                              }
                                          })
                                      }else if(country === 'HK'){
                                           
                                      }
                                  }}
                                  submit={async (values, addressId)=>{                                    
                                    if(isNewAddr){
                                        //建立新的地址                                        
                                        await this.createAddress(values);
                                        await this.fetchAddressbook();
                                    }
                                    else{
                                        //更新舊有地址                                        
                                        await this.updateAddress(values, addressId);
                                        await this.fetchAddressbook();
                                    }
                                     //配送選擇 - 送貨服務 - 儲存地址
                                     $(".chectout_sect .delivery_newAddress_wrap").slideUp();
                                     $(".chectout_sect .delivery_details_wrap").slideDown();
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
        {this.state.isShowChinaDialog&&<TempOrderErrorPopup text="更改配送目的地" closeTempOrderFailByOutOfStock={()=>{
            this.setState({
                ...this.state,
                isShowChinaDialog:false,
                isResetAddr:true //當從中國Dialog返回時，清空地址欄位。
            })
        }} />}



    </div>
        )
    }
}
