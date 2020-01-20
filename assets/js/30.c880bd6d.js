(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{227:function(a,s,e){"use strict";e.r(s);var t=e(0),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"quick-docker-build-using-identity-and-credential"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-docker-build-using-identity-and-credential"}},[a._v("#")]),a._v(" Quick Docker build using identity and credential")]),a._v(" "),e("h2",{attrs:{id:"create-a-resource-group"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-resource-group"}},[a._v("#")]),a._v(" Create a resource group")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("az group create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -n mytaskrunrg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -l westus\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"crate-a-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crate-a-registry"}},[a._v("#")]),a._v(" Crate a Registry")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("az acr create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n   -n myreg -g mytaskrunrg --sku Standard\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h2",{attrs:{id:"create-a-user-identity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-user-identity"}},[a._v("#")]),a._v(" Create a User Identity")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("az identity create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -g mytaskrunrg "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -n myquickdockerbuildrunwithidentity\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"add-role-assignment-to-the-remote-registry-you-need-fill-the-right-information-below"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-role-assignment-to-the-remote-registry-you-need-fill-the-right-information-below"}},[a._v("#")]),a._v(" Add role assignment to the remote registry (You need fill the right information below)")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("az role assignment create --assignee "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"c5e2807e-4bbf-4faa-80fb-0a37f316113a"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --scope "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourceGroups/huanwutest/providers/Microsoft.ContainerRegistry/registries/huanwudftest2"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --role acrpull\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h2",{attrs:{id:"deploy-a-quick-run"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploy-a-quick-run"}},[a._v("#")]),a._v(" Deploy a quick run")]),a._v(" "),e("p",[a._v("Fill the right credential azuredeploy.json")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("az group deployment create --resource-group "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"huanwutest"')]),a._v(" --template-file azuredeploy.json "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --parameters azuredeploy.parameters.json --parameters "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("registryName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"huanwudftest6"')]),a._v(" --parameters "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("taskRunName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"huanwudfwesttaskrun03"')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --parameters "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("userAssignedIdentity")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourcegroups/huanwudfwestgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/huanwudfidentity"')]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);