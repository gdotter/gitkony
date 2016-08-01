function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxSideMenu = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flxSideMenu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox02a97fd876c8148",
        "top": "0dp",
        "width": "190dp",
        "zIndex": 1
    }, {}, {});
    flxSideMenu.setDefaultUnit(kony.flex.DP);
    var flxAvatar0c5a6391928ca46 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "clipBounds": true,
        "height": "80dp",
        "id": "flxAvatar0c5a6391928ca46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0e2289cbc2a8e4c",
        "top": "15dp",
        "width": "80dp",
        "zIndex": 2
    }, {}, {});
    flxAvatar0c5a6391928ca46.setDefaultUnit(kony.flex.DP);
    var imgAvatar094ee8e3c6d024f = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100%",
        "id": "imgAvatar094ee8e3c6d024f",
        "isVisible": true,
        "skin": "slImage0fe44d2c7690b4b",
        "src": "ava_jay.png",
        "width": "100%",
        "zIndex": 10
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxAvatar0c5a6391928ca46.add(imgAvatar094ee8e3c6d024f);
    var flxNameUser07092244d551741 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "30dp",
        "id": "flxNameUser07092244d551741",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "13dp",
        "right": 13,
        "skin": "slFbox0856101398f064d",
        "top": "100dp",
        "zIndex": 2
    }, {}, {});
    flxNameUser07092244d551741.setDefaultUnit(kony.flex.DP);
    var lblNameUser03a30bf16d45c4a = new kony.ui.Label({
        "bottom": "0dp",
        "centerX": "50%",
        "id": "lblNameUser03a30bf16d45c4a",
        "isVisible": true,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslLabel0cf743532e5d346",
        "text": "Name goes here",
        "top": "0dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxNameUser07092244d551741.add(lblNameUser03a30bf16d45c4a);
    var flxLineAvatar03b8a25c4200845 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineAvatar03b8a25c4200845",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxBoxLineMenu04ce60375b69545",
        "top": "150dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLineAvatar03b8a25c4200845.setDefaultUnit(kony.flex.DP);
    flxLineAvatar03b8a25c4200845.add();
    var flxScrollSideMenu014742777c90241 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": 0,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "horizontalScrollIndicator": false,
        "id": "flxScrollSideMenu014742777c90241",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox03fe1ce7dd9b547",
        "top": "151dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxScrollSideMenu014742777c90241.setDefaultUnit(kony.flex.DP);
    var btnDashboard0326a944731d545 = new kony.ui.Button({
        "focusSkin": "btnSideDashSelected067b2836f330c46",
        "height": "60dp",
        "id": "btnDashboard0326a944731d545",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnSideDashSelected067b2836f330c46",
        "text": "Dashboard",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineDashboard0bedf899372df45 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineDashboard0bedf899372df45",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxBoxLineMenu04ce60375b69545",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLineDashboard0bedf899372df45.setDefaultUnit(kony.flex.DP);
    flxLineDashboard0bedf899372df45.add();
    var btnReports04c044412601348 = new kony.ui.Button({
        "focusSkin": "btnSideArchSelected0a62e24cd08424a",
        "height": "60dp",
        "id": "btnReports04c044412601348",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnSideArchNorma0f35282a5c3954d",
        "text": "Archive",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineArchive04d1f200407064b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineArchive04d1f200407064b",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxBoxLineMenu04ce60375b69545",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLineArchive04d1f200407064b.setDefaultUnit(kony.flex.DP);
    flxLineArchive04d1f200407064b.add();
    var btnSettings0e21e18fd2f3e4a = new kony.ui.Button({
        "focusSkin": "btnSideSettingsSelected0e4e762812a734f",
        "height": "60dp",
        "id": "btnSettings0e21e18fd2f3e4a",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnSideSettingsNormal05128dabacc1f46",
        "text": "Settings",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineSettings0ac4433cc64c444 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineSettings0ac4433cc64c444",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxBoxLineMenu04ce60375b69545",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLineSettings0ac4433cc64c444.setDefaultUnit(kony.flex.DP);
    flxLineSettings0ac4433cc64c444.add();
    var btnLogout0470dfa70db3640 = new kony.ui.Button({
        "focusSkin": "btnSideLogoutSelected09d7aee609ba644",
        "height": "60dp",
        "id": "btnLogout0470dfa70db3640",
        "isVisible": true,
        "left": "0dp",
        "skin": "btnSideLogout0fcd980d654344e",
        "text": "Logout",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [20, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxLineLogout0e3912f52e32b42 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineLogout0e3912f52e32b42",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxBoxLineMenu04ce60375b69545",
        "top": "0dp",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    flxLineLogout0e3912f52e32b42.setDefaultUnit(kony.flex.DP);
    flxLineLogout0e3912f52e32b42.add();
    flxScrollSideMenu014742777c90241.add(btnDashboard0326a944731d545, flxLineDashboard0bedf899372df45, btnReports04c044412601348, flxLineArchive04d1f200407064b, btnSettings0e21e18fd2f3e4a, flxLineSettings0ac4433cc64c444, btnLogout0470dfa70db3640, flxLineLogout0e3912f52e32b42);
    flxSideMenu.add(flxAvatar0c5a6391928ca46, flxNameUser07092244d551741, flxLineAvatar03b8a25c4200845, flxScrollSideMenu014742777c90241);
    var flxMain = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox09e6b96522c594e",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxHeader0224eabd79fb348 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "53dp",
        "id": "flxHeader0224eabd79fb348",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxWhite029693437d3934c",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxHeader0224eabd79fb348.setDefaultUnit(kony.flex.DP);
    var flxLineHeader04f7e4f039ce041 = new kony.ui.FlexContainer({
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineHeader04f7e4f039ce041",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxLineHeader05277aa6ea75e44",
        "width": "100%"
    }, {}, {});
    flxLineHeader04f7e4f039ce041.setDefaultUnit(kony.flex.DP);
    flxLineHeader04f7e4f039ce041.add();
    var btnSideMenu = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnSideMenuPressed0c29b3d29730d45",
        "height": "53dp",
        "id": "btnSideMenu",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_7cba031767a74bc8b7ad1f4fdfa54fa1,
        "skin": "btnSideMenuDefault04ef3f1a70e644e",
        "width": "53dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnRefresh = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "btnNewRequestPressed08ef961b4a2fc4a",
        "height": "53dp",
        "id": "btnRefresh",
        "isVisible": true,
        "onClick": AS_Button_8a6e6363af83459d9fcef4e0737335b8,
        "right": "0dp",
        "skin": "btnNewRequest0722646222a5042",
        "width": "53dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTitle0125faeee384c48 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTitle0125faeee384c48",
        "isVisible": true,
        "skin": "CopyslLabel01c7b9e02728346",
        "text": "My Dashboard",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader0224eabd79fb348.add(flxLineHeader04f7e4f039ce041, btnSideMenu, btnRefresh, lblTitle0125faeee384c48);
    var flxLatest06c628068db5a49 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "25dp",
        "id": "flxLatest06c628068db5a49",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0535a0997ac1145",
        "top": "53dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxLatest06c628068db5a49.setDefaultUnit(kony.flex.DP);
    var lblLatest09188a2d1e1de41 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblLatest09188a2d1e1de41",
        "isVisible": true,
        "skin": "CopyslLabel0810f617b0b084d",
        "text": "FOR YOUR APPROVAL",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxLatest06c628068db5a49.add(lblLatest09188a2d1e1de41);
    var segLatest = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "data": [{
            "imgAva": "ava_stephan.png",
            "lblAmount": "$599.00",
            "lblCategory": "Category goes here...",
            "lblDate": "Date goes here...",
            "lblPerson": "Name goes here...",
            "lblTitle": "Purchase item goes here..."
        }, {
            "imgAva": "ava_umang.png",
            "lblAmount": "$80.00",
            "lblCategory": "Category goes here...",
            "lblDate": "Date goes here...",
            "lblPerson": "Name goes here...",
            "lblTitle": "Purchase item goes here..."
        }, {
            "imgAva": "ava_alex.png",
            "lblAmount": "$80.00",
            "lblCategory": "Category goes here...",
            "lblDate": "Date goes here...",
            "lblPerson": "Name goes here...",
            "lblTitle": "Purchase item goes here..."
        }],
        "groupCells": false,
        "id": "segLatest",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": false,
        "onRowClick": AS_Segment_1aced4bd422b4ea08f23321ba7e6ebaa,
        "pageOffDotImage": "pageOffDot.png",
        "pageOnDotImage": "pageOnDot.png",
        "retainSelection": false,
        "right": "0dp",
        "rowFocusSkin": "Copyseg0b5f178df462945",
        "rowSkin": "Copyseg03f07e4a62e6e43",
        "rowTemplate": FBox0430efa7eafe341,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader03778399491da4e",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "d6d6d664",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": true,
        "top": "78dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "flxImage": "flxImage",
            "imgAva": "imgAva",
            "lblAmount": "lblAmount",
            "lblCategory": "lblCategory",
            "lblDate": "lblDate",
            "lblPerson": "lblPerson",
            "lblTitle": "lblTitle"
        },
        "zIndex": 10
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMain.add(flxHeader0224eabd79fb348, flxLatest06c628068db5a49, segLatest);
    frmHome.add(flxSideMenu, flxMain);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "frmbg"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    frmHome.info = {
        "kuid": "d5aaa4a50a4742c19faa1bbdec9e443e"
    };
};