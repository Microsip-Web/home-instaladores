import './style.css'
import {packGrid} from "./packGrid";


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  /* Calling the packGrid function and then using the outerHTML property to get the HTML of the
  element. */
  ${packGrid().outerHTML}
  </div>  
`


