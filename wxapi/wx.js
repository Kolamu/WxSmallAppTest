//function createWxInstance(){
wx = {
        request : function(obj){
            console.log("wx.request")
        },

        uploadFile : function(obj){
            console.log("wx.uploadFile");
        },

        downloadFile : function(obj){
            console.log("wx.downloadFile");
        },

        
        //WebSocket
        connectSocket : function(obj){

        },

        onSocketOpen : function(callback){

        },

        onSocketError : function(callback){

        },

        onSockectMessage : function(obj){

        },

        closeSocket : function(obj){

        },

        onSocketClose : function(callback){
    
        },

        //Picture
        chooseImage : function(OBJECT){

        },

        previewImage : function(OBJECT){

        },

        getImageInfo : function(OBJECT){

        },

        saveImageToPhotosAlbum : function(OBJECT){

        },


        //Audio Record
        startRecord : function(OBJECT){

        },

        stopRecord : function(OBJECT){

        },

        getRecordManager : function(OBJECT){

        },

        playVoice : function(OBJECT){

        },

        pauseVoice : function(OBJECT){

        },

        stopVoice : function(OBJECT){

        },

        getBackgroundAudioPlayerState : function(OBJECT){

        },

        playBackgroundAudio : function(OBJECT){

        },

        pauseBackgroundAudio : function(OBJECT){

        },

        seekBackgroundAudio : function(OBJECT){

        },

        stopBackgroundAudio : function(OBJECT){

        },

        onBackgroundAudioPlay : function(OBJECT){

        },

        onBackgroundAudioPause : function(OBJECT){

        },

        onBackgroundAudioStop : function(OBJECT){

        },

        getBackgroundAudioManager : function(OBJECT){

        },

        createAudioContext : function(OBJECT){

        },

        createInnerAudioContext : function(OBJECT){

        },

        getAvailableAudioSources : function(OBJECT){

        },

        chooseVideo : function(OBJECT){

        },

        saveVideoToPhotosAlbum : function(OBJECT){

        },

        createVideoContext : function(OBJECT){

        },

        createCameraContext : function(OBJECT){

        },

        createLivePlayerContext : function(OBJECT){

        },

        createLivePusherContext : function(OBJECT){

        },

        loadFontFace : function(OBJECT){

        },

        saveFile : function(OBJECT){

        },

        getFileInfo : function(OBJECT){

        },

        getSavedFileList : function(OBJECT){

        },

        getSavedFileInfo : function(OBJECT){

        },

        removeSavedFile : function(OBJECT){

        },

        openDocument : function(OBJECT){

        },

        getFileSystemManager : function(OBJECT){

        },

        setStorage : function(OBJECT){

        },

        setStorageSync : function(OBJECT){

        },

        getStorage : function(OBJECT){

        },

        getStorageSync : function(OBJECT){

        },

        getStorageInfo : function(OBJECT){

        },

        getStorageInfoSync : function(OBJECT){

        },

        removeStorage : function(OBJECT){

        },

        removeStorageSync : function(OBJECT){

        },

        clearStorage : function(OBJECT){

        },

        clearStorageSync : function(OBJECT){

        },

        getLocation : function(OBJECT){

        },

        chooseLocation : function(OBJECT){

        },

        openLocation : function(OBJECT){

        },

        createMapContext : function(OBJECT){

        },

        getSystemInfo : function(OBJECT){

        },

        getSystemInfoSync : function(OBJECT){

        },

        canIUse : function(OBJECT){

        },

        onMemoryWarning : function(OBJECT){

        },

        getNetworkType : function(OBJECT){

        },

        onNetworkStatusChange : function(OBJECT){

        },

        onAccelerometerChange : function(OBJECT){

        },

        startAccelerometer : function(OBJECT){

        },

        stopAccelerometer : function(OBJECT){

        },

        onCompassChange : function(OBJECT){

        },

        startCompass : function(OBJECT){

        },

        stopCompass : function(OBJECT){

        },

        makePhoneCall : function(OBJECT){

        },

        scanCode : function(OBJECT){

        },

        setClipboardData : function(OBJECT){

        },

        getClipboardData : function(OBJECT){

        },

        openBluetoothAdapter : function(OBJECT){

        },

        closeBluetoothAdapter : function(OBJECT){

        },

        getBluetoothAdapterState : function(OBJECT){

        },

        onBluetoothAdapterStateChange : function(OBJECT){

        },

        startBluetoothDevicesDiscovery : function(OBJECT){

        },

        stopBluetoothDevicesDiscovery : function(OBJECT){

        },

        getBluetoothDevices : function(OBJECT){

        },

        getConnectedBluetoothDevices : function(OBJECT){

        },

        onBluetoothDeviceFound : function(OBJECT){

        },

        createBLEConnection : function(OBJECT){

        },

        closeBLEConnection : function(OBJECT){

        },

        getBLEDeviceCharacteristics : function(OBJECT){

        },

        readBLECharacteristicValue : function(OBJECT){

        },

        writeBLECharacteristicValue : function(OBJECT){

        },

        notifyBLECharacteristicValue : function(OBJECT){

        },

        onBLEConnectionStateChange : function(OBJECT){

        },

        onBLECharacteristicValueChange : function(OBJECT){

        },

        startBeaconDiscovery : function(OBJECT){

        },

        stopBeaconDiscovery : function(OBJECT){

        },

        getBeacons : function(OBJECT){

        },

        onBeaconUpdate : function(OBJECT){

        },

        onBeaconServiceChange : function(OBJECT){

        },

        setScreenBrightness : function(OBJECT){

        },

        getScreenBrightness : function(OBJECT){

        },

        setKeepScreenOn : function(OBJECT){

        },

        vibrateLong : function(OBJECT){

        },

        vibrateShort : function(OBJECT){

        },

        addPhoneContact : function(OBJECT){

        },

        //NFC
        getHCEState : function(OBJECT){

        },

        startHCE : function(OBJECT){

        },

        stopHCE : function(OBJECT){

        },

        onHCEMessage : function(OBJECT){

        },

        sendHCEMessage : function(OBJECT){

        },

        startWifi : function(OBJECT){

        },

        stopWifi : function(OBJECT){

        },

        connectWifi : function(OBJECT){

        },

        getWifiList : function(OBJECT){

        },

        onGetWifiList : function(OBJECT){

        },

        setWifiList : function(OBJECT){

        },

        onWifiConnected : function(OBJECT){

        },

        getConnectedWifi : function(OBJECT){

        },

        showToast : function(OBJECT){

        },

        showLoading : function(OBJECT){

        },

        hideToast : function(OBJECT){

        },

        hideLoading : function(OBJECT){

        },

        showModal : function(OBJECT){

        },

        showActionSheet : function(OBJECT){

        },

        setNavigationBarTitle : function(OBJECT){

        },

        showNavigationBarLoading : function(OBJECT){

        },

        hideNavigationBarLoading : function(OBJECT){

        },

        setNavigationBarColor : function(OBJECT){

        },

        setTabBarBadge : function(OBJECT){

        },

        removeTabBarBadge : function(OBJECT){

        },

        showTabBarRedDot : function(OBJECT){

        },

        hidTabBarRedDot : function(OBJECT){

        },

        setTabBarStyle : function(OBJECT){

        },

        setTabBarItem : function(OBJECT){

        },

        showTabBar : function(OBJECT){

        },

        hideTabBar : function(OBJECT){

        },

        setBackgroundColor : function(OBJECT){

        },

        setBackgroundTextStyle : function(OBJECT){

        },

        setTopBarText : function(OBJECT){

        },

        navigateTo : function(OBJECT){

        },

        redirectTo : function(OBJECT){

        },

        switchTab : function(OBJECT){

        },

        navigateBack : function(OBJECT){

        },

        reLaunch : function(OBJECT){

        },

        createAnimation : function(OBJECT){

        },

        pageScrollTo : function(OBJECT){

        },

        createCanvasContext : function(OBJECT){

        },

        createContext : function(OBJECT){

        },

        drawCanvas : function(OBJECT){

        },

        canvasToTempFilePath : function(OBJECT){

        },

        canvasGetImageData : function(OBJECT){

        },

        canvasPutImageData : function(OBJECT){

        },

        startPullDownRefresh : function(OBJECT){

        },

        stopPullDownRefresh : function(OBJECT){

        },

        createSelectorQuery : function(OBJECT){

        },

        createIntersectionObserver : function(OBJECT){

        },

        getExtConfig : function(OBJECT){

        },

        getExtConfigSync : function(OBJECT){

        },

        login : function(OBJECT){

        },

        checkSession : function(OBJECT){

        },

        authorize : function(OBJECT){

        },

        getUserInfo : function(OBJECT){

        },

        requestPayment : function(OBJECT){

        },

        showShareMenu : function(OBJECT){

        },

        hideShareMenu : function(OBJECT){

        },

        updateShareMenu : function(OBJECT){

        },

        getShareInfo : function(OBJECT){

        },

        chooseAddress : function(OBJECT){

        },

        addCard : function(OBJECT){

        },

        openCard : function(OBJECT){

        },

        openSetting : function(OBJECT){

        },

        getSetting : function(OBJECT){

        },

        getWeRunData : function(OBJECT){

        },

        getAccountInfoSync : function(OBJECT){

        },

        navigateToMiniProgram : function(OBJECT){

        },

        navigateBackMiniProgram : function(OBJECT){

        },

        chooseInvoiceTitle : function(OBJECT){

        },

        checkIsSupportSoterAuthentication : function(OBJECT){

        },

        startSoterAuthentication : function(OBJECT){

        },

        checkIsSoterEnrolledInDevice : function(OBJECT){

        },

        reportAnalytics : function(eventName, data){

        },

        getUpdateManager : function(OBJECT){

        },

        createWorker : function(OBJECT){

        },

        reportMonitor : function(OBJECT){

        },

        setEnableDebug : function(OBJECT){
            
        },

        getLogManager : function(OBJECT){
            return new Object({
                
            })
        }
     }
