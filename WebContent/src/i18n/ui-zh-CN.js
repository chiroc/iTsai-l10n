/**
 * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
 * 1.value为string/number时表示元素为html文本内容.<br>
 * 2.value为Object时表示:<br>
 * 1).text表示元素为html文本内容.<br>
 * 2).title表示title.<br>
 * 3).value表示表单元素的值.
 */
var _ = {
	refresh : '刷新',
	save : '保存'
};
var l10n = {
	week : {
		w0 : '星期日',
		w1 : '星期一',
		w2 : '星期二',
		w3 : '星期三',
		w4 : '星期四',
		w5 : '星期五',
		w6 : '星期六'
	},
	_ : {
		connected : '已连接',
		disconnected : '未连接',
		refresh : '刷新',
		save : '保存',
		thisField : '此项',
		catalogprev : '28181通道编号',
		mute : '静音',
		volume : '音量',
		adminSys : '系统管理员',
		admin : '管理员',
		user : '普通用户',
		userGroup : [ '系统管理员', '管理员', '普通用户' ],
		on : '开启',
		off : '关闭',
		y : '有',
		n : '无',
		yes : '是',
		no : '否',
		run : '运行',
		stop : '停止',
		enable : '开启应用',
		disable : '关闭应用',
		ntpServer : 'NTP服务器',
		ntpInterval : 'NPT同步间隔',
		framerate : '帧率',
		bitrate : '比特率',
		subnetMask : '子网掩码',
		defaultGateway : '默认网关',
		domain : '域名',
		email : '邮件',
		port : '端口',
		userName : '用户名称',
		name : '设备名称',
		password : '密码',
		nameNeeded : '请输入用户名！',
		pwdNeeded : '请输入密码！',
		process : '数据处理中...',
		logging : '正在登录...',
		restore : '恢复出厂设置',
		reboot : '重启设备',
		backup : '备份数据',
		recoverSys : '恢复系统',
		upgradeFir : '升级固件',
		upgradeApp : '升级应用',
		mConf : '手动配置',
		aConf : '自动配置',
		mdfyPwd : '修改密码',
		del : '删除',
		download : '下载文件',
		noResponse : '服务器无响应...',
		errorResponse : '服务器响应数据错误！',
		lostCon : '与服务器失去连接！',
		confirmTodo : '参数设置后可能会导致设备重启，您确定要这样做？',
		confirmReset : '您确定要恢复出厂设置，这样会导致设备恢复到对应选项的初始状态？',
		confirmFormat : '您确定要格式化存储卡，这样将导致存储卡数据丢失？',
		confirmRestart : '您确定要重启设备,这样可能导致其他用户无法访问此设备？',
		confirmLogout : '您确定要退出系统？',
		confirmDelUser : '确定删除用户：',
		reLogin : '服务器即将重启，请重新登录...',
		networkSelect : '请选择一种网络设置方式',
		timesetSelect : '请选择一种时间设置方式',
		fileNeeded : '请选择上传文件！',
		noPermission : '您无权限添加用户',
		noPermissionDel : '您无权限删除用户',
		passportError : '用户名或密码不正确',
		mdfyPwdError : '只能修改自己的密码',
		uploadUrlError : '上传地址不存在！',
		formatError : '{0}格式不正确',
		posIntError : '{0}必须是正整数',
		emptyError : '{0}不能为空',
		emptyError2 : '不能为空',
		pwdMatch : '密码不一致',
		doingSth : '正在{0}，请稍等…',
		timeCompare : '开始时间必须小于结束时间',
		timeLess : '{0}，开始时间必须小于结束时间',
		timeGreater : '{0}，的结束时间必须大于开始时间',
		intRange : '请输入{0}~{1}之间的整数',
		characterLength : '{0}至少{1}个字符',
		minValue : '{0}最小值是{1}',
		maxValue : '{0}最大值是{1}',
		selectEmpty:'请至少选择一项用于恢复出厂设置'
	},
	login : {
		l_name : '用&nbsp;&nbsp;户',
		l_pwd : '密&nbsp;&nbsp;码',
		l_lang : '语&nbsp;&nbsp;言',
		l_login : {
			value : '登  录'
		},
		lbl_remember : '记住密码？',
		title : '用户登录'
	},
	main : {
		title : '管理控制台',
		av : '视频预览',
		setting : '系统设置',
		exit : '退出'
	},
	channels : {
		't-camera' : '摄像机',
		'chl-0' : {
			title : '打开视频',
			text : '高清'
		},
		'_default_channel' : {
			title : '打开视频',
			text : '标清'
		},
		'chl-2' : {
			title : '打开视频',
			text : '流畅'
		},
		'chl-0-2,#chl-1-2,#chl-2-2' : {
			title : '1/2 跳帧'
		},
		'chl-0-4,#chl-1-4,#chl-2-4' : {
			title : '1/4 跳帧'
		}
	},
	tools : {
		'relink' : {
			title : '重连'
		},
		'mute' : {
			title : '音量'
		},
		'talkback' : {
			title : '对讲'
		},
		'snapshot' : {
			title : '截图'
		},
		'record-local' : {
			title : '本地录像'
		},
		'full' : {
			title : '全屏'
		},
		'openpath,#openpath-record' : '打开路径',
		'setpath,#setpath-record' : '设置路径'
	},
	csc : {
		't-img' : '图像调整',
		'image_default' : {
			title : '恢复默认设置'
		},
		'c-bri,#slider_brightness' : {
			title : '亮度'
		},
		'c-chr,#slider_chroma' : {
			title : '色度'
		},
		'c-con,#slider_contrast' : {
			title : '对比度'
		},
		'c-sat,#slider_saturation' : {
			title : '饱和度'
		}
	},
	ptzctrl : {
		'lbl-ptzctrl' : '云台控制'
	},
	menu : {
		't-status' : '设备状态',
		'blk_status' : '运行状态',
		't-network' : '网络设置',
		'blk_lan' : '局域网',
		'blk_wifi' : 'WiFi无线网',
		't-cameraset' : '摄像机设置',
		'blk_osd' : '字符叠加',
		'blk_video' : '视频参数',
		'blk_audio' : '音频参数',
		'blk_vmd' : '移动侦测',
		'blk_daynight' : '日夜模式',
		'blk_inoutdoor' : '室内室外模式',
		't-alarmrecord' : '报警和录像',
		'blk_port' : 'IO端口',
		'blk_alarm' : 'IO报警联动',
		'blk_vlink' : '移动侦测联动',
		'blk_record' : '录像管理',
		't-system' : '系统设置',
		'blk_time' : '时间设置',
		'blk_user' : '用户管理',
		'blk_app' : '应用管理',
		'blk_upgrade' : '系统升级',
		'blk_maint' : '设备维护',
		't-other' : '其它配置',
		'blk_rds' : 'RMS服务器配置',
		'blk_sip' : 'SIP设置'
	},
	status : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '设备信息',
		't-2' : '以太网',
		't-3' : '存储卡',
		'lbl-name' : '名称：',
		'lbl-model' : '型号：',
		'lbl-sernum' : '序列号：',
		'lbl-ver' : '版本号：',
		'lbl-mode' : '网络模式：',
		'lbl-ip' : 'IP地址：',
		'lbl-mask' : '子网掩码：',
		'lbl-gateway' : '默认网关：',
		'lbl-mac' : 'MAC地址：',
		'lbl-dns1' : '首选DNS服务器：',
		'lbl-dns2' : '备用DNS服务器：',
		'lbl-upnp' : 'UPNP状态：',
		'lbl-pubip' : '公网IP地址：',
		'lbl-pppoe' : 'PPPoE状态：',
		'lbl-sd' : '存储卡状态：',
		'lbl-ddns' : 'DDNS状态：'
	},
	lan : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '网络设置',
		't-2' : 'DNS服务器',
		'btn-save-1' : '保存设置',
		'btn-save-2' : '保存设置',
		'lbl-autoip' : '自动获取IP地址',
		'lbl-manualip' : '手动配置IP地址',
		'lbl-ip' : 'IP地址：',
		'lbl-mask' : '子网掩码：',
		'lbl-gateway' : '默认网关：',
		'lbl-mac' : 'MAC地址：',
		'lbl-autodns' : '自动获取DNS服务器',
		'lbl-manualdns' : '手动配置DNS服务器',
		'lbl-dns1' : '首选DNS服务器：',
		'lbl-dns2' : '备用DNS服务器：'
	},
	wifi : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'WiFi设置',
		't-2' : 'WiFi网络参数',
		'lbl-wifi' : '开启无线网络：',
		'lbl-ssid' : '无线网络SSID：',
		'lbl-mode' : '无线网络模式：',
		'lbl-sec' : '加密协议：',
		'lbl-password' : '密&nbsp;码：',
		'lbl-wifis' : '无线网络列表：',
		'lbl-wifis-note' : '（双击编辑列表）',
		'th-1' : '加密协议',
		'th-2' : '网络模式',
		'th-3' : '需要密码',
		'th-4' : '信号强度',
		'lbl-ip' : 'IP地址：',
		'lbl-submask' : '子网掩码：',
		'lbl-gateway' : '默认网关',
		'lbl-mac' : 'MAC地址：',
		'btn-wifi-1' : '查看WiFi参数',
		'btn_wifi_refresh': {
			value:_.refresh
		},
		'btn-cancel':{
			value:'关闭'
		}
	},
	pppoe : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'PPPoE拨号设置',
		'lbl-pppoe' : '开启PPPoE：',
		'lbl-user' : '用&nbsp;户：',
		'lbl-pwd' : '密&nbsp;码：',
		'lbl-firewall' : '防火墙：',
		'lbl-1' : '当IP地址改变时通知用户'
	},
	ddns : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'DDNS设置',
		'lbl-ddns' : '开启DDNS：',
		'lbl-servicer' : 'DDNS服务商：',
		'lbl-domain' : '域&nbsp;名：',
		'lbl-user' : '用&nbsp;户：',
		'lbl-pwd' : '密&nbsp;码：',
		'lbl-update' : '更新时间：',
		'lbl-1' : '分钟（最小10；最大1440）',
		'lbl-2' : '服务器链接：'
	},
	ftp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'FTP设置',
		'lbl-ftp' : '开启FTP：',
		'lbl-server' : 'FTP服务器：',
		'lbl-port' : 'FTP端口：',
		'lbl-user' : '用&nbsp;户：',
		'lbl-pwd' : '密&nbsp;码：',
		'lbl-enc' : '加密方式',
		'ft_enc' : ['关闭','开启']
	},
	smtp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'SMTP设置',
		'lbl-smtp' : '开启SMTP：',
		'lbl-server' : 'SMTP服务器：',
		'lbl-port' : 'SMTP端口：',
		'lbl-sender' : '发件人：',
		'lbl-user' : '用&nbsp;户：',
		'lbl-pwd' : '密&nbsp;码：',
		'lbl-subject' : '主&nbsp;题：',
		'lbl-receiver' : '收件人：',
		'lbl-carbon1' : '抄送&nbsp;1：',
		'lbl-carbon2' : '抄送&nbsp;2：'
	},
	rds : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'RMS服务器设置',
		'lbl-rds' : '开启RMS接入：',
		'lbl-server' : 'RMS服务器IP',
		'lbl-port' : 'RMS端口：',
		'lbl-user' : 'RMS接入用户名：',
		'lbl-pwd' : 'RMS接入密码：'
	},
	sip : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'SIP服务器设置',
		'lbl-catalogprev' : '28181通道编号：',
		'lbl-listenport' : '监听端口：',
		'lbl-proxyip' : '服务器IP：',
		'lbl-proxyport' : '服务器端口：',
		'lbl-username' : '鉴权用户：',
		'lbl-password' : '鉴权密码：',
		'lbl-realm' : '鉴权摘要：',
		'lbl-expires' : '注册有效周期：',
		'lbl-expires-note' : '毫秒'
	},
	osd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '字符叠加设置',
		'lbl-channel' : '通道名称',
		'os_channel' : [ '高清', '标清', '流畅' ],
		'lbl-osd' : '开启字符叠加',
		'lbl-name' : '字符名称：',
		'lbl-position' : '显示内容位置：',
		'lbl-pos-0' : '左上',
		'lbl-pos-1' : '左下',
		'lbl-pos-2' : '右上',
		'lbl-pos-3' : '右下',
		'lbl-display' : '显示内容：',
		'lbl-display-0' : '摄像机名称',
		'lbl-display-1' : '日期时间',
		'lbl-display-2' : '星期',
		'lbl-format' : '日期时间格式：',
		'lbl-format-0' : 'yyyy-mm-dd&nbsp;&nbsp;时:分:秒',
		'lbl-format-1' : 'mm-dd-yyyy&nbsp;&nbsp;时:分:秒',
		'lbl-format-2' : 'yyyy年mm月dd日&nbsp;&nbsp;时:分:秒',
		'lbl-format-3' : 'mm月dd日yyyy年&nbsp;&nbsp;时:分:秒'
	},
	video : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		'btn-save-1,#btn-save-2,#btn-save-3' : '保存设置',
		't-1' : '高清',
		't-2' : '标清',
		't-3' : '流畅',
		'lbl-enc,#lbl-enc-1,#lbl-enc-2' : '编码方式：',
		'lbl-res,#lbl-res-1,#lbl-res-2' : '分辨率：',
		'lbl-ctrl,#lbl-ctrl-1,#lbl-ctrl-2' : '流控方式：',
		'lbl-quality,#lbl-quality-1,#lbl-quality-2' : '质&nbsp;量：',
		'lbl-profile,#lbl-profile-1,#lbl-profile-2' : 'Profile：',
		'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : '比特率：',
		'lbl-bitrate-note,#lbl-bitrate-1-note,#lbl-bitrate-2-note' : 'kbit/秒（16~40960）',
		'lbl-framerate,#lbl-framerate-1,#lbl-framerate-2' : '帧&nbsp;率：',
		'lbl-framerate-note,#lbl-framerate-1-note,#lbl-framerate-2-note' : '帧/秒（15~30）',
		'vi_ctrl,#vi_1_ctrl,#vi_2_ctrl' : [ '定码率', '变码率' ],
		'vi_quality,#vi_1_quality,#vi_2_quality' : [ '非常好', '很好', '好', '一般' ]
	},
	audio : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '音频设置',
		'lbl-enc' : '编码方式：',
		'lbl-asr' : '采样率：',
		'lbl-databit' : '数据位：',
		'lbl-track' : '声&nbsp;道：',
		'au_track' : [ '单声道', '双声道' ]
	},
	vmd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '移动侦测设置',
		'lbl-vmd' : '开启移动侦测：',
		'lbl-sens' : '灵敏度：',
		'lbl-area' : '区域设置：',
		'vm_clear' : '清空',
		'vm_selall' : '全选',
		'lbl-vm-note' : '（按住Ctrl选择多个区域）',
		'vm_sens' : [ '最高', '高', '中', '低', '最低' ],
		'vm_area' : [ '自定义区域', '全屏' ]
	},
	daynight : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '日夜模式设置',
		'lbl-enable' : '开启日夜模式：',
		'lbl-brightness' : '亮度阀值：'
	},
	inoutdoor : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '室内室外模式设置',
		'lbl-enable' : '开启室内室外模式：',
		'lbl-brightness' : '亮度阀值：'
	},
	port : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '报警输入端口设置',
		'lbl-in-channel' : '报警输入通道：',
		'lbl-in-enable' : '开启报警输入：',
		'lbl-in-mode' : '报警输入模式：',
		'po_in_channel' : [ '报警输入 1' ],
		'po_in_mode' : [ '常闭', '常开' ]
	},
	alarm : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '报警联动设置',
		'lbl-channel' : '报警输入通道：',
		'lbl-sd' : '存储卡：',
		'lbl-art' : '预录时间：',
		'lbl-art-note' : '秒（0~10）',
		'lbl-drt' : '延录时间：',
		'lbl-drt-note' : '秒（0~60）',
		'lbl-capture' : '抓&nbsp;拍：',
		'lbl-alarm' : '联动报警输出：',
		'lbl-alarmtime' : '布防时间：',
		'lbl-alarmtime-0' : '所有时间',
		'lbl-alarmtime-1' : '自定义时间',
		'al_channel' : [ '报警输入 1' ],
		'al_alarmtime_week' : [ '每天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',
				'星期日' ]
	},
	vlink : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '移动侦测联动设置',
		'lbl-sd' : '存储卡：',
		'lbl-art' : '预录时间：',
		'lbl-art-note' : '秒（0~10）',
		'lbl-drt' : '延录时间：',
		'lbl-drt-note' : '秒（0~60）',
		'lbl-capture' : '抓&nbsp;拍：',
		'lbl-alarm' : '联动报警输出：',
		'lbl-alarmtime' : '布防时间：',
		'lbl-alarmtime-0' : '所有时间',
		'lbl-alarmtime-1' : '自定义时间',
		'vl_alarmtime_week' : [ '每天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',
				'星期日' ]
	},
	record : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '录像设置',
		't-2' : '录像查询',
		'lbl-cirvideo' : '循环设置：',
		'lbl-strategy' : '录像策略：',
		'lbl-close' : '关闭录像',
		'lbl-allday' : '全天候录像',
		'lbl-timing' : '定时录像',
		'lbl-w0' : '星期日',
		'lbl-w1' : '星期一',
		'lbl-w2' : '星期二',
		'lbl-w3' : '星期三',
		'lbl-w4' : '星期四',
		'lbl-w5' : '星期五',
		'lbl-w6' : '星期六',
		'lbl-w0-ts,#lbl-w1-ts,#lbl-w2-ts,#lbl-w3-ts,#lbl-w4-ts,#lbl-w5-ts,#lbl-w6-ts' : '开始',
		'lbl-w0-te,#lbl-w1-te,#lbl-w2-te,#lbl-w3-te,#lbl-w4-te,#lbl-w5-te,#lbl-w6-te' : '结束',
		'lbl-sch-ts' : '开始时间：',
		'lbl-sch-te' : '结束时间：',
		're_sch_btn' : '查询录像',
		'th-1' : '文件名称',
		'th-2' : '文件路径',
		'th-3' : '操作',
		'lbl-first' : '首页',
		'lbl-prev' : '上一页',
		'lbl-next' : '下一页',
		'lbl-last' : '尾页',
		'lbl-no' : '第',
		'lbl-page' : '页',
		'lbl-all' : '共',
		'lbl-datas' : '条数据',
		'lbl-goto' : '&nbsp;&nbsp;转到'
	},
	time : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '系统时间设置',
		't-2' : 'NTP设置',
		'lbl-devtime' : '设备时间：',
		'lbl-timeset' : '时间设置：',
		'lbl-sync' : '同步当前PC时间',
		'lbl-manual' : '手动设置',
		'lbl-manual-note' : '（默认为当前系统时间）',
		'lbl-timezone' : '时&nbsp;区：',
		'lbl-ntp' : '开启NTP：',
		'lbl-server' : 'NTP服务器：',
		'lbl-interval' : 'NTP时间间隔：',
		'lbl-interval-note' : '小时',
		'btn-save-1,#btn-save-2' : '保存设置'
	},
	user : {
		'refresh' : {
			title : _.refresh
		},
		'btn_add_user_dlg' : {
			title : '添加用户'
		},
		't-1' : '用户列表',
		't-2' : '添加新用户',
		't-3' : '修改用户',
		'th-1' : '用户',
		'th-2' : '用户组',
		'th-3' : '操作',
		'lbl-group' : '用户组：',
		'lbl-name,#lbl-name-1' : '名&nbsp;&nbsp;称：',
		'lbl-pwd' : '密&nbsp;&nbsp;码：',
		'lbl-pwd-re,#lbl-pwd-re-1' : '确认密码：',
		'lbl-pwd-old' : '原始密码：',
		'lbl-pwd-new' : '新密码：',
		'btn_add_user' : {
			value : '添加'
		},
		'btn_mdfy_user' : {
			value : '修改'
		},
		'btn-cancel,#btn-cancel-1' : {
			value : '取消'
		},
		'us_group' : [ '普通用户', '管理员' ]
	},
	app : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '应用列表',
		'th-1' : '应用名称',
		'th-2' : '版本',
		'th-3' : '运行状态',
		'th-4' : '操作'
	},
	upgrade : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '恢复系统配置',
		't-2' : '固件升级',
		't-3' : '应用升级',
		'lbl-recover' : '使用备份文件恢复系统：',
		'app_rec_upload' : {
			value : '恢复系统'
		},
		'lbl-ver' : '当前系统版本：',
		'lbl-upgrade-file' : '固件升级文件：',
		'app_up_upload' : {
			value : '升级固件'
		},
		'lbl-upgrade-app' : '应用升级文件：',
		'app_up_upload_app' : {
			value : '升级应用'
		},
		'w-1' : '<div><b>重要警告：</b></div><div>1.&nbsp;请选择厂商提供的正确升级镜像文件，不正确的镜像文件会造成系统破坏，系统无法正常启动；</div><div>2.&nbsp;在升级过程中您务必不要关闭工中断浏览器操作窗口，不要关闭设备电源或者重启设备。这些操作可能会升级失败，并造成系统无法启动和正常使用。 </div>'
	},
	maint : {
		'refresh' : {
			title : _.refresh
		},
		'restart' : {
			title : '重启设备'
		},
		't-1' : '存储设备',
		't-2' : '出厂设置',
		't-3' : '设备参数',
		'lbl-sd' : '存储卡信息：',
		'lbl-fspace' : '剩余空间：',
		'lbl-space' : '总空间：',
		'lbl-fsize' : '录像文件大小：',
		'lbl-av' : '音视频',
		'lbl-record' : '录像',
		'lbl-system' : '系统',
		'lbl-all' : '全选',
		'lbl-name' : '设备名称：',
		'ma_format' : {
			value : '格式化存储卡'
		},
		'ma_reset' : {
			value : '恢复出厂设置'
		},
		'ma_update' : {
			value : '更新参数'
		}
	}
};