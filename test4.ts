 interface IPayment {
 	sum: number;
 	from: number;
 	to: number;
 }

 enum PaymentStatus {
 	Success = 'success',
 	Failed = 'failed',
 }

 interface IPaymentRequest extends IPayment { }

 interface IDataSuccess extends IPayment {
 	databaseId: number;
 }

 interface IDataFailed {
 	errorMessage: string;
 	errorCode: number;
 }

 interface IResponseSuccess {
 	status: PaymentStatus.Success;
 	data: IDataSuccess;
 }

 interface IResponseFailed {
 	status: PaymentStatus.Failed;
 	data: IDataFailed;
 }

 // проверять статус для платежа
 // сделать функцию которая возвращает в случае успеха dbid а в случае неуспеха - ошибку

 type f = (res: IDataFailed | IDataSuccess) => number

 function isuccess(res: IResponseFailed | IResponseSuccess): res is IResponseSuccess {
    return res.status === PaymentStatus.Success;
 }

 function checkResponse(res: IResponseFailed | IResponseSuccess): number {
     if (isuccess(res)) {
         return res.data.databaseId
     } else throw Error(res.data.errorMessage)
 }
