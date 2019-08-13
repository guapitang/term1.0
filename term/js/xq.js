class List {
    constructor() {
        this.cont = document.querySelector(".trunkmid");
        this.url = "http://localhost/term/data/goods.json";

        this.load();
        this.addEvend();
    }
    addEvend() {
        var that = this;
        this.cont.addEventListener("click", function (eve) {
            if (eve.target.className == "btn") {
                that.id = eve.target.parentNode.getAttribute("qwe");
                that.setCookie();
            }
        })
    }
    setCookie() {
        this.goods = getCookie("goods") ? JSON.parse(getCookie("goods")) : [];
        if (this.goods.length == 0) {
            this.goods.push({
                id: this.id,
                num: 1
            })
        } else {
            var i = 0;
            var onoff = this.goods.some((val, index) => {
                i = index;
                return val.id == this.id;

            })
            if (onoff) {
                this.goods[i].num++
            } else {
                this.goods.push({
                    id: this.id,
                    num: 1
                })
            }
        }
        setCookie("goods", JSON.stringify(this.goods));
    }

    load() {
        var that = this;
        ajaxGet(this.url, function (res) {
            that.res = JSON.parse(res);
            that.display();
        })
    }
    display() {
        console.log(this.res)
        var str = "";
        // for (var i = 0; i < 6; i++) {
        //     str += `<li>
        //                 <a href="yichaoxq.html"><img src="${this.res[i].url}"/></a>
        //                 <p>${this.res[i].name}</p>
        //                 <p class="money">${this.res[i].price}</p>
        //                 <div class="hidebox"><em>${this.res[i].tip}</em></div>
        //             </li>`
        // }
        // console.log(str);


        this.res.forEach((val) => {
            str += `<strong>${val.name}</strong>
                    <p>
                        <span>零售价￥</span>
                        <span class="red">${val.price}</span>
                        <span>市场价</span>
                        <span class="sc">￥916.00</span>
                    </p>
                    <ul class="pinjia">
                        <li>累计评价<span>0</span></li>
                        <li>好评度<span>100%</span></li>
                        <li>送积分<span>458</span></li>
                    </ul>
                    <p class="yanse">镜框颜色 <a>C1黑</a><a>C2灰</a><a>咖啡色</a><a>深蓝色</a></p>`
        })
        this.cont.innerHTML = str;
    }
}

new List();