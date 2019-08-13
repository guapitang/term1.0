class List {
    constructor() {
        this.cont = document.querySelector(".botright ul");
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
        for(var i  = 0; i<6;i++){
            str += `<li>
                        <a href="yichaoxq.html"><img src="${this.res[i].url}"/></a>
                        <p>${this.res[i].name}</p>
                        <p class="money">${this.res[i].price}</p>
                        <div class="hidebox"><em>${this.res[i].tip}</em></div>
                    </li>`
        }
        console.log(str);
        
        
        // this.res.forEach((val) => {
        //     str += `<li>
        //                 <a href=""><img src="${val.url}"/></a>
        //                 <p>${val.name}</p>
        //                 <p class="money">${val.price}</p>
        //                 <div class="hidebox"><em>${val.tip}</em></div>
        //             </li>`
        // })
        this.cont.innerHTML = str;
    }
}

new List();