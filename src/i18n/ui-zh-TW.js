/**
 * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
 * 1.value为string/number时表示元素为html文本内容.<br>
 * 2.value为Object时表示:<br>
 * 1).text表示元素为html文本内容.<br>
 * 2).title表示title.<br>
 * 3).value表示表单元素的值.
 */

var lang = {
    //常用語言對象
    week : {
        w0 : '星期日',
        w1 : '星期一',
        w2 : '星期二',
        w3 : '星期三',
        w4 : '星期四',
        w5 : '星期五',
        w6 : '星期六'
    },
    //通用語言對象
    _ : {
        userGroup : [ '系統管理員', '管理員', '普通用戶' ],
        intRange : '請輸入{0}~{1}之間的整數',
        selectEmpty:'請至少選擇一項用於恢復出廠設置'
    },
    pageTitle : 'iTsai-l10n 客戶端本地化工具',
    //示例:把需要在同一次本地化的HTML元素包裝到同一個對像中
    demo : {
        //l_name 是需要本地化的HTML頁面窗口的ID
        l_age : '年齡',
        title : '用戶登錄',
        //按鍵的顯示文字和提示文字
        'btn-login' : {
            value : '登 錄',
            title : '登錄按鍵標題'
        },
        l_grade : '等級',
        //一次設置多個元素
        'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : '比特率',
        //設置下拉列表
        'lbl-select' : [ '最高', '高', '中', '低', '最低' ],
        //HTML文本
        'txt-warning' : '<div><b>重要警告：</b></div><div>1.&nbsp;在升級過程中您務必不要關閉工中斷瀏覽器操作窗口，不要關閉設備電源或者重啟設備。這些操作可能會升級失敗，並造成系統無法啟動和正常使用。 </div>'
    }
    //根據實現需要可以自行擴展
    //...
};