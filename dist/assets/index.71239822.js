(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const p=[{packYear:2024,packName:"Microsip",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1574a682a39ee3c7a2ff_Isotipo.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Microsip/2024-bunny.html"},{packYear:2024,packName:"CEO M\xF3vil",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4386023e66a9271f402_CEO-M%C3%B3vil.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/CEO/2024-index-bunny.html"},{packYear:2024,packName:"Sync-e",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a438e5519773791717a0_SyncE.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/Sync/2024-index-bunny.html"},{packYear:2024,packName:"En Ruta",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4384ed0f2450827bbac_Ruta.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/MER/2024-index-bunny.html"},{packYear:2024,packName:"SICS \u2013 Agente Matriz",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4394ed0f24d1327bbb1_Group%20221.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/SiCS/2024-matriz-bunny.html"},{packYear:2024,packName:"SICS \u2013 Agente Sucursal",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4394ed0f24d1327bbb1_Group%20221.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/SiCS/2024-sucursal-bunny.html"},{packYear:2024,packName:"Servidor de Aplicaciones",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a438d5a1c7b7874e0ef4_apps_white_24dp%20(1)%201(1).png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/SA/2024-index-bunny.html"},{packYear:2024,packName:"Respaldos Autom\xE1ticos",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd161df183d85cd5970ef5_backup_white_24dp%201.png",packFrame:"https://microsip.b-cdn.net/DescargasSoporte/RA/2024-index-bunny.html"}];const n=()=>{const s=document.createElement("div");return s.classList.add("grid"),p.slice(0,4).forEach(t=>{const c=document.createElement("div");c.classList.add("pack"),c.innerHTML=`
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${t.packFrame} frameborder="0" ></iframe>
				</div>
			</div>
    `,s.appendChild(c)}),s};document.querySelector("#app").innerHTML=`
  <div>
  ${n().outerHTML}
  </div>  
`;