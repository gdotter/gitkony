function AS_Form_e1298764665c40a9a65c0eb82b5c2c73(eventobject) {
    function MOVE_ACTION____fadf7514c15b4942aa2b5240fd6a4389_Callback() {}

    function MOVE_ACTION____e1a799e63f6c4caa84c6d82e761296b6_Callback() {
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
            "animationEnd": MOVE_ACTION____fadf7514c15b4942aa2b5240fd6a4389_Callback
        });
    }

    function MOVE_ACTION____f90ce07267bd47fa9b9c26149a28cc39_Callback() {
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
            "animationEnd": MOVE_ACTION____e1a799e63f6c4caa84c6d82e761296b6_Callback
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
        "animationEnd": MOVE_ACTION____f90ce07267bd47fa9b9c26149a28cc39_Callback
    });
}