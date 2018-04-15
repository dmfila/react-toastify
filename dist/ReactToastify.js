!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","prop-types","react-dom"],t):"object"==typeof exports?exports.ReactToastify=t(require("react"),require("prop-types"),require("react-dom")):e.ReactToastify=t(e.react,e["prop-types"],e["react-dom"])}(window,function(e,t,n){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},t.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},t.ACTION={SHOW:"SHOW_TOAST",CLEAR:"CLEAR_TOAST",MOUNTED:"CONTAINER_MOUNTED",ON_CHANGE:"ON_CHANGE"}},function(e,t,n){var o;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o))e.push(r.apply(null,o));else if("object"===i)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}void 0!==e&&e.exports?e.exports=r:void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={eventList:new Map,on:function(e,t){return this.eventList.has(e)||this.eventList.set(e,[]),this.eventList.get(e).push(t),this},off:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.eventList.delete(e)},emit:function(e){for(var t=this,n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return!!this.eventList.has(e)&&(this.eventList.get(e).forEach(function(e){return setTimeout(function(){return e.call.apply(e,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(o)))},0)}),!0)}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e){var t=e.enter,n=e.exit,s=e.duration,l=void 0===s?750:s,c=e.appendPosition,f=void 0!==c&&c;return function(e){var s=e.children,c=e.position,p=e.preventExitTransition,d=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["children","position","preventExitTransition"]),h=f?t+"--"+c:t,y=f?n+"--"+c:n,m=void 0,v=void 0;if(Array.isArray(l)&&2===l.length){var g=r(l,2);m=g[0],v=g[1]}else m=v=l;return i.default.createElement(a.default,o({},d,{timeout:p?0:{enter:m,exit:v},onEnter:function(e){e.classList.add(h),e.style.animationFillMode="forwards",e.style.animationDuration=.001*m+"s"},onEntered:function(e){e.classList.remove(h),e.style.cssText=""},onExit:p?u:function(e){e.classList.add(y),e.style.animationFillMode="forwards",e.style.animationDuration=.001*v+"s"}}),s)}};var i=s(n(0)),a=s(n(11));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(){}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Flip=t.Zoom=t.Slide=t.Bounce=void 0;var o,r=n(5),i=(o=r)&&o.__esModule?o:{default:o};var a=(0,i.default)({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),s=(0,i.default)({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),u=(0,i.default)({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),l=(0,i.default)({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"});t.Bounce=a,t.Slide=s,t.Zoom=u,t.Flip=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.falseOrElement=t.falseOrDelay=void 0,t.isValidDelay=r,t.objectValues=function(e){return Object.keys(e).map(function(t){return e[t]})};var o=n(0);function r(e){return"number"==typeof e&&!isNaN(e)&&e>0}function i(e){return e.isRequired=function(t,n,o){if(void 0===t[n])return new Error("The prop "+n+" is marked as required in \n      "+o+", but its value is undefined.");e(t,n,o)},e}t.falseOrDelay=i(function(e,t,n){var o=e[t];return!1===o||r(o)?null:new Error(n+" expect "+t+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}),t.falseOrElement=i(function(e,t,n){var r=e[t];return!1===r||(0,o.isValidElement)(r)?null:new Error(n+" expect "+t+" \n      to be a valid react element or equal to false. "+r+" given.")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(4),a=(o=i)&&o.__esModule?o:{default:o},s=n(2);var u={type:s.TYPE.DEFAULT,autoClose:null,closeButton:null,hideProgressBar:null,position:null,pauseOnHover:null,closeOnClick:null,className:null,bodyClassName:null,progressClassName:null,transition:null,updateId:null,draggable:null},l=null,c=[],f=0;function p(e,t){return r({},u,e,{type:t,toastId:++f})}function d(e,t){return null!==l?a.default.emit(s.ACTION.SHOW,e,t):c.push({action:s.ACTION.SHOW,content:e,options:t}),t.toastId}var h=r(function(e,t){return d(e,p(t,t&&t.type||s.TYPE.DEFAULT))},{success:function(e,t){return d(e,p(t,s.TYPE.SUCCESS))},info:function(e,t){return d(e,p(t,s.TYPE.INFO))},warn:function(e,t){return d(e,p(t,s.TYPE.WARNING))},warning:function(e,t){return d(e,p(t,s.TYPE.WARNING))},error:function(e,t){return d(e,p(t,s.TYPE.ERROR))},dismiss:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return l&&a.default.emit(s.ACTION.CLEAR,e)},isActive:function(){return!1},update:function(e,t){setTimeout(function(){if(l&&void 0!==l.collection[e]){var n=l.collection[e],o=n.options,i=n.content,a=null!==o.updateId?o.updateId+1:1,s=r({},o,t,{toastId:e,updateId:a}),u=void 0!==s.render?s.render:i;delete s.render,d(u,s)}},0)},onChange:function(e){"function"==typeof e&&a.default.on(s.ACTION.ON_CHANGE,e)}},{POSITION:s.POSITION,TYPE:s.TYPE});a.default.on(s.ACTION.MOUNTED,function(e){l=e,h.isActive=function(e){return l.isToastActive(e)},c.forEach(function(e){a.default.emit(e.action,e.content,e.options)}),c=[]}),t.default=h},function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}};var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};t.timeoutsShape=i.default.oneOfType([i.default.number,i.default.shape({enter:i.default.number,exit:i.default.number}).isRequired]),t.classNamesShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,exit:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterActive:i.default.string,exit:i.default.string,exitActive:i.default.string})])},function(e,t){e.exports=n},function(e,t,n){"use strict";t.__esModule=!0,t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),r=a(n(0)),i=a(n(10));n(9);function a(e){return e&&e.__esModule?e:{default:e}}var s=t.UNMOUNTED="unmounted",u=t.EXITED="exited",l=t.ENTERING="entering",c=t.ENTERED="entered",f=t.EXITING="exiting",p=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o)),i=o.transitionGroup,a=i&&!i.isMounting?n.enter:n.appear,f=void 0;return r.nextStatus=null,n.in?a?(f=u,r.nextStatus=l):f=c:f=n.unmountOnExit||n.mountOnEnter?s:u,r.state={status:f},r.nextCallback=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{transitionGroup:null}},t.prototype.componentDidMount=function(){this.updateStatus(!0)},t.prototype.componentWillReceiveProps=function(e){var t=(this.pendingState||this.state).status;e.in?(t===s&&this.setState({status:u}),t!==l&&t!==c&&(this.nextStatus=l)):t!==l&&t!==c||(this.nextStatus=f)},t.prototype.componentDidUpdate=function(){this.updateStatus()},t.prototype.componentWillUnmount=function(){this.cancelNextCallback()},t.prototype.getTimeouts=function(){var e=this.props.timeout,t=void 0,n=void 0,o=void 0;return t=n=o=e,null!=e&&"number"!=typeof e&&(t=e.exit,n=e.enter,o=e.appear),{exit:t,enter:n,appear:o}},t.prototype.updateStatus=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.nextStatus;if(null!==t){this.nextStatus=null,this.cancelNextCallback();var n=i.default.findDOMNode(this);t===l?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:s})},t.prototype.performEnter=function(e,t){var n=this,o=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,i=this.getTimeouts();t||o?(this.props.onEnter(e,r),this.safeSetState({status:l},function(){n.props.onEntering(e,r),n.onTransitionEnd(e,i.enter,function(){n.safeSetState({status:c},function(){n.props.onEntered(e,r)})})})):this.safeSetState({status:c},function(){n.props.onEntered(e)})},t.prototype.performExit=function(e){var t=this,n=this.props.exit,o=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:f},function(){t.props.onExiting(e),t.onTransitionEnd(e,o.exit,function(){t.safeSetState({status:u},function(){t.props.onExited(e)})})})):this.safeSetState({status:u},function(){t.props.onExited(e)})},t.prototype.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.prototype.safeSetState=function(e,t){var n=this;this.pendingState=e,t=this.setNextCallback(t),this.setState(e,function(){n.pendingState=null,t()})},t.prototype.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},t.prototype.onTransitionEnd=function(e,t,n){this.setNextCallback(n),e?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},t.prototype.render=function(){var e=this.state.status;if(e===s)return null;var t=this.props,n=t.children,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["children"]);if(delete o.in,delete o.mountOnEnter,delete o.unmountOnExit,delete o.appear,delete o.enter,delete o.exit,delete o.timeout,delete o.addEndListener,delete o.onEnter,delete o.onEntering,delete o.onEntered,delete o.onExit,delete o.onExiting,delete o.onExited,"function"==typeof n)return n(e,o);var i=r.default.Children.only(n);return r.default.cloneElement(i,o)},t}(r.default.Component);function d(){}p.contextTypes={transitionGroup:o.object},p.childContextTypes={transitionGroup:function(){}},p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},p.UNMOUNTED=0,p.EXITED=1,p.ENTERING=2,p.ENTERED=3,p.EXITING=4,t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(0)),r=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){var t=e.closeToast,n=e.type,r=e.ariaLabel;return o.default.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:t,"aria-label":r},"✖")}a.propTypes={closeToast:r.default.func,arialLabel:r.default.string},a.defaultProps={ariaLabel:"close"},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(0)),r=s(n(1)),i=s(n(3)),a=n(2);function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,s=e.hide,u=e.className,l=e.rtl,c={animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1},f=(0,i.default)("Toastify__progress-bar","Toastify__progress-bar--"+a,u,{"Toastify__progress-bar--rtl":l});return o.default.createElement("div",{className:f,style:c,onAnimationEnd:r})}u.propTypes={delay:r.default.number.isRequired,isRunning:r.default.bool.isRequired,closeToast:r.default.func.isRequired,rtl:r.default.bool.isRequired,type:r.default.string,hide:r.default.bool,className:r.default.oneOfType([r.default.string,r.default.object])},u.defaultProps={type:a.TYPE.DEFAULT,hide:!1},t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(0),a=p(i),s=p(n(1)),u=p(n(3)),l=p(n(13)),c=n(2),f=n(7);function p(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}var y=function(){},m=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={isRunning:!0,preventExitTransition:!1},o.flag={canCloseOnClick:!0,canDrag:!1},o.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},o.ref=null,o.pauseToast=function(){o.setState({isRunning:!1})},o.playToast=function(){o.setState({isRunning:!0})},o.onDragStart=function(e){o.flag.canCloseOnClick=!0,o.flag.canDrag=!0,o.ref.style.transition="",o.drag.start=o.drag.x=h(e.nativeEvent),o.drag.removalDistance=o.ref.offsetWidth*(o.props.draggablePercent/100)},o.onDragMove=function(e){o.flag.canDrag&&(o.state.isRunning&&o.pauseToast(),o.drag.x=h(e),o.drag.deltaX=o.drag.x-o.drag.start,o.drag.start!==o.drag.x&&(o.flag.canCloseOnClick=!1),o.ref.style.transform="translateX("+o.drag.deltaX+"px)",o.ref.style.opacity=1-Math.abs(o.drag.deltaX/o.drag.removalDistance))},o.onDragEnd=function(e){if(o.flag.canDrag){if(o.flag.canDrag=!1,Math.abs(o.drag.deltaX)>o.drag.removalDistance)return void o.setState({preventExitTransition:!0},o.props.closeToast);o.drag.y=function(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}(e),o.ref.style.transition="transform 0.2s, opacity 0.2s",o.ref.style.transform="translateX(0)",o.ref.style.opacity=1}},o.onDragTransitionEnd=function(){var e=o.ref.getBoundingClientRect(),t=e.top,n=e.bottom,r=e.left,i=e.right;o.props.pauseOnHover&&o.drag.x>=r&&o.drag.x<=i&&o.drag.y>=t&&o.drag.y<=n?o.pauseToast():o.playToast()},d(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"componentDidMount",value:function(){this.props.onOpen(this.props.children.props),this.props.draggable&&(document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd))}},{key:"componentWillUnmount",value:function(){this.props.onClose(this.props.children.props),this.props.draggable&&(document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd))}},{key:"componentWillReceiveProps",value:function(e){this.props.isDocumentHidden!==e.isDocumentHidden&&this.setState({isRunning:!e.isDocumentHidden})}},{key:"render",value:function(){var e=this,t=this.props,n=t.closeButton,r=t.children,i=t.autoClose,s=t.pauseOnHover,c=t.closeOnClick,f=t.type,p=t.hideProgressBar,d=t.closeToast,h=t.transition,y=t.position,m=t.onExited,v=t.className,g=t.bodyClassName,b=t.progressClassName,O=t.updateId,E=t.role,T=t.rtl,C={className:(0,u.default)("Toastify__toast","Toastify__toast--"+f,v,{"Toastify__toast--rtl":T})};return i&&s&&(C.onMouseEnter=this.pauseToast,C.onMouseLeave=this.playToast),c&&(C.onClick=function(){return e.flag.canCloseOnClick&&d()}),a.default.createElement(h,{in:this.props.in,appear:!0,unmountOnExit:!0,onExited:m,position:y,preventExitTransition:this.state.preventExitTransition},a.default.createElement("div",o({},C,{ref:function(t){return e.ref=t},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onTransitionEnd:this.onDragTransitionEnd}),a.default.createElement("div",o({},this.props.in&&{role:E},{className:(0,u.default)("Toastify__toast-body",g)}),r),!1!==n&&n,!1!==i&&a.default.createElement(l.default,{key:"pb-"+O,rtl:T,delay:i,isRunning:this.state.isRunning,closeToast:d,hide:p,type:f,className:b})))}}]),t}();m.propTypes={closeButton:f.falseOrElement.isRequired,autoClose:f.falseOrDelay.isRequired,children:s.default.node.isRequired,closeToast:s.default.func.isRequired,position:s.default.oneOf((0,f.objectValues)(c.POSITION)).isRequired,pauseOnHover:s.default.bool.isRequired,closeOnClick:s.default.bool.isRequired,transition:s.default.func.isRequired,isDocumentHidden:s.default.bool.isRequired,rtl:s.default.bool.isRequired,hideProgressBar:s.default.bool.isRequired,draggable:s.default.bool.isRequired,draggablePercent:s.default.number.isRequired,in:s.default.bool,onExited:s.default.func,onOpen:s.default.func,onClose:s.default.func,type:s.default.oneOf((0,f.objectValues)(c.TYPE)),className:s.default.oneOfType([s.default.string,s.default.object]),bodyClassName:s.default.oneOfType([s.default.string,s.default.object]),progressClassName:s.default.oneOfType([s.default.string,s.default.object]),updateId:s.default.number,ariaLabel:s.default.string},m.defaultProps={type:c.TYPE.DEFAULT,in:!0,onOpen:y,onClose:y,className:null,bodyClassName:null,progressClassName:null,updateId:null,role:"alert"},t.default=m},function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e,t){var n=Object.create(null);e&&o.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,o.isValidElement)(e)?t(e):e}(e)});return n},t.mergeChildMappings=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var o=Object.create(null),r=[];for(var i in e)i in t?r.length&&(o[i]=r,r=[]):r.push(i);var a=void 0,s={};for(var u in t){if(o[u])for(a=0;a<o[u].length;a++){var l=o[u][a];s[o[u][a]]=n(l)}s[u]=n(u)}for(a=0;a<r.length;a++)s[r[a]]=n(r[a]);return s};var o=n(0)},function(e,t,n){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=u(n(1)),i=n(0),a=u(i),s=n(15);function u(e){return e&&e.__esModule?e:{default:e}}var l=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},c=(r.default.any,r.default.node,r.default.bool,r.default.bool,r.default.bool,r.default.func,function(e){function t(n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,r));return a.handleExited=function(e,t,n){var r=(0,s.getChildMapping)(a.props.children);e in r||(n&&n(t),a.setState(function(t){var n=o({},t.children);return delete n[e],{children:n}}))},a.state={children:(0,s.getChildMapping)(n.children,function(e){return(0,i.cloneElement)(e,{onExited:function(t){a.handleExited(e.key,t,e.props.onExited)},in:!0,appear:a.getProp(e,"appear"),enter:a.getProp(e,"enter"),exit:a.getProp(e,"exit")})})},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},t.prototype.getProp=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props;return null!=n[t]?n[t]:e.props[t]},t.prototype.componentDidMount=function(){this.appeared=!0},t.prototype.componentWillReceiveProps=function(e){var t=this,n=this.state.children,o=(0,s.getChildMapping)(e.children),r=(0,s.mergeChildMappings)(n,o);Object.keys(r).forEach(function(a){var s=r[a];if((0,i.isValidElement)(s)){var u=function(e){t.handleExited(s.key,e,s.props.onExited)},l=a in n,c=a in o,f=n[a],p=(0,i.isValidElement)(f)&&!f.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,i.isValidElement)(f)&&(r[a]=(0,i.cloneElement)(s,{onExited:u,in:f.props.in,exit:t.getProp(s,"exit",e),enter:t.getProp(s,"enter",e)})):r[a]=(0,i.cloneElement)(s,{in:!1}):r[a]=(0,i.cloneElement)(s,{onExited:u,in:!0,exit:t.getProp(s,"exit",e),enter:t.getProp(s,"enter",e)})}}),this.setState({children:r})},t.prototype.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(e,["component","childFactory"]),r=this.state.children;return delete o.appear,delete o.enter,delete o.exit,a.default.createElement(t,o,l(r).map(n))},t}(a.default.Component));c.childContextTypes={transitionGroup:r.default.object.isRequired},c.propTypes={},c.defaultProps={component:"div",childFactory:function(e){return e}},t.default=c,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),s=v(a),u=v(n(1)),l=v(n(3)),c=v(n(16)),f=v(n(14)),p=v(n(12)),d=n(6),h=n(2),y=v(n(4)),m=n(7);function v(e){return e&&e.__esModule?e:{default:e}}function g(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var O=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={toast:[],isDocumentHidden:!1},o.collection={},o.isDocumentHidden=function(){return o.setState({isDocumentHidden:document.hidden})},o.isToastActive=function(e){return-1!==o.state.toast.indexOf(parseInt(e,10))},b(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),i(t,[{key:"componentDidMount",value:function(){var e=this,t=h.ACTION.SHOW,n=h.ACTION.CLEAR,o=h.ACTION.MOUNTED;y.default.on(t,function(t,n){return e.show(t,n)}).on(n,function(t){return null!==t?e.removeToast(t):e.clear()}).emit(o,this),this.props.pauseOnVisibilityChange&&document.addEventListener("visibilitychange",this.isDocumentHidden)}},{key:"componentWillUnmount",value:function(){y.default.off(h.ACTION.SHOW),y.default.off(h.ACTION.CLEAR),this.props.pauseOnVisibilityChange&&document.removeEventListener("visibilitychange",this.isDocumentHidden)}},{key:"removeToast",value:function(e){this.setState({toast:this.state.toast.filter(function(t){return t!==parseInt(e,10)})},this.dispatchChange)}},{key:"dispatchChange",value:function(){y.default.emit(h.ACTION.ON_CHANGE,this.state.toast.length)}},{key:"makeCloseButton",value:function(e,t,n){var o=this,r=this.props.closeButton;return((0,a.isValidElement)(e)||!1===e)&&(r=e),!1!==r&&(0,a.cloneElement)(r,{closeToast:function(){return o.removeToast(t)},type:n})}},{key:"getAutoCloseDelay",value:function(e){return!1===e||(0,m.isValidDelay)(e)?e:this.props.autoClose}},{key:"canBeRendered",value:function(e){return(0,a.isValidElement)(e)||"string"==typeof e||"number"==typeof e||"function"==typeof e}},{key:"show",value:function(e,t){var n=this;if(!this.canBeRendered(e))throw new Error("The element you provided cannot be rendered. You provided an element of type "+(void 0===e?"undefined":r(e)));var i,s,u,l=t.toastId,c=function(){return n.removeToast(l)},f={id:l,type:t.type,closeToast:c,updateId:t.updateId,rtl:this.props.rtl,position:t.position||this.props.position,transition:t.transition||this.props.transition,className:t.className||this.props.toastClassName,bodyClassName:t.bodyClassName||this.props.bodyClassName,closeButton:this.makeCloseButton(t.closeButton,l,t.type),pauseOnHover:null!==t.pauseOnHover?t.pauseOnHover:this.props.pauseOnHover,draggable:null!==t.draggable?t.draggable:this.props.draggable,draggablePercent:null!==t.draggable?t.draggablePercent:this.props.draggablePercent,closeOnClick:null!==t.closeOnClick?t.closeOnClick:this.props.closeOnClick,progressClassName:t.progressClassName||this.props.progressClassName,autoClose:this.getAutoCloseDelay(!1!==t.autoClose?parseInt(t.autoClose,10):t.autoClose),hideProgressBar:"boolean"==typeof t.hideProgressBar?t.hideProgressBar:this.props.hideProgressBar};"function"==typeof t.onOpen&&(f.onOpen=t.onOpen),"function"==typeof t.onClose&&(f.onClose=t.onClose),(0,a.isValidElement)(e)&&"string"!=typeof e.type&&"number"!=typeof e.type?e=(0,a.cloneElement)(e,{closeToast:c}):"function"==typeof e&&(e=e({closeToast:c})),this.collection=o({},this.collection,(i={},s=l,u={position:f.position,options:f,content:e},s in i?Object.defineProperty(i,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[s]=u,i)),this.setState({toast:null!==f.updateId?[].concat(g(this.state.toast)):[].concat(g(this.state.toast),[l])},this.dispatchChange)}},{key:"makeToast",value:function(e,t){return s.default.createElement(f.default,o({},t,{isDocumentHidden:this.state.isDocumentHidden,key:"toast-"+t.id}),e)}},{key:"clear",value:function(){this.setState({toast:[]})}},{key:"renderToast",value:function(){var e=this,t={},n=this.props,r=n.className,i=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach(function(n){var o=e.collection[n];t[o.position]||(t[o.position]=[]),-1!==e.state.toast.indexOf(parseInt(n,10))?t[o.position].push(e.makeToast(o.content,o.options)):(t[o.position].push(null),delete e.collection[n])}),Object.keys(t).map(function(n){var a=1===t[n].length&&null===t[n][0],u={className:(0,l.default)("Toastify__toast-container","Toastify__toast-container--"+n,r,{"Toastify__toast-container--rtl":e.props.rtl}),style:a?o({},i,{pointerEvents:"none"}):o({},i)};return s.default.createElement(c.default,o({},u,{key:"container-"+n}),t[n])})}},{key:"render",value:function(){return s.default.createElement("div",null,this.renderToast())}}]),t}();O.propTypes={position:u.default.oneOf((0,m.objectValues)(h.POSITION)),autoClose:m.falseOrDelay,closeButton:m.falseOrElement,hideProgressBar:u.default.bool,pauseOnHover:u.default.bool,closeOnClick:u.default.bool,newestOnTop:u.default.bool,className:u.default.oneOfType([u.default.string,u.default.object]),style:u.default.object,toastClassName:u.default.oneOfType([u.default.string,u.default.object]),bodyClassName:u.default.oneOfType([u.default.string,u.default.object]),progressClassName:u.default.oneOfType([u.default.string,u.default.object]),transition:u.default.func,rtl:u.default.bool,draggable:u.default.bool,draggablePercent:u.default.number,pauseOnVisibilityChange:u.default.bool},O.defaultProps={position:h.POSITION.TOP_RIGHT,transition:d.Bounce,rtl:!1,pauseOnVisibilityChange:!0,autoClose:5e3,hideProgressBar:!1,closeButton:s.default.createElement(p.default,null),pauseOnHover:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null},t.default=O},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Flip=t.Zoom=t.Slide=t.Bounce=t.cssTransition=t.toast=t.ToastContainer=void 0;var o=s(n(17)),r=n(6),i=s(n(8)),a=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}t.ToastContainer=o.default,t.toast=i.default,t.cssTransition=a.default,t.Bounce=r.Bounce,t.Slide=r.Slide,t.Zoom=r.Zoom,t.Flip=r.Flip}])});
//# sourceMappingURL=ReactToastify.js.map