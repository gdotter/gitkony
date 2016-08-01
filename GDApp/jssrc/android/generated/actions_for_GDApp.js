//actions.js file 
function AS_Button_6c7b3e696e764f839aa5b1d8459e71a9(eventobject) {
    frmHome.show();
}

function AS_Button_7cba031767a74bc8b7ad1f4fdfa54fa1(eventobject) {
    return toggleMenu.call(this);
}

function AS_Button_8a6e6363af83459d9fcef4e0737335b8(eventobject) {
    function INVOKE_ASYNC_SERVICE__d2b4ef5b08da4e10b305d7541693d62a_Callback(status, getPurchases) {
        var tempCollection2065 = [];
        var tempData3975 = getPurchases["pur_coll"];
        for (var each in tempData3975) {
            tempCollection2065.push({
                "lblPerson": {
                    "text": tempData3975[each]["emp_name"]
                },
                "imgAva": {
                    "src": tempData3975[each]["emp_image"]
                },
                "lblAmount": {
                    "text": tempData3975[each]["pur_amount"]
                },
                "lblCategory": {
                    "text": tempData3975[each]["pur_cat"]
                },
                "lblDate": {
                    "text": tempData3975[each]["pur_date"]
                },
                "lblTitle": {
                    "text": tempData3975[each]["pur_title"]
                },
            });
        }
        frmHome.segLatest.setData(tempCollection2065);
    }
    if (getPurchases_inputparam == undefined) {
        var getPurchases_inputparam = {};
    }
    getPurchases_inputparam["serviceID"] = "Purchases$getPurchases";
    var getPurchases_httpheaders = {};
    getPurchases_inputparam["httpheaders"] = getPurchases_httpheaders;
    var getPurchases_httpconfigs = {};
    getPurchases_inputparam["httpconfig"] = getPurchases_httpconfigs;
    Purchases$getPurchases = mfintegrationsecureinvokerasync(getPurchases_inputparam, "Purchases", "getPurchases", INVOKE_ASYNC_SERVICE__d2b4ef5b08da4e10b305d7541693d62a_Callback);
}

function AS_Button_8dd8836010404612a9d06095ee3f6884(eventobject) {
    function INVOKE_ASYNC_SERVICE__80c1f668fa37435b89e09648edbff16d_Callback(status, getPurchases) {
        var tempCollection249 = [];
        var tempData1996 = getPurchases["pur_coll"];
        for (var each in tempData1996) {
            tempCollection249.push({
                "lblPerson": {
                    "text": tempData1996[each]["emp_name"]
                },
                "lblDate": {
                    "text": tempData1996[each]["pur_date"]
                },
                "lblCategory": {
                    "text": tempData1996[each]["pur_cat"]
                },
                "lblAmount": {
                    "text": tempData1996[each]["pur_amount"]
                },
                "lblTitle": {
                    "text": tempData1996[each]["pur_title"]
                },
                "imgAva": {
                    "src": tempData1996[each]["emp_image"]
                },
            });
        }
        frmHome.segLatest.setData(tempCollection249);
        frmHome.show();
    }
    if (getPurchases_inputparam == undefined) {
        var getPurchases_inputparam = {};
    }
    getPurchases_inputparam["serviceID"] = "Purchases$getPurchases";
    var getPurchases_httpheaders = {};
    getPurchases_inputparam["httpheaders"] = getPurchases_httpheaders;
    var getPurchases_httpconfigs = {};
    getPurchases_inputparam["httpconfig"] = getPurchases_httpconfigs;
    Purchases$getPurchases = mfintegrationsecureinvokerasync(getPurchases_inputparam, "Purchases", "getPurchases", INVOKE_ASYNC_SERVICE__80c1f668fa37435b89e09648edbff16d_Callback);
}

function AS_Button_a1d1a22873984d9cbbdaddf0944ab3d4(eventobject) {
    frmHome.show();
}

function AS_Form_4468e4c9ce77457a83ea2e326cae8b47(eventobject) {
    function MOVE_ACTION____ee70633f64e442c49513a617220a7c69_Callback() {}

    function MOVE_ACTION____1d39881a9c0a4716bf4f2690d1b57aeb_Callback() {
        frmLogin["flxLogin"].animate(kony.ui.createAnimation({
            "100": {
                "centerX": "50%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": MOVE_ACTION____ee70633f64e442c49513a617220a7c69_Callback
        });
    }

    function MOVE_ACTION____9091033d105f49e0a9ce75ad55467ad2_Callback() {
        frmLogin["imgLogo"].animate(kony.ui.createAnimation({
            "100": {
                "bottom": "20dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": MOVE_ACTION____1d39881a9c0a4716bf4f2690d1b57aeb_Callback
        });
    }
    frmLogin["lblSubtitle"].animate(kony.ui.createAnimation({
        "100": {
            "centerX": "50%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0.5,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": MOVE_ACTION____9091033d105f49e0a9ce75ad55467ad2_Callback
    });
}

function AS_Segment_1aced4bd422b4ea08f23321ba7e6ebaa(eventobject, sectionNumber, rowNumber) {
    frmDetails.show();
}