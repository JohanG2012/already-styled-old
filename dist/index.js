"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var styled=require("styled-components"),styled__default=_interopDefault(styled),React=_interopDefault(require("react")),PropTypes=_interopDefault(require("prop-types")),FlexBox=styled__default.div.withConfig({displayName:"FlexBox"})(["display:flex;flex-direction:",";justify-content:",";"],function(e){return e.direction?e.direction:"row"},function(e){return e.justify?e.justify:"flex-start"}),Hr=styled__default.hr.withConfig({displayName:"Hr"})(["color:",";height:1px;background-color:",";border:none;"],function(e){return e.color?e.color:"black"},function(e){return e.color?e.color:"black"}),centerBlock=styled.css(["display:block;margin:0 auto;"]),Image=styled__default.img.withConfig({displayName:"Image"})(["",""],function(e){return e.center&&centerBlock}),Link=styled__default.a.withConfig({displayName:"Link"})(["font-weight:",";text-decoration:none;transition:font-weight ease-in 0.3s;:hover{font-weight:400;transition:font-weight ease-out 0.3s;}"],function(e){return e.weight?e.weight:"normal"});function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||(r[n]=e[n]);return r}function _objectWithoutProperties(e,t){if(null==e)return{};var n,i,r=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],0<=t.indexOf(n)||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var baseStyle=styled.css(["text-transform:",";text-align:",";color:",";font-weight:",";font-family:",";"],function(e){return e.capitalize?"capitalize":"none"},function(e){return e.center?"center":"left"},function(e){return e.secondary?e.theme.black30:e.theme.primary},function(e){return e.weight?e.weight:"normal"},function(e){return e.font?e.font:"inherit"}),Heading1=styled__default.h1.withConfig({displayName:"Headings__Heading1"})([""," margin:.67em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:"2em"}),Heading2=styled__default.h2.withConfig({displayName:"Headings__Heading2"})([""," margin:.75em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:"1.5em"}),Heading3=styled__default.h3.withConfig({displayName:"Headings__Heading3"})([""," margin:.83em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:"1.17em"}),Heading4=styled__default.h4.withConfig({displayName:"Headings__Heading4"})([""," margin:1.12em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:"1em"}),Heading5=styled__default.h5.withConfig({displayName:"Headings__Heading5"})([""," margin:1.5em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:".83em"}),Heading6=styled__default.h6.withConfig({displayName:"Headings__Heading6"})([""," margin:1.67em 0;font-size:",";"],baseStyle,function(e){return e.fontSize?e.fontSize:".75em"}),propTypes={heading:PropTypes.string},defaultProps={heading:"1"},Title=function(e){var t=e.heading,n=_objectWithoutProperties(e,["heading"]);switch(t){case"2":return React.createElement(Heading2,n);case"3":return React.createElement(Heading3,n);case"4":return React.createElement(Heading4,n);case"5":return React.createElement(Heading5,n);case"6":return React.createElement(Heading6,n);default:return React.createElement(Heading1,n)}};Title.defaultProps=defaultProps,Title.propTypes=propTypes;var statusStyle=styled.css(["display:inline-block;margin-left:10px;color:black;"]),Text=styled__default.p.withConfig({displayName:"Text"})(["color:",";text-align:",";font-size:",";font-family:",";",";"],function(e){return e.error?e.theme.error:e.theme.primary},function(e){return e.center?"center":"left"},function(e){return e.fontSize?e.fontSize:"medium"},function(e){return e.font?e.font:"inherit"},function(e){return e.status&&statusStyle});exports.FlexBox=FlexBox,exports.Hr=Hr,exports.Image=Image,exports.Link=Link,exports.Text=Text,exports.Title=Title;
