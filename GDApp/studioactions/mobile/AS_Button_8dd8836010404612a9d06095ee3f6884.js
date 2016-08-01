function AS_Button_8dd8836010404612a9d06095ee3f6884(eventobject) {
    function INVOKE_ASYNC_SERVICE__80c1f668fa37435b89e09648edbff16d_Callback(status, getPurchases) {
        var tempCollection4551 = [];
        var tempData8675 = getPurchases["pur_coll"];
        for (var each in tempData8675) {
            tempCollection4551.push({
                "lblPerson": {
                    "text": tempData8675[each]["emp_name"]
                },
                "lblDate": {
                    "text": tempData8675[each]["pur_date"]
                },
                "lblCategory": {
                    "text": tempData8675[each]["pur_cat"]
                },
                "lblAmount": {
                    "text": tempData8675[each]["pur_amount"]
                },
                "lblTitle": {
                    "text": tempData8675[each]["pur_title"]
                },
                "imgAva": {
                    "src": tempData8675[each]["emp_image"]
                },
            });
        }
        frmHome.segLatest.setData(tempCollection4551);
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