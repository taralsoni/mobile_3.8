/* module-behaviors@v1.0.4 build with ♥ by bb-lp-cli@v1.9.17 */
!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?exports["module-behaviors"]=a(require("jquery")):e["module-behaviors"]=a(e.jquery)}(this,function(e){return function(e){function a(i){if(n[i])return n[i].exports;var t=n[i]={exports:{},id:i,loaded:!1};return e[i].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}var n={};return a.m=e,a.c=n,a.p="/",a(0)}([function(e,exports,a){e.exports=a(1)},function(e,exports,a){var n;n=function(require,exports,e){"use strict";exports.retail=a(2)}.call(exports,a,exports,e),!(void 0!==n&&(e.exports=n))},function(e,exports,a){var n;n=function(require,exports,e){"use strict";var n=a(3),i={designMode:"true"===bd.designMode},t={parseBoolean:function(e){return"boolean"==typeof e&&e||"string"==typeof e&&/\s*true\s*/i.test(e)||"number"==typeof e&&0!==e}},r=gadgets.pubsub,c={"launchpad-retail.viewAccounts":"accounts","launchpad-retail.accountSelected":"transactions","launchpad-retail.portfolioSelected":"wealth","launchpad-retail.requestMoneyTransfer":"new-transfer","launchpad-retail.transactions.applyFilter":"transactions","launchpad-retail.paymentOrderInitiated":"review-transfers","launchpad-retail.openP2PPreferences":"p2p-preferences","launchpad-retail.openP2PEnrollment":"p2p-enrollment","launchpad-retail.openP2PTransactions":"p2p-transactions","launchpad-retail.openCardManagement":"card-management","launchpad-retail.viewProfile":"profile","launchpad-retail.openEBillDashboard":"billpay-dashboard","launchpad-retail.openDeposits":"open-deposits","launchpad-retail.depositDetails":"idfc-view-deposit","launchpad-retail.ProfileContact":"profile-contact","launchpad-retail.depositsClosure":"deposits-closure","launchpad-retail.profileContactWidgetOpen":"view-profile",contactsWidget:"address-book","launchpad-retail.reviewTransfersApp":"review-transfers-transfers",TrackServiceRequest:"track-service-request",MyApp:"service-request","launchpad-retail.newUserRegistration":"new-user","launchpad-retail.forgotAPIN":"forgot-apin","launchpad-retail.viewSettings":"view-settings","launchpad-retail.forgotPassword":"ForgetPassword","launchpad-retail.account-unlock":"account-unlock","launchpad.challenge.questions":"challenge-questions","launchpad.challenge.questions.postLogin":"challenge-questions-postLogin","launchpad-retail.forgotLoginId":"forgot-id","launchpad-retail.requestNewTransfer":"new-transfer","launchpad-retail.refreshAccountSummary":"idfcaccounts","launchpad-retail.serviceRequestOpen":"service-request","launchpad-retail.serviceRequestOpenRd":"service-request","launchpad-retail.goBackReviewTransfer":"review-transfers-transfers","launchpad-retail.summary":"profile-summary","launchpad-retail.openLoanSummary":"idfc-loan-summary","launchpad-billPay.add-biller":"add-biller","launchpad-billPay.transaction-history":"transaction-history","launchpad-billPay.manage-biller":"manage-biller","launchpad-retail.loanCertificate":"loan-Certificate","launchpad-retail.grouping.serviceRequest":"service-request","launchpad-retail.grouping.debitcard":"group-dcms","launchpad-retail.cardSummary":"cardSummary","launchpad-retail.blockCard":"blockCard","launchpad-retail.dcmsLimitManagement":"cardLimit","launchpad-retail.limitFungibility":"idfc-limit-fungibility","launchpad-retail.openRecurringDeposits":"createRecurringDeposits","launchpad-retail.recurringDepositDetails":"recurringDetails","launchpad-retail.recurringDepositsClosure":"recurringClosure","launchpad-retail.openLoanStmtAcc":"loan-statementofaccount","launchpad-retail.openRepaymentSchd":"loan-repayment","launchpad-retail.openLoanSimulator":"loan-simulator","launchpad-billPay.idfc-view-bills":"idfc-view-bills","launchpad-billPay.idfc-quick-pay":"idfc-quick-pay","launchpad-billPay.recharge":"recharge","launchpad-retail.limit-management":"limit-management","launchpad.create-era":"idfc-create-era","launchpad-retail.stop-cheque":"idfc-stop-cheque","launchpad-retail.dashboard":"dashboard","launchpad-business.dashboard-settings":"idfcbb-dashboard-settings","launchpad-business.toa-link":"idfcbb-toa-link","launchpad-business.toa-delink":"idfcbb-toa-delink","launchpad-business.toa-sweeps":"idfcbb-toa-sweeps","launchpad-business.toa-apply":"idfcbb-toa-apply","launchpad-business.toa-udc":"idfcbb-toa-udc","launchpad-retail.sweepMandate":"sweepMandate","launchpad-business.portfolioChange":"account-summary","launchpad-business.transactionApproval":"idfcbb-transaction-approval","launchpad-business.depositsClosure":"idfcbb-deposits-closure","launchpad-business.accountSelected":"idfcbb-transaction","launchpad-business.refreshAccountSummary":"idfcbb-account","launchpad-business.openDeposits":"idfcbb-open-deposits","launchpad-business.requestMoneyTransfer":"idfcbb-new-transfer","launchpad-business.reviewTransfersApp":"idfcbb-review-future-transfers","launchpad-business.paymentOrderInitiated":"idfcbb-review-transfers","launchpad-business.requestNewTransfer":"idfcbb-new-transfer","launchpad-business.serviceRequestOpen":"idfcbb-service-request","launchpad-business.serviceRequestOpenRd":"idfcbb-service-request","launchpad-retail.modifyNomineeOpen":"modify-nominee","launchpad-business.depositDetails":"idfcbb-view-deposit","launchpad-retail.delNomineeOpen":"del-nominee","launchpad-business.contactsWidget":"idfcbb-addressbook","launchpad-business.openRepaymentSchd":"idfcbb-loan-repayment-schedule","launchpad-business.openLoanStmtAcc":"idfcbb-loan-soa","launchpad-business.serviceRequest":"idfcbb-service-request","launchpad-business.trackRequest":"idfcbb-track-service-request","launchpad-business.groupTransactions":"idfcbb-group-transactions","launchpad-business.TransactionSummary":"idfcbb-transaction-summary","launchpad-business.RaiseAnIssue":"idfcbb-register-complaint","launchpad-business.InterestLetter":"idfcbb-interest-letter","launchpad-business.TradeForms":"trade-documents-forms","launchpad-business.viewProfileWidgetOpen":"idfcbb-view-profile","launchpad-business.myToa":"idfcbb-toa","launchpad-business.changePassword":"idfcbbe-admin-user-change-password","launchpad-business-sp.ServiceRequest":"idfcbbsp-service-request","launchpad-userMaintenance.operation":"userresetoperation","launchpad-userMaintenance.reset":"userresetmerchant","launchpad-userMaintenance.createMer":"createmerchantuser-widget","launchpad-userMaintenance.ceateOpt":"createoperationuser-widget","launchpad-userMaintenance.deactivateMer":"deactivateuser-widget","launchpad-userMaintenance.deactivateOpt":"deactivateoperation-widget","launchpad-merchantMaintenance.createMaker":"createMaker","launchpad-merchantMaintenance.createChecker":"createChecker","launchpad-merchantMaintenance.modifyMaker":"modifyMaker","launchpad-merchantMaintenance.modifyChecker":"modifyChecker","launchpad-merchantMaintenance.deleteMaker":"deleteMaker","launchpad-merchantMaintenance.deleteChecker":"deleteChecker","launchpad-merchantMaintenance.activateMaker":"makerActivate","launchpad-merchantMaintenance.activateChecker":"activateChecker","launchpad-merchantMaintenance.deactivateMaker":"deactivateMaker","launchpad-merchantMaintenance.deactivateChecker":"deactivateChecker","launchpad-retail.makerDeactivate":"makerdeact","launchpad-retail.makerActivate":"makeract","launchpad-retail.makerDelete":"makerdel","launchpad-retail.checkerDeactivate":"checkerdeact","launchpad-retail.checkerActivate":"checkeract","launchpad-retail.checkerDelete":"checkerdel","launchpad-change-password":"change-password","launchpad-retail.insuranceSummary":"idfc-insurance-summary","launchpad-retail.lifeInsurance":"idfc-life-insurance","launchpad-retail.healthInsurance":"idfc-health-insurance","launchpad-retail.motorInsurance":"idfc-motor-insurance","launchpad-retail.travelInsurance":"idfc-travel-insurance","launchpad-retail.ulipInsurance":"idfc-ulip-insurance","launchpad-goldBond.investments":"idfc-gold-investments","launchpad-goldBond-history":"idfc-gold-bond-history","launchpad-goldBond-checker":"idfc-gold-bond-checker","launchpad-goldBond-maker":"idfc-gold-bond-maker","launchpad-retail.openPersonalLoanSummary":"idfc-personal-loan-summary","launchpad-retail.openPersonalLoanRepaymentSchedule":"personal-loan-repayment","launchpad-retail.openPersonalLoanSOA":"personal-loan-statementofaccount","launchpad-retail.openPersonalLoanDetail":"personal-loan-Detail","launchpad-retail.openLAPSummary":"idfc-lap-summary","launchpad-retail.openLAPDetail":"lap-Detail","launchpad-retail.openLAPRepaymentSchedule":"lap-repayment","launchpad-retail.openLAPSOA":"lap-statementofaccount","launchpad-retail.openApplyNow":"apply-now","launchpad-retail.openLoanApplyNow":"loan-apply-now","launchpad-retail.no-loan-apply-now":"no-loan-apply-now","launchpad-retail.groupLoans":"group-Loans","launchpad-retail.groupTfundsTransfer":"group-funds-transfer","launchpad-retail.groupDcms":"group-dcms","launchpad-retail.groupRecurringDeposits":"group-RecurringDeposits","launchpad-retail.limitManagement":"limit-management","launchpad-retail.groupDeposits":"group-deposits","launchpad-business.bulkFileUpload":"idfcbb-bulk-file-upload","launchpad-business.bulkFileStatusInqiry":"idfcbb-file-status-inquiry","launchpad-business.pastApprovals":"idfcbb-past-approvals","launchpad-business.initByMe":"idfcbb-initiated-by-me","launchpad-business.rejByMe":"idfcbb-rejected-by-me","launchpad-business.addNominee":"idfcbb-add-nominee","launchpad-business-soleprop.addNominee":"idfcbbsp-add-nominee","launchpad-business.changeEmail":"idfcbb-change-email","launchpad-business-soleprop.trackSR":"idfcbbsp-track-service-request-widget","launchpad-wms.MFReports":"idfc-mf-report","launchpad-wms.Investments":"idfc-group-investments","launchpad.ifscSearch":"idfc-ifsc-search","launchpad-bib-billPay.add-biller":"idfcbb-add-biller","launchpad-bib-billPay.transaction-history":"idfcbb-transaction-history","launchpad-bib-billPay.manage-biller":"idfcbb-manage-biller","launchpad-bib-billPay.view-bills":"idfcbb-view-bills","launchpad-bib-billPay.quick-pay":"idfcbb-quick-pay","launchpad-bib-billPay.recharge":"idfcbb-recharge"},s={a:"accounts",t:"transactions",n:"new-transfer",c:"address-book",r:"review-transfers",l:"places",p:"p2p-transactions",e:"p2p-enrollment",f:"p2p-preferences",b:"e-bill",x:"external-accounts"},l="launchpad-retail.behavior",d=function(e,a){e.loadByBehavior(a,function(){e.showByBehavior(a)})},o=function(e,a){var n=c[a];r.subscribe(a,function(a){a&&a._noBehavior||d(e,n||a.tag)})},u=function(e){if(this===e.target){var a=this,r="function"==typeof a.loadByBehavior&&"function"==typeof a.showByBehavior;if(r){for(var u in c)c.hasOwnProperty(u)&&o(a,u);o(a,l),n(document).on("keypress.retail",function(e){var n=String.fromCharCode(e.which).toLowerCase(),r=s[n],c=e.target.tagName.toLowerCase(),l=e.target.getAttribute("contenteditable"),o="input"!==c&&"textarea"!==c&&"select"!==c&&!l;r&&o&&!t.parseBoolean(i.designMode)&&d(a,r)})}else console.warn("Attempting to map behaviors to an item which does implement the behaviors interface")}};e.exports={showWidgetByEventMap:c,showWidgetByHotKeyMap:s,RetailBehaviors:{behaviors:{DOMNodeInsertedIntoDocument:u}}}}.call(exports,a,exports,e),!(void 0!==n&&(e.exports=n))},function(a,exports){a.exports=e}])});
//# sourceMappingURL=main.js.map