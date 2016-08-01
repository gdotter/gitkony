function addWidgetsfrmDetails() {
    frmDetails.setDefaultUnit(kony.flex.DP);
    var flxMother = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMother",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox0aba15169771140",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxMother.setDefaultUnit(kony.flex.DP);
    var flxScroller06d5fe23a66b545 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": 60,
        "bounces": true,
        "clipBounds": true,
        "contentOffset": {
            "x": "0dp",
            "y": "0dp"
        },
        "contentSize": {
            "height": "700dp",
            "width": "100%"
        },
        "enableScrolling": true,
        "horizontalScrollIndicator": false,
        "id": "flxScroller06d5fe23a66b545",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox0d9b635a8f18442",
        "top": "45dp",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxScroller06d5fe23a66b545.setDefaultUnit(kony.flex.DP);
    var flxDetailUser0bf675199a11045 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "250dp",
        "id": "flxDetailUser0bf675199a11045",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0eb0bd791e9ed46",
        "top": "20dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxDetailUser0bf675199a11045.setDefaultUnit(kony.flex.DP);
    var flxDetailMaskAvatar045902b42add547 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "110dp",
        "id": "flxDetailMaskAvatar045902b42add547",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a5f08963f4ad4a",
        "top": "15dp",
        "width": "110dp"
    }, {}, {});
    flxDetailMaskAvatar045902b42add547.setDefaultUnit(kony.flex.DP);
    var imgDetailAvatar0193f51ea51824b = new kony.ui.Image2({
        "height": "100%",
        "id": "imgDetailAvatar0193f51ea51824b",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage0a43d0db432ea4a",
        "src": "ava_stephan.png",
        "top": "0dp",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetailMaskAvatar045902b42add547.add(imgDetailAvatar0193f51ea51824b);
    var flxDetailsTextContainer099920aea1dac4d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "15dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "flxDetailsTextContainer099920aea1dac4d",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "20dp",
        "right": "20dp",
        "skin": "slFbox0aba15169771140",
        "top": "140dp",
        "zIndex": 1
    }, {}, {});
    flxDetailsTextContainer099920aea1dac4d.setDefaultUnit(kony.flex.DP);
    var lblUserName04f0dd6e5551e48 = new kony.ui.Label({
        "id": "lblUserName04f0dd6e5551e48",
        "isVisible": true,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslLabel04b650b5ebc424c",
        "text": "Name goes here...",
        "top": "0dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblUserTitle06394eca227b64f = new kony.ui.Label({
        "id": "lblUserTitle06394eca227b64f",
        "isVisible": true,
        "left": "0dp",
        "right": "0dp",
        "skin": "lblUserTitle02e9dfd57f72847",
        "text": "Designation goes here...",
        "top": "2dp",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDetailsTextContainer099920aea1dac4d.add(lblUserName04f0dd6e5551e48, lblUserTitle06394eca227b64f);
    var flxDetailsFooter0a15e0684716d46 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "50dp",
        "id": "flxDetailsFooter0a15e0684716d46",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "right": "0dp",
        "skin": "CopyslFbox045297c6dd83f48",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxDetailsFooter0a15e0684716d46.setDefaultUnit(kony.flex.DP);
    var lblDate00c9abceee8084a = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblDate00c9abceee8084a",
        "isVisible": true,
        "left": "20dp",
        "right": "20dp",
        "skin": "CopyslLabel063594d25a49a4d",
        "text": "March 10, 2015"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxDetailsFooter0a15e0684716d46.add(lblDate00c9abceee8084a);
    flxDetailUser0bf675199a11045.add(flxDetailMaskAvatar045902b42add547, flxDetailsTextContainer099920aea1dac4d, flxDetailsFooter0a15e0684716d46);
    var flxExpenseLine05295b410075944 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "120dp",
        "id": "flxExpenseLine05295b410075944",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e61db985d5ab42",
        "top": "270dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxExpenseLine05295b410075944.setDefaultUnit(kony.flex.DP);
    var lblExpenseTitle02c655670c35740 = new kony.ui.Label({
        "id": "lblExpenseTitle02c655670c35740",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0da09dd47631a40",
        "text": "New MacBook Pro",
        "top": "15dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblExpenseDesc0c89513617ffe4e = new kony.ui.Label({
        "id": "lblExpenseDesc0c89513617ffe4e",
        "isVisible": true,
        "left": "15dp",
        "right": "70dp",
        "skin": "CopyslLabel0109dc415d05e41",
        "text": "Required for a single demo machine",
        "top": "40dp"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblExpenseCat096f2dae174784f = new kony.ui.Label({
        "bottom": "15dp",
        "id": "lblExpenseCat096f2dae174784f",
        "isVisible": true,
        "left": "15dp",
        "skin": "CopyslLabel0de631b04e99440",
        "text": "Hardware Equipment > $100",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblExpenseCatNum0cbfc6cc957734b = new kony.ui.Label({
        "bottom": "15dp",
        "id": "lblExpenseCatNum0cbfc6cc957734b",
        "isVisible": true,
        "right": 15,
        "skin": "CopyslLabel0de631b04e99440",
        "text": "09823-17237492-AW",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblExpensePrice00be83dae3bec49 = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblExpensePrice00be83dae3bec49",
        "isVisible": true,
        "right": "15dp",
        "skin": "CopyslLabel0445ce196eec043",
        "text": "$1500",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxLineBlue0f5a888ab3e2746 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineBlue0f5a888ab3e2746",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0da89a73d8d2343",
        "width": "100%"
    }, {}, {});
    flxLineBlue0f5a888ab3e2746.setDefaultUnit(kony.flex.DP);
    flxLineBlue0f5a888ab3e2746.add();
    flxExpenseLine05295b410075944.add(lblExpenseTitle02c655670c35740, lblExpenseDesc0c89513617ffe4e, lblExpenseCat096f2dae174784f, lblExpenseCatNum0cbfc6cc957734b, lblExpensePrice00be83dae3bec49, flxLineBlue0f5a888ab3e2746);
    var flxWhite0ac1bd524163148 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "500dp",
        "id": "flxWhite0ac1bd524163148",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0771c8a97677044",
        "top": "390dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxWhite0ac1bd524163148.setDefaultUnit(kony.flex.DP);
    flxWhite0ac1bd524163148.add();
    flxScroller06d5fe23a66b545.add(flxDetailUser0bf675199a11045, flxExpenseLine05295b410075944, flxWhite0ac1bd524163148);
    var flxHeader029d93e78987b4d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "53dp",
        "id": "flxHeader029d93e78987b4d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxWhite0c2396bfea74c49",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxHeader029d93e78987b4d.setDefaultUnit(kony.flex.DP);
    var flxLineHeader0a7541d4dee3a44 = new kony.ui.FlexContainer({
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxLineHeader0a7541d4dee3a44",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "flxLineHeader08e0284b2340247",
        "width": "100%"
    }, {}, {});
    flxLineHeader0a7541d4dee3a44.setDefaultUnit(kony.flex.DP);
    flxLineHeader0a7541d4dee3a44.add();
    var lblTitle0e9d94dcd007746 = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblTitle0e9d94dcd007746",
        "isVisible": true,
        "skin": "CopyslLabel023fbf619701a4e",
        "text": "Details",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHeader029d93e78987b4d.add(flxLineHeader0a7541d4dee3a44, lblTitle0e9d94dcd007746);
    var flxDetailButtonFooter08115e2c7d6d746 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "65dp",
        "id": "flxDetailButtonFooter08115e2c7d6d746",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0776baa4498744e",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxDetailButtonFooter08115e2c7d6d746.setDefaultUnit(kony.flex.DP);
    var btnReject0f800decaba344d = new kony.ui.Button({
        "bottom": 10,
        "focusSkin": "CopyslButtonGlossBlue0905eae72a9654b",
        "height": "45dp",
        "id": "btnReject0f800decaba344d",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslButtonGlossBlue0905eae72a9654b",
        "text": "Reject",
        "top": "10dp",
        "width": "43%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnApprove00065c79782804a = new kony.ui.Button({
        "bottom": 10,
        "focusSkin": "CopyslButtonGlossBlue04b440ca8093c4d",
        "height": "45dp",
        "id": "btnApprove00065c79782804a",
        "isVisible": true,
        "onClick": AS_Button_6c7b3e696e764f839aa5b1d8459e71a9,
        "right": 20,
        "skin": "CopyslButtonGlossBlue04b440ca8093c4d",
        "text": "Approve",
        "top": "10dp",
        "width": "43%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxDetailButtonFooter08115e2c7d6d746.add(btnReject0f800decaba344d, btnApprove00065c79782804a);
    flxMother.add(flxScroller06d5fe23a66b545, flxHeader029d93e78987b4d, flxDetailButtonFooter08115e2c7d6d746);
    frmDetails.add(flxMother);
};

function frmDetailsGlobals() {
    frmDetails = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmDetails,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmDetails",
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
    frmDetails.info = {
        "kuid": "3e4dca950dc343178aee585b2c315371"
    };
};