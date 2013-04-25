/**
 * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
 * 1.value为string/number时表示元素为html文本内容.<br>
 * 2.value为Object时表示:<br>
 * 1).text表示元素为html文本内容.<br>
 * 2).title表示title.<br>
 * 3).value表示表单元素的值.
 */
var lang = {
    week : {
        w0 : 'Sunday',
        w1 : 'Monday',
        w2 : 'Tuesday',
        w3 : 'Wednesday',
        w4 : 'Thursday',
        w5 : 'Friday',
        w6 : 'Saturday'
    },
    _ : {
        userGroup : [ 'System administrator', 'Administrator', 'User' ],
        intRange : 'Please enter an integer between {0} to {1}.',
        selectEmpty : 'Please select at least one used to restore the factory settings.'
    },
    pageTitle : 'iTsai-l10n Client localization tools',
    demo : {
        l_age : 'age',
        title : 'User Login',
        'btn-login' : {
            value : 'Log in',
            title : 'Login title'
        },
        l_grade : 'grade',
        'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : 'Bit rate',
        'lbl-select' : [ 'highest', 'high', 'medium', 'low', 'minimum' ],
        'txt-warning' : '<div><b>WARNING:</b></div><div>1.&nbsp;During the upgrade process, you sure you do not turn off the workers interrupt the operating window of the browser, do not turn off the power to the device or reboot the device. These operations may upgrade failed and caused the system will not boot and normal use.</div>'
    }
};