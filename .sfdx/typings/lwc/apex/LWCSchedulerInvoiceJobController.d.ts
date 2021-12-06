declare module "@salesforce/apex/LWCSchedulerInvoiceJobController.getCurrentlyScheduleCron" {
  export default function getCurrentlyScheduleCron(param: {cronJobName: any}): Promise<any>;
}
declare module "@salesforce/apex/LWCSchedulerInvoiceJobController.scheduleJob" {
  export default function scheduleJob(param: {cronString: any, cronJobName: any}): Promise<any>;
}
declare module "@salesforce/apex/LWCSchedulerInvoiceJobController.reScheduleJob" {
  export default function reScheduleJob(param: {cronString: any, cronJobName: any}): Promise<any>;
}
declare module "@salesforce/apex/LWCSchedulerInvoiceJobController.deleteScheduledJob" {
  export default function deleteScheduledJob(param: {cronJobName: any}): Promise<any>;
}
