/**
 * 本地化资源文件 规则:key-value => key为目标元素标识码,value为其值.<br>
 * 1.value为string/number时表示元素为html文本内容.<br>
 * 2.value为Object时表示:<br>
 * 1).text表示元素为html文本内容.<br>
 * 2).title表示title.<br>
 * 3).value表示表单元素的值.
 */
var _ = {
	refresh : 'Refresh',
	save : 'Save'
};
var l10n = {
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
		connected : 'Connected',
		disconnected : 'Disconnected',
		refresh : 'Refresh',
		save : 'Save',
		thisField : 'This field',
		catalogprev : '28181 number',
		mute : 'Mute',
		volume : 'Volume',
		adminSys : 'System administrator',
		admin : 'Administrator',
		user : 'User',
		userGroup : [ 'System administrator', 'Administrator', 'User' ],
		on : 'On',
		off : 'Off',
		y : 'Yes',
		n : 'No',
		yes : 'Yes',
		no : 'No',
		run : 'Running',
		stop : 'Stopped',
		enable : 'Enable',
		disable : 'Disable',
		ntpServer : 'NTP Server',
		ntpInterval : 'NPT Interval',
		framerate : 'Frame rate',
		bitrate : 'Bit rate',
		subnetMask : 'Subnet Mask',
		defaultGateway : 'Default Gateway',
		domain : 'Domain name',
		email : 'Email',
		port : 'Port',
		userName : 'User Name',
		name : 'Name',
		password : 'Password',
		nameNeeded : 'Please enter your account!',
		pwdNeeded : 'Please enter a password!',
		process : 'Data processing ...',
		logging : 'Logging in ...',
		restore : 'restore the factory settings',
		reboot : 'reboot the camera',
		backup : 'backup data',
		recoverSys : 'recovery system',
		upgradeFir : 'upgrade firmware',
		upgradeApp : 'upgrade application',
		mConf : 'Manual configuration',
		aConf : 'auto-configuration',
		mdfyPwd : 'Update',
		del : 'Delete',
		download : 'Download',
		noResponse : 'Server not responding...',
		errorResponse : 'Server responded an error data!',
		lostCon : 'Lost connection with the server!',
		confirmTodo : 'It may cause the camera to reboot, are you sure to do this?',
		confirmReset : 'Are you sure you want to restore the factory settings, \nthis will cause the camera to return to the initial state?',
		confirmFormat : 'Are you sure you want to format the SD card, \nthis will lead to the SD card data loss?',
		confirmRestart : 'Are you sure you want to reboot the camera, \nthis may lead to other users can not access this camera?',
		confirmLogout : 'Are you sure you want to exit the system?',
		confirmDelUser : 'Are you sure to delete user: ',
		reLogin : 'The server is about to restart, please re-login ...',
		networkSelect : 'Please select a type of network for setting.',
		timesetSelect : 'Please select a type of time setting.',
		fileNeeded : 'Please select a file.',
		noPermission : 'You do not have permission to add users.',
		noPermissionDel : 'You do not have permission to delete users.',
		passportError : 'Account or password is incorrect!',
		mdfyPwdError : 'You can only modify the password your own.',
		uploadUrlError : 'Upload URL does not exist!',
		formatError : 'Incorrect {0} format!',
		posIntError : '{0} must be a positive integer.',
		emptyError : '{0} can not be empty.',
		emptyError2 : 'It can not be empty. ',
		pwdMatch : 'Passwords do not match.',
		doingSth : 'Is being {0}, please wait ...',
		timeCompare : 'The start time must be less than the end time!',
		timeLess : '{0}, the start time must be less than the end time!',
		timeGreater : '{0}, the end time must be greater than the start time!',
		intRange : 'Please enter an integer between {0} to {1}.',
		characterLength : '{0} need(s) at least {1} word(s).',
		minValue : 'The minimum value of {0} is {1}.',
		maxValue : 'The maximum value of {0} is {1}.',
		selectEmpty : 'Please select at least one used to restore the factory settings.'
	},
	login : {
		l_name : 'Account',
		l_pwd : 'Password',
		l_lang : 'Language',
		l_login : {
			value : 'Log in'
		},
		lbl_remember : 'Remember me?',
		title : 'User Login'
	},
	main : {
		title : 'Camera Management',
		av : 'Preview',
		setting : 'Settings',
		exit : 'Logout'
	},
	channels : {
		't-camera' : 'Channels',
		'chl-0' : {
			title : 'Open video',
			text : 'HD'
		},
		'_default_channel' : {
			title : 'Open video',
			text : 'SD'
		},
		'chl-2' : {
			title : 'Open video',
			text : 'LD'
		},
		'chl-0-2,#chl-1-2,#chl-2-2' : {
			title : '1/2 Frame-skipping'
		},
		'chl-0-4,#chl-1-4,#chl-2-4' : {
			title : '1/4 Frame-skipping'
		}
	},
	tools : {
		'relink' : {
			title : 'Reconnect'
		},
		'mute' : {
			title : 'Volume'
		},
		'talkback' : {
			title : 'Talkback'
		},
		'snapshot' : {
			title : 'Snapshot'
		},
		'record-local' : {
			title : 'Local record'
		},
		'full' : {
			title : 'Full screen'
		},
		'openpath,#openpath-record' : 'Open path',
		'setpath,#setpath-record' : 'Setting path'
	},
	csc : {
		't-img' : 'Image adjust',
		'image_default' : {
			title : 'Restore default settings'
		},
		'c-bri,#slider_brightness' : {
			title : 'Brightness'
		},
		'c-chr,#slider_chroma' : {
			title : 'Chroma'
		},
		'c-con,#slider_contrast' : {
			title : 'Contrast'
		},
		'c-sat,#slider_saturation' : {
			title : 'Saturation'
		}
	},
	ptzctrl : {
		'lbl-ptzctrl' : 'PTZ Control'
	},
	menu : {
		't-status' : 'Status',
		'blk_status' : 'Running State',
		't-network' : 'Network',
		'blk_lan' : 'LAN',
		'blk_wifi' : 'WiFi',
		't-cameraset' : 'Camera',
		'blk_osd' : 'OSD',
		'blk_video' : 'Video',
		'blk_audio' : 'Audio',
		'blk_vmd' : 'VMD',
		'blk_daynight' : 'Day&Night Mode',
		'blk_inoutdoor' : 'In/Outdoor Mode',
		't-alarmrecord' : 'Alarm & Record',
		'blk_port' : 'IO Port',
		'blk_alarm' : 'IO Alarm Linkage',
		'blk_vlink' : 'VMD Linkage',
		'blk_record' : 'Recording',
		't-system' : 'System',
		'blk_time' : 'Time Setting',
		'blk_user' : 'User',
		'blk_app' : 'Application',
		'blk_upgrade' : 'System Upgrade',
		'blk_maint' : 'Maintenance',
		't-other' : 'Other',
		'blk_rds' : 'RMS',
		'blk_sip' : 'SIP'
	},
	status : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : 'Camera information',
		't-2' : 'Ethernet',
		't-3' : 'SD card',
		'lbl-name' : 'Name:',
		'lbl-model' : 'Model:',
		'lbl-sernum' : 'Serial number:',
		'lbl-ver' : 'Version number:',
		'lbl-mode' : 'Network mode:',
		'lbl-ip' : 'IP:',
		'lbl-mask' : 'Subnet mask:',
		'lbl-gateway' : 'Default gateway:',
		'lbl-mac' : 'MAC:',
		'lbl-dns1' : 'Preferred DNS:',
		'lbl-dns2' : 'Alternate DNS:',
		'lbl-upnp' : 'Status:',
		'lbl-pubip' : 'Public IP:',
		'lbl-pppoe' : 'Status:',
		'lbl-sd' : 'Status:',
		'lbl-ddns' : 'Status:'
	},
	lan : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'Network settings',
		't-2' : 'DNS settings',
		'btn-save-1' : 'Save',
		'btn-save-2' : 'Save',
		'lbl-autoip' : 'Obtain an IP automatically',
		'lbl-manualip' : 'Manually configure the IP',
		'lbl-ip' : 'IP:',
		'lbl-mask' : 'Subnet mask:',
		'lbl-gateway' : 'Default gateway:',
		'lbl-mac' : 'MAC:',
		'lbl-autodns' : 'Obtain DNS server automatically',
		'lbl-manualdns' : 'Manually configure the DNS server',
		'lbl-dns1' : 'Preferred DNS:',
		'lbl-dns2' : 'Alternate DNS:'
	},
	wifi : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'WiFi settings',
		't-2' : 'WiFi network parameters',
		'lbl-wifi' : 'Enable WiFi:',
		'lbl-ssid' : 'SSID:',
		'lbl-mode' : 'Mode:',
		'lbl-sec' : 'Encryption protocol:',
		'lbl-password' : 'Password:',
		'lbl-wifis' : 'WiFi list:',
		'lbl-wifis-note' : '(Double-click to edit a table row)',
		'th-1' : 'Encryption protocol',
		'th-2' : 'Mode',
		'th-3' : 'Need password',
		'th-4' : 'Signal',
		'lbl-ip' : 'IP:',
		'lbl-submask' : 'Subnet mask:',
		'lbl-gateway' : 'Default gateway:',
		'lbl-mac' : 'MAC:',
		'btn-wifi-1' : 'View WiFi parameters',
		'btn_wifi_refresh' : {
			value : _.refresh
		},
		'btn-cancel' : {
			value : 'Close'
		}
	},
	pppoe : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'PPPoE settings',
		'lbl-pppoe' : 'Enable PPPoE:',
		'lbl-user' : 'Account:',
		'lbl-pwd' : 'Password:',
		'lbl-firewall' : 'Firewall:',
		'lbl-1' : 'Notify the user when the IP changes'
	},
	ddns : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'DDNS settings',
		'lbl-ddns' : 'Enable DDNS:',
		'lbl-servicer' : 'DDNS providers:',
		'lbl-domain' : 'Domain:',
		'lbl-user' : 'Account:',
		'lbl-pwd' : 'Password:',
		'lbl-update' : 'Updated:',
		'lbl-1' : 'Minute (Minimum is 10;Maximum is 1440)',
		'lbl-2' : 'Server links:'
	},
	ftp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'FTP settings',
		'lbl-ftp' : 'Enable FTP:',
		'lbl-server' : 'FTP server:',
		'lbl-port' : 'FTP port:',
		'lbl-user' : 'Account:',
		'lbl-pwd' : 'Password:',
		'lbl-enc' : 'Encryption',
		'ft_enc' : [ 'Closed', 'Open' ]
	},
	smtp : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'SMTP Settings',
		'lbl-smtp' : 'Enable SMTP:',
		'lbl-server' : 'SMTP server:',
		'lbl-port' : 'SMTP port:',
		'lbl-sender' : 'Sender:',
		'lbl-user' : 'Account:',
		'lbl-pwd' : 'Password:',
		'lbl-subject' : 'Subject:',
		'lbl-receiver' : 'Receiver:',
		'lbl-carbon1' : 'Carbon&nbsp;1:',
		'lbl-carbon2' : 'Carbon&nbsp;2:'
	},
	rds : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'RMS Server Settings',
		'lbl-rds' : 'Enable RMS:',
		'lbl-server' : 'RMS server IP:',
		'lbl-port' : 'RMS port:',
		'lbl-user' : 'RMS account:',
		'lbl-pwd' : 'RMS password:'
	},
	sip : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'SIP Server Settings',
		'lbl-catalogprev' : '28181 number:',
		'lbl-listenport' : 'Listening port:',
		'lbl-proxyip' : 'Server IP:',
		'lbl-proxyport' : 'Server port:',
		'lbl-username' : 'Account:',
		'lbl-password' : 'Password:',
		'lbl-realm' : 'Summary:',
		'lbl-expires' : 'Expires:',
		'lbl-expires-note' : 'ms'
	},
	osd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'OSD Settings',
		'lbl-channel' : 'Channel',
		'os_channel' : [ 'HD', 'SD', 'LD' ],
		'lbl-osd' : 'Enable OSD',
		'lbl-name' : 'OSD name:',
		'lbl-position' : 'OSD name position:',
		'lbl-pos-0' : 'Top left',
		'lbl-pos-1' : 'Bottom left',
		'lbl-pos-2' : 'Top right',
		'lbl-pos-3' : 'Bottom right',
		'lbl-display' : 'Display content:',
		'lbl-display-0' : 'Camera name',
		'lbl-display-1' : 'Datetime',
		'lbl-display-2' : 'Week',
		'lbl-format' : 'Date time format:',
		'lbl-format-0' : 'yyyy-mm-dd&nbsp;&nbsp;HH:mm:ss',
		'lbl-format-1' : 'mm-dd-yyyy&nbsp;&nbsp;HH:mm:ss',
		'lbl-format-2' : 'yyyy/mm/dd &nbsp;&nbsp;HH:mm:ss',
		'lbl-format-3' : 'mm/dd/yyyy &nbsp;&nbsp;HH:mm:ss'
	},
	video : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		'btn-save-1,#btn-save-2,#btn-save-3' : 'Save',
		't-1' : 'HD',
		't-2' : 'SD',
		't-3' : 'LD',
		'lbl-enc,#lbl-enc-1,#lbl-enc-2' : 'Encoding:',
		'lbl-res,#lbl-res-1,#lbl-res-2' : 'Resolution:',
		'lbl-ctrl,#lbl-ctrl-1,#lbl-ctrl-2' : 'Flow Control:',
		'lbl-quality,#lbl-quality-1,#lbl-quality-2' : 'Image quality:',
		'lbl-profile,#lbl-profile-1,#lbl-profile-2' : 'Profile:',
		'lbl-bitrate,#lbl-bitrate-1,#lbl-bitrate-2' : 'Bit rate:',
		'lbl-bitrate-note,#lbl-bitrate-1-note,#lbl-bitrate-2-note' : 'kbit/s (16~40960)',
		'lbl-framerate,#lbl-framerate-1,#lbl-framerate-2' : 'Frame rate:',
		'lbl-framerate-note,#lbl-framerate-1-note,#lbl-framerate-2-note' : 'Frames/s (15~30)',
		'vi_ctrl,#vi_1_ctrl,#vi_2_ctrl' : [ 'Fixed rate', 'Changing rate' ],
		'vi_quality,#vi_1_quality,#vi_2_quality' : [ 'Excelent', 'Very good',
				'good', 'General' ]
	},
	audio : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'Audio Settings',
		'lbl-enc' : 'Encoding:',
		'lbl-asr' : 'Sampling rate:',
		'lbl-databit' : 'Data bits:',
		'lbl-track' : 'Track:',
		'au_track' : [ 'Mono', 'Dual track' ]
	},
	vmd : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'VMD Settings',
		'lbl-vmd' : 'Enable VMD:',
		'lbl-sens' : 'Sensitivity:',
		'lbl-area' : 'Locale:',
		'vm_clear' : 'Clear',
		'vm_selall' : 'Select All',
		'lbl-vm-note' : '(Hold down the Ctrl key to select multiple areas)',
		'vm_sens' : [ 'highest', 'high', 'medium', 'low', 'minimum' ],
		'vm_area' : [ 'Custom', 'Full screen' ]
	},
	daynight : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'Day and Night Mode Settings',
		'lbl-enable' : 'Enable set:',
		'lbl-brightness' : 'Brightness threshold:'
	},
	inoutdoor : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			save : _.save
		},
		't-1' : 'Indoor and Outdoor Mode Settings',
		'lbl-enable' : 'Enable set:',
		'lbl-brightness' : 'Brightness threshold:'
	},
	port : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'Alarm Input Port Settings',
		'lbl-in-channel' : 'Alarm input channel:',
		'lbl-in-enable' : 'Enable alarm input:',
		'lbl-in-mode' : 'Alarm input mode:',
		'po_in_channel' : [ 'Channel 1' ],
		'po_in_mode' : [ 'Closed', 'Open' ]
	},
	alarm : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'Alarm Linkage Settings',
		'lbl-channel' : 'Alarm input channel:',
		'lbl-sd' : 'SD card:',
		'lbl-art' : 'Pre-record:',
		'lbl-art-note' : 's (0~10)',
		'lbl-drt' : 'Delay recording:',
		'lbl-drt-note' : 's (0~60)',
		'lbl-capture' : 'Enable capture:',
		'lbl-alarm' : 'Enable linkage alarm:',
		'lbl-alarmtime' : 'Arming Time:',
		'lbl-alarmtime-0' : 'All times',
		'lbl-alarmtime-1' : 'Custom time',
		'al_channel' : [ 'Channel 1' ],
		'al_alarmtime_week' : [ 'Every day', 'Monday', 'Tuesday', 'Wednesday',
				'Thursday', 'Friday', 'Saturday', 'Sunday' ]
	},
	vlink : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'The Mobile Detect Linkage Settings',
		'lbl-sd' : 'SD card:',
		'lbl-art' : 'Pre-record:',
		'lbl-art-note' : 's (0~10)',
		'lbl-drt' : 'Delay recording:',
		'lbl-drt-note' : 's (0~60)',
		'lbl-capture' : 'Enable capture:',
		'lbl-alarm' : 'Enable linkage alarm:',
		'lbl-alarmtime' : 'Arming Time:',
		'lbl-alarmtime-0' : 'All times',
		'lbl-alarmtime-1' : 'Custom time',
		'vl_alarmtime_week' : [ 'Every day', 'Monday', 'Tuesday', 'Wednesday',
				'Thursday', 'Friday', 'Saturday', 'Sunday' ]
	},
	record : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'Record Settings',
		't-2' : 'Record Searching',
		'lbl-cirvideo' : 'Enable circular:',
		'lbl-strategy' : 'Recording policy:',
		'lbl-close' : 'Turn off recording',
		'lbl-allday' : 'All-day recording',
		'lbl-timing' : 'Timing recording',
		'lbl-w0' : 'Sunday',
		'lbl-w1' : 'Monday',
		'lbl-w2' : 'Tuesday',
		'lbl-w3' : 'Wednesday',
		'lbl-w4' : 'Thursday',
		'lbl-w5' : 'Friday',
		'lbl-w6' : 'Saturday',
		'lbl-w0-ts,#lbl-w1-ts,#lbl-w2-ts,#lbl-w3-ts,#lbl-w4-ts,#lbl-w5-ts,#lbl-w6-ts' : 'From',
		'lbl-w0-te,#lbl-w1-te,#lbl-w2-te,#lbl-w3-te,#lbl-w4-te,#lbl-w5-te,#lbl-w6-te' : 'To',
		'lbl-sch-ts' : 'From:',
		'lbl-sch-te' : 'To:',
		're_sch_btn' : 'Search',
		'th-1' : 'File name',
		'th-2' : 'File path',
		'th-3' : 'Operating',
		'lbl-first' : 'First',
		'lbl-prev' : 'Prev',
		'lbl-next' : 'Next',
		'lbl-last' : 'Last',
		'lbl-no' : 'No.',
		'lbl-page' : 'Page',
		'lbl-all' : '',
		'lbl-datas' : 'Data(s)',
		'lbl-goto' : '&nbsp;&nbsp;Goto page'
	},
	time : {
		'refresh' : {
			title : _.refresh
		},
		'save' : {
			title : _.save
		},
		't-1' : 'System Time Settings',
		't-2' : 'NTP Settings',
		'lbl-devtime' : 'Current time:',
		'lbl-timeset' : 'Time setting:',
		'lbl-sync' : 'Synchronize current PC time',
		'lbl-manual' : 'Manual',
		'lbl-manual-note' : '(The default is the current system time)',
		'lbl-timezone' : 'Time zone:',
		'lbl-ntp' : 'Enable NTP:',
		'lbl-server' : 'NTP Server:',
		'lbl-interval' : 'NTP interval:',
		'lbl-interval-note' : 'Hour(s)',
		'btn-save-1,#btn-save-2' : 'Save'
	},
	user : {
		'refresh' : {
			title : _.refresh
		},
		'btn_add_user_dlg' : {
			title : 'Create a new user'
		},
		't-1' : 'User List',
		't-2' : 'Create a New User',
		't-3' : 'Update User Information',
		'th-1' : 'User name',
		'th-2' : 'User group',
		'th-3' : 'Operating',
		'lbl-group' : 'User group:',
		'lbl-name,#lbl-name-1' : 'User name:',
		'lbl-pwd' : 'Password:',
		'lbl-pwd-re,#lbl-pwd-re-1' : 'Confirm:',
		'lbl-pwd-old' : 'Old password:',
		'lbl-pwd-new' : 'New Password:',
		'btn_add_user' : {
			value : 'Create'
		},
		'btn_mdfy_user' : {
			value : 'Update'
		},
		'btn-cancel,#btn-cancel-1' : {
			value : 'Cancel'
		},
		'us_group' : [ 'User', 'Administrator' ]
	},
	app : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : 'Application List',
		'th-1' : 'Name',
		'th-2' : 'Version',
		'th-3' : 'Running state',
		'th-4' : 'Operating'
	},
	upgrade : {
		'refresh' : {
			title : _.refresh
		},
		't-1' : 'Restore the System Configuration',
		't-2' : 'Firmware Upgrade',
		't-3' : 'Application Upgrade',
		'lbl-recover' : 'Backup file:',
		'app_rec_upload' : {
			value : 'Recovery system'
		},
		'lbl-ver' : 'Current system version:',
		'lbl-upgrade-file' : 'Firmware file:',
		'app_up_upload' : {
			value : 'Upgrade firmware'
		},
		'lbl-upgrade-app' : 'Application file:',
		'app_up_upload_app' : {
			value : 'Upgrade Application'
		},
		'w-1' : '<div><b>WARNING:</b></div><div>1.&nbsp;Select vendors to provide the correct upgrade image file, incorrect image file will cause system damage, and the system does not start properly;</div><div>2.&nbsp;During the upgrade process, you sure you do not turn off the workers interrupt the operating window of the browser, do not turn off the power to the device or reboot the device. These operations may upgrade failed and caused the system will not boot and normal use.</div>'
	},
	maint : {
		'refresh' : {
			title : _.refresh
		},
		'restart' : {
			title : 'Reboot the Camera'
		},
		't-1' : 'SD Card Information',
		't-2' : 'Factory Settings',
		't-3' : 'Camera Parameters',
		'lbl-sd' : 'SD card:',
		'lbl-fspace' : 'Remaining space:',
		'lbl-space' : 'Total space:',
		'lbl-fsize' : 'Record file size:',
		'lbl-av' : 'Video & Audio',
		'lbl-record' : 'Recording',
		'lbl-system' : 'System',
		'lbl-all' : 'Select all',
		'lbl-name' : 'Name:',
		'ma_format' : {
			value : 'Format SD card'
		},
		'ma_reset' : {
			value : 'Restore the factory settings'
		},
		'ma_update' : {
			value : 'Save'
		}
	}
};