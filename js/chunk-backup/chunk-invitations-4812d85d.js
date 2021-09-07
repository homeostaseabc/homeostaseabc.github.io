System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(e){"use strict";var t,n,o,r;return{setters:[function(e){t=e.a,n=e.o},function(e){o=e.S,r=e.b4}],execute:function(){e({a:u,u:l});const s="team_ids[]",c="role",a=(e,t)=>{const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n},i=e=>document.querySelectorAll(e+" > a");function u(e,t){if(e.checked)for(const n of document.querySelectorAll(t))n.appendChild(a(s,e.value));else for(const n of document.querySelectorAll(`input[type="hidden"][name="team_ids[]"][value="${e.value}"]`))n.remove()}function l(e,t){const n=(e=>{const t=new URLSearchParams(window.location.search),n=new Set(t.getAll(s)),o=document.querySelectorAll(e);for(const r of o)r.checked?n.add(r.value):n.delete(r.value);return[...n]})(t);for(const o of i(e)){const e=o.getAttribute("href");if(e){const t=new URL(e,window.location.origin),r=new URLSearchParams(t.search.slice(1));r.delete(s);for(const e of n)r.append(s,e);t.search=r.toString(),o.setAttribute("href",t.toString())}}}function d(){const e=document.querySelector(".js-org-reinstate-forms"),t=document.querySelectorAll(".js-org-reinstate-option:checked");if(!e||1!==t.length)return;const n=t[0].getAttribute("data-form"),o=e.getElementsByClassName("js-togglable-form");for(const r of o)r.classList.add("d-none");document.getElementById(n).classList.remove("d-none")}function g(){const e=document.querySelector(".js-seats");if(!e)return p();const t=e.getAttribute("data-filled-seats");return parseInt(t)+p()}function m(){(function(){if(p()<=0)return f(".js-plan-no-change",!0),f(".js-plan-changes",!0),!0;return!1})()||(function(){const e=document.querySelector(".js-filled-seats"),t=g();e&&null!==t&&(e.textContent=t.toString())}(),function(){const e=document.querySelector(".js-seats-remaining");if(e instanceof HTMLElement){e.hidden=!0;const t=b()-g(),n=document.querySelector(".js-seats-remaining-zero"),o=document.querySelector(".js-seats-remaining-singular"),r=document.querySelector(".js-seats-remaining-plural");if(n.hidden=0!==t,o.hidden=1!==t,t>1){document.querySelector(".js-seats-remaining-update-target").textContent=String(t)}r.hidden=t<=1}}(),function(){const e=document.querySelector(".js-max-seats-warning");e instanceof HTMLElement&&(e.hidden=!S())}(),function(){const e=g();return b()<e}()?async function(){const e=document.querySelector(".js-seats");if(!e)return;const t=new URL(e.getAttribute("data-url"),window.location.origin),n=new URLSearchParams(t.search.slice(1));n.append("seats",g().toString()),t.search=n.toString(),null==j||j.abort();const{signal:o}=j=new AbortController;let r=null;try{const e=await fetch(t.toString(),{signal:o,headers:{Accept:"application/json"}});e.ok&&(r=await e.json())}catch(i){}if(o.aborted)return;if(!r)return;const s=r.new_price,c=e.getAttribute("data-original-price");if(c&&s===c)return void f(".js-plan-no-change",!0);!function(){const e=document.querySelector(".js-new-seats"),t=document.querySelector(".js-new-users-singular"),n=document.querySelector(".js-new-users-plural"),o=p();t.hidden=1!==o,n.hidden=1===o,e.textContent=String(o)}();const a=r.selectors;for(const u in a)for(const e of document.querySelectorAll(u))e.innerHTML=a[u];f(".js-plan-no-change",!0),f(".js-plan-changes",!1),f(".js-complete-button",!0),f(".js-invite-button",!1)}():(f(".js-plan-no-change",!1),f(".js-plan-changes",!0),f(".js-complete-button",!1),f(".js-invite-button",!0)))}function f(e,t){const n=document.querySelector(e);n instanceof HTMLElement&&(n.hidden=t)}t("click",".js-invitation-toggle-team",(async function({currentTarget:e}){l(".js-invitations-team-suggestions-pagination",".js-invitation-toggle-team");u(e,"form.js-org-team-suggestions")})),t("click",".js-invitation-radio-role",(async function({currentTarget:e}){const t=e.value;for(const n of i(".js-invitations-team-suggestions-pagination")){const e=n.getAttribute("href");if(e){const o=new URL(e,window.location.origin),r=new URLSearchParams(o.search.slice(1));r.set("role",t),o.search=r.toString(),n.setAttribute("href",o.toString())}}for(const n of document.querySelectorAll('input[type="hidden"][name="role"]'))n.remove();for(const n of document.querySelectorAll("form.js-org-member-role"))n.appendChild(a(c,t))})),t("change",".js-org-reinstate-option",d),n(".js-org-reinstate-forms",d),n(".js-member-suggestion",(function(){const e=Array.from(document.querySelectorAll(".js-badge")).map((e=>e.querySelector("input").value));if(0!==e.length)for(const t of document.querySelectorAll(".js-member-suggestion")){const n=t.getAttribute("data-autocomplete-value");if(e.includes(n)){t.classList.add("disabled"),t.setAttribute("aria-disabled","true");const e=t.querySelector(".js-non-member-warning-reason"),n=t.querySelector(".js-non-member-warning-action");if(e&&n)for(const t of[e,n])t.textContent=t.getAttribute("data-markup"),t instanceof HTMLElement&&(t.hidden=!1)}}})),t("combobox-commit",".js-badge-container .js-new-org-members-complete-results",(e=>{const t=document.querySelector(".js-badge-input"),n=document.querySelector(".js-badges"),o=e.target.querySelectorAll(".js-badge-template"),s=Array.from(document.querySelectorAll(".js-badge")).map((e=>e.querySelector("input").value));for(const r of o){const e=r.cloneNode(!0).content,t=e.querySelector("input").value;s.includes(t)||n.append(e)}m(),function(e){const t=e.target;r(t)}(e),t.value="",t.setAttribute("placeholder","")})),t("click",".js-badge-search-container .js-badge",(e=>{const t=e.currentTarget;"true"===t.getAttribute("aria-pressed")?t.setAttribute("aria-pressed","false"):t.setAttribute("aria-pressed","true")})),t("details-dialog-close",".js-invite-member-dialog",(e=>{const t=e.currentTarget.querySelector(".js-auto-complete-button");t&&(t.disabled=!0)})),t("click",".js-badge-search-container",(e=>{e.currentTarget.querySelector("input").focus()})),t("click",".js-badge-container .js-member-suggestion",(()=>{document.querySelector(".js-badge-input").focus()})),o("keydown",".js-badge-search-container .js-badge-input",(e=>{const t=e.target,n=t.closest(".js-badge-search-container"),o=n.querySelectorAll('.js-badges .js-badge[aria-pressed="true"]'),r=n.getAttribute("data-allow-plan-increase"),s="Backspace"!==e.key||""!==t.value;if(!r&&S()&&s)e.preventDefault();else if(!s){if(0!==o.length)for(const e of o)e.remove(),h(e);else{const e=n.querySelectorAll(".js-badges .js-badge");if(0===e.length)return;const t=e[e.length-1];t.remove(),h(t)}m()}}));let j=null;function p(){return document.querySelectorAll(".js-badge").length||0}function b(){const e=document.querySelector(".js-seats");if(!e)return 0;const t=e.getAttribute("data-total-seats");return parseInt(t)}function S(){return b()===g()}function h(e){r(e)}}}}));
//# sourceMappingURL=chunk-invitations-4856ca69.js.map
