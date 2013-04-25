/**
 * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
 * 1.value为string/number时表示元素为html文本内容.<br>
 * 2.value为Object时表示:<br>
 * 1).text表示元素为html文本内容.<br>
 * 2).title表示title.<br>
 * 3).value表示表单元素的值.
 */

var lang = {
    //常用语言对象
	week : {
		w0 : '星期日',
		w1 : '星期一',
		w2 : '星期二',
		w3 : '星期三',
		w4 : '星期四',
		w5 : '星期五',
		w6 : '星期六'
	},
    //通用语言对象
	_ : {
		userGroup : [ '系统管理员', '管理员', '普通用户' ],
		intRange : '请输入{0}~{1}之间的整数',
		selectEmpty:'请至少选择一项用于恢复出厂设置'
	},
    pageTitle : 'iTsai-l10n 客户端本地化工具',
    //示例:把需要在同一次本地化的HTML元素包装到同一个对象中
	demo : {
        //l_age 是需要本地化的HTML页面窗口的ID
		l_age : '年龄',
        title : '用户登录',
        //按键的显示文字和提示文字
		'btn-login' : {
			value : '登  录',
            title : '登录按键标题'
		},
        l_grade : '等级',
        //一次设置多个元素
        'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : '比特率',
        //设置下拉列表
        'lbl-select' : [ '最高', '高', '中', '低', '最低' ],
        //HTML文本
        'txt-warning' : '<div><b>重要警告：</b></div><div>1.&nbsp;在升级过程中您务必不要关闭工中断浏览器操作窗口，不要关闭设备电源或者重启设备。这些操作可能会升级失败，并造成系统无法启动和正常使用。 </div>'
	}
    //根据实现需要可以自行扩展
    //...
};