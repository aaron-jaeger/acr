(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{220:function(s,e,t){"use strict";t.r(e);var n=t(0),r=Object(n.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"using-azure-container-registry-with-github-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-container-registry-with-github-actions"}},[s._v("#")]),s._v(" Using Azure Container Registry With GitHub Actions")]),s._v(" "),t("p",[s._v("For creating workflows for your GitHub repository using GitHub Actions, please refer "),t("a",{attrs:{href:"https://developer.github.com/actions/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://developer.github.com/actions/"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("The following "),t("code",[s._v("main.workflow")]),s._v(" file defines a workflow that uses the built-in Docker Actions to login to the Azure Container Registry, build and push an image to the registry. You also needs to define three secrets to pass the registry access information to the Actions.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Secret/Environment Variable")]),s._v(" "),t("th",[s._v("Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("DOCKER_REGISTRY_URL")]),s._v(" "),t("td",[s._v("Login server url for the registry, eg, myregistry.azurecr.io")])]),s._v(" "),t("tr",[t("td",[s._v("DOCKER_USERNAME")]),s._v(" "),t("td",[s._v("Service principal App ID or admin username for the registry")])]),s._v(" "),t("tr",[t("td",[s._v("DOCKER_PASSWORD")]),s._v(" "),t("td",[s._v("Service principal password or admin password for the registry")])])])]),s._v(" "),t("h2",{attrs:{id:"main-workflow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main-workflow"}},[s._v("#")]),s._v(" main.workflow")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('workflow "DockerFlowExample" {\n  resolves = ["Docker Push"]\n  on = "push"\n}\n\naction "Docker Login" {\n  uses = "actions/docker/login@8cdf801b322af5f369e00d85e9cf3a7122f49108"\n  secrets = ["DOCKER_REGISTRY_URL", "DOCKER_USERNAME", "DOCKER_PASSWORD"]\n}\n\naction "Docker Build" {\n  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"\n  needs = ["Docker Login"]\n  args = ["build", "-t", "$DOCKER_REGISTRY_URL/hello-world:latest", "docs/integration/github-actions"]\n  secrets = ["DOCKER_REGISTRY_URL"]\n}\n\naction "Docker Push" {\n  uses = "actions/docker/cli@8cdf801b322af5f369e00d85e9cf3a7122f49108"\n  needs = ["Docker Build"]\n  args = ["push", "$DOCKER_REGISTRY_URL/hello-world:latest"]\n  secrets = ["DOCKER_REGISTRY_URL"]\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);