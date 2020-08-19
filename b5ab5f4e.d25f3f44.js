(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(9),o=(n(0),n(187)),a={id:"unit_testing",title:"Unit Testing"},c={id:"unit_testing",title:"Unit Testing",description:"The modular structure of the library makes it easy to mock the API when unit testing. Consider the following method:",source:"@site/docs/unit_testing.md",permalink:"/SpotifyAPI-NET/docs/next/unit_testing",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/unit_testing.md",version:"next",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1597839169,sidebar:"docs",previous:{title:"IPlayableItem",permalink:"/SpotifyAPI-NET/docs/next/iplayableitem"},next:{title:"Introduction",permalink:"/SpotifyAPI-NET/docs/next/auth_introduction"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The modular structure of the library makes it easy to mock the API when unit testing. Consider the following method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'public static async Task<bool> IsAdmin(IUserProfileClient userProfileClient)\n{\n  // get loggedin user\n  var user = await userProfileClient.Current();\n\n  // only my user id is an admin\n  return user.Id == "1122095781";\n}\n')),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"Moq"),", this can be tested without doing any network requests:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'[Test]\npublic async Task IsAdmin_SuccessTest()\n{\n  var userProfileClient = new Mock<IUserProfileClient>();\n  userProfileClient.Setup(u => u.Current()).Returns(\n    Task.FromResult(new PrivateUser\n    {\n      Id = "1122095781"\n    })\n  );\n\n  Assert.AreEqual(true, await IsAdmin(userProfileClient.Object));\n}\n')))}l.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?i.a.createElement(b,c({ref:t},u,{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);