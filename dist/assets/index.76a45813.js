(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const p=[{packYear:2022,packName:"Microsip",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd1574a682a39ee3c7a2ff_Isotipo.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Microsip/2022.html"},{packYear:2022,packName:"CEO M\xF3vil",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4386023e66a9271f402_CEO-M%C3%B3vil.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/CEO/index.html"},{packYear:2022,packName:"Sync-e",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a438e5519773791717a0_SyncE.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/Sync/index.html"},{packYear:2022,packName:"En Ruta",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4384ed0f2450827bbac_Ruta.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/MER/index.html"},{packYear:2022,packName:"SICS \u2013 Agente Matriz",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4394ed0f24d1327bbb1_Group%20221.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/SiCS/matriz.html"},{packYear:2022,packName:"SICS \u2013 Agente Sucursal",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a4394ed0f24d1327bbb1_Group%20221.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/SiCS/sucursal.html"},{packYear:2022,packName:"API",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a43837602e23414bc988_api_black_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/api/api.html"},{packYear:2022,packName:"Servidor de Aplicaciones",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/6307a438d5a1c7b7874e0ef4_apps_white_24dp%20(1)%201(1).png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/SA/index.html"},{packYear:2022,packName:"Respaldos Autom\xE1ticos",packImage:"https://uploads-ssl.webflow.com/62ebdd458759bdb749120f22/62fd161df183d85cd5970ef5_backup_white_24dp%201.png",packFrame:"https://dor1k8lp3ljt2.cloudfront.net/DescargasSoporte/RA/index.html"}];const d=()=>{const c=document.createElement("div");return c.classList.add("grid"),p.slice(0,4).forEach(t=>{const o=document.createElement("div");o.classList.add("pack"),o.innerHTML=`
      <div class="pack">
				<div class="pack-download">
				<iframe class="frametest" src=${t.packFrame} frameborder="0" ></iframe>
					<div class="link-pack" >
						<div class="pack-year">
							<h4>${t.packYear}</h4>
						</div>
						<div class="pack-img">
							<img src="${t.packImage}" alt="${t.packName}">
						</div>
						<div class="pack-title">
							<h4>${t.packName}</h4>
						</div>
					</div>
				</div>
			</div>
    `,c.appendChild(o)}),c};document.querySelector("#app").innerHTML=`
  <div>
  ${d().outerHTML}
  </div>  
`;
