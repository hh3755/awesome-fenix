(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{567:function(t,r,i){"use strict";i.r(r);var n=i(11),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"架构安全性"}},[t._v("架构安全性")]),t._v(" "),i("p",[t._v("即使只限定在“软件架构设计”这个语境下，系统安全仍然是一个很大的话题。我们谈论的计算机系统安全，不仅仅是指“防御系统被黑客攻击”这样狭隘的安全。架构安全性至少应包括（不限于）以下这些问题的具体解决方案：")]),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"./authentication"}},[i("strong",[t._v("认证")])]),t._v("（Authentication）：系统如何正确分辨出操作用户的真实身份？")]),t._v(" "),i("li",[i("a",{attrs:{href:"./authorization"}},[i("strong",[t._v("授权")])]),t._v("（ Authorization）：系统如何控制一个用户该看到哪些数据、能操作哪些功能？")]),t._v(" "),i("li",[i("a",{attrs:{href:"./credentials"}},[i("strong",[t._v("凭证")])]),t._v("（Credentials）：系统如何保证它与用户之间的承诺是双方当时真实意图的体现，是准确、完整且不可抵赖的？")]),t._v(" "),i("li",[i("a",{attrs:{href:"./confidentiality"}},[i("strong",[t._v("保密")])]),t._v("（Confidentiality）：系统如何保证敏感数据无法被包括系统管理员在内的内外部人员所窃取、滥用？")]),t._v(" "),i("li",[i("a",{attrs:{href:"./transport-security"}},[i("strong",[t._v("传输")])]),t._v("（Transport Security）：系统如何保证通过网络传输的信息无法被第三方窃听、篡改和冒充？")]),t._v(" "),i("li",[i("a",{attrs:{href:"./verification"}},[i("strong",[t._v("验证")])]),t._v("（Verification）：系统如何确保提交到每项服务中的数据是合乎规则的，不会对系统稳定性、数据一致性、正确性产生风险？")])]),t._v(" "),i("p",[t._v("与安全相关的问题，一般不会直接创造价值，解决起来又繁琐复杂，费时费力，因此经常性被开发者有意无意地忽略掉。庆幸的是这些问题基本上也都是与具体系统、具体业务无关的通用性问题，这意味着它们往往会存在着业界通行的、已被验证过是行之有效的解决方案，乃至已经形成行业标准，不需要开发者自己从头去构思如何解决。")]),t._v(" "),i("p",[t._v("本章里，笔者会围绕系统安全的标准方案，逐一探讨以上问题的处理办法，并会以Fenix's Bookstore作为案例实践。因篇幅所限，笔者一般不在文中直接贴出代码，如有需要，可以在"),i("RouterLink",{attrs:{to:"/exploration/projects/"}},[t._v("Fenix's Bookstore的GitHub仓库")]),t._v("获取。此外，还有其他一些安全相关的内容，是主要由管理、运维、审计领域为主导，尽管也需要软件架构和开发的配合参与，但不列入本章的讨论范围之内，譬如：安全审计、系统备份与恢复、防治病毒、信息系统安全法规与制度、计算机防病毒制度、保护私有信息规则，等等。")],1)])}),[],!1,null,null,null);r.default=e.exports}}]);