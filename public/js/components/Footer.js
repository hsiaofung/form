'use strict';
//require('../_footer.css');

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return(

    <div class="content">
        <div class="row footer_top_wrap">
            <div class="col-6 col-md-3">
                <div class="siteMapPart_wrap">
                    <div class="title">關於我們</div>
                    <div><a href="about.html">品牌概念</a></div>
                    <div><a href="experience.html">購物體驗</a></div>
                    <div><a href="store-locator.html">分店位置</a></div>
                    <div><a href="contact-us.html">聯絡我們</a></div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="siteMapPart_wrap">
                    <div class="title">產品</div>
                    <div><a href="all-products.html">全部商品</a></div>
                    <div><a href="collections.html">產品系列</a></div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="siteMapPart_wrap">
                    <div class="title">客戶服務</div>
                    <div><a href="member.html">會員</a></div>
                    <div><a href="online-shopping.html">線上購物</a></div>
                    <div><a href="return-exchange.html">退貨及換貨</a></div>
                    <div><a href="help.html">幫助</a></div>
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="siteMapPart_wrap">
                    <div class="title">關注我們</div>
                    <div>
                        <a class="iconLink" href="#"><span class="icon icon-googlePlus"></span></a> 
                        <a class="iconLink" href="#"><span class="icon icon-twitter"></span></a> 
                        <a class="iconLink" href="https://www.facebook.com/emphasis.hk/" target="_blank"><span class="icon icon-facebook"></span></a> 
                        <a class="iconLink" href="#"><span class="icon icon-pinterest"></span></a>
                    </div>
                </div>
            </div>

        </div>

        <div class="footer_btm_wrap">
            <img class="icon-logo-graphic" src="../images/footer/icon-logo-graphic.svg" alt="" />

            <div class="footer_grps footer_grps--highlight">
                <div class="footer_grp">
                    <a href="../tc/contact-us/">聯絡我們</a>
                </div>
                <div class="footer_grp">
                    客戶服務: <a href="tel:+85221923228">+852 2192 3228</a>
                </div>
            </div>
            <div class="footer_grps">
                <div class="footer_grp footer_grp--tnc">
                    <a href="//member.emphasis.com/hk/tc/terms-of-use.php" target="_blank">使用條款</a>
                </div>
                <div class="footer_grp footer_grp--tnc">
                    <a href="//member.emphasis.com/hk/tc/privacy-policy.php" target="_blank">私隱政策</a>
                </div>
                <div class="footer_grp footer_grp--tnc">
                    <a href="//member.emphasis.com/hk/tc/cookie-policy.php" target="_blank">Cookie政策</a>
                </div>
                <div class="footer_grp footer_grp--tnc footer_grp--mb-last">
                    <a href="//member.emphasis.com/hk/tc/terms-and-conditions.php" target="_blank">條款及細則</a>
                </div>
                <div class="footer_grp footer_grp--mb-full">
                    &#169; 2019 周生生集團國際有限公司
                </div>
                <div class="footer_grp">
                    <p>粤ICP备12061196号-2</p>
                </div>
            </div>
        </div>



    </div>
    );
  }
}

let domContainer = document.querySelector('#footer');
ReactDOM.render(<Footer />, domContainer);