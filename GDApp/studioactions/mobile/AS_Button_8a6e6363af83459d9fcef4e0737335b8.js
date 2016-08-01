function AS_Button_8a6e6363af83459d9fcef4e0737335b8(eventobject) {
    function INVOKE_ASYNC_SERVICE__d2b4ef5b08da4e10b305d7541693d62a_Callback(status, getPurchases) {
        var tempCollection3769 = [];
        var tempData8066 = getPurchases["pur_coll"];
        for (var each in tempData8066) {
            tempCollection3769.push({
                "lblPerson": {
                    "text": tempData8066[each]["emp_name"]
                },
                "imgAva": {
                    "src": tempData8066[each]["emp_image"]
                },
                "lblAmount": {
                    "text": tempData8066[each]["pur_amount"]
                },
                "lblCategory": {
                    "text": tempData8066[each]["pur_cat"]
                },
                "lblDate": {
                    "text": tempData8066[each]["pur_date"]
                },
                "lblTitle": {
                    "text": tempData8066[each]["pur_title"]
                },
            });
        }
        frmHome.segLatest.setData(tempCollection3769);
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