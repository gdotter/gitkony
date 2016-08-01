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