function Hashtable(){function e(e){for(var r=null,a=0;"number"==typeof n[a];)a+=1;n[a]=0,this.hasNext=this.hasMoreElements=function(){return n[a]<i?!0:("number"==typeof n[a]&&(n[a]=null),!1)},this.next=this.nextElement=function(){return this.hasNext?(r=n[a],t[e][n[a]++]):null},this.remove=function(){"number"==typeof r&&(o.remove(t.__indexToKeys[r]),r=null)}}var t={__indexToValue:[],__indexToKeys:[]},n=[],i=0,o=this;this.get=function(e){return"number"==typeof t[e]?t.__indexToValue[t[e]]:null},this.put=function(e,n){"number"==typeof t[e]?t.__indexToValue[t[e]]=n:(t[e]=i,t.__indexToValue[i]=n,t.__indexToKeys[i++]=e)},this.remove=function(e){var o=t[e];if("number"==typeof o){var r=0;for(delete t[e],i-=1,r=o;i>r;r++)t.__indexToValue[r]=t.__indexToValue[r+1],t[t.__indexToKeys[r]=t.__indexToKeys[r+1]]=r;for(r=0;r<n.length;r++)n[r]&&o<n[r]&&(n[r]-=1)}},this.size=function(){return i},this.__enumerate=function(t){return new e(t)},Hashtable.prototype.elements=function(){return this.__enumerate("__indexToValue")},Hashtable.prototype.keys=function(){return this.__enumerate("__indexToKeys")},Hashtable.prototype.clear=function(){for(var e=this.keys();e.hasNext();)this.remove(e.next())},Hashtable.prototype.toString=function(){for(var e,t=" =&gt; ",n="\r\n",i=this.keys(),o="";i.hasNext();)e=i.next(),o+=e+t+this.get(e)+n;return o},Hashtable.prototype.contains=function(e){for(var t=this.elements();t.hasNext();)if(t.next()==e)return!0;return!1},Hashtable.prototype.containsValue=Hashtable.prototype.contains,Hashtable.prototype.containsKey=function(e){return null!==this.get(e)},Hashtable.prototype.isEmpty=function(){return 0===this.size()},Hashtable.prototype.putAll=function(e){if(e.constructor==Hashtable)for(var t,n=e.keys();n.hasNext();)t=n.next(),this.put(t,e.get(t))},Hashtable.prototype.clone=function(){var e=new Hashtable;return e.putAll(this),e},Hashtable.prototype.equals=function(e){return e==this}}function startsWith(e,t){return 0===e.indexOf(t)}function DomDataCollection(e){function t(){}function n(e){return"function"==typeof e}var o=this;o.config={recursion_level:1,collection_mode:"partial",functionsToExclude:[],function_list_size:1024,json_script:e?e:"json2.js"},o.emptyDomData=function(){o.dom_data={functions:{names:[],excluded:{size:0,count:0},truncated:!1},inputs:[],iFrames:[],scripts:[],collection_status:DomDataCollection.NotStarted}},o.startInspection=function(){var e=!1,t=!0;if(BrowserDetect.init(),"Explorer"!==BrowserDetect.browser)try{o.inspectJSFunctions(),t=!1}catch(n){e=e||!0}else o.dom_data.functions=[],(void 0===o.dom_data.functions||void 0===o.dom_data.functions.names)&&(o.dom_data.functions={names:[],excluded:{size:0,count:0},truncated:!1});try{o.inspectFrames(),t=!1}catch(n){e=e||!0}try{o.inspectScripts(),t=!1}catch(n){e=e||!0}try{o.inspectInputFields(),t=!1}catch(n){e=e||!0}e?t?o.dom_data.collection_status=DomDataCollection.Fail:o.dom_data.collection_status=DomDataCollection.Partial:o.dom_data.collection_status=DomDataCollection.Success,"Explorer"!==BrowserDetect.browser&&o.handleSizeLimit()},o.domDataAsJSON=function(){return stripIllegalChars(JSON.stringify(o.dom_data))},o.recursiveGetAllFunctionNamesUnderElement=function(e,i,r){var a,c,s,l=o.config,u=l.recursion_level,d=l.collection_mode;(void 0===o.dom_data.functions||void 0===o.dom_data.functions.names)&&(o.dom_data.functions={names:[],excluded:{size:0,count:0},truncated:!1});var p=o.dom_data.functions,f=p.excluded;for(var g in i)try{var m=i[g];if(a=""+m,e.length>0?prefix=e+".":prefix="",c=prefix+g,n(m))if(o.functionShouldBeCollected(m,g)){var v=p.names;s=v.length,v[s]=c}else"partial"==d&&(f.size+=a.length,f.count++);u>r+1?o.recursiveGetAllFunctionNamesUnderElement(c,m,r+1):p.names.sort()}catch(h){window.console||(window.console={},window.console.info=t,window.console.log=t,window.console.warn=t,window.console.error=t),console&&console.log&&console.log("error counting functions: "+h.toString())}};var r=new Hashtable;o.initFunctionsToExclude=function(){r&&r.clear();for(var e=o.config.functionsToExclude,t=e.length;t--;)r.put(e[t],"")},o.functionShouldBeCollected=function(e,t){return"full"==o.config.collection_mode?!0:(0===r.size()&&o.initFunctionsToExclude(),r.containsKey(t)?!1:!0)},o.inspectJSFunctions=function(){o.dom_data.functions=[],o.recursiveGetAllFunctionNamesUnderElement("",window,0)},o.handleSizeLimit=function(){var e=o.dom_data,t=o.config,n=t.function_list_size,i=e.functions;i.names.sort();var r=JSON.stringify(e);0>n&&(n=0);var a=0;if("full"!=t.colllection_mode&&r.length>n){for(var c=i.names,s=c.toString(),l=r.length-JSON.stringify(c).length+"[]".length,u=!1,d=c.length;!u;)1e3==a++&&(u=!0),lastComma=s.lastIndexOf(","),lastComma>=0&&d>0?(quotation_marks=2*d,l+lastComma+quotation_marks>n?(s=s.substring(0,lastComma-1),d--):u=!0):u=!0;d>1?(i.truncated=!0,i.names=i.names.slice(0,d-1),e.functions.truncated=!0):(o.emptyDomData(),e=o.dom_data,e.collection_status=DomDataCollection.Partial,e.functions.truncated=!0)}},o.inspectFrames=function(){o.countElements("iframe")},o.countElements=function(e){var t=document.getElementsByTagName(e);void 0===o.dom_data.iFrames&&(o.dom_data.iFrames=[]);var n=o.dom_data.iFrames,r=n.length;for(i=0;i<t.length;i++)n[r+i]=""+t[i].src;n.sort()},o.inspectScripts=function(){var e=document.getElementsByTagName("script");o.dom_data.scripts=[];for(var t=0;t<e.length;t++)o.dom_data.scripts[t]=e[t].text.length},o.collectFields=function(e){var t=document.getElementsByTagName(e);void 0===o.dom_data.inputs&&(o.dom_data.inputs=[]);for(var n=o.dom_data.inputs,i=n.length,r=t.length;r--;){var a=t[r],c=a.name,s=a.id;c&&c.length>0?element_name=c:s&&s.length>0?element_name=s:element_name="NO_NAME",n[i+r]=element_name}n.sort()},o.inspectInputFields=function(){o.collectFields("input"),o.collectFields("textarea"),o.collectFields("select"),o.collectFields("button")},loadJSON=function(){if(!window.JSON){var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src=o.config.json_script,e.appendChild(t)}},o.emptyDomData(),loadJSON()}function IE_FingerPrint(){this.deviceprint_browser=function(){var e=navigator.userAgent.toLowerCase();return t=e+SEP+navigator.appVersion+SEP+navigator.platform,t+=SEP+navigator.appMinorVersion+SEP+navigator.cpuClass+SEP+navigator.browserLanguage,t+=SEP+ScriptEngineBuildVersion(),t},this.deviceprint_software=function(){var t="",o=!0;try{document.body.addBehavior("#default#clientCaps");var r,a=n.length;for(i=0;i<a;i++){r=activeXDetect(n[i]);var c=e[i];r?o===!0?(t+=c+PAIR+r,o=!1):t+=SEP+c+PAIR+r:(t+="",o=!1)}}catch(s){}return t};var e=["abk","wnt","aol","arb","chs","cht","dht","dhj","dan","dsh","heb","ie5","icw","ibe","iec","ieh","iee","jap","krn","lan","swf","shw","msn","wmp","obp","oex","net","pan","thi","tks","uni","vtc","vnm","mvm","vbs","wfd"],n=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","47F67D00-9E55-11D1-BAEF-00C04FC2D130","76C19B38-F0C8-11CF-87CC-0020AFEECF20","76C19B34-F0C8-11CF-87CC-0020AFEECF20","76C19B33-F0C8-11CF-87CC-0020AFEECF20","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","283807B5-2C60-11D0-A31D-00AA00B92C03","44BBA848-CC51-11CF-AAFA-00AA00B6015C","76C19B36-F0C8-11CF-87CC-0020AFEECF20","89820200-ECBD-11CF-8B85-00AA005B4383","5A8D6EE0-3E18-11D0-821E-444553540000","630B1DA0-B465-11D1-9948-00C04F98BBC9","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","76C19B30-F0C8-11CF-87CC-0020AFEECF20","76C19B31-F0C8-11CF-87CC-0020AFEECF20","76C19B50-F0C8-11CF-87CC-0020AFEECF20","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20","5945C046-LE7D-LLDL-BC44-00C04FD912BE","22D6F312-B0F6-11D0-94AB-0080C74C7E95","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","44BBA842-CC51-11CF-AAFA-00AA00B6015B","76C19B32-F0C8-11CF-87CC-0020AFEECF20","76C19B35-F0C8-11CF-87CC-0020AFEECF20","CC2A9BA0-3BDD-11D0-821E-444553540000","3BF42070-B3B1-11D1-B5C5-0000F8051515","10072CEC-8CC1-11D1-986E-00A0C955B42F","76C19B37-F0C8-11CF-87CC-0020AFEECF20","08B0E5C0-4FCB-11CF-AAA5-00401C608500","4F645220-306D-11D2-995D-00C04F98BBC9","73FA19D0-2D75-11D2-995D-00C04F98BBC9"]}function Mozilla_FingerPrint(){}function Opera_FingerPrint(){}function Timer(){this.startTime=(new Date).getTime()}function getRandomPort(){return Math.floor(6e4*Math.random()+4e3)}function BlackberryLocationCollector(){var e=this,t=null;this.getGeolocationWatchId=function(){return t};var n=null;this.getGeolocationLastPosition=function(){return n};var i=4;this.getGeolocationStatusCode=function(){return i};var o="";this.getGeolocationErrorMessage=function(){return o};var r={aidMode:2,timeout:180,relevancy:120,expiration:48,alertDebug:!1},a=-1,c=0;this.getInvokeCount=function(){return c},this.handleBlackBerryLocationTimeout=function(){-1!=a&&(e.stopWatch(),i=3,0===c&&0!==r.aidMode&&(c++,e.startLocationWatch()))},this.handlePosition=function(){clearTimeout(a),a=-1;var t=!1;if(0===blackberry.location.latitude&&0===blackberry.location.longitude)r.alertDebug&&alert("Got empty position"),null===n&&(i=2);else{var o=null;o=blackberry.location.timestamp?getTimestampInMillis(blackberry.location.timestamp):(new Date).getTime();var s=(new Date).getTime();if(s-o<=60*r.expiration*60*1e3)if(null===n||o>n.timestamp){var l=null===n?0:n.timestamp;r.alertDebug&&alert("Saved new position. New timestamp: "+o+" Old: "+l),n={timestamp:o,coords:{latitude:blackberry.location.latitude,longitude:blackberry.location.longitude}},i=0}else r.alertDebug&&alert("New position is not saved. New timestamp: "+o+" Old: "+n.timestamp);else r.alertDebug&&alert("New position is not saved. It is expired: "+1e3*(s-o)*60*60+" hours old")}if(null!==n){var s=(new Date).getTime();t=s-n.timestamp<1e3*r.relevancy}e.stopWatch(),r.alertDebug&&alert("Relevant position? "+t),(0===c&&0!==r.aidMode||!t)&&(c++,e.startLocationWatch())},this.init=function(e,t,n,i){e>=0&&2>=e&&(r.aidMode=e),null!==t&&t>=90&&300>=t&&(r.timeout=t),null!==n&&n>=60&&240>=n&&(r.relevancy=n),null!==i&&i>=24&&60>=i&&(r.expiration=i)},this.startLocationWatch=function(){0===c?blackberry.location.setAidMode(0):blackberry.location.setAidMode(r.aidMode);var n=1e3*r.timeout;return a=setTimeout("geoLocator.handleBlackBerryLocationTimeout()",n),blackberry.location.onLocationUpdate(e.handlePosition),blackberry.location.refreshLocation(),t=1,!0},this.stopWatch=function(){try{blackberry.location.removeLocationUpdate(e.handlePosition)}catch(n){}t=-2},this.generateGeolocationJSONStruct=function(){var e=null;if(null!==n){var t=convertTimestampToGMT(n.timestamp);e={GeoLocationInfo:[{Status:i,Longitude:n.coords.longitude,Latitude:n.coords.latitude,Timestamp:t}]}}else e={GeoLocationInfo:[{Status:i}]};return JSON.stringify(e)}}function detectFields(){var e,t,n="form",i="input",o=document.getElementsByTagName("form"),r=o.length,a=[];a.push("url="+window.location.href);for(var c=0;r>c;c++){a.push(n+"="+o[c].name),e=o[c].getElementsByTagName("input"),t=e.length;for(var s=0;t>s;s++)"hidden"!=e[s].type&&a.push(i+"="+e[s].name)}var l=a.join("|");return l}function FingerPrint(){var e="3.4.1.0_1",t=new Hashtable;t.put("npnul32","def"),t.put("npqtplugin6","qt6"),t.put("npqtplugin5","qt5"),t.put("npqtplugin4","qt4"),t.put("npqtplugin3","qt3"),t.put("npqtplugin2","qt2"),t.put("npqtplugin","qt1"),t.put("nppdf32","pdf"),t.put("NPSWF32","swf"),t.put("NPJava11","j11"),t.put("NPJava12","j12"),t.put("NPJava13","j13"),t.put("NPJava32","j32"),t.put("NPJava14","j14"),t.put("npoji600","j61"),t.put("NPJava131_16","j16"),t.put("NPOFFICE","mso"),t.put("npdsplay","wpm"),t.put("npwmsdrm","drm"),t.put("npdrmv2","drn"),t.put("nprjplug","rjl"),t.put("nppl3260","rpl"),t.put("nprpjplug","rpv"),t.put("npchime","chm"),t.put("npCortona","cor"),t.put("np32dsw","dsw"),t.put("np32asw","asw"),this.deviceprint_version=function(){return e},this.deviceprint_browser=function(){var e=navigator.userAgent.toLowerCase(),t=e+SEP+navigator.appVersion+SEP+navigator.platform;return t},this.deviceprint_software=function(){var e="",n=!0,o="",r="",a=navigator.plugins,c=navigator.mimeTypes;if(a.length>0){var s="",l="Plugins",u=a.length;for(i=0;i<u;i++)plugin=a[i],s=stripFullPath(plugin.filename,l,"."),n===!0?(r=t.containsKey(s),r?(o+=t.get(s),n=!1):(o="",n=!1)):(r=t.containsKey(s),o+=r?SEP+t.get(s):"");e=stripIllegalChars(o)}else if(c.length>0)for(r="",i=0;i<c.length;i++)mimeType=c[i],n===!0?(r=t.containsKey(mimeType),r?(e+=t.get(mimeType)+PAIR+mimeType,n=!1):(e+="unknown"+PAIR+mimeType,n=!1)):(r=t.containsKey(mimeType),r?e+=SEP+t.get(mimeType)+PAIR+mimeType:o+="");return e},this.deviceprint_display=function(){var e="";return self.screen&&(e+=screen.colorDepth+SEP+screen.width+SEP+screen.height+SEP+screen.availHeight),e},this.deviceprint_all_software=function(){var e="",t=!0,n=navigator.plugins,o=n.length;if(o>0){var r="",a="";for(i=0;i<o;i++){var c=n[i];a=c.filename,a=stripFullPath(a,"Plugins","."),t===!0?(r+=a,t=!1):r+=SEP+a}e=stripIllegalChars(r)}return e},this.deviceprint_timezone=function(){var e=(new Date).getTimezoneOffset()/60*-1,t=new Date;return t.deviceprint_dst()&&e--,e},Date.prototype.deviceprint_stdTimezoneOffset=function(){var e=new Date(this.getFullYear(),0,1),t=new Date(this.getFullYear(),6,1);return Math.max(e.getTimezoneOffset(),t.getTimezoneOffset())},Date.prototype.deviceprint_dst=function(){return this.getTimezoneOffset()<this.deviceprint_stdTimezoneOffset()},this.deviceprint_language=function(){var e,t=navigator.language,n=navigator.browserLanguage,i=navigator.systemLanguage,o=navigator.userLanguage;return e="undefined"!=typeof t?"lang"+PAIR+t+SEP:"undefined"!=typeof n?"lang"+PAIR+n+SEP:"lang"+PAIR+SEP,e+="undefined"!=typeof i?"syslang"+PAIR+i+SEP:"syslang"+PAIR+SEP,e+="undefined"!=typeof o?"userlang"+PAIR+o:"userlang"+PAIR},this.deviceprint_java=function(){var e=navigator.javaEnabled()?1:0;return e},this.deviceprint_cookie=function(){var e=navigator.cookieEnabled?1:0;return"undefined"!=typeof navigator.cookieEnabled||e||(document.cookie="testcookie",e=-1!==document.cookie.indexOf("testcookie")?1:0),e},this.deviceprint_appName=function(){var e=navigator.appName;return"undefined"!=typeof e?e:""},this.deviceprint_appCodeName=function(){var e=navigator.appCodeName;return"undefined"!=typeof e?e:""},this.deviceprint_online=function(){var e=navigator.onLine;return"undefined"!=typeof e?e:""},this.deviceprint_opsProfile=function(){var e=navigator.opsProfile;return"undefined"!=typeof e&&null!==e?e:""},this.deviceprint_userProfile=function(){var e=navigator.userProfile;return"undefined"!=typeof e&&null!==e?e:""},this.deviceprint_screen_availWidth=function(){var e=screen.availWidth;return"undefined"!=typeof e?e:""},this.deviceprint_screen_pixelDepth=function(){var e=screen.pixelDepth;return"undefined"!=typeof e?e:""},this.deviceprint_screen_bufferDepth=function(){var e=screen.bufferDepth;return"undefined"!=typeof e?e:""},this.deviceprint_screen_deviceXDPI=function(){var e=screen.deviceXDPI;return"undefined"!=typeof e?e:""},this.deviceprint_screen_deviceYDPI=function(){var e=screen.deviceYDPI;return"undefined"!=typeof e?e:""},this.deviceprint_screen_logicalXDPI=function(){var e=screen.logicalXDPI;return"undefined"!=typeof e?e:""},this.deviceprint_screen_logicalYDPI=function(){var e=screen.logicalYDPI;return"undefined"!=typeof e?e:""},this.deviceprint_screen_fontSmoothingEnabled=function(){var e=screen.fontSmoothingEnabled;return"undefined"!=typeof e?e:""},this.deviceprint_screen_updateInterval=function(){var e=screen.updateInterval;return"undefined"!=typeof e?e:""},this.deviceprint_ping_in=function(){return ProxyCollector&&ProxyCollector.internalPingTime?ProxyCollector.internalPingTime:""},this.deviceprint_ping_ex=function(){return ProxyCollector&&ProxyCollector.externalPingTime?ProxyCollector.externalPingTime:""}}function urlEncode(e){var t=encodeURIComponent(e).replace(/\~/g,"%7E").replace(/\!/g,"%21").replace(/\*/g,"%2A").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\'/g,"%27").replace(/\-/g,"%2D").replace(/\_/g,"%5F").replace(/\./g,"%2E");return t}function encode_deviceprint(){var e=add_deviceprint();return urlEncode(e)}function decode_deviceprint(){var e=encode_deviceprint;return decodeURIComponent(urlEncode(e))}function post_deviceprint(){return document.forms[0].pm_fp.value=encode_deviceprint(),!0}function post_fingerprints(e){e.deviceprint.value=encode_deviceprint()}function add_deviceprint(){BrowserDetect.init();var e;switch(BrowserDetect.browser){case"Explorer":e=new IE_FingerPrint;break;case"Firefox":e=new Mozilla_FingerPrint;break;case"Opera":e=new Opera_FingerPrint;break;default:e=new FingerPrint}var t="version="+e.deviceprint_version()+"&pm_fpua="+e.deviceprint_browser()+"&pm_fpsc="+e.deviceprint_display()+"&pm_fpsw="+e.deviceprint_software()+"&pm_fptz="+e.deviceprint_timezone()+"&pm_fpln="+e.deviceprint_language()+"&pm_fpjv="+e.deviceprint_java()+"&pm_fpco="+e.deviceprint_cookie();return t=t+"&pm_fpasw="+e.deviceprint_all_software(),t=t+"&pm_fpan="+e.deviceprint_appName()+"&pm_fpacn="+e.deviceprint_appCodeName()+"&pm_fpol="+e.deviceprint_online()+"&pm_fposp="+e.deviceprint_opsProfile()+"&pm_fpup="+e.deviceprint_userProfile()+"&pm_fpsaw="+e.deviceprint_screen_availWidth()+"&pm_fpspd="+e.deviceprint_screen_pixelDepth()+"&pm_fpsbd="+e.deviceprint_screen_bufferDepth()+"&pm_fpsdx="+e.deviceprint_screen_deviceXDPI()+"&pm_fpsdy="+e.deviceprint_screen_deviceYDPI()+"&pm_fpslx="+e.deviceprint_screen_logicalXDPI()+"&pm_fpsly="+e.deviceprint_screen_logicalYDPI()+"&pm_fpsfse="+e.deviceprint_screen_fontSmoothingEnabled()+"&pm_fpsui="+e.deviceprint_screen_updateInterval(),t=t+"&pm_os="+BrowserDetect.OS+"&pm_brmjv="+parseInt(BrowserDetect.version,10)+"&pm_br="+BrowserDetect.browser,t=t+"&pm_inpt="+e.deviceprint_ping_in()+"&pm_expt="+e.deviceprint_ping_ex()}function form_add_data(e,t,n){return e&&e.length>0?e+="&":e="",e+=t+"="+escape(n.toString())}function form_add_deviceprint(e,t,n){return e=form_add_data(e,t+"d",n)}function detectDeviceCollectionAPIMode(){return typeof navigator.geolocation!=UNDEFINED?HTML5:typeof window.blackberry!=UNDEFINED&&blackberry.location.GPSSupported?BLACKBERRY:UNDEFINED}function init(e,t,n,i,o){var r=detectDeviceCollectionAPIMode();return r==HTML5?(geoLocator=new HTML5LocationCollector,geoLocator.init(e,t,n,i),!0):r==BLACKBERRY?(geoLocator=new BlackberryLocationCollector,geoLocator.init(o,t,n,i),!0):!1}function startCollection(e,t,n,i,o){return geoLocatorStatus=init(e,t,n,i,o),geoLocatorStatus?geoLocator.startLocationWatch():!1}function stopCollection(){geoLocatorStatus&&geoLocator.stopWatch()}function getGeolocationStruct(){return geoLocatorStatus?geoLocator.generateGeolocationJSONStruct():GEO_LOCATION_DEFAULT_STRUCT}function HTML5LocationCollector(){var e=this,t=-1;this.getGeolocationWatchId=function(){return t};var n=null;this.getGeolocationLastPosition=function(){return n};var i=4;this.getGeolocationStatusCode=function(){return i};var o="";this.getGeolocationErrorMessage=function(){return o};var r={accuracy:100,timeout:180,relevancy:120,expiration:48};this.getGeolocationConfig=function(){return r},this.startLocationWatch=function(){var e={enableHighAccuracy:!0,timeout:1e3*r.timeout,maximumAge:r.expiration};return navigator.geolocation?(t=navigator.geolocation.watchPosition(this.handlePosition,this.handleError,e),!0):(i=4,!1)},this.init=function(e,t,n,i){null!==e&&e>=0&&200>=e&&(r.accuracy=e),null!==t&&t>=90&&300>=t&&(r.timeout=t),null!==n&&n>=60&&240>=n&&(r.relevancy=n),null!==i&&i>=24&&60>=i&&(r.expiration=i)},this.handlePosition=function(t){var o=(new Date).getTime(),a=getTimestampInMillis(t.timestamp);if(o-a<=60*r.expiration*60*1e3&&(null===n||t.timestamp>n.timestamp||t.coords.accuracy<n.coords.accuracy)&&(n=t,i=0),null!==n){var c=o-n.timestamp;c<=1e3*r.relevancy&&n.coords.accuracy<=r.accuracy&&e.stopWatch()}},this.generateGeolocationJSONStruct=function(){var e=null;if(null!==n){var t=convertTimestampToGMT(n.timestamp);e={GeoLocationInfo:[{Status:i,Longitude:n.coords.longitude,Latitude:n.coords.latitude,Altitude:Math.round(n.coords.altitude),HorizontalAccuracy:Math.round(n.coords.accuracy),AltitudeAccuracy:Math.round(n.coords.altitudeAccuracy),Heading:Math.round(n.coords.heading),Speed:Math.round(n.coords.speed),Timestamp:t}]}}else e={GeoLocationInfo:[{Status:i}]};return JSON.stringify(e)},this.handleError=function(t){switch(t.code){case t.TIMEOUT:e.stopWatch(),i=3;break;case t.POSITION_UNAVAILABLE:i=2,o=t.message;break;case t.PERMISSION_DENIED:i=1;break;case t.UNKNOWN_ERROR:i=2,o=t.message}},this.stopWatch=function(){navigator.geolocation.clearWatch(t),t=-2}}function UIEvent(){var e=this===window?{}:this;e.index=function(t){return 0===arguments.length?e._index:void(e._index=arguments[0])},e.offset=function(t){return 0===arguments.length?e._offset:void(e._offset=arguments[0])},e.type=function(t){return 0===arguments.length?e._type:void(e._type=arguments[0])},e.serialize=function(){var t=",",n="0";return e.index()+t+e.type()+t+n},e.toString=function(){return"UIEvent: [index: "+e.index()+", type: "+e.type()+", offset: "+e.offset()+"]"}}function InteractionElement(){var e=this===window?{}:this;e._eventCount=0,e.id=function(t){return 0===arguments.length?e._id:void(e._id=arguments[0])},e.index=function(t){return 0===arguments.length?e._index:void(e._index=arguments[0])},e.length=function(t){return 0===arguments.length?e._length:void(e._length=arguments[0])},e.type=function(t){return 0===arguments.length?e._type:void(e._type=arguments[0])},e.incrementEventCount=function(){e._eventCount++},e.eventCount=function(){return e._eventCount},e.serialize=function(){var t=",",n=e.index();return e.index()+t+n+t+e.type()+t+e.length()},e.toString=function(){return"InteractionElement: [id: "+e.id()+", index: "+e.index()+", length: "+e.length()+", type: "+e.type()+"]"}}function UIElementList(){var e=this===window?{}:this,t=new Hashtable,n=new Hashtable;e.get=function(e){return t.get(e)},e.getByIndex=function(e){return n.get(e)},e.containsKey=function(e){return t.containsKey(e)},e.indexByKey=function(e){return get(e).index()},e.size=function(){return t.size()},e.put=function(e){var i=e.id();if(!t.containsKey(i)){t.put(i,e);var o=t.size();e.index(o),n.put(o,e)}},e.toString=function(){return"[size: "+t.size()+", names: ["+t+"], indexes: ["+n+"]]"}}function activeXDetect(e){var t=null;try{t=document.body.getComponentVersion("{"+e+"}","ComponentID")}catch(n){}return null!==t?t:!1}function stripIllegalChars(e){t="",e=e.toLowerCase();for(var n=e.length,i=0;n>i;i++){var o=e.charAt(i);"\n"!=o&&"/"!=o&&"\\"!=o?t+=o:"\n"==o&&(t+="n")}return t}function stripFullPath(e,t,n){var i=t,o=n,r=e,a=r.lastIndexOf(i);a>=0&&(filenameLen=r.length,r=r.substring(a+i.length,filenameLen));var c=r.indexOf(o);return c>=0&&(r=r.slice(0,c)),r}function convertTimestampToGMT(e){var t=e;return e instanceof Date||(t=new Date(e)),offsetFromGmt=6e4*t.getTimezoneOffset(),t.getTime()+offsetFromGmt}function getTimestampInMillis(e){var t=e;return e instanceof Date&&(t=e.getTime()),t}function debug(e){}DomDataCollection.Success=0,DomDataCollection.Fail=1,DomDataCollection.Partial=2,DomDataCollection.NotStarted=3,IE_FingerPrint.prototype=new FingerPrint,Mozilla_FingerPrint.prototype=new FingerPrint,Opera_FingerPrint.prototype=new FingerPrint,Timer.prototype.start=function(){this.startTime=(new Date).getTime()},Timer.prototype.duration=function(){return(new Date).getTime()-this.startTime};var ProxyCollector={};ProxyCollector.internalIP="127.0.0.1",ProxyCollector.externalIP,ProxyCollector.internalPingTime,ProxyCollector.externalPingTime,ProxyCollector.setInternalPingTime=function(e){ProxyCollector.internalPingTime=e},ProxyCollector.setExternalPingTime=function(e){ProxyCollector.externalPingTime=e},ProxyCollector.PROXY_DETECTION_TIMEOUT=5e3,ProxyCollector.TIMEOUT_CHECK_FREQUENCY=1e3,ProxyCollector.isTimedOut=function(e,t,n){_timer=new Timer,t-_timer.duration()<=0&&("undefined"==typeof ProxyCollector.internalPingTime&&new RegExp("internalPingTime").test(e)||"undefined"==typeof ProxyCollector.externalPingTime&&new RegExp("externalPingTime").test(e))?(e.call(this,-1),n.abort()):("undefined"==typeof ProxyCollector.internalPingTime&&new RegExp("internalPingTime").test(e)||"undefined"==typeof ProxyCollector.externalPingTime&&new RegExp("externalPingTime").test(e))&&setTimeout(function(){ProxyCollector.isTimedOut(e,t-(_timer.duration()+ProxyCollector.TIMEOUT_CHECK_FREQUENCY),n)},ProxyCollector.TIMEOUT_CHECK_FREQUENCY)},ProxyCollector.doAjax=function(e,t){var n,i,o=document.location.protocol+"//"+e+":"+getRandomPort()+"/NonExistentImage"+getRandomPort()+".gif";if(window.XDomainRequest){n=new window.XDomainRequest,i=new Timer;try{n.timeout=ProxyCollector.PROXY_DETECTION_TIMEOUT,n.ontimeout=function(){t.call(this,-1),n.abort()},n.onprogress=function(){t.call(this,i.duration()),n.abort()},n.onerror=function(){t.call(this,i.duration()),n.abort()},n.open("GET",o,!0),n.send()}catch(r){ProxyCollector.doAjaxViaImage(t,o)}}else{n=new XMLHttpRequest;var a="ontimeout"in n;i=new Timer;try{n.onreadystatechange=function(){4==n.readyState&&("undefined"==typeof ProxyCollector.internalPingTime&&new RegExp("internalPingTime").test(t)||"undefined"==typeof ProxyCollector.externalPingTime&&new RegExp("externalPingTime").test(t))&&t.call(this,i.duration())},n.timeout=ProxyCollector.PROXY_DETECTION_TIMEOUT,n.ontimeout=function(){t.call(this,-1),n.abort()},n.open("GET",o,!0),n.send(),a||ProxyCollector.isTimedOut(t,ProxyCollector.PROXY_DETECTION_TIMEOUT-i.duration(),n)}catch(r){ProxyCollector.doAjaxViaImage(t,o)}}},ProxyCollector.doAjaxViaImage=function(e,t){var n=new Image,i=new Timer;n.onerror=function(){e.call(this,i.duration())},n.src=t},ProxyCollector.collect=function(){ProxyCollector.doAjax(ProxyCollector.externalIP,ProxyCollector.setExternalPingTime),"object"==typeof XDomainRequest?ProxyCollector.externalPingTime||forceIE89Synchronicity():ProxyCollector.doAjax(ProxyCollector.internalIP,ProxyCollector.setInternalPingTime)},forceIE89Synchronicity=function(){ProxyCollector.externalPingTime?ProxyCollector.doAjax(ProxyCollector.internalIP,ProxyCollector.setInternalPingTime):setTimeout(forceIE89Synchronicity,100)},ProxyCollector.isValidIPAddress=function(e){var t=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;if(t.test(e)){var n=e.split(".");if(0==parseInt(parseFloat(n[0])))return!1;for(var i=0;i<n.length;i++)if(parseInt(parseFloat(n[i]))>255)return!1;return!0}return!1},ProxyCollector.initProxyCollection=function(){ProxyCollector.isValidIPAddress(ProxyCollector.externalIP)&&ProxyCollector.isValidIPAddress(ProxyCollector.internalIP)&&ProxyCollector.collect()};var SEP="|",PAIR="=",DEV="~",HTML5="HTML5",BLACKBERRY="blackberry",UNDEFINED="undefined",GEO_LOCATION_DEFAULT_STRUCT='{"GeoLocationInfo":[{"Status":4}]}',geoLocator=null,geoLocatorStatus=!1,UIEventCollector=function(){function e(e){if(P={output_size_limit:1024,collection_mode:"partial"},e)for(p in e)if(void 0!==p._config){for(var t=!1,n=x.length-1;n>=0;n--)x[n]!=p||(found=!0);t||(P[p]=e[p])}E=!1,_=o(),C={elements:new UIElementList,events:[],collection_status:0,toString:function(){return"RecordedData: {elements: "+this.elements+", events: "+this.events+"}"}},g()}function t(){for(var e=n(),t=0,i=e.length;i>t;t++)r(e[t])}function n(){for(var e=[],t=document.getElementsByTagName("input"),n=0,o=t.length;o>n;n++){var r=t[n];i(r)&&e.push(r)}return e}function i(e){if(e.tagName&&"input"==e.tagName.toLowerCase()){var t=e.getAttribute("type");if("text"==t||"checkbox"==t||"checkbox"==t)return!0}return!1}function o(){var e=document.createEvent?document.createEvent("Event"):document.createEventObject(),t=e.timeStamp||new Date;return t=new Date(t),t.getYear()>2100&&(t=new Date(t/1e3)),t=t.getTime()}function r(e){var t=null,n=C.elements,i=(n.size(),y(e));return C.elements.containsKey(i)?t=n.get(i):(t=new InteractionElement,t.id(i),t.type(h(e)),t.length(e.value?e.value.length:0),n.put(t)),t}function a(e){var t=e||window.event,n=l(t);if(i(n)){var o=r(n);o.incrementEventCount();var a=new UIEvent;a.index(o.index()),a.type(m(t));var c=u(t);a.offset(c-_),C.events.push(a)}return!0}function c(e){var t=e||window.event;if(s(t)){var n={target:l(t),type:"paste"};return a(n)}return a(t)}function s(e){if("keydown"==e.type){var t=e.which||e.charCode||e.keyCode,n="undefined"!=typeof KeyboardEvent&&t==KeyboardEvent.DOM_VK_V||118==t||86==t;if(n&&(e.ctrlKey||e.metaKey))return!0}return!1}function l(e){return e.target?e.target:e.srcElement}function u(e){var t;return e.timeStamp&&0!==e.timeStamp?(t=e.timeStamp,new Date(t).getYear()>2100&&(t/=1e3)):t=(new Date).getTime(),t}function d(e){}function f(){t();for(var e=C.elements,n=e.size();n>=1;n--){var i=e.getByIndex(n),o=i.id(),r=document.getElementById(o);if(!r){var a=document.getElementsByName(o);a.length>0&&(r=a[0])}r&&r.value&&i.length(r.value.length)}}function g(){var e=a,t=document;t.addEventListener?(t.addEventListener("keydown",c,!1),t.addEventListener("paste",e,!1),t.addEventListener("focus",e,!0),t.addEventListener("blur",e,!0)):t.attachEvent&&(t.onkeydown=c,t.onfocusin=e,t.onfocusout=e)}function m(e){return"keydown"==e.type?UIEvent.KeyDown:"submit"==e.type?UIEvent.Submit:"paste"==e.type?UIEvent.Paste:"focus"==e.type||"focusin"==e.type?UIEvent.Focus:"blur"==e.type||"focusout"==e.type?UIEvent.Blur:UIEvent.Unknown}function v(e){return e==UIEvent.KeyDown?"keydown":e==UIEvent.Submit?"submit":e==UIEvent.Focus?"focus":e==UIEvent.Blur?"blur":e==UIEvent.Paste?"paste":"unknown"}function h(e){return e.nodeName+(e.type?":"+e.type:"")}function y(e){return e.id?e.id:e.name?e.name:e.nodeName}var C=null,_=null,E=null,P=null,x=["output_size_limit"];return e(),g(),{addElement:function(e){return r(e)},getEventType:function(e){return m(e)},getEventCode:function(e){return v(e)},getRecordedData:function(){return C},getElementType:function(e){return h(e)},getElementId:function(e){return y(e)},initEventCollection:function(t){e(t)},getConfig:function(){return P},serialize:function(){f();for(var e=this.getRecordedData(),t=e.elements,n=[],i=0;i<t.length;i++)n[i]=!1;var o=e.events,r=e.collection_status,a="partial"==this.getConfig().collection_mode,c=this.getConfig().output_size_limit,s=o.length,l="@",u=";",p=",",g=2*l.length,m=""+_+p+(""+r),v=1;g+=v,g+=p.length,g+=m.length;var h="";d("serializing elements ");for(var y=t.size();y>0;y--){var C=t.getByIndex(y),P=C.serialize()+u;if(d("elementsStr.length: "+h.length),a&&g+h.length+P.length>c){E=!0;break}var x=C.type().match("INPUT:checkbox");null==x&&C.length()>0&&0==C.eventCount()&&(d("collecting element without input: "+C),h=P+h)}g+=h.length;var w="";for(d("serializing events ");s--;){var b=o[s],D=b.index(),T=b.serialize()+u,P=t.getByIndex(D).serialize()+u,F=T.length;if(n[D]||(F+=P.length),d("eventsStr.length: "+w.length),a&&g+w.length+F>c){E=!0;break}d("collecting event: "+b),n[D]||(h=P+h,g+=P.length,d("also adding element event: "+P)),n[D]=!0,w=T+w}h.length>0&&(h=h.substring(0,h.length-1)),w.length>0&&(w=w.substring(0,w.length-1));var S=E?1:0,I=h+l+w+l+S+p+m;return I}}}();UIEvent.Unknown=0,UIEvent.KeyDown=1,UIEvent.Submit=2,UIEvent.Focus=3,UIEvent.Blur=4,UIEvent.Paste=5;var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser)||"an unknown browser",this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(e){for(var t=e.length,n=0;t>n;n++){var i=e[n],o=i.string,r=i.prop,a=i.identity;if(this.versionSearchString=i.versionSearch||a,o){if(-1!==o.toLowerCase().indexOf(i.subString.toLowerCase()))return a}else if(r)return a}},searchVersion:function(e){var t=e.toLowerCase().indexOf(this.versionSearchString.toLowerCase());if(-1!==t){var n=e.substring(t+this.versionSearchString.length);return(0===n.indexOf(" ")||0===n.indexOf("/"))&&(n=n.substring(1)),parseFloat(n)}},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",
versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.userAgent.toLowerCase(),subString:"opera",identity:"Opera",versionSearch:"version"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{string:navigator.userAgent,subString:"mobile safari",identity:"Mobile Safari",versionSearch:"mobile safari"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent.toLocaleLowerCase(),subString:"blackberry",identity:"BlackBerry",versionSearch:"0/"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.userAgent,subString:"BlackBerry",identity:"BlackBerry"},{string:navigator.userAgent.toLowerCase(),subString:"android",identity:"Android"},{string:navigator.userAgent,subString:"Symbian",identity:"Symbian"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"},{string:navigator.userAgent,subString:"Windows CE",identity:"Windows CE"},{string:navigator.platform,subString:"Win",identity:"Windows"}]};