var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _actions=require("./actions");var dataState={userName:''};var MainReducer=function MainReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:dataState;var action=arguments.length>1?arguments[1]:undefined;switch(action.type){case _actions.USERNAME:var userName=action.data;dataState.userName=userName;return(0,_extends2.default)({},dataState,{userName:userName});default:return dataState;}};var _default=MainReducer;exports.default=_default;