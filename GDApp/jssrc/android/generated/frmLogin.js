function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "slLabel",
        "text": "Welcome back!",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "20dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblSubtitle = new kony.ui.Label({
        "centerX": "-50%",
        "id": "lblSubtitle",
        "isVisible": true,
        "skin": "lblgrey125",
        "text": "Good to see you again, please login below",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxLogin = new kony.ui.FlexContainer({
        "centerX": "150%",
        "clipBounds": true,
        "height": "220dp",
        "id": "flxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "flxwhiteopac0869a975be0bf42",
        "top": "220dp",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxLogin.setDefaultUnit(kony.flex.DP);
    var txtUsername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtwhiteblurbrdr013ec7316132447",
        "height": "40dp",
        "id": "txtUsername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "15dp",
        "placeholder": "Username",
        "right": "15dp",
        "secureTextEntry": false,
        "skin": "txtwhiteblurbrdr013ec7316132447",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "20dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "txtwhiteblurbrdr013ec7316132447",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "focusSkin": "txtwhiteblurbrdr013ec7316132447",
        "height": "40dp",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "15dp",
        "placeholder": "Password",
        "right": "15dp",
        "secureTextEntry": true,
        "skin": "txtwhiteblurbrdr013ec7316132447",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "80dp"
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "txtwhiteblurbrdr013ec7316132447",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnLogin = new kony.ui.Button({
        "bottom": "20dp",
        "focusSkin": "btnbluef0746b7e5a76e246",
        "height": "50dp",
        "id": "btnLogin",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_Button_8dd8836010404612a9d06095ee3f6884,
        "right": "30dp",
        "skin": "btnblue00709d95dbd7448",
        "text": "Login",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLogin.add(txtUsername, txtPassword, btnLogin);
    var imgLogo = new kony.ui.Image2({
        "bottom": "-170dp",
        "centerX": "50%",
        "height": "150dp",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "company_logo.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmLogin.add(lblTitle, lblSubtitle, flxLogin, imgLogo);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "bounces": false,
        "enableScrolling": false,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_4468e4c9ce77457a83ea2e326cae8b47,
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
    frmLogin.info = {
        "kuid": "8700d7bcd3094cfc9fd02d1d22369598"
    };
};