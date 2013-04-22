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
		connected : '已連接',
		disconnected : '未連接',
		refresh : '刷新',
		save : '保存',
		thisField : '此項',
		catalogprev : '28181通道編號',
		mute : '靜音',
		volume : '音量',
		adminSys : '系統管理員',
		admin : '管理員',
		user : '普通用戶',
		userGroup : [ '系統管理員', '管理員', '普通用戶' ],
		on : '開啟',
		off : '關閉',
		y : '有',
		n : '無',
		yes : '是',
		no : '否',
		run : '運行',
		stop : '停止',
		enable : '開啟應用',
		disable : '關閉應用',
		ntpServer : 'NTP服務器',
		ntpInterval : 'NPT同步間隔',
		framerate : '幀率',
		bitrate : '比特率',
		subnetMask : '子網掩碼',
		defaultGateway : '默認網關',
		domain : '域名',
		email : '郵件',
		port : '端口',
		userName : '用戶名稱',
		name : '設備名稱',
		password : '密碼',
		nameNeeded : '請輸入用戶名！ ',
		pwdNeeded : '請輸入密碼！ ',
		process : '數據處理中...',
		logging : '正在登錄...',
		restore : '恢復出廠設置',
		reboot : '重啟設備',
		backup : '備份數據',
		recoverSys : '恢復系統',
		upgradeFir : '升級固件',
		upgradeApp : '升級應用',
		mConf : '手動配置',
		aConf : '自動配置',
		mdfyPwd : '修改密碼',
		del : '刪除',
		download : '下載文件',
		noResponse : '服務器無響應...',
		errorResponse : '服務器響應數據錯誤！ ',
		lostCon : '與服務器失去連接！ ',
		confirmTodo : '參數設置後可能會導致設備重啟，您確定要這樣做？ ',
		confirmReset : '您確定要恢復出廠設置，這樣會導致設備恢復到對應選項的初始狀態？ ',
		confirmFormat : '您確定要格式化存儲卡，這樣將導致存儲卡數據丟失？ ',
		confirmRestart : '您確定要重啟設備,這樣可能導致其他用戶無法訪問此設備？ ',
		confirmLogout : '您確定要退出系統？ ',
		confirmDelUser : '確定刪除用戶：',
		reLogin : '服務器即將重啟，請重新登錄...',
		networkSelect : '請選擇一種網絡設置方式',
		timesetSelect : '請選擇一種時間設置方式',
		fileNeeded : '請選擇上傳文件！ ',
		noPermission : '您無權限添加用戶',
		noPermissionDel : '您無權限刪除用戶',
		passportError : '用戶名或密碼不正確',
		mdfyPwdError : '只能修改自己的密碼',
		uploadUrlError : '上傳地址不存在！ ',
		formatError : '{0}格式不正確',
		posIntError : '{0}必須是正整數',
		emptyError : '{0}不能為空',
		emptyError2 : '不能為空',
		pwdMatch : '密碼不一致',
		doingSth : '正在{0}，請稍等…',
		timeCompare : '開始時間必須小於結束時間',
		timeLess : '{0}，的開始時間必須小於結束時間',
		timeGreater : '{0}，結束時間必須大於開始時間',
		intRange : '請輸入{0}~{1}之間的整數',
		characterLength : '{0}至少{1}個字符',
		minValue : '{0}最小值是{1}',
		maxValue : '{0}最大值是{1}',
		selectEmpty : '請至少選擇一項用於恢復出廠設置'
	},
	login : {
		l_name : '用&nbsp;&nbsp;戶',
		l_pwd : '密&nbsp;&nbsp;碼',
		l_lang : '語&nbsp;&nbsp;言',
		l_login : {
			value : '登  錄'
		},
		lbl_remember : '記住密碼？ ',
		title : '用戶登錄'
	},
	main : {
		title : '管理控制台',
		av : '視頻預覽',
		setting : '系統設置',
		exit : '退出'
	},
	channels : {
		't-camera' : '攝像機',
		'chl-0' : {
			title : '打開視頻',
			text : '高清'
		},
		'_default_channel' : {
			title : '打開視頻',
			text : '標清'
		},
		'chl-2' : {
			title : '打開視頻',
			text : '流暢'
		},
		'chl-0-2,#chl-1-2,#chl-2-2' : {
			title : '1/2 跳幀'
		},
		'chl-0-4,#chl-1-4,#chl-2-4' : {
			title : '1/4 跳幀'
		}
	},
	tools : {
		'relink' : {
			title : '重連'
		},
		'mute' : {
			title : '音量'
		},
		'talkback' : {
			title : '對講'
		},
		'snapshot' : {
			title : '截圖'
		},
		'record-local' : {
			title : '本地錄像'
		},
		'full' : {
			title : '全屏'
		},
		'openpath,#openpath-record' : '打開路徑',
		'setpath,#setpath-record' : '設置路徑'
	},
	csc : {
		't-img' : '圖像調整',
		'image_default' : {
			title : '恢復默認設置'
		},
		'c-bri,#slider_brightness' : {
			title : '亮度'
		},
		'c-chr,#slider_chroma' : {
			title : '色度'
		},
		'c-con,#slider_contrast' : {
			title : '對比度'
		},
		'c-sat,#slider_saturation' : {
			title : '飽和度'
		}
	},
	ptzctrl : {
		'lbl-ptzctrl' : '雲台控制'
	},
	menu : {
		't-status' : '設備狀態',
		'blk_status' : '運行狀態',
		't-network' : '網絡設置',
		'blk_lan' : '局域網',
		'blk_wifi' : 'WiFi無線網',
		't-cameraset' : '攝像機設置',
		'blk_osd' : '字符疊加',
		'blk_video' : '視頻參數',
		'blk_audio' : '音頻參數',
		'blk_vmd' : '移動偵測',
		'blk_daynight' : '日夜模式',
		'blk_inoutdoor' : '室內室外模式',
		't-alarmrecord' : '報警和錄像',
		'blk_port' : 'IO端口',
		'blk_alarm' : 'IO報警聯動',
		'blk_vlink' : '移動偵測聯動',
		'blk_record' : '錄像管理',
		't-system' : '系統設置',
		'blk_time' : '時間設置',
		'blk_user' : '用戶管理',
		'blk_app' : '應用管理',
		'blk_upgrade' : '系統升級',
		'blk_maint' : '設備維護',
		't-other' : '其它配置',
		'blk_rds' : 'RMS服務器配置',
		'blk_sip' : 'SIP設置'
	},
	status : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '設備信息',
		't-2' : '以太網',
		't-3' : '存儲卡',
		'lbl-name' : '名稱：',
		'lbl-model' : '型號：',
		'lbl-sernum' : '序列號：',
		'lbl-ver' : '版本號：',
		'lbl-mode' : '網絡模式：',
		'lbl-ip' : 'IP地址：',
		'lbl-mask' : '子網掩碼：',
		'lbl-gateway' : '默認網關：',
		'lbl-mac' : 'MAC地址：',
		'lbl-dns1' : '首選DNS服務器：',
		'lbl-dns2' : '備用DNS服務器：',
		'lbl-upnp' : 'UPNP狀態：',
		'lbl-pubip' : '公網IP地址：',
		'lbl-pppoe' : 'PPPoE狀態：',
		'lbl-sd' : '存儲卡狀態：',
		'lbl-ddns' : 'DDNS狀態：'
	},
	lan : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '網絡設置',
		't-2' : 'DNS服務器',
		'btn-save-1' : '保存設置',
		'btn-save-2' : '保存設置',
		'lbl-autoip' : '自動獲取IP地址',
		'lbl-manualip' : '手動配置IP地址',
		'lbl-ip' : 'IP地址：',
		'lbl-mask' : '子網掩碼：',
		'lbl-gateway' : '默認網關：',
		'lbl-mac' : 'MAC地址：',
		'lbl-autodns' : '自動獲取DNS服務器',
		'lbl-manualdns' : '手動配置DNS服務器',
		'lbl-dns1' : '首選DNS服務器：',
		'lbl-dns2' : '備用DNS服務器：'
	},
	wifi : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'WiFi設置',
		't-2' : 'WiFi網絡參數',
		'lbl-wifi' : '開啟無線網絡：',
		'lbl-ssid' : '無線網絡SSID：',
		'lbl-mode' : '無線網絡模式：',
		'lbl-sec' : '加密協議：',
		'lbl-password' : '密&nbsp;碼：',
		'lbl-wifis' : '無線網絡列表：',
		'lbl-wifis-note' : '（雙擊編輯列表）',
		'th-1' : '加密協議',
		'th-2' : '網絡模式',
		'th-3' : '需要密碼',
		'th-4' : '信號強度',
		'lbl-ip' : 'IP地址：',
		'lbl-submask' : '子網掩碼：',
		'lbl-gateway' : '默認網關：',
		'lbl-mac' : 'MAC地址：',
		'btn-wifi-1' : '查看WiFi參數',
		'btn_wifi_refresh' : {
			value : _.refresh
		},
		'btn-cancel' : {
			value : '關閉'
		}
	},
	pppoe : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'PPPoE撥號設置',
		'lbl-pppoe' : '開啟PPPoE：??',
		'lbl-user' : '用&nbsp;戶：',
		'lbl-pwd' : '密&nbsp;碼：',
		'lbl-firewall' : '防火牆：',
		'lbl-1' : '當IP地址改變時通知用戶'
	},
	ddns : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'DDNS設置',
		'lbl-ddns' : '開啟DDNS：',
		'lbl-servicer' : 'DDNS服務商：',
		'lbl-domain' : '域&nbsp;名：',
		'lbl-user' : '用&nbsp;戶：',
		'lbl-pwd' : '密&nbsp;碼：',
		'lbl-update' : '更新時間：',
		'lbl-1' : '分鐘（最小10；最大1440）',
		'lbl-2' : '服務器鏈接：'
	},
	ftp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'FTP設置',
		'lbl-ftp' : '開啟FTP：',
		'lbl-server' : 'FTP服務器：',
		'lbl-port' : 'FTP端口：',
		'lbl-user' : '用&nbsp;戶：',
		'lbl-pwd' : '密&nbsp;碼：',
		'lbl-enc' : '加密方式',
		'ft_enc' : [ '關閉', '開啟' ]
	},
	smtp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'SMTP設置',
		'lbl-smtp' : '開啟SMTP：',
		'lbl-server' : 'SMTP服務器：',
		'lbl-port' : 'SMTP端口：',
		'lbl-sender' : '發件人：',
		'lbl-user' : '用&nbsp;戶：',
		'lbl-pwd' : '密&nbsp;碼：',
		'lbl-subject' : '主&nbsp;題：',
		'lbl-receiver' : '收件人：',
		'lbl-carbon1' : '抄送&nbsp;1：',
		'lbl-carbon2' : '抄送&nbsp;2：'
	},
	rds : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'RMS服務器設置',
		'lbl-rds' : '開啟RMS接入：',
		'lbl-server' : 'RMS服務器IP',
		'lbl-port' : 'RMS端口：',
		'lbl-user' : 'RMS接入用戶名：',
		'lbl-pwd' : 'RMS接入密碼：'
	},
	sip : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'SIP服務器設置',
		'lbl-catalogprev' : '28181通道編號：',
		'lbl-listenport' : '監聽端口：',
		'lbl-proxyip' : '服務器IP：',
		'lbl-proxyport' : '服務器端口：',
		'lbl-username' : '鑑權用戶：',
		'lbl-password' : '鑑權密碼：',
		'lbl-realm' : '鑑權摘要：',
		'lbl-expires' : '註冊有效週期：',
		'lbl-expires-note' : '毫秒'
	},
	osd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '字符疊加設置',
		'lbl-channel' : '通道名稱',
		'os_channel' : [ '高清', '標清', '流暢' ],
		'lbl-osd' : '開啟字符疊加',
		'lbl-name' : '字符名稱：',
		'lbl-position' : '顯示內容位置：',
		'lbl-pos-0' : '左上',
		'lbl-pos-1' : '左下',
		'lbl-pos-2' : '右上',
		'lbl-pos-3' : '右下',
		'lbl-display' : '顯示內容：',
		'lbl-display-0' : '攝像機名稱',
		'lbl-display-1' : '日期時間',
		'lbl-display-2' : '星期',
		'lbl-format' : '日期時間格式：',
		'lbl-format-0' : 'yyyy-mm-dd&nbsp;&nbsp;時:分:秒',
		'lbl-format-1' : 'mm-dd-yyyy&nbsp;&nbsp;時:分:秒',
		'lbl-format-2' : 'yyyy年mm月dd日&nbsp;&nbsp;時:分:秒',
		'lbl-format-3' : 'mm月dd日yyyy年&nbsp;&nbsp;時:分:秒'
	},
	video : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		'btn-save-1,#btn-save-2,#btn-save-3' : '保存設置',
		't-1' : '高清',
		't-2' : '標清',
		't-3' : '流暢',
		'lbl-enc,#lbl-enc-1,#lbl-enc-2' : '編碼方式：',
		'lbl-res,#lbl-res-1,#lbl-res-2' : '分辨率：',
		'lbl-ctrl,#lbl-ctrl-1,#lbl-ctrl-2' : '流控方式：',
		'lbl-quality,#lbl-quality-1,#lbl-quality-2' : '質&nbsp;量：',
		'lbl-profile,#lbl-profile-1,#lbl-profile-2' : 'Profile：',
		'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : '比特率：',
		'lbl-bitrate-note,#lbl-bitrate-1-note,#lbl-bitrate-2-note' : 'kbit/秒（16~40960）',
		'lbl-framerate,#lbl-framerate-1,#lbl-framerate-2' : '幀&nbsp;率：',
		'lbl-framerate-note,#lbl-framerate-1-note,#lbl-framerate-2-note' : '幀/秒（15~30）',
		'vi_ctrl,#vi_1_ctrl,#vi_2_ctrl' : [ '定碼率', '變碼率' ],
		'vi_quality,#vi_1_quality,#vi_2_quality' : [ '非常好', '很好', '好', '一般' ]
	},
	audio : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '音頻設置',
		'lbl-enc' : '編碼方式：',
		'lbl-asr' : '採樣率：',
		'lbl-databit' : '數據位：',
		'lbl-track' : '聲&n??bsp;道：',
		'au_track' : [ '單聲道', '雙聲道' ]
	},
	vmd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '移動偵測設置',
		'lbl-vmd' : '開啟移動偵測：',
		'lbl-sens' : '靈敏度：',
		'lbl-area' : '區域設置：',
		'vm_clear' : '清空',
		'vm_selall' : '全選',
		'lbl-vm-note' : '（按住Ctrl選擇多個區域）',
		'vm_sens' : [ '最高', '高', '中', '低', '最低' ],
		'vm_area' : [ '自定義區域', '全屏' ]
	},
	daynight : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '日夜模式設置',
		'lbl-enable' : '開啟日夜模式：',
		'lbl-brightness' : '亮度閥值：'
	},
	inoutdoor : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : '室內室外模式設置',
		'lbl-enable' : '開啟室內室外模式：',
		'lbl-brightness' : '亮度閥值：'
	},
	port : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '報警輸入端口設置',
		'lbl-in-channel' : '報警輸入通道：',
		'lbl-in-enable' : '開啟報警輸入：',
		'lbl-in-mode' : '報警輸入模式：',
		'po_in_channel' : [ '報警輸入 1' ],
		'po_in_mode' : [ '常閉', '常開' ]
	},
	alarm : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '報警聯動設置',
		'lbl-channel' : '報警輸入通道：',
		'lbl-sd' : '存儲卡：',
		'lbl-art' : '預錄時間：',
		'lbl-art-note' : '秒（0~10）',
		'lbl-drt' : '延錄時間：',
		'lbl-drt-note' : '秒（0~60）',
		'lbl-capture' : '抓&nbsp;拍：',
		'lbl-alarm' : '聯動報警輸出：',
		'lbl-alarmtime' : '布防時間：',
		'lbl-alarmtime-0' : '所有時間',
		'lbl-alarmtime-1' : '自定義時間',
		'al_channel' : [ '報警輸入 1' ],
		'al_alarmtime_week' : [ '每天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',
				'星期日' ]
	},
	vlink : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '移動偵測聯動設置',
		'lbl-sd' : '存儲卡：',
		'lbl-art' : '預錄時間：',
		'lbl-art-note' : '秒（0~10）',
		'lbl-drt' : '延錄時間：',
		'lbl-drt-note' : '秒（0~60）',
		'lbl-capture' : '抓&nbsp;拍：',
		'lbl-alarm' : '聯動報警輸出：',
		'lbl-alarmtime' : '布防時間：',
		'lbl-alarmtime-0' : '所有時間',
		'lbl-alarmtime-1' : '自定義時間',
		'vl_alarmtime_week' : [ '每天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六',
				'星期日' ]
	},
	record : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '錄像設置',
		't-2' : '錄像查詢',
		'lbl-cirvideo' : '循環設置：',
		'lbl-strategy' : '錄像策略：',
		'lbl-close' : '關閉錄像',
		'lbl-allday' : '全天候錄像',
		'lbl-timing' : '定時錄像',
		'lbl-w0' : '星期日',
		'lbl-w1' : '星期一',
		'lbl-w2' : '星期二',
		'lbl-w3' : '星期三',
		'lbl-w4' : '星期四',
		'lbl-w5' : '星期五',
		'lbl-w6' : '星期六',
		'lbl-w0-ts,#lbl-w1-ts,#lbl-w2-ts,#lbl-w3-ts,#lbl-w4-ts,#lbl-w5-ts,#lbl-w6-ts' : '開始',
		'lbl-w0-te,#lbl-w1-te,#lbl-w2-te,#lbl-w3-te,#lbl-w4-te,#lbl-w5-te,#lbl-w6-te' : '結束',
		'lbl-sch-ts' : '開始時間：',
		'lbl-sch-te' : '結束時間：',
		're_sch_btn' : '查詢錄像',
		'th-1' : '文件名稱',
		'th-2' : '文件路徑',
		'th-3' : '操作',
		'lbl-first' : '首頁',
		'lbl-prev' : '上一頁',
		'lbl-next' : '下一頁',
		'lbl-last' : '尾頁',
		'lbl-no' : '第',
		'lbl-page' : '頁',
		'lbl-all' : '共',
		'lbl-datas' : '條數據',
		'lbl-goto' : '&nbsp;&nbsp;轉到'
	},
	time : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : '系統時間設置',
		't-2' : 'NTP設置',
		'lbl-devtime' : '設備時間：',
		'lbl-timeset' : '時間設置：',
		'lbl-sync' : '同步當前PC時間',
		'lbl-manual' : '手動設置',
		'lbl-manual-note' : '（默認為當前系統時間）',
		'lbl-timezone' : '時&nbsp;區：',
		'lbl-ntp' : '開啟NTP：',
		'lbl-server' : 'NTP服務器：',
		'lbl-interval' : 'NTP時間間隔：',
		'lbl-interval-note' : '小時',
		'btn-save-1,#btn-save-2' : '保存設置'
	},
	user : {
		'refresh' : {
			title : _.refresh
		},
		'btn_add_user_dlg' : {
			title : '添加用戶'
		},
		't-1' : '用戶列表',
		't-2' : '添加新用戶',
		't-3' : '修改用戶',
		'th-1' : '用戶',
		'th-2' : '用戶組',
		'th-3' : '操作',
		'lbl-group' : '用戶組：',
		'lbl-name,#lbl-name-1' : '名&nbsp;&nbsp;稱：',
		'lbl-pwd' : '密&nbsp;&nbsp;碼：',
		'lbl-pwd-re,#lbl-pwd-re-1' : '確認密碼：',
		'lbl-pwd-old' : '原始密碼：',
		'lbl-pwd-new' : '新密碼：',
		'btn_add_user' : {
			value : '添加'
		},
		'btn_mdfy_user' : {
			value : '修改'
		},
		'btn-cancel,#btn-cancel-1' : {
			value : '取消'
		},
		'us_group' : [ '普通用戶', '管理員' ]
	},
	app : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '應用列表',
		'th-1' : '應用名稱',
		'th-2' : '版本',
		'th-3' : '運行狀態',
		'th-4' : '操作'
	},
	upgrade : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : '恢復系統配置',
		't-2' : '固件升級',
		't-3' : '應用管理',
		'lbl-recover' : '使用備份文件恢復系統：',
		'app_rec_upload' : {
			value : '恢復系統'
		},
		'lbl-ver' : '當前系統版本：',
		'lbl-upgrade-file' : '固件升級文件：',
		'app_up_upload' : {
			value : '升級固件'
		},
		'lbl-upgrade-app' : '應用升級文件：',
		'app_up_upload_app' : {
			value : '升級應用'
		},
		'w-1' : '<div><b>重要警告：</b></div><div>1.&nbsp;请选择厂商提供的正确升级镜像文件，不正确的镜像文件会造成系统破坏，系统无法正常启动；</div><div>2.&nbsp;在升级过程中您务必不要关闭工中断浏览器操作窗口，不要关闭设备电源或者重启设备。这些操作可能会升级失败，并造成系统无法启动和正常使用。 </div>'
	},
	maint : {
		'refresh' : {
			title : _.refresh
		},
		'restart' : {
			title : '重啟設備'
		},
		't-1' : '存儲設備',
		't-2' : '出廠設置',
		't-3' : '設備參數',
		'lbl-sd' : '存儲卡信息：',
		'lbl-fspace' : '剩餘空間：',
		'lbl-space' : '總空間：',
		'lbl-fsize' : '錄像文件大小：',
		'lbl-av' : '音視頻',
		'lbl-record' : '錄像',
		'lbl-system' : '系統',
		'lbl-all' : '全選',
		'lbl-name' : '設備名稱：',
		'ma_format' : {
			value : '格式化存儲卡'
		},
		'ma_reset' : {
			value : '恢復出廠設置'
		},
		'ma_update' : {
			value : '更新參數'
		}
	}
};