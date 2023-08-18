"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isuccess(res) {
    return res.status === PaymentStatus.Success;
}
function checkResponse(res) {
    if (isuccess(res)) {
        return res.data.databaseId;
    }
    else
        throw Error(res.data.errorMessage);
}
