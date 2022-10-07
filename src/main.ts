import './style.css'
import {packGrid} from "./packGrid";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${packGrid().outerHTML}
  </div>  
`


