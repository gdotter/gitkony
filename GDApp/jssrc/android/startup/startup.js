//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "GDApp",
    appName: "GDApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "GDApp",
    isturlbase: "https://mftrial1.konycloud.com/services",
    isMFApp: true,
    appKey: "fc5d3d0aebaa83bfbe9e00134f85db85",
    appSecret: "ea0dd0f3b69e0b425a63d142e3611bb2",
    serviceUrl: "https://100000117.auth.konycloud.com/appconfig",
    svcDoc: {
        "appId": "6e16b25d-8457-4640-bf14-34e67e016d44",
        "baseId": "1981fb8e-5077-43d2-b07d-d9b0b3a48de3",
        "name": "GDApp",
        "selflink": "https://100000117.auth.konycloud.com/appconfig",
        "integsvc": {
            "Purchases": "https://mftrial1.konycloud.com/services/Purchases"
        },
        "reportingsvc": {
            "custom": "https://mftrial1.konycloud.com/services/CMS",
            "session": "https://mftrial1.konycloud.com/services/IST"
        },
        "services_meta": {
            "Purchases": {
                "version": "1.0",
                "url": "https://mftrial1.konycloud.com/services/Purchases",
                "type": "integsvc"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://mftrial1.konycloud.com/GDApp/MWServlet",
    secureurl: "https://mftrial1.konycloud.com/GDApp/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeFBox0430efa7eafe341();
    frmDetailsGlobals();
    frmHomeGlobals();
    frmLoginGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};