/**
 * 客户端本地化工具
 *  当前库依赖第三方库：
 *  1).jQuery（v1.7.x）。详细了解：http://jquery.com/
 * @author Chihpeng Tsai(470597142@qq.com)
 * git: https://github.com/iiTsai
 * osc: http://my.oschina.net/tsai
 * @method ()
 */

/**
 * itl为顶层入口对象
 * @module itl
 */
var itl = {
    /**
     * 当前库版本
     * @type {String}
     * @property version
     * @namespace itl
     */
    version : '0.1.0',
    /**
     * 语言代码：zh-CN/zh-TW/en
     * @type {String}
     * @default 'zh-CN'
     * @property lang
     */
    lang : 'zh-CN',
    /**
     * 查询范围：jQuery对象
     * @type {String}
     * @property scope
     */
    scope : null,
    /**
     * 初始化语言代码
     *
     * @method init
     * @param {String} lang
     * @return {Object} itl
     */
    init : function(lang) {
        this.lang = lang || 'zh-CN';
        return this;
    },
    /**
     * 获取浏览器语言代码,如:'zh-CN'
     *
     * @method getLang
     * @return {String} 语言代码
     */
    getLang : function() {
        var nav = window.navigator;
        return (nav.language || nav.userLanguage);
    },
    /**
     * 设置查询范围
     *
     * @method scope
     * @param {Object} element jQuery对象,本地化查询范围
     * @return {Object} itl
     */
    scope : function(element) {
        this.scope = element;
        return this;
    },
    /**
     * 设置页面标题
     *
     * @method setTitle
     * @param {String} title 页面标题
     * @return {Object} itl
     */
    setTitle : function(title) {
        document.title = title;
        return this;
    },
    /**
     * 替换元素文本内容
     *
     * @method l
     * @param {Object} target 查询目标
     * @param {String} text 替换内容
     * @param {Object} scope 查询范围
     * @return {Object} itl
     */
    l : function(target, text, scope) {
        var s = scope || this.scope, els = [];
        if (s) {
            els = s.find('#' + target);
        } else {
            els = $('#' + target);
        }
        if (els[0]) {
            for ( var i = 0, len = els.length; i < len; i++) {
                var el = $(els[i]);
                // 处理选择列表控件
                if (el.get(0).tagName == "SELECT") {
                    el.find('option').each(function(i) {
                        $(this).text(text[i]);
                    });
                } else {
                    el.html(text);
                }
            }
        }
        return this;
    },
    /**
     * 替换元素提示标题
     *
     * @method lt
     * @param {Object} target 查询目标
     * @param {String} title 替换内容
     * @param {Object} scope 查询范围
     * @return {Object} itl
     */
    lt : function(target, title, scope) {
        var s = scope || this.scope;
        if (s) {
            s.find('#' + target).attr('title', title);
        } else {
            $('#' + target).attr('title', title);
        }
        return this;
    },
    /**
     *
     * 替换元素value值
     *
     * @method lv
     * @param {Object} target 查询目标
     * @param {String} value 替换内容
     * @param {Object} scope 查询范围
     * @return {Object} itl
     */
    lv : function(target, value, scope) {
        var s = scope || this.scope;
        if (s) {
            s.find('#' + target).val(value);
        } else {
            $('#' + target).val(value);
        }
        return this;
    },
    /**
     * 批量本地化接口<br>
     * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
     * 1.value为string/number时表示元素为html文本内容.<br>
     * 2.value为Object时表示:<br>
     * 1).text表示元素为html文本内容.<br>
     * 2).title表示title.<br>
     * 3).value表示表单元素的值.
     *
     * @method l10n
     * @param {Object} dicts 词典
     * @param {Object} scope 查询范围
     * @return {Object} itl
     */
    l10n : function(dicts, scope) {
        var thiz = this, s = scope || thiz.scope;
        for ( var k in dicts) {
            // var e = s.find('[l10n=' + k + ']');
            // var tag = e.get(0).tagName;
            var v = dicts[k];// ::string/number/object元素对象
            if ((typeof v == "object") && !$.isArray(v)) {
                if (v.text) {
                    thiz.l(k, v.text, s);
                }
                if (v.title) {
                    thiz.lt(k, v.title, s);
                }
                if (v.value) {
                    thiz.lv(k, v.value, s);
                }
            } else {
                thiz.l(k, v, s);
            }
        }
        return this;
    },
    /**
     * 格式化字符串：用除第一个字符串之外的后续参数替换对应编号的{n}参数(n是从0开始的正整数).<br>
     * 如：format('示例参数:{0}-{1}',100,200) => '示例参数:100-200'
     *
     * @method format
     * @return {String} s
     */
    format : function() {
        var s = '';
        if (arguments.length) {
            if (arguments.length == 1) {
                return arguments[0];
            }
            s = arguments[0];
            for ( var i = 1, len = arguments.length; i < len; i++) {
                s = s.replace('{' + (i - 1) + '}', arguments[i]);
            }
        }
        return s;
    }
};
(function() {
    itl.lang = itl.getLang();
})();