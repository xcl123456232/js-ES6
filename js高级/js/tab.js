var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.add = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul')
        this.fsections = this.main.querySelector('.tabscon')
        this.init();
    }
    init() {
            this.updateNode();
            this.add.onclick = this.addTab;
            // init 初始化操作让相关的元素绑定事件
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab;
            }
        }
        // 获取所有的小li 和section
    updateNode() {
            this.lis = this.main.querySelectorAll('li')
            this.sections = this.main.querySelectorAll('section')
        }
        // 1. 切换功能
    toggleTab() {
            console.log(this.index);
            that.clearClass();
            this.className = 'liactive';
            that.sections[this.index].className = 'conactive';
        }
        // 清除所有li 和section 的类
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            that.lis[i].className = '';
            that.sections[i].className = '';
        }
    }
    addTab() {
        that.clearClass()
        var random = Math.random();
        // 1.创建li元素和section元素
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
            // console.log('1111');
        that.ul.insertAdjacentHTML('beforeend', li)
        var section = '<section class="conactive">测试1' + random + '</section>'
        that.fsections.insertAdjacentHTML('beforeend', section)
        that.init()
    }
}
new Tab('#tab');