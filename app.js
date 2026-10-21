/* Paquete estático generado desde src/game/. No requiere React/Vite en Cloudflare. */
// v98.71: Mantener posición integrada en la IA general, la simulación y el dispatcher de CPU.
// v98.70: acción Mantener posición para usar una acción sin mover ficha; reloj +30 segundos por turno completo de equipo.
// v98.69: una acción por cada jugador del equipo (hasta 11 por turno) y panel DT apilado en una sola columna.
// v98.68: panel táctico completo con formaciones, estilos de juego, instrucciones por línea y evaluación de CPU.
// v98.65: panel Director Técnico reorganizado, estado de activación explícito y órdenes en curso separadas de la configuración pendiente.
// v98.64: Modo Director Técnico con 8 órdenes preestablecidas, automatización por bloques de 1–4 turnos propios y pausa para renovar instrucciones.
// v98.63: camisetas tradicionales de los 30 clubes de Primera División 2026, aplicadas a los jugadores en cancha.
// v98.62: amplió el alcance y la precisión corta; su límite anterior de cuatro acciones queda sustituido por v98.69.
// v98.61: orientación persistente entre redibujados, giro limitado y suavizado para evitar saltos por acción.
// v98.60: eje de giro corregido para que los 22 sprites miren al balón; arquero humano amarillo basado en el naranja.
// v98.58: escala visible unificada para jugadores/arqueros, incluidos los sprites de poses compactas; sombra de suelo reforzada.
// v98.56: orientacion corregida, sprites cenitales HD con color y contraste mejorados; motor conservado.
// v98.48: se retiró la fase de movimiento autónomo colectivo.

const V98_DIRECTOR_MODE_STYLES = String.raw`
/* Fútbol Único v98.70 · panel de dirección técnica en columnas únicas */
#fuDirectorPanel.fu-director-panel{box-sizing:border-box;position:relative;display:grid!important;grid-template-columns:minmax(0,1fr);gap:12px;width:100%;margin:12px 0;padding:16px;border:1px solid rgba(200,255,46,.28);border-radius:16px;background:radial-gradient(ellipse at 0 0,rgba(200,255,46,.055),transparent 36%),linear-gradient(145deg,rgba(17,26,36,.99),rgba(8,13,20,.99));box-shadow:0 14px 32px rgba(0,0,0,.25);color:#eef3f8;font-family:Inter,"Segoe UI",system-ui,sans-serif;isolation:isolate}
#fuDirectorPanel *{box-sizing:border-box}
#fuDirectorPanel .fu-director-head{grid-column:1/-1;display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin:0;padding:0 0 12px;border-bottom:1px solid rgba(255,255,255,.1)}
#fuDirectorPanel .fu-director-title{font-size:16px;font-weight:950;letter-spacing:.035em;color:#d8ff75;line-height:1.25}
#fuDirectorPanel .fu-director-desc{margin-top:5px;font-size:12px;line-height:1.45;color:#b8c5d4;max-width:900px}
#fuDirectorPanel .fu-director-kicker{display:inline-flex;align-items:center;gap:6px;padding:6px 9px;border:1px solid rgba(200,255,46,.22);border-radius:999px;background:rgba(200,255,46,.07);color:#d8ff75;font-size:9px;font-weight:950;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
#fuDirectorPanel .fu-director-section{grid-column:1/-1;display:flex;align-items:center;gap:9px;margin:2px 0 -3px;color:#8d9cad;font-size:10px;font-weight:950;letter-spacing:.12em;text-transform:uppercase}
#fuDirectorPanel .fu-director-section:after{content:"";height:1px;flex:1;background:rgba(255,255,255,.09)}
#fuDirectorPanel .fu-director-card{min-width:0;margin:0;padding:12px;border:1px solid rgba(255,255,255,.1);border-radius:12px;background:linear-gradient(145deg,rgba(255,255,255,.035),rgba(255,255,255,.012))}
#fuDirectorPanel .fu-director-field{display:flex;flex-direction:column;gap:8px;min-width:0}
#fuDirectorPanel .fu-director-field-title{display:flex;align-items:center;gap:7px;color:#d9e5f2;font-size:11px;font-weight:900;letter-spacing:.015em;line-height:1.3}
#fuDirectorPanel .fu-director-index{display:inline-grid;place-items:center;flex:none;width:20px;height:20px;border-radius:6px;background:rgba(200,255,46,.12);color:#c8ff2e;font-size:10px;font-weight:950}
#fuDirectorPanel select{display:block!important;appearance:auto!important;-webkit-appearance:menulist!important;width:100%!important;max-width:100%!important;min-width:0!important;height:43px!important;min-height:43px!important;margin:0!important;padding:8px 10px!important;border:1px solid rgba(255,255,255,.2)!important;border-radius:8px!important;background-color:#090f17!important;color:#f2f6fa!important;font-family:inherit!important;font-size:12px!important;font-weight:750!important;letter-spacing:normal!important;text-transform:none!important;line-height:1.3!important;white-space:normal!important;text-align:left!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.04)!important}
#fuDirectorPanel select:focus-visible,#fuDirectorPanel button:focus-visible{outline:3px solid rgba(200,255,46,.8)!important;outline-offset:2px!important}
#fuDirectorPanel select option{padding:8px!important;background:#0d1520!important;color:#eef3f8!important;font-size:13px!important;font-weight:600!important;letter-spacing:normal!important;text-transform:none!important}
#fuDirectorPanel select optgroup{background:#111b28!important;color:#c8ff2e!important;font-weight:900!important}
#fuDirectorPanel .fu-director-help{min-height:39px;color:#aebaca;font-size:11px;line-height:1.4;font-weight:500;letter-spacing:0;text-transform:none}
#fuDirectorPanel .fu-director-help strong{display:block;margin:0 0 3px;color:#e6f7bc;font-size:11px;font-weight:900}
#fuDirectorPanel .fu-dt-formation{grid-column:1/-1;display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-items:stretch}
#fuDirectorPanel .fu-dt-formation-copy{display:flex;flex-direction:column;gap:7px;min-width:0}
#fuDirectorPanel .fu-dt-pitch{min-width:0;padding:6px;border:1px solid rgba(255,255,255,.1);border-radius:10px;background:#0b151b}
#fuDirectorPanel .fu-dt-pitch svg{display:block;width:100%;height:auto;max-height:174px}
#fuDirectorPanel .fu-dt-formation-summary{padding:10px;border:1px solid rgba(200,255,46,.17);border-radius:9px;background:rgba(200,255,46,.045);color:#c9d6c0;font-size:11px;line-height:1.45}
#fuDirectorPanel .fu-dt-formation-summary strong{display:block;margin-bottom:4px;color:#d8ff75;font-size:14px;font-weight:950}
#fuDirectorPanel .fu-dt-wide-6,#fuDirectorPanel .fu-dt-wide-4,#fuDirectorPanel .fu-dt-wide-3{grid-column:1/-1!important}
#fuDirectorPanel .fu-director-actions{grid-column:1/-1;display:flex;flex-direction:column;flex-wrap:nowrap;gap:10px;align-items:stretch;margin:0;padding-top:12px;border-top:1px solid rgba(255,255,255,.1)}
#fuDirectorPanel button{display:inline-flex;align-items:center;justify-content:center;flex:1 1 auto;width:100%;min-width:0;min-height:44px;margin:0;padding:10px 14px;border:1px solid rgba(255,255,255,.18)!important;border-radius:9px!important;background:#192331!important;color:#eef4fb!important;font-family:inherit!important;font-size:12px!important;font-weight:900!important;line-height:1.25!important;letter-spacing:normal!important;text-align:center;white-space:normal;cursor:pointer;transition:filter .16s ease,transform .16s ease,border-color .16s ease}
#fuDirectorPanel button.primary{background:#c8ff2e!important;border-color:#c8ff2e!important;color:#10150b!important;box-shadow:0 5px 15px rgba(200,255,46,.12)!important}
#fuDirectorPanel button:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1px)}#fuDirectorPanel button:disabled{opacity:.48;cursor:not-allowed;filter:saturate(.35)}
#fuDirectorPanel .fu-director-status{grid-column:1/-1;display:flex;align-items:flex-start;gap:9px;min-height:39px;margin:0;padding:10px 12px;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:rgba(255,255,255,.04);color:#d1dbe5;font-size:11px;line-height:1.45;overflow-wrap:anywhere}
#fuDirectorPanel .fu-director-status:before{content:"";width:8px;height:8px;flex:none;margin-top:3px;border-radius:50%;background:#ffb01f;box-shadow:0 0 0 3px rgba(255,176,31,.12)}#fuDirectorPanel .fu-director-status.is-active:before{background:#c8ff2e;box-shadow:0 0 0 3px rgba(200,255,46,.13),0 0 10px rgba(200,255,46,.4)}#fuDirectorPanel .fu-director-status.is-paused:before{background:#ffb01f}#fuDirectorPanel.is-unavailable{opacity:.72}
@media(max-width:1050px){#fuDirectorPanel .fu-dt-formation{grid-template-columns:minmax(0,1fr)}#fuDirectorPanel .fu-dt-formation-summary{grid-column:1/-1}}
@media(max-width:760px){#fuDirectorPanel.fu-director-panel{grid-template-columns:minmax(0,1fr);gap:10px;padding:12px}#fuDirectorPanel .fu-director-head,#fuDirectorPanel .fu-director-actions,#fuDirectorPanel .fu-director-status,#fuDirectorPanel .fu-director-section{grid-column:1/-1}#fuDirectorPanel .fu-dt-formation{grid-template-columns:minmax(0,1fr)}#fuDirectorPanel .fu-dt-pitch{grid-row:2}#fuDirectorPanel .fu-dt-formation-summary{grid-column:auto}#fuDirectorPanel .fu-dt-wide-6,#fuDirectorPanel .fu-dt-wide-4,#fuDirectorPanel .fu-dt-wide-3{grid-column:1/-1!important}#fuDirectorPanel .fu-director-desc{font-size:11px!important}#fuDirectorPanel .fu-director-actions{flex-direction:column}#fuDirectorPanel .fu-director-actions button{flex:1 1 auto;width:100%;min-height:45px}}
@media(max-width:460px){#fuDirectorPanel.fu-director-panel{grid-template-columns:minmax(0,1fr)}#fuDirectorPanel .fu-dt-wide-6,#fuDirectorPanel .fu-dt-wide-4,#fuDirectorPanel .fu-dt-wide-3{grid-column:1}#fuDirectorPanel .fu-director-head{flex-direction:column}#fuDirectorPanel .fu-director-kicker{white-space:normal}}
@media(prefers-reduced-motion:reduce){#fuDirectorPanel button{transition:none}#fuDirectorPanel button:hover:not(:disabled){transform:none}}
`;

const V98_DIRECTOR_MODE_PATCH = String.raw`
/* ==================== MODO DIRECTOR TÉCNICO v98.70 ====================
   Automatiza únicamente las acciones del Equipo 1 cuando el usuario aplica una orden.
   El motor de legalidad y resolución del juego sigue siendo la fuente de verdad. */
(function(){
 const FU_DT_KEY='futbolUnico_director_settings_v2';
 const FU_DT_ORDERS={
  safe:{label:'Salida segura',plan:'safe-exit',group:'ataque',help:'Desde el fondo, prioriza apoyos libres y pases seguros para evitar pérdidas cerca del arco propio.'},
  escape:{label:'Salir de la presión',plan:'escape-pressure',group:'ataque',help:'Busca un pase o una conducción para salir de una zona congestionada.'},
  possession:{label:'Conservar la posesión',plan:'positional-attack',group:'ataque',help:'Prefiere la circulación y los pases seguros; arriesga cuando existe una ventaja clara.'},
  vertical:{label:'Progresión vertical',plan:'vertical-progress',group:'ataque',help:'Favorece pases y conducciones hacia delante cuando la jugada sea viable.'},
  direct:{label:'Juego directo al espacio',plan:'vertical-progress',group:'ataque',help:'Favorece pases largos hacia delante y receptores adelantados; asume más riesgo.'},
  between:{label:'Buscar al hombre entre líneas',plan:'between-lines',group:'ataque',help:'Busca un receptor central entre líneas para superar el mediocampo rival.'},
  bands:{label:'Abrir el juego por bandas',plan:'use-width',group:'ataque',help:'Prioriza receptores exteriores para ensanchar el campo.'},
  switch:{label:'Cambio de orientación',plan:'switch-flank',group:'ataque',help:'Busca cambiar de sector si hay un receptor disponible y el pase es viable.'},
  prepare:{label:'Preparar la finalización',plan:'create-finish',group:'ataque',help:'Prefiere preparar una ocasión mejor en vez de rematar apurado.'},
  total:{label:'Ataque total',plan:'finish-now',group:'ataque',help:'Aumenta la prioridad ofensiva y de remate, aceptando más riesgo defensivo.'},
  counter:{label:'Contraataque rápido',plan:'vertical-progress',group:'transicion',help:'Prioriza progresar rápido; no detecta de forma exclusiva el instante posterior a una recuperación.'},
  recover:{label:'Recuperar la segunda pelota',plan:'recover-loose',group:'transicion',help:'Si la pelota está suelta, prioriza llegar a ella antes que realizar otras acciones.'},
  finish:{label:'Finalizar una ocasión clara',plan:'finish-now',group:'ataque',help:'Prioriza remates con probabilidad estimada favorable; no garantiza el gol.'},
  pressWin:{label:'Presión para recuperar',plan:'press-win',group:'defensa',help:'Prioriza duelos legales favorables para recuperar la pelota.'},
  press:{label:'Presión alta con cobertura',plan:'press-cover',group:'defensa',help:'Acerca jugadores al poseedor y favorece cubrir los pases cercanos.'},
  block:{label:'Bloque medio compacto',plan:'mid-block',group:'defensa',help:'Favorece posiciones centrales entre la pelota y el arco, con menos persecución individual.'},
  deny:{label:'Cerrar el centro',plan:'deny-center',group:'defensa',help:'Prioriza bloquear los carriles centrales y las líneas directas al arco.'},
  retreat:{label:'Repliegue y proteger el arco',plan:'protect-goal',group:'defensa',help:'Favorece posiciones cercanas al arco propio y acciones defensivas de menor riesgo.'}
 };
 const FU_DT_FORMATIONS={
  '3-4-3':{lines:[3,4,3],desc:'Tres defensores, cuatro mediocampistas y tres atacantes: amplitud y presencia ofensiva.'},'3-5-2':{lines:[3,5,2],desc:'Tres defensores y un mediocampo numeroso para disputar el centro con dos puntas.'},'4-4-2':{lines:[4,4,2],desc:'Dos líneas de cuatro y dos delanteros; equilibrio y apoyos sencillos.'},'4-3-3':{lines:[4,3,3],desc:'Defensa de cuatro, mediocampo de tres y tridente ofensivo.'},'4-5-1':{lines:[4,5,1],desc:'Mediocampo poblado y un delantero; ayuda a proteger la ventaja.'},'5-3-2':{lines:[5,3,2],desc:'Cinco defensores, tres medios y dos puntas para proteger y salir rápido.'},'5-4-1':{lines:[5,4,1],desc:'Estructura conservadora con cobertura y salida con un solo punta.'},'4-2-3-1':{lines:[4,2,3,1],desc:'Doble pivote, tres mediapuntas y un delantero central.'},'4-1-4-1':{lines:[4,1,4,1],desc:'Un pivote delante de la defensa, cuatro medios y un punta.'},'3-4-2-1':{lines:[3,4,2,1],desc:'Tres centrales, carriles anchos, dos enlaces y un delantero.'},'3-5-1-1':{lines:[3,5,1,1],desc:'Mediocampo de cinco, un enlace y un delantero de referencia.'},'4-4-1-1':{lines:[4,4,1,1],desc:'Dos líneas de cuatro, un segundo punta y un delantero.'},'5-2-3':{lines:[5,2,3],desc:'Cinco defensores, doble medio y tres atacantes para transiciones.'},'3-4-1-2':{lines:[3,4,1,2],desc:'Tres centrales, cuatro medios, un enlace y dos delanteros.'},'4-3-2-1':{lines:[4,3,2,1],desc:'Tres medios, dos jugadores entre líneas y un punta.'},'4-2-4':{lines:[4,2,4],desc:'Sistema muy ofensivo con cuatro atacantes y menos protección central.'},'3-3-3-1':{lines:[3,3,3,1],desc:'Tres líneas móviles detrás de un punta; busca conexiones entre líneas.'},'5-2-1-2':{lines:[5,2,1,2],desc:'Cinco atrás, doble pivote, un enlace y dos delanteros.'}
 };
 const FU_DT_STYLES={balanced:{label:'Equilibrado',desc:'Mezcla seguridad, progresión y protección según la jugada.'},tiki:{label:'Tiki-taka / pase corto',desc:'Favorece pases cortos a compañeros libres y circulación; desincentiva rifar la pelota.'},counter:{label:'Contraataque',desc:'Prioriza progresar rápido y buscar delanteros antes de que el rival se ordene.'},wings:{label:'Juego por las bandas',desc:'Favorece receptores exteriores para ensanchar el campo y atacar desde los costados.'},direct:{label:'Juego directo',desc:'Busca avanzar en pocos pases, con envíos verticales hacia jugadores adelantados.'},possession:{label:'Posesión paciente',desc:'Prioriza receptores seguros antes que acelerar sin una ventaja clara.'},highpress:{label:'Presión alta',desc:'Sin pelota, prioriza acercarse al poseedor y disputar recuperaciones más arriba.'},lowblock:{label:'Bloque bajo y contragolpe',desc:'Prioriza cubrir el camino al arco y salir rápido tras recuperar.'}};
 const FU_DT_CONFIG_DEFAULT={formation:'4-3-3',style:'balanced',defenseLine:'medium',midfieldLine:'balanced',attackLine:'normal',width:'normal',pressure:'medium',tempo:'normal'};
 const FU_DT_DEF_LINE={low:-1.35,medium:0,high:1.35},FU_DT_MID_LINE={drop:-.85,balanced:0,advance:1},FU_DT_ATTACK_LINE={support:-1,normal:0,high:1.45};
 let fuDTConfig={...FU_DT_CONFIG_DEFAULT},fuDTRunningConfig={...FU_DT_CONFIG_DEFAULT};
 let fuDTActive=false,fuDTBusy=false,fuDTTimer=null,fuDTRemaining=0,fuDTOrder='vertical',fuDTSpan=2,fuDTRunningOrder='vertical',fuDTRunningSpan=2,fuDTNeedsOrder=false,fuDTRejected=new Set(),fuDTLastLabel='';
 let fuDTDisabledOnline=false;
 try{fuDTDisabledOnline=new URLSearchParams(parent.location.search||location.search).has('multiplayer_match_id');}catch(_e){}
 function fuDTReadSettings(){try{const v=JSON.parse(localStorage.getItem(FU_DT_KEY)||localStorage.getItem('futbolUnico_director_settings_v1')||'null');if(v&&FU_DT_ORDERS[v.order])fuDTOrder=v.order;if(v&&[1,2,3,4].includes(Number(v.span)))fuDTSpan=Number(v.span);if(v&&v.config&&typeof v.config==='object')Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const val=v.config[k];if(k==='formation'&&FU_DT_FORMATIONS[val])fuDTConfig[k]=val;else if(k==='style'&&FU_DT_STYLES[val])fuDTConfig[k]=val;else if(k==='defenseLine'&&['low','medium','high'].includes(val))fuDTConfig[k]=val;else if(k==='midfieldLine'&&['drop','balanced','advance'].includes(val))fuDTConfig[k]=val;else if(k==='attackLine'&&['support','normal','high'].includes(val))fuDTConfig[k]=val;else if(k==='width'&&['narrow','normal','wide'].includes(val))fuDTConfig[k]=val;else if(k==='pressure'&&['low','medium','high'].includes(val))fuDTConfig[k]=val;else if(k==='tempo'&&['slow','normal','fast'].includes(val))fuDTConfig[k]=val;});fuDTRunningConfig={...fuDTConfig};}catch(_e){}}
 function fuDTSaveSettings(){try{localStorage.setItem(FU_DT_KEY,JSON.stringify({order:fuDTOrder,span:fuDTSpan,config:fuDTConfig}));}catch(_e){}}
 function fuDTNode(id){return $(id);}
 function fuDTRender(message){
  const status=fuDTNode('fuDirectorStatus'),apply=fuDTNode('fuDirectorApply'),stop=fuDTNode('fuDirectorStop'),order=fuDTNode('fuDirectorOrder'),span=fuDTNode('fuDirectorSpan'),help=fuDTNode('fuDirectorOrderHelp');
  if(order&&order.value!==fuDTOrder)order.value=fuDTOrder;
  if(span&&Number(span.value)!==fuDTSpan)span.value=String(fuDTSpan);
  Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const node=fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1));if(node&&node.value!==fuDTConfig[k])node.value=fuDTConfig[k];});
  if(apply)apply.textContent=fuDTActive?'Actualizar plan táctico':'Aplicar plan táctico';
  if(stop){stop.disabled=false;stop.setAttribute('aria-label','Cancelar la automatización y volver al control manual');}
  if(help&&FU_DT_ORDERS[fuDTOrder])help.innerHTML='<strong>'+FU_DT_ORDERS[fuDTOrder].label+'</strong>'+FU_DT_ORDERS[fuDTOrder].help;
  if(fuDTNode('fuDirectorStyleHelp'))fuDTNode('fuDirectorStyleHelp').innerHTML='<strong>'+FU_DT_STYLES[fuDTConfig.style].label+'</strong>'+FU_DT_STYLES[fuDTConfig.style].desc;
  fuDTRefreshFormationPreview();
  if(apply)apply.setAttribute('aria-pressed',fuDTActive?'true':'false');
  if(!status)return;
  status.classList.toggle('is-active',fuDTActive);status.classList.toggle('is-paused',!fuDTActive);
  if(message){status.textContent=message;return;}
  if(fuDTDisabledOnline){status.textContent='Modo Director Técnico no disponible en Multijugador: cada participante conserva el control de sus acciones.';return;}
  if(matchClockFinished){status.textContent='Partido terminado. Podés consultar el resultado o iniciar otra partida.';return;}
  if(fuDTActive&&fuDTRemaining<=0){fuDTStop(true);return;}
  if(fuDTActive){
   let activeText='ORDEN ACTIVA: '+FU_DT_ORDERS[fuDTRunningOrder].label+'. Turnos propios restantes: '+fuDTRemaining+'.';
   if(fuDTOrder!==fuDTRunningOrder||fuDTSpan!==fuDTRunningSpan||JSON.stringify(fuDTConfig)!==JSON.stringify(fuDTRunningConfig))activeText+=' Hay cambios preparados; pulsá «Actualizar plan táctico» para aplicarlos.';
   else if(turn!==1)activeText+=' Esperando el turno del Equipo 1.';
   if(fuDTLastLabel)activeText+=' Última acción: '+fuDTLastLabel+'.';
   status.textContent=activeText;
  }else if(fuDTNeedsOrder)status.textContent='Bloque completado. El Equipo 1 queda en control manual; elegí otra orden para continuar.';
  else status.textContent='Modo manual activo. Elegí la táctica, la duración y pulsá «Aplicar órdenes».';
 }
 function fuDTPreview(){
  if(fuDTActive){fuDTRender();return;}
  const style=FU_DT_STYLES[fuDTConfig.style];
  fuDTRender('Configuración preparada: '+fuDTConfig.formation+' · '+style.label+' · '+FU_DT_ORDERS[fuDTOrder].label+' · '+fuDTSpan+' turno(s) propio(s). Sigue en control manual hasta aplicar el plan.');
 }
 function fuDTEscape(text){return String(text).replace(/[&<>\"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));}
 function fuDTGetFormationSlots(formationId){
  const formation=FU_DT_FORMATIONS[formationId]||FU_DT_FORMATIONS['4-3-3'],counts=formation.lines,used=new Set(),result=[];
  const def=[2,3,4,6,5,7,8,9,10,11],mid=[5,7,8,6,10,9,11,4,3,2],am=[10,8,7,9,11,5,6,4,3,2],striker=[9,11,10,8,7,6,5,4,3,2],all=[2,3,4,5,6,7,8,9,10,11];
  counts.forEach((count,lineIndex)=>{const pref=lineIndex===0?def:lineIndex===counts.length-1?striker:(counts.length>=4&&lineIndex===counts.length-2?am:mid);let chosen=pref.filter(n=>!used.has(n)).slice(0,count);if(chosen.length<count)chosen=chosen.concat(all.filter(n=>!used.has(n)&&!chosen.includes(n)).slice(0,count-chosen.length));chosen.forEach((number,slotIndex)=>{used.add(number);result.push({number,lineIndex,lineCount:count,slotIndex,lineTotal:counts.length});});});
  return result;
 }
 function fuDTRefreshFormationPreview(){
  const holder=fuDTNode('fuDirectorPitch'),summary=fuDTNode('fuDirectorFormationSummary');if(!holder)return;
  const id=fuDTConfig.formation,form=FU_DT_FORMATIONS[id]||FU_DT_FORMATIONS['4-3-3'],slots=fuDTGetFormationSlots(id),colors=['#6fa8ff','#b5e76a','#ffbb5c','#e58bff'];
  const field=['<svg viewBox="0 0 400 178" role="img" aria-label="Vista previa de la formación '+fuDTEscape(id)+'">','<defs><linearGradient id="fuDtGrass" x1="0" x2="1"><stop offset="0" stop-color="#122a24"/><stop offset="1" stop-color="#18382b"/></linearGradient></defs>','<rect x="1" y="1" width="398" height="176" rx="8" fill="url(#fuDtGrass)" stroke="#6f9a82" stroke-opacity=".6"/>','<path d="M200 2V176 M2 89H398 M2 36H398 M2 142H398" stroke="#b3d1be" stroke-opacity=".15" fill="none"/>','<rect x="2" y="49" width="27" height="80" fill="none" stroke="#b3d1be" stroke-opacity=".65"/><rect x="371" y="49" width="27" height="80" fill="none" stroke="#b3d1be" stroke-opacity=".18"/><circle cx="200" cy="89" r="28" fill="none" stroke="#b3d1be" stroke-opacity=".24"/><circle cx="14" cy="89" r="4" fill="#e6f7bc"/>'];
  slots.forEach(slot=>{const depth=form.lines.length===1?6.5:2+slot.lineIndex*(6/(form.lines.length-1));const x=28+depth*42,spacing=152/(slot.lineCount+1),y=89+(slot.slotIndex-(slot.lineCount-1)/2)*spacing;field.push('<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="9" fill="'+colors[Math.min(slot.lineIndex,3)]+'" stroke="#071018" stroke-width="2"/><text x="'+x.toFixed(1)+'" y="'+(y+3.2).toFixed(1)+'" text-anchor="middle" font-size="8" font-weight="900" fill="#071018">'+slot.number+'</text>');});
  field.push('</svg>');holder.innerHTML=field.join('');
  if(summary)summary.innerHTML='<strong>'+fuDTEscape(id)+'</strong>'+fuDTEscape(form.desc)+'<br><span style="color:#9eafbd">La estructura orienta los movimientos; no recoloca a todos instantáneamente.</span>';
 }
 function fuDTReadControls(){
  const order=fuDTNode('fuDirectorOrder'),span=fuDTNode('fuDirectorSpan');if(order&&FU_DT_ORDERS[order.value])fuDTOrder=order.value;if(span&&[1,2,3,4].includes(Number(span.value)))fuDTSpan=Number(span.value);
  Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const node=fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1));if(node)fuDTConfig[k]=node.value;});fuDTSaveSettings();fuDTRefreshFormationPreview();
 }
 function fuDTMount(){
  if(fuDTNode('fuDirectorPanel'))return;
  const statusNode=fuDTNode('cpuStatus');if(!statusNode||!fuDTNode('app'))return;
  const panel=document.createElement('section');panel.id='fuDirectorPanel';panel.className='fu-director-panel';panel.setAttribute('aria-label','Panel táctico del Modo Director Técnico');
  const formationOptions=Object.keys(FU_DT_FORMATIONS).map(id=>'<option value="'+id+'">'+id+'</option>').join('');
  const orderOptions={ataque:['safe','escape','possession','vertical','direct','between','bands','switch','prepare','finish','total'],transicion:['counter','recover'],defensa:['pressWin','press','block','deny','retreat']};let orderHtml='';Object.keys(orderOptions).forEach(group=>{const label=group==='ataque'?'Ataque y construcción':group==='transicion'?'Transición':'Defensa sin pelota';orderHtml+='<optgroup label="'+label+'">'+orderOptions[group].map(key=>'<option value="'+key+'">'+FU_DT_ORDERS[key].label+'</option>').join('')+'</optgroup>';});
  const styleOptions=Object.keys(FU_DT_STYLES).map(id=>'<option value="'+id+'">'+FU_DT_STYLES[id].label+'</option>').join('');
  panel.innerHTML='<div class="fu-director-head"><div><div class="fu-director-title">MODO DIRECTOR TÉCNICO</div><div class="fu-director-desc">Armá tu sistema, definí cómo querés jugar y ajustá cada línea. La CPU busca acciones legales que se acerquen al plan durante tus turnos.</div></div><span class="fu-director-kicker">Panel táctico · Equipo 1</span></div>'+ 
   '<div class="fu-director-section">1 · Sistema de juego</div>'+ 
   '<div class="fu-director-card fu-dt-formation"><div class="fu-dt-formation-copy"><label class="fu-director-field" for="fuDirectorFormation"><span class="fu-director-field-title"><span class="fu-director-index">01</span> Formación</span><select id="fuDirectorFormation" aria-label="Formación de tu equipo">'+formationOptions+'</select><div class="fu-director-help">Elegí la estructura. Las líneas buscarán sus zonas objetivo durante los movimientos.</div></label></div><div class="fu-dt-pitch" id="fuDirectorPitch" aria-live="polite"></div><div id="fuDirectorFormationSummary" class="fu-dt-formation-summary"></div></div>'+ 
   '<div class="fu-director-section">2 · Identidad y plan de partido</div>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-6" for="fuDirectorStyle"><span class="fu-director-field-title"><span class="fu-director-index">02</span> Estilo de juego</span><select id="fuDirectorStyle" aria-label="Estilo de juego">'+styleOptions+'</select><div id="fuDirectorStyleHelp" class="fu-director-help" aria-live="polite"></div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-6" for="fuDirectorOrder"><span class="fu-director-field-title"><span class="fu-director-index">03</span> Orden prioritaria</span><select id="fuDirectorOrder" aria-label="Orden prioritaria">'+orderHtml+'</select><div id="fuDirectorOrderHelp" class="fu-director-help" aria-live="polite"></div></label>'+ 
   '<div class="fu-director-section">3 · Instrucciones por línea</div>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-4" for="fuDirectorDefenseLine"><span class="fu-director-field-title"><span class="fu-director-index">04</span> Altura de la defensa</span><select id="fuDirectorDefenseLine"><option value="low">Baja · proteger profundidad</option><option value="medium">Media · equilibrada</option><option value="high">Alta · achicar el campo</option></select><div class="fu-director-help">Modifica las zonas que los defensores priorizan al moverse.</div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-4" for="fuDirectorMidfieldLine"><span class="fu-director-field-title"><span class="fu-director-index">05</span> Línea de mediocampo</span><select id="fuDirectorMidfieldLine"><option value="drop">Más retrasado · dar cobertura</option><option value="balanced">Equilibrado · conectar líneas</option><option value="advance">Adelantado · acompañar ataque</option></select><div class="fu-director-help">Orienta los movimientos de medios y pivotes.</div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-4" for="fuDirectorAttackLine"><span class="fu-director-field-title"><span class="fu-director-index">06</span> Altura de delanteros</span><select id="fuDirectorAttackLine"><option value="support">Apoyar desde atrás</option><option value="normal">Altura normal</option><option value="high">Bien arriba · fijar defensa</option></select><div class="fu-director-help">Hace que los atacantes busquen zonas más bajas o profundas.</div></label>'+ 
   '<div class="fu-director-section">4 · Comportamiento colectivo</div>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-3" for="fuDirectorWidth"><span class="fu-director-field-title"><span class="fu-director-index">07</span> Anchura</span><select id="fuDirectorWidth"><option value="narrow">Estrecho</option><option value="normal">Equilibrado</option><option value="wide">Bien abierto</option></select><div class="fu-director-help">Ajusta la ocupación lateral de las zonas objetivo.</div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-3" for="fuDirectorPressure"><span class="fu-director-field-title"><span class="fu-director-index">08</span> Intensidad de presión</span><select id="fuDirectorPressure"><option value="low">Baja · guardar posición</option><option value="medium">Media · presionar con criterio</option><option value="high">Alta · acoso al poseedor</option></select><div class="fu-director-help">Modifica la prioridad de los duelos y aproximaciones defensivas.</div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-3" for="fuDirectorTempo"><span class="fu-director-field-title"><span class="fu-director-index">09</span> Ritmo</span><select id="fuDirectorTempo"><option value="slow">Pausado · asegurar</option><option value="normal">Normal</option><option value="fast">Rápido · verticalidad</option></select><div class="fu-director-help">Afecta cuánto se premia acelerar o asegurar la jugada.</div></label>'+ 
   '<label class="fu-director-card fu-director-field fu-dt-wide-3" for="fuDirectorSpan"><span class="fu-director-field-title"><span class="fu-director-index">10</span> Duración del plan</span><select id="fuDirectorSpan" aria-label="Duración del plan"><option value="1">1 turno propio</option><option value="2">2 turnos propios</option><option value="3">3 turnos propios</option><option value="4">4 turnos propios</option></select><div class="fu-director-help">Se descuenta al terminar cada turno del Equipo 1.</div></label>'+ 
   '<div class="fu-director-actions"><button id="fuDirectorApply" class="primary" type="button" aria-pressed="false">Aplicar plan táctico</button><button id="fuDirectorStop" type="button" aria-label="Cancelar la automatización y volver al control manual">Volver al control manual</button></div>'+ 
   '<div id="fuDirectorStatus" class="fu-director-status is-paused" role="status" aria-live="polite">Modo manual activo. Configurá el plan y pulsá «Aplicar plan táctico».</div>';
  statusNode.insertAdjacentElement('afterend',panel);fuDTReadSettings();
  Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const node=fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1));if(node)node.value=fuDTConfig[k];});
  Object.keys(FU_DT_CONFIG_DEFAULT).map(k=>fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1))).filter(Boolean).forEach(node=>node.addEventListener('change',()=>{fuDTReadControls();fuDTPreview();}));
  const order=fuDTNode('fuDirectorOrder'),span=fuDTNode('fuDirectorSpan');if(order)order.value=fuDTOrder;if(span)span.value=String(fuDTSpan);
  if(order)order.addEventListener('change',()=>{if(FU_DT_ORDERS[order.value])fuDTOrder=order.value;fuDTSaveSettings();fuDTRender();if(!fuDTActive)fuDTPreview();});
  if(span)span.addEventListener('change',()=>{const n=Number(span.value);if([1,2,3,4].includes(n))fuDTSpan=n;fuDTSaveSettings();fuDTPreview();});
  fuDTNode('fuDirectorApply').addEventListener('click',()=>{if(fuDTDisabledOnline){fuDTRender();return;}if(matchClockFinished){fuDTRender();return;}fuDTReadControls();fuDTRunningOrder=fuDTOrder;fuDTRunningSpan=fuDTSpan;fuDTRunningConfig={...fuDTConfig};fuDTActive=true;fuDTBusy=false;fuDTNeedsOrder=false;fuDTRemaining=fuDTRunningSpan;fuDTRejected.clear();fuDTLastLabel='';fuDTRender('PLAN TÁCTICO ACTIVADO: '+fuDTRunningConfig.formation+' · '+FU_DT_STYLES[fuDTRunningConfig.style].label+' · '+FU_DT_ORDERS[fuDTRunningOrder].label+' durante '+fuDTRemaining+' turno(s) propio(s).');if(turn===1)fuDTSchedule(500);});
  fuDTNode('fuDirectorStop').addEventListener('click',event=>{event.preventDefault();event.stopPropagation();fuDTStop(false);fuDTRender('CONTROL MANUAL ACTIVO. Automatización cancelada; la acción en curso terminará, pero no se iniciará otra automáticamente.');});
  if(fuDTDisabledOnline){panel.classList.add('is-unavailable');panel.querySelectorAll('select,button').forEach(node=>node.disabled=true);}fuDTRender();fuDTRefreshFormationPreview();
 }
 function fuDTStop(renewal){
  fuDTActive=false;fuDTBusy=false;fuDTRemaining=0;fuDTNeedsOrder=!!renewal;
  if(fuDTTimer!==null){clearTimeout(fuDTTimer);fuDTTimer=null;}
  fuDTRejected.clear();
  fuDTRender(renewal?'Bloque completado. Control manual activo; elegí otra orden y aplicala para continuar.':'Control manual activo. La automatización está cancelada.');
 }
 function fuDTCompleteTurn(){if(!fuDTActive)return;fuDTRemaining=Math.max(0,fuDTRemaining-1);fuDTRejected.clear();}
 function fuDTAfterTransition(previousTurn){
  if(!fuDTActive)return;
  if(matchClockFinished){fuDTStop(false);fuDTRender();return;}
  if(previousTurn===1&&turn!==1){fuDTCompleteTurn();if(fuDTRemaining<=0){fuDTStop(true);return;}}
  if(halftimePaused||halftimePending||goalCelebrationActive){fuDTRender('Partido en pausa. La orden se conserva hasta que pueda reanudarse.');return;}
  if(turn===1){
   if(fuDTRemaining<=0){fuDTStop(true);return;}
   fuDTRender();fuDTSchedule(500);
  }else fuDTRender();
 }
 function fuDTKey(a){return [a.kind,a.playerId,a.to?.c,a.to?.r,a.opponentId??'',a.duelOutcome??''].join('|');}
 function fuDTForward(a,team){return a&&a.from&&a.to?(a.to.c-a.from.c)*attackDir(team):0;}
 function fuDTWing(row){return row<=2||row>=R-3;}
 function fuDTOrderBonus(a,team,orderId){
  const holder=owner(),ownBall=!!holder&&holder.t===team,defending=!!holder&&holder.t!==team;
  const f=fuDTForward(a,team),distNow=holder&&a.player?cheb(a.player,holder):99,distNext=holder&&a.to?cheb(a.to,holder):99;
  const wing=!!a.to&&fuDTWing(a.to.r),role=a.player?tacticalRole(a.player):'';
  const success=Math.max(0,Math.min(1,(Number(a.precision)||0)*(1-(Number(a.interceptRisk)||0))));
  let v=0;
  if(orderId==='possession'){
   if(a.kind==='pass'&&a.receiver){v+=10+success*24;if(nearOpponents(team,a.to,1)===0)v+=7;if(f<0)v-=4;}
   else if(a.kind==='pass'&&!a.receiver)v-=12;
   else if(a.kind==='carry'){v+=nearOpponents(team,a.to,1)<nearOpponents(team,a.from,1)?12:1;if(f>0)v+=Math.min(7,f*2);}
   else if(a.kind==='shoot')v+=(a.goalProbability||0)>=.28?18:-16;
   else if(a.kind==='move'&&ownBall&&distNext>=2&&distNext<=5)v+=7;
  }else if(orderId==='vertical'){
   if(['pass','carry','move'].includes(a.kind)&&f>0)v+=Math.min(28,5+f*3.1);
   if(a.kind==='pass'&&a.receiver&&f>0)v+=6+(tacticalRole(a.receiver)==='forward'?5:0);
   if(a.kind==='shoot'&&(a.goalProbability||0)>.14)v+=12;
   if(f<0&&a.kind!=='duel')v-=Math.min(13,4+Math.abs(f)*1.4);
  }else if(orderId==='bands'){
   if(wing)v+=a.kind==='pass'&&a.receiver?23: a.kind==='move'&&['wide','forward'].includes(role)?24:10;
   if(a.kind==='pass'&&a.receiver&&Math.abs(a.to.r-a.from.r)>=3)v+=7;
   if(!wing&&a.kind==='move'&&role==='wide')v-=6;
   if(a.kind==='shoot'&&(a.goalProbability||0)>.22)v+=12;
  }else if(orderId==='press'){
   if(defending&&a.kind==='duel')v+=a.duelOutcome==='frente'?30:a.duelOutcome==='costado'?12:-10;
   if(defending&&a.kind==='move'){v+=Math.max(-8,Math.min(22,(distNow-distNext)*8));if(distNext<=2&&[2,3,4,5,6].includes(a.player?.n))v+=7;}
   if(ownBall&&f>0)v+=Math.min(16,f*2.2);
  }else if(orderId==='block'){
   if(defending&&a.kind==='move'){
    if(a.to.r>=4&&a.to.r<=R-5)v+=7;
    const ownGoal=team===1?0:C-1;
    const between=(a.to.c-holder.c)*(ownGoal-holder.c)>0;
    if(between&&Math.abs(a.to.r-holder.r)<=3)v+=15;
    if(['defender','pivot'].includes(role))v+=4;
    if(distNext<distNow&&distNext<=4)v+=4;
   }
   if(ownBall&&a.kind==='pass'&&a.receiver&&success>.72)v+=6;
  }else if(orderId==='retreat'){
   if(defending&&a.kind==='move'){
    if(f<0)v+=Math.min(18,7+Math.abs(f)*2.2);
    const ownGoal=team===1?0:C-1;
    if((a.to.c-holder.c)*(ownGoal-holder.c)>0&&Math.abs(a.to.r-holder.r)<=3)v+=14;
    if(['defender','pivot'].includes(role))v+=5;
   }
   if(ownBall&&a.kind==='pass'&&a.receiver&&success>.78&&f<=0)v+=10;
   if(defending&&a.kind==='duel'&&a.duelOutcome!=='frente')v-=5;
  }else if(orderId==='counter'){
   if(ownBall&&['pass','carry','move'].includes(a.kind)&&f>0)v+=Math.min(34,12+f*3.2);
   if(ownBall&&a.kind==='pass'&&a.receiver&&tacticalRole(a.receiver)==='forward')v+=9;
   if(!ownBall&&a.kind==='collect')v+=24;
   if(defending&&a.kind==='move'&&distNow-distNext>0)v+=Math.min(14,(distNow-distNext)*5);
  }else if(orderId==='total'){
   if(['pass','carry','move'].includes(a.kind)&&f>0)v+=Math.min(20,f*2.5);
   if(a.kind==='shoot')v+=Math.min(38,8+(Number(a.goalProbability)||0)*75);
   if(a.kind==='move'&&['forward','wide'].includes(role)&&f>0)v+=8;
   if(defending&&a.kind==='duel'&&a.duelOutcome==='frente')v+=12;
  }else if(orderId==='safe'){
   if(ownBall&&a.kind==='pass'&&a.receiver){v+=success>=.82?27:success>=.7?10:-20;if(f<0)v+=success>.8?3:-4;}
   if(ownBall&&a.kind==='carry'&&nearOpponents(team,a.to,1)<nearOpponents(team,a.from,1))v+=12;
   if(a.kind==='move'&&a.mode==='support'&&distNow>=2&&distNow<=5)v+=8;
   if(a.kind==='shoot'&&(Number(a.goalProbability)||0)<.28)v-=15;
  }else if(orderId==='escape'){
   if(ownBall&&a.kind==='pass'&&a.receiver){if(success>=.68&&nearOpponents(team,a.to,1)<nearOpponents(team,a.from,1))v+=25;else if(success>=.78)v+=10;if(success<.58)v-=18;}
   if(ownBall&&a.kind==='carry'){const before=nearOpponents(team,a.from,1),after=nearOpponents(team,a.to,1);if(after<before)v+=23;else if(after>before)v-=14;}
   if(a.kind==='move'&&a.mode==='support'&&distNow>=2&&distNow<=5)v+=8;
  }else if(orderId==='direct'){
   if(ownBall&&a.kind==='pass'&&a.receiver&&f>=2){v+=Math.min(30,10+f*2.3)+(tacticalRole(a.receiver)==='forward'?8:0);if(success<.62)v-=18;}
   if(ownBall&&a.kind==='carry'&&f>0)v+=Math.min(20,7+f*2.1);
   if(a.kind==='shoot'&&(Number(a.goalProbability)||0)>.2)v+=12;
  }else if(orderId==='between'){
   if(ownBall&&a.kind==='pass'&&a.receiver&&f>0&&a.to.r>=3&&a.to.r<=R-4){v+=22;if(['pivot','forward'].includes(tacticalRole(a.receiver)))v+=9;if(success<.62)v-=18;}
   if(ownBall&&a.kind==='move'&&['pivot','forward'].includes(role)&&f>0&&a.to.r>=3&&a.to.r<=R-4)v+=9;
  }else if(orderId==='switch'){
   if(ownBall&&a.kind==='pass'&&a.receiver&&Math.abs(a.to.r-a.from.r)>=3){v+=Math.min(30,15+Math.abs(a.to.r-a.from.r));if(success<.65)v-=18;}
   if(ownBall&&a.kind==='move'&&wing&&a.structureAdjustment>=0)v+=8;
  }else if(orderId==='prepare'){
   if(ownBall&&a.kind==='pass'&&a.receiver&&['forward','wide'].includes(tacticalRole(a.receiver))&&f>=0){v+=16;if(success<.62)v-=16;}
   if(ownBall&&a.kind==='move'&&['forward','wide'].includes(role)&&f>0&&distNow>=2&&distNow<=5)v+=12;
   if(a.kind==='shoot'&&(Number(a.goalProbability)||0)<.38)v-=12;
  }else if(orderId==='finish'){
   if(a.kind==='shoot'){const gp=Number(a.goalProbability)||0;v+=gp>=.5?34:gp>=.34?17:-20;}
   if(a.kind==='pass'&&a.receiver&&tacticalRole(a.receiver)==='forward'&&f>=0&&success>.75)v+=7;
  }else if(orderId==='recover'){
   if(!holder&&a.kind==='collect')v+=45;
   if(!holder&&a.kind==='move'){const before=cheb(a.player,ball),after=cheb(a.to,ball);if(after<before)v+=Math.min(26,(before-after)*8);}
   if(!holder&&['pass','shoot','carry'].includes(a.kind))v-=35;
  }else if(orderId==='pressWin'){
   if(defending&&a.kind==='duel')v+=a.duelOutcome==='frente'?36:a.duelOutcome==='costado'?12:-20;
   if(defending&&a.kind==='move'){const before=cheb(a.player,holder),after=cheb(a.to,holder);const close=p.filter(z=>z.t===team&&z.id!==a.playerId&&cheb(z,holder)<=2).length;if(before>after&&after<=1&&close<2)v+=12;if(close>=2&&after<=2)v-=14;}
  }else if(orderId==='deny'){
   if(defending&&a.kind==='move'){if(a.to.r>=3&&a.to.r<=R-4)v+=8;if(goalLaneBlockValue(team,a.to,holder)>0)v+=18;if(Math.abs(a.to.r-5)<Math.abs(a.player.r-5))v+=4;const ownGoal=team===1?0:C-1;if((a.to.c-holder.c)*(ownGoal-holder.c)>0&&Math.abs(a.to.r-holder.r)<=3)v+=8;}
   if(defending&&a.kind==='duel'&&a.duelOutcome==='frente')v+=12;
  }
  return Math.max(-35,Math.min(48,v));
 }
 function fuDTClamp(n,lo,hi){return Math.max(lo,Math.min(hi,Number.isFinite(n)?n:0));}
 function fuDTDepth(cell,team){return team===1?cell.c:C-1-cell.c;}
 function fuDTFormationTarget(player,cfg){
  if(!player||player.n===1)return null;const form=FU_DT_FORMATIONS[cfg.formation]||FU_DT_FORMATIONS['4-3-3'];const slot=fuDTGetFormationSlots(cfg.formation).find(x=>x.number===player.n);if(!slot)return null;
  const holder=owner(),ballDepth=fuDTDepth(ball,1),midDepth=(C-1)/2,fieldShift=fuDTClamp((ballDepth-midDepth)/Math.max(1,midDepth),-1,1);
  let depth=form.lines.length===1?5:2+slot.lineIndex*(6/(form.lines.length-1));depth+=fieldShift*(slot.lineIndex===0?.42:slot.lineIndex===form.lines.length-1?.82:.62);if(holder&&holder.t===1)depth+=slot.lineIndex===0?.12:slot.lineIndex===form.lines.length-1?.5:.28;
  if(slot.lineIndex===0)depth+=FU_DT_DEF_LINE[cfg.defenseLine]||0;else if(slot.lineIndex===form.lines.length-1)depth+=FU_DT_ATTACK_LINE[cfg.attackLine]||0;else depth+=FU_DT_MID_LINE[cfg.midfieldLine]||0;if(form.lines.length>=4&&slot.lineIndex===form.lines.length-2)depth+=(FU_DT_ATTACK_LINE[cfg.attackLine]||0)*.42;
  const widthFactor=cfg.width==='narrow'?.64:cfg.width==='wide'?1.3:1,spacing=(R-2)/(slot.lineCount+1);let row=(R-1)/2+(slot.slotIndex-(slot.lineCount-1)/2)*spacing*widthFactor;row+=fuDTClamp((ball.r-(R-1)/2)*.12,-1.1,1.1);return {depth:fuDTClamp(depth,1,C-2),row:fuDTClamp(row,1,R-2),lineIndex:slot.lineIndex,lineCount:slot.lineCount};
 }
 function fuDTFormationBonus(a,team,cfg){
  if(!a||!['move','carry'].includes(a.kind)||!a.player||!a.to)return 0;const target=fuDTFormationTarget(a.player,cfg);if(!target)return 0;const from=a.from||{c:a.player.c,r:a.player.r},to=a.to;const before=Math.abs(fuDTDepth(from,team)-target.depth)+Math.abs(from.r-target.row)*.62,after=Math.abs(fuDTDepth(to,team)-target.depth)+Math.abs(to.r-target.row)*.62;let value=fuDTClamp((before-after)*7.2,-13,13);if(before<1.05&&after>before)value-=2.3;return fuDTClamp(value,-15,15);
 }
 function fuDTStyleBonus(a,team,cfg){
  if(!a)return 0;const holder=owner(),ownBall=!!holder&&holder.t===team,defending=!!holder&&holder.t!==team,forward=a.from&&a.to?(a.to.c-a.from.c)*attackDir(team):0,receiver=a.receiver||null,receiverRole=receiver?tacticalRole(receiver):'',success=Math.max(0,Math.min(1,(Number(a.precision)||0)*(1-(Number(a.interceptRisk)||0)))),dist=a.from&&a.to?cheb(a.from,a.to):99,wide=!!a.to&&(a.to.r<=2||a.to.r>=R-3);let v=0;
  switch(cfg.style){
   case 'tiki':if(ownBall&&a.kind==='pass'&&receiver){v+=success>=.76?13:-7;if(dist<=3)v+=10;if(dist>5)v-=8;}if(ownBall&&a.kind==='move'&&a.mode==='support')v+=8;if(ownBall&&a.kind==='shoot'&&(Number(a.goalProbability)||0)<.38)v-=12;break;
   case 'counter':if(ownBall&&['pass','carry','move'].includes(a.kind)&&forward>0)v+=Math.min(25,8+forward*2.3);if(ownBall&&a.kind==='pass'&&receiver&&receiverRole==='forward')v+=10;if(!ownBall&&a.kind==='collect')v+=12;break;
   case 'wings':if(ownBall&&a.kind==='pass'&&receiver&&wide)v+=16;if(ownBall&&a.kind==='pass'&&receiver&&Math.abs(a.to.r-a.from.r)>=3)v+=8;if(ownBall&&a.kind==='move'&&wide)v+=7;break;
   case 'direct':if(ownBall&&a.kind==='pass'&&receiver&&forward>0){v+=dist>=3?Math.min(25,10+forward*2.5):3;if(receiverRole==='forward')v+=8;if(success<.62)v-=14;}if(ownBall&&a.kind==='carry'&&forward>0)v+=Math.min(15,5+forward*1.7);break;
   case 'possession':if(ownBall&&a.kind==='pass'&&receiver)v+=success>=.8?16:success>=.68?5:-14;if(ownBall&&a.kind==='move'&&a.mode==='support')v+=9;if(ownBall&&a.kind==='shoot'&&(Number(a.goalProbability)||0)<.42)v-=13;break;
   case 'highpress':if(defending&&a.kind==='duel')v+=a.duelOutcome==='frente'?27:a.duelOutcome==='costado'?10:-13;if(defending&&a.kind==='move'){const before=cheb(a.player,holder),after=cheb(a.to,holder);if(after<before)v+=Math.min(18,(before-after)*6);}break;
   case 'lowblock':if(defending&&a.kind==='move'){const ownGoal=team===1?0:C-1,between=(a.to.c-holder.c)*(ownGoal-holder.c)>0;if(between&&Math.abs(a.to.r-holder.r)<=4)v+=13;if(forward<0)v+=4;}if(ownBall&&['pass','carry'].includes(a.kind)&&forward>0)v+=Math.min(16,forward*2.2);break;
   default:break;
  }
  if(defending&&cfg.pressure==='high'){if(a.kind==='duel')v+=a.duelOutcome==='frente'?14:a.duelOutcome==='costado'?4:-5;if(a.kind==='move'){const before=cheb(a.player,holder),after=cheb(a.to,holder);if(after<before&&after<=3)v+=Math.min(11,(before-after)*4.2);}}
  else if(defending&&cfg.pressure==='low'){if(a.kind==='move'&&cheb(a.to,holder)<=1)v-=4;if(a.kind==='move'&&a.player&&['defender','pivot'].includes(tacticalRole(a.player))&&fuDTFormationBonus(a,team,cfg)>0)v+=2;}
  if(ownBall&&cfg.tempo==='fast'&&['pass','carry','move'].includes(a.kind)&&forward>0)v+=Math.min(9,3+forward*1.15);if(ownBall&&cfg.tempo==='slow'){if(a.kind==='pass'&&receiver)v+=success>=.78?7:success<.6?-7:0;if(a.kind==='shoot'&&(Number(a.goalProbability)||0)<.4)v-=4;}return fuDTClamp(v,-28,38);
 }
 function fuDTChoose(){
  const orderId=fuDTRunningOrder||fuDTOrder;const order=FU_DT_ORDERS[orderId]||FU_DT_ORDERS.vertical;
  const oldId=forcedSearchPlanId,oldTeam=forcedSearchPlanTeam;
  let candidates=[];
  try{
   forcedSearchPlanId=order.plan;forcedSearchPlanTeam=1;
   candidates=tacticalCandidates().filter(a=>a&&Number.isFinite(a.score)&&!fuDTRejected.has(fuDTKey(a)));
  }finally{forcedSearchPlanId=oldId;forcedSearchPlanTeam=oldTeam;}
  // v98.70: Mantener posición es una alternativa táctica real de la CPU del Director Técnico.
  // No se ofrece cuando una reanudación obliga a pasar/rematar como primera acción.
  const mandatoryFirstAction=actionNo===1&&(kickoffPassRequired||(freeKickRequiredId!==null&&freeKickAwardedTeam===turn)||(restartPassOnlyId!==null));
  const cfg=fuDTRunningConfig||fuDTConfig;
  if(!mandatoryFirstAction&&typeof fuV9815CanPlayerAct==='function'){
   for(const actor of p.filter(z=>z.t===1&&fuV9815CanPlayerAct(z.id))){
    if(candidates.some(a=>a&&a.kind==='hold'&&a.playerId===actor.id))continue;
    const target=fuDTFormationTarget(actor,cfg);let holdScore=-3;
    if(target){const deviation=Math.abs(fuDTDepth(actor,1)-target.depth)+Math.abs(actor.r-target.row)*.62;holdScore+=deviation<1.2?9:deviation<2.5?3:-2;}
    const currentHolder=owner();
    if(currentHolder&&currentHolder.t===1&&currentHolder.id===actor.id)holdScore-=9;
    if(currentHolder&&currentHolder.t!==1&&(orderId==='press'||orderId==='pressWin')){const d=cheb(actor,currentHolder);if(d<=3)holdScore-=Math.max(2,7-d);}
    if(!currentHolder&&ball.owner===null&&orderId==='recover'){const d=cheb(actor,ball);if(d>1)holdScore-=Math.min(6,d);}
    candidates.push({kind:'hold',playerId:actor.id,player:actor,from:{c:actor.c,r:actor.r},to:{c:actor.c,r:actor.r},label:'Mantener posición · Jugador '+actor.n,score:holdScore});
   }
  }
  for(const a of candidates){const orderScore=fuDTOrderBonus(a,1,orderId),formationScore=fuDTFormationBonus(a,1,cfg),styleScore=fuDTStyleBonus(a,1,cfg);a.score+=orderScore+formationScore+styleScore;a.directorAdjustment=orderScore+formationScore+styleScore;a.directorBreakdown={order:orderScore,formation:formationScore,style:styleScore};}
  candidates.sort((a,b)=>b.score-a.score);
  if(!candidates.length)return null;
  const best=candidates[0].score;
  const near=candidates.slice(0,3).filter(a=>a.score>=best-2.5);
  return near.length>1?near[Math.floor(Math.random()*near.length)]:candidates[0];
 }
 function fuDTStateSignature(){return JSON.stringify({turn,actionNo,score,ball,p:p.map(x=>[x.id,x.c,x.r,x.t])});}
 function fuDTDispatch(a){
  if(!a||turn!==1||anim||matchClockFinished||halftimePaused)return false;
  const actor=p.find(x=>x.id===a.playerId);if(!actor||actor.t!==1)return false;
  const before=fuDTStateSignature();
  slowCpuVisuals=true;selected=actor.id;mode=['pass','shoot'].includes(a.kind)?'ball':'player';
  if(bp)bp.classList.toggle('primary',mode==='player');if(bb)bb.classList.toggle('primary',mode==='ball');
  drawPlayers();refresh();
  fuDTLastLabel=a.label||candidateLabel(a)||('Acción '+a.kind+' del jugador '+actor.n);
  fuDTRender();
  if(a.kind==='hold'){
   beginManualAction('hold',actor,{reason:'Mantener posición',directorAutomatic:true,position:{c:actor.c,r:actor.r}});
   finish('Director Técnico: Jugador '+actor.n+' mantiene su posición.');
   return true;
  }
  if(a.kind==='duel'){
   const rival=p.find(x=>x.id===a.opponentId);if(!rival){slowCpuVisuals=false;return false;}duel(actor,rival);
  }else if(a.kind==='pass'||a.kind==='shoot')moveBall(a.to.c,a.to.r);
  else movePlayer(a.to.c,a.to.r);
  const accepted=!!anim||before!==fuDTStateSignature();
  if(!accepted)slowCpuVisuals=false;
  return accepted;
 }
 function fuDTRun(){
  if(!fuDTActive||fuDTBusy||turn!==1||matchClockFinished||halftimePaused||halftimePending||goalCelebrationActive||anim||brainTrainingRunning||sequenceSearchRunning||cpuSearching)return;
  if(fuDTRemaining<=0){fuDTStop(true);return;}
  fuDTBusy=true;
  let chosen=null;try{chosen=fuDTChoose();}catch(error){fuDTRender('No se pudo evaluar la orden táctica: '+String(error?.message||error));}
  fuDTBusy=false;
  if(!fuDTActive||turn!==1||anim)return;
  if(!chosen){fuDTStop(true);fuDTRender('El motor no encontró una acción legal para continuar. El control manual queda habilitado; ajustá las órdenes o revisá la posición.');return;}
  const key=fuDTKey(chosen),ok=fuDTDispatch(chosen);
  if(ok){fuDTRejected.clear();fuDTRender();return;}
  fuDTRejected.add(key);
  if(fuDTRejected.size>12){fuDTStop(false);fuDTRender('La orden se pausó por seguridad: varias candidatas no superaron las reglas reales. El Equipo 1 vuelve al control manual.');return;}
  fuDTSchedule(180);
 }
 function fuDTSchedule(delay){
  if(!fuDTActive||turn!==1||matchClockFinished||halftimePaused||halftimePending||goalCelebrationActive||anim||fuDTTimer!==null)return;
  fuDTTimer=setTimeout(()=>{fuDTTimer=null;fuDTRun();},Math.max(0,delay||0));
 }
 // Mientras el Director está activo, bloquea únicamente los clics que permitirían mover el Equipo 1.
 document.addEventListener('click',function(event){
  if(!fuDTActive||turn!==1||matchClockFinished||halftimePaused||goalCelebrationActive)return;
  const target=event.target&&event.target.closest?event.target.closest('.board,#bp,#bb,#ballModeControl,.action-dock'):null;
  if(event.target.closest('#pitchFullscreenControl'))return;
  if(!target||event.target.closest('#fuDirectorPanel'))return;
  event.preventDefault();event.stopImmediatePropagation();
 },true);
 const fuDTOriginalFinish=finish;
 finish=function(){const previousTurn=turn;const result=fuDTOriginalFinish.apply(this,arguments);fuDTAfterTransition(previousTurn);return result;};
 if(typeof prepareFreeKick==='function'){
  const fuDTOriginalPrepareFreeKick=prepareFreeKick;
  prepareFreeKick=function(){const previousTurn=turn;const result=fuDTOriginalPrepareFreeKick.apply(this,arguments);fuDTAfterTransition(previousTurn);return result;};
 }
 if(typeof prepareRestart==='function'){
  const fuDTOriginalPrepareRestart=prepareRestart;
  prepareRestart=async function(){const previousTurn=turn;const result=await fuDTOriginalPrepareRestart.apply(this,arguments);fuDTAfterTransition(previousTurn);return result;};
 }
 const fuDTOriginalContinueAfterGoal=continueAfterGoal;
 continueAfterGoal=function(){const previousTurn=turn;const result=fuDTOriginalContinueAfterGoal.apply(this,arguments);fuDTAfterTransition(previousTurn);return result;};
 const fuDTOriginalStartNewMatch=startNewManualMatch;
 startNewManualMatch=function(){fuDTStop(false);return fuDTOriginalStartNewMatch.apply(this,arguments);};
 fuDTMount();
 window.FUTBOL_UNICO_DIRECTOR={version:'98.70',start:function(order,span,config){if(FU_DT_ORDERS[order])fuDTOrder=order;if([1,2,3,4].includes(Number(span)))fuDTSpan=Number(span);if(config&&typeof config==='object')Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{if(config[k]!==undefined)fuDTConfig[k]=config[k];});Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const node=fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1));if(node)node.value=fuDTConfig[k];});const o=fuDTNode('fuDirectorOrder'),s=fuDTNode('fuDirectorSpan');if(o)o.value=fuDTOrder;if(s)s.value=String(fuDTSpan);fuDTNode('fuDirectorApply')?.click();},configure:function(config){if(config&&typeof config==='object')Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{if(config[k]!==undefined)fuDTConfig[k]=config[k];});fuDTSaveSettings();Object.keys(FU_DT_CONFIG_DEFAULT).forEach(k=>{const node=fuDTNode('fuDirector'+k[0].toUpperCase()+k.slice(1));if(node)node.value=fuDTConfig[k];});fuDTRender();fuDTPreview();},pause:function(){fuDTStop(false);},getState:function(){return {active:fuDTActive,order:fuDTOrder,activeOrder:fuDTRunningOrder,selectedSpan:fuDTSpan,activeSpan:fuDTRunningSpan,turnsRemaining:fuDTRemaining,config:{...fuDTConfig},activeConfig:{...fuDTRunningConfig},turn,actionNo};},getFormations:function(){return JSON.parse(JSON.stringify(FU_DT_FORMATIONS));},getStyles:function(){return JSON.parse(JSON.stringify(FU_DT_STYLES));}};
})();
/* ================== FIN MODO DIRECTOR TÉCNICO v98.70 ================== */
`;

const V98_DISCIPLINE_PATCH = "// ==================== DISCIPLINA v98.27 ====================\n// Tarjetas en faltas reales sancionadas; el arquero está exento.\nconst fuDisciplineCards=new Map();\nconst fuExpelledPlayers=new Set();\nconst fuDismissalKey=(team,number)=>String(team)+':'+String(number);\nlet fuPendingDismissal=null;\nfunction fuDrawDisciplinaryMarkers(){\n if(!playersG||!p)return;\n p.forEach(player=>{\n  if(player.n===1||(fuDisciplineCards.get(player.id)||0)<1)return;\n  const node=playersG.querySelector('[data-id=\"'+player.id+'\"]');\n  if(!node||node.querySelector('.discipline-yellow-card'))return;\n  const marker=document.createElementNS(NS,'g');\n  marker.setAttribute('class','discipline-yellow-card');\n  marker.setAttribute('transform','translate(-23 -23)');\n  marker.setAttribute('pointer-events','none');\n  const card=document.createElementNS(NS,'rect');\n  card.setAttribute('x','0');card.setAttribute('y','0');card.setAttribute('width','13');card.setAttribute('height','18');card.setAttribute('rx','1.5');\n  card.setAttribute('fill','#ffdf32');card.setAttribute('stroke','#111820');card.setAttribute('stroke-width','2');\n  marker.appendChild(card);node.appendChild(marker);\n });\n}\nfunction fuRecordDisciplinaryCard(offender){\n if(!offender||offender.n===1)return 0;\n const next=(fuDisciplineCards.get(offender.id)||0)+1;\n fuDisciplineCards.set(offender.id,next);\n if(next>=2)fuPendingDismissal={id:offender.id,team:offender.t,number:offender.n};\n drawPlayers();fuDrawDisciplinaryMarkers();\n if(next===1)say('Tarjeta amarilla para el Jugador '+offender.n+' del Equipo '+offender.t+'. Una más implica expulsión.');\n return next;\n}\nfunction fuApplyPendingDismissal(){\n if(!fuPendingDismissal)return;\n const dismissed=fuPendingDismissal;fuPendingDismissal=null;\n fuExpelledPlayers.add(fuDismissalKey(dismissed.team,dismissed.number));\n const index=p.findIndex(x=>x.id===dismissed.id);\n if(index>=0)p.splice(index,1);\n if(selected===dismissed.id){selected=null;mode='player';}\n if(ball.owner===dismissed.id)ball={c:ball.c,r:ball.r,owner:null};\n playedThisTurn=playedThisTurn.filter(id=>id!==dismissed.id);\n drawPlayers();drawBall();setTurn();refresh();\n say('¡EXPULSADO! Jugador '+dismissed.number+' del Equipo '+dismissed.team+' recibe su segunda amarilla. Su equipo continúa con un jugador menos.');\n}\nconst fuDrawPlayersBeforeDiscipline=drawPlayers;\ndrawPlayers=function(){\n fuDrawPlayersBeforeDiscipline();\n fuDrawDisciplinaryMarkers();\n};\n// Una expulsión es permanente durante el partido: resetToKickoff reconstruye la formación,\n// así que se filtran de nuevo los jugadores expulsados tras goles y entretiempo.\nfunction fuEnforceExpelledPlayers(kickTeam){\n if(!fuExpelledPlayers.size)return;\n const oldBall={c:ball.c,r:ball.r,owner:ball.owner};\n p=p.filter(x=>!fuExpelledPlayers.has(fuDismissalKey(x.t,x.n)));\n if(oldBall.owner!==null&&!p.some(x=>x.id===oldBall.owner)){\n  const fallback=p.filter(x=>x.t===kickTeam&&x.n!==1).sort((a,b)=>(Math.abs(a.c-oldBall.c)+Math.abs(a.r-oldBall.r))-(Math.abs(b.c-oldBall.c)+Math.abs(b.r-oldBall.r)))[0];\n  if(fallback){ball={c:fallback.c,r:fallback.r,owner:fallback.id};turn=kickTeam;selected=fallback.id;mode='player';if(typeof kickoffPassRequired!=='undefined')kickoffPassRequired=true;}\n  else ball={c:oldBall.c,r:oldBall.r,owner:null};\n }\n if(selected!==null&&!p.some(x=>x.id===selected)){selected=null;mode='player';}\n drawPlayers();drawBall();setTurn();refresh();\n}\nconst fuResetToKickoffBeforeExpelled=resetToKickoff;\nresetToKickoff=function(kickTeam,preserveScore=true,scheduleCpu=true){\n if(!preserveScore){fuExpelledPlayers.clear();fuDisciplineCards.clear();fuPendingDismissal=null;}\n fuResetToKickoffBeforeExpelled.apply(this,arguments);\n fuEnforceExpelledPlayers(kickTeam);\n};\nconst fuStartNewManualMatchBeforeDiscipline=startNewManualMatch;\nstartNewManualMatch=function(){fuExpelledPlayers.clear();fuDisciplineCards.clear();fuPendingDismissal=null;return fuStartNewManualMatchBeforeDiscipline.apply(this,arguments);};\n\n// Aviso secuencial de tarjeta roja: se muestra después del cartel de falta.\nlet fuDismissalNoticeTimer=null;\nfunction fuShowDismissalNotice(dismissed){\n const notice=$('foulNotice');\n if(!notice)return;\n if(fuDismissalNoticeTimer!==null){clearTimeout(fuDismissalNoticeTimer);fuDismissalNoticeTimer=null;}\n if(foulNoticeTimer!==null){clearTimeout(foulNoticeTimer);foulNoticeTimer=null;}\n const kicker=$('foulNoticeKicker'),title=$('foulNoticeTitle'),detail=$('foulNoticeDetail'),badge=$('foulNoticeChance'),icon=notice.querySelector('.foul-notice-whistle');\n notice.style.borderColor='#ff7373';\n notice.style.background='linear-gradient(145deg,#651d25f5,#20090df5)';\n notice.style.boxShadow='0 14px 38px #000b,inset 0 1px 0 #ffffff22';\n if(icon){icon.innerHTML='<svg viewBox=\"0 0 24 32\" width=\"24\" height=\"32\" role=\"img\" aria-label=\"Tarjeta roja\"><rect x=\"2.5\" y=\"1.5\" width=\"19\" height=\"29\" rx=\"2\" fill=\"#e32636\" stroke=\"#ffffff\" stroke-width=\"1.5\"/><path d=\"M6 7h12\" stroke=\"#ffb5bb\" stroke-width=\"1.2\"/></svg>'; }\n if(kicker){kicker.textContent='SEGUNDA TARJETA AMARILLA';kicker.style.color='#ffb4b4';}\n if(title){title.textContent='¡TARJETA ROJA!';title.style.color='#fff0f0';}\n if(detail){detail.textContent='Jugador '+dismissed.number+' del Equipo '+dismissed.team+' queda expulsado. Su equipo continúa con un jugador menos.';detail.style.color='#ffd1d1';}\n if(badge){badge.textContent='EXPULSIÓN';badge.style.borderColor='#ffaaaa66';badge.style.background='#26080c';badge.style.color='#ffdada';}\n notice.hidden=false;notice.classList.remove('hide','show');void notice.offsetWidth;notice.classList.add('show');\n fuDismissalNoticeTimer=setTimeout(()=>{\n  notice.classList.remove('show');notice.classList.add('hide');\n  fuDismissalNoticeTimer=setTimeout(()=>{\n   notice.hidden=true;notice.classList.remove('hide');\n   notice.style.borderColor='';notice.style.background='';notice.style.boxShadow='';\n   if(icon)icon.textContent='🚩';\n   if(kicker){kicker.style.color='';}\n   if(title){title.style.color='';}\n   if(detail){detail.style.color='';}\n   if(badge){badge.style.borderColor='';badge.style.background='';badge.style.color='';}\n   fuDismissalNoticeTimer=null;\n  },280);\n },3600);\n}\nconst fuShowFoulNoticeBeforeDismissal=showFoulNotice;\nshowFoulNotice=function(offender,victim,approachType,chance,awardedTeam){\n fuShowFoulNoticeBeforeDismissal(offender,victim,approachType,chance,awardedTeam);\n if(offender&&(fuDisciplineCards.get(offender.id)||0)>=2){\n  const dismissed={number:offender.n,team:offender.t};\n  setTimeout(()=>fuShowDismissalNotice(dismissed),3000);\n }\n};\n\n// ================== FIN DISCIPLINA v98.27 ==================";
const V96_ENGINE_PATCH = "\n // ==================== FUTBOL UNICO v96 ====================\n // Capa reversible: mejora evaluación, planificación y presentación, e incorpora\n // precisión progresiva por distancia, ángulo y calidad individual sin tocar v95.\n const FU_V96_VERSION='96.4.0';\n const FU_V96_PROFILE_KEY='futbolUnico_v96_tactical_identity';\n const FU_V96_HISTORY_KEY='futbolUnico_v96_opponent_history';\n const FU_V96_METRICS_KEY='futbolUnico_v96_metrics';\n\n const fuV95CaptureSequenceState=captureSequenceState;\n const fuV95RestoreSequenceState=restoreSequenceState;\n const fuV95TacticalCandidates=tacticalCandidates;\n const fuV95EvaluateSequencePosition=evaluateSequencePosition;\n const fuV95UpdateAutomaticCpuProfile=updateAutomaticCpuProfile;\n const fuV95BeginManualAction=beginManualAction;\n const fuV95AdvanceSimulatedAction=advanceSimulatedAction;\n const fuV95Finish=finish;\n const fuV95Refresh=refresh;\n const fuV95ConfigureTacticalScenario=typeof configureTacticalScenario==='function'?configureTacticalScenario:null;\n\n const FU_V96_IDENTITIES={\n  defensive:{label:'Defensivo',short:'Cierra carriles y sostiene la ultima linea.',base:'defensive'},\n  balanced:{label:'Equilibrado',short:'Combina estructura, progresion y oportunidad.',base:'balanced'},\n  aggressive:{label:'Agresivo',short:'Presiona y acelera cuando la cobertura lo permite.',base:'aggressive'},\n  cautious:{label:'Cauteloso',short:'Prioriza posesion segura y riesgo bajo.',base:'cautious'},\n  counter:{label:'Contraatacador',short:'Bloque protegido y salida vertical tras recuperar.',base:'defensive'},\n  adaptive:{label:'Adaptativo',short:'Lee marcador, tiempo y patrones recientes del rival.',base:'balanced'}\n };\n let fuV96Identity='adaptive',fuV96ShowThreats=false,fuV96TransitionActions=0,fuV96LastAudit=null;\n let fuV96TournamentIdentity=null,fuV96TournamentOpponentId='',fuV96TournamentOpponentName='';\n let fuV96LastOwnerTeam=owner()?.t||null;\n try{\n  const query=new URLSearchParams(parent.location.search||location.search||'');\n  if(query.get('mode')==='torneo'){\n   fuV96TournamentOpponentId=(query.get('opponent')||'').replace(/[^a-z0-9-]/gi,'').slice(0,80);\n   fuV96TournamentOpponentName=query.get('cpuName')||fuV96TournamentOpponentId||'rival';\n   const assigned=query.get('cpuProfile');\n   if(assigned&&FU_V96_IDENTITIES[assigned]){fuV96TournamentIdentity=assigned;fuV96Identity=assigned;}\n  }\n }catch(_e){}\n if(!fuV96TournamentIdentity){try{const saved=localStorage.getItem(FU_V96_PROFILE_KEY);if(saved&&FU_V96_IDENTITIES[saved])fuV96Identity=saved;}catch(_e){}}\n const fuV96HistoryStoreKey=fuV96TournamentOpponentId?FU_V96_HISTORY_KEY+'_'+fuV96TournamentOpponentId:FU_V96_HISTORY_KEY;\n\n function fuV96LoadJson(key,fallback){try{const value=JSON.parse(localStorage.getItem(key)||'null');return value||fallback;}catch(_e){return fallback;}}\n function fuV96SaveJson(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(_e){return false;}}\n let fuV96ActionHistory=fuV96LoadJson(fuV96HistoryStoreKey,[]);\n if(!Array.isArray(fuV96ActionHistory))fuV96ActionHistory=[];\n fuV96ActionHistory=fuV96ActionHistory.filter(x=>x&&Number.isInteger(x.team)&&x.kind).slice(-80);\n let fuV96Metrics=fuV96LoadJson(FU_V96_METRICS_KEY,{actions:0,passes:0,shots:0,duels:0,moves:0,repeated:0,byProfile:{}});\n\n\n // ==================== PRECISION PROGRESIVA v96 ====================\n // Curvas de referencia (% de acertar la casilla elegida antes de intercepciones).\n // v98.62: pase y remate a 1, 2 o 3 casilleros tienen 100% de precisión base.\n // Desde la cuarta casilla, los atributos modifican la curva en el juego real y en la IA.\n const FU_V96_SHOT_CURVE=[0,90,85,78,68,57,46,35,25,8,3,1];\n const FU_V96_PASS_CURVE=[0,90,85,82,72,60,48,36,25,12,6,3];\n const fuV96PlayerGrade=(kind,n)=>kind==='pass'\n  ? (n===10?'excellent':[5,7,8].includes(n)?'good':'regular')\n  : ([9,11].includes(n)?'excellent':[7,8,10].includes(n)?'good':[3,4,5].includes(n)?'regular':'bad');\n // Desde la cuarta casilla, la curva es el techo de un excelente y los demás perfiles bajan desde ese techo.\n const fuV96GradeMultiplier={excellent:1.00,good:.95,regular:.90,bad:.70};\n function fuV96ShotAngleFactor(from){\n  const lateral=Math.abs((Number(from?.r)||0)-5);\n  if(lateral<=1)return 1;\n  if(lateral<=3)return .90;\n  return .78;\n }\n function fuV96AccuracyPercent(kind,player,from,to){\n  const distance=cheb(from,to);\n  if(distance<1)return 0;\n  if(distance<=3)return 100; // Las tres primeras casillas son precisas para pase y remate.\n  const curve=kind==='shoot'?FU_V96_SHOT_CURVE:FU_V96_PASS_CURVE;\n  const base=curve[Math.min(distance-2,curve.length-1)]??curve[curve.length-1];\n  const angled=kind==='shoot'?base*fuV96ShotAngleFactor(from):base;\n  const grade=fuV96PlayerGrade(kind,player?.n);\n  return Math.max(2,Math.min(90,angled*(fuV96GradeMultiplier[grade]??.90)));\n }\n function fuV96MaxShotDeviation(distance,grade){\n  let max=distance<=4?1:distance<=7?2:distance<=9?3:distance<=11?4:5;\n  if(grade==='excellent'&&max>1)max--;\n  else if(grade==='regular'&&max>=2)max=Math.min(5,max+1);\n  else if(grade==='bad')max=Math.min(5,max+2);\n  return max;\n }\n function fuV96MaxPassSlip(distance,grade){\n  let max=distance<=3?1:distance<=5?2:distance<=7?3:4;\n  if(grade==='excellent'&&max>1)max--;\n  else if(grade==='regular'&&max>=2)max=Math.min(4,max+1);\n  return max;\n }\n// La probabilidad de que un pase fallido quede largo depende de su distancia.\n // Un sobrepaso de un casillero en un pase de un solo casillero duplica su recorrido,\n // por eso los errores cortos no se distribuyen 50/50 entre corto y largo.\n function fuV987PassLongChance(distance){\n  if(distance<=3)return 0;\n  if(distance===4)return .15;\n  if(distance===5)return .25;\n  if(distance===6)return .35;\n  if(distance===7)return .45;\n  return .5;\n }\n function fuV96MagnitudeWeights(max,distance=1,kind='pass'){\n  const exponent=kind==='shoot'?(distance<=3?-.65:distance<=5?-.1:distance<=7?.45:distance<=9?1.05:1.35):-1.15;\n  const raw=[];let total=0;\n  for(let magnitude=1;magnitude<=max;magnitude++){const weight=Math.pow(magnitude,exponent);raw.push({magnitude,weight});total+=weight;}\n  return raw.map(item=>({...item,weight:item.weight/total}));\n }\n function fuV96ChooseMagnitude(max,distance=1,kind='pass'){\n  const outcomes=fuV96MagnitudeWeights(max,distance,kind),roll=tacticalRandom();let cumulative=0;\n  for(const outcome of outcomes){cumulative+=outcome.weight;if(roll<cumulative)return outcome.magnitude;}\n  return max;\n }\n function fuV96KeeperSaveChance(shooter,from,to,playersState=p){\n  const keeper=playersState.find(z=>z.t!==shooter.t&&z.n===1);if(!keeper)return 0;\n  const distance=cheb(from,to);\n  const base=distance<=2?.20:distance<=4?.32:distance<=6?.55:distance<=7?.80:.94;\n  const lateralGap=Math.abs(keeper.r-to.r);\n  const lateralFactor=lateralGap===0?1:lateralGap===1?.93:lateralGap===2?.72:lateralGap===3?.50:.30;\n  const goalColumn=shooter.t===1?C-1:0,depthGap=Math.abs(goalColumn-keeper.c);\n  const depthFactor=depthGap<=1?1:depthGap===2?.82:.62;\n  return Math.max(0,Math.min(.88,base*lateralFactor*depthFactor));\n }\n function fuV96ShotMissOutcomes(shooter,from,to,missWeight){\n  const distance=cheb(from,to),grade=fuV96PlayerGrade('shoot',shooter?.n);\n  const max=fuV96MaxShotDeviation(distance,grade),weights=fuV96MagnitudeWeights(max,distance,'shoot'),outcomes=[];\n  for(const item of weights){\n   for(const sign of [-1,1]){\n    outcomes.push({c:to.c,r:Math.max(0,Math.min(R-1,to.r+sign*item.magnitude)),weight:missWeight*item.weight/2});\n   }\n  }\n  return outcomes;\n }\n\n // Reemplazos del motor base: estos mismos números los utilizan la ejecución,\n // la estimación del gol, la búsqueda táctica y la CPU.\n estimatedShotAccuracy=function(shooter,from,to){\n  return fuV96AccuracyPercent('shoot',shooter,from,to)/100;\n };\n estimatedPassPrecision=function(passer,from,to){\n  return fuV96AccuracyPercent('pass',passer,from,to)/100;\n };\n precisionChance=function(player,target){\n  return estimatedPassPrecision(player,{c:ball.c,r:ball.r},target);\n };\n shotAccuracyOutcomes=function(shooter,from,to){\n  const accuracy=estimatedShotAccuracy(shooter,from,to);\n  return [{c:to.c,r:to.r,weight:accuracy},...fuV96ShotMissOutcomes(shooter,from,to,1-accuracy)];\n };\n isGoalEndpointForShot=function(shooter,from,cell,playersState=p){\n  if(cell.c<0||cell.c>=C||cell.r<0||cell.r>=R)return false;\n  if(!goalSideForCell(cell.c,cell.r,shooter.t))return false;\n  return !goalkeeperBlocksShot(shooter,from,cell,playersState);\n };\n estimateShotProbability=function(shooter,from,to,playersState=p){\n  const distance=cheb(from,to),accuracy=estimatedShotAccuracy(shooter,from,to);\n  if(distance>BALL_REACH(shooter.n))return {probability:0,accuracy:0,goalChance:0,interceptionRisk:0,blocked:true,rangeBlocked:true,goalkeeperBlocked:false,first:null};\n  const interception=trajectoryInterceptionRisk(from,to,shooter.t,playersState);\n  if(interception.blocked)return {probability:0,accuracy,goalChance:0,interceptionRisk:1,blocked:true,rangeBlocked:false,goalkeeperBlocked:goalkeeperBlocksShot(shooter,from,to,playersState),first:interception.first};\n  let goalChance=0;\n  for(const outcome of shotAccuracyOutcomes(shooter,from,to)){\n   if(!isGoalEndpointForShot(shooter,from,outcome,playersState))continue;\n   goalChance+=outcome.weight*(1-fuV96KeeperSaveChance(shooter,from,outcome,playersState));\n  }\n  goalChance=Math.max(0,Math.min(1,goalChance));\n  const probability=Math.max(0,Math.min(1,goalChance*(1-interception.risk)));\n  const goalkeeperBlocked=goalkeeperBlocksShot(shooter,from,to,playersState);\n  return {probability,accuracy,goalChance,interceptionRisk:interception.risk,blocked:probability<=0,rangeBlocked:false,goalkeeperBlocked,first:interception.first};\n };\n resolveAccuracy=function(player,target){\n  const from={c:ball.c,r:ball.r};\n  const isShot=!!goalSideForCell(target.c,target.r,player.t);\n  const distance=cheb(from,target),grade=fuV96PlayerGrade(isShot?'shoot':'pass',player.n);\n  const accuracy=fuV96AccuracyPercent(isShot?'shoot':'pass',player,from,target)/100;\n  if(tacticalRandom()<accuracy){\n   return {target:{c:target.c,r:target.r},description:(isShot?'Remate':'Pase')+' preciso ('+Math.round(accuracy*100)+'% de precisión base).'};\n  }\n  if(isShot){\n   const max=fuV96MaxShotDeviation(distance,grade),magnitude=fuV96ChooseMagnitude(max,distance,'shoot'),sign=tacticalRandom()<.5?-1:1;\n   return {target:{c:target.c,r:Math.max(0,Math.min(R-1,target.r+sign*magnitude))},description:'Remate desviado lateralmente '+magnitude+' '+(magnitude===1?'casillero':'casilleros')+' (distancia: '+distance+').'};\n  }\n  const max=fuV96MaxPassSlip(distance,grade),magnitude=fuV96ChooseMagnitude(max,distance,'pass');\n  // El sobrepaso debe ser más raro en pases cortos: pasar un casillero de más\n  // duplica la distancia del pase y no es equivalente a errar un pase largo.\n  // Se mantiene la misma probabilidad de acierto; sólo cambia la distribución del fallo.\n  const longChance=fuV987PassLongChance(distance);\n  const long=tacticalRandom()<longChance;\n  const path=passPathCells(from,target);\n  let end;\n  if(long){\n   let step;\n   if(path.length>1)step={c:path[path.length-1].c-path[path.length-2].c,r:path[path.length-1].r-path[path.length-2].r};\n   else step={c:Math.sign(target.c-from.c),r:Math.sign(target.r-from.r)};\n   end={c:target.c+step.c*magnitude,r:target.r+step.r*magnitude};\n  }else{\n   const index=path.length-1-magnitude;\n   end=index<0?from:path[index];\n  }\n  return {target:end,description:'Pase fallido: quedó '+(long?'largo':'corto')+' '+magnitude+' '+(magnitude===1?'casillero':'casilleros')+' (distancia: '+distance+').'};\n };\n\n // El estado de falta faltaba en las instantaneas de minimax de v95.\n captureSequenceState=function(){\n  const state=fuV95CaptureSequenceState();\n  state.freeKickRequiredId=freeKickRequiredId;\n  state.freeKickAwardedTeam=freeKickAwardedTeam;\n  state.cpuProfile=cpuProfile;\n  state.fuV96TransitionActions=fuV96TransitionActions;\n  return state;\n };\n restoreSequenceState=function(state){\n  fuV95RestoreSequenceState(state);\n  freeKickRequiredId=state.freeKickRequiredId??null;\n  freeKickAwardedTeam=state.freeKickAwardedTeam??null;\n  cpuProfile=state.cpuProfile||cpuProfile;\n  fuV96TransitionActions=state.fuV96TransitionActions||0;\n };\n advanceSimulatedAction=function(result,playerId){\n  const actingTeam=turn,value=fuV95AdvanceSimulatedAction(result,playerId);\n  if(actingTeam===CPU_TEAM&&fuV96TransitionActions>0)fuV96TransitionActions--;\n  return value;\n };\n\n // Los escenarios no iniciales de v95 heredaban por error la obligacion de saque.\n if(fuV95ConfigureTacticalScenario){\n  configureTacticalScenario=function(scenario,rootTeam){\n   fuV95ConfigureTacticalScenario(scenario,rootTeam);\n   if(scenario&&scenario.id!=='kickoff')kickoffPassRequired=false;\n  };\n }\n\n function fuV96BestShot(shooter,playersState,from){\n  const goalC=shooter.t===1?C-1:0;\n  let best={probability:0,row:5,to:{c:goalC,r:5}};\n  for(let row=4;row<=6;row++){\n   const estimate=estimateShotProbability(shooter,from,{c:goalC,r:row},playersState);\n   if(estimate.probability>best.probability)best={probability:estimate.probability,row,to:{c:goalC,r:row}};\n  }\n  return best;\n }\n\n // Mapa de peligro: remate directo, pase-remate y conduccion-remate. A diferencia\n // del maximo unico de v95 conserva amenazas simultaneas y sus casillas de cierre.\n function fuV96ThreatOptions(playersState=p,carrierId=ball.owner){\n  const carrier=playersState.find(z=>z.id===carrierId);\n  if(!carrier)return [];\n  const from={c:carrier.c,r:carrier.r},goalC=carrier.t===1?C-1:0,options=[];\n  for(let row=4;row<=6;row++){\n   const to={c:goalC,r:row},estimate=estimateShotProbability(carrier,from,to,playersState);\n   options.push({type:'direct',probability:estimate.probability,from,to,path:passPathCells(from,to),playerId:carrier.id,row});\n  }\n  for(const receiver of playersState){\n   if(receiver.t!==carrier.t||receiver.id===carrier.id)continue;\n   const to={c:receiver.c,r:receiver.r};\n   if(cheb(from,to)>BALL_REACH(carrier.n)||stateOffsidePosition(receiver,from,playersState))continue;\n   const precision=estimatedPassPrecision(carrier,from,to);if(precision<=0)continue;\n   const interception=trajectoryInterceptionRisk(from,to,carrier.t,playersState);if(interception.blocked)continue;\n   const shot=fuV96BestShot(receiver,playersState,to);\n   const probability=precision*(1-interception.risk)*shot.probability;\n   if(probability<=0)continue;\n   options.push({type:'pass-shot',probability,from,to:shot.to,receiverId:receiver.id,\n    path:[...passPathCells(from,to),...passPathCells(to,shot.to)],playerId:carrier.id,row:shot.row});\n  }\n  // Un paso con balon puede abrir un remate que el evaluador v95 no anticipaba.\n  for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){\n   if(!dc&&!dr)continue;\n   const cell={c:from.c+dc,r:from.r+dr};\n   if(cell.c<0||cell.c>=C||cell.r<0||cell.r>=R||playersState.some(z=>z.id!==carrier.id&&z.c===cell.c&&z.r===cell.r))continue;\n   const virtual={...carrier,c:cell.c,r:cell.r};\n   const nextState=playersState.map(z=>z.id===carrier.id?virtual:z);\n   const shot=fuV96BestShot(virtual,nextState,cell);\n   const pressure=nextState.filter(z=>z.t!==carrier.t&&cheb(z,cell)<=1).length;\n   const probability=shot.probability*(pressure?Math.max(.42,1-pressure*.22):.82);\n   if(probability<=0)continue;\n   options.push({type:'carry-shot',probability,from,to:shot.to,path:[cell,...passPathCells(cell,shot.to)],playerId:carrier.id,row:shot.row});\n  }\n  return options.sort((a,b)=>b.probability-a.probability).slice(0,8);\n }\n\n function fuV96ThreatIndex(options){\n  return Math.min(1.6,(options[0]?.probability||0)+(options[1]?.probability||0)*.52+(options[2]?.probability||0)*.24);\n }\n function fuV96DistanceToRoute(cell,option){\n  const route=option?.path||[];\n  return route.length?Math.min(...route.map(q=>cheb(cell,q))):99;\n }\n function fuV96CoverageAssignments(team,options,playersState=p){\n  const pool=playersState.filter(z=>z.t===team&&[2,3,4,5,6].includes(z.n)),used=new Set(),assignments=new Map();\n  options.slice(0,3).forEach((option,index)=>{\n   const ranked=pool.filter(z=>!used.has(z.id)).map(z=>({z,cost:fuV96DistanceToRoute(z,option)+(z.n===5?.65:0)})).sort((a,b)=>a.cost-b.cost||a.z.id-b.z.id);\n   if(ranked[0]){assignments.set(index,ranked[0].z.id);used.add(ranked[0].z.id);}\n  });\n  return assignments;\n }\n\n function fuV96AllPressers(team,holder,playersState=p,ignoreId=null,replacement=null){\n  return playersState.filter(z=>z.t===team).map(z=>z.id===ignoreId&&replacement?{...z,c:replacement.c,r:replacement.r}:z).filter(z=>cheb(z,holder)<=2).length;\n }\n\n function fuV96RecentPatternAdjustment(action,team,holder){\n  if(team!==CPU_TEAM||!holder||holder.t!==HUMAN_TEAM||action.kind!=='move')return 0;\n  const recent=fuV96ActionHistory.filter(x=>x.team===HUMAN_TEAM&&['shoot','pass','carry'].includes(x.kind)).slice(-28);\n  let value=0;\n  for(const item of recent){\n   if(!item.from||!item.to)continue;\n   const nearOrigin=cheb(holder,item.from)<=4&&Math.abs(holder.r-item.from.r)<=2;if(!nearOrigin)continue;\n   const route=passPathCells(item.from,item.kind==='shoot'?{c:C-1,r:Math.max(4,Math.min(6,item.to.r))}:item.to);\n   if(!route.length)continue;\n   const before=Math.min(...route.map(q=>cheb(action.player,q))),after=Math.min(...route.map(q=>cheb(action.to,q)));\n   value+=(before-after)*(item.kind==='shoot'?8:4.5);\n  }\n  return Math.max(-24,Math.min(34,value));\n }\n\n function fuV96MovementPurposeAdjustment(action,team,holder){\n  if(team!==CPU_TEAM||!holder||holder.t!==team||!action||!action.player||!action.to)return 0;\n  if(!['move','carry'].includes(action.kind))return 0;\n  const actor=action.player,from={c:actor.c,r:actor.r},to=action.to;\n  const forwardCells=team===1?to.c-from.c:from.c-to.c;\n  const beforeDistance=cheb(from,holder),afterDistance=cheb(to,holder);\n  let value=0,reasons=[];\n  // Una acción que retrocede con posesión necesita una ventaja compensatoria clara.\n  if(forwardCells<0){value-=Math.min(30,17+4*Math.abs(forwardCells));reasons.push('retroceso ofensivo');}\n  // En ataque, los defensores no deben consumir una acción para recolocarse detrás de la pelota\n  // si tampoco se acercan a ofrecer apoyo ni adelantan la línea.\n  if(action.kind==='move'&&[2,3,4,5].includes(actor.n)&&forwardCells<=0&&afterDistance>=beforeDistance){\n   value-=22;reasons.push('reorganización defensiva sin apoyo ni progresión');\n  }\n  // Detecta el regreso inmediato a la casilla de origen del mismo jugador (movimiento ping-pong).\n  const previousReverse=fuV96ActionHistory.slice(-12).reverse().find(item=>\n   item.team===team&&item.playerNo===actor.n&&['move','carry'].includes(item.kind)&&item.from&&item.to&&\n   from.c===item.to.c&&from.r===item.to.r&&to.c===item.from.c&&to.r===item.from.r\n  );\n  if(previousReverse){value-=25;reasons.push('regreso a una posición anterior');}\n  action.fuV96MovementPurposeReason=reasons.join(', ');\n  return Math.max(-55,value);\n }\n\n function fuV96ProfileAdjustment(action,team,holder){\n  if(team!==CPU_TEAM)return 0;\n  const success=actionSuccessEstimate(action),pGoal=Number(action.goalProbability)||0,forward=Number(action.progress)||0;\n  const own=holder&&holder.t===team,defending=holder&&holder.t!==team;\n  let value=0;\n  if(fuV96Identity==='defensive'){\n   if(defending&&action.kind==='move')value+=(action.fuV96ThreatReduction||0)*75+(action.defensiveShapeAdjustment||0)*.38;\n   if(own&&action.kind==='pass')value+=success*8-(action.exposureRisk||0)*.22;\n   if(own&&action.kind==='shoot'&&pGoal<.5)value-=10;\n  }else if(fuV96Identity==='aggressive'){\n   if(defending&&action.kind==='duel')value+=action.duelOutcome==='frente'?15:4;\n   if(defending&&action.kind==='move'&&holder)value+=(cheb(action.player,holder)-cheb(action.to,holder))*6;\n   if(own)value+=Math.max(0,forward)*3+(action.kind==='shoot'?pGoal*12:0);\n  }else if(fuV96Identity==='cautious'){\n   if(own&&action.kind==='pass')value+=success*13-(1-success)*15-(action.exposureRisk||0)*.28;\n   if(own&&action.kind==='carry')value-=nearOpponents(team,action.to,1)*5;\n   if(own&&action.kind==='shoot'&&pGoal<.58)value-=16;\n   if(defending&&action.kind==='move')value+=(action.fuV96ThreatReduction||0)*62;\n  }else if(fuV96Identity==='counter'){\n   if(defending&&action.kind==='move')value+=(action.fuV96ThreatReduction||0)*70+(action.defensiveShapeAdjustment||0)*.32;\n   if(own&&fuV96TransitionActions>0){\n    if(action.kind==='pass'&&forward>1&&success>=.55)value+=16+Math.min(9,forward*2);\n    if(action.kind==='carry'&&forward>0)value+=9;\n   }else if(own&&action.kind==='pass')value+=success*6-(action.exposureRisk||0)*.18;\n  }else if(fuV96Identity==='adaptive'){\n   if(defending&&action.kind==='move')value+=fuV96RecentPatternAdjustment(action,team,holder)+(action.fuV96ThreatReduction||0)*68;\n   if(own&&action.kind==='pass')value+=success*5;\n  }else{\n   if(defending&&action.kind==='move')value+=(action.fuV96ThreatReduction||0)*50;\n   if(own&&action.kind==='pass')value+=success*3;\n  }\n  return Math.max(-42,Math.min(52,value));\n }\n\n tacticalCandidates=function(){\n  const team=turn,holder=owner(),result=fuV95TacticalCandidates();\n  const defending=holder&&holder.t!==team;\n  const beforeOptions=defending?fuV96ThreatOptions(p,holder.id):[];\n  const beforeIndex=fuV96ThreatIndex(beforeOptions);\n  const assignments=defending?fuV96CoverageAssignments(team,beforeOptions,p):new Map();\n  const pressersBefore=defending?fuV96AllPressers(team,holder,p):0;\n\n  for(const action of result){\n   let addition=0;\n   // Todas las capas ofensivas usan la probabilidad completa de gol, no precision abreviada.\n   if(action.kind==='shoot'){\n    const abbreviated=(action.precision||0)*(1-(action.interceptRisk||0));\n    addition+=(Number(action.goalProbability||0)-abbreviated)*46;\n   }\n   if(defending&&action.kind==='move'&&action.mode==='defense'){\n    const hypothetical=p.map(z=>z.id===action.playerId?{...z,c:action.to.c,r:action.to.r}:z);\n    const afterOptions=fuV96ThreatOptions(hypothetical,holder.id),afterIndex=fuV96ThreatIndex(afterOptions);\n    action.fuV96ThreatBefore=beforeIndex;action.fuV96ThreatAfter=afterIndex;\n    action.fuV96ThreatReduction=beforeIndex-afterIndex;\n    addition+=(beforeIndex-afterIndex)*118;\n\n    // Gradiente de cobertura: tambien premia el paso correcto antes de ocupar la ruta exacta.\n    for(let index=0;index<Math.min(3,beforeOptions.length);index++){\n     if(assignments.get(index)!==action.playerId)continue;\n     const option=beforeOptions[index],oldDistance=fuV96DistanceToRoute(action.player,option),newDistance=fuV96DistanceToRoute(action.to,option);\n     const gain=oldDistance-newDistance;\n     addition+=gain*(13+option.probability*18);\n     if(newDistance===0)addition+=7*option.probability;\n     if(gain<0)addition+=gain*8;\n    }\n    const pressersAfter=fuV96AllPressers(team,holder,p,action.playerId,action.to);\n    const movesCloser=cheb(action.to,holder)<cheb(action.player,holder);\n    if(pressersBefore>=1&&pressersAfter>pressersBefore&&movesCloser&&(action.fuV96ThreatReduction||0)<=.01)addition-=12+(pressersAfter-pressersBefore)*5;\n   }\n   action.fuV96ProfileAdjustment=fuV96ProfileAdjustment(action,team,holder);\n   addition+=action.fuV96ProfileAdjustment;\n   action.fuV96MovementPurposeAdjustment=fuV96MovementPurposeAdjustment(action,team,holder);\n   addition+=action.fuV96MovementPurposeAdjustment;\n   action.score=Math.max(-120,Math.min(390,action.score+addition));\n   if(Math.abs(addition)>=3)action.reason=(action.reason||'')+' v96: mapa de tres carriles, coberturas coordinadas y perfil '+FU_V96_IDENTITIES[fuV96Identity].label+' ('+(addition>=0?'+':'')+addition.toFixed(1)+' puntos).';\n   if(action.fuV96MovementPurposeReason)action.reason+=' Ajuste de decisión: '+action.fuV96MovementPurposeReason+' ('+action.fuV96MovementPurposeAdjustment.toFixed(1)+' puntos).';\n  }\n\n  // Variedad controlada: solo evita una repeticion si existe una alternativa cercana.\n  result.sort((a,b)=>b.score-a.score);\n  const recentCpu=fuV96ActionHistory.filter(x=>x.team===CPU_TEAM).slice(-8);\n  for(const action of result.slice(0,10)){\n   const repetitions=recentCpu.filter(x=>x.kind===action.kind&&x.playerNo===action.player?.n&&x.to&&x.to.c===action.to?.c&&x.to.r===action.to?.r).length;\n   if(!repetitions)continue;\n   const alternative=result.find(x=>x!==action&&x.score>=action.score-13&&x.kind!==action.kind);\n   if(alternative){action.score-=Math.min(14,repetitions*4.5);action.fuV96RepeatPenalty=repetitions;}\n  }\n  return result.sort((a,b)=>b.score-a.score||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));\n };\n\n evaluateSequencePosition=function(rootTeam,goalDiff){\n  let value=fuV95EvaluateSequencePosition(rootTeam,goalDiff),holder=owner();\n  if(holder){\n   const options=fuV96ThreatOptions(p,holder.id),multiple=Math.max(0,fuV96ThreatIndex(options)-(options[0]?.probability||0));\n   value+=(holder.t===rootTeam?1:-1)*multiple*82;\n   if(rootTeam===CPU_TEAM&&holder.t===HUMAN_TEAM&&fuV96Identity==='adaptive')value-=multiple*18;\n   if(rootTeam===CPU_TEAM&&holder.t===CPU_TEAM&&fuV96Identity==='counter'&&fuV96TransitionActions>0)value+=attackingProgress(CPU_TEAM,holder.c)*9;\n  }\n  return value;\n };\n\n updateAutomaticCpuProfile=function(team,holder){\n  if(team!==CPU_TEAM)return cpuProfile;\n  const threat=holder&&holder.t===HUMAN_TEAM?fuV96ThreatIndex(fuV96ThreatOptions(p,holder.id)):0;\n  if(fuV96Identity==='adaptive')return fuV95UpdateAutomaticCpuProfile(team,holder);\n  if(fuV96Identity==='counter')cpuProfile=holder&&holder.t===HUMAN_TEAM?(threat>=.55?'cautious':'defensive'):(fuV96TransitionActions>0?'aggressive':'balanced');\n  else if(fuV96Identity==='aggressive')cpuProfile=holder&&holder.t===HUMAN_TEAM&&threat>=.72?'defensive':'aggressive';\n  else cpuProfile=FU_V96_IDENTITIES[fuV96Identity].base;\n  return cpuProfile;\n };\n\n function fuV96RecordAction(kind,actor,details){\n  if(simulationRandomState!==null||!actor)return;\n  const item={team:actor.t,playerNo:actor.n,kind,from:details?.from||{c:actor.c,r:actor.r},to:details?.to||null,at:Date.now()};\n  const previous=fuV96ActionHistory[fuV96ActionHistory.length-1];\n  if(actor.t===CPU_TEAM&&previous&&previous.team===HUMAN_TEAM)fuV96TransitionActions=2;\n  else if(actor.t===CPU_TEAM&&fuV96TransitionActions>0)fuV96TransitionActions--;\n  const repeated=fuV96ActionHistory.slice(-6).some(x=>x.team===item.team&&x.kind===item.kind&&x.playerNo===item.playerNo&&x.to&&item.to&&x.to.c===item.to.c&&x.to.r===item.to.r);\n  fuV96ActionHistory.push(item);fuV96ActionHistory=fuV96ActionHistory.slice(-80);fuV96SaveJson(fuV96HistoryStoreKey,fuV96ActionHistory);\n  fuV96Metrics.actions=(fuV96Metrics.actions||0)+1;\n  if(kind==='pass')fuV96Metrics.passes=(fuV96Metrics.passes||0)+1;\n  else if(kind==='shoot')fuV96Metrics.shots=(fuV96Metrics.shots||0)+1;\n  else if(kind==='duel'||kind==='foul')fuV96Metrics.duels=(fuV96Metrics.duels||0)+1;\n  else fuV96Metrics.moves=(fuV96Metrics.moves||0)+1;\n  if(repeated)fuV96Metrics.repeated=(fuV96Metrics.repeated||0)+1;\n  fuV96Metrics.byProfile=fuV96Metrics.byProfile||{};fuV96Metrics.byProfile[fuV96Identity]=(fuV96Metrics.byProfile[fuV96Identity]||0)+1;\n  fuV96SaveJson(FU_V96_METRICS_KEY,fuV96Metrics);\n }\n beginManualAction=function(kind,actor,details={}){fuV96RecordAction(kind,actor,details);return fuV95BeginManualAction(kind,actor,details);};\n finish=function(text){\n  const currentOwner=owner();\n  if(currentOwner&&currentOwner.t===CPU_TEAM&&fuV96LastOwnerTeam!==CPU_TEAM)fuV96TransitionActions=3;\n  fuV96LastOwnerTeam=currentOwner?.t||fuV96LastOwnerTeam;\n  return fuV95Finish(text);\n };\n\n // ==================== SEGUIMIENTO DE ACCIONES EN MÓVIL v96.3 ====================\n // La cámara no se adelanta al destino lógico de la pelota. Acompaña el movimiento\n // animado del jugador, el duelo entre jugadores y recién después el recorrido del pase/remate.\n const fuV963OriginalAnimatePlayerMove=animatePlayerMove;\n const fuV963OriginalAnimateBall=animateBall;\n const fuV963OriginalAnimateDuel=animateDuel;\n const fuV963OriginalFollowBallOnMobile=followBallOnMobile;\n const fuV963OriginalResetToKickoff=resetToKickoff;\n let fuV963PreferredFocusX=null,fuV963ActiveFocusX=null,fuV963ActionFollowing=false,fuV963TrackSerial=0;\n const fuV963CameraTracks=new Map();\n\n function fuV963MobileViewport(){\n  const field=$('field'),viewport=$('pitchScrollArea')||document.querySelector('.pitch-scroll-area')||document.querySelector('.board');\n  if(!field||!viewport||!window.matchMedia('(max-width: 680px) and (orientation: portrait)').matches)return null;\n  if(field.scrollWidth<=viewport.clientWidth+2)return null;\n  return {field,viewport,scale:field.clientWidth/1990};\n }\n function fuV963ScrollToFieldX(fieldX,force=false){\n  const view=fuV963MobileViewport();if(!view||!Number.isFinite(fieldX))return;\n  // El viewBox comienza en -95; se traduce la coordenada SVG a píxeles del scroll.\n  const pixelX=(fieldX+95)*view.scale,left=view.viewport.scrollLeft,width=view.viewport.clientWidth;\n  const margin=width*.24;\n  if(!force&&pixelX>=left+margin&&pixelX<=left+width-margin)return;\n  const maxLeft=Math.max(0,view.viewport.scrollWidth-width);\n  const target=Math.max(0,Math.min(maxLeft,pixelX-width*.5));\n  if(Math.abs(target-left)<2)return;\n  if(fuV963ActionFollowing)view.viewport.scrollLeft=left+(target-left)*.30;\n  else view.viewport.scrollTo({left:target,behavior:'smooth'});\n }\n function fuV963RefreshActionFocus(){\n  if(!playersG)return;\n  playersG.querySelectorAll('.fu-v963-action-focus').forEach(node=>node.classList.remove('fu-v963-action-focus'));\n  for(const track of fuV963CameraTracks.values())for(const id of track.playerIds){\n   const node=nodePlayer(id);if(node)node.classList.add('fu-v963-action-focus');\n  }\n }\n function fuV963PrimaryCameraTrack(){\n  return [...fuV963CameraTracks.values()].sort((a,b)=>b.priority-a.priority||a.order-b.order)[0]||null;\n }\n function fuV963RefreshCameraState(){\n  const primary=fuV963PrimaryCameraTrack();\n  fuV963ActionFollowing=!!primary;\n  fuV963ActiveFocusX=primary?primary.x:null;\n  if(primary)fuV963PreferredFocusX=primary.x;\n  return primary;\n }\n function fuV963InjectActionFollowStyles(){\n  if($('fuV963ActionFollowStyle'))return;\n  const style=document.createElement('style');style.id='fuV963ActionFollowStyle';\n  style.textContent='.fu-v963-action-focus{filter:drop-shadow(0 0 9px #e5ff9c) drop-shadow(0 0 4px #b8f36b)!important}.mobile-pitch-hint:empty::before{content:\"↔ Deslizá para recorrer la cancha · la cámara acompaña al jugador que actúa y la trayectoria de la pelota\"!important}';\n  document.head.appendChild(style);\n }\n followBallOnMobile=function(){\n  // El encuadre permanece en la última acción. En reposo, antes de actuar, sigue la pelota.\n  const focus=Number.isFinite(fuV963ActiveFocusX)?fuV963ActiveFocusX:Number.isFinite(fuV963PreferredFocusX)?fuV963PreferredFocusX:X(ball.c);\n  fuV963ScrollToFieldX(focus,false);\n };\n async function fuV963TrackAction(startAnimation,duration,xAt,finalX,playerIds=[],priority=1){\n  const firstX=xAt(0),endX=Number.isFinite(finalX)?finalX:xAt(1),trackId=++fuV963TrackSerial;\n  const track={id:trackId,order:trackId,priority,x:firstX,playerIds:(playerIds||[]).filter(value=>value!==null&&value!==undefined)};\n  fuV963CameraTracks.set(trackId,track);fuV963RefreshCameraState();fuV963RefreshActionFocus();fuV963ScrollToFieldX(fuV963ActiveFocusX,false);\n  const started=performance.now();\n  const cameraPromise=new Promise(resolve=>{\n   const tick=now=>{\n    const t=duration<=0?1:clamp01((now-started)/duration);track.x=xAt(t);\n    fuV963RefreshCameraState();fuV963ScrollToFieldX(fuV963ActiveFocusX,false);\n    if(t<1)requestAnimationFrame(tick);else resolve();\n   };\n   requestAnimationFrame(tick);\n  });\n  try{\n   const animationPromise=startAnimation();\n   const values=await Promise.all([Promise.resolve(animationPromise),cameraPromise]);\n   return values[0];\n  }finally{\n   fuV963CameraTracks.delete(trackId);fuV963RefreshActionFocus();\n   const primary=fuV963RefreshCameraState();\n   if(primary)fuV963ScrollToFieldX(fuV963ActiveFocusX,false);\n   else{fuV963ActionFollowing=false;fuV963ActiveFocusX=null;fuV963PreferredFocusX=endX;fuV963ScrollToFieldX(endX,false);}\n  }\n }\n animatePlayerMove=function(id,from,to,options={}){\n  const dist=Math.max(Math.abs(to.c-from.c),Math.abs(to.r-from.r));\n  const slow=!!options.slow,baseDur=slow?1100+dist*300:255+Math.max(0,dist-1)*120;\n  const duration=Math.round(baseDur*(slowCpuVisuals?(slow?1.25:2.0):1));\n  const xAt=t=>X(from.c)+(X(to.c)-X(from.c))*easeInOut(t);\n  const finalX=X(to.c);\n  return fuV963TrackAction(()=>fuV963OriginalAnimatePlayerMove(id,from,to,options),duration,xAt,finalX,[id],2);\n };\n animateDuel=function(attackerId,rivalId,fromA,toA,fromR,toR,ballFrom,ballTo,options={}){\n  const result=options.result||'frente';\n  const duration=Math.round((result==='atras'?500:430)*(slowCpuVisuals?1.8:1));\n  const xAt=t=>{\n   const e=easeInOut(t),a=X(fromA.c)+(X(toA.c)-X(fromA.c))*e,r=X(fromR.c)+(X(toR.c)-X(fromR.c))*e;\n   return (a+r)/2;\n  };\n  const finalX=(X(toA.c)+X(toR.c))/2;\n  return fuV963TrackAction(()=>fuV963OriginalAnimateDuel(attackerId,rivalId,fromA,toA,fromR,toR,ballFrom,ballTo,options),duration+180,xAt,finalX,[attackerId,rivalId],3);\n };\n animateBall=function(from,to,options={}){\n  const arc=options.arc===undefined?true:!!options.arc,goal=!!options.goal;\n  const dist=Math.max(Math.abs(to.c-from.c),Math.abs(to.r-from.r));\n  const baseDur=options.duration??Math.round((315+dist*72)*(goal?1:2));\n  const dur=Math.round(baseDur*(slowCpuVisuals?1.55:1));\n  const travelDur=goal?Math.max(dur,1750):dur,totalDur=travelDur+(goal?170:90);\n  const a=point(from.c,from.r,!!from.owner),b=point(to.c,to.r,!!to.owner);\n  const mx=(a.x+b.x)/2,my=(a.y+b.y)/2,dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1;\n  const perp={x:-dy/len,y:dx/len},passer=p.find(z=>z.id===from.owner);\n  const curve=(arc&&dist>0)?(passer&&passer.n===10?Math.min(68,20+dist*7):Math.min(42,12+dist*5)):0;\n  const control={x:mx+perp.x*curve,y:my+perp.y*curve};\n  const xAt=t=>{\n   if(t*totalDur>=travelDur)return b.x;\n   const e=easeInOut(clamp01((t*totalDur)/travelDur)),u=1-e;\n   return u*u*a.x+2*u*e*control.x+e*e*b.x;\n  };\n  const ids=[from.owner,to.owner].filter((id,index,array)=>id!==null&&id!==undefined&&array.indexOf(id)===index);\n  return fuV963TrackAction(()=>fuV963OriginalAnimateBall(from,to,options),totalDur,xAt,b.x,ids,1);\n };\n resetToKickoff=function(...args){\n  fuV963PreferredFocusX=null;fuV963ActiveFocusX=null;fuV963ActionFollowing=false;fuV963CameraTracks.clear();fuV963RefreshActionFocus();\n  return fuV963OriginalResetToKickoff(...args);\n };\n fuV963InjectActionFollowStyles();\n\n function fuV96DrawThreatMap(){\n  const old=$('fuV96ThreatLayer');if(old)old.remove();\n  if(!fuV96ShowThreats||simulationRandomState!==null||brainTrainingRunning)return;\n  const holder=owner();if(!holder||holder.t!==HUMAN_TEAM)return;\n  const options=fuV96ThreatOptions(p,holder.id).filter(x=>x.probability>=.08).slice(0,3);\n  if(!options.length)return;\n  const layer=document.createElementNS(NS,'g');layer.id='fuV96ThreatLayer';layer.setAttribute('pointer-events','none');\n  options.forEach((option,index)=>{\n   const points=[{c:holder.c,r:holder.r},...(option.path||[])].map(q=>X(q.c)+','+Y(q.r)).join(' ');\n   const line=document.createElementNS(NS,'polyline');line.setAttribute('points',points);line.setAttribute('class','fu-v96-threat-line fu-v96-threat-'+index);line.setAttribute('opacity',String(.28+Math.min(.44,option.probability*.48)));layer.appendChild(line);\n  });\n  const field=$('field');if(field)field.insertBefore(layer,playersG||null);\n }\n refresh=function(){const value=fuV95Refresh();requestAnimationFrame(fuV96DrawThreatMap);return value;};\n\n function fuV96SetIdentity(id,announce=true){\n  if(fuV96TournamentIdentity)id=fuV96TournamentIdentity;\n  if(!FU_V96_IDENTITIES[id])return false;fuV96Identity=id;\n  if(!fuV96TournamentIdentity)fuV96SaveJson(FU_V96_PROFILE_KEY,id);\n  updateAutomaticCpuProfile(CPU_TEAM,owner());\n  const select=$('fuV96ProfileSelect');if(select)select.value=id;\n  const description=$('fuV96ProfileDescription');if(description)description.textContent=fuV96TournamentIdentity?('Rival: '+fuV96TournamentOpponentName+' · perfil fijo: '+FU_V96_IDENTITIES[id].label+'. '+FU_V96_IDENTITIES[id].short):FU_V96_IDENTITIES[id].short;\n  if(announce)say(fuV96TournamentIdentity?('Rival de torneo: '+fuV96TournamentOpponentName+' juega con perfil '+FU_V96_IDENTITIES[id].label+'.'):('Perfil CPU '+FU_V96_IDENTITIES[id].label+': '+FU_V96_IDENTITIES[id].short));\n  return true;\n }\n\n function fuV96RunAudit(){\n  const checks=[],check=(name,ok,detail)=>checks.push({name,ok:!!ok,detail:detail||''}),snapshot=captureSequenceState(),identity=fuV96Identity;\n  try{\n   check('Reglas base',ACTIONS_PER_TURN===3&&BALL_REACH(10)===8,'Tres acciones por turno; alcance base del jugador 10: 8 casilleros.');\n   const findMoveParity=(number,dc,dr)=>{\n    for(let r=0;r<R;r++)for(let c=0;c<C;c++){\n     const mover={id:99000+number,t:HUMAN_TEAM,n:number,c,r},target={c:c+dc,r:r+dr};\n     if(target.c<0||target.c>=C||target.r<0||target.r>=R)continue;\n     const route=[{c,r},...passPathCells({c,r},target)];\n     if(route.some(cell=>p.some(z=>z.c===cell.c&&z.r===cell.r)))continue;\n     const oldOwner=ball.owner;\n     ball.owner=null;const withoutBall=pLegal(target.c,target.r,mover);\n     ball.owner=mover.id;const withBall=pLegal(target.c,target.r,mover);\n     ball.owner=oldOwner;\n     return {withoutBall,withBall};\n    }\n    return null;\n   };\n   const regularMoveParity=findMoveParity(10,2,0);\n   const specialStraightParity=findMoveParity(7,3,0);\n   const specialDiagonalParity=findMoveParity(7,2,2);\n   const specialHorseParity=findMoveParity(7,2,1);\n   check('Paridad de traslado común',!!regularMoveParity&&regularMoveParity.withoutBall&&regularMoveParity.withBall,'El jugador común puede trasladarse 2 casilleros rectos con y sin pelota.');\n   check('Paridad de movimientos especiales',[specialStraightParity,specialDiagonalParity,specialHorseParity].every(x=>!!x&&x.withoutBall&&x.withBall),'Los jugadores 3, 4, 7 y 8 conservan movimientos rectos, diagonales y salto 2×1 en ambos estados.');\n   const fakeShooter={id:8801,t:HUMAN_TEAM,n:10,c:13,r:5};\n   const fakeState=[fakeShooter,{id:8802,t:CPU_TEAM,n:1,c:17,r:0},{id:8803,t:CPU_TEAM,n:2,c:15,r:4},{id:8804,t:CPU_TEAM,n:3,c:15,r:8},{id:8805,t:CPU_TEAM,n:4,c:16,r:10},{id:8806,t:CPU_TEAM,n:6,c:15,r:1}];\n   const rows=[4,5,6].map(r=>estimateShotProbability(fakeShooter,{c:13,r:5},{c:17,r},fakeState));\n   check('Tres carriles de remate',rows.length===3&&rows.every(x=>Number.isFinite(x.probability)),'Filas 4, 5 y 6 evaluadas.');\n   const i2=trajectoryInterceptionRisk({c:13,r:5},{c:17,r:5},HUMAN_TEAM,[fakeShooter,{id:1,t:CPU_TEAM,n:2,c:15,r:5}]);\n   const i5=trajectoryInterceptionRisk({c:13,r:5},{c:17,r:5},HUMAN_TEAM,[fakeShooter,{id:2,t:CPU_TEAM,n:5,c:15,r:5}]);\n   check('Intercepcion reglamentaria',Math.abs(i2.risk-.75)<.001&&Math.abs(i5.risk-.65)<.001,'75% para 2/6 y 65% para 5.');\n   check('Seis perfiles',Object.keys(FU_V96_IDENTITIES).length===6,Object.values(FU_V96_IDENTITIES).map(x=>x.label).join(', '));\n   if(fuV95ConfigureTacticalScenario){\n    const scenario=TACTICAL_TEST_SCENARIOS.find(x=>x.id==='protect-area');\n    const firstActions=new Set();\n    for(const id of Object.keys(FU_V96_IDENTITIES)){\n     configureTacticalScenario(scenario,CPU_TEAM);fuV96Identity=id;updateAutomaticCpuProfile(CPU_TEAM,owner());\n     const first=tacticalCandidates()[0];if(first)firstActions.add(sequenceActionKey(first));\n    }\n    check('Perfiles perceptibles',firstActions.size>=2,firstActions.size+' primeras decisiones distintas en el escenario defensivo.');\n   }\n   const foulState=captureSequenceState();freeKickRequiredId=123;freeKickAwardedTeam=1;restoreSequenceState(foulState);\n   check('Estado simulable completo',freeKickRequiredId===foulState.freeKickRequiredId&&freeKickAwardedTeam===foulState.freeKickAwardedTeam,'La busqueda restaura tambien el tiro libre.');\n  }catch(error){check('Ejecucion de auditoria',false,String(error?.message||error));}\n  finally{restoreSequenceState(snapshot);fuV96Identity=identity;updateAutomaticCpuProfile(CPU_TEAM,owner());refresh();}\n  const passed=checks.filter(x=>x.ok).length,report={version:FU_V96_VERSION,at:new Date().toISOString(),passed,total:checks.length,checks};\n  fuV96LastAudit=report;\n  const node=$('fuV96AuditResult');if(node){node.textContent=passed+'/'+checks.length+' controles aprobados';node.classList.toggle('fail',passed!==checks.length);node.title=checks.map(x=>(x.ok?'OK ':'FALLO ')+x.name+': '+x.detail).join('\\n');}\n  try{parent.postMessage({type:'fu:audit',report},'*');}catch(_e){}\n  return report;\n }\n\n const FU_PRACTICE_CLUBS=[{\"id\":\"aldosivi\",\"name\":\"Aldosivi\",\"primary\":\"#08764F\",\"secondary\":\"#F2D33D\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"argentinos-juniors\",\"name\":\"Argentinos Juniors\",\"primary\":\"#D71930\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"double-stripe\"},{\"id\":\"atletico-tucuman\",\"name\":\"Atlético Tucumán\",\"primary\":\"#F7F9FB\",\"secondary\":\"#75C4E8\",\"number\":\"#174B77\",\"kit\":\"pinstripes\"},{\"id\":\"banfield\",\"name\":\"Banfield\",\"primary\":\"#F7F8F4\",\"secondary\":\"#087148\",\"number\":\"#087148\",\"kit\":\"central\"},{\"id\":\"barracas-central\",\"name\":\"Barracas Central\",\"primary\":\"#C8202D\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"belgrano\",\"name\":\"Belgrano\",\"primary\":\"#08A0D4\",\"secondary\":\"#101820\",\"number\":\"#101820\",\"kit\":\"shoulders\"},{\"id\":\"boca-juniors\",\"name\":\"Boca Juniors\",\"primary\":\"#082D65\",\"secondary\":\"#F5C928\",\"number\":\"#FFFFFF\",\"kit\":\"band\"},{\"id\":\"central-cordoba\",\"name\":\"Central Córdoba\",\"primary\":\"#171717\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"wide-stripes\"},{\"id\":\"defensa-y-justicia\",\"name\":\"Defensa y Justicia\",\"primary\":\"#F2D525\",\"secondary\":\"#16854A\",\"number\":\"#123D2A\",\"kit\":\"shoulders\"},{\"id\":\"deportivo-riestra\",\"name\":\"Deportivo Riestra\",\"primary\":\"#171717\",\"secondary\":\"#F7F7F7\",\"number\":\"#FFFFFF\",\"kit\":\"wide-stripes\"},{\"id\":\"estudiantes-la-plata\",\"name\":\"Estudiantes de La Plata\",\"primary\":\"#D5212B\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"estudiantes-rio-cuarto\",\"name\":\"Estudiantes de Río Cuarto\",\"primary\":\"#F7F9FB\",\"secondary\":\"#176BC1\",\"number\":\"#153C68\",\"kit\":\"pinstripes\"},{\"id\":\"gimnasia-la-plata\",\"name\":\"Gimnasia y Esgrima La Plata\",\"primary\":\"#F4F6F8\",\"secondary\":\"#183D86\",\"number\":\"#173768\",\"kit\":\"chestband\"},{\"id\":\"gimnasia-mendoza\",\"name\":\"Gimnasia y Esgrima de Mendoza\",\"primary\":\"#F7F7F7\",\"secondary\":\"#202020\",\"number\":\"#171717\",\"kit\":\"stripes\"},{\"id\":\"huracan\",\"name\":\"Huracán\",\"primary\":\"#F7F7F3\",\"secondary\":\"#D92735\",\"number\":\"#D92735\",\"kit\":\"central\"},{\"id\":\"independiente\",\"name\":\"Independiente\",\"primary\":\"#D71F2B\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"shoulders\"},{\"id\":\"independiente-rivadavia\",\"name\":\"Independiente Rivadavia\",\"primary\":\"#153D96\",\"secondary\":\"#F7F7F7\",\"number\":\"#FFFFFF\",\"kit\":\"shoulders\"},{\"id\":\"instituto\",\"name\":\"Instituto\",\"primary\":\"#D3212D\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"lanus\",\"name\":\"Lanús\",\"primary\":\"#7D2038\",\"secondary\":\"#C86D83\",\"number\":\"#FFFFFF\",\"kit\":\"sleeves\"},{\"id\":\"newells-old-boys\",\"name\":\"Newell’s Old Boys\",\"primary\":\"#D5222B\",\"secondary\":\"#161616\",\"number\":\"#FFFFFF\",\"kit\":\"half\"},{\"id\":\"platense\",\"name\":\"Platense\",\"primary\":\"#F7F7F3\",\"secondary\":\"#7A4A2A\",\"number\":\"#7A4A2A\",\"kit\":\"band\"},{\"id\":\"racing-club\",\"name\":\"Racing Club\",\"primary\":\"#77C5E8\",\"secondary\":\"#FFFFFF\",\"number\":\"#173A62\",\"kit\":\"stripes\"},{\"id\":\"river-plate\",\"name\":\"River Plate\",\"primary\":\"#F8F8F4\",\"secondary\":\"#D51F31\",\"number\":\"#1D2832\",\"kit\":\"sash\"},{\"id\":\"rosario-central\",\"name\":\"Rosario Central\",\"primary\":\"#62B9E7\",\"secondary\":\"#F7D32F\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"san-lorenzo\",\"name\":\"San Lorenzo\",\"primary\":\"#082B68\",\"secondary\":\"#D52535\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"sarmiento\",\"name\":\"Sarmiento\",\"primary\":\"#087447\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"talleres\",\"name\":\"Talleres\",\"primary\":\"#F7F9FB\",\"secondary\":\"#102E78\",\"number\":\"#102E78\",\"kit\":\"wide-stripes\"},{\"id\":\"tigre\",\"name\":\"Tigre\",\"primary\":\"#123F8B\",\"secondary\":\"#D72835\",\"number\":\"#FFFFFF\",\"kit\":\"stripes\"},{\"id\":\"union\",\"name\":\"Unión\",\"primary\":\"#D41F2F\",\"secondary\":\"#FFFFFF\",\"number\":\"#FFFFFF\",\"kit\":\"wide-stripes\"},{\"id\":\"velez\",\"name\":\"Vélez Sarsfield\",\"primary\":\"#F7F7F7\",\"secondary\":\"#102C57\",\"number\":\"#102C57\",\"kit\":\"v\"}];\n\n function fuV96InstallUi(){\n  // Interfaz pública: no expone herramientas de auditoría ni selectores internos de la CPU.\n  fuV96SetIdentity(fuV96Identity,false);\n  fuV96DrawThreatMap();\n  if(tournamentMode)return;\n  const controls=document.querySelector('.controls');\n  if(!controls||$('fuPracticeKitStudio'))return;\n  const studio=document.createElement('section');\n  studio.id='fuPracticeKitStudio';studio.className='fu-practice-kit-studio';\n  const clubs=FU_PRACTICE_CLUBS;\n  const options='<option value=\"custom\">Personalizada</option>'+clubs.map(c=>'<option value=\"'+c.id+'\">'+c.name+'</option>').join('');\n  const patterns=[['plain','Lisa'],['stripes','Rayas'],['pinstripes','Rayas finas'],['wide-stripes','Rayas anchas'],['double-stripe','Doble franja'],['central','Franja central'],['band','Banda'],['chestband','Banda horizontal'],['sash','Banda diagonal'],['half','Mitad y mitad'],['badge','Centro'],['shoulders','Hombros'],['sleeves','Mangas'],['hoops','Franjas horizontales'],['v','V']];\n  const patternOptions=patterns.map(x=>'<option value=\"'+x[0]+'\">'+x[1]+'</option>').join('');\n  studio.innerHTML='<div class=\"fu-kit-heading\"><strong>CAMISETAS ARGENTINAS · 2026</strong><span>Los 30 clubes de Primera División tienen su diseño aplicado a las fichas. También podés personalizar los colores.</span></div>'+[1,2].map(t=>'<div class=\"fu-kit-team\"><strong>Equipo '+t+'</strong><label>Modelo<select id=\"fuKitClub'+t+'\" aria-label=\"Modelo de camiseta del Equipo '+t+'\">'+options+'</select></label><label>Diseño<select id=\"fuKitPattern'+t+'\" aria-label=\"Diseño de camiseta del Equipo '+t+'\">'+patternOptions+'</select></label><label>Color del diseño<input id=\"fuKitAccent'+t+'\" type=\"color\" value=\"'+(kitColors[t]||'#ffffff')+'\" aria-label=\"Color del diseño del Equipo '+t+'\"></label></div>').join('');\n  controls.insertAdjacentElement('afterend',studio);\n  function markCustom(t){const select=$('fuKitClub'+t);if(select)select.value='custom';if(typeof window.FU_SET_PLAYER_KIT==='function')window.FU_SET_PLAYER_KIT(t,null);}\n  function syncInputs(t){const main=$('c'+t),num=$('c'+t+'a'),pattern=$('fuKitPattern'+t),accent=$('fuKitAccent'+t);if(main)main.value=colors[t];if(num)num.value=accentColors[t];if(pattern)pattern.value=kitPatterns[t]||'plain';if(accent)accent.value=kitColors[t]||'#ffffff';}\n  function chooseClub(t,id){\n   const club=clubs.find(c=>c.id===id);if(!club){if(typeof window.FU_SET_PLAYER_KIT==='function')window.FU_SET_PLAYER_KIT(t,null);syncInputs(t);drawPlayers();refresh();return;}\n   colors[t]=club.primary;accentColors[t]=club.number;numberColors[t]=club.number;kitColors[t]=club.secondary;kitPatterns[t]=club.kit;\n   if(typeof window.FU_SET_PLAYER_KIT==='function')window.FU_SET_PLAYER_KIT(t,club.id);\n   syncInputs(t);drawPlayers();refresh();\n  }\n  [1,2].forEach(t=>{\n   const clubSelect=$('fuKitClub'+t),patternSelect=$('fuKitPattern'+t),accentInput=$('fuKitAccent'+t);\n   clubSelect.value='custom';patternSelect.value=kitPatterns[t]||'plain';accentInput.value=kitColors[t]||'#ffffff';\n   clubSelect.onchange=()=>chooseClub(t,clubSelect.value);\n   patternSelect.onchange=()=>{kitPatterns[t]=patternSelect.value;markCustom(t);drawPlayers();refresh();};\n   accentInput.oninput=()=>{kitColors[t]=accentInput.value;markCustom(t);drawPlayers();};\n   const main=$('c'+t),num=$('c'+t+'a');\n   if(main){const old=main.oninput;main.oninput=e=>{if(old)old.call(main,e);markCustom(t);};}\n   if(num){const old=num.oninput;num.oninput=e=>{if(old)old.call(num,e);markCustom(t);};}\n  });\n }\n\n window.FUTBOL_UNICO_V96={\n  version:FU_V96_VERSION,\n  baseline:'d62eae16f15984cdb4397b93d8c4a34e89392efd',\n  profiles:Object.keys(FU_V96_IDENTITIES),\n  getProfile:()=>fuV96Identity,\n  setProfile:id=>fuV96SetIdentity(id,true),\n  runAudit:fuV96RunAudit,\n  getLastAudit:()=>fuV96LastAudit?JSON.parse(JSON.stringify(fuV96LastAudit)):null,\n  getMetrics:()=>JSON.parse(JSON.stringify(fuV96Metrics)),\n  getThreats:()=>fuV96ThreatOptions(p,ball.owner).map(x=>({type:x.type,probability:x.probability,row:x.row}))\n };\n fuV96InstallUi();\n\n // v96.4: en partidos de torneo la CPU siempre queda en automático.\n // La pausa manual sigue disponible en Práctica, donde tournamentMode es false.\n function fuV964LockTournamentCpu(){\n  if(!tournamentMode)return;\n  const toggle=$('cpuToggleBtn');\n  if(toggle){\n   toggle.hidden=true;toggle.disabled=true;toggle.style.display='none';toggle.onclick=null;\n   toggle.setAttribute('aria-hidden','true');\n  }\n  const originalSetCpuEnabled=setCpuEnabled;\n  setCpuEnabled=function(on){\n   if(tournamentMode&&!matchClockFinished)on=true;\n   return originalSetCpuEnabled(on);\n  };\n }\n fuV964LockTournamentCpu();\n // Las auditorías internas no se ejecutan ni se muestran en la versión pública.\n // ================== FIN FUTBOL UNICO v96 ==================\n";
const V96_GAME_STYLES = "\n/* Evita duplicar la navegación del portal si la base contiene una cabecera del shell. */\n.fu-shell-header,.fu-shell-nav,.fu-shell-header + nav { display:none!important; }\n:root {\n  color-scheme:dark;\n  --fu96-bg:#06080c;\n  --fu96-coal:#0b0f16;\n  --fu96-panel:#10151f;\n  --fu96-panel-2:#151c28;\n  --fu96-line:rgba(233,238,246,.11);\n  --fu96-text:#e9eef6;\n  --fu96-muted:#8b96a8;\n  --fu96-lime:#c8ff2e;\n  --fu96-cyan:#3ee6ff;\n  --fu96-gold:#ffb01f;\n  --fu96-danger:#ff4d5e;\n  --fu96-blue:#75b8ff;\n}\nhtml { background:var(--fu96-bg)!important; }\nbody {\n  min-height:100vh!important;\n  color:var(--fu96-text)!important;\n  background:\n    radial-gradient(ellipse at 50% -12%,rgba(200,255,46,.075),transparent 48%),\n    radial-gradient(ellipse at 100% 80%,rgba(62,230,255,.045),transparent 34%),\n    repeating-linear-gradient(-55deg,transparent 0 26px,rgba(255,255,255,.012) 26px 27px),\n    var(--fu96-bg)!important;\n  padding:clamp(8px,1.4vw,20px)!important;\n  font-family:Inter,\"Segoe UI\",system-ui,sans-serif!important;\n  color-scheme:dark;\n}\nbody:before { content:none!important; }\n.app { width:min(1580px,100%)!important;max-width:none!important;margin:0 auto!important; }\na { color:var(--fu96-cyan); }\na:hover { color:#a7f5ff; }\n.head {\n  position:relative!important;align-items:stretch!important;gap:12px!important;\n  padding:clamp(12px,1.5vw,19px)!important;\n  border:1px solid var(--fu96-line)!important;border-top:2px solid rgba(200,255,46,.78)!important;\n  border-radius:5px!important;\n  background:linear-gradient(135deg,rgba(21,28,40,.98),rgba(10,14,21,.98))!important;\n  box-shadow:0 18px 48px rgba(0,0,0,.28),inset 0 1px rgba(255,255,255,.025)!important;\n  color:var(--fu96-text)!important;\n}\n.head:after { content:\"TACTICAL MATCH CENTER\";position:absolute;top:8px;right:12px;color:rgba(139,150,168,.36);font-size:7px;font-weight:950;letter-spacing:.22em;pointer-events:none; }\n.scoreboard-block { display:grid;gap:9px;min-width:min(700px,100%); }\n.scoreboard-line { align-items:center; }\n.scoreboard-score { gap:7px!important; }\n.scoreboard-score b { color:#d4dbe6!important;letter-spacing:.045em; }\n.scoreboard-score b,.score { font-variant-numeric:tabular-nums; }\n.score {\n  display:inline-grid;min-width:38px;min-height:38px;place-items:center;\n  border:1px solid rgba(233,238,246,.15)!important;border-radius:3px!important;\n  background:linear-gradient(180deg,#1a2230,#0b0f16)!important;\n  color:var(--fu96-lime)!important;box-shadow:inset 0 1px rgba(255,255,255,.04)!important;\n}\n.scoreboard-score .score { margin:0 2px!important; }\n.scoreboard-score b:first-child,.scoreboard-score b:last-child { color:var(--fu96-text)!important; }\n.match-clock { gap:7px!important; }\n.match-clock-time { color:var(--fu96-lime)!important;font-variant-numeric:tabular-nums;text-shadow:0 0 22px rgba(200,255,46,.13); }\n.match-clock-state { border:1px solid rgba(200,255,46,.25)!important;border-radius:3px!important;background:rgba(200,255,46,.07)!important;color:var(--fu96-lime)!important; }\n.match-clock-side,.match-clock-label,.match-clock-hint,.sub,.msg,.info { color:var(--fu96-muted)!important; }\n.match-narrative { border:1px solid rgba(62,230,255,.16)!important;border-radius:4px!important;background:rgba(6,8,12,.55)!important;color:#c5cfde!important; }\n.match-narrative-head { color:var(--fu96-cyan)!important; }\n.controls {\n  align-content:center!important;gap:7px!important;padding:8px!important;\n  border:1px solid rgba(233,238,246,.08)!important;border-radius:4px!important;\n  background:rgba(6,8,12,.36)!important;\n}\n.ctrl { border:1px solid rgba(233,238,246,.12)!important;border-radius:3px!important;background:#0b0f16!important;color:#c6cfdd!important; }\nselect,input[type=text],input[type=number],input[type=search],textarea {\n  border:1px solid rgba(233,238,246,.16)!important;border-radius:3px!important;\n  background:#090d13!important;color:var(--fu96-text)!important;\n}\ninput::placeholder,textarea::placeholder { color:#68758b!important; }\nbutton {\n  min-height:40px;border:1px solid rgba(233,238,246,.14)!important;border-radius:3px!important;\n  padding:7px 11px!important;\n  background:linear-gradient(180deg,#1a2230,#111722)!important;\n  color:#e1e7f0!important;font-size:11px;font-weight:900!important;letter-spacing:.015em;\n  box-shadow:none!important;\n  transition:background .15s ease,border-color .15s ease,color .15s ease,transform .15s ease,filter .15s ease!important;\n}\nbutton:hover { transform:translateY(-1px);border-color:rgba(62,230,255,.55)!important;background:linear-gradient(180deg,#202c3c,#131c28)!important;color:#fff!important;box-shadow:0 7px 18px rgba(0,0,0,.24)!important; }\nbutton.primary { border-color:var(--fu96-lime)!important;background:linear-gradient(180deg,#ddff74,var(--fu96-lime))!important;color:#10150a!important;box-shadow:0 0 20px rgba(200,255,46,.09)!important; }\nbutton.primary:hover { border-color:#e9ffad!important;background:#e0ff7e!important;color:#10150a!important; }\nbutton:disabled { opacity:.42!important;cursor:not-allowed!important;transform:none!important; }\nbutton:focus-visible,select:focus-visible,input:focus-visible,a:focus-visible { outline:2px solid var(--fu96-cyan)!important;outline-offset:3px!important; }\ninput[type=color] { border:1px solid rgba(233,238,246,.12)!important;border-radius:3px!important;background:#0b0f16!important; }\n.board {\n  position:relative!important;margin-top:14px!important;\n  border:1px solid rgba(200,255,46,.58)!important;border-radius:5px!important;\n  box-shadow:0 26px 70px rgba(0,0,0,.55),0 0 0 1px rgba(62,230,255,.075),inset 0 1px rgba(255,255,255,.12)!important;\n  background:#174923!important;\n}\n.board:not(:fullscreen):not(:-webkit-full-screen) { padding:7px!important;background:linear-gradient(145deg,#111a23,#0b0f16)!important; }\n.board:not(:fullscreen):not(:-webkit-full-screen) #field { border:1px solid rgba(200,255,46,.18)!important;border-radius:2px!important;box-shadow:0 2px 12px rgba(0,0,0,.3)!important; }\n.board:after { pointer-events:none; }\n.pitch-scroll-area { position:relative;z-index:3; }\n.player { transition:filter .16s ease,opacity .16s ease; }\n.player:hover { filter:drop-shadow(0 4px 5px rgba(0,0,0,.65)) drop-shadow(0 0 6px rgba(62,230,255,.48))!important; }\n.player.sel .ring { stroke:var(--fu96-lime)!important;stroke-width:5!important; }\n.cell.pl { fill:rgba(200,255,46,.13)!important;stroke:rgba(233,255,174,.8)!important; }\n.cell.sel { fill:rgba(62,230,255,.14)!important;stroke:var(--fu96-cyan)!important; }\n.cell.bl { fill:rgba(255,176,31,.24)!important;stroke:#ffd36c!important; }\n.ballTrail { stroke:var(--fu96-cyan)!important;stroke-width:2.4!important;opacity:.52!important; }\n.bottom { padding:9px 2px 0; }\n.state { color:var(--fu96-text)!important; }\n.msg { min-height:24px; }\n.advisor,.brain-learning,.match-analytics,.sequence-search,.strategy-plan,.tactic-library,.sequence-card,.sequence-results {\n  border:1px solid rgba(233,238,246,.1)!important;border-radius:4px!important;\n  background:linear-gradient(145deg,rgba(16,21,31,.98),rgba(10,14,21,.98))!important;\n  color:var(--fu96-text)!important;box-shadow:0 14px 34px rgba(0,0,0,.22)!important;\n}\n.advisor-kicker,.strategy-plan-top,.tf-kicker { color:var(--fu96-cyan)!important; }\n.advisor-main,.strategy-objective,.strategy-plan,.tactic-item,.brain-title { color:var(--fu96-text)!important; }\n.advisor-reason,.advisor-meta,.advisor-foot,.ma-note,.info { color:var(--fu96-muted)!important; }\n.match-analytics th,.sequence-table th { color:var(--fu96-cyan)!important; }\n.match-analytics td,.sequence-table td { border-color:rgba(233,238,246,.08)!important; }\n.goal-celebration-card,.halftime-card {\n  border:1px solid rgba(200,255,46,.42)!important;border-radius:5px!important;\n  background:linear-gradient(145deg,#151c28,#080b10)!important;color:var(--fu96-text)!important;\n  box-shadow:0 28px 90px rgba(0,0,0,.78),0 0 45px rgba(200,255,46,.055)!important;\n}\n.goal-celebration-kicker,.goal-celebration-title { color:var(--fu96-lime)!important; }\n.fu-v96-console {\n  display:grid;grid-template-columns:minmax(230px,1fr) minmax(180px,240px) auto auto minmax(115px,auto);\n  align-items:center;gap:10px;margin:10px 0 0;padding:12px 14px;\n  clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px));\n  border:1px solid rgba(200,255,46,.25);\n  background:linear-gradient(115deg,rgba(21,28,40,.98),rgba(9,13,19,.98));\n  box-shadow:0 14px 32px rgba(0,0,0,.3);color:var(--fu96-text);\n}\n.fu-v96-console-copy { display:grid;gap:2px; }\n.fu-v96-console-copy strong { font-size:13px;letter-spacing:-.015em; }\n.fu-v96-console-copy small { color:var(--fu96-muted);font-size:10px;line-height:1.4; }\n.fu-v96-kicker { color:var(--fu96-lime);font-size:8px;font-weight:1000;letter-spacing:.21em; }\n.fu-v96-select-wrap { display:grid;grid-template-columns:auto 1fr;align-items:center;gap:7px;color:var(--fu96-muted);font-size:9px;font-weight:950;letter-spacing:.1em;text-transform:uppercase; }\n.fu-v96-select-wrap select { min-height:38px;border:1px solid rgba(62,230,255,.24)!important;border-radius:3px!important;padding:0 28px 0 10px;background:#0b0f16!important;color:var(--fu96-text)!important;font-weight:850; }\n.fu-v96-console button { min-height:38px;padding:7px 10px!important;font-size:10px; }\n.fu-v96-console output { color:#bdc8d9;font-size:9px;font-weight:850;text-align:right; }\n.fu-v96-console output.fail { color:#ff939d; }\n.fu-v96-threat-line { fill:none;stroke:var(--fu96-danger);stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:9 12;filter:drop-shadow(0 0 3px #8b130f); }\n.fu-v96-threat-1 { stroke:var(--fu96-gold);stroke-width:3; }\n.fu-v96-threat-2 { stroke:var(--fu96-blue);stroke-width:2.5; }\n.cpu-auto-tactics { border-color:rgba(200,255,46,.4)!important; }\n.cpu-auto-dot { background:var(--fu96-lime)!important;box-shadow:0 0 0 4px rgba(200,255,46,.13),0 0 13px rgba(200,255,46,.6)!important; }\n.fu-home-nav a { border:1px solid rgba(62,230,255,.2)!important;border-radius:3px!important;background:#0b0f16!important;color:var(--fu96-text)!important; }\n.fu-home-nav a:hover { border-color:var(--fu96-lime)!important;color:var(--fu96-lime)!important; }\n.tournament-result-panel { border-color:rgba(200,255,46,.24)!important;background:#10151f!important; }\n@media(prefers-reduced-motion:no-preference) {\n .board { animation:fu96BoardIn .5s cubic-bezier(.2,.8,.2,1) both; }\n .fu-v96-console { animation:fu96ConsoleIn .38s .1s ease-out both; }\n .player.sel .ring { animation:fu96Selection 1.5s ease-in-out infinite; }\n @keyframes fu96BoardIn { from { opacity:0;transform:translateY(9px) scale(.997); } to { opacity:1;transform:none; } }\n @keyframes fu96ConsoleIn { from { opacity:0;transform:translateY(-4px); } to { opacity:1;transform:none; } }\n @keyframes fu96Selection { 50% { stroke-width:7;opacity:.7; } }\n}\n@media(max-width:980px) {\n .fu-v96-console { grid-template-columns:1fr 220px auto auto; }\n .fu-v96-console output { grid-column:1/-1;text-align:left; }\n .head { display:grid!important; }\n .scoreboard-block { min-width:0; }\n}\n@media(max-width:680px) {\n body { padding:8px!important; }\n .head { padding:10px!important;border-radius:4px!important; }\n .head:after { display:none; }\n .fu-v96-console { grid-template-columns:1fr 1fr;padding:10px; }\n .fu-v96-console-copy,.fu-v96-console output,.fu-v96-select-wrap { grid-column:1/-1; }\n .board { border-radius:4px!important; }\n .match-narrative { display:none; }\n .scoreboard-score b { font-size:10px; }\n}\n@media(max-width:380px) {\n .scoreboard-score { gap:3px!important; }\n .scoreboard-score b { font-size:9px!important; }\n .score { min-width:30px;min-height:34px;font-size:20px; }\n .fu-v96-console { gap:7px; }\n .fu-v96-console button { padding-inline:6px!important;font-size:9px; }\n}\n@media(prefers-reduced-motion:reduce) {\n .board,.fu-v96-console,.player.sel .ring { animation:none!important; }\n button { transition:none!important; }\n}\n\n/* v96.4: la CPU no se puede pausar manualmente en partidos del torneo. */\nbody.tournament-match #cpuToggleBtn { display:none!important; }\n\n/* v96.4: el panel del marcador en móviles no debe cortar la duración ni el estado del turno. */\n@media(max-width:680px) and (orientation:portrait) {\n .board:fullscreen .fullscreen-score-panel,\n .board:-webkit-full-screen .fullscreen-score-panel {\n  display:flex!important;flex-direction:column!important;align-items:stretch!important;\n  height:auto!important;min-height:0!important;\n  max-height:min(176px,30vh)!important;max-height:min(176px,30dvh)!important;\n  overflow-x:hidden!important;overflow-y:auto!important;\n  padding:7px 9px!important;gap:4px!important;scrollbar-width:thin;\n  scrollbar-color:rgba(200,255,46,.45) transparent;\n }\n .fullscreen-score-panel .match-narrative { display:none!important; }\n .fullscreen-score-panel .scoreboard-block { display:flex!important;flex-direction:column!important;gap:5px!important;width:100%!important;min-width:0!important; }\n .fullscreen-score-panel .scoreboard-line {\n  display:flex!important;flex-direction:row!important;align-items:center!important;\n  justify-content:space-between!important;flex-wrap:wrap!important;gap:5px 8px!important;\n }\n .fullscreen-score-panel .scoreboard-score {\n  display:flex!important;flex:0 1 auto!important;align-items:center!important;justify-content:flex-start!important;\n  width:auto!important;min-width:0!important;white-space:normal!important;gap:3px!important;\n }\n .fullscreen-score-panel .scoreboard-score b {\n  max-width:34vw!important;white-space:normal!important;overflow-wrap:anywhere!important;\n  font-size:clamp(8px,2.2vw,11px)!important;line-height:1.15!important;\n }\n .fullscreen-score-panel .score { min-width:24px!important;height:28px!important;padding:0 4px!important;font-size:14px!important; }\n .fullscreen-score-panel .match-clock {\n  display:inline-flex!important;flex:0 1 auto!important;flex-direction:row!important;align-items:center!important;\n  justify-content:flex-start!important;width:auto!important;max-width:100%!important;min-width:0!important;\n  gap:5px!important;margin:0!important;padding:4px 6px!important;border-radius:7px!important;\n }\n .fullscreen-score-panel .match-clock-time { font-size:clamp(15px,4vw,20px)!important; }\n .fullscreen-score-panel .match-clock-state { font-size:clamp(7px,1.8vw,9px)!important;padding:4px 5px!important;white-space:normal!important; }\n .fullscreen-score-panel .match-duration-control { max-width:100%!important;margin:0!important;padding:4px 6px!important;gap:3px 5px!important; }\n .fullscreen-score-panel .match-duration-control select { max-width:120px!important;height:25px!important;font-size:9px!important; }\n .fullscreen-score-panel .match-duration-control small { font-size:8px!important; }\n .fullscreen-score-panel .sub { display:block!important;margin:2px 0 0!important;font-size:10px!important;line-height:1.3!important;white-space:normal!important;overflow-wrap:anywhere!important; }\n}\n\n\n/* Interfaz pública: fuera etiquetas de laboratorio y controles de auditoría. */\n.head:after{content:none!important}\n.info{font-size:11px!important;line-height:1.5!important;color:var(--fu96-muted)!important}\n.fu-v96-console{display:none!important}\n.fu-practice-kit-studio{display:grid;grid-template-columns:minmax(170px,1fr) repeat(2,minmax(220px,1fr));gap:10px;align-items:center;margin-top:8px;padding:10px 12px;border:1px solid rgba(233,238,246,.11);background:rgba(6,8,12,.5);border-radius:4px;color:var(--fu96-text)}\n.fu-kit-heading{display:flex;flex-direction:column;gap:5px}.fu-kit-heading strong{font-size:11px;letter-spacing:.08em;color:var(--fu96-lime)}.fu-kit-heading span{font-size:10px;color:var(--fu96-muted);line-height:1.45}\n.fu-kit-team{display:grid;grid-template-columns:1fr 1fr auto;gap:7px;align-items:end;min-width:0}.fu-kit-team>strong{grid-column:1/-1;font-size:10px;color:#e5edf7;text-transform:uppercase;letter-spacing:.08em}.fu-kit-team label{display:flex;flex-direction:column;gap:4px;min-width:0;font-size:9px;color:var(--fu96-muted)}.fu-kit-team select{width:100%;min-width:0;min-height:34px;padding:5px;font-size:10px!important}.fu-kit-team input[type=color]{width:42px;min-height:34px;height:34px;padding:3px;border:1px solid rgba(233,238,246,.16);background:#090d13}\n@media(max-width:900px){.fu-practice-kit-studio{grid-template-columns:1fr}.fu-kit-team{grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto}}\n@media(max-width:560px){.fu-kit-team{grid-template-columns:minmax(0,1fr) minmax(0,1fr) auto;gap:5px}.fu-kit-team select{font-size:9px!important}.fu-kit-heading span{font-size:11px}}\n";
const V96_SHELL_STYLES = "\n:root {\n  color-scheme: dark;\n  --bg: #06080c;\n  --panel: #10151f;\n  --panel2: #151c28;\n  --line: rgba(233,238,246,.11);\n  --text: #e9eef6;\n  --muted: #8b96a8;\n  --lime: #c8ff2e;\n  --lime2: #8fc400;\n  --cyan: #3ee6ff;\n  --amber: #ffb01f;\n}\nhtml { min-height:100%; scroll-behavior:smooth; background:var(--bg)!important; }\nbody {\n  min-height:100vh!important;\n  color:var(--text)!important;\n  background:\n    radial-gradient(ellipse at 50% -15%,rgba(200,255,46,.09),transparent 48%),\n    radial-gradient(ellipse at 100% 92%,rgba(62,230,255,.055),transparent 35%),\n    repeating-linear-gradient(-55deg,transparent 0 22px,rgba(255,255,255,.012) 22px 23px),\n    var(--bg)!important;\n  font-family:Inter,\"Segoe UI\",system-ui,sans-serif!important;\n}\nbody:before { content:none!important; }\na { color:inherit; }\nbutton:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible { outline:2px solid var(--cyan)!important; outline-offset:3px!important; }\n.wrap { width:min(1380px,calc(100% - 44px))!important; }\n.topbar {\n  position:relative!important;\n  padding:17px 0!important;\n  border-bottom:1px solid rgba(233,238,246,.12)!important;\n  background:transparent!important;\n}\n.topbar:after { content:\"\";position:absolute;bottom:-1px;left:0;width:38%;height:1px;background:linear-gradient(90deg,var(--lime),transparent); }\n.brand-mark,.mark {\n  display:grid!important;place-items:center!important;\n  clip-path:polygon(0 0,78% 0,100% 22%,100% 100%,22% 100%,0 78%)!important;\n  border:0!important;border-radius:0!important;\n  background:linear-gradient(140deg,#ddff70,var(--lime))!important;\n  color:var(--bg)!important;box-shadow:0 0 24px rgba(200,255,46,.14)!important;\n}\n.brand-name { color:var(--text)!important;font-weight:1000!important;letter-spacing:.12em!important; }\n.brand-tag { color:var(--muted)!important;font-size:9px!important;letter-spacing:.2em!important; }\n.top-label,.nav a {\n  border:1px solid rgba(233,238,246,.12)!important;border-radius:4px!important;\n  background:#10151f!important;color:#c4ccda!important;\n  font-size:10px!important;font-weight:900!important;letter-spacing:.11em!important;text-transform:uppercase;\n}\n.nav a { transition:background .16s ease,border-color .16s ease,color .16s ease; }\n.nav a:hover { border-color:rgba(62,230,255,.42)!important;color:var(--cyan)!important;background:rgba(62,230,255,.05)!important; }\n.nav a.active { color:var(--bg)!important;background:var(--lime)!important;border-color:var(--lime)!important; }\n.hero { position:relative;padding:clamp(28px,5vw,64px) 0 clamp(26px,4vw,45px)!important; }\n.hero:after { opacity:.16!important;filter:hue-rotate(35deg); }\n.eyebrow {\n  border:1px solid rgba(200,255,46,.3)!important;border-radius:3px!important;\n  background:rgba(200,255,46,.055)!important;color:var(--lime)!important;\n  font-size:9px!important;font-weight:950!important;letter-spacing:.21em!important;\n}\n.pulse { background:var(--lime)!important;box-shadow:0 0 12px rgba(200,255,46,.7)!important; }\n.hero h1 { font-weight:1000!important;letter-spacing:-.06em!important;line-height:.98!important; }\n.hero h1 span { color:var(--lime)!important;text-shadow:0 0 32px rgba(200,255,46,.1); }\n.hero p { color:#a7b1c2!important;max-width:660px!important; }\n.hero-meta .meta-chip {\n  border:1px solid rgba(233,238,246,.1)!important;border-radius:3px!important;\n  background:rgba(16,21,31,.82)!important;color:#bbc5d3!important;\n  font-size:10px!important;letter-spacing:.03em;\n}\n.section-head h2,.panel h2 { color:var(--text)!important;font-weight:950!important;letter-spacing:-.04em!important; }\n.section-head p,.muted { color:var(--muted)!important; }\n.section-mark { color:var(--cyan)!important;font-size:9px!important;font-weight:850;letter-spacing:.18em!important; }\n.modes { gap:13px!important; }\n.mode {\n  position:relative;border:1px solid rgba(233,238,246,.12)!important;border-radius:5px!important;\n  padding:clamp(16px,2vw,25px)!important;\n  background:linear-gradient(140deg,rgba(21,28,40,.97),rgba(10,14,21,.97))!important;\n  box-shadow:0 20px 42px rgba(0,0,0,.17),inset 0 1px rgba(255,255,255,.025)!important;\n  transition:transform .18s ease,border-color .18s ease,box-shadow .18s ease!important;\n}\n.mode:before { content:\"\";position:absolute;top:0;left:0;width:54px;height:2px;background:rgba(233,238,246,.18); }\n.mode.available { border-color:rgba(200,255,46,.36)!important;background:linear-gradient(140deg,rgba(24,34,43,.98),rgba(10,14,20,.98))!important; }\n.mode.available:before { width:96px;background:linear-gradient(90deg,var(--lime),rgba(200,255,46,0)); }\n.mode.available:hover { transform:translateY(-3px);border-color:var(--lime)!important;box-shadow:0 22px 46px rgba(0,0,0,.28),0 0 28px rgba(200,255,46,.055)!important; }\n.mode.coming { color:var(--text)!important;opacity:.78; }\n.mode-icon {\n  clip-path:polygon(0 0,78% 0,100% 22%,100% 100%,22% 100%,0 78%)!important;\n  border:1px solid rgba(233,238,246,.12)!important;border-radius:0!important;\n  background:#0b0f16!important;color:var(--cyan)!important;\n}\n.mode.available .mode-icon { color:var(--bg)!important;background:var(--lime)!important;border-color:var(--lime)!important; }\n.mode h3 { color:var(--text)!important;font-weight:950!important;letter-spacing:-.045em!important; }\n.mode p { color:#9aa5b8!important; }\n.pill {\n  border:1px solid rgba(233,238,246,.12)!important;border-radius:2px!important;\n  background:#0b0f16!important;color:#aab5c6!important;\n  font-size:8px!important;font-weight:950!important;letter-spacing:.12em!important;\n}\n.mode.available .pill { border-color:rgba(200,255,46,.28)!important;background:rgba(200,255,46,.08)!important;color:var(--lime)!important; }\n.mode-action { color:var(--mist,var(--text))!important; }\n.mode-action .arrow { display:grid;place-items:center;width:27px;height:27px;border:1px solid rgba(233,238,246,.13);color:var(--cyan);background:#0b0f16; }\n.mode.available .mode-action .arrow { color:var(--bg);background:var(--lime);border-color:var(--lime); }\n.bottom-note { color:var(--muted)!important;border-top:1px solid rgba(233,238,246,.1)!important; }\n.dialog-backdrop { background:rgba(2,4,7,.82)!important;backdrop-filter:blur(10px); }\n.dialog { border:1px solid rgba(62,230,255,.24)!important;border-radius:6px!important;background:linear-gradient(145deg,#151c28,#0b0f16)!important;color:var(--text)!important;box-shadow:0 25px 90px #000b!important; }\n\n/* Torneo: mismo sistema visual que la portada. */\n.panel {\n  border:1px solid rgba(233,238,246,.11)!important;border-radius:5px!important;\n  background:linear-gradient(145deg,rgba(16,21,31,.98),rgba(10,14,21,.98))!important;\n  box-shadow:0 18px 38px rgba(0,0,0,.2),inset 0 1px rgba(255,255,255,.025)!important;\n}\n.field-row { gap:clamp(12px,1.5vw,20px)!important; }\ninput[type=search],select,input:not([type]) {\n  border:1px solid rgba(233,238,246,.14)!important;border-radius:3px!important;\n  background:#090d13!important;color:var(--text)!important;\n}\ninput::placeholder { color:#697488!important; }\n.team-card {\n  border:1px solid rgba(233,238,246,.1)!important;border-radius:4px!important;\n  background:#0b0f16!important;color:var(--text)!important;\n  transition:border-color .14s ease,background .14s ease,transform .14s ease!important;\n}\n.team-card:hover { border-color:rgba(62,230,255,.45)!important;background:#121c27!important;transform:translateY(-1px); }\n.team-card.selected { border-color:var(--lime)!important;background:rgba(200,255,46,.08)!important;box-shadow:inset 3px 0 var(--lime),0 0 16px rgba(200,255,46,.05)!important; }\n.team-name { color:var(--text)!important; }\n.team-sub { color:var(--muted)!important; }\n.team-actions button,.btn,button.btn {\n  min-height:40px;border:1px solid rgba(233,238,246,.14)!important;border-radius:3px!important;\n  padding:9px 13px;background:#151c28!important;color:var(--text)!important;\n  font-size:10px!important;font-weight:950!important;letter-spacing:.09em!important;\n  transition:background .15s ease,border-color .15s ease,color .15s ease,transform .15s ease!important;\n}\n.team-actions button:hover,.btn:hover,button.btn:hover { border-color:var(--cyan)!important;color:var(--cyan)!important;transform:translateY(-1px); }\n.team-actions button.primary,.btn.primary,button.btn.primary { border-color:var(--lime)!important;background:var(--lime)!important;color:var(--bg)!important; }\n.team-actions button.primary:hover,.btn.primary:hover,button.btn.primary:hover { border-color:#e4ff9a!important;background:#dcff77!important;color:var(--bg)!important; }\n.notice { border:1px solid rgba(62,230,255,.17)!important;border-radius:4px!important;background:rgba(62,230,255,.035)!important;color:#bbc6d6!important; }\n.stat { border:1px solid rgba(233,238,246,.1)!important;border-radius:4px!important;background:#0b0f16!important; }\n.stat strong { color:var(--lime)!important;font-variant-numeric:tabular-nums; }\n.stat span { color:var(--muted)!important; }\n.table-wrap { border:1px solid rgba(233,238,246,.1)!important;border-radius:4px!important; }\ntable { color:var(--text)!important; }\nthead { background:#161e2a!important;color:var(--cyan)!important; }\nth { color:#a9b5c7!important;font-size:9px!important;letter-spacing:.1em;text-transform:uppercase; }\ntd { border-color:rgba(233,238,246,.07)!important; }\ntbody tr:nth-child(odd) { background:rgba(255,255,255,.018)!important; }\ntbody tr:hover { background:rgba(62,230,255,.045)!important; }\n.fixture,.history-list>*,.fixture-list>* { border-color:rgba(233,238,246,.1)!important;background:#0b0f16!important;border-radius:4px!important; }\n.footer { color:var(--muted)!important;border-color:rgba(233,238,246,.1)!important; }\n@media(max-width:760px) {\n .wrap { width:calc(100% - 24px)!important; }\n .topbar { gap:10px!important;flex-wrap:wrap; }\n .top-label { font-size:8px!important;padding:6px 8px!important; }\n .field-row { grid-template-columns:minmax(0,1fr)!important; }\n .team-grid { grid-template-columns:repeat(2,minmax(0,1fr))!important; }\n .mode { min-height:205px!important; }\n}\n@media(max-width:480px) {\n .wrap { width:calc(100% - 18px)!important; }\n .topbar { align-items:flex-start!important;padding:12px 0!important; }\n .brand-name { font-size:12px!important; }\n .nav { width:100%;display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr)); }\n .nav a { text-align:center;padding:9px 5px!important;font-size:8px!important; }\n .modes { grid-template-columns:minmax(0,1fr)!important; }\n .hero { padding-top:27px!important; }\n .hero p { font-size:13px!important; }\n .section-mark { display:none; }\n .selection-tools { flex-direction:column; }\n .team-grid { grid-template-columns:minmax(0,1fr)!important;max-height:370px!important; }\n .panel { padding:12px!important; }\n}\n@media(prefers-reduced-motion:reduce) {\n html { scroll-behavior:auto!important; }\n *,*:before,*:after { animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important;transition-duration:.01ms!important; }\n}\n";
// v97 · Rediseño visual del partido. Capa exclusivamente visual (CSS + JS) que se instala después de v96:
// no modifica reglas, probabilidades, resolución de acciones, cronómetro ni IA.
const V97_MATCH_STYLES = String.raw`
/* ==================== FÚTBOL ÚNICO v97 · REDISEÑO VISUAL DEL PARTIDO ====================
   Se activa sólo cuando la capa JS v97 termina de instalarse (clase html.fu97).
   Todos los selectores parten de .fu97 para no afectar la vista anterior si la capa no se instala. */
html.fu97{
 --k-ink:#05070b;--k-panel:#0d131b;--k-panel-2:#111925;--k-line:rgba(255,255,255,.075);--k-line-2:rgba(255,255,255,.13);
 --k-text:#eef3f8;--k-soft:#c3ccd8;--k-muted:#8b96a8;--k-lime:#c8ff2e;--k-lime-2:#e6ff9a;--k-cyan:#3ee6ff;
 --k-amber:#ffb01f;--k-red:#ff5263;--k-green:#5dffa8;--k-gold:#ffd25a;
 --k-font:"Inter","Segoe UI",Roboto,system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
 color-scheme:dark;
}
html.fu97,html.fu97 body{overflow-x:clip!important}
html.fu97 body{
 padding:10px 12px 16px!important;min-height:100dvh;
 background:radial-gradient(ellipse 80% 50% at 50% -10%,rgba(200,255,46,.06),transparent 60%),radial-gradient(ellipse 60% 60% at 100% 100%,rgba(62,230,255,.04),transparent 60%),var(--k-ink)!important;
 font-family:var(--k-font)!important;color:var(--k-text)!important;
}
.fu97 #app.fu97-app{width:min(1720px,100%)!important;max-width:none!important;margin:0 auto!important;--fu97-side-w:340px}

/* ---------------------------------------------------------------- barra superior / marcador */
.fu97 #app .head.fu97-topbar{
 position:relative;display:flex!important;align-items:stretch!important;gap:8px!important;flex-direction:row!important;flex-wrap:nowrap!important;
 margin:0 0 10px!important;padding:7px!important;min-height:0!important;
 border:1px solid var(--k-line)!important;border-radius:16px!important;
 background:linear-gradient(180deg,rgba(21,29,40,.97),rgba(10,14,20,.97))!important;
 box-shadow:0 14px 34px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.05)!important;
}
.fu97 #app .head.fu97-topbar::before,.fu97 #app .head.fu97-topbar::after{content:none!important;display:none!important}
.fu97 #app .fu97-nav{display:flex!important;flex:none;width:auto!important;min-width:0!important;margin:0!important}
.fu97 #app .fu97-nav a{
 display:inline-flex!important;align-items:center;gap:9px;height:100%;min-height:52px;padding:0 15px!important;
 border:1px solid var(--k-line)!important;border-radius:12px!important;background:#0a0f16!important;
 color:var(--k-soft)!important;font:800 11px/1.25 var(--k-font)!important;letter-spacing:.06em!important;text-transform:uppercase;
 max-width:210px;transition:border-color .15s,color .15s,background .15s;
}
.fu97 #app .fu97-nav a:hover{border-color:rgba(200,255,46,.45)!important;color:var(--k-lime-2)!important;background:#0d1520!important}
.fu97 #app .head>div{width:auto!important}
.fu97 #app .fu97-nav .fu-arrow{display:inline-flex;width:18px;height:18px;font-size:0!important;color:var(--k-lime)!important;line-height:1}
.fu97 #app .fu97-nav .fu-arrow svg{width:100%;height:100%}
.fu97 #app .fu97-nav-label{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.fu97 #app .scoreboard-block{display:flex!important;flex:1 1 0!important;min-width:0!important;gap:0!important;margin:0!important}
.fu97 #app .scoreboard-line{display:flex!important;flex:1 1 auto;align-items:stretch!important;gap:8px!important;flex-wrap:nowrap!important;min-width:0;margin:0!important}
.fu97 #app .fu97-scorebug{
 flex:1 1 auto;display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;align-items:stretch!important;
 gap:0!important;min-width:0;height:auto;min-height:52px;margin:0!important;padding:0!important;white-space:nowrap!important;
 border:1px solid var(--k-line)!important;border-radius:12px;overflow:hidden;background:#0a0f16;
}
.fu97 #app .fu97-sb-team{position:relative;display:flex;align-items:center;gap:11px;min-width:0;padding:0 16px}
.fu97 #app .fu97-home{justify-content:flex-end;background:linear-gradient(90deg,rgba(0,0,0,0) 15%,var(--fu97-c1s,rgba(34,102,204,.3)) 100%)}
.fu97 #app .fu97-away{justify-content:flex-start;background:linear-gradient(270deg,rgba(0,0,0,0) 15%,var(--fu97-c2s,rgba(217,60,53,.3)) 100%)}
.fu97 #app .fu97-home::before,.fu97 #app .fu97-away::after{content:"";position:absolute;top:0;bottom:0;width:5px}
.fu97 #app .fu97-home::before{left:0;background:var(--fu97-c1,#2266cc)}
.fu97 #app .fu97-away::after{right:0;background:var(--fu97-c2,#d93c35)}
.fu97 #app .fu97-sb-team b{
 display:block;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
 color:var(--k-text)!important;font:900 14px/1.15 var(--k-font)!important;letter-spacing:.045em!important;text-transform:uppercase;
}
.fu97 #app .fu97-sb-team b.tournament-team-label{display:flex!important;align-items:center;gap:8px}
.fu97 #app .fu97-sb-team .tournament-crest-inline{width:28px!important;height:28px!important;flex:none;object-fit:contain;filter:drop-shadow(0 2px 3px rgba(0,0,0,.5))}
.fu97 #app .fu97-away b.tournament-team-label{flex-direction:row-reverse}
.fu97 #app .fu97-name-full{min-width:0;overflow:hidden;text-overflow:ellipsis}
.fu97 #app .fu97-name-short{display:none}
/* Si los nombres no entran: en Torneo primero se quita la camiseta (queda el escudo); después, siglas en los dos equipos. */
.fu97 #app .fu97-scorebug.fu97-nochip .fu97-kitchip{display:none}
.fu97 #app .fu97-scorebug.fu97-codes .fu97-name-full{display:none}
.fu97 #app .fu97-scorebug.fu97-codes .fu97-name-short{display:inline}
.fu97 #app .fu97-kitchip{flex:none;width:34px;height:34px;filter:drop-shadow(0 3px 4px rgba(0,0,0,.5))}
.fu97 #app .fu97-kitchip svg,.fu97 #app .fu97-kits-preview svg{display:block;width:100%;height:100%}
.fu97 #app .fu97-sb-result{display:flex;align-items:center;justify-content:center;gap:2px;padding:0 6px;background:linear-gradient(180deg,#fbfcfe,#dde3ec);box-shadow:inset 0 -3px 0 rgba(0,0,0,.08)}
.fu97 #app .fu97-sb-result .score{
 display:grid!important;place-items:center!important;min-width:40px!important;height:auto!important;margin:0!important;padding:0 4px!important;
 border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important;
 color:#0a0f16!important;font:950 31px/1 var(--k-font)!important;letter-spacing:-.03em!important;font-variant-numeric:tabular-nums;
}
.fu97 #app .fu97-sb-result .score.fu97-bump{animation:fu97ScoreBump .9s cubic-bezier(.2,.9,.3,1.3)}
.fu97 #app .fu97-sb-sep{color:#7d8899;font:800 20px/1 var(--k-font)}
.fu97 #app .match-clock{
 flex:none;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:4px!important;
 min-width:116px;margin:0!important;padding:6px 14px!important;
 border:1px solid rgba(200,255,46,.24)!important;border-radius:12px!important;background:#0a0f16!important;box-shadow:inset 0 0 22px rgba(200,255,46,.05)!important;
}
.fu97 #app .match-clock-time{font:900 23px/1 var(--k-font)!important;letter-spacing:.01em!important;color:var(--k-lime)!important;font-variant-numeric:tabular-nums;text-shadow:0 0 18px rgba(200,255,46,.25)!important}
.fu97 #app .match-clock-state{
 justify-self:auto!important;align-self:center!important;max-width:150px;padding:2px 8px!important;
 border:1px solid rgba(200,255,46,.22)!important;border-radius:999px!important;background:rgba(200,255,46,.07)!important;
 color:var(--k-lime-2)!important;font:850 9px/1.4 var(--k-font)!important;letter-spacing:.1em!important;white-space:nowrap!important;overflow:hidden;text-overflow:ellipsis;
}
.fu97 #app .match-clock-side,.fu97 #app .match-clock-label,.fu97 #app .match-clock-hint{display:none!important}
.fu97 #app .match-clock.fu97-clock-break{border-color:rgba(62,230,255,.4)!important}
.fu97 #app .match-clock.fu97-clock-break .match-clock-time{color:var(--k-cyan)!important}
.fu97 #app .match-clock.fu97-clock-final{border-color:rgba(255,82,99,.45)!important}
.fu97 #app .match-clock.fu97-clock-final .match-clock-state{border-color:rgba(255,82,99,.4)!important;background:rgba(255,82,99,.12)!important;color:#ffc2c8!important}
.fu97 #app .fu97-turnbox{
 --fu97-turn-c:var(--k-lime);flex:none;display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto;align-content:center;column-gap:10px;row-gap:6px;
 min-width:190px;padding:7px 14px;border:1px solid var(--k-line);border-radius:12px;background:#0a0f16;
}
.fu97 #app .fu97-turnbox[data-team="2"]{--fu97-turn-c:var(--k-amber)}
.fu97 #app .fu97-turn-badge{grid-column:1/3;justify-self:start;padding:4px 10px 3px;border-radius:7px;background:var(--k-lime);color:#081002;font:950 12px/1.2 var(--k-font);letter-spacing:.1em;white-space:nowrap;box-shadow:0 0 18px rgba(200,255,46,.25)}
.fu97 #app .fu97-turnbox.is-cpu .fu97-turn-badge{background:var(--k-amber);color:#1d1100;box-shadow:0 0 18px rgba(255,176,31,.28)}
.fu97 #app .fu97-turnbox.is-thinking .fu97-turn-badge::after{content:"…"}
.fu97 #app .fu97-turnbox.is-manual .fu97-turn-badge{background:var(--k-cyan);color:#001318}
.fu97 #app .fu97-turnbox.is-break .fu97-turn-badge{background:#9fb1c8;color:#08101a;box-shadow:none}
.fu97 #app .fu97-turnbox.is-final .fu97-turn-badge{background:var(--k-red);color:#fff;box-shadow:0 0 18px rgba(255,82,99,.3)}
.fu97 #app .fu97-turnbox.is-goal .fu97-turn-badge{background:var(--k-gold);color:#241800}
.fu97 #app .fu97-pips{display:flex;align-items:center;gap:3px;flex-wrap:wrap;max-width:132px}
.fu97 #app .fu97-pips i{width:8px;height:5px;border-radius:3px;background:rgba(255,255,255,.13)}
.fu97 #app .fu97-pips i.is-done{background:var(--fu97-turn-c);opacity:.55}
.fu97 #app .fu97-pips i.is-now{background:var(--fu97-turn-c);box-shadow:0 0 10px var(--fu97-turn-c)}
.fu97 #app .fu97-turn-sub{align-self:center;color:var(--k-muted);font:750 10px/1.2 var(--k-font);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:150px}
.fu97 #app .fu97-turn-sub.fu97-off{display:none}

/* ---------------------------------------------------------------- cuerpo: cancha + panel lateral */
.fu97 #app .fu97-main{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-items:start}
.fu97 #app .fu97-pitchcol{min-width:0;display:flex;flex-direction:column;gap:10px}
.fu97 #app .fu97-side{min-width:0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:10px;align-content:start}
@media (min-width:1100px){
 .fu97 #app .fu97-main{grid-template-columns:minmax(0,1fr) var(--fu97-side-w)}
 .fu97 #app .fu97-main{align-items:stretch}
 .fu97 #app .fu97-side{display:flex;flex-direction:column;align-self:stretch;contain:size;min-height:320px;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#2a3442 transparent;padding-right:2px}
}
@media (min-width:1500px){.fu97 #app.fu97-app{--fu97-side-w:360px}}
@media (min-width:700px) and (max-width:1099.98px) and (orientation:landscape){
 .fu97 #app.fu97-app{--fu97-side-w:290px}
 .fu97 #app .fu97-main{grid-template-columns:minmax(0,1fr) var(--fu97-side-w)}
 .fu97 #app .fu97-main{align-items:stretch}
 .fu97 #app .fu97-side{display:flex;flex-direction:column;align-self:stretch;contain:size;min-height:300px;overflow:auto;scrollbar-width:thin}
}

/* ---------------------------------------------------------------- tablero y cancha */
.fu97 #app .board{
 position:relative;display:flex!important;flex-direction:column!important;gap:8px;
 width:var(--fu97-board-w,100%)!important;max-width:100%!important;min-width:0;margin:0 auto!important;padding:8px!important;
 border:1px solid var(--k-line)!important;border-radius:18px!important;overflow:visible!important;filter:none!important;
 background:linear-gradient(180deg,#121a24,#090d13)!important;
 box-shadow:0 22px 50px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.05)!important;animation:fu97BoardIn .45s cubic-bezier(.2,.8,.2,1) backwards;
}
.fu97 #app .board::before,.fu97 #app .board::after{content:none!important;display:none!important}
.fu97 #app.match-finished .board{filter:none!important}
.fu97 #app .fu97-pitchframe{position:relative;min-width:0;border-radius:12px;overflow:hidden;background:#17482a;box-shadow:0 0 0 1px rgba(255,255,255,.07),0 10px 26px rgba(0,0,0,.4)}
.fu97 #app .board .pitch-scroll-area{position:relative!important;display:block!important;width:100%!important;max-width:100%!important;height:auto!important;margin:0!important;overflow:hidden;border-radius:0!important;z-index:1!important}
.fu97 #app .board:not(.fu97-vertical):not(.fu97-zoom) .pitch-scroll-area #field{
 display:block!important;width:100%!important;min-width:0!important;max-width:100%!important;height:auto!important;max-height:none!important;
 margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;transform:none!important;
}
.fu97 #app .board.fu97-zoom .pitch-scroll-area{overflow-x:auto!important;overflow-y:hidden!important;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:#3a4a3c #0b1015}
.fu97 #app .board.fu97-zoom .pitch-scroll-area #field{border:0!important;border-radius:0!important;box-shadow:none!important}
/* v98.32: proporción sincronizada con el viewBox recortado de 2690×1700. */
.fu97 #app .board.fu97-vertical .pitch-scroll-area{container-type:inline-size;aspect-ratio:1700/2690;overflow:hidden!important;overflow:clip!important}
.fu97 #app .board.fu97-vertical .pitch-scroll-area #field{
 position:absolute!important;left:50%!important;top:50%!important;display:block!important;
 width:calc(var(--fu97-cw,100cqw)*2690/1700)!important;height:var(--fu97-cw,100cqw)!important;
 min-width:0!important;max-width:none!important;min-height:0!important;max-height:none!important;margin:0!important;
 border:0!important;border-radius:0!important;box-shadow:none!important;
 transform:translate(-50%,-50%) rotate(-90deg)!important;transform-origin:50% 50%!important;
}
.fu97 #app .mobile-pitch-hint{display:none!important}
.fu97 #app .board.fu97-zoom~.mobile-pitch-hint{display:block!important;margin:-2px 4px 0!important;color:var(--k-muted)!important;font:700 11px/1.4 var(--k-font)!important;text-align:center}

/* repetición del gol */
.fu97 #app .fu97-pitchframe::before,.fu97 #app .fu97-pitchframe::after{content:"";position:absolute;left:0;right:0;height:0;z-index:4;background:#000;transition:height .35s ease;pointer-events:none}
.fu97 #app .fu97-pitchframe::before{top:0}
.fu97 #app .fu97-pitchframe::after{bottom:0}
.fu97 #app .board.fu97-replay .fu97-pitchframe::before,.fu97 #app .board.fu97-replay .fu97-pitchframe::after{height:7%}
.fu97 #app .fu97-replay-tag{position:absolute;z-index:5;top:calc(7% + 10px);left:12px;display:flex;align-items:center;gap:8px;padding:6px 12px;border-radius:8px;background:rgba(5,8,12,.82);border:1px solid rgba(255,210,90,.5);color:var(--k-gold);font:950 11px/1 var(--k-font);letter-spacing:.2em;opacity:0;transform:translateY(-6px);transition:opacity .25s,transform .25s;pointer-events:none}
.fu97 #app .fu97-replay-tag i{width:8px;height:8px;border-radius:50%;background:var(--k-red);box-shadow:0 0 10px var(--k-red)}
.fu97 #app .board.fu97-replay .fu97-replay-tag{opacity:1;transform:none}

/* ---------------------------------------------------------------- SVG: césped, líneas y arcos */
/* La textura v97 ya trae su color final: el filtro CSS de la foto anterior se desactiva
   (combinado con una imagen grande obliga a re-rasterizar toda la cancha en cada cuadro). */
/* Fondo estático (textura, líneas y arcos) en su propia capa: se rasteriza una vez y no se
   vuelve a pintar cuando se mueven fichas, balón o guías. */
.fu97 #field #pitchTexture,.fu97 #field #grass{will-change:transform}
/* Fichas y balón en capas propias: moverlos no obliga a repintar césped, casillas ni paneles. */
.fu97 #field #players,.fu97 #field #ball{will-change:transform}
.fu97 #field #gL,.fu97 #field #gR{fill:transparent!important;stroke:none!important;cursor:default}
.fu97 #field #gL.active,.fu97 #field #gR.active{cursor:pointer}
.fu97 #field #gL.fu97-target,.fu97 #field #gR.fu97-target{fill:rgba(255,210,90,.15)!important;stroke:#ffe08a!important;stroke-width:3.5!important;stroke-dasharray:12 8}
.fu97 #field .cell{fill:transparent!important;stroke:rgba(255,255,255,.05)!important;stroke-width:1!important;transition:fill .12s ease}
.fu97 #field .cell.goal{fill:transparent!important;stroke:rgba(255,255,255,.05)!important}
.fu97 #field .cell.pl{fill:url(#fu97MoveDot)!important;stroke:rgba(200,255,46,.3)!important;stroke-width:1.5!important;cursor:pointer}
.fu97 #field .cell.pl.duel{fill:url(#fu97DuelMark)!important;stroke:rgba(255,154,60,.85)!important;stroke-width:3!important}
.fu97 #field .cell.sel{fill:rgba(200,255,46,.07)!important;stroke:rgba(200,255,46,.75)!important;stroke-width:3!important}
.fu97 #field .cell.fu97-reach{cursor:crosshair}
.fu97 #field .cell.advisor-target{fill:rgba(62,230,255,.16)!important;stroke:var(--k-cyan)!important;stroke-width:3!important}
@media (hover:hover) and (pointer:fine){
 .fu97 #field .cell.pl:hover{fill:rgba(200,255,46,.24)!important;stroke:#eaffb5!important;stroke-width:3!important}
 .fu97 #field .cell.pl.duel:hover{fill:rgba(255,138,31,.35)!important;stroke:#ffd0a0!important}
 .fu97 #field .cell.fu97-reach:hover{fill:rgba(62,230,255,.16)!important;stroke:rgba(111,240,255,.85)!important;stroke-width:2.5!important}
}
.fu97 #field .ballTrail,.fu97 #field #ballTrail{display:none!important}
.fu97 #field #fuV96ThreatLayer{opacity:.75}


/* v98.53 · ajustes visuales solicitados: arco más estrecho y números ampliados */
.fu97 #field #gL,.fu97 #field #gR{transform-box:fill-box;transform-origin:center;transform:scaleX(.72)}
.fu97 #field .goal-frame,.fu97 #field .goal-posts,.fu97 #field .goal-net{transform-box:fill-box;transform-origin:center;transform:scaleX(.78)}
/* ---------------------------------------------------------------- fichas */
.fu97 #field .player{cursor:pointer;filter:none!important;transition:none!important}
.fu97 #field .player:hover,.fu97 #field .player.sel,.fu97 #field .player.fu-v963-action-focus{filter:none!important}
.fu97 #field .fu97-tk{--fu97-sel:var(--k-lime)}
.fu97 #field .fu97-tk.fu97-t2{--fu97-sel:var(--k-amber)}
.fu97 #field .fu97-tk-shadow{fill:url(#fu97GroundShadow);filter:blur(1.25px);opacity:.9}
.fu97 #field .fu97-tk-body{pointer-events:none;overflow:visible}
.fu97 #field .fu97-player-sprite{overflow:visible;image-rendering:auto;filter:saturate(1.32) contrast(1.14) brightness(1.05) drop-shadow(0 1.6px 1.8px rgba(0,0,0,.42))}
.fu97 #field .fu97-player-art{pointer-events:none}
.fu97 #field .fu97-tk-done{pointer-events:none}
.fu97 #field .discipline-yellow-card{filter:drop-shadow(0 1px 2px rgba(0,0,0,.65))}
@media(max-width:680px){.fu97 #app .board.fu97-vertical #field .fu97-player-sprite{transform-box:fill-box;transform-origin:center;transform:scale(1.06)}}
.fu97 #field .fu97-tk-halo{fill:var(--fu97-sel);fill-opacity:0}
.fu97 #field .fu97-tk-sel{fill:none;stroke:var(--fu97-sel);stroke-width:4.5;stroke-dasharray:15 9;stroke-linecap:round;stroke-opacity:0}
.fu97 #field .fu97-tk-must{fill:none;stroke:#ffffff;stroke-width:3.5;stroke-dasharray:6 7;stroke-linecap:round;stroke-opacity:0}
.fu97 #field .fu97-tk-rim{stroke:rgba(0,0,0,.5);stroke-width:1.6}
.fu97 #field .fu97-tk-base{stroke:rgba(0,0,0,.18);stroke-width:1}
.fu97 #field .fu97-tk-collar{fill:none;stroke-width:3.4;stroke-linecap:round}
.fu97 #field .fu97-tk-gk{stroke-width:2.4;stroke-dasharray:5 4;opacity:.75}
.fu97 #field .fu97-tk-shade,.fu97 #field .fu97-tk-gloss,.fu97 #field .fu97-tk-kit{pointer-events:none}
.fu97 #field .fu97-tk-num{font:900 52px/1 var(--k-font);text-anchor:middle;letter-spacing:-.05em;stroke-width:5px;paint-order:stroke fill;stroke-linejoin:round;pointer-events:none}
.fu97 #field .fu97-tk-done{display:none;pointer-events:none}
.fu97 #field .fu97-tk-done circle{fill:#0b121b;stroke:var(--fu97-sel);stroke-width:2}
.fu97 #field .fu97-tk-done path{fill:none;stroke:var(--fu97-sel);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.fu97 #field .player.sel .fu97-tk-sel{stroke-opacity:1}
.fu97 #field .player.sel .fu97-tk-halo{fill-opacity:.2}
.fu97 #field .player.fu97-carrier:not(.sel) .fu97-tk-halo{fill-opacity:.1;fill:#ffffff}
.fu97 #field .player.fu-v963-action-focus .fu97-tk-halo{fill-opacity:.3}
.fu97 #field .player.fu97-must .fu97-tk-must{stroke-opacity:.95}
.fu97 #field .player.fu97-acted .fu97-tk-body{opacity:.42}
.fu97 #field .player.fu97-acted .fu97-tk-shadow{fill-opacity:.5}
.fu97 #field .player.fu97-acted .fu97-tk-done{display:inline}
.fu97 #field .player.advisor-player .fu97-tk-sel{stroke-opacity:1;stroke:var(--k-cyan)}
@media (hover:hover) and (pointer:fine){
 .fu97 #field .player:hover .fu97-tk-halo{fill-opacity:.28}
}

/* ---------------------------------------------------------------- balón */
.fu97 #field .fu97-ball{pointer-events:none}
.fu97 #field .fu97-ball-shadow{fill:url(#fu97GroundShadow)}
.fu97 #field .fu97-ball-panel{fill:#151a1d;stroke:#3a4247;stroke-width:.5}
.fu97 #field .fu97-ball-seam{stroke:#8b9499;stroke-width:.8;stroke-linecap:round}
.fu97 #field .fu97-ball-edge{fill:none;stroke:rgba(10,20,15,.6);stroke-width:1.1}
.fu97 #field .fu97-ball-glint{fill:#ffffff;opacity:.7}

/* ---------------------------------------------------------------- guía táctica */
.fu97 #field .fu97-zone{stroke:none;fill-opacity:.1}
.fu97 #field .fu97-zone.is-p5{fill:#5dffa8;fill-opacity:.15}
.fu97 #field .fu97-zone.is-p4{fill:#c8ff2e;fill-opacity:.11}
.fu97 #field .fu97-zone.is-p3{fill:#ffe066;fill-opacity:.08}
.fu97 #field .fu97-zone.is-p2{fill:#ffa04a;fill-opacity:.06}
.fu97 #field .fu97-zone.is-p1{fill:#ff5d6c;fill-opacity:.06}
.fu97 #field .fu97-zone-edge{fill:none;stroke-width:3;stroke-dasharray:3 9;stroke-linecap:round;stroke-opacity:.75}
.fu97 #field .fu97-zone-edge.is-p5{stroke:#5dffa8}
.fu97 #field .fu97-zone-edge.is-p4{stroke:#c8ff2e}
.fu97 #field .fu97-zone-edge.is-p3{stroke:#ffe066}
.fu97 #field .fu97-zone-edge.is-p2{stroke:#ffa04a}
.fu97 #field .fu97-zone-edge.is-p1{stroke:#ff5d6c}
.fu97 #field .fu97-lane{fill:none;stroke-width:3.2;stroke-linecap:round;stroke-dasharray:3 11;opacity:.75}
.fu97 #field .fu97-lane.is-free{stroke:var(--k-green)}
.fu97 #field .fu97-lane.is-risk{stroke:#ffc04a}
.fu97 #field .fu97-lane.is-blocked,.fu97 #field .fu97-lane.is-offside{stroke:#ff6b78;opacity:.45}
.fu97 #field .fu97-rcv circle{fill:none;stroke-width:4.5}
.fu97 #field .fu97-rcv.is-free>circle{stroke:var(--k-green)}
.fu97 #field .fu97-rcv.is-risk>circle{stroke:#ffc04a;stroke-dasharray:10 6}
.fu97 #field .fu97-rcv.is-blocked>circle,.fu97 #field .fu97-rcv.is-offside>circle{stroke:#ff5d6c;stroke-opacity:.9}
.fu97 #field .fu97-rcv-icon circle{fill:#ff5d6c!important;stroke:#2a0b10!important;stroke-width:2!important}
.fu97 #field .fu97-rcv-icon path{fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}
.fu97 #field .fu97-pill rect{fill:rgba(6,10,15,.88);stroke-width:2}
.fu97 #field .fu97-pill text{font:900 17px/1 var(--k-font);letter-spacing:.05em;fill:#f2f6fa}
.fu97 #field .fu97-rcv-pill.is-free rect{stroke:rgba(93,255,168,.75)}
.fu97 #field .fu97-rcv-pill.is-free text{fill:#b9ffd8}
.fu97 #field .fu97-rcv-pill.is-free.is-p3 text,.fu97 #field .fu97-rcv-pill.is-free.is-p2 text{fill:#ffe9b0}
.fu97 #field .fu97-rcv-pill.is-free.is-p1 text{fill:#ffc2c8}
.fu97 #field .fu97-rcv-pill.is-risk rect{stroke:rgba(255,192,74,.8)}
.fu97 #field .fu97-rcv-pill.is-risk text{fill:#ffe1a6}
.fu97 #field .fu97-rcv-pill.is-blocked rect,.fu97 #field .fu97-rcv-pill.is-offside rect{stroke:rgba(255,93,108,.8)}
.fu97 #field .fu97-rcv-pill.is-blocked text,.fu97 #field .fu97-rcv-pill.is-offside text{fill:#ffc2c8}
.fu97 #field .fu97-rcv-pill{opacity:.95}
/* Decoraciones de pase y remate: sólo informan. Los clics tienen que llegar a la casilla o a la ficha de abajo,
   que son las que el motor escucha (onCell / clickP). */
.fu97 #field .fu97-zones,.fu97 #field .fu97-lanes,.fu97 #field .fu97-receivers,.fu97 #field .fu97-shots{pointer-events:none}
.fu97 #field .fu97-shot{stroke-width:4;stroke-linecap:round;stroke-dasharray:1 12;opacity:.9}
.fu97 #field .fu97-shot.is-none{stroke:#ff8a95;opacity:.5}
.fu97 #field .fu97-shot.is-low{stroke:#ffb35c}
.fu97 #field .fu97-shot.is-mid{stroke:#ffe066}
.fu97 #field .fu97-shot.is-high{stroke:#c8ff2e;stroke-width:5}
.fu97 #field .fu97-shot-end{stroke-width:3.5;fill:rgba(6,10,15,.55)}
.fu97 #field .fu97-shot-end.is-none{stroke:#ff8a95}
.fu97 #field .fu97-shot-end.is-low{stroke:#ffb35c}
.fu97 #field .fu97-shot-end.is-mid{stroke:#ffe066}
.fu97 #field .fu97-shot-end.is-high{stroke:#c8ff2e;fill:rgba(200,255,46,.22)}
.fu97 #field .fu97-shot-pill rect{stroke-width:2.4}
.fu97 #field .fu97-shot-pill text{font-size:20px}
.fu97 #field .fu97-shot-pill.is-none rect{stroke:rgba(255,138,149,.7)}
.fu97 #field .fu97-shot-pill.is-none text{fill:#ffc2c8}
.fu97 #field .fu97-shot-pill.is-low rect{stroke:#ffb35c}
.fu97 #field .fu97-shot-pill.is-mid rect{stroke:#ffe066}
.fu97 #field .fu97-shot-pill.is-high rect{stroke:#c8ff2e;fill:rgba(28,40,6,.92)}
.fu97 #field .fu97-shot-pill.is-high text{fill:#eaffb5}
/* vista previa (escritorio) */
.fu97 #field .fu97-pv-move{stroke:#e6ff9a;stroke-width:5;stroke-linecap:round;stroke-dasharray:9 9}
.fu97 #field .fu97-pv-move.is-duel{stroke:#ff9a3c}
.fu97 #field .fu97-pv-ghost{fill:rgba(200,255,46,.1);stroke:#e6ff9a;stroke-width:3;stroke-dasharray:6 6}
.fu97 #field .fu97-pv-pass{fill:none;stroke:#6ff0ff;stroke-width:5;stroke-linecap:round;stroke-dasharray:10 9}
.fu97 #field .fu97-pv-pass.is-p5,.fu97 #field .fu97-pv-pass.is-p4{stroke:#6ff0ff}
.fu97 #field .fu97-pv-pass.is-p3{stroke:#ffe066}
.fu97 #field .fu97-pv-pass.is-p2{stroke:#ffb35c}
.fu97 #field .fu97-pv-pass.is-p1{stroke:#ff8a95}
.fu97 #field .fu97-pv-pass.is-blocked{stroke:#ff5d6c}
.fu97 #field .fu97-pv-pass.is-goal{stroke:#ffe08a}
.fu97 #field .fu97-pv-target{fill:rgba(111,240,255,.18);stroke:#6ff0ff;stroke-width:3}
.fu97 #field .fu97-pv-target.is-p3{fill:rgba(255,224,102,.2);stroke:#ffe066}
.fu97 #field .fu97-pv-target.is-p2{fill:rgba(255,179,92,.2);stroke:#ffb35c}
.fu97 #field .fu97-pv-target.is-p1{fill:rgba(255,138,149,.18);stroke:#ff8a95}
.fu97 #field .fu97-pv-target.is-goal{fill:rgba(255,224,138,.22);stroke:#ffe08a}
.fu97 #field .fu97-pv-target.is-blocked{fill:rgba(255,93,108,.25);stroke:#ff5d6c}
.fu97 #field .fu97-pv-threat{fill:none;stroke:#ffc04a;stroke-width:4;stroke-dasharray:6 5}
.fu97 #field .fu97-pv-threat.is-blocked{stroke:#ff5d6c}
.fu97 #field .fu97-pv-pill rect{stroke:#e6ff9a}
.fu97 #field .fu97-pv-pill.is-duel rect{stroke:#ff9a3c}
.fu97 #field .fu97-pv-pill.is-p5 rect,.fu97 #field .fu97-pv-pill.is-p4 rect{stroke:#6ff0ff}
.fu97 #field .fu97-pv-pill.is-p3 rect{stroke:#ffe066}
.fu97 #field .fu97-pv-pill.is-p2 rect{stroke:#ffb35c}
.fu97 #field .fu97-pv-pill.is-p1 rect,.fu97 #field .fu97-pv-pill.is-blocked rect{stroke:#ff5d6c}
.fu97 #field .fu97-pv-pill.is-goal rect{stroke:#ffe08a}
/* huellas, estelas y efectos */
.fu97 #field .fu97-ghost{stroke-width:4;stroke-linecap:round;stroke-dasharray:4 10;stroke-opacity:.6}
.fu97 #field .fu97-ghost.is-persist{stroke-opacity:.72}
.fu97 #field .fu97-ghost-step circle{fill:rgba(8,12,18,.92);stroke:#ffc04a;stroke-width:2.6}
.fu97 #field .fu97-ghost-step text{font:950 17px/1 var(--k-font);fill:#ffe1a6}
.fu97 #app .board.fu97-anim #field .cell.pl,.fu97 #app .board.fu97-anim #field .cell.sel,.fu97 #app .board.fu97-anim #field .cell.fu97-reach{fill:transparent!important;stroke:rgba(255,255,255,.05)!important;stroke-width:1!important}
.fu97 #app .board.fu97-anim #field #gL.fu97-target,.fu97 #app .board.fu97-anim #field #gR.fu97-target{fill:transparent!important;stroke:none!important}
.fu97 #field .fu97-ghost-t1{stroke:#d8ff6a}
.fu97 #field .fu97-ghost-t2{stroke:#ffc04a}
.fu97 #field .fu97-streak{fill-opacity:.28;transition:fill-opacity .3s ease}
.fu97 #field .fu97-streak.is-out,.fu97 #field .fu97-trail.is-out{fill-opacity:0}
.fu97 #field .fu97-trail{fill:#ffffff;fill-opacity:.55;transition:fill-opacity .2s ease}
.fu97 #field .fu97-trail.is-hot{fill:#ffe08a;fill-opacity:.75}
.fu97 #field .fu97-dust circle{fill-opacity:0}
.fu97 #field .fu97-spark line{stroke-width:3.5;stroke-linecap:round}
.fu97 #field .fu97-badge-fx rect{fill:rgba(6,10,15,.9);stroke-width:2.5}
.fu97 #field .fu97-badge-fx text{font:950 21px/1 var(--k-font);letter-spacing:.08em}
.fu97 #field .fu97-badge-fx.is-save rect{stroke:#6ff0ff}
.fu97 #field .fu97-badge-fx.is-save text{fill:#c9f9ff}
.fu97 #field .fu97-badge-fx.is-miss rect{stroke:#ff8a95}
.fu97 #field .fu97-badge-fx.is-miss text{fill:#ffd0d5}
.fu97 #app .board.fu97-vertical .fu97-pv-pill{display:none}
.fu97 #app .board.fu97-vertical .fu97-pill text{font-size:24px}
.fu97 #app .board.fu97-vertical .fu97-pill rect{stroke-width:2.6}

/* ---------------------------------------------------------------- barra de acción */
.fu97 #app .fu97-actionbar{
 display:grid;grid-template-columns:minmax(200px,auto) minmax(0,1fr) auto;align-items:center;gap:10px;min-width:0;
 padding:7px;border:1px solid var(--k-line);border-radius:13px;background:rgba(7,11,16,.92);
}
.fu97 #app .fu97-ab-player{display:flex;align-items:center;gap:10px;min-width:0;padding:4px 12px 4px 5px;border-radius:10px;background:var(--k-panel-2);border:1px solid var(--k-line)}
.fu97 #app .fu97-ab-token{flex:none;width:38px;height:38px;color:#4c5a6d}
.fu97 #app .fu97-ab-token svg{display:block;width:100%;height:100%}
.fu97 #app .fu97-mini-num{font:900 26px/1 var(--k-font);letter-spacing:-.05em;stroke-width:3.6px;paint-order:stroke fill;stroke-linejoin:round}
.fu97 #app .fu97-ab-text{display:grid;gap:2px;min-width:0}
.fu97 #app .fu97-ab-text strong{color:var(--k-text);font:900 13px/1.2 var(--k-font);letter-spacing:.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fu97 #app .fu97-ab-text small{color:var(--k-muted);font:700 11px/1.25 var(--k-font);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.fu97 #app .fu97-ab-msg{position:relative;display:flex;align-items:center;gap:8px;min-width:0;min-height:46px;padding:5px 12px;border-radius:10px;border:1px solid transparent;background:rgba(255,255,255,.025);transition:border-color .2s,background .2s}
.fu97 #app .fu97-ab-msg #msg{
 flex:1 1 auto;min-width:0;min-height:0!important;margin:0!important;padding:0!important;border:0!important;background:none!important;
 color:var(--k-soft)!important;font:650 12.5px/1.45 var(--k-font)!important;
 display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
}
.fu97 #app .fu97-ab-msg.is-open #msg{display:block;-webkit-line-clamp:unset;overflow:visible}
.fu97 #app .fu97-ab-msg.is-flash{animation:fu97MsgFlash .7s ease-out}
.fu97 #app .fu97-ab-msg.is-warn{border-color:rgba(255,176,31,.4);background:rgba(255,176,31,.07)}
.fu97 #app .fu97-ab-msg.is-warn #msg{color:#ffe0a6!important}
.fu97 #app .fu97-ab-msg.is-event{border-color:rgba(62,230,255,.35);background:rgba(62,230,255,.06)}
.fu97 #app .fu97-ab-msg.is-event #msg{color:#d6f9ff!important}
.fu97 #app .fu97-msg-more{flex:none;align-self:flex-end;padding:3px 8px;border:1px solid var(--k-line-2);border-radius:999px;background:transparent;color:var(--k-muted);font:800 10px/1.2 var(--k-font);letter-spacing:.04em;cursor:pointer}
.fu97 #app .fu97-msg-more:hover{color:var(--k-text);border-color:rgba(255,255,255,.3)}
.fu97 #app .fu97-ab-tools{flex:none;display:flex;align-items:stretch;gap:6px}
.fu97 #app .fu97-ab-tools .fu97-tool{height:auto!important;min-height:44px!important}
.fu97 #app .fu97-tool{
 position:static!important;inset:auto!important;transform:none!important;display:inline-flex!important;align-items:center;justify-content:center;gap:6px;
 width:auto!important;min-width:46px!important;height:46px!important;min-height:46px!important;margin:0!important;padding:0 12px!important;
 border:1px solid var(--k-line-2)!important;border-radius:11px!important;background:var(--k-panel-2)!important;color:var(--k-soft)!important;
 font:800 11px/1 var(--k-font)!important;letter-spacing:.04em;opacity:1!important;box-shadow:none!important;cursor:pointer;
 backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
}
.fu97 #app .fu97-tool[hidden]{display:none!important}
.fu97 #app .fu97-tempo-toggle{min-width:91px!important;padding:0 9px!important;gap:6px!important;white-space:nowrap!important;font-weight:950!important}
.fu97 #app .fu97-tempo-toggle svg{width:17px;height:17px;flex:none}
.fu97 #app .fu97-tempo-toggle.is-fast{border-color:rgba(200,255,46,.58)!important;color:var(--k-lime)!important;background:rgba(200,255,46,.08)!important}
.fu97 #app .fu97-tempo-toggle:not(.is-fast){color:var(--k-soft)!important}
.fu97 #app .fu97-tool:hover{border-color:rgba(62,230,255,.45)!important;color:var(--k-text)!important}
.fu97 #app .fu97-tool svg{width:20px;height:20px;flex:none}
.fu97 #app .fu97-tool .fs-icon{display:flex;font-size:0!important}
.fu97 #app .fu97-actionbar #ballModeControl{
 position:relative!important;inset:auto!important;transform:none!important;display:inline-flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;gap:10px!important;
 width:auto!important;min-width:150px;height:52px!important;min-height:52px!important;margin:0!important;padding:0 18px 0 8px!important;
 border:1.5px solid rgba(200,255,46,.6)!important;border-radius:13px!important;background:linear-gradient(180deg,#1b2a0d,#0f1808)!important;
 color:var(--k-lime-2)!important;box-shadow:0 8px 20px rgba(0,0,0,.35)!important;opacity:1!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;
 cursor:pointer;transition:background .15s,border-color .15s,transform .15s;
}
.fu97 #app .fu97-actionbar #ballModeControl:not(:disabled):not(.active){box-shadow:0 0 0 3px rgba(200,255,46,.14),0 8px 20px rgba(0,0,0,.35)!important}
.fu97 #app .fu97-actionbar #ballModeControl[hidden]{display:inline-flex!important}
.fu97 #app .fu97-actionbar #ballModeControl:disabled{border-color:var(--k-line-2)!important;background:var(--k-panel-2)!important;color:#5d687a!important;box-shadow:none!important;cursor:not-allowed}
.fu97 #app .fu97-actionbar #ballModeControl:disabled .ball-fab-icon{opacity:.35;filter:grayscale(1)}
.fu97 #app .fu97-actionbar #ballModeControl:not(:disabled):hover{transform:translateY(-1px);border-color:var(--k-lime)!important}
.fu97 #app .fu97-actionbar #ballModeControl.active{background:var(--k-lime)!important;border-color:var(--k-lime)!important;color:#091200!important;box-shadow:0 0 22px rgba(200,255,46,.35)!important}
.fu97 #app .fu97-actionbar .ball-fab-icon{width:36px!important;height:36px!important;flex:none;filter:drop-shadow(0 2px 3px rgba(0,0,0,.4))}
.fu97 #app .fu97-actionbar .ball-fab-label{display:block!important;position:static!important;transform:none!important;font:950 13px/1 var(--k-font)!important;letter-spacing:.1em!important;color:inherit!important;background:none!important;padding:0!important;border:0!important;box-shadow:none!important;white-space:nowrap}

/* ---------------------------------------------------------------- panel lateral */
.fu97 #app .fu97-card{min-width:0;margin:0;padding:12px 14px;border:1px solid var(--k-line);border-radius:14px;background:linear-gradient(180deg,rgba(17,24,34,.96),rgba(11,16,23,.96));box-shadow:0 10px 26px rgba(0,0,0,.28)}
.fu97 #app .fu97-card-title{display:flex;align-items:center;gap:8px;margin:0 0 10px;color:var(--k-soft);font:900 11px/1.2 var(--k-font);letter-spacing:.14em;text-transform:uppercase}
.fu97 #app .fu97-card-title svg{width:16px;height:16px;flex:none;color:var(--k-lime)}
.fu97 #app .fu97-card-status #turn{display:block!important;margin:0 0 8px!important;padding:0!important;color:var(--k-text)!important;font:750 13px/1.45 var(--k-font)!important;white-space:normal!important}
.fu97 #app .fu97-card-status #state{display:flex!important;align-items:center;gap:8px;margin:0 0 8px!important;padding:8px 10px!important;border-radius:9px;background:rgba(255,255,255,.035);border:1px solid var(--k-line);color:var(--k-soft)!important;font:700 12px/1.35 var(--k-font)!important}
.fu97 #app .fu97-card-status #state::before{content:"";width:14px;height:14px;flex:none;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0 35%,#cfd6d2 70%,#8e9893 100%);box-shadow:0 1px 2px rgba(0,0,0,.5)}
.fu97 #app .fu97-card-status #cpuStatus{margin:0!important;padding:8px 10px!important;border-radius:9px!important;border:1px solid rgba(93,255,168,.2)!important;background:rgba(93,255,168,.06)!important;color:#bdf5d4!important;font:700 11.5px/1.45 var(--k-font)!important}
.fu97 #app .fu97-card-status #cpuStatus.thinking{border-color:rgba(255,176,31,.35)!important;background:rgba(255,176,31,.08)!important;color:#ffe0a6!important}
.fu97 #app .fu97-card-status #cpuStatus.paused{border-color:rgba(255,82,99,.35)!important;background:rgba(255,82,99,.08)!important;color:#ffc2c8!important}
.fu97 #app .fu97-legend{display:grid;grid-template-columns:1fr 1fr;gap:8px 10px;margin:0;padding:0;list-style:none}
.fu97 #app .fu97-legend li{display:flex;align-items:flex-start;gap:8px;min-width:0}
.fu97 #app .fu97-legend svg{width:22px;height:22px;flex:none;margin-top:1px}
.fu97 #app .fu97-legend span{display:grid;gap:1px;min-width:0}
.fu97 #app .fu97-legend b{color:var(--k-text);font:850 11.5px/1.2 var(--k-font)}
.fu97 #app .fu97-legend small{color:var(--k-muted);font:600 10.5px/1.3 var(--k-font)}
.fu97 #app .fu97-card-story{padding:0;overflow:hidden}
.fu97 #app .fu97-card-story .match-narrative{display:block!important;margin:0!important;padding:12px 14px!important;border:0!important;border-radius:0!important;background:none!important;max-height:none!important}
.fu97 #app .fu97-card-story .match-narrative-head{margin:0 0 8px!important;color:var(--k-soft)!important;font:900 11px/1.2 var(--k-font)!important;letter-spacing:.14em!important}
.fu97 #app .fu97-card-story .match-narrative-list{max-height:210px!important;overflow:auto!important;scrollbar-width:thin;scrollbar-color:#2a3442 transparent;color:#c5cfde!important;font-size:12px!important;line-height:1.45!important}
.fu97 #app .fu97-card-match .controls{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;width:100%!important;margin:0!important;padding:0!important;border:0!important;background:none!important;box-shadow:none!important}
.fu97 #app .fu97-card-match .controls .cpu-auto-tactics{grid-column:1/-1;justify-content:flex-start;min-height:36px;margin:0!important;padding:8px 10px!important;border:1px solid rgba(93,255,168,.22)!important;border-radius:9px!important;background:rgba(93,255,168,.06)!important;color:#bdf5d4!important;font:800 11.5px/1.2 var(--k-font)!important}
.fu97 #app .fu97-card-match .controls button{min-height:42px!important;width:100%!important;margin:0!important;padding:8px 10px!important;border-radius:10px!important;border:1px solid var(--k-line-2)!important;background:var(--k-panel-2)!important;color:var(--k-text)!important;font:850 12px/1.2 var(--k-font)!important;letter-spacing:.03em;box-shadow:none!important;cursor:pointer}
.fu97 #app .fu97-card-match .controls button:hover{border-color:rgba(200,255,46,.5)!important;color:var(--k-lime-2)!important}
.fu97 #app .fu97-card-match .controls #cpuToggleBtn.paused{border-color:rgba(255,176,31,.5)!important;color:#ffe0a6!important}
.fu97 #app .fu97-card-match .controls button:only-of-type{grid-column:1/-1}
.fu97 #app .fu97-card-match .match-duration-control{display:grid!important;grid-template-columns:auto 1fr;align-items:center;gap:4px 10px!important;width:100%!important;max-width:none!important;margin:10px 0 0!important;padding:9px 10px!important;border:1px solid var(--k-line)!important;border-radius:10px!important;background:rgba(255,255,255,.03)!important}
.fu97 #app .fu97-card-match .match-duration-label{color:var(--k-soft)!important;font:850 11px/1.2 var(--k-font)!important;letter-spacing:.08em;text-transform:uppercase}
.fu97 #app .fu97-card-match .match-duration-control select{width:100%!important;max-width:none!important;height:36px!important;padding:0 10px!important;border:1px solid var(--k-line-2)!important;border-radius:8px!important;background:#0a0f16!important;color:var(--k-text)!important;font:750 12px/1 var(--k-font)!important}
.fu97 #app .fu97-card-match .match-duration-control small{grid-column:1/-1;color:var(--k-muted)!important;font:650 10.5px/1.3 var(--k-font)!important}
/* En torneo la duración la fija el campeonato: se mantiene oculta como en la versión anterior. */
html.fu97 body.tournament-match #app .fu97-card-match .match-duration-control{display:none!important}
html.fu97 body.tournament-match #app .fu97-card-match .controls #reset{grid-column:1/-1}
.fu97 #app .fu97-kits{padding:0}
.fu97 #app .fu97-kits>summary{list-style:none;display:flex;align-items:center;gap:8px;margin:0;padding:12px 14px;cursor:pointer;user-select:none}
.fu97 #app .fu97-kits>summary::-webkit-details-marker{display:none}
.fu97 #app .fu97-kits>summary::after{content:"";width:8px;height:8px;margin-left:6px;border-right:2px solid var(--k-muted);border-bottom:2px solid var(--k-muted);transform:rotate(45deg) translateY(-2px);transition:transform .2s}
.fu97 #app .fu97-kits[open]>summary::after{transform:rotate(-135deg) translateY(-2px)}
.fu97 #app .fu97-kits-preview{display:flex;gap:4px;margin-left:auto}
.fu97 #app .fu97-kits-preview svg{width:26px;height:26px}
.fu97 #app .fu97-kits-body{display:grid;gap:10px;padding:0 14px 14px}
.fu97 #app .fu97-kits-body label.ctrl{display:flex!important;align-items:center;justify-content:space-between;gap:8px;width:100%!important;margin:0!important;padding:7px 10px!important;border:1px solid var(--k-line)!important;border-radius:10px!important;background:rgba(255,255,255,.03)!important;color:var(--k-soft)!important;font:800 12px/1.2 var(--k-font)!important}
.fu97 #app .fu97-kits-body label.ctrl input[type=color]{width:32px!important;height:32px!important;flex:0 0 32px!important;padding:0!important;border:1px solid var(--k-line-2)!important;border-radius:8px!important;background:none!important;cursor:pointer}
html.fu97 body.tournament-match #app .fu97-kits-body label.ctrl{display:none!important}
.fu97 #app .fu97-kits-body .fu-practice-kit-studio{display:grid!important;grid-template-columns:1fr!important;gap:10px!important;margin:0!important;padding:0!important;border:0!important;background:none!important;box-shadow:none!important}
.fu97 #app .fu97-kits-body .fu-kit-heading{display:none!important}
.fu97 #app .fu97-kits-body .fu-kit-team{margin:0!important;padding:10px!important;border:1px solid var(--k-line)!important;border-radius:10px!important;background:rgba(255,255,255,.025)!important}
.fu97 #app .fu97-kits-body .alternate-kit-panel{margin:0!important;padding:10px!important;border:1px solid var(--k-line)!important;border-radius:10px!important;background:rgba(255,255,255,.03)!important;color:var(--k-soft)!important;box-shadow:none!important;flex-wrap:wrap;gap:8px!important}
.fu97 #app .fu97-kits-body .alternate-kit-panel strong{color:var(--k-soft)!important;font:900 11px/1.2 var(--k-font)!important;letter-spacing:.1em}
.fu97 #app .fu97-kits-body .alternate-kit-panel button{min-height:38px;padding:6px 12px!important;border:1px solid var(--k-line-2)!important;border-radius:9px!important;background:var(--k-panel-2)!important;color:var(--k-text)!important;font:800 12px/1.2 var(--k-font)!important}
.fu97 #app .fu97-kits-body .alternate-kit-panel #kitStatus{color:var(--k-muted)!important;font-size:11px!important}
.fu97 #app .fu97-foot{display:block!important;margin:0!important;padding:4px 6px!important}
.fu97 #app .fu97-foot .info{margin:0!important;padding:0!important;border:0!important;background:none!important;color:#677386!important;font:600 10.5px/1.5 var(--k-font)!important}
.fu97 #app .tournament-result-panel:not([hidden]){display:flex!important;flex-wrap:wrap;align-items:center;gap:10px 16px;margin:0!important;padding:14px 16px!important;border:1px solid rgba(200,255,46,.4)!important;border-radius:14px!important;background:linear-gradient(135deg,rgba(28,40,8,.95),rgba(10,14,20,.95))!important;color:var(--k-text)!important}
.fu97 #app .tournament-result-panel strong{color:var(--k-lime)!important;font:950 12px/1.2 var(--k-font)!important;letter-spacing:.14em}
.fu97 #app .tournament-result-panel a{margin-left:auto;padding:9px 14px;border-radius:10px;background:var(--k-lime);color:#091200!important;font:950 12px/1 var(--k-font);letter-spacing:.06em;text-decoration:none}

/* ---------------------------------------------------------------- avisos: gol, descanso, final, falta */
.fu97 .goal-celebration-overlay{background:radial-gradient(ellipse at 50% 40%,rgba(10,16,24,.9),rgba(3,5,8,.97))!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important;overflow:hidden}
.fu97 .goal-celebration-card{
 position:relative;width:min(460px,100%)!important;padding:26px 26px 22px!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:22px!important;
 background:linear-gradient(160deg,rgba(24,33,46,.98),rgba(9,13,19,.98))!important;box-shadow:0 30px 80px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06)!important;
 color:var(--k-text)!important;animation:fu97CardIn .55s cubic-bezier(.2,.9,.3,1.2) both;
}
.fu97 .goal-celebration-card::before{content:""!important;position:absolute;inset:0 0 auto 0;height:5px;border-radius:22px 22px 0 0;background:linear-gradient(90deg,var(--k-lime),var(--k-cyan))}
.fu97 #goalCelebrationOverlay[data-team="2"] .goal-celebration-card::before{background:linear-gradient(90deg,var(--k-amber),var(--k-red))}
.fu97 .goal-celebration-kicker{color:var(--k-lime)!important;font:950 11px/1.2 var(--k-font)!important;letter-spacing:.24em!important}
.fu97 #goalCelebrationOverlay[data-team="2"] .goal-celebration-kicker{color:var(--k-amber)!important}
.fu97 .goal-celebration-ball{width:64px;height:64px;margin:12px auto 6px!important;font-size:0!important;line-height:0!important;color:transparent!important;background:center/contain no-repeat;filter:drop-shadow(0 8px 14px rgba(0,0,0,.5))}
.fu97 #goalCelebrationOverlay .goal-celebration-ball{animation-iteration-count:2!important;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-32 -32 64 64'%3E%3Cdefs%3E%3CradialGradient id='g' cx='38%25' cy='30%25' r='75%25'%3E%3Cstop offset='0' stop-color='%23fff'/%3E%3Cstop offset='.62' stop-color='%23eef1ee'/%3E%3Cstop offset='1' stop-color='%23a9b3ae'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle r='29' fill='url(%23g)' stroke='%23182018' stroke-width='1.5'/%3E%3Cpath d='M0-10 9.5-3 6 8H-6l-3.5-11Z' fill='%23151a1d'/%3E%3Cpath d='M0-10V-19M9.5-3l9-3M6 8l5 8M-6 8l-5 8M-9.5-3l-9-3' stroke='%23151a1d' stroke-width='2'/%3E%3Cpath d='M-6-27 0-20 6-27M22-17 18-7 26 0M22 18 14 15 10 25M-22 18-14 15-10 25M-22-17-18-7-26 0' fill='none' stroke='%23151a1d' stroke-width='2.2'/%3E%3C/svg%3E");animation:fu97BallPop 1.4s ease-in-out infinite}
.fu97 #halftimeOverlay .goal-celebration-ball{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='none' stroke='%233ee6ff' stroke-width='4'/%3E%3Cpath d='M32 14v18l12 8' fill='none' stroke='%233ee6ff' stroke-width='4.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}
.fu97 #finalMatchOverlay .goal-celebration-ball{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M18 8h28v10c0 9-6 16-14 17-8-1-14-8-14-17Z' fill='%23ffd25a'/%3E%3Cpath d='M18 12H8c0 9 5 14 11 14M46 12h10c0 9-5 14-11 14' fill='none' stroke='%23ffd25a' stroke-width='4'/%3E%3Cpath d='M28 35h8v9h-8zM20 46h24v8H20z' fill='%23ffb01f'/%3E%3C/svg%3E")}
.fu97 .goal-celebration-title{margin:4px 0 6px!important;font:1000 clamp(34px,6vw,50px)/1 var(--k-font)!important;letter-spacing:-.04em!important;background:linear-gradient(180deg,#fff 30%,#c8ff2e);-webkit-background-clip:text;background-clip:text;color:transparent!important;text-shadow:none!important}
.fu97 #goalCelebrationOverlay[data-team="2"] .goal-celebration-title{background:linear-gradient(180deg,#fff 30%,#ffb01f);-webkit-background-clip:text;background-clip:text}
.fu97 .goal-celebration-team{color:var(--k-soft)!important;font:850 12px/1.3 var(--k-font)!important;letter-spacing:.1em!important}
.fu97 .goal-celebration-score{margin:14px auto 12px!important;padding:10px 20px!important;border:0!important;border-radius:14px!important;background:linear-gradient(180deg,#fbfcfe,#dde3ec)!important;color:#0a0f16!important;font:950 40px/1 var(--k-font)!important;max-width:240px}
.fu97 .goal-celebration-score .goal-score-separator{color:#7d8899!important}
.fu97 .goal-celebration-details,.fu97 .goal-celebration-foot{color:var(--k-muted)!important;font:600 12px/1.55 var(--k-font)!important}
.fu97 .goal-celebration-continue{min-height:48px!important;margin-top:12px!important;padding:0 22px!important;border:0!important;border-radius:12px!important;background:var(--k-lime)!important;color:#091200!important;font:950 13px/1 var(--k-font)!important;letter-spacing:.1em!important;box-shadow:0 10px 26px rgba(200,255,46,.25)!important;cursor:pointer}
.fu97 #goalCelebrationOverlay[data-team="2"] .goal-celebration-continue{background:var(--k-amber)!important;box-shadow:0 10px 26px rgba(255,176,31,.25)!important}
.fu97 .goal-celebration-continue:hover{transform:translateY(-1px);filter:brightness(1.05)}
.fu97 .fu97-confetti{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}
.fu97 .fu97-confetti i{position:absolute;top:-16px;width:9px;height:14px;border-radius:2px;opacity:0;animation:fu97Confetti 2.4s cubic-bezier(.25,.6,.4,1) forwards}
.fu97 .goal-celebration-overlay .goal-celebration-card{z-index:1}
.fu97 #app .foul-notice{backdrop-filter:none!important;-webkit-backdrop-filter:none!important;border:1px solid rgba(255,210,90,.45)!important;border-radius:14px!important;background:linear-gradient(135deg,rgba(32,26,8,.96),rgba(10,12,16,.96))!important;box-shadow:0 18px 40px rgba(0,0,0,.5)!important;color:var(--k-text)!important}
.fu97 #app .foul-notice-whistle{width:26px;height:34px;flex:none;font-size:0!important;border-radius:4px;background:linear-gradient(160deg,#ffe066,#f2b705);box-shadow:0 4px 10px rgba(0,0,0,.4);transform:rotate(-10deg)}
.fu97 #app .foul-notice-kicker{color:var(--k-gold)!important;letter-spacing:.18em!important}
.fu97 #app .foul-notice-title{color:#fff!important}
.fu97 #app .foul-notice-detail{color:var(--k-soft)!important}
.fu97 #app .foul-notice-chance{border-radius:999px!important;background:rgba(255,210,90,.15)!important;color:var(--k-gold)!important;border:1px solid rgba(255,210,90,.4)!important}

/* ---------------------------------------------------------------- pantalla completa */
.fu97 #app .board:fullscreen,.fu97 #app .board:-webkit-full-screen{
 display:grid!important;grid-template-columns:minmax(0,1fr)!important;grid-template-rows:auto minmax(0,1fr) auto!important;gap:8px!important;
 width:100vw!important;height:100vh!important;width:100dvw!important;height:100dvh!important;max-width:none!important;margin:0!important;
 padding:max(8px,env(safe-area-inset-top)) max(10px,env(safe-area-inset-right)) max(8px,env(safe-area-inset-bottom)) max(10px,env(safe-area-inset-left))!important;
 border:0!important;border-radius:0!important;background:radial-gradient(ellipse at 50% 0%,#162131,#06080c 70%)!important;overflow:hidden!important;
}
.fu97 #app .board:fullscreen .fullscreen-score-panel,.fu97 #app .board:-webkit-full-screen .fullscreen-score-panel{
 grid-column:1!important;grid-row:1!important;display:block!important;position:static!important;width:100%!important;max-width:none!important;max-height:none!important;
 margin:0!important;padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important;overflow:visible!important;
}
.fu97 #app .board:fullscreen .fullscreen-score-panel::before,.fu97 #app .board:-webkit-full-screen .fullscreen-score-panel::before{content:none!important;display:none!important}
.fu97 #app .fullscreen-score-panel .scoreboard-block{display:flex!important;flex-direction:row!important;width:100%!important;gap:0!important}
.fu97 #app .fullscreen-score-panel .scoreboard-line{display:flex!important;flex-direction:row!important;align-items:stretch!important;gap:8px!important;flex-wrap:nowrap!important}
.fu97 #app .fullscreen-score-panel .fu97-scorebug{display:grid!important;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;justify-items:stretch!important;gap:0!important;width:auto!important}
.fu97 #app .fullscreen-score-panel .fu97-sb-team,.fu97 #app .fullscreen-score-panel .fu97-sb-result{justify-self:stretch!important}
.fu97 #app .fullscreen-score-panel .match-clock{flex-direction:column!important;width:auto!important;padding:6px 14px!important}
.fu97 #app .fullscreen-score-panel .match-clock-time{font-size:22px!important}
.fu97 #app .fullscreen-score-panel .match-clock-state{font-size:9px!important;padding:2px 8px!important}
.fu97 #app .fullscreen-score-panel .fu97-sb-team b{font-size:13px!important}
.fu97 #app .fullscreen-score-panel .score{min-width:38px!important;height:auto!important;font-size:28px!important;padding:0 4px!important}
.fu97 #app .board:fullscreen .fu97-pitchframe,.fu97 #app .board:-webkit-full-screen .fu97-pitchframe{grid-row:2;min-height:0;display:flex;align-items:center;justify-content:center;background:transparent;box-shadow:none;border-radius:0;overflow:visible}
.fu97 #app .board:fullscreen:not(.fu97-vertical):not(.fu97-zoom) .pitch-scroll-area,.fu97 #app .board:-webkit-full-screen:not(.fu97-vertical):not(.fu97-zoom) .pitch-scroll-area{width:100%!important;height:100%!important;max-height:100%!important;display:flex!important;align-items:center;justify-content:center;overflow:hidden!important}
.fu97 #app .board:fullscreen:not(.fu97-vertical):not(.fu97-zoom) .pitch-scroll-area #field,.fu97 #app .board:-webkit-full-screen:not(.fu97-vertical):not(.fu97-zoom) .pitch-scroll-area #field{width:100%!important;height:100%!important;max-height:100%!important;border-radius:12px!important;box-shadow:0 0 0 1px rgba(255,255,255,.08),0 14px 34px rgba(0,0,0,.5)!important}
.fu97 #app .board.fu97-vertical:fullscreen .pitch-scroll-area,.fu97 #app .board.fu97-vertical:-webkit-full-screen .pitch-scroll-area{height:100%!important;width:auto!important;max-width:100%!important;margin:0 auto!important;border-radius:12px!important}
.fu97 #app .board.fu97-zoom:fullscreen .pitch-scroll-area,.fu97 #app .board.fu97-zoom:-webkit-full-screen .pitch-scroll-area{height:100%!important}
.fu97 #app .board:fullscreen .fu97-actionbar,.fu97 #app .board:-webkit-full-screen .fu97-actionbar{grid-row:3}
.fu97 #app .board:fullscreen .goal-celebration-overlay,.fu97 #app .board:-webkit-full-screen .goal-celebration-overlay{position:fixed!important}

/* ---------------------------------------------------------------- tabletas y portátiles chicos */
/* ---------------------------------------------------------------- v97.1 · banderines, canto de fichas, posesión y cartel de jugadas */
.fu97 #field .fu97-tk-hit{fill:transparent;stroke:none}
.fu97 #field .fu97-tk-edge,.fu97 #field .fu97-tk-edge-dk{pointer-events:none}
.fu97 #field .fu97-tk-edge-dk{fill:#000;fill-opacity:.42}
.fu97 #app .fu97-sb-result{position:relative}
.fu97 #app .fu97-sb-result::after{content:"";position:absolute;bottom:0;left:0;width:50%;height:3px;background:var(--k-lime);box-shadow:0 0 8px rgba(200,255,46,.55);opacity:0;transition:left .3s ease,opacity .2s ease;pointer-events:none}
.fu97 #app .fu97-sb-result[data-poss="1"]::after{left:0;opacity:1}
.fu97 #app .fu97-sb-result[data-poss="2"]::after{left:50%;opacity:1}
.fu97 #app .fu97-banner{position:absolute;z-index:6;top:12px;left:50%;display:flex;flex-direction:column;align-items:center;gap:3px;max-width:min(80%,520px);padding:9px 20px 10px;border-radius:12px;background:rgba(6,10,15,.9);border:1px solid rgba(255,255,255,.12);box-shadow:0 12px 30px rgba(0,0,0,.45);opacity:0;visibility:hidden;transform:translate(-50%,-14px);transition:opacity .22s ease,transform .32s cubic-bezier(.2,.9,.3,1.15),visibility 0s linear .32s;pointer-events:none}
.fu97 #app .fu97-banner.is-on{opacity:1;visibility:visible;transform:translate(-50%,0);transition-delay:0s}
.fu97 #app .fu97-banner::before{content:"";position:absolute;left:16px;right:16px;top:-1px;height:3px;border-radius:0 0 3px 3px;background:var(--fu97-banner-c,var(--k-cyan))}
.fu97 #app .fu97-banner b{color:var(--fu97-banner-c,var(--k-cyan));font:950 15px/1.1 var(--k-font);letter-spacing:.12em;white-space:nowrap}
.fu97 #app .fu97-banner span{max-width:100%;overflow:hidden;color:var(--k-soft);font:650 11.5px/1.3 var(--k-font);text-align:center;text-overflow:ellipsis;white-space:nowrap}
.fu97 #app .fu97-banner em{font-style:normal}
.fu97 #app .fu97-banner[data-kind="event"]{--fu97-banner-c:var(--k-amber)}
.fu97 #app .fu97-banner[data-kind="period"]{--fu97-banner-c:var(--k-lime)}
@media (max-width:680px){
 /* En el celular, una sola línea pegada al borde: así no tapa al arquero rival en la cancha vertical. */
 .fu97 #app .fu97-banner{top:4px;max-width:92%;flex-direction:row;align-items:baseline;gap:7px;padding:4px 11px 5px;border-radius:9px}
 .fu97 #app .fu97-banner b{font-size:12px}
 .fu97 #app .fu97-banner span{font-size:10.5px}
 .fu97 #app .fu97-banner span::before{content:"·";margin-right:7px;opacity:.55}
 .fu97 #app .fu97-banner .fu97-banner-more{display:none}
}
@media (prefers-reduced-motion:reduce){
 .fu97 #app .fu97-banner{transform:translate(-50%,0);transition:opacity .2s ease,visibility 0s linear .2s}
 .fu97 #app .fu97-sb-result::after{transition:none}
}
/* ---------------------------------------------------------------- v97.1 · refinamiento: cancha original, indicadores discretos, HUD limpio */
/* Márgenes del SVG que la foto no cubre: tono oscuro de estadio, como en v96. */
.fu97 #app .fu97-pitchframe{background:#0e1a13}
/* Grilla de casillas apenas visible sobre la foto; movimiento: solo el punto; la selección la marca el anillo de la ficha. */
.fu97 #field .cell{stroke:rgba(255,255,255,.06)!important}
.fu97 #field .cell.pl{stroke:none!important}
.fu97 #field .cell.pl.duel{stroke:rgba(255,154,60,.7)!important;stroke-width:2!important}
.fu97 #field .cell.sel{fill:transparent!important;stroke:none!important}
/* Precisión por distancia: tinte suave, sin bordes punteados. */
.fu97 #field .fu97-zone.is-p5{fill-opacity:.07}
.fu97 #field .fu97-zone.is-p4{fill-opacity:.055}
.fu97 #field .fu97-zone.is-p3{fill-opacity:.045}
.fu97 #field .fu97-zone.is-p2,.fu97 #field .fu97-zone.is-p1{fill-opacity:.04}
.fu97 #field .fu97-rcv circle{stroke-width:3.5}
.fu97 #field .fu97-rcv-pill{opacity:.92}
/* Huellas de la CPU más finas (además se desvanecen solas). */
.fu97 #field .fu97-ghost{stroke-width:3;stroke-opacity:.45}
.fu97 #field .fu97-ghost.is-persist{stroke-opacity:.5}
/* HUD: sin degradés de color ni brillos de neón. */
.fu97 #app .fu97-home,.fu97 #app .fu97-away{background:none}
.fu97 #app .match-clock{border-color:var(--k-line)!important;box-shadow:none!important}
.fu97 #app .match-clock-time{color:#f4f7fb!important;text-shadow:none!important}
.fu97 #app .match-clock-state{border-color:var(--k-line)!important;background:transparent!important;color:var(--k-muted)!important}
.fu97 #app .fu97-turnbox .fu97-turn-badge{box-shadow:none}
.fu97 #app .fu97-pips i.is-now{box-shadow:none}
.fu97 #app .fu97-sb-result::after{box-shadow:none}
.fu97 #app .fu97-actionbar #ballModeControl:not(:disabled):not(.active){box-shadow:0 6px 16px rgba(0,0,0,.3)!important}
.fu97 #app .fu97-actionbar #ballModeControl.active{box-shadow:none!important}
/* Guía de lectura plegable: queda cerrada y se abre desde su título. */
.fu97 #app .fu97-card-legend .fu97-card-title{cursor:pointer;margin-bottom:0;user-select:none}
.fu97 #app .fu97-card-legend .fu97-card-title::after{content:"";width:7px;height:7px;margin:0 3px 3px auto;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:rotate(45deg);transition:transform .2s ease}
.fu97 #app .fu97-card-legend.is-collapsed .fu97-card-title::after{transform:rotate(-45deg);margin-bottom:0}
.fu97 #app .fu97-card-legend:not(.is-collapsed) .fu97-card-title{margin-bottom:10px}
.fu97 #app .fu97-card-legend.is-collapsed .fu97-legend{display:none}
.fu97 #app .fu97-card-legend .fu97-card-title:focus-visible{outline:2px solid var(--k-lime);outline-offset:3px;border-radius:4px}
@media (max-width:1599.98px){
 .fu97 #app .fu97-nav-label{display:none}
 .fu97 #app .fu97-nav a{padding:0 15px!important}
}
@media (max-width:1280px){
 .fu97 #app .fu97-turnbox{min-width:170px}
}
@media (max-width:1000px){
 .fu97 #app .fu97-actionbar{grid-template-columns:minmax(170px,auto) minmax(0,1fr) auto}
 .fu97 #app .scoreboard-line{flex-wrap:wrap!important;gap:6px!important}
 .fu97 #app .fu97-scorebug{flex:1 1 100%}
 .fu97 #app .match-clock{flex:1 1 0;flex-direction:row!important;gap:10px!important}
 .fu97 #app .fu97-turnbox{flex:1 1 0;grid-template-columns:auto auto 1fr;grid-template-rows:auto;align-items:center}
 .fu97 #app .fu97-turn-badge{grid-column:auto}
 .fu97 #app .fu97-nav{align-self:flex-start}
 .fu97 #app .fu97-nav a{min-height:52px}
}

/* ---------------------------------------------------------------- celular vertical */
@media (max-width:680px){
 html.fu97 body{padding:6px 6px calc(12px + env(safe-area-inset-bottom))!important}
 .fu97 #app .head.fu97-topbar{gap:6px!important;margin:0 0 6px!important;padding:5px!important;border-radius:13px!important}
 .fu97 #app .fu97-nav{display:none!important}
 .fu97 #app .scoreboard-line{flex-wrap:wrap!important;gap:5px!important}
 .fu97 #app .fu97-scorebug{flex:1 1 100%;min-height:44px;border-radius:10px}
 .fu97 #app .fu97-sb-team{gap:6px;padding:0 9px}
 .fu97 #app .fu97-sb-team b{font-size:11px!important;letter-spacing:.03em!important}
 .fu97 #app .fu97-sb-team .tournament-crest-inline{width:22px!important;height:22px!important}
 .fu97 #app .fu97-kitchip{width:26px;height:26px}
 html.fu97 body.tournament-match #app .fu97-kitchip{display:none}
 html.fu97 body.tournament-match #app .fu97-name-full{display:none}
 html.fu97 body.tournament-match #app .fu97-name-short{display:inline}
 .fu97 #app .fu97-sb-result .score{min-width:30px!important;font-size:25px!important}
 .fu97 #app .fu97-sb-sep{font-size:16px}
 .fu97 #app .match-clock{flex:1 1 0;min-width:0;flex-direction:row!important;gap:8px!important;padding:5px 10px!important;border-radius:10px!important}
 .fu97 #app .match-clock-time{font-size:19px!important}
 .fu97 #app .match-clock-state{display:none!important}
 .fu97 #app .match-clock.fu97-clock-break .match-clock-state,.fu97 #app .match-clock.fu97-clock-final .match-clock-state{display:block!important;max-width:110px;font-size:8.5px!important}
 .fu97 #app .fu97-turnbox{flex:1 1 0;min-width:0;grid-template-columns:auto auto;grid-template-rows:auto;justify-content:space-between;align-items:center;padding:5px 9px;border-radius:10px}
 .fu97 #app .fu97-turn-badge{grid-column:auto;font-size:10.5px;padding:4px 8px 3px}
 .fu97 #app .fu97-turn-sub{display:none}
 .fu97 #app .fu97-pips i{width:8px;height:5px}
 .fu97 #app .board{padding:4px!important;gap:5px;border-radius:14px!important}
 .fu97 #app .fu97-pitchframe{border-radius:10px}
 .fu97 #app .fu97-actionbar{grid-template-columns:minmax(0,1fr) auto;grid-template-areas:"player fab" "msg msg";gap:6px;padding:5px;border-radius:11px}
 .fu97 #app .board.fu97-vertical .fu97-actionbar{position:sticky;bottom:calc(4px + env(safe-area-inset-bottom));z-index:8;background:rgba(7,11,16,.97);box-shadow:0 -12px 28px rgba(0,0,0,.55)}
 .fu97 #app .fu97-ab-player{grid-area:player;padding:3px 8px 3px 3px;gap:7px}
 .fu97 #app .fu97-ab-token{width:32px;height:32px}
 .fu97 #app .fu97-ab-text strong{font-size:12px}
 .fu97 #app .fu97-ab-text small{font-size:10px}
 .fu97 #app .fu97-ab-tools{gap:5px}
 .fu97 #app .fu97-ab-tools .fu97-tool{min-width:38px!important;min-height:34px!important;padding:0 8px!important;border-radius:10px!important}
 .fu97 #app .fu97-tool svg{width:18px;height:18px}
 .fu97 #app .fu97-tool span:not(.fs-icon){display:none}
 .fu97 #app .fu97-tempo-toggle{min-width:36px!important;padding:0 7px!important}
 .fu97 #app .fu97-tempo-toggle .fu97-tempo-label{display:none!important}
 .fu97 #app .fu97-actionbar #ballModeControl{grid-area:fab;min-width:0;height:44px!important;min-height:44px!important;padding:0 12px 0 5px!important;gap:6px}
 .fu97 #app .fu97-actionbar .ball-fab-icon{width:30px!important;height:30px!important}
 .fu97 #app .fu97-actionbar .ball-fab-label{font-size:11px!important;letter-spacing:.06em!important}
 .fu97 #app .fu97-ab-msg{grid-area:msg;min-height:0;padding:6px 9px}
 .fu97 #app .fu97-ab-msg #msg{font-size:12px!important}
 .fu97 #app .fu97-legend{grid-template-columns:1fr 1fr}
 .fu97 #app .fullscreen-score-panel .scoreboard-line{flex-wrap:wrap!important;gap:5px!important}
 .fu97 #app .fullscreen-score-panel .fu97-scorebug{flex:1 1 100%!important}
 .fu97 #app .fullscreen-score-panel .match-clock{flex-direction:row!important;padding:5px 10px!important}
 .fu97 #app .fullscreen-score-panel .match-clock-time{font-size:19px!important}
 .fu97 #app .fullscreen-score-panel .score{font-size:25px!important;min-width:30px!important}
 .fu97 #app .fullscreen-score-panel .fu97-sb-team b{font-size:11px!important}
}
/* Celulares bajos: el relato ocupa una línea (con «Ver más») para que la cancha entre completa. */
@media (max-width:680px) and (max-height:760px){
 .fu97 #app .fu97-ab-msg{padding:4px 8px}
 .fu97 #app .fu97-ab-msg #msg{-webkit-line-clamp:1}
}
@media (max-width:380px){
 .fu97 #app .fu97-nav{display:none!important}
 .fu97 #app .fu97-sb-team b{font-size:10px!important}
 .fu97 #app .fu97-kitchip{width:22px;height:22px}
 .fu97 #app .fu97-actionbar .ball-fab-label{display:none!important}
}
/* v97.1.2 · Celular vertical: en la vista completa (y en pantalla completa) no se muestra el relato inferior
   y la barra de acción queda en una sola fila, sin hueco vacío. En escritorio el relato sigue visible. */
@media (max-width:680px) and (orientation:portrait){
 .fu97 #app.fu97-mobile-complete .fu97-card-story,.fu97 #app.fu97-mobile-complete .fu97-ab-msg{display:none!important}
 .fu97 #app.fu97-mobile-complete .fu97-actionbar{grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:"player fab"!important}
 .fu97 #app .board:fullscreen .fu97-ab-msg,.fu97 #app .board:-webkit-full-screen .fu97-ab-msg{display:none!important}
 .fu97 #app .board:fullscreen .fu97-actionbar,.fu97 #app .board:-webkit-full-screen .fu97-actionbar{grid-template-columns:minmax(0,1fr) auto!important;grid-template-areas:"player fab"!important}
}

/* ---------------------------------------------------------------- celular horizontal (poca altura) */
@media (orientation:landscape) and (max-height:560px){
 html.fu97 body{padding:6px 8px!important}
 .fu97 #app.fu97-app{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(250px,31vw);grid-template-rows:auto minmax(0,1fr);column-gap:8px;row-gap:6px;--fu97-head-side:1}
 .fu97 #app .head.fu97-topbar{grid-column:2;grid-row:1;margin:0!important;padding:5px!important;flex-direction:column!important;gap:5px!important}
 .fu97 #app .fu97-nav{display:none!important}
 .fu97 #app .scoreboard-line{flex-wrap:wrap!important;gap:5px!important}
 .fu97 #app .fu97-scorebug{flex:1 1 100%;min-height:40px}
 .fu97 #app .fu97-sb-team{padding:0 8px;gap:6px}
 .fu97 #app .fu97-sb-team b{font-size:10px!important}
 .fu97 #app .fu97-kitchip{width:22px;height:22px}
 .fu97 #app .fu97-name-full{display:none}
 .fu97 #app .fu97-name-short{display:inline}
 .fu97 #app .fu97-sb-result .score{min-width:26px!important;font-size:22px!important}
 .fu97 #app .match-clock{flex:1 1 0;min-width:0;flex-direction:row!important;gap:6px!important;padding:4px 8px!important}
 .fu97 #app .match-clock-time{font-size:16px!important}
 .fu97 #app .match-clock-state{display:none!important}
 .fu97 #app .fu97-turnbox{flex:1 1 0;min-width:0;grid-template-columns:auto auto;padding:4px 8px}
 .fu97 #app .fu97-turn-badge{grid-column:auto;font-size:10px;padding:3px 7px}
 .fu97 #app .fu97-turn-sub{display:none}
 .fu97 #app .fu97-pips i{width:8px;height:5px}
 .fu97 #app .fu97-main{display:contents}
 .fu97 #app .fu97-pitchcol{grid-column:1;grid-row:1/span 2}
 .fu97 #app .fu97-side{grid-column:2;grid-row:2;display:flex;flex-direction:column;max-height:calc(100dvh - 120px);overflow:auto;position:static}
 .fu97 #app .board{padding:4px!important;gap:5px;border-radius:12px!important}
 .fu97 #app .fu97-actionbar{grid-template-columns:auto minmax(0,1fr) auto;gap:6px;padding:4px}
 .fu97 #app .fu97-ab-player{padding:3px;background:none;border:0}
 .fu97 #app .fu97-ab-token{width:30px;height:30px}
 .fu97 #app .fu97-ab-text{display:none}
 .fu97 #app .fu97-msg-more{padding:2px 7px;font-size:9.5px}
 .fu97 #app .fu97-ab-msg{min-height:36px;padding:3px 8px}
 .fu97 #app .fu97-ab-msg #msg{font-size:11px!important;-webkit-line-clamp:2}
 .fu97 #app .fu97-ab-tools .fu97-tool{min-height:30px!important;min-width:34px!important;padding:0 7px!important}
 .fu97 #app .fu97-tool span:not(.fs-icon){display:none}
 .fu97 #app .fu97-actionbar #ballModeControl{height:40px!important;min-height:40px!important;min-width:0;padding:0 10px 0 4px!important}
 .fu97 #app .fu97-actionbar .ball-fab-icon{width:28px!important;height:28px!important}
 .fu97 #app .fu97-actionbar .ball-fab-label{font-size:10px!important}
}

/* ---------------------------------------------------------------- animaciones */
@keyframes fu97BoardIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes fu97ScoreBump{0%{transform:scale(1)}25%{transform:scale(1.45);color:#3a8a00}100%{transform:scale(1)}}
@keyframes fu97MsgFlash{0%{background:rgba(62,230,255,.16)}100%{background:rgba(255,255,255,.025)}}
@keyframes fu97CardIn{0%{opacity:0;transform:translateY(16px) scale(.94)}100%{opacity:1;transform:none}}
@keyframes fu97BallPop{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(20deg)}}
@keyframes fu97Confetti{0%{opacity:1;transform:translate(0,0) rotate(0)}100%{opacity:.9;transform:translate(var(--fu97-drift,0),110vh) rotate(var(--fu97-rot,360deg))}}
@media (prefers-reduced-motion:reduce){
 .fu97 #app .board,.fu97 .goal-celebration-card,.fu97 #goalCelebrationOverlay .goal-celebration-ball,.fu97 #app .fu97-ab-msg.is-flash,.fu97 #app .fu97-sb-result .score.fu97-bump{animation:none!important}
 .fu97 .fu97-confetti{display:none!important}
}
`;
const V98_MOBILE_VIEWS_STYLES = String.raw`
/* ==================== v98.34 · PANEL DE MOVIMIENTO COMPACTO ====================
   Sólo presentación y usabilidad táctil. No cambia reglas, IA, porcentajes ni estado del partido. */
html,body{max-width:100%;overflow-x:clip!important}
button,a,input,select{ -webkit-tap-highlight-color:transparent; }
@media(max-width:760px){
 html:not(.fu97) body{scroll-padding-bottom:calc(16px + env(safe-area-inset-bottom))}
 .wrap{width:calc(100% - 18px)!important;max-width:100%!important}
 .field-row,.dash{grid-template-columns:minmax(0,1fr)!important;min-width:0!important}
 .dash>section,.panel{min-width:0!important}
 .table-wrap{max-width:100%;overflow:auto;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch;scrollbar-width:thin}
 .stat-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
 .team-actions{align-items:stretch!important}
 .team-actions .btn,.team-actions button{min-height:44px}
 .fixture{min-width:0!important}
}
@media(max-width:560px){
 /* Portada y navegación de las páginas interiores */
 .wrap{width:calc(100% - 16px)!important}
 .topbar{gap:8px!important;padding-block:10px!important;align-items:center!important}
 .brand{min-width:0;max-width:100%;gap:8px!important}
 .brand-name{font-size:12px!important;line-height:1.2!important;letter-spacing:.07em!important;overflow-wrap:anywhere}
 .brand-tag{font-size:8px!important;letter-spacing:.12em!important}
 .top-label{max-width:46%;white-space:normal!important;text-align:center;line-height:1.25!important;font-size:8px!important;padding:6px 7px!important}
 .nav{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr));width:100%;gap:5px!important}
 .nav a{display:flex;align-items:center;justify-content:center;min-width:0;min-height:42px;padding:8px 4px!important;text-align:center;font-size:9px!important;letter-spacing:.04em!important;overflow-wrap:anywhere}
 .hero{padding-top:23px!important;padding-bottom:17px!important}
 .hero h1{font-size:clamp(30px,8.4vw,43px)!important;line-height:1.02!important;overflow-wrap:anywhere}
 .hero p{font-size:13px!important;line-height:1.58!important}
 .hero-meta{gap:6px!important}
 .meta-chip{font-size:10px!important;padding:7px 8px!important}
 .section-head{align-items:flex-start!important;gap:7px!important}
 .modes{grid-template-columns:minmax(0,1fr)!important;gap:9px!important;padding-bottom:22px!important}
 .mode{min-height:0!important;padding:14px!important}
 .mode h3{margin:14px 0 7px!important;font-size:19px!important}
 .mode p{font-size:12px!important;line-height:1.55!important;margin-bottom:12px!important}
 .mode-action{min-height:36px}
 .home-actions{display:flex!important;flex-direction:column!important;align-items:stretch!important;gap:8px!important}
 .rules-open{width:100%;min-height:44px}
 .bottom-note{padding-bottom:calc(20px + env(safe-area-inset-bottom))!important}
 /* Formularios y selección de club en el torneo */
 .panel{padding:11px!important;margin-bottom:10px!important;border-radius:5px!important}
 .selection-tools{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:8px!important;width:100%;margin:10px 0!important}
 .selection-tools>*{width:100%!important;min-width:0!important;min-height:44px!important;font-size:16px!important}
 input[type=search],select{min-height:44px!important}
 .team-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:6px!important;max-height:min(44dvh,430px)!important;padding-right:2px!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
 .team-card{display:flex!important;flex-direction:column!important;align-items:stretch!important;justify-content:flex-start!important;gap:5px!important;min-height:100px;padding:8px!important}
 .team-card>span:not(.team-visuals),.team-card .team-name,.team-card .team-sub{display:block!important;width:100%!important;min-width:0!important}
 .team-visuals{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:7px!important;min-height:30px}
 .team-card .crest{width:25px!important;height:27px!important}
 .team-card .shirt{width:27px!important;height:27px!important}
 .team-name{font-size:10.5px!important;line-height:1.25!important;overflow-wrap:anywhere}
 .team-sub{font-size:8px!important;line-height:1.2!important}
 .team-actions{display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:8px!important;width:100%}
 .team-actions .btn,.team-actions button,.btn,button.btn{width:100%;min-height:44px!important;white-space:normal!important;line-height:1.3!important}
 .dash-head{align-items:stretch!important}
 .dash-head .team-actions{width:100%}
 .club-title{align-items:center!important;gap:7px!important;min-width:0;flex-wrap:wrap}
 .club-title>div{min-width:0;flex:1 1 140px}
 .club-title h2{font-size:18px!important;overflow-wrap:anywhere}
 .club-title .shirt{width:36px!important;height:36px!important}
 .club-title .crest{width:32px!important;height:34px!important}
 .stat{padding:9px!important}
 .stat strong{font-size:20px!important}
 .stat span{font-size:8px!important;letter-spacing:.05em!important}
 .section-title{align-items:flex-start!important;gap:7px!important}
 .section-title h2{font-size:16px!important}
 .legend{gap:6px!important;font-size:9px!important}
 .table-wrap{max-height:min(54dvh,520px)!important;margin-top:9px!important;scrollbar-width:thin}
 .table-wrap table{min-width:690px!important}
 .table-wrap th,.table-wrap td{padding:8px 7px!important}
 .table-club span{max-width:145px!important}
 .fixture{grid-template-columns:27px minmax(0,1fr) auto!important;gap:6px!important;padding:8px!important}
 .fixture-title{gap:4px 6px!important;font-size:10px!important}
 .fixture-team .crest{width:18px!important;height:20px!important}
 .fixture-meta{font-size:9px!important;line-height:1.35!important}
 .score-chip{font-size:13px!important}
 /* Reglamento/modal: el contenido desplaza dentro del diálogo y respeta zonas seguras. */
 .rules-backdrop{padding:calc(5px + env(safe-area-inset-top)) 5px calc(5px + env(safe-area-inset-bottom))!important}
 .rules-dialog{width:100%!important;height:calc(100dvh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 10px)!important;max-height:none!important;border-radius:10px!important}
 .rules-header{padding:11px!important;gap:8px!important}
 .rules-header h2{font-size:18px!important}
 .rules-content{padding:12px!important;font-size:12px!important;line-height:1.6!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
 .rules-content table{display:block;max-width:100%;overflow-x:auto;white-space:nowrap}
 .rules-content th,.rules-content td{padding:6px!important}
 .rules-close{min-width:44px;min-height:44px}
}
@media(max-width:360px){
 .top-label{display:none!important}
 .team-card{min-height:92px!important;padding:6px!important}
 .team-card .crest{width:22px!important;height:24px!important}
 .team-card .shirt{width:24px!important;height:24px!important}
 .team-name{font-size:10px!important}
 .team-sub{font-size:7.5px!important}
 .fixture{grid-template-columns:24px minmax(0,1fr) auto!important}
}
/* Partido/práctica: zonas táctiles mayores y menos desperdicio de ancho. */
@media(max-width:680px) and (orientation:portrait){
 html.fu97 body{padding:4px 4px calc(8px + env(safe-area-inset-bottom))!important}
 .fu97 #app.fu97-app{width:100%!important;max-width:100%!important;margin:0!important}
 .fu97 #app .fu97-main{gap:5px!important}
 .fu97 #app .fu97-pitchcol{min-width:0!important;width:100%!important}
 .fu97 #app .board{margin-top:4px!important;padding:3px!important}
 .fu97 #app .fu97-ab-tools .fu97-tool{min-width:40px!important;min-height:40px!important;padding:0 7px!important}
 .fu97 #app .fu97-tool svg{width:19px!important;height:19px!important}
 .fu97 #app .fu97-actionbar #ballModeControl{min-height:44px!important;height:44px!important}
 .fu97 #app .fu97-ab-player{min-width:0!important}
 .fu97 #app .fu97-ab-text{min-width:0!important}
 .fu97 #app .board.fu97-vertical .pitch-scroll-area{-webkit-overflow-scrolling:touch}
}
@media(max-width:680px) and (orientation:landscape) and (max-height:560px){
 html.fu97 body{padding:4px 6px calc(5px + env(safe-area-inset-bottom))!important}
 .fu97 #app.fu97-app{width:100%!important;max-width:100%!important}
 .fu97 #app .fu97-side{max-height:calc(100dvh - 64px - env(safe-area-inset-bottom))!important;min-height:0!important;overscroll-behavior:contain;-webkit-overflow-scrolling:touch}
 .fu97 #app .fu97-ab-tools .fu97-tool{min-width:36px!important;min-height:36px!important;padding:0 6px!important}
 .fu97 #app .fu97-actionbar #ballModeControl{min-height:40px!important;height:40px!important}
}
/* v98.34 · panel compacto de movimiento sólo en pantallas táctiles pequeñas */
@media(max-width:680px){
 .fu97 #app .fu97-ab-tools .fu97-follow-toggle[hidden]{display:none!important}
 .fu97 #app .fu97-ab-tools .fu97-follow-toggle[aria-pressed="true"]{border-color:rgba(200,255,46,.7)!important;color:#c8ff2e!important;background:rgba(200,255,46,.09)!important}
 .fu97 #field .fu97-tk-num{font-size:29px!important;stroke-width:3px!important;paint-order:stroke fill}
 .fu97 #app .fu97-mobile-decision[hidden]{display:none!important}
 .fu97 #app .fu97-mobile-decision:not([hidden]){
  position:fixed!important;left:8px!important;right:8px!important;bottom:calc(8px + env(safe-area-inset-bottom))!important;
  z-index:90!important;display:grid!important;grid-template-columns:minmax(0,1fr)!important;gap:7px!important;
  width:auto!important;max-width:660px!important;max-height:min(44dvh,260px)!important;overflow:auto!important;margin:0 auto!important;
  padding:9px!important;border:1px solid rgba(200,255,46,.48)!important;border-radius:14px!important;
  background:linear-gradient(145deg,rgba(15,23,32,.98),rgba(5,9,14,.985))!important;
  box-shadow:0 12px 38px rgba(0,0,0,.72),inset 0 1px 0 rgba(255,255,255,.06)!important;
  -webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);color:#eef4fc!important
 }
 .fu97 #app .fu97-mobile-decision-head{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0}
 .fu97 #app .fu97-mobile-decision-title{font:950 12px/1.15 var(--k-font)!important;letter-spacing:.06em;color:#eaf4ff}
 .fu97 #app .fu97-mobile-decision-tag{flex:none;padding:4px 7px;border-radius:6px;background:rgba(200,255,46,.12);color:#d9ff70;font:900 9px/1 var(--k-font)!important;letter-spacing:.07em}
 .fu97 #app .fu97-mobile-decision-sub{font:650 10px/1.35 var(--k-font)!important;color:#aebccc;overflow-wrap:anywhere}
 .fu97 #app .fu97-mobile-decision.is-invalid .fu97-mobile-decision-sub{color:#ff9ba4}
 /* En movimientos basta el título y los botones. En movimientos bloqueados sí se conserva el motivo. */
 .fu97 #app .fu97-mobile-decision.is-move-action .fu97-mobile-decision-values{display:none!important}
 .fu97 #app .fu97-mobile-decision.is-move-action:not(.is-invalid) .fu97-mobile-decision-sub{display:none!important}
 .fu97 #app .fu97-mobile-decision-values{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:5px;min-width:0}
 .fu97 #app .fu97-mobile-metric{display:flex;flex-direction:column;justify-content:center;gap:4px;min-width:0;padding:7px 6px;border-radius:8px;border:1px solid rgba(220,232,246,.11);background:rgba(255,255,255,.035)}
 .fu97 #app .fu97-mobile-metric-label{font:750 8px/1.2 var(--k-font)!important;color:#96a8bb;letter-spacing:.025em;overflow-wrap:anywhere}
 .fu97 #app .fu97-mobile-metric-value{font:950 clamp(14px,4.4vw,20px)/1 var(--k-font)!important;color:#f4f7fb;white-space:normal;overflow-wrap:anywhere}
 .fu97 #app .fu97-mobile-metric-value.is-good{color:#9dffbf}
 .fu97 #app .fu97-mobile-metric-value.is-warn{color:#ffd18b}
 .fu97 #app .fu97-mobile-metric-value.is-bad{color:#ff959e}
 .fu97 #app .fu97-mobile-decision-actions{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:7px}
 .fu97 #app .fu97-mobile-decision-actions button{min-width:0;min-height:40px!important;border-radius:9px!important;padding:8px 10px!important;font:950 10px/1.15 var(--k-font)!important;letter-spacing:.04em;white-space:normal!important}
 .fu97 #app .fu97-mobile-decision-confirm{border:1px solid #c8ff2e!important;background:#c8ff2e!important;color:#111a08!important}
 .fu97 #app .fu97-mobile-decision-confirm:disabled{border-color:#39434b!important;background:#252e36!important;color:#778492!important;box-shadow:none!important}
 .fu97 #app .fu97-mobile-decision-cancel{border:1px solid rgba(215,229,245,.2)!important;background:#17212b!important;color:#dce7f4!important}
 .fu97 #app .fu97-actionbar #ballModeControl{touch-action:manipulation}
}
@media(max-width:380px){
 .fu97 #app .fu97-mobile-decision:not([hidden]){left:5px!important;right:5px!important;padding:7px!important;gap:6px!important}
 .fu97 #app .fu97-mobile-metric{padding:6px 5px!important}
 .fu97 #app .fu97-mobile-metric-label{font-size:7.5px!important}
 .fu97 #app .fu97-mobile-decision-actions button{min-height:38px!important;padding:7px!important}
}
@media(prefers-reduced-motion:reduce){.mode,.team-card,button,a{transition:none!important}}
`;
const V97_MATCH_PATCH = String.raw`
// ==================== FÚTBOL ÚNICO v97 · REDISEÑO VISUAL DEL PARTIDO ====================
// Capa exclusivamente visual. Se instala después de v96, dentro del mismo alcance del motor.
// No modifica reglas, probabilidades, resolución de acciones, cronómetro ni IA:
//  · el selector Normal/Rápido modifica sólo duraciones visuales y esperas de CPU; las reglas,
//    destinos finales, posesión, probabilidades y estado de acciones se conservan;
//  · los efectos usan un generador pseudoaleatorio propio y nunca consumen Math.random;
//  · los paneles existentes se reubican moviendo los mismos nodos (ids y manejadores intactos);
//  · nada se dibuja mientras la CPU explora jugadas simuladas (estado transitorio).
(function fu97VisualLayer(){
 'use strict';
 const VERSION='98.63-camisetas-argentinas';
 const SVGNS='http://www.w3.org/2000/svg';
 const rootEl=document.documentElement;
 const appEl=$('app');
 const boardEl=document.querySelector('#app .board');
 const fieldEl=$('field');
 const scrollEl=$('pitchScrollArea');
 const textureEl=$('pitchTexture');
 const defsEl=fieldEl?fieldEl.querySelector('defs'):null;
 if(!appEl||!boardEl||!fieldEl||!scrollEl||!defsEl||!playersG||!ballG||!cells||!targetsG||!rangeG||!grass||!gL||!gR){
  console.warn('[Fútbol Único v97] No se reconoció la estructura del partido; se conserva la vista anterior.');
  return;
 }
 const mq=q=>window.matchMedia?window.matchMedia(q):{matches:false,addEventListener(){}};
 const motionMQ=mq('(prefers-reduced-motion: reduce)');
 const portraitMQ=mq('(max-width: 680px) and (orientation: portrait)');
 const reducedMotion=()=>!!motionMQ.matches;
 const ACTIONS=typeof ACTIONS_PER_TURN==='number'?ACTIONS_PER_TURN:11;
 const VISUAL_TEMPO_KEY='futbolUnico_v98_visual_tempo';
 let visualTempo='rapido';
 try{const savedTempo=localStorage.getItem(VISUAL_TEMPO_KEY);if(savedTempo==='normal'||savedTempo==='rapido')visualTempo=savedTempo;}catch(_e){}
 const tempoScale=()=>visualTempo==='rapido'?.70:1;
 // El motor explora variantes de forma asíncrona modificando temporalmente p/ball/turn.
 const stateIsLive=()=>!cpuSearching&&simulationRandomState===null&&!brainTrainingRunning&&!sequenceSearchRunning;
 // El viewBox base se transforma a 20×13 y patchPitch26x17 lo remapea a la cancha final 26×17.
 // El recorte elimina margen exterior, pero conserva ambas porterías y las fichas extremas.
 const VB={x:-95,y:-45,w:1990,h:1160};
 let vertical=false;
 let followBallEnabled=true;
 try{followBallEnabled=localStorage.getItem('futbolUnico_v98_mobile_follow')!=='no';}catch(e){followBallEnabled=true;}
 const fuOriginalFollowBallOnMobile=typeof followBallOnMobile==='function'?followBallOnMobile:null;
 if(fuOriginalFollowBallOnMobile){followBallOnMobile=function(){if(!followBallEnabled)return;return fuOriginalFollowBallOnMobile.apply(this,arguments);};}
 // En la cancha vertical el SVG gira -90°; fichas, balón y etiquetas giran +90° para quedar derechas.
 // El balón y los dorsales se agrandan moderadamente sólo en el encuadre vertical del celular.
 const upT=(big,ball)=>vertical?(ball?'rotate(90) scale(1.44)':big?'rotate(90) scale(1.23)':'rotate(90)'):null;
 function upGroup(parent,big,cls){const g=svg('g',{class:'fu97-up'+(cls?' '+cls:''),transform:upT(big)},parent);if(big)g.dataset.big='1';return g;}
 function refreshUprights(){fieldEl.querySelectorAll('.fu97-up').forEach(n=>{const t=upT(n.dataset.big==='1',n.dataset.ball==='1');if(t)n.setAttribute('transform',t);else n.removeAttribute('transform');});}
 // v98.52: fichas ampliadas al máximo visual prudente sin invadir casillas vecinas.
 const TK={rim:43,body:38.5,sel:51,halo:58};

 // ---------------------------------------------------------------- utilidades
 function svg(tag,attrs,parent){
  const n=document.createElementNS(SVGNS,tag);
  if(attrs)for(const k in attrs){const v=attrs[k];if(v!==null&&v!==undefined)n.setAttribute(k,String(v));}
  if(parent)parent.appendChild(n);
  return n;
 }
 function el(tag,cls,parent,text){
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(text!==undefined&&text!==null)n.textContent=text;
  if(parent)parent.appendChild(n);
  return n;
 }
 const r1=v=>Math.round(v*10)/10;
 const owned=q=>!!q&&q.owner!==null&&q.owner!==undefined;
 const cheb=(a,b)=>Math.max(Math.abs(a.c-b.c),Math.abs(a.r-b.r));
 let fxSeed=0x2F6B1D3;
 function fxRandom(){
  fxSeed=(fxSeed+0x6D2B79F5)|0;
  let t=Math.imul(fxSeed^(fxSeed>>>15),1|fxSeed);
  t=(t+Math.imul(t^(t>>>7),61|t))^t;
  return ((t^(t>>>14))>>>0)/4294967296;
 }
 const ease={
  inOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,
  outCubic:t=>1-Math.pow(1-t,3),
  outQuart:t=>1-Math.pow(1-t,4),
  inOutSine:t=>-(Math.cos(Math.PI*t)-1)/2
 };
 function hexToRgb(hex){
  let v=String(hex||'').trim().replace('#','');
  if(v.length===3)v=v.split('').map(ch=>ch+ch).join('');
  const n=parseInt(v.slice(0,6),16);
  return Number.isFinite(n)?{r:(n>>16)&255,g:(n>>8)&255,b:n&255}:{r:128,g:128,b:128};
 }
 function luminance(hex){
  const c=hexToRgb(hex);
  const ch=[c.r,c.g,c.b].map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);});
  return .2126*ch[0]+.7152*ch[1]+.0722*ch[2];
 }
 function rgba(hex,a){const c=hexToRgb(hex);return 'rgba('+c.r+','+c.g+','+c.b+','+a+')';}
 const numberStroke=hex=>luminance(hex)>.42?'rgba(5,9,14,.82)':'rgba(255,255,255,.7)';
 function kit(t){
  return {
   primary:colors[t]||'#777777',
   secondary:kitColors[t]||'#ffffff',
   accent:accentColors[t]||'#ffffff',
   number:numberColors[t]||accentColors[t]||'#ffffff',
   pattern:kitPatterns[t]||'plain'
  };
 }
 function teamName(t){
  try{return typeof tournamentTeamName==='function'?tournamentTeamName(t):'Equipo '+t;}catch(e){return 'Equipo '+t;}
 }
 const escapeText=s=>String(s==null?'':s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));

 // Diseños de camiseta: mismas figuras del motor (definidas para radio 22) escaladas al radio pedido.
 function kitShapes(pattern,R){
  const k=R/22,s=[];
  const rect=(x,y,w,h)=>s.push(['rect',{x:r1(x*k),y:r1(y*k),width:r1(w*k),height:r1(h*k)}]);
  const poly=pts=>s.push(['polygon',{points:pts.map((v,i)=>r1(v*k)+(i%2?' ':',')).join('').trim()}]);
  if(pattern==='stripes'){for(let xx=-24;xx<=24;xx+=10)rect(xx,-24,5,48);}
  else if(pattern==='pinstripes'){for(let xx=-24;xx<=24;xx+=7)rect(xx,-24,2,48);}
  else if(pattern==='wide-stripes'){for(let xx=-24;xx<=24;xx+=15)rect(xx,-24,8,48);}
  else if(pattern==='double-stripe'){rect(2,-24,4,48);rect(9,-24,4,48);}
  else if(pattern==='central'){rect(-6,-24,12,48);}
  else if(pattern==='band'){rect(-24,-5,48,10);}
  else if(pattern==='chestband'){rect(-24,-7,48,14);}
  else if(pattern==='sash'){poly([-26,-13,-19,-24,27,12,20,24]);}
  else if(pattern==='half'){rect(-22,-22,22,44);}
  else if(pattern==='badge'){s.push(['circle',{cx:0,cy:r1(k),r:r1(8*k)}]);}
  else if(pattern==='shoulders'){rect(-24,-23,48,11);}
  else if(pattern==='sleeves'){poly([-23,-22,-10,-22,-14,22,-23,22]);poly([10,-22,23,-22,23,22,14,22]);}
  else if(pattern==='hoops'){for(let yy=-22;yy<=22;yy+=13)rect(-24,yy,48,6);}
  else if(pattern==='v'){poly([-24,-23,-13,-23,0,-4,13,-23,24,-23,24,-13,0,9,-24,-13]);}
  return s;
 }
 function shapesMarkup(shapes){
  return shapes.map(sh=>'<'+sh[0]+' '+Object.keys(sh[1]).map(k=>k+'="'+sh[1][k]+'"').join(' ')+'/>').join('');
 }
 const SHIRT='M13 5 4.5 9.6 1.4 18.3 8 20.6 10 16.8 10 36.2H30V16.8L32 20.6 38.6 18.3 35.5 9.6 27 5C25 8.5 22.7 10 20 10S15 8.5 13 5Z';
 function shirtSvg(t,id){
  const k=kit(t),pattern=k.pattern==='plain'?'':shapesMarkup(kitShapes(k.pattern,22));
  return '<svg class="fu97-shirt" viewBox="0 0 40 40" aria-hidden="true" focusable="false"><defs><clipPath id="'+id+'"><path d="'+SHIRT+'"/></clipPath>'+
   '<linearGradient id="'+id+'s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient></defs>'+
   '<path d="'+SHIRT+'" fill="'+escapeText(k.primary)+'"/>'+
   (pattern?'<g clip-path="url(#'+id+')"><g transform="translate(20 21) scale(.8)" fill="'+escapeText(k.secondary)+'">'+pattern+'</g></g>':'')+
   '<path d="'+SHIRT+'" fill="url(#'+id+'s)" opacity=".9"/>'+
   '<path d="M13 5C15 8.5 17.3 10 20 10S25 8.5 27 5" fill="none" stroke="'+escapeText(k.accent)+'" stroke-width="1.8"/>'+
   '<path d="'+SHIRT+'" fill="none" stroke="rgba(0,0,0,.5)" stroke-width="1.1" stroke-linejoin="round"/></svg>';
 }
 // Recursos de futbolistas cenitales, sin dorsales impresos. El dorsal vive en el panel de acción.
 const PLAYER_SPRITE_ROOT=new URL('../shared/jugadores/',document.baseURI).href;
 // Cada club usa ocho sprites texturizados (uno por pose), generados a partir de las mismas figuras cenitales.
 let fuPlayerKitIds=['',tournamentMode&&tournamentClub?tournamentClub.id:null,tournamentMode&&tournamentOpponent?tournamentOpponent.id:null];
 const fuKitAssetIds=new Set((typeof FU_PRACTICE_CLUBS!=='undefined'?FU_PRACTICE_CLUBS:[]).map(c=>c.id));
 window.FU_SET_PLAYER_KIT=function(team,id){const t=Number(team);if(t!==1&&t!==2)return;fuPlayerKitIds[t]=id&&fuKitAssetIds.has(id)?id:null;};
 // Si se activa el uniforme alternativo por choque de colores, se abandona la textura titular; al volver, se recupera la camiseta del club.
 const fuAltKitButton=$('toggleKit2');if(fuAltKitButton)fuAltKitButton.addEventListener('click',()=>{fuPlayerKitIds[2]=(typeof alternateKitActive!=='undefined'&&alternateKitActive[2])?null:(tournamentOpponent?.id||null);drawPlayers();});
 const fuAltKitInput=$('altKit2');if(fuAltKitInput)fuAltKitInput.addEventListener('input',()=>{if(typeof alternateKitActive!=='undefined'&&alternateKitActive[2]){fuPlayerKitIds[2]=null;drawPlayers();}});
 function spritePalette(t){
  const k=kit(t),p=hexToRgb(k.primary),q=hexToRgb(k.secondary),white=luminance(k.primary)>.70;
  const hue=c=>{const r=c.r/255,g=c.g/255,b=c.b/255,mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;if(!d)return 0;let h=mx===r?((g-b)/d)%6:mx===g?(b-r)/d+2:(r-g)/d+4;h=(h*60+360)%360;return h;};
  const sat=c=>{const mx=Math.max(c.r,c.g,c.b),mn=Math.min(c.r,c.g,c.b);return mx===0?0:(mx-mn)/mx;};
  const isYellow=c=>hue(c)>=38&&hue(c)<=65&&sat(c)>.28 || c.r>165&&c.g>120&&c.b<110&&hue(c)>=35;
  const isOrange=c=>hue(c)>=12&&hue(c)<38&&sat(c)>.30;
  const isMaroon=c=>hue(c)>=330&&hue(c)<=350&&sat(c)>.3&&(.2126*c.r+.7152*c.g+.0722*c.b)/255<.42;
  const isRed=c=>(hue(c)<12||hue(c)>350)&&sat(c)>.30&&!isMaroon(c);
  const isPurple=c=>hue(c)>=258&&hue(c)<=320&&sat(c)>.25;
  const isTeal=c=>hue(c)>=163&&hue(c)<190&&sat(c)>.22;
  const isSky=c=>hue(c)>=190&&hue(c)<210&&sat(c)>.20;
  const isBlue=c=>hue(c)>=210&&hue(c)<258&&sat(c)>.2;
  const isGreen=c=>hue(c)>=75&&hue(c)<163&&sat(c)>.22;
  const isBlack=c=>Math.max(c.r,c.g,c.b)<65;
  const classify=c=>{
   if(isMaroon(c))return 'maroon';
   if(isPurple(c))return 'purple';
   if(isOrange(c))return 'orange';
   if(isTeal(c))return 'teal';
   if(isSky(c))return 'sky';
   if(isRed(c))return 'red';
   if(isYellow(c))return 'yellow';
   if(isGreen(c))return 'green';
   if(isBlack(c))return 'black';
   if(isBlue(c))return 'blue';
   return null;
  };
  if(white){
   const secondary=classify(q);
   return secondary||'black';
  }
  const primary=classify(p);
  // Si el club usa azul con detalles dorados, conservamos la combinación amarillo/azul ya existente.
  if(isBlue(p)&&classify(q)==='yellow')return 'yellow';
  return primary||'blue';
 }
 function playerSpriteHref(x){
  if(x.n===1)return new URL((x.t===1?'keeper-yellow.png':'keeper-orange.png'),PLAYER_SPRITE_ROOT).href;
  const pose=(Math.max(2,Number(x.n)||2)-2)%8,clubId=fuPlayerKitIds[x.t];
  if(clubId)return new URL('kits/'+clubId+'-'+pose+'.webp',PLAYER_SPRITE_ROOT).href;
  const pal=spritePalette(x.t);
  return new URL(pal+'-'+pose+'.png',PLAYER_SPRITE_ROOT).href;
 }
 function miniTokenSvg(x,id){
  const k=kit(x.t),href=playerSpriteHref(x),gk=x.n===1;
  const ring=gk?(x.t===1?'#ffd52e':'#ff873d'):k.primary;
  return '<svg viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">'+
   '<circle r="45" fill="#07100d" fill-opacity=".75" stroke="'+escapeText(ring)+'" stroke-width="3.5"/>'+
   '<image x="-36" y="-36" width="72" height="72" preserveAspectRatio="xMidYMid meet" href="'+escapeText(href)+'"/>'+
   (gk?'<circle r="47" fill="none" stroke="'+escapeText(ring)+'" stroke-width="2" stroke-dasharray="4 4"/>':'')+'</svg>';
 }

 // ---------------------------------------------------------------- definiciones SVG compartidas
 function installDefs(){
  const d=defsEl;
  const stops=(g,list)=>list.forEach(s=>svg('stop',{offset:s[0],'stop-color':s[1],'stop-opacity':s[2]},g));
  const radial=(id,attrs,list)=>{const g=svg('radialGradient',Object.assign({id},attrs),d);stops(g,list);return g;};
  const linear=(id,attrs,list)=>{const g=svg('linearGradient',Object.assign({id},attrs),d);stops(g,list);return g;};
  svg('circle',{r:TK.body},svg('clipPath',{id:'fu97TkClip',clipPathUnits:'userSpaceOnUse'},d));
  svg('circle',{r:12.4},svg('clipPath',{id:'fu97BallClip',clipPathUnits:'userSpaceOnUse'},d));
  svg('rect',{x:0,y:0,width:1800,height:1100},svg('clipPath',{id:'fu97FieldClip',clipPathUnits:'userSpaceOnUse'},d));
  radial('fu97TkShade',{cx:'34%',cy:'27%',r:'78%'},[[0,'#ffffff',.34],[.38,'#ffffff',.04],[.72,'#000000',.1],[1,'#000000',.46]]);
  linear('fu97TkGloss',{x1:0,y1:0,x2:0,y2:1},[[0,'#ffffff',.6],[1,'#ffffff',0]]);
  radial('fu97GroundShadow',{},[[0,'#000000',.58],[.5,'#000000',.32],[1,'#000000',0]]);
  radial('fu97BallBase',{cx:'36%',cy:'30%',r:'75%'},[[0,'#ffffff',1],[.6,'#f2f4f1',1],[1,'#b9c2bd',1]]);
  radial('fu97BallShade',{cx:'32%',cy:'26%',r:'80%'},[[0,'#ffffff',.25],[.55,'#000000',0],[1,'#000000',.42]]);
  radial('fu97Spark',{},[[0,'#ffffff',1],[.35,'#fff6c4',.85],[1,'#ffb01f',0]]);
  radial('fu97Glow',{},[[0,'#ffffff',.9],[.45,'#ffffff',.3],[1,'#ffffff',0]]);
  const dot=svg('pattern',{id:'fu97MoveDot',patternUnits:'userSpaceOnUse',width:100,height:100},d);
  svg('rect',{width:100,height:100,fill:'#c8ff2e','fill-opacity':.075},dot);
  svg('circle',{cx:50,cy:50,r:19,fill:'none',stroke:'#c8ff2e','stroke-opacity':.42,'stroke-width':3},dot);
  svg('circle',{cx:50,cy:50,r:8.5,fill:'#eaffb5','fill-opacity':.95},dot);
  const duel=svg('pattern',{id:'fu97DuelMark',patternUnits:'userSpaceOnUse',width:100,height:100},d);
  svg('rect',{width:100,height:100,fill:'#ff8a1f','fill-opacity':.2},duel);
  svg('path',{d:'M36 36 64 64M64 36 36 64',stroke:'#ffd0a0','stroke-width':7,'stroke-linecap':'round'},duel);
  const net=svg('pattern',{id:'fu97Net',patternUnits:'userSpaceOnUse',width:13,height:13},d);
  svg('path',{d:'M0 0 13 13M13 0 0 13',stroke:'#ffffff','stroke-opacity':.36,'stroke-width':1.4},net);
  const marker=(id,color)=>{
   const m=svg('marker',{id,viewBox:'0 0 10 10',refX:5.5,refY:5,markerWidth:4.2,markerHeight:4.2,orient:'auto-start-reverse',markerUnits:'strokeWidth'},d);
   svg('path',{d:'M0 0 10 5 0 10 2.6 5Z',fill:color},m);
  };
  marker('fu97ArrowLime','#d8ff6a');marker('fu97ArrowAmber','#ffc04a');marker('fu97ArrowRed','#ff6b78');
  marker('fu97ArrowCyan','#6ff0ff');marker('fu97ArrowWhite','#ffffff');marker('fu97ArrowOrange','#ff9a3c');
  // Gradiente de sombreado reutilizado por las miniaturas HTML (mismo documento).
  if(!$('fu97HtmlDefs')){
   const holder=document.createElementNS(SVGNS,'svg');holder.id='fu97HtmlDefs';holder.setAttribute('aria-hidden','true');
   holder.setAttribute('width','0');holder.setAttribute('height','0');holder.style.position='absolute';
   const hd=svg('defs',null,holder);
   const g=svg('radialGradient',{id:'fu97TkShadeHtml',cx:'34%',cy:'27%',r:'78%'},hd);
   stops(g,[[0,'#ffffff',.34],[.38,'#ffffff',.04],[.72,'#000000',.1],[1,'#000000',.46]]);
   document.body.appendChild(holder);
  }
 }

 // ---------------------------------------------------------------- césped y líneas
 // Textura generada una sola vez: franjas de corte alineadas a las casillas, grano, desgaste y viñeta.
 // Geometría visual del arco ampliada para cubrir las tres casillas lógicas de gol (filas 4–6).
 // La fotografía conserva el césped y las líneas originales; solo se amplió el conjunto del arco en la imagen.
 // Esta geometría también da tamaño coherente a la animación de red sin cambiar destino, bloqueos ni reglas.
 const goalParts={
  L:{gx:27,dir:-1,back:-25,top:400,bot:700},
  R:{gx:1772,dir:1,back:1825,top:400,bot:700}
 };
 function buildPitch(){
  // v98.11: se recupera la distribución anterior del arquero (sin tres puestos fijos ni compresión visual).
  // La foto mantiene su césped original, y la boca gráfica del arco se amplía para corresponder a las tres
  // casillas lógicas de gol (filas 4, 5 y 6). No se alteran las coordenadas de la cuadrícula.
  fieldEl.setAttribute('viewBox',VB.x+' '+VB.y+' '+VB.w+' '+VB.h);
  // Zona clicable/animable de la portería ampliada. Las tres casillas de remate siguen en columnas 0 y 17.
  gL.setAttribute('x','-40');gL.setAttribute('y','400');gL.setAttribute('width','40');gL.setAttribute('height','300');
  gR.setAttribute('x','1800');gR.setAttribute('y','400');gR.setAttribute('width','40');gR.setAttribute('height','300');
 }

 // ---------------------------------------------------------------- capas de efectos
 let fxLow=null,fxHigh=null,previewG=null,ghostG=null;
 function buildLayers(){
  ['players','ball'].forEach(id=>{const n=$(id);if(n)n.removeAttribute('filter');});
  ghostG=svg('g',{id:'fu97Ghosts','pointer-events':'none'});
  previewG=svg('g',{id:'fu97Preview','pointer-events':'none'});
  fxLow=svg('g',{id:'fu97FxLow','pointer-events':'none'});
  fxHigh=svg('g',{id:'fu97FxHigh','pointer-events':'none'});
  fieldEl.insertBefore(ghostG,gL);
  fieldEl.insertBefore(previewG,gL);
  fieldEl.insertBefore(fxLow,playersG);
  fieldEl.insertBefore(fxHigh,ballG);
 }
 function fxLater(node,ms){setTimeout(()=>{if(node&&node.parentNode)node.parentNode.removeChild(node);},ms);}
 // Desvanecido por atributo (sin transiciones CSS sobre hijos del SVG).
 function fadeLater(node,ms){setTimeout(()=>{if(!node||!node.parentNode)return;rafAnimate(500,t=>{if(node.parentNode)node.setAttribute('opacity',(1-t).toFixed(3));}).then(()=>{if(node.parentNode)node.parentNode.removeChild(node);});},ms);}
 function dustPuff(x,y,color){
  if(reducedMotion()||!fxLow)return;
  const g=svg('g',{class:'fu97-dust',transform:'translate('+r1(x)+' '+r1(y)+')'},fxLow);
  const parts=[];
  for(let i=0;i<5;i++){
   const a=Math.PI*(.15+.7*fxRandom())+(i%2?Math.PI:0),d=10+fxRandom()*14,r0=4+fxRandom()*4;
   parts.push({c:svg('circle',{cx:r1(Math.cos(a)*d),cy:r1(Math.sin(a)*d*.45),r:r0,fill:color||'#e8f2d8'},g),r0,dx:Math.cos(a)*10,dy:Math.sin(a)*4});
  }
  fxAnimate(g,640,t=>{const e=ease.outCubic(t);parts.forEach(q=>{q.c.setAttribute('r',r1(q.r0*(1+1.3*e)));q.c.setAttribute('fill-opacity',(.5*(1-t)).toFixed(3));q.c.setAttribute('transform','translate('+r1(q.dx*e)+' '+r1(q.dy*e)+')');});});
 }
 function sparkBurst(x,y,color){
  if(!fxHigh)return;
  const g=svg('g',{class:'fu97-spark',transform:'translate('+r1(x)+' '+r1(y)+')'},fxHigh);
  const core=svg('circle',{r:10,fill:'url(#fu97Spark)'},g);
  const lines=[];
  if(!reducedMotion()){
   for(let i=0;i<8;i++){
    const a=i/8*Math.PI*2+fxRandom()*.4,l=16+fxRandom()*14;
    lines.push({n:svg('line',{stroke:color||'#ffe08a'},g),ux:Math.cos(a),uy:Math.sin(a),l});
   }
  }
  fxAnimate(g,520,t=>{
   const e=ease.outCubic(t);
   core.setAttribute('r',r1(8+30*e));core.setAttribute('fill-opacity',(1-t).toFixed(3));
   lines.forEach(q=>{const a0=10+q.l*e*.9,a1=a0+q.l*(1-e*.6);q.n.setAttribute('x1',r1(q.ux*a0));q.n.setAttribute('y1',r1(q.uy*a0));q.n.setAttribute('x2',r1(q.ux*a1));q.n.setAttribute('y2',r1(q.uy*a1));q.n.setAttribute('stroke-opacity',(1-t).toFixed(3));});
  });
 }
 function flashBadge(x,y,text,cls){
  if(!fxHigh)return;
  const g=svg('g',{class:'fu97-badge-fx '+(cls||''),transform:'translate('+r1(x)+' '+r1(y)+')'},fxHigh);
  const up=upGroup(g,false);
  const inner=svg('g',{class:'fu97-badge-fx-in'},up);
  const w=Math.max(96,text.length*15+34);
  svg('rect',{x:-w/2,y:-21,width:w,height:42,rx:21},inner);
  const t=svg('text',{y:8,'text-anchor':'middle'},inner);t.textContent=text;
  fxAnimate(g,1450,k=>{
   const a=k<.15?k/.15:k>.8?Math.max(0,1-(k-.8)/.2):1,s=k<.15?.7+.3*ease.outCubic(k/.15):1,dy=k<.15?10*(1-k/.15):k>.8?-12*(k-.8)/.2:0;
   inner.setAttribute('transform','translate(0 '+r1(dy)+') scale('+s.toFixed(3)+')');
   inner.setAttribute('fill-opacity',a.toFixed(3));inner.setAttribute('stroke-opacity',a.toFixed(3));
  });
 }
 // Huellas de la jugada: las acciones de la CPU quedan numeradas (1-2-3) hasta que vuelve a jugar el usuario.
 function ghostArrow(a,b,team,step){
  if(!ghostG)return;
  const len=Math.hypot(b.x-a.x,b.y-a.y);if(len<30)return;
  const ux=(b.x-a.x)/len,uy=(b.y-a.y)/len,cpu=team===CPU_TEAM&&cpuAutoEnabled;
  const g=svg('g',{class:'fu97-ghost-g'+(cpu?' is-cpu':'')},ghostG);
  svg('line',{class:'fu97-ghost fu97-ghost-t'+team+(cpu?' is-persist':''),x1:r1(a.x+ux*34),y1:r1(a.y+uy*34),x2:r1(b.x-ux*40),y2:r1(b.y-uy*40),'marker-end':team===1?'url(#fu97ArrowLime)':'url(#fu97ArrowAmber)'},g);
  if(cpu&&step){
   const m=svg('g',{class:'fu97-ghost-step',transform:'translate('+r1((a.x+b.x)/2)+' '+r1((a.y+b.y)/2)+')'},g);
   const up=upGroup(m,false);
   svg('circle',{r:15},up);
   const t=svg('text',{y:6,'text-anchor':'middle'},up);t.textContent=String(step);
  }
  while(ghostG.childNodes.length>9)ghostG.removeChild(ghostG.firstChild);
  // Las de la CPU se ven durante su turno y unos segundos después; el relato conserva la jugada.
  if(!cpu)fxLater(g,3200);else fadeLater(g,6500);
 }
 function clearCpuGhosts(){if(ghostG)ghostG.querySelectorAll('.is-cpu').forEach(n=>n.remove());}
 // Inicio de cualquier animación de acción: se limpia la guía táctica para que la jugada se lea limpia.
 function onActionStart(){
  if(mobilePendingAction)clearMobileDecision();
  targetsG.innerHTML='';rangeG.innerHTML='';clearReach();clearPreview();
  boardEl.classList.add('fu97-anim');
  if(stateIsLive()){
   const cpuActing=turn===CPU_TEAM&&cpuAutoEnabled;
   if(!cpuActing||actionNo===1)clearCpuGhosts();
  }
  Promise.resolve().then(syncHud);
 }

 // ---------------------------------------------------------------- fichas
 function tokenNode(x){
  const k=kit(x.t),gk=x.n===1;
  const g=svg('g',{
   class:'player fu97-tk fu97-t'+x.t+(gk?' fu97-gk':'')+(x.id===selected?' sel':'')+(recommendation&&recommendation.playerId===x.id?' advisor-player':''),
   transform:'translate('+X(x.c)+' '+Y(x.r)+')','aria-label':'Jugador '+x.n+' · '+teamName(x.t)
  });
  g.dataset.id=x.id;
  // El área táctil conserva el radio y las coordenadas del motor.
  svg('circle',{class:'fu97-tk-hit',r:48},g);
  // Sombra y jugador realista sin dorsal; en vista móvil la figura gira con la cancha.
  const body=svg('g',{class:'fu97-tk-body'},g);
  svg('ellipse',{class:'fu97-tk-shadow',cx:3,cy:25,rx:31,ry:9},body);
  const href=playerSpriteHref(x),pose=Math.max(2,Number(x.n)||2)-2,mirror=(pose>=8)||((x.n+x.t)%3===0);
  // En el campo horizontal el jugador se orienta hacia el arco rival; la cancha rotada en móvil conserva esa orientación.
  const rememberedFacing=fuFacingAngles.get(String(x.id));
  const faceRotation=Number.isFinite(rememberedFacing)?rememberedFacing:(x.t===1?-90:90);
  const imageTransform='rotate('+faceRotation+')'+(mirror?' scale(-1 1)':'');
  const imageG=svg('g',{class:'fu97-player-art',transform:imageTransform,'data-fu-facing':faceRotation,'data-fu-mirror':mirror?'1':'0'},body);
  svg('image',{class:'fu97-player-sprite',x:-46,y:-46,width:92,height:92,href:href,preserveAspectRatio:'xMidYMid meet','pointer-events':'none'},imageG);
  // Anillo de selección y señales se mantienen separados del cuerpo para no taparlo.
  const up=upGroup(g,true);
  svg('circle',{class:'fu97-tk-halo',r:TK.halo},up);
  svg('circle',{class:'fu97-tk-sel',r:TK.sel},up);
  svg('circle',{class:'fu97-tk-must',r:TK.sel-2},up);
  const badge=svg('g',{class:'fu97-tk-done',transform:'translate(34 -32)'},up);
  svg('circle',{r:10.5},badge);
  svg('path',{d:'M-4.6 .2-1.2 3.6 5 -3.4'},badge);
  // La tarjeta amarilla es un distintivo independiente y queda fuera del cuerpo.
  const yellowCount=(typeof fuDisciplineCards!=='undefined'&&fuDisciplineCards instanceof Map)?(fuDisciplineCards.get(x.id)||0):0;
  if(!gk&&yellowCount>0){
   const disciplinary=svg('g',{class:'discipline-yellow-card fu97-discipline-card',transform:'translate(-45 -28)','pointer-events':'none'},up);
   svg('rect',{x:-6,y:-10,width:14,height:20,rx:2,fill:'#ffdf32',stroke:'#111820','stroke-width':2},disciplinary);
   svg('path',{d:'M-2 -5H4 M-2 -1H4',fill:'none',stroke:'#8b6b00','stroke-width':1.2,'stroke-linecap':'round'},disciplinary);
  }
  g.addEventListener('click',e=>{e.stopPropagation();clickP(x);});
  return g;
 }
 function decorateTokens(){
  if(!stateIsLive())return;
  const o=owner(),must=new Set();
  if(kickoffPassRequired){const k=p.find(z=>isKickoffKicker(z));if(k)must.add(k.id);}
  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1)must.add(freeKickRequiredId);
  const humanTurn=!isCpuTurn()&&!matchClockFinished;
  playersG.querySelectorAll('.player').forEach(n=>{
   const id=+n.dataset.id,x=p.find(z=>z.id===id);if(!x)return;
   const acted=x.t===turn&&(playedThisTurn.includes(id)||(actionNo>1&&id===lastPlayedId));
   n.classList.toggle('fu97-acted',acted&&!matchClockFinished);
   n.classList.toggle('fu97-must',must.has(id)&&x.t===turn&&!anim);
   n.classList.toggle('fu97-carrier',!!o&&o.id===id);
   n.classList.toggle('fu97-active-team',x.t===turn&&humanTurn);
  });
 }

 // ---------------------------------------------------------------- balón
 let ballLift=null,ballSpinG=null,ballShadowEl=null,ballSpin=0,pendingBallRedraw=false;
 function buildBall(){
  ballG.innerHTML='';
  ballG.classList.add('fu97-ball');
  const up=upGroup(ballG,true);up.dataset.ball='1';
  {const t0=upT(true,true);if(t0)up.setAttribute('transform',t0);}
  ballShadowEl=svg('ellipse',{class:'fu97-ball-shadow',cx:0,cy:0,rx:14,ry:6,transform:'translate(2 10)'},up);
  ballLift=svg('g',{class:'fu97-ball-lift'},up);
  svg('circle',{class:'fu97-ball-base',r:13,fill:'url(#fu97BallBase)'},ballLift);
  ballSpinG=svg('g',{class:'fu97-ball-spin','clip-path':'url(#fu97BallClip)'},ballLift);
  const panel='M0,-4.9 4.7,-1.5 2.9,3.9 -2.9,3.9 -4.7,-1.5Z';
  svg('path',{d:panel,class:'fu97-ball-panel'},ballSpinG);
  for(let i=0;i<5;i++){
   const a=i*72;
   svg('path',{d:panel,class:'fu97-ball-panel',transform:'rotate('+a+') translate(0 -12.4) rotate(180) scale(.92)'},ballSpinG);
   svg('path',{d:'M0 -4.9V-8.2',class:'fu97-ball-seam',transform:'rotate('+a+')'},ballSpinG);
  }
  svg('circle',{class:'fu97-ball-shade',r:13,fill:'url(#fu97BallShade)'},ballLift);
  svg('circle',{class:'fu97-ball-edge',r:13},ballLift);
  svg('ellipse',{class:'fu97-ball-glint',cx:-4.6,cy:-5.8,rx:4.2,ry:2.1,transform:'rotate(-35 -4.6 -5.8)'},ballLift);
 }
 function setBallPose(h,spin){
  if(!ballLift)return;
  const s=1+h/92;
  ballLift.setAttribute('transform',h>0.05?'translate(0 '+r1(-h)+') scale('+s.toFixed(3)+')':'');
  const sh=Math.max(.38,1-h/78);
  ballShadowEl.setAttribute('transform','translate('+r1(2+h*.22)+' '+r1(10+h*.3)+') scale('+sh.toFixed(3)+')');
  ballShadowEl.setAttribute('fill-opacity',(.3+.7*sh).toFixed(2));
  if(spin!==undefined){ballSpin=spin%360;ballSpinG.setAttribute('transform','rotate('+r1(ballSpin)+')');}
 }
 function ballOffset(){return vertical?{x:-31,y:33}:{x:29,y:27};}
 function cellPoint(c,r){return {x:X(c),y:Y(r)};}
 function ballPoint(q){const pt=cellPoint(q.c,q.r);if(owned(q)){const o=ballOffset();pt.x+=o.x;pt.y+=o.y;}return pt;}

 // ---------------------------------------------------------------- guía táctica (modo pase/remate)
 function rectPath(q){return 'M'+q.x+' '+q.y+'h'+q.w+'v'+q.h+'h'+(-q.w)+'Z';}
 function clearReach(){cells.querySelectorAll('.fu97-reach').forEach(n=>n.classList.remove('fu97-reach'));}
 function pill(parent,x,y,text,cls,anchor){
  const g=svg('g',{class:'fu97-pill '+(cls||''),transform:'translate('+r1(x)+' '+r1(y)+')'},parent);
  const up=upGroup(g,false);
  const big=vertical,fsz=big?24:17,hh=big?42:34;
  const w=Math.max(46,text.length*fsz*.74+22);
  const dx=anchor==='end'?-w:anchor==='start'?0:-w/2;
  svg('rect',{x:r1(dx),y:-hh/2,width:r1(w),height:hh,rx:hh/2},up);
  const t=svg('text',{x:r1(dx+w/2),y:r1(fsz*.38),'text-anchor':'middle'},up);t.textContent=text;
  return g;
 }
 function laneStatus(x,from,z){
  const to={c:z.c,r:z.r};
  const lane=trajectoryInterceptionRisk(from,to,x.t,p);
  if(lane.blocked)return {status:'blocked',label:'BLOQUEADO',lane};
  if(isOffsidePosition(z)||passBeyondOffsideLine(to.c,x))return {status:'offside',label:'ADELANTADO',lane};
  if(lane.risk>0)return {status:'risk',label:'RIESGO '+Math.round(lane.risk*100)+'%',lane};
  return {status:'free',label:'LIBRE',lane};
 }
 // Escala de color para porcentajes del motor (precisión del pase o llegada al receptor).
 function precisionTier(v){return v>=.8?'p5':v>=.6?'p4':v>=.45?'p3':v>=.3?'p2':'p1';}
 function ballCurve(a,b,passer,dist,arc){
  const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1,perp={x:-dy/len,y:dx/len};
  const curve=(arc&&dist>0)?(passer&&passer.n===10?Math.min(68,20+dist*7):Math.min(42,12+dist*5)):0;
  return {x:(a.x+b.x)/2+perp.x*curve,y:(a.y+b.y)/2+perp.y*curve};
 }
 function newRebuildBallTargets(){
  targetsG.innerHTML='';
  rangeG.innerHTML='';
  clearReach();
  clearPreview();
  const x=active();
  if(mode!=='ball'||!x||selected!==x.id||anim||!stateIsLive())return;
  const from={c:ball.c,r:ball.r},cx=X(ball.c),cy=Y(ball.r);
  const reach=BALL_REACH(x.n);
  cells.querySelectorAll('.cell').forEach(q=>{if(bLegal(+q.dataset.c,+q.dataset.r))q.classList.add('fu97-reach');});
  // 1) Precisión del pase por distancia: el mismo modelo que usa el motor (v96) para ejecutar y para la IA.
  const zones=svg('g',{class:'fu97-zones','clip-path':'url(#fu97FieldClip)'},rangeG);
  const sq=d=>({x:cx-(d+.5)*S,y:cy-(d+.5)*S,w:(2*d+1)*S,h:(2*d+1)*S});
  // Se agrupan las distancias con el mismo nivel: tinte suave, sin bordes.
  const tiers=[];
  for(let d=1;d<=reach;d++){
   const tier=precisionTier(estimatedPassPrecision(x,from,{c:from.c+d,r:from.r}));
   if(tiers.length&&tiers[tiers.length-1].tier===tier)tiers[tiers.length-1].to=d;
   else tiers.push({tier,from:d,to:d});
  }
  tiers.forEach(t=>{
   svg('path',{d:rectPath(sq(t.to))+' '+rectPath(sq(t.from-1)),'fill-rule':'evenodd',class:'fu97-zone is-'+t.tier},zones);
  });
  // 2) Receptores: carril libre, con riesgo, bloqueado o adelantado (funciones de evaluación del motor).
  //    Sin carriles dibujados hacia todos: el recorrido y el detalle aparecen al apuntar un destino (vista previa).
  const rings=svg('g',{class:'fu97-receivers'},targetsG);
  p.forEach(z=>{
   if(z.t!==x.t||z.id===x.id)return;
   const to={c:z.c,r:z.r},dist=cheb(from,to);
   if(dist>reach)return;
   const st=laneStatus(x,from,z);
   const success=st.status==='blocked'||st.status==='offside'?0:estimatedPassPrecision(x,from,to)*(1-st.lane.risk);
   const b=cellPoint(z.c,z.r);
   const rg=svg('g',{class:'fu97-rcv is-'+st.status,transform:'translate('+b.x+' '+b.y+')'},rings);
   svg('circle',{r:41},rg);
   if(st.status==='blocked'||st.status==='offside'){
    const ic=svg('g',{class:'fu97-rcv-icon',transform:'translate(-29 -29)'},rg);
    svg('circle',{r:11},ic);
    svg('path',{d:st.status==='blocked'?'M-4.5-4.5 4.5 4.5M4.5-4.5-4.5 4.5':'M-3.5 5.5V-6M-3.5-6H5L2.5-3 5 0H-3.5'},ic);
   }
   // Un solo número por compañero (probabilidad de que llegue); el riesgo lo dice el color del anillo y de la
   // etiqueta. Bloqueado o adelantado: solo el ícono. En la última fila la etiqueta va arriba para no cortarse.
   if(st.status==='free'||st.status==='risk'){
    const below=z.r<R-1;
    pill(rings,b.x,b.y+(below?58:-58),Math.round(success*100)+'%','fu97-rcv-pill is-'+st.status+' is-'+precisionTier(success));
   }
  });
  // 3) Remates: casillas habilitadas y probabilidad de gol estimada por el motor (sin líneas de tiro).
  const side=x.t===1?'R':'L',goalC=side==='R'?C-1:0;
  const shots=[];
  for(let r=4;r<=6;r++){
   const end={c:goalC,r};
   if(cheb(from,end)>reach)continue;
   shots.push({end,est:estimateShotProbability(x,from,end,p)});
  }
  if(shots.length){
   const sg=svg('g',{class:'fu97-shots'},targetsG);
   shots.forEach(s=>{
    const pct=Math.round(s.est.probability*100);
    const tier=pct<=0?'none':pct<20?'low':pct<45?'mid':'high';
    const ex=X(s.end.c),ey=Y(s.end.r);
    svg('circle',{class:'fu97-shot-end is-'+tier,cx:ex,cy:ey,r:16},sg);
    pill(sg,ex+(side==='R'?-30:30),ey,pct+'%','fu97-shot-pill is-'+tier,side==='R'?'end':'start');
   });
  }
 }

 // ---------------------------------------------------------------- vista previa: puntero en escritorio y confirmación táctil en móvil
 let previewKey='';
 let mobilePendingAction=null;
 function isTouchMobile(){return !!mq('(max-width:680px)').matches&&((navigator.maxTouchPoints||0)>0||('ontouchstart' in window));}
 function clearPreview(){previewKey='';if(previewG)previewG.innerHTML='';}
 function mobileActionContext(){return isTouchMobile()&&stateIsLive()&&!anim&&!brainTrainingRunning&&!cpuSearching&&!isCpuTurn()&&!matchClockFinished;}
 function setMobileDecision(data,action){
  if(!data||!ui.mobileDecision)return false;
  mobilePendingAction=Object.assign({},action,{c:data.c,r:data.r,selected:selected,turn:turn,mode:mode});
  ui.mobileDecisionTitle.textContent=data.title||'Revisar jugada';
  ui.mobileDecisionTag.textContent=data.tag||'PREVISUALIZACIÓN';
  ui.mobileDecisionSub.textContent=data.reason||data.subtitle||'Revisá la jugada y confirmá para ejecutarla.';
  // Los movimientos legales no necesitan explicar recorrido/distancia/destino:
  // se libera espacio para la cancha. Si el movimiento no es válido, se conserva el motivo del bloqueo.
  const isSimpleMove=data.type==='move';
  ui.mobileDecision.classList.toggle('is-move-action',isSimpleMove);
  ui.mobileDecision.classList.toggle('is-invalid',!data.valid);
  (ui.mobileDecisionCards||[]).forEach((card,i)=>{
   const item=(data.items||[])[i];card.root.hidden=!item;
   if(!item)return;
   card.label.textContent=item.label;card.value.textContent=item.value;
   card.value.classList.toggle('is-good',item.tone==='good');
   card.value.classList.toggle('is-warn',item.tone==='warn');
   card.value.classList.toggle('is-bad',item.tone==='bad');
  });
  ui.mobileDecisionConfirm.disabled=!data.valid;
  ui.mobileDecisionConfirm.textContent=data.valid?'CONFIRMAR ACCIÓN':'ACCIÓN NO DISPONIBLE';
  ui.mobileDecision.hidden=false;
  boardEl.classList.add('fu97-has-decision');
  scheduleSize();
  return true;
 }
 function clearMobileDecision(){
  if(!mobilePendingAction&&(!ui.mobileDecision||ui.mobileDecision.hidden))return;
  mobilePendingAction=null;
  if(ui.mobileDecision)ui.mobileDecision.hidden=true;
  boardEl.classList.remove('fu97-has-decision');
  clearPreview();
  scheduleSize();
 }
 function assessMobileBallAction(c,r,side){
  const x=selected!==null?p.find(z=>z.id===selected):null;
  if(!x||x.id!==ball.owner||x.t!==turn||mode!=='ball')return null;
  if(side){const rows=goalTargets(side);if(!rows.length)return null;c=side==='L'?0:C-1;r=rows[0];}
  const to={c:Number(c),r:Number(r)},from={c:ball.c,r:ball.r};
  if(!Number.isFinite(to.c)||!Number.isFinite(to.r)||!bLegal(to.c,to.r))return null;
  const goalSide=side||goalSideForCell(to.c,to.r,x.t);
  const path=passPathCells(from,to),first=firstTrajectoryRival(path,x.t),lane=trajectoryInterceptionRisk(from,to,x.t,p);
  const precision=goalSide?estimatedShotAccuracy(x,from,to):estimatedPassPrecision(x,from,to);
  const mate=at(to.c,to.r,x.id);
  let reason='';
  if(first&&first.index===0)reason='Acción bloqueada: hay un rival en la primera casilla de la trayectoria.';
  else if(kickoffPassRequired&&!(mate&&mate.t===x.t))reason='Saque inicial: el Jugador 10 debe pasar a un compañero.';
  else if(restartPassOnlyId===x.id&&goalSide)reason='Saque de banda: primero hay que pasar; no se puede rematar directamente.';
  else if(!goalSide&&mate&&mate.t===x.t&&(isOffsidePosition(mate)||passBeyondOffsideLine(to.c,x)))reason='Pase bloqueado: el compañero está adelantado.';
  else if(!goalSide&&passBeyondOffsideLine(to.c,x))reason='Pase bloqueado: supera la línea permitida del anteúltimo rival.';
  else if(goalSide&&!goalTargets(goalSide).includes(to.r))reason='Remate bloqueado: el arquero tapa ese casillero.';
  if(side&&!goalSideForCell(to.c,to.r,x.t))reason=reason||'Seleccioná el arco rival para rematar.';
  const shot=goalSide?estimateShotProbability(x,from,to,p):null;
  const risk=Math.max(0,Math.min(1,Number(lane&&lane.risk)||0));
  const safe=precision*(1-risk);
  const items=goalSide?[
   {label:'GOL ESTIMADO',value:Math.round(((shot&&shot.probability)||0)*100)+'%',tone:((shot&&shot.probability)||0)>=.3?'good':((shot&&shot.probability)||0)>=.12?'warn':'bad'},
   {label:'PRECISIÓN',value:Math.round(precision*100)+'%',tone:precision>=.65?'good':precision>=.4?'warn':'bad'},
   {label:'INTERCEPCIÓN',value:Math.round(risk*100)+'%',tone:risk>=.45?'bad':risk>=.2?'warn':'good'}
  ]:[
   {label:'PRECISIÓN',value:Math.round(precision*100)+'%',tone:precision>=.65?'good':precision>=.4?'warn':'bad'},
   {label:mate&&mate.t===x.t?'LLEGA ESTIMADO':'PASE LIMPIO',value:Math.round(safe*100)+'%',tone:safe>=.65?'good':safe>=.4?'warn':'bad'},
   {label:'INTERCEPCIÓN',value:Math.round(risk*100)+'%',tone:risk>=.45?'bad':risk>=.2?'warn':'good'}
  ];
  const isShot=!!goalSide;
  return {valid:!reason,c:to.c,r:to.r,side:side||null,type:side?'shoot':'ball',title:(isShot?'REMATE':'PASE')+' · JUGADOR '+x.n,tag:'ESTIMACIÓN',reason,subtitle:isShot?'Probabilidad orientativa del motor; el resultado depende de la resolución real.':'Estimaciones orientativas; el pase puede desviarse y la intercepción depende de la trayectoria.',items};
 }
 function assessMobileMoveAction(c,r,opponent){
  const x=selected!==null?p.find(z=>z.id===selected):null;
  if(!x||x.t!==turn||mode!=='player'||!pLegal(c,r,x))return null;
  let reason='';
  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1)reason='Tiro libre obligatorio: el ejecutante debe pasar o rematar primero.';
  else if(kickoffPassRequired&&!opponent)reason='Saque inicial obligatorio: el Jugador 10 debe pasar a un compañero.';
  else if(ball.owner===x.id&&restartPassOnlyId===x.id&&!opponent)reason='Saque de banda: el ejecutante debe pasar; no puede trasladarse con el balón.';
  else if(isOffsideMove(c,x))reason='Movimiento bloqueado por fuera de juego.';
  if(opponent){
   if(opponent.n===1&&ball.owner===opponent.id)reason='No se puede disputar al arquero cuando controla la pelota.';
   const type=duelType(x,opponent),foul=type==='atras'?.60:type==='costado'?.30:0;
   return {valid:!reason,c,r,title:'DISPUTA · JUGADOR '+x.n,tag:'PREVISUALIZACIÓN',reason,subtitle:'La disputa se ejecuta con las reglas actuales.',type:'duel',targetId:opponent.id,items:[
    {label:'TIPO',value:type==='atras'?'POR ATRÁS':type==='costado'?'LATERAL':'FRONTAL'},
    {label:'FALTA POSIBLE',value:Math.round(foul*100)+'%',tone:foul>=.5?'bad':foul>0?'warn':'good'},
    {label:'DISTANCIA',value:Math.max(Math.abs(c-x.c),Math.abs(r-x.r))+' casillero(s)'}
   ]};
  }
  const dx=Math.abs(c-x.c),dy=Math.abs(r-x.r),dist=Math.max(dx,dy);
  const special=[3,4,7,8].includes(x.n),knight=special&&((dx===2&&dy===1)||(dx===1&&dy===2));
  const route=knight?'SALTO 2×1':dx===0||dy===0?'RECTA':dx===dy?'DIAGONAL':'TRAYECTORIA ESPECIAL';
  return {valid:!reason,c,r,title:'MOVIMIENTO · JUGADOR '+x.n,tag:'DESTINO',reason,subtitle:'Confirmá para mover la ficha a la casilla marcada.',type:'move',items:[
   {label:'RECORRIDO',value:route,tone:'good'},
   {label:'DISTANCIA',value:dist+' casillero(s)'},
   {label:'DESTINO',value:(c+1)+' × '+(r+1)}
  ]};
 }
 function stageMobileBallAction(c,r,side){
  if(!mobileActionContext())return false;
  const data=assessMobileBallAction(c,r,side);if(!data)return false;
  if(!setMobileDecision(data,{type:data.type,c:data.c,r:data.r,side:data.side}))return false;
  previewFor(data.c,data.r);
  return true;
 }
 function stageMobileMoveAction(c,r,opponent){
  if(!mobileActionContext())return false;
  const data=assessMobileMoveAction(c,r,opponent);if(!data)return false;
  if(!setMobileDecision(data,{type:data.type,c:data.c,r:data.r,targetId:data.targetId}))return false;
  previewFor(data.c,data.r);
  return true;
 }
 function executeMobileDecision(){
  const pending=mobilePendingAction;if(!pending)return;
  if(pending.turn!==turn||pending.selected!==selected||pending.mode!==mode||isCpuTurn()||matchClockFinished){clearMobileDecision();return;}
  let data=null;
  if(pending.type==='ball'||pending.type==='shoot')data=assessMobileBallAction(pending.c,pending.r,pending.side);
  else if(pending.type==='move')data=assessMobileMoveAction(pending.c,pending.r,null);
  else if(pending.type==='duel'){
   const x=p.find(z=>z.id===selected),opponent=p.find(z=>z.id===pending.targetId);
   if(x&&opponent)data=assessMobileMoveAction(opponent.c,opponent.r,opponent);
  }
  if(!data||!data.valid){if(data)setMobileDecision(data,pending);else clearMobileDecision();return;}
  clearMobileDecision();
  if(pending.type==='shoot'&&pending.side){shoot(pending.side);return;}
  if(pending.type==='ball'){moveBall(pending.c,pending.r);return;}
  if(pending.type==='move'){movePlayer(pending.c,pending.r);return;}
  if(pending.type==='duel'){
   const x=p.find(z=>z.id===selected),opponent=p.find(z=>z.id===pending.targetId);
   if(x&&opponent)duel(x,opponent);
  }
 }
 function previewFor(c,r){
  if(anim||!stateIsLive()||isCpuTurn()||matchClockFinished){clearPreview();return;}
  const key=mode+':'+selected+':'+c+':'+r;
  if(key===previewKey)return;
  clearPreview();previewKey=key;
  const x=selected!==null?p.find(z=>z.id===selected):null;
  if(!x||x.t!==turn)return;
  if(mode==='player'){
   const cell=cells.querySelector('.cell[data-c="'+c+'"][data-r="'+r+'"]');
   if(!cell||!cell.classList.contains('pl'))return;
   const isDuel=cell.classList.contains('duel');
   const a=cellPoint(x.c,x.r),b=cellPoint(c,r),len=Math.hypot(b.x-a.x,b.y-a.y)||1,ux=(b.x-a.x)/len,uy=(b.y-a.y)/len;
   svg('line',{class:'fu97-pv-move'+(isDuel?' is-duel':''),x1:r1(a.x+ux*34),y1:r1(a.y+uy*34),x2:r1(b.x-ux*(isDuel?40:20)),y2:r1(b.y-uy*(isDuel?40:20)),'marker-end':isDuel?'url(#fu97ArrowOrange)':'url(#fu97ArrowLime)'},previewG);
   if(!isDuel)svg('circle',{class:'fu97-pv-ghost',cx:b.x,cy:b.y,r:TK.rim},previewG);
   pill(previewG,b.x,b.y-56,isDuel?'DISPUTA':'MOVER','fu97-pv-pill'+(isDuel?' is-duel':''));
   return;
  }
  if(mode==='ball'&&bLegal(c,r)){
   const from={c:ball.c,r:ball.r},to={c,r},dist=cheb(from,to);
   const a=ballPoint({c:ball.c,r:ball.r,owner:x.id}),b=cellPoint(c,r),ctrl=ballCurve(a,b,x,dist,true);
   const path=passPathCells(from,to),first=firstTrajectoryRival(path,x.t);
   const precision=estimatedPassPrecision(x,from,to);
   const lane=trajectoryInterceptionRisk(from,to,x.t,p);
   const blocked=!!(first&&first.index===0);
   const mate=at(c,r,x.id);
   const goalSide=goalSideForCell(c,r,x.t);
   let cls='is-'+precisionTier(precision),label='PRECISIÓN '+Math.round(precision*100)+'%';
   if(blocked){cls='is-blocked';label='BLOQUEADO';}
   else if(kickoffPassRequired&&!(mate&&mate.t===x.t)){cls='is-blocked';label='SAQUE: A UN COMPAÑERO';}
   else if(restartPassOnlyId===x.id&&goalSide){cls='is-blocked';label='SAQUE DE BANDA: SOLO PASE';}
   else if(mate&&mate.t===x.t&&(isOffsidePosition(mate)||passBeyondOffsideLine(c,x))){cls='is-blocked';label='ADELANTADO';}
   else if(passBeyondOffsideLine(c,x)){cls='is-blocked';label='MÁS ALLÁ DEL ANTEÚLTIMO';}
   else if(goalSide){const est=estimateShotProbability(x,from,to,p);label='GOL '+Math.round(est.probability*100)+'%';cls='is-goal';}
   else if(mate&&mate.t===x.t){const ok=precision*(1-lane.risk);label='LLEGA '+Math.round(ok*100)+'%'+(lane.risk>0?' · RIESGO':'');cls='is-'+precisionTier(ok)+(lane.risk>0?' is-risk':'');}
   else if(lane.risk>0){label+=' · RIESGO '+Math.round(lane.risk*100)+'%';cls+=' is-risk';}
   svg('path',{class:'fu97-pv-pass '+cls,d:'M'+r1(a.x)+' '+r1(a.y)+'Q'+r1(ctrl.x)+' '+r1(ctrl.y)+' '+b.x+' '+b.y,'marker-end':blocked?'url(#fu97ArrowRed)':'url(#fu97ArrowCyan)'},previewG);
   if(first){const fp=cellPoint(first.player.c,first.player.r);svg('circle',{class:'fu97-pv-threat'+(blocked?' is-blocked':''),cx:fp.x,cy:fp.y,r:40},previewG);}
   svg('circle',{class:'fu97-pv-target '+cls,cx:b.x,cy:b.y,r:22},previewG);
   pill(previewG,b.x,b.y-56,label,'fu97-pv-pill '+cls);
  }
 }
 function hookPreview(){
  const mouse=e=>e.pointerType==='mouse'||e.pointerType==='pen';
  fuListen(cells,'pointerover',e=>{if(!mouse(e))return;const q=e.target.closest&&e.target.closest('.cell');if(q)previewFor(+q.dataset.c,+q.dataset.r);});
  fuListen(playersG,'pointerover',e=>{
   if(!mouse(e))return;
   const n=e.target.closest&&e.target.closest('.player');if(!n||!stateIsLive())return;
   const z=p.find(q=>q.id===+n.dataset.id);if(!z)return;
   if(mode==='ball'||(selected!==null&&z.id!==selected))previewFor(z.c,z.r);else clearPreview();
  });
  fuListen(fieldEl,'pointerleave',()=>{if(!mobilePendingAction)clearPreview();});
  const suppress=e=>{e.preventDefault();e.stopPropagation();if(e.stopImmediatePropagation)e.stopImmediatePropagation();};
  fuListen(cells,'click',e=>{
   if(!mobileActionContext())return;
   const q=e.target.closest&&e.target.closest('.cell');if(!q)return;
   const c=Number(q.dataset.c),r=Number(q.dataset.r);
   if(mode==='ball'){
    if(bLegal(c,r)&&stageMobileBallAction(c,r,null))suppress(e);
    return;
   }
   if(mode==='player'&&selected!==null){
    const x=p.find(z=>z.id===selected);
    if(!x||x.t!==turn||at(c,r,x.id))return;
    if(stageMobileMoveAction(c,r,null))suppress(e);
   }
  },true);
  fuListen(playersG,'click',e=>{
   if(!mobileActionContext())return;
   const node=e.target.closest&&e.target.closest('.player');if(!node)return;
   const z=p.find(q=>q.id===Number(node.dataset.id));if(!z)return;
   if(mode==='ball'&&selected!==null&&bLegal(z.c,z.r)){
    if(stageMobileBallAction(z.c,z.r,null))suppress(e);
    return;
   }
   if(mode==='player'&&selected!==null){
    const x=p.find(q=>q.id===selected);
    if(x&&x.t===turn&&z.t!==x.t&&z.id===ball.owner&&pLegal(z.c,z.r,x)){
     if(stageMobileMoveAction(z.c,z.r,z))suppress(e);
    }
   }
  },true);
  [['L',gL],['R',gR]].forEach(pair=>fuListen(pair[1],'click',e=>{
   if(!mobileActionContext()||mode!=='ball')return;
   if(stageMobileBallAction(0,0,pair[0]))suppress(e);
  },true));
 }

 // ---------------------------------------------------------------- animaciones
 // Duraciones idénticas al motor (incluida la cámara lenta de la CPU) y mismas posiciones finales.
 function track(start,duration,xAt,finalX,ids,priority){
  if(typeof fuV963TrackAction==='function')return fuV963TrackAction(start,duration,xAt,finalX,ids,priority);
  return Promise.resolve(start());
 }
 function makeStreak(color){
  if(reducedMotion()||!fxLow)return null;
  return svg('polygon',{class:'fu97-streak',fill:color||'#ffffff'},fxLow);
 }
 function updateStreak(st,a,cur,w){
  if(!st)return;
  const dx=cur.x-a.x,dy=cur.y-a.y,len=Math.hypot(dx,dy);
  if(len<4){st.setAttribute('points','');return;}
  const ux=dx/len,uy=dy/len,tl=Math.min(len,150),tx=cur.x-ux*tl,ty=cur.y-uy*tl,px=-uy*w,py=ux*w;
  st.setAttribute('points',r1(tx)+','+r1(ty)+' '+r1(cur.x+px)+','+r1(cur.y+py)+' '+r1(cur.x-px)+','+r1(cur.y-py));
 }
 function fadeOut(node,ms){if(!node)return;node.classList.add('is-out');fxLater(node,ms||320);}
 // Pulsos de la ficha (patada, recepción, atajada, golpe) con atributos SVG animados por JS:
 // las animaciones CSS de transform/opacity dentro del SVG crean capas compuestas y encarecen el repintado.
 const PULSES={
  kick:{ms:340,f:t=>'scale('+(1+.12*Math.sin(Math.PI*Math.min(1,t/.7))).toFixed(3)+')'},
  receive:{ms:400,f:t=>'scale('+(1+.1*Math.sin(Math.PI*t)).toFixed(3)+')'},
  catch:{ms:680,f:t=>'scale('+(1+.22*Math.sin(Math.PI*Math.min(1,t/.45))*(t<.45?1:Math.max(0,1-(t-.45)/.55*1.3))).toFixed(3)+')'},
  hit:{ms:380,f:t=>'translate('+r1(Math.sin(t*Math.PI*6)*4*(1-t))+' 0)'}
 };
 function pulseToken(id,kind){
  if(reducedMotion())return;
  const n=nodePlayer(id),b=n&&n.querySelector('.fu97-tk-body'),cfg=PULSES[kind];
  if(!b||!cfg)return;
  const token={};b.__fu97Pulse=token;
  rafAnimate(cfg.ms,t=>{if(b.__fu97Pulse===token)b.setAttribute('transform',cfg.f(t));}).then(()=>{if(b.__fu97Pulse===token){b.removeAttribute('transform');b.__fu97Pulse=null;}});
 }
 // Animación por atributos para efectos efímeros (sin capas compuestas).
 function fxAnimate(node,ms,frame){
  if(!node)return;
  rafAnimate(ms,t=>{if(node.parentNode)frame(t);}).then(()=>{if(node.parentNode)node.parentNode.removeChild(node);});
 }
 async function moveCore(id,a,b,duration,slow,eFn){
  const n=nodePlayer(id);
  if(!n)return;
  const body=n.querySelector('.fu97-tk-body'),shadow=n.querySelector('.fu97-tk-shadow');
  const carrying=ball.owner===id,off=ballOffset(),fx=!reducedMotion();
  const len=Math.hypot(b.x-a.x,b.y-a.y);
  const steps=slow?Math.max(2,Math.round(len/60)):Math.max(1,Math.round(len/115));
  const z=p.find(q=>q.id===id),streak=!slow&&len>0?makeStreak(z?kit(z.t).primary:'#fff'):null;
  const actionStep=stateIsLive()?actionNo:0;
  n.classList.add('fu97-moving');
  let spin=ballSpin;
  const spinRate=len/13*57.3;
  await rafAnimate(duration,t=>{
   const e=eFn(t),x=a.x+(b.x-a.x)*e,y=a.y+(b.y-a.y)*e;
   setPlayerVisual(id,x,y);
   if(fx&&body){
    const hop=Math.abs(Math.sin(Math.PI*t*steps))*(slow?3.2:6.5);
    body.setAttribute('transform','translate(0 '+r1(-hop)+')');
    if(shadow)shadow.setAttribute('transform','translate(3 15) scale('+(1-hop/34).toFixed(3)+')');
   }
   if(carrying){setBallVisual(x+off.x,y+off.y,1);if(fx)setBallPose(0,spin+spinRate*e);}
   if(streak)updateStreak(streak,a,{x,y},20*Math.sin(Math.PI*Math.min(1,t*1.2)));
  });
  setPlayerVisual(id,b.x,b.y);
  if(body)body.removeAttribute('transform');
  if(shadow)shadow.setAttribute('transform','translate(3 15)');
  if(carrying){setBallVisual(b.x+off.x,b.y+off.y,1);setBallPose(0,spin+spinRate);}
  n.classList.remove('fu97-moving');
  if(streak)fadeOut(streak);
  if(fx&&len>0)dustPuff(b.x,b.y+16);
  if(len>0&&!slow)ghostArrow(a,b,z?z.t:1,actionStep);
 }
 function newAnimatePlayerMove(id,from,to,options){
  options=options||{};
  const slow=!!options.slow,dist=cheb(from,to);
  const baseDur=slow?1100+dist*300:255+Math.max(0,dist-1)*120;
  const cpuScale=slowCpuVisuals?(slow?(visualTempo==='rapido'?1.10:1.25):(visualTempo==='rapido'?1.30:2.0)):1;
  const duration=Math.max(slow?350:120,Math.round(baseDur*tempoScale()*cpuScale));
  const a=cellPoint(from.c,from.r),b=cellPoint(to.c,to.r);
  const eFn=slow?ease.inOutSine:ease.inOutCubic;
  const xAt=t=>a.x+(b.x-a.x)*eFn(t);
  onActionStart();
  return track(()=>moveCore(id,a,b,duration,slow,eFn),duration,xAt,b.x,[id],2);
 }

 // Plan de vuelo del balón: rodado, globo con rebote, remate potente, gol con red, atajada, desvío.
 function planBallFlight(from,to,options){
  const arc=options.arc===undefined?true:!!options.arc,goal=!!options.goal;
  const dist=cheb(from,to);
  const baseDur=options.duration??Math.round((315+dist*72)*(goal?1:2));
  const ballCpuScale=slowCpuVisuals?(visualTempo==='rapido'?1.18:1.55):1;
  const dur=Math.max(120,Math.round(baseDur*tempoScale()*ballCpuScale));
  const passer=p.find(z=>z.id===from.owner)||null;
  const shooterTeam=passer?passer.t:(turn||1);
  const a=ballPoint(from),b=ballPoint(to);
  const ctrl=ballCurve(a,b,passer,dist,arc);
  const toPlayer=owned(to)?p.find(z=>z.id===to.owner):null;
  const kind=goal?(owned(to)?'save':(goalSideForCell(to.c,to.r,shooterTeam)?'goal':'miss')):(owned(to)?'pass':(at(to.c,to.r)&&!arc?'deflect':'loose'));
  const replay=kind==='goal'&&baseDur>=2000;
  const travel=goal?Math.max(dur,visualTempo==='rapido'?(replay?1400:900):1750):dur;
  const settle=goal?(visualTempo==='rapido'?(replay?130:80):170):(visualTempo==='rapido'?60:90);
  const lofted=!goal&&arc&&dist>=4;
  const H=goal?Math.min(34,10+dist*3):lofted?Math.min(62,10+dist*6.5):(arc&&options.duration&&options.duration<=330?16:0);
  // Fracción del viaje en la que el balón llega: los remates son rápidos y el resto se usa para la red/atajada.
  const arrive=kind==='goal'?(replay?.72:.5):kind==='save'?(replay?.7:.52):kind==='miss'?.56:1;
  let net=null,netEnd=null;
  if(kind==='goal'){
   const side=to.c===0?'L':'R',gp=goalParts[side];
   if(gp){net=gp;netEnd={x:gp.back-gp.dir*12,y:Math.max(gp.top+26,Math.min(gp.bot-26,b.y+(b.y-a.y)*.12))};}
  }
  const bez=(e,p0,p1,p2)=>{const u=1-e;return u*u*p0+2*u*e*p1+e*e*p2;};
  function posAt(t){
   // t: progreso normalizado del viaje completo (0..1).
   if(t<=arrive||!(arrive<1)){
    const k=arrive<1?t/arrive:t;
    const e=goal?ease.outQuart(Math.min(1,k)):lofted?ease.inOutSine(k):kind==='deflect'?ease.outCubic(k):ease.outCubic(k);
    const x=bez(e,a.x,ctrl.x,b.x),y=bez(e,a.y,ctrl.y,b.y);
    let h=0;
    if(H>0){
     if(lofted){h=e<.84?H*4*(e/.84)*(1-e/.84):H*.16*4*((e-.84)/.16)*(1-(e-.84)/.16);}
     else h=H*4*e*(1-e)*(goal?.9:1);
    }
    return {x,y,h,e};
   }
   const k=(t-arrive)/(1-arrive);
   if(kind==='goal'&&netEnd){
    const e=ease.outCubic(Math.min(1,k*1.35));
    return {x:b.x+(netEnd.x-b.x)*e,y:b.y+(netEnd.y-b.y)*e,h:Math.max(0,(1-e)*6),e:1,post:k};
   }
   if(kind==='miss'){
    const e=ease.outCubic(k),bounce=Math.abs(Math.sin(Math.PI*e*2))*10*(1-e);
    return {x:b.x,y:b.y,h:bounce,e:1,post:k};
   }
   return {x:b.x,y:b.y,h:0,e:1,post:k};
  }
  return {from,to,a,b,ctrl,kind,replay,lofted,goal,arc,dist,travel,settle,total:travel+settle,posAt,toPlayer,shooterTeam,arrive,net,netEnd,passer,step:stateIsLive()?actionNo:0};
 }
 function makeTrail(hot){
  if(!fxHigh)return null;
  return svg('polygon',{class:'fu97-trail'+(hot?' is-hot':'')},fxHigh);
 }
 function drawTrail97(poly,pts,width){
  if(!poly)return;
  if(pts.length<2){poly.setAttribute('points','');return;}
  const left=[],right=[];
  for(let i=0;i<pts.length;i++){
   const q=pts[i],nx=pts[Math.min(pts.length-1,i+1)],pv=pts[Math.max(0,i-1)];
   let dx=nx.x-pv.x,dy=nx.y-pv.y;const len=Math.hypot(dx,dy)||1;dx/=len;dy/=len;
   const w=width*(i/(pts.length-1));
   left.push(r1(q.x-dy*w)+','+r1(q.y+dx*w));right.push(r1(q.x+dy*w)+','+r1(q.y-dx*w));
  }
  poly.setAttribute('points',left.concat(right.reverse()).join(' '));
 }
 function animateNet(gp,ms){
  if(!gp||!gp.net||reducedMotion())return;
  rafAnimate(ms,t=>{
   const bulge=Math.sin(Math.PI*Math.min(1,t*1.6))*28*(1-t*.55)+Math.sin(t*Math.PI*5)*5*(1-t);
   gp.net.setAttribute('d',gp.netD(bulge));
   gp.backLine.setAttribute('d','M'+gp.back+' '+(gp.top+8)+'Q'+(gp.back+gp.dir*bulge)+' 550 '+gp.back+' '+(gp.bot-8));
  }).then(()=>{gp.net.setAttribute('d',gp.netD(0));gp.backLine.setAttribute('d','M'+gp.back+' '+(gp.top+8)+'Q'+gp.back+' 550 '+gp.back+' '+(gp.bot-8));});
 }
 async function ballCore(plan){
  const fx=!reducedMotion();
  const hot=plan.goal;
  const trail=fx?makeTrail(hot):null;
  const pts=[];
  const spin0=ballSpin,spinTotal=(Math.hypot(plan.b.x-plan.a.x,plan.b.y-plan.a.y)/13)*57.3*(plan.lofted?.45:1);
  if(plan.replay)boardEl.classList.add('fu97-replay');
  if(plan.kind==='goal'||plan.kind==='save'||plan.kind==='miss')boardEl.classList.add('fu97-shooting');
  if(plan.passer&&fx)pulseToken(plan.passer.id,'kick');
  let arrivedFx=false,netFx=false;
  await rafAnimate(plan.travel,t=>{
   const q=plan.posAt(t);
   setBallVisual(q.x,q.y,1);
   setBallPose(q.h,spin0+spinTotal*Math.min(1,q.e));
   if(trail){
    pts.push({x:q.x,y:q.y-q.h});
    const maxPts=plan.goal?(plan.replay?22:15):12;
    while(pts.length>maxPts)pts.shift();
    if(t>=plan.arrive&&pts.length>1)pts.shift();
    drawTrail97(trail,pts,plan.goal?9:6.5);
   }
   if(!arrivedFx&&t>=plan.arrive){
    arrivedFx=true;
    if(plan.kind==='goal'&&!netFx){netFx=true;animateNet(plan.net,plan.replay?1100:820);if(fx)sparkBurst(plan.b.x,plan.b.y,'#ffe08a');}
    else if(plan.kind==='save'){
     sparkBurst(plan.b.x,plan.b.y,'#bfefff');
     if(plan.toPlayer&&fx)pulseToken(plan.toPlayer.id,'catch');
     flashBadge(plan.b.x,plan.b.y-70,'¡ATAJADA!','is-save');
    }else if(plan.kind==='miss'){flashBadge(plan.b.x,plan.b.y-62,'¡AFUERA!','is-miss');}
   }
  });
  setBallVisual(plan.b.x,plan.b.y,1);
  if(plan.kind==='goal'&&plan.netEnd){const q=plan.posAt(1);setBallVisual(q.x,q.y,1);}
  // Asentamiento (misma duración que el motor).
  const end=plan.kind==='goal'&&plan.netEnd?plan.posAt(1):{x:plan.b.x,y:plan.b.y};
  await rafAnimate(plan.settle,t=>{
   const h=plan.kind==='loose'||plan.kind==='deflect'?Math.sin(Math.PI*t)*4:0;
   setBallVisual(end.x,end.y,1);setBallPose(h);
   if(trail&&pts.length>1){pts.shift();drawTrail97(trail,pts,plan.goal?9:6.5);}
  });
  setBallVisual(end.x,end.y,1);
  setBallPose(0);
  if(trail)fadeOut(trail,200);
  if(plan.replay)boardEl.classList.remove('fu97-replay');
  boardEl.classList.remove('fu97-shooting');
  if(plan.kind==='pass'&&plan.toPlayer){
   if(fx)pulseToken(plan.toPlayer.id,'receive');
   ghostArrow(plan.a,{x:plan.b.x-ballOffset().x,y:plan.b.y-ballOffset().y},plan.toPlayer.t,plan.step);
  }else if(plan.kind==='deflect'){
   sparkBurst(plan.b.x,plan.b.y,'#ffb36b');
   const z=at(plan.to.c,plan.to.r);if(z&&fx)pulseToken(z.id,'hit');
  }
 }
 function newAnimateBall(from,to,options){
  options=options||{};
  onActionStart();
  const plan=planBallFlight(from,to,options);
  const total=plan.total;
  const xAt=t=>{const ms=t*total;return ms>=plan.travel?(plan.kind==='goal'&&plan.netEnd?plan.netEnd.x:plan.b.x):plan.posAt(Math.min(1,ms/plan.travel)).x;};
  const ids=[from.owner,to.owner].filter((id,i,arr)=>id!==null&&id!==undefined&&arr.indexOf(id)===i);
  return track(()=>ballCore(plan),total,xAt,plan.b.x,ids,1);
 }
 async function duelCore(attackerId,rivalId,fromA,toA,fromR,toR,ballFrom,ballTo,result,duration){
  const fx=!reducedMotion();
  const a0=cellPoint(fromA.c,fromA.r),a1=cellPoint(toA.c,toA.r);
  const q0=cellPoint(fromR.c,fromR.r),q1=cellPoint(toR.c,toR.r);
  const ball0=ballPoint({c:ballFrom.c,r:ballFrom.r,owner:rivalId}),ball1=ballPoint(ballTo);
  const movingBall=ballFrom.c!==ballTo.c||ballFrom.r!==ballTo.r;
  const trail=fx&&movingBall?makeTrail(false):null,pts=[];
  const nr=nodePlayer(rivalId),na=nodePlayer(attackerId);
  let impact=false;
  await rafAnimate(duration,t=>{
   const e=easeInOut(t);
   let ax=a0.x+(a1.x-a0.x)*e,ay=a0.y+(a1.y-a0.y)*e;
   if(result==='atras'){
    const approach=Math.min(1,e/.46),recoil=e<=.46?0:((e-.46)/.54);
    const ex=a0.x+(a1.x-a0.x)*approach,ey=a0.y+(a1.y-a0.y)*approach;
    ax=e<=.46?ex:ex+(a1.x-ex)*easeInOut(recoil);
    ay=e<=.46?ey:ey+(a1.y-ey)*easeInOut(recoil);
   }
   setPlayerVisual(attackerId,ax,ay);
   setPlayerVisual(rivalId,q0.x+(q1.x-q0.x)*e,q0.y+(q1.y-q0.y)*e);
   if(!impact&&e>=.42){
    impact=true;
    if(fx){
     const mx=(ax+q0.x+(q1.x-q0.x)*e)/2,my=(ay+q0.y+(q1.y-q0.y)*e)/2;
     sparkBurst(mx,my,'#ffd27a');
    }
   }
   const bt=clamp01((t-.20)/.62),be=easeInOut(bt);
   if(movingBall){
    const bx=ball0.x+(ball1.x-ball0.x)*be,by=ball0.y+(ball1.y-ball0.y)*be;
    setBallVisual(bx,by,1);setBallPose(Math.sin(Math.PI*bt)*9,ballSpin+be*30);
    if(trail){pts.push({x:bx,y:by-Math.sin(Math.PI*bt)*9});while(pts.length>10)pts.shift();drawTrail97(trail,pts,5);}
   }else{
    setBallVisual(ball1.x,ball1.y,1);setBallPose(Math.sin(Math.PI*Math.min(1,t/.55))*4);
   }
  });
  setPlayerVisual(attackerId,a1.x,a1.y);setPlayerVisual(rivalId,q1.x,q1.y);setBallVisual(ball1.x,ball1.y,1);setBallPose(0);
  if(trail)fadeOut(trail,200);
  // Mismo rebote final del motor (180 ms), aplicado al cuerpo de la ficha.
  const bodies=[na,nr].filter(Boolean).map(n=>n.querySelector('.fu97-tk-body')).filter(Boolean);
  const reboundDuration=visualTempo==='rapido'?125:180;
  await rafAnimate(reboundDuration,t=>{const s=1+.11*Math.sin(Math.PI*t);bodies.forEach(b=>b.setAttribute('transform','scale('+s.toFixed(3)+')'));});
  bodies.forEach(b=>b.removeAttribute('transform'));
 }
 function newAnimateDuel(attackerId,rivalId,fromA,toA,fromR,toR,ballFrom,ballTo,options){
  options=options||{};
  const result=options.result||'frente';
  const duelCpuScale=slowCpuVisuals?(visualTempo==='rapido'?1.25:1.8):1;
  const duration=Math.max(180,Math.round((result==='atras'?500:430)*tempoScale()*duelCpuScale));
  const xAt=t=>{const e=easeInOut(t);return ((X(fromA.c)+(X(toA.c)-X(fromA.c))*e)+(X(fromR.c)+(X(toR.c)-X(fromR.c))*e))/2;};
  const finalX=(X(toA.c)+X(toR.c))/2;
  onActionStart();
  const reboundDuration=visualTempo==='rapido'?125:180;
  return track(()=>duelCore(attackerId,rivalId,fromA,toA,fromR,toR,ballFrom,ballTo,result,duration),duration+reboundDuration,xAt,finalX,[attackerId,rivalId],3);
 }

 // ---------------------------------------------------------------- orientación dinámica hacia el balón
 // La rotación es únicamente visual: lee la posición renderizada del balón y de cada ficha,
 // por lo que también acompaña pases, remates y desplazamientos animados sin tocar el motor.
 // Los sprites cenitales tienen el eje frontal hacia el borde inferior del PNG; por eso se resta 90°.
 let fuFacingRaf=0,fuFacingLastTimestamp=0;
 // El ángulo vive fuera del SVG porque drawPlayers reconstruye los nodos tras cada acción.
 // Se conserva por id para evitar reinicios bruscos y para que los giros continúen fluidos.
 const fuFacingAngles=new Map();
 function fuRememberFacingAngles(){
  if(!playersG||!fuFacingAngles)return;
  playersG.querySelectorAll('.player').forEach(node=>{
   const art=node.querySelector('.fu97-player-art'),id=node.dataset.id;
   if(!art||id===undefined)return;
   const angle=Number(art.getAttribute('data-fu-facing'));
   if(Number.isFinite(angle))fuFacingAngles.set(String(id),angle);
  });
 }
 function fuReadTranslate(node){
  if(!node)return null;
  const tr=node.getAttribute('transform')||'';
  const m=tr.match(/translate\(\s*(-?(?:\d+\.?\d*|\.\d+))(?:[ ,]+)(-?(?:\d+\.?\d*|\.\d+))/i);
  return m?{x:Number(m[1]),y:Number(m[2])}:null;
 }
 function fuAngleDelta(from,to){return ((to-from+540)%360)-180;}
 function fuUpdateFacingFrame(now){
  if(layerFailed)return;
  const dt=fuFacingLastTimestamp?Math.min(48,Math.max(0,now-fuFacingLastTimestamp)):16;
  fuFacingLastTimestamp=now;
  if(document.visibilityState!=='hidden'){
   const bp=fuReadTranslate(ballG);
   if(bp){
    // Interpolación continua y límite de velocidad angular: evita que el cuerpo
    // persiga instantáneamente cada microcambio del balón y produce un giro más orgánico.
    const smoothing=1-Math.exp(-dt/(reducedMotion()?280:340));
    const maxAngularStep=(reducedMotion()?150:180)*dt/1000;
    playersG.querySelectorAll('.player').forEach(node=>{
     const at=fuReadTranslate(node),art=node.querySelector('.fu97-player-art'),id=node.dataset.id;
     if(!at||!art||id===undefined)return;
     const dx=bp.x-at.x,dy=bp.y-at.y;
     // Si el balón ocupa exactamente la misma posición que la ficha, conserva la orientación.
     if(Math.hypot(dx,dy)<7)return;
     const target=Math.atan2(dy,dx)*180/Math.PI-90;
     const current=Number(art.getAttribute('data-fu-facing'));
     const cached=fuFacingAngles.get(String(id));
     const from=Number.isFinite(current)?current:(Number.isFinite(cached)?cached:(node.classList.contains('fu97-t1')?-90:90));
     const delta=fuAngleDelta(from,target);
     // Un grado de tolerancia evita vibraciones por pequeñas variaciones en la posición del balón.
     if(Math.abs(delta)<1){fuFacingAngles.set(String(id),from);return;}
     const eased=delta*smoothing;
     const step=Math.sign(delta)*Math.min(Math.abs(delta),Math.abs(eased),maxAngularStep);
     const next=from+step;
     fuFacingAngles.set(String(id),next);
     art.setAttribute('data-fu-facing',String(next));
     art.setAttribute('transform','rotate('+r1(next)+')'+(art.getAttribute('data-fu-mirror')==='1'?' scale(-1 1)':''));
    });
   }
  }
  fuFacingRaf=requestAnimationFrame(fuUpdateFacingFrame);
 }
 function fuStartFacingLoop(){
  if(fuFacingRaf)cancelAnimationFrame(fuFacingRaf);
  fuFacingLastTimestamp=0;
  fuUndo.push(()=>{if(fuFacingRaf)cancelAnimationFrame(fuFacingRaf);fuFacingRaf=0;});
  fuFacingRaf=requestAnimationFrame(fuUpdateFacingFrame);
 }

 // ---------------------------------------------------------------- dibujo principal
 function newDrawPlayers(){
  // Conserva el rumbo de cada jugador antes de reconstruir los nodos SVG.
  // Las acciones redibujan la capa; sin esta memoria, el giro arrancaba otra vez
  // desde la orientación inicial y provocaba un salto visible en cada jugada.
  fuRememberFacingAngles();
  playersG.innerHTML='';
  const frag=document.createDocumentFragment();
  p.forEach(x=>frag.appendChild(tokenNode(x)));
  playersG.appendChild(frag);
  decorateTokens();
  syncKits();
  // La capa visual reconstruye las fichas: volver a dibujar las tarjetas disciplinarias al final.
  if(typeof fuDrawDisciplinaryMarkers==='function')fuDrawDisciplinaryMarkers();
 }
 function newDrawBall(xOverride,yOverride){
  let x=X(ball.c),y=Y(ball.r);const o=owner();
  if(o){const off=ballOffset();x+=off.x;y+=off.y;}
  const manual=Number.isFinite(xOverride)&&Number.isFinite(yOverride);
  if(manual){x=xOverride;y=yOverride;}
  ballG.setAttribute('transform','translate('+x+' '+y+')');
  setBallPose(0);
  pendingBallRedraw=false;
  state.textContent=o?'Balón: Jugador '+o.n+' · Equipo '+o.t:'Balón suelto · casilla '+(ball.c+1)+'×'+(ball.r+1);
  if(!manual)requestAnimationFrame(t=>{if(!layerFailed)followBallOnMobile(t);});
 }

 // ---------------------------------------------------------------- reorganización de paneles
 const ui={};
 function updateTempoButton(){
  const b=ui.tempoBtn;if(!b)return;
  const fast=visualTempo==='rapido';
  const icon=fast?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 11-13h-6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  b.innerHTML=icon+'<span class="fu97-tempo-label">'+(fast?'Rápido':'Normal')+'</span>';
  b.classList.toggle('is-fast',fast);b.setAttribute('aria-pressed',String(fast));
  const label='Ritmo '+(fast?'rápido':'normal')+'. Pulsá para cambiar a '+(fast?'normal':'rápido')+'.';
  b.setAttribute('aria-label',label);b.title=label;
 }
 function setVisualTempo(value){
  visualTempo=value==='normal'?'normal':'rapido';
  try{localStorage.setItem(VISUAL_TEMPO_KEY,visualTempo);}catch(_e){}
  updateTempoButton();
 }
 const ICONS={
  status:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 7v5l3 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  legend:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h10M4 18h7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  match:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h10M18 7h2M4 17h2M10 17h10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="7" r="2.4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="17" r="2.4" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  kit:'<svg viewBox="0 0 40 40" aria-hidden="true"><path d="'+SHIRT+'" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/></svg>',
  expand:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  collapse:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  zoom:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="m15 15 5 5M8 10.5h5M10.5 8v5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  pitch:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2.5" width="12" height="19" rx="1.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 12h12" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>'
 };
 const LEGEND=[
  ['<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="4" fill="rgba(200,255,46,.12)"/><circle cx="12" cy="12" r="6.5" fill="none" stroke="#c8ff2e" stroke-opacity=".6" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="#eaffb5"/></svg>','Movimiento','casilla disponible para la ficha elegida'],
  ['<svg viewBox="0 0 24 24"><rect x="1" y="1" width="22" height="22" rx="4" fill="rgba(255,138,31,.25)" stroke="#ff9a3c" stroke-width="1.4"/><path d="M8 8l8 8M16 8l-8 8" stroke="#ffd0a0" stroke-width="2.2" stroke-linecap="round"/></svg>','Disputa','entrar en la casilla del rival con balón'],
  ['<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="#5dffa8" stroke-width="2.4"/></svg>','Pase libre','sin rivales en la línea de pase'],
  ['<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="#ffc04a" stroke-width="2.4" stroke-dasharray="4 2.4"/></svg>','Con riesgo','un rival puede interceptar'],
  ['<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" fill="none" stroke="#ff5d6c" stroke-width="2.4"/><path d="M8.6 8.6l6.8 6.8M15.4 8.6l-6.8 6.8" stroke="#ff5d6c" stroke-width="2" stroke-linecap="round"/></svg>','Bloqueado','rival pegado o receptor adelantado'],
  ['<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" fill="rgba(255,93,108,.35)"/><rect x="5" y="5" width="14" height="14" rx="2.5" fill="rgba(255,179,92,.5)"/><rect x="8" y="8" width="8" height="8" rx="2" fill="rgba(93,255,168,.8)"/></svg>','Precisión','verde alta · roja baja (distancia y dorsal)'],
  ['<svg viewBox="0 0 24 24"><rect x="1.5" y="6" width="21" height="12" rx="6" fill="#0b1118" stroke="#c8ff2e" stroke-width="1.4"/><text x="12" y="15.2" text-anchor="middle" font-size="8" font-weight="900" fill="#e9ffb0">%</text></svg>','Porcentajes','pase que llega · gol estimado (motor)'],
  ['<svg viewBox="0 0 24 24"><path d="M3 20 19 5" stroke="#ffc04a" stroke-width="2" stroke-dasharray="2 3.4" stroke-linecap="round"/><circle cx="11" cy="12.5" r="5" fill="#0b1118" stroke="#ffc04a" stroke-width="1.5"/><text x="11" y="15.4" text-anchor="middle" font-size="7.5" font-weight="900" fill="#ffe1a6">2</text></svg>','Jugada rival','recorrido numerado de la CPU'],
  ['<svg viewBox="0 0 24 24"><circle cx="11" cy="13" r="8" fill="#5a6577" opacity=".55"/><circle cx="17.5" cy="6.5" r="4.6" fill="#0d1520" stroke="#c8ff2e" stroke-width="1.2"/><path d="M15.6 6.6l1.3 1.3 2.4-2.6" fill="none" stroke="#c8ff2e" stroke-width="1.4" stroke-linecap="round"/></svg>','Ya jugó','en este turno actúa otra ficha']
 ];
 function card(parent,cls,title,icon){
  const s=el('section','fu97-card '+cls,parent);
  if(title){const h=el('h2','fu97-card-title',s);h.innerHTML=(icon||'')+'<span>'+escapeText(title)+'</span>';}
  return s;
 }
 function buildLayout(){
  const head=appEl.querySelector('.head');
  const sbBlock=head&&head.querySelector('.scoreboard-block');
  const sbLine=sbBlock&&sbBlock.querySelector('.scoreboard-line');
  const sbScore=sbLine&&sbLine.querySelector('.scoreboard-score');
  const clock=$('matchClock'),s1El=$('s1'),s2El=$('s2');
  if(!head||!sbBlock||!sbLine||!sbScore||!clock||!s1El||!s2El)throw new Error('marcador no reconocido');
  const nav=appEl.querySelector('.fu-home-nav');
  const duration=appEl.querySelector('.match-duration-control');
  const turnLine=$('turn'),narrative=$('matchNarrative'),controls=appEl.querySelector('.controls');
  const altKit=$('alternateKitPanel'),bottom=appEl.querySelector('.bottom'),msgEl=$('msg'),cpuEl=$('cpuStatus');
  const resultPanel=$('tournamentResultPanel'),hint=appEl.querySelector('.mobile-pitch-hint');
  const fab=$('ballModeControl'),fsBtn=$('pitchFullscreenControl');
  head.classList.add('fu97-topbar');
  // Navegación compacta.
  if(nav){
   head.insertBefore(nav,head.firstChild);
   nav.classList.add('fu97-nav');
   const a=nav.querySelector('a');
   if(a){
    const text=Array.from(a.childNodes).filter(n=>n.nodeType===3).map(n=>{const t=n.textContent;n.remove();return t;}).join(' ').replace(/\s+/g,' ').trim();
    const arrow=a.querySelector('.fu-arrow');
    if(arrow)arrow.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const label=el('span','fu97-nav-label',a,text||'Volver');
    a.title=label.textContent;a.setAttribute('aria-label',label.textContent);
   }
  }
  // Marcador tipo transmisión: [camiseta · equipo] [goles] [equipo · camiseta].
  const names=Array.from(sbScore.children).filter(n=>n.tagName==='B');
  Array.from(sbScore.childNodes).forEach(n=>{if(n.nodeType===3)n.remove();});
  const home=el('div','fu97-sb-team fu97-home'),away=el('div','fu97-sb-team fu97-away'),result=el('div','fu97-sb-result');
  ui.chip1=el('span','fu97-kitchip');ui.chip2=el('span','fu97-kitchip');
  home.appendChild(ui.chip1);if(names[0])home.appendChild(names[0]);
  if(names[1])away.appendChild(names[1]);away.appendChild(ui.chip2);
  result.appendChild(s1El);el('span','fu97-sb-sep',result,'–');result.appendChild(s2El);
  sbScore.append(home,result,away);
  ui.result=result;
  // Nombre completo en pantallas anchas y sigla en celulares (club en Torneo, «EQ 1/EQ 2» en Práctica).
  const clubs=tournamentMode&&tournamentClub&&tournamentOpponent?[tournamentClub,tournamentOpponent]:[null,null];
  [names[0],names[1]].forEach((b,i)=>{
   if(!b)return;
   const texts=Array.from(b.childNodes).filter(n=>n.nodeType===3);
   const club=clubs[i],fullText=texts.map(n=>n.textContent).join('').trim()||(club?club.name:'Equipo '+(i+1));
   texts.forEach(n=>n.remove());
   el('span','fu97-name-full',b,fullText);
   el('span','fu97-name-short',b,club&&club.short?club.short:'EQ '+(i+1));
   b.title=fullText;
  });
  sbScore.classList.add('fu97-scorebug');
  ui.scorebug=sbScore;
  // Insignia de turno con hasta once acciones, una por jugador.
  const turnBox=el('div','fu97-turnbox');
  turnBox.setAttribute('role','status');turnBox.setAttribute('aria-live','polite');
  ui.badge=el('span','fu97-turn-badge',turnBox,'TU TURNO');
  ui.pips=el('span','fu97-pips',turnBox);ui.pips.setAttribute('aria-hidden','true');
  for(let i=0;i<ACTIONS;i++)el('i',null,ui.pips);
  ui.turnSub=el('span','fu97-turn-sub',turnBox,'Acción 1/'+ACTIONS);
  sbLine.appendChild(turnBox);
  ui.turnBox=turnBox;
  const tools=el('div','fu97-ab-tools',sbLine);
  ui.viewBtn=el('button','fu97-tool fu97-viewtoggle',tools);ui.viewBtn.type='button';
  ui.viewBtn.addEventListener('click',()=>{setZoomPref(!zoomPref);});
  ui.followBtn=el('button','fu97-tool fu97-follow-toggle',tools);ui.followBtn.type='button';ui.followBtn.hidden=true;
  ui.followBtn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 1.8v4M12 18.2v4M1.8 12h4M18.2 12h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  ui.followBtn.addEventListener('click',()=>{followBallEnabled=!followBallEnabled;try{localStorage.setItem('futbolUnico_v98_mobile_follow',followBallEnabled?'si':'no');}catch(e){}updateFollowButton();if(followBallEnabled)requestAnimationFrame(()=>followBallOnMobile());});
  if(fsBtn){tools.appendChild(fsBtn);fsBtn.classList.add('fu97-tool');fsBtn.innerHTML='<span class="fs-icon" aria-hidden="true">'+ICONS.expand+'</span>';ui.fsBtn=fsBtn;}
  ui.tempoBtn=el('button','fu97-tool fu97-tempo-toggle',tools);ui.tempoBtn.type='button';
  ui.tempoBtn.addEventListener('click',()=>setVisualTempo(visualTempo==='rapido'?'normal':'rapido'));
  updateTempoButton();
  // Cuerpo: columna de cancha + panel lateral.
  const main=el('div','fu97-main');
  const col=el('div','fu97-pitchcol',main);
  const side=el('aside','fu97-side',main);side.setAttribute('aria-label','Panel del partido');
  appEl.insertBefore(main,boardEl);
  col.appendChild(boardEl);
  if(hint)col.appendChild(hint);
  if(resultPanel)col.appendChild(resultPanel);
  // Marco de la cancha: aloja la repetición y los avisos sin tocar el SVG.
  const frame=el('div','fu97-pitchframe');
  boardEl.insertBefore(frame,scrollEl);
  frame.appendChild(scrollEl);
  const tag=el('div','fu97-replay-tag',frame);tag.setAttribute('aria-hidden','true');
  tag.innerHTML='<i></i><span>REPETICIÓN</span>';
  // Cartel tipo transmisión para reanudaciones y jugadas (el texto completo sigue en el relato).
  ui.banner=el('div','fu97-banner',frame);ui.banner.setAttribute('aria-hidden','true');
  ui.bannerTitle=el('b',null,ui.banner);ui.bannerSub=el('span',null,ui.banner);
  ui.bannerS1=el('em',null,ui.bannerSub);ui.bannerS2=el('em','fu97-banner-more',ui.bannerSub);
  ui.frame=frame;
  // Barra de acción (dentro del tablero para que también se vea en pantalla completa).
  const bar=el('div','fu97-actionbar');bar.setAttribute('role','group');bar.setAttribute('aria-label','Jugada en curso');
  const chip=el('div','fu97-ab-player',bar);
  ui.chipToken=el('span','fu97-ab-token',chip);
  const chipText=el('span','fu97-ab-text',chip);
  ui.chipName=el('strong',null,chipText,'Elegí una ficha');
  ui.chipSub=el('small',null,chipText,'');
  const msgWrap=el('div','fu97-ab-msg',bar);
  if(msgEl)msgWrap.appendChild(msgEl);
  ui.msgWrap=msgWrap;
  ui.more=el('button','fu97-msg-more',msgWrap,'Ver más');ui.more.type='button';ui.more.hidden=true;
  ui.more.addEventListener('click',()=>{const open=!msgWrap.classList.contains('is-open');msgWrap.classList.toggle('is-open',open);ui.more.textContent=open?'Ver menos':'Ver más';});
  if(fab)bar.appendChild(fab);
  const mobileDecision=el('section','fu97-mobile-decision',bar);mobileDecision.hidden=true;mobileDecision.setAttribute('role','region');mobileDecision.setAttribute('aria-label','Previsualización de jugada');mobileDecision.setAttribute('aria-live','polite');
  const decisionHead=el('div','fu97-mobile-decision-head',mobileDecision);
  ui.mobileDecisionTitle=el('strong','fu97-mobile-decision-title',decisionHead,'Revisar jugada');
  ui.mobileDecisionTag=el('span','fu97-mobile-decision-tag',decisionHead,'ESTIMACIÓN');
  ui.mobileDecisionSub=el('div','fu97-mobile-decision-sub',mobileDecision,'');
  ui.mobileDecisionValues=el('div','fu97-mobile-decision-values',mobileDecision);
  ui.mobileDecisionCards=[];
  for(let i=0;i<3;i++){
   const metric=el('div','fu97-mobile-metric',ui.mobileDecisionValues);
   const label=el('span','fu97-mobile-metric-label',metric,'');
   const value=el('strong','fu97-mobile-metric-value',metric,'—');
   ui.mobileDecisionCards.push({root:metric,label,value});
  }
  const decisionActions=el('div','fu97-mobile-decision-actions',mobileDecision);
  ui.mobileDecisionConfirm=el('button','fu97-mobile-decision-confirm',decisionActions,'CONFIRMAR ACCIÓN');ui.mobileDecisionConfirm.type='button';
  ui.mobileDecisionCancel=el('button','fu97-mobile-decision-cancel',decisionActions,'CANCELAR');ui.mobileDecisionCancel.type='button';
  ui.mobileDecisionConfirm.addEventListener('click',executeMobileDecision);
  ui.mobileDecisionCancel.addEventListener('click',clearMobileDecision);
  ui.mobileDecision=mobileDecision;
  boardEl.insertBefore(bar,frame.nextSibling);
  ui.bar=bar;
  // Panel lateral.
  const status=card(side,'fu97-card-status','Jugada',ICONS.status);
  if(turnLine)status.appendChild(turnLine);
  const stateEl=$('state');if(stateEl)status.appendChild(stateEl);
  if(cpuEl)status.appendChild(cpuEl);
  const legend=card(side,'fu97-card-legend is-collapsed','Cómo leer la cancha',ICONS.legend);
  const ul=el('ul','fu97-legend',legend);
  // La guía es de consulta: queda plegada y se abre desde su título (clic, Enter o espacio).
  const lt=legend.querySelector('.fu97-card-title');
  if(lt){
   lt.setAttribute('role','button');lt.tabIndex=0;lt.setAttribute('aria-expanded','false');
   const toggleLegend=()=>{const open=legend.classList.toggle('is-collapsed')===false;lt.setAttribute('aria-expanded',String(open));scheduleSize();};
   lt.addEventListener('click',toggleLegend);
   lt.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleLegend();}});
  }
  LEGEND.forEach(item=>{const li=el('li',null,ul);li.innerHTML=item[0]+'<span><b>'+escapeText(item[1])+'</b><small>'+escapeText(item[2])+'</small></span>';});
  if(narrative){const story=card(side,'fu97-card-story',null);story.appendChild(narrative);}
  const matchCard=card(side,'fu97-card-match','Partido',ICONS.match);
  if(controls)matchCard.appendChild(controls);
  if(duration)matchCard.appendChild(duration);
  const kits=el('details','fu97-card fu97-kits',side);
  const summary=el('summary','fu97-card-title',kits);
  summary.innerHTML=ICONS.kit+'<span>Camisetas</span>';
  ui.kitPreview=el('span','fu97-kits-preview',summary);
  const kitBody=el('div','fu97-kits-body',kits);
  if(controls)controls.querySelectorAll('label.ctrl').forEach(l=>kitBody.appendChild(l));
  const studio=$('fuPracticeKitStudio');if(studio)kitBody.appendChild(studio);
  if(altKit)kitBody.appendChild(altKit);
  if(!kitBody.children.length)kits.hidden=true;
  if(bottom){bottom.classList.add('fu97-foot');side.appendChild(bottom);}
  // Observadores: textos del motor -> marcador, insignias y barra de acción.
  const watch=(node,fn,opts)=>{if(node)fuObserve(new MutationObserver(fn),node,opts||{childList:true,characterData:true,subtree:true});};
  watch(turnLine,syncHud);
  watch($('matchClockState'),syncHud);
  watch(cpuEl,syncHud,{childList:true,characterData:true,subtree:true,attributes:true,attributeFilter:['class']});
  [s1El,s2El].forEach(n=>watch(n,()=>bump(n)));
  watch(msgEl,onMessage);
  ['goalCelebrationOverlay','halftimeOverlay','finalMatchOverlay','foulNotice'].forEach(id=>{const n=$(id);if(n)fuObserve(new MutationObserver(()=>onOverlay(n)),n,{attributes:true,attributeFilter:['hidden']});});
  fuListen(scrollEl,'scroll',()=>{if(vertical&&scrollEl.scrollLeft)scrollEl.scrollLeft=0;},{passive:true});
 }
 function bump(n){if(!n)return;n.classList.remove('fu97-bump');void n.offsetWidth;n.classList.add('fu97-bump');setTimeout(()=>n.classList.remove('fu97-bump'),900);}
 // Mensajes de acción rechazada (el motor no consumió la acción) y avisos de eventos del partido.
 const WARN=/^(Saque inicial obligatorio|Tiro libre obligatorio|Pase bloqueado|Pase\/remate bloqueado|Movimiento bloqueado|Cada acción del turno|Ahora juega el Equipo|Ese movimiento no es válido|Ese destino supera|Esa casilla está ocupada|El arquero bloquea|El arquero tiene la posesión|La disputa|En un saque de banda|Primero debe ejecutarse|El saque inicial debe|El jugador seleccionado debe|Seleccioná al jugador|No existe una casilla|No hay espacio libre|Partido finalizado)/;
 const EVENT=/^(¡FALTA|FALTA SANCIONADA|Falta rápida|Gol confirmado|FINAL DEL PARTIDO|Final del primer tiempo|Comienza el segundo tiempo|¡Remate|¡Desvío|¡Atajada|SAQUE|LATERAL|TIRO LIBRE)/i;
 let lastMsg='';
 // Cartel de jugada: sólo reanudaciones, desvíos y comienzos de período. Faltas, goles y remates ya tienen su aviso propio.
 const RESTART=/^(SAQUE[A-ZÁÉÍÓÚÑ ]*|LATERAL|TIRO LIBRE[A-ZÁÉÍÓÚÑ ]*|CÓRNER|TIRO DE ESQUINA)\s*:\s*(.*)$/;
 let bannerTimer=0;
 function bannerFor(text){
  const m=RESTART.exec(text);
  if(m)return {title:m[1].trim(),sub:m[2],kind:'restart'};
  if(/^¡Desvío!/.test(text))return {title:'¡DESVÍO!',sub:text.replace(/^¡Desvío!\s*/,''),kind:'event'};
  if(/^Comienza el segundo tiempo/.test(text))return {title:'SEGUNDO TIEMPO',sub:'',kind:'period'};
  if(/^¡Comienza el partido!/.test(text))return {title:'¡COMIENZA EL PARTIDO!',sub:text.replace(/^¡Comienza el partido!\s*/,''),kind:'period'};
  return null;
 }
 function showBanner(text){
  if(!ui.banner||!stateIsLive())return;
  const b=bannerFor(text);if(!b)return;
  ui.bannerTitle.textContent=b.title;
  const parts=b.sub.split('. ').map(x=>x.replace(/[.\s]+$/,'')).filter(Boolean);
  ui.bannerS1.textContent=parts[0]||'';ui.bannerS2.textContent=parts[1]?' · '+parts[1]:'';
  ui.bannerSub.hidden=!parts.length;
  ui.banner.dataset.kind=b.kind;
  ui.banner.classList.remove('is-on');void ui.banner.offsetWidth;ui.banner.classList.add('is-on');
  clearTimeout(bannerTimer);bannerTimer=setTimeout(()=>ui.banner.classList.remove('is-on'),2600);
 }
 function onMessage(){
  const m=$('msg');if(!m||!ui.msgWrap)return;
  const text=m.textContent||'';
  if(text===lastMsg)return;
  lastMsg=text;
  ui.msgWrap.classList.remove('is-open');ui.more.textContent='Ver más';
  ui.msgWrap.classList.toggle('is-warn',WARN.test(text));
  ui.msgWrap.classList.toggle('is-event',!WARN.test(text)&&EVENT.test(text));
  ui.msgWrap.classList.remove('is-flash');void ui.msgWrap.offsetWidth;ui.msgWrap.classList.add('is-flash');
  showBanner(text);
  requestAnimationFrame(fitMsgMore);
 }
 function onOverlay(n){
  if(n.id==='goalCelebrationOverlay'){
   n.querySelectorAll('.fu97-confetti').forEach(c=>c.remove());
   if(!n.hidden&&!reducedMotion()){
    const team=+n.getAttribute('data-team')||1,k=kit(team),palette=[k.primary,k.secondary,k.accent,'#c8ff2e','#ffffff'];
    const box=el('div','fu97-confetti',n);box.setAttribute('aria-hidden','true');
    for(let i=0;i<42;i++){
     const c=el('i',null,box);
     c.style.left=(fxRandom()*100).toFixed(1)+'%';
     c.style.background=palette[i%palette.length];
     c.style.animationDelay=Math.round(fxRandom()*500)+'ms';
     c.style.animationDuration=Math.round(1700+fxRandom()*1300)+'ms';
     c.style.setProperty('--fu97-drift',Math.round(fxRandom()*140-70)+'px');
     c.style.setProperty('--fu97-rot',Math.round(fxRandom()*720-360)+'deg');
    }
   }
  }
  syncHud();
 }
 let kitKey='';
 function syncKits(){
  const key=[1,2].map(t=>{const k=kit(t);return k.primary+k.secondary+k.accent+k.number+k.pattern;}).join('|');
  if(key===kitKey)return;
  kitKey=key;
  if(ui.chip1)ui.chip1.innerHTML=shirtSvg(1,'fu97ShirtA');
  if(ui.chip2)ui.chip2.innerHTML=shirtSvg(2,'fu97ShirtB');
  if(ui.kitPreview)ui.kitPreview.innerHTML=shirtSvg(1,'fu97ShirtC')+shirtSvg(2,'fu97ShirtD');
  const k1=kit(1),k2=kit(2);
  // Camisetas muy claras (p. ej. blancas): el tono del marcador usa el color secundario para conservar contraste.
  const tone=k=>luminance(k.primary)>.6?(luminance(k.secondary)<.45?k.secondary:'#6c7a90'):k.primary;
  if(ui.scorebug){
   const t1=tone(k1),t2=tone(k2);
   ui.scorebug.style.setProperty('--fu97-c1',t1);ui.scorebug.style.setProperty('--fu97-c2',t2);
   ui.scorebug.style.setProperty('--fu97-c1s',rgba(t1,.34));ui.scorebug.style.setProperty('--fu97-c2s',rgba(t2,.34));
  }
  chipKey='';
  syncHud();
 }
 let chipKey='';
 function syncHud(){
  if(!ui.badge)return;
  const setBadge=(text,cls)=>{ui.badge.textContent=text;ui.turnBox.className='fu97-turnbox '+cls;};
  if(cpuSearching){setBadge('CPU PENSANDO','is-cpu is-thinking');return;}
  if(!stateIsLive())return;
  const cpuTurn=turn===CPU_TEAM&&cpuAutoEnabled;
  if(matchClockFinished)setBadge('FINAL','is-final');
  else if(goalCelebrationActive)setBadge('¡GOL!','is-goal');
  else if(halftimePaused)setBadge('DESCANSO','is-break');
  else if(cpuTurn)setBadge(anim?'JUEGA LA CPU':'TURNO CPU','is-cpu');
  else if(turn===HUMAN_TEAM)setBadge(anim?'EN JUEGO':'TU TURNO','is-you');
  else setBadge('EQUIPO 2 · MANUAL','is-manual');
  Array.from(ui.pips.children).forEach((pip,i)=>{
   pip.className=matchClockFinished?'':i<actionNo-1?'is-done':i===actionNo-1?'is-now':'';
  });
  ui.turnBox.dataset.team=String(turn);
  if(matchClockFinished)setTurnSub('Partido terminado','');else setTurnSub('Acción '+actionNo+'/'+ACTIONS+' · '+teamName(turn),'Acción '+actionNo+'/'+ACTIONS);
  ui.pips.parentNode.setAttribute('aria-label',ui.badge.textContent+' · acción '+actionNo+' de '+ACTIONS);
  // Ficha elegida y modo.
  const x=selected!==null?p.find(z=>z.id===selected):null;
  const o=owner();
  // Barra de posesión bajo el resultado: del lado del equipo que tiene la pelota.
  if(ui.result)ui.result.dataset.poss=o&&!matchClockFinished?String(o.t):'0';
  let name,sub,key;
  if(x&&!matchClockFinished){
   const cpu=x.t===CPU_TEAM&&cpuAutoEnabled;
   name=(cpu?'CPU · ':'')+'Jugador '+x.n;
   if(cpu)sub=anim?'Ejecuta la jugada':'Prepara la jugada';
   else if(o&&o.id===x.id)sub=mode==='ball'?'Elegí destino: pase o remate':'Con balón · mover o PASE/TIRO';
   else sub='Elegí una casilla para moverlo';
   const k=kit(x.t);key=x.t+':'+x.n+':'+k.primary+k.secondary+k.accent+k.number+k.pattern;
  }else{
   name=matchClockFinished?'Partido finalizado':turn===HUMAN_TEAM||!cpuAutoEnabled?'Elegí una ficha':'Turno rival';
   sub=matchClockFinished?'Revisá el resultado o empezá otro':turn===HUMAN_TEAM||!cpuAutoEnabled?'Tocá un jugador de tu equipo':'Mirá la jugada de la CPU';
   key='none';
  }
  ui.chipName.textContent=name;setChipSub(sub);
  if(key!==chipKey){chipKey=key;ui.chipToken.innerHTML=x&&!matchClockFinished?miniTokenSvg(x,'fu97ChipClip'):'<svg viewBox="-36 -36 72 72" aria-hidden="true"><circle r="30" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="7 6"/><circle r="5" fill="currentColor"/></svg>';}
  boardEl.classList.toggle('fu97-mode-ball',mode==='ball'&&!!x&&!!o&&o.id===x.id);
  boardEl.classList.toggle('fu97-cpu-turn',cpuTurn);
  boardEl.classList.toggle('fu97-anim',!!anim);
  boardEl.classList.toggle('fu97-finished',!!matchClockFinished);
  if(mobilePendingAction&&(mobilePendingAction.turn!==turn||mobilePendingAction.selected!==selected||mobilePendingAction.mode!==mode||isCpuTurn()||matchClockFinished))clearMobileDecision();
  const clockState=$('matchClockState');
  if(clockState){const c=$('matchClock');if(c){c.classList.toggle('fu97-clock-break',!!halftimePaused);c.classList.toggle('fu97-clock-final',!!matchClockFinished);}}
  if(chipSubDirty){chipSubDirty=false;fitChipSub();requestAnimationFrame(fitChipSub);}
  if(turnSubDirty){turnSubDirty=false;fitTurnSub();}
 }

 // ---------------------------------------------------------------- orientación y tamaño
 const VIEW_KEY='futbolUnico_v97_vista_movil';
 let zoomPref=false;
 try{zoomPref=localStorage.getItem(VIEW_KEY)==='ampliada';}catch(e){zoomPref=false;}
 function setZoomPref(v){
  zoomPref=!!v;
  try{localStorage.setItem(VIEW_KEY,zoomPref?'ampliada':'completa');}catch(e){}
  applyOrientation();
 }
 function updateFollowButton(){
  if(!ui.followBtn)return;
  ui.followBtn.classList.toggle('is-follow-on',followBallEnabled);
  ui.followBtn.setAttribute('aria-pressed',String(followBallEnabled));
  const label=followBallEnabled?'Desactivar seguimiento del balón':'Activar seguimiento del balón';
  ui.followBtn.setAttribute('aria-label',label);ui.followBtn.title=label;
 }
 function isFullscreen(){return document.fullscreenElement===boardEl||document.webkitFullscreenElement===boardEl;}
 function applyOrientation(){
  const portrait=!!portraitMQ.matches;
  const next=portrait&&!zoomPref;
  const changed=next!==vertical;
  vertical=next;
  boardEl.classList.toggle('fu97-vertical',vertical);
  boardEl.classList.toggle('fu97-zoom',portrait&&zoomPref);
  appEl.classList.toggle('fu97-mobile-complete',vertical);
  rootEl.classList.toggle('fu97-portrait',portrait);
  if(ui.viewBtn){
   ui.viewBtn.hidden=!portrait;
   ui.viewBtn.innerHTML=(zoomPref?ICONS.pitch:ICONS.zoom)+'<span>'+(zoomPref?'Completa':'Ampliar')+'</span>';
   ui.viewBtn.setAttribute('aria-label',zoomPref?'Ver la cancha completa en vertical':'Ampliar la cancha y desplazarla horizontalmente');
   ui.viewBtn.title=ui.viewBtn.getAttribute('aria-label');
   ui.viewBtn.setAttribute('aria-pressed',String(zoomPref));
  }
  if(ui.followBtn){ui.followBtn.hidden=!(portrait&&zoomPref);updateFollowButton();}
  if(changed){refreshUprights();if(stateIsLive()&&!anim)newDrawBall();else pendingBallRedraw=true;}
  if(vertical)scrollEl.scrollLeft=0;
  else requestAnimationFrame(()=>requestAnimationFrame(()=>{if(!layerFailed&&stateIsLive())followBallOnMobile();}));
  sizeBoard();
 }
 // Chip de la barra de acción: texto completo si entra en una línea; si no, una versión corta (nunca cortado con «…»).
 const CHIP_SUB_SHORT={'Con balón · mover o PASE/TIRO':'Mové, pasá o tirá','Elegí destino: pase o remate':'Elegí pase o remate','Elegí una casilla para moverlo':'Elegí una casilla','Tocá un jugador de tu equipo':'Tocá una ficha tuya','Revisá el resultado o empezá otro':'Revisá el resultado','Mirá la jugada de la CPU':'Juega la CPU'};
 let chipSubFull=null,chipSubDirty=false;
 // Sólo registra el texto: se mide al final de syncHud, cuando ya cambiaron las clases que alteran el ancho del botón.
 function setChipSub(text){if(text===chipSubFull)return;chipSubFull=text;chipSubDirty=true;}
 function fitChipSub(){
  if(layerFailed)return;
  const s=ui.chipSub;if(!s||chipSubFull===null)return;
  s.textContent=chipSubFull;s.removeAttribute('title');
  const short=CHIP_SUB_SHORT[chipSubFull];
  const have=short?s.getBoundingClientRect().width:0;if(!have)return;
  // Ancho real con decimales: scrollWidth/clientWidth redondean y el navegador corta con «…» aunque sobre medio píxel.
  const range=document.createRange();range.selectNodeContents(s);
  if(range.getBoundingClientRect().width>have+0.02){s.textContent=short;s.title=chipSubFull;}
 }
 // ¿El contenido real (con decimales) es más ancho que la caja? scrollWidth redondea y el navegador corta igual con «…».
 function textOverflows(e){
  if(!e||!e.getClientRects().length)return false;
  const have=e.getBoundingClientRect().width;if(!have)return false;
  const range=document.createRange();range.selectNodeContents(e);
  return range.getBoundingClientRect().width>have+0.02;
 }
 // Marcador: nombres completos si entran los dos; en Torneo, después sin camiseta; si no, siglas en ambos (nunca mezclado).
 function fitTeamNames(){
  const sb=ui.scorebug;if(!sb)return;
  // Se mide cada nombre por separado: medido sobre la etiqueta entera, Chrome devuelve el texto ya recortado por el «…» interno.
  const parts=Array.from(sb.querySelectorAll('.fu97-sb-team > b, .fu97-sb-team .fu97-name-full, .fu97-sb-team .fu97-name-short'));
  const cut=e=>!!e.getClientRects().length&&(e.scrollWidth>e.clientWidth||textOverflows(e));
  const overflow=()=>parts.some(cut);
  sb.classList.remove('fu97-nochip','fu97-codes');
  if(!overflow())return;
  if(tournamentMode){sb.classList.add('fu97-nochip');if(!overflow())return;}
  sb.classList.add('fu97-codes');
 }
 // Subtítulo del turno: «Acción 1/3 · Equipo», «Acción 1/3» o nada si no hay lugar.
 let turnSubFull=null,turnSubShort='',turnSubDirty=false;
 function setTurnSub(full,short){if(full===turnSubFull)return;turnSubFull=full;turnSubShort=short;turnSubDirty=true;}
 function fitTurnSub(){
  const s=ui.turnSub;if(!s||turnSubFull===null)return;
  s.classList.remove('fu97-off');s.textContent=turnSubFull;
  if(!s.getClientRects().length)return;
  if(turnSubShort&&textOverflows(s))s.textContent=turnSubShort;
  if(textOverflows(s)||s.getBoundingClientRect().width<24)s.classList.add('fu97-off');
 }
 // «Ver más» sólo cuando el relato no entra; se recalcula también al cambiar el tamaño.
 function fitMsgMore(){
  if(layerFailed)return;
  const m=$('msg');if(!m||!ui.more||!ui.msgWrap||ui.msgWrap.classList.contains('is-open'))return;
  ui.more.hidden=!(m.scrollHeight>m.clientHeight+2);
 }
 function fitTexts(){if(layerFailed)return;fitTeamNames();fitTurnSub();fitChipSub();fitMsgMore();}
 function sizeBoard(){
  if(layerFailed)return;
  const fs=isFullscreen();
  if(ui.fsBtn)ui.fsBtn.innerHTML='<span class="fs-icon" aria-hidden="true">'+(fs?ICONS.collapse:ICONS.expand)+'</span>';
  if(fs){boardEl.style.removeProperty('--fu97-board-w');requestAnimationFrame(()=>{if(layerFailed)return;const cw=scrollEl.clientWidth;if(cw)scrollEl.style.setProperty('--fu97-cw',cw+'px');fitTexts();});return;}
  const col=boardEl.parentElement;if(!col)return;
  const colW=col.clientWidth;if(!colW)return;
  const head=appEl.querySelector('.head');
  const cs=getComputedStyle(document.body);
  const padY=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.paddingBottom)||0);
  const sideBySide=getComputedStyle(appEl).getPropertyValue('--fu97-head-side').trim()==='1';
  const headH=head&&!sideBySide?head.getBoundingClientRect().height+10:0;
  const barH=ui.bar?ui.bar.getBoundingClientRect().height:0;
  const bcs=getComputedStyle(boardEl);
  const chromeY=(parseFloat(bcs.paddingTop)||0)+(parseFloat(bcs.paddingBottom)||0)+(parseFloat(bcs.borderTopWidth)||0)*2+(parseFloat(bcs.rowGap)||0);
  const chromeX=(parseFloat(bcs.paddingLeft)||0)+(parseFloat(bcs.paddingRight)||0)+(parseFloat(bcs.borderLeftWidth)||0)*2;
  const availH=window.innerHeight-padY-headH-barH-chromeY-4;
  const ratio=vertical?VB.h/VB.w:VB.w/VB.h;
  const fitW=Math.floor(availH*ratio+chromeX);
  let w;
  if(vertical){
   // Celular vertical («Completa»): la cancha entra en pantalla; como mucho ~18px (la red, fuera de la línea de gol) quedan bajo la barra fija.
   w=Math.max(fitW,Math.min(Math.floor(colW*.86),fitW+Math.round(18*ratio)));
   w=Math.min(colW,Math.max(w,Math.min(colW,236)));
  }else w=Math.max(Math.min(colW,320),Math.min(colW,fitW));
  boardEl.style.setProperty('--fu97-board-w',w+'px');
  const cw=scrollEl.clientWidth;if(cw)scrollEl.style.setProperty('--fu97-cw',cw+'px');
  fitTexts();
 }
 let sizeRaf=0;
 function scheduleSize(){if(layerFailed)return;cancelAnimationFrame(sizeRaf);sizeRaf=requestAnimationFrame(()=>{if(!layerFailed)applyOrientation();});}

 // ---------------------------------------------------------------- instalación transaccional
 // La capa se instala como una transacción. Antes de tocar nada se toma una foto del documento (nodos, orden de
 // los hijos, atributos y textos) y cada escucha, observador o temporizador que v97 pone sobre objetos que no crea
 // queda anotado en fuUndo. Si un paso falla, se deshace todo, se reponen los renderizadores y el motor redibuja
 // la vista v96: no quedan paneles movidos, SVG modificado ni escuchas colgando.
 let layerFailed=false,fuSnap=null;
 const fuUndo=[];
 function fuListen(target,type,fn,opts){if(!target)return;target.addEventListener(type,fn,opts);fuUndo.push(()=>target.removeEventListener(type,fn,opts));}
 function fuObserve(obs,node,opts){obs.observe(node,opts);fuUndo.push(()=>obs.disconnect());return obs;}
 function fuTimeout(fn,ms){const id=setTimeout(fn,ms);fuUndo.push(()=>clearTimeout(id));}
 function fuSnapshot(root){
  const items=[],walker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT|NodeFilter.SHOW_COMMENT);
  for(let n=root;n;n=walker.nextNode()){
   if(n.nodeType===1)items.push({n,kids:Array.prototype.slice.call(n.childNodes),attrs:Array.prototype.map.call(n.attributes,a=>[a.namespaceURI,a.name,a.value])});
   else items.push({n,data:n.data});
  }
  return items;
 }
 function fuRollback(items){
  const changed=items.filter(it=>{
   if(!it.kids)return false;
   const cur=it.n.childNodes;
   if(cur.length!==it.kids.length)return true;
   for(let i=0;i<cur.length;i++)if(cur[i]!==it.kids[i])return true;
   return false;
  });
  // 1) Se vacían los contenedores alterados: los nodos nuevos salen del documento y los movidos quedan sueltos.
  changed.forEach(it=>{const n=it.n;while(n.lastChild)n.removeChild(n.lastChild);});
  // 2) Cada contenedor recupera sus hijos originales, en el orden original: son los mismos nodos, con las escuchas del motor.
  changed.forEach(it=>{it.kids.forEach(k=>{try{it.n.appendChild(k);}catch(e){console.error('[Fútbol Único v97] No se pudo reponer un nodo.',e);}});});
  // 3) Atributos y textos originales (class, style, viewBox, transform, xlink:href, hidden, data-*...).
  //    Si un elemento cambió en algo, se le reponen todos sus atributos en el orden original.
  items.forEach(it=>{
   const n=it.n;
   if(!it.attrs){if(n.data!==it.data)n.data=it.data;return;}
   const cur=n.attributes;
   let same=cur.length===it.attrs.length;
   for(let i=0;same&&i<cur.length;i++){const a=cur[i],o=it.attrs[i];same=a.namespaceURI===o[0]&&a.name===o[1]&&a.value===o[2];}
   if(same)return;
   while(n.attributes.length)n.removeAttributeNode(n.attributes[0]);
   it.attrs.forEach(a=>{if(a[0])n.setAttributeNS(a[0],a[1],a[2]);else n.setAttribute(a[1],a[2]);});
  });
 }
 // ---------------------------------------------------------------- instalación
 const previous={animatePlayerMove,animateDuel,animateBall,drawPlayers,drawBall,rebuildBallTargets,refresh,maybeScheduleCpuAction};
 function installRenderers(){
  animatePlayerMove=newAnimatePlayerMove;
  maybeScheduleCpuAction=function(delay=550){
   const requested=Number.isFinite(Number(delay))?Number(delay):550;
   const actual=visualTempo==='rapido'?Math.min(requested,180):requested;
   return previous.maybeScheduleCpuAction.call(this,actual);
  };
  animateDuel=newAnimateDuel;
  animateBall=newAnimateBall;
  drawPlayers=newDrawPlayers;
  drawBall=newDrawBall;
  rebuildBallTargets=newRebuildBallTargets;
  const baseRefresh=previous.refresh;
  refresh=function(){
   const value=baseRefresh.apply(this,arguments);
   const act=stateIsLive()?active():null,attack=act?(act.t===1?'R':'L'):null;
   gL.classList.toggle('fu97-target',gL.classList.contains('active')&&attack==='L');
   gR.classList.toggle('fu97-target',gR.classList.contains('active')&&attack==='R');
   decorateTokens();
   if(pendingBallRedraw&&stateIsLive()&&!anim)newDrawBall();
   syncHud();
   return value;
  };
 }
 function restoreRenderers(){
  animatePlayerMove=previous.animatePlayerMove;animateDuel=previous.animateDuel;animateBall=previous.animateBall;maybeScheduleCpuAction=previous.maybeScheduleCpuAction;
  drawPlayers=previous.drawPlayers;drawBall=previous.drawBall;rebuildBallTargets=previous.rebuildBallTargets;refresh=previous.refresh;
 }
 try{
  fuSnap=fuSnapshot(document.documentElement);
  installDefs();
  buildPitch();
  buildLayers();
  buildBall();
  buildLayout();
  hookPreview();
  installRenderers();
  rootEl.classList.add('fu97');
  appEl.classList.add('fu97-app');
  applyOrientation();
  drawPlayers();drawBall();refresh();
  fuStartFacingLoop();
  onMessage();
  // Las mediciones de texto dependen de la tipografía: se repiten cuando terminan de cargar las fuentes.
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(rootEl.classList.contains('fu97'))fitTexts();});
  const onViewport=()=>scheduleSize();
  fuListen(window,'resize',onViewport,{passive:true});
  fuListen(window,'orientationchange',onViewport,{passive:true});
  if(portraitMQ.addEventListener)fuListen(portraitMQ,'change',onViewport);
  fuListen(document,'fullscreenchange',()=>setTimeout(scheduleSize,60));
  fuListen(document,'webkitfullscreenchange',()=>setTimeout(scheduleSize,60));
  if(window.ResizeObserver){const ro=fuObserve(new ResizeObserver(()=>scheduleSize()),appEl);if(ui.bar)ro.observe(ui.bar);}
  fuTimeout(scheduleSize,120);
  window.FUTBOL_UNICO_V97={
   version:VERSION,
   layer:'visual',
   isVertical:()=>vertical,
   setMobileView:v=>setZoomPref(v==='ampliada'),
   redraw:()=>{if(stateIsLive()&&!anim){drawPlayers();drawBall();refresh();}}
  };
  fuSnap=null;
 }catch(error){
  console.error('[Fútbol Único v97] No se pudo instalar el rediseño visual; se restaura la vista v96.',error);
  layerFailed=true;
  // Orden: primero se cortan escuchas y observadores (para que la restauración no dispare código v97),
  // después se reponen los renderizadores y el documento, y al final el motor redibuja con sus funciones.
  for(let i=fuUndo.length-1;i>=0;i--){try{fuUndo[i]();}catch(e){}}
  fuUndo.length=0;
  cancelAnimationFrame(sizeRaf);
  restoreRenderers();
  if(fuSnap){try{fuRollback(fuSnap);}catch(e){console.error('[Fútbol Único v97] Falló la restauración del documento.',e);}}
  fuSnap=null;
  rootEl.classList.remove('fu97');
  try{delete window.FUTBOL_UNICO_V97;}catch(e){}
  try{drawPlayers();drawBall();refresh();}catch(e){console.error('[Fútbol Único v97] Error al redibujar la vista v96.',e);}
 }
})();
// ================== FIN FÚTBOL ÚNICO v97 ==================
`;

// v98 · Correcciones del motor. Capa separada de v96 (táctica) y de v97 (visual): sólo corrige estados
// imposibles del balón. No cambia reglas, probabilidades, resolución de acciones, IA ni cronómetro.
const V98_ENGINE_FIXES = String.raw`
 // ==================== FÚTBOL ÚNICO v98 · CORRECCIONES DEL MOTOR ====================
 // Pase fallido que no sale de la casilla del pasador.
 // En v96, un pase que queda corto tantas casillas como su distancia termina en la casilla de origen,
 // y el pasador no puede recibir su propio pase fallido. Sin esta corrección la pelota quedaba suelta
 // (owner=null) debajo del pasador: en una casilla ocupada a la que nadie puede entrar, de modo que el
 // rival no podía recogerla ni disputarla y sólo el equipo que falló podía destrabarla moviendo al pasador.
 // Una pelota suelta tiene que estar en una casilla libre para que rija la regla de recuperación
 // ("la ficha que entra en la casilla de una pelota suelta la recoge"), igual que tras un desvío o una disputa.
 // La pelota queda suelta en la casilla libre más cercana al pasador, en el sentido del pase, sin usar el
 // destino elegido ni casillas de gol. Es determinista: no consume azar, así que la precisión, los desvíos y
 // las intercepciones conservan exactamente sus probabilidades.
 function fuV98ShortPassRestCell(passer,from,intended){
  if(!passer||!from)return null;
  const target=intended&&Number.isFinite(intended.c)&&Number.isFinite(intended.r)?intended:null;
  const forward=attackDir(passer.t);
  const vx=target?target.c-from.c:forward,vy=target?target.r-from.r:0,vn=Math.hypot(vx,vy)||1;
  for(let radius=1;radius<Math.max(C,R);radius++){
   let best=null,bestKey=null;
   for(let r=from.r-radius;r<=from.r+radius;r++)for(let c=from.c-radius;c<=from.c+radius;c++){
    if(Math.max(Math.abs(c-from.c),Math.abs(r-from.r))!==radius)continue;
    if(c<0||c>=C||r<0||r>=R||at(c,r))continue;
    if(isGoalCell(c,r,'L')||isGoalCell(c,r,'R'))continue;
    if(target&&c===target.c&&r===target.r)continue;
    const dx=c-from.c,dy=r-from.r;
    // Orden: más alineada con el pase; más cerca de la fila central; fila; hacia el arco rival.
    // Es simétrico entre equipos: la misma jugada espejada deja la pelota en la casilla espejada.
    const key=[-Math.round((dx*vx+dy*vy)/(Math.hypot(dx,dy)*vn)*1e6),Math.abs(2*r-(R-1)),r,-dx*forward];
    let better=!best;
    for(let i=0;!better&&i<key.length;i++){if(key[i]!==bestKey[i]){better=key[i]<bestKey[i];break;}}
    if(better){best={c,r};bestKey=key;}
   }
   if(best)return best;
  }
  return null;
 }
 // ================== FIN FÚTBOL ÚNICO v98 · CORRECCIONES DEL MOTOR ==================
`;

// v98 · Fase 1 de IA: coherencia de la simulación predictiva de la CPU con el motor real.
// Solo cambia la simulación con la que la CPU evalúa jugadas (simulateOneAction y sus reinicios).
// El partido real, sus reglas, probabilidades y cronómetro no cambian.
const V98_SIM_COHERENCE = String.raw`
 // ==================== FÚTBOL ÚNICO v98 · SIMULACIÓN COHERENTE ====================
 // Problemas corregidos (verificados con una prueba diferencial simulación ↔ motor real):
 //  1. Referencias huérfanas: la búsqueda genera las candidatas una vez por nodo y restaura el tablero
 //     con copias nuevas después de cada rama; desde la segunda candidata, la acción movía un objeto
 //     jugador que ya no estaba en el tablero y escribía la pelota con su id (pelota con dueño fuera de
 //     la casilla del dueño, movimientos sin efecto). Ahora la acción se aplica a la ficha viva por id.
 //  2. Disputa por atrás: findFreeCellNear(r,[x,r]) podía dejar la pelota suelta en la casilla del rival.
 //     Ahora se usa la misma elección que duel(): casilla siguiente o anillo libre ordenado por dirección.
 //  3. Pases y remates: el orden de resolución replica moveBall() (intercepción sobre la trayectoria
 //     desviada, validez de la casilla de gol, atajada antes del remate desviado afuera, gol de un pase
 //     desviado al arco, saque de arco como reinicio y limpieza del tiro libre ejecutado).
 //  4. La disputa comprueba que sea ejecutable antes de sortear la falta, igual que duel().
 // Cada rama consume las mismas tiradas, en el mismo orden, que el motor real (tacticalRandom).
 function fuV98BackDuelLooseCell(a,r,dc,dr){
  const preferred={c:r.c+dc,r:r.r+dr};
  if(preferred.c>=0&&preferred.c<C&&preferred.r>=0&&preferred.r<R&&!at(preferred.c,preferred.r,a.id)&&!at(preferred.c,preferred.r,r.id))return preferred;
  const choices=[];
  for(let rr=0;rr<R;rr++)for(let cc=0;cc<C;cc++){
   if(at(cc,rr,a.id)||at(cc,rr,r.id))continue;
   if(Math.max(Math.abs(cc-r.c),Math.abs(rr-r.r))!==1)continue;
   choices.push({c:cc,r:rr,score:(cc-r.c)*dc+(rr-r.r)*dr});
  }
  choices.sort((u,v)=>v.score-u.score);
  return choices[0]?{c:choices[0].c,r:choices[0].r}:null;
 }
 // goalTargets() con el ejecutante explícito (la versión visible usa la ficha seleccionada en pantalla).
 function fuV98GoalTargetsFor(x,side){
  const targetC=side==='L'?0:C-1;
  const gk=p.find(z=>z.t!==x.t&&z.n===1),out=[];
  for(let r=4;r<=6;r++){
   const dx=targetC-ball.c,dy=r-ball.r;
   if(!bLegalFor(targetC,r,x))continue;
   let blocked=false;const steps=Math.max(Math.abs(dx),Math.abs(dy));
   if(gk){for(let i=1;i<=steps;i++){const xx=ball.c+dx*i/steps,yy=ball.r+dy*i/steps;if(Math.hypot(gk.c-xx,gk.r-yy)<.46){blocked=true;break;}}}
   if(!blocked)out.push(r);
  }
  return out;
 }
 // Espejo de movePlayer(): mismas validaciones y consecuencias (conducir, recoger, disputar al poseedor).
 function fuV98SimMove(x,c,r){
  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1)return 'blocked';
  if(kickoffPassRequired)return 'blocked';
  if(ball.owner===x.id&&restartPassOnlyId===x.id)return 'blocked';
  if(isOffsideMove(c,x))return 'blocked';
  if(!pLegal(c,r,x))return 'blocked';
  const o=at(c,r,x.id);
  if(o){if(o.t!==x.t&&o.id===ball.owner)return fuV98SimDuel(x,o);return 'blocked';}
  const hadBall=ball.owner===x.id;
  x.c=c;x.r=r;
  if(hadBall)ball={c,r,owner:x.id};
  else if(ball.owner===null&&ball.c===c&&ball.r===r)ball={c,r,owner:x.id};
  return false;
 }
 // Espejo de duel(): primero se verifica que la maniobra sea ejecutable; después se sortea la falta.
 function fuV98SimDuel(a,r){
  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1)return 'blocked';
  if(r.n===1&&ball.owner===r.id)return 'blocked';
  const dc=r.c-a.c,dr=r.r-a.r;
  if(Math.abs(dc)>1||Math.abs(dr)>1||(!dc&&!dr))return 'blocked';
  const diagonal=Math.abs(dc)===1&&Math.abs(dr)===1;
  const tipo=duelType(a,r);
  const resultado=tipo==='costado'&&[2,6].includes(a.n)?'frente':tipo;
  let q=null,loose=null;
  if(resultado==='frente'){q=findDisplacement(r,dc,dr,a.id);if(!q)return 'blocked';}
  else if(resultado==='costado'){q=findDisplacement(r,dc,dr,a.id);if(!q)return 'blocked';loose=findLooseBallCell(a,r,dc,dr,{c:r.c,r:r.r});if(!loose)return 'blocked';}
  else{q=findDisplacementFrom({c:a.c,r:a.r},-dc,-dr,a.id);if(!q)return 'blocked';loose=fuV98BackDuelLooseCell(a,r,dc,dr);if(!loose)return 'blocked';}
  const foulChance=tipo==='atras'?.60:tipo==='costado'?.30:0;
  if(foulChance>0&&tacticalRandom()<foulChance){
   // Mismas consecuencias que prepareFreeKick(): falta rápida para el equipo del jugador derribado.
   const spot={c:r.c,r:r.r},quick=createQuickFoulMoves(r.t,r,spot,a);
   for(const z of p){const t=quick.layout.get(z.id);if(t){z.c=t.c;z.r=t.r;}}
   r.c=spot.c;r.r=spot.r;ball={c:spot.c,r:spot.r,owner:r.id};
   turn=r.t;actionNo=1;lastPlayedId=null;playedThisTurn=[];restartPassOnlyId=null;
   freeKickRequiredId=r.id;freeKickAwardedTeam=r.t;
   return true;
  }
  if(resultado==='frente'){a.c=r.c;a.r=r.r;r.c=q.c;r.r=q.r;ball={c:a.c,r:a.r,owner:a.id};return false;}
  if(resultado==='costado'){a.c=r.c;a.r=r.r;r.c=q.c;r.r=q.r;ball={c:loose.c,r:loose.r,owner:null};return false;}
  a.c=q.c;a.r=q.r;ball={c:loose.c,r:loose.r,owner:null};return false;
 }
 // Espejo de moveBall(): validaciones, precisión, trayectoria desviada, intercepción, arquero, gol y pase.
 function fuV98SimBall(x,c,r,goals){
  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1&&x.id!==freeKickRequiredId)return 'blocked';
  if(kickoffPassRequired){
   const intendedReceiver=at(c,r,x.id);
   if(!isKickoffKicker(x)||!intendedReceiver||intendedReceiver.t!==x.t)return 'blocked';
  }
  if(ball.owner!==x.id||!bLegalFor(c,r,x))return 'blocked';
  if(restartPassOnlyId===x.id&&((x.t===1&&c===C-1&&r>=4&&r<=6)||(x.t===2&&c===0&&r>=4&&r<=6)))return 'blocked';
  const from={c:ball.c,r:ball.r,owner:ball.owner};
  let path=passPathCells(from,{c,r}),firstRival=firstTrajectoryRival(path,x.t);
  if(firstRival&&firstRival.index===0)return 'blocked';
  const intendedTarget={c,r},intendedShotTarget=!!goalSideForCell(c,r,x.t);
  const accuracy=resolveAccuracy(x,{c,r});
  c=accuracy.target.c;r=accuracy.target.r;
  path=passPathCells(from,{c,r});firstRival=firstTrajectoryRival(path,x.t);
  if(c<0||c>=C||r<0||r>=R){
   kickoffPassRequired=false;clearFreeKickRequirement(x.id);
   simulateExit({c,r},x.t);
   return true;
  }
  if(!intendedShotTarget&&passBeyondOffsideLine(c,x))return 'blocked';
  const intendedReceiver=at(c,r);
  if(!intendedShotTarget&&intendedReceiver&&intendedReceiver.t===x.t&&isOffsidePosition(intendedReceiver))return 'blocked';
  const goalSide=goalSideForCell(c,r,x.t);
  if(goalSide&&!intendedShotTarget&&!fuV98GoalTargetsFor(x,goalSide).includes(r))return 'blocked';
  if(firstRival&&firstRival.index>0&&firstRival.index<path.length-1){
   const interceptor=firstRival.player;
   const interceptionChance=[2,6].includes(interceptor.n)?0.75:interceptor.n===5?0.65:0.5;
   if(tacticalRandom()<interceptionChance){
    const loose=deflectionCell(interceptor);
    kickoffPassRequired=false;clearFreeKickRequirement(x.id);
    if(restartPassOnlyId===x.id)restartPassOnlyId=null;
    ball={c:loose.c,r:loose.r,owner:null};
    return false;
   }
  }
  if(intendedShotTarget){
   const shotKeeper=p.find(z=>z.t!==x.t&&z.n===1);
   if(shotKeeper&&(goalkeeperBlocksShot(x,from,{c,r},p)||(goalSideForCell(c,r,x.t)&&tacticalRandom()<fuV96KeeperSaveChance(x,from,{c,r},p)))){
    kickoffPassRequired=false;clearFreeKickRequirement(x.id);
    if(restartPassOnlyId===x.id)restartPassOnlyId=null;
    ball={c:shotKeeper.c,r:shotKeeper.r,owner:shotKeeper.id};
    return false;
   }
   if(!goalSide){
    kickoffPassRequired=false;clearFreeKickRequirement(x.id);
    if(restartPassOnlyId===x.id)restartPassOnlyId=null;
    const defendingTeam=x.t===1?2:1;
    simulateRestart(defendingTeam,true,defendingTeam===1?1:C-2,5);
    return true;
   }
  }
  if(goalSide){
   kickoffPassRequired=false;clearFreeKickRequirement(x.id);
   return simulateScoreGoal(x.t,goals);
  }
  const receiver=at(c,r,x.id);
  const rest=!receiver&&(at(c,r)||{}).id===x.id&&typeof fuV98ShortPassRestCell==='function'?fuV98ShortPassRestCell(x,from,intendedTarget):null;
  if(rest){c=rest.c;r=rest.r;}
  kickoffPassRequired=false;clearFreeKickRequirement(x.id);
  if(receiver&&receiver.t===x.t)recordStrategicPass(x,receiver,{c:from.c,r:from.r},{c,r});
  ball={c,r,owner:receiver?receiver.id:null};
  if(restartPassOnlyId===x.id)restartPassOnlyId=null;
  return false;
 }
 function fuV98SimulateOneAction(a,goals){
  if(!a)return 'blocked';
  // La acción se aplica siempre a las fichas vivas del tablero simulado, buscadas por id.
  const x=p.find(z=>z.id===(a.playerId??a.player?.id));
  if(!x||x.t!==turn)return 'blocked';
  if(a.kind==='move'||a.kind==='carry'||a.kind==='collect')return fuV98SimMove(x,a.to.c,a.to.r);
  if(a.kind==='duel'){const r=p.find(z=>z.id===(a.opponentId??a.opponent?.id));return r?fuV98SimDuel(x,r):'blocked';}
  if(a.kind==='pass'||a.kind==='shoot')return fuV98SimBall(x,a.to.c,a.to.r,goals||[0,0]);
  return 'blocked';
 }
 const fuV98LegacySimulateOneAction=simulateOneAction;
 simulateOneAction=fuV98SimulateOneAction;
 // Los reinicios simulados limpian el tiro libre, como prepareRestart() y resetToKickoff() en el partido.
 const fuV98LegacySimulateRestart=simulateRestart;
 simulateRestart=function(team,isGoalKick,c,r){const out=fuV98LegacySimulateRestart(team,isGoalKick,c,r);freeKickRequiredId=null;freeKickAwardedTeam=null;return out;};
 const fuV98LegacySimulateResetToKickoff=simulateResetToKickoff;
 simulateResetToKickoff=function(kickTeam){const out=fuV98LegacySimulateResetToKickoff(kickTeam);freeKickRequiredId=null;freeKickAwardedTeam=null;return out;};
 // ================== FIN FÚTBOL ÚNICO v98 · SIMULACIÓN COHERENTE ==================
`;

// v98 · Fase 2 de IA: decisiones de la CPU. No cambia reglas, probabilidades ni el partido real: solo cómo
// la CPU valora las posiciones y elige entre jugadas legales, con la misma información que ve el jugador.
const V98_AI_PATCH = String.raw`
 // ==================== FÚTBOL ÚNICO v98 · IA (FASE 2) ====================
 // Cada mejora tiene su interruptor para poder medirla por separado; con enabled=false la CPU decide como antes.
 const fuV98Ai={enabled:true,risk:true,shots:true,expected:true,anticipation:true,variety:true,varietyMargin:1.5};
 // ---- Memoria de cálculos del mismo estado (no cambia resultados: mismas funciones, mismas posiciones) ----
 function fuV98StateKey(){let k=ball.c+','+ball.r+','+ball.owner+'|';for(const z of p)k+=z.c+','+z.r+';';return k;}
 let fuV98ThreatKey=null,fuV98ThreatValue=null,fuV98AttackKey=null,fuV98AttackValue=null;
 const fuV98PrevThreatOptions=fuV96ThreatOptions;
 fuV96ThreatOptions=function(playersState=p,carrierId=ball.owner){
  if(playersState!==p||carrierId!==ball.owner)return fuV98PrevThreatOptions(playersState,carrierId);
  const key=fuV98StateKey();
  if(key!==fuV98ThreatKey){fuV98ThreatValue=fuV98PrevThreatOptions(playersState,carrierId);fuV98ThreatKey=key;}
  return fuV98ThreatValue;
 };
 const fuV98PrevAttackingThreat=estimateAttackingThreat;
 estimateAttackingThreat=function(playersState=p,carrierId=ball.owner){
  if(playersState!==p||carrierId!==ball.owner)return fuV98PrevAttackingThreat(playersState,carrierId);
  const key=fuV98StateKey();
  if(key!==fuV98AttackKey){fuV98AttackValue=fuV98PrevAttackingThreat(playersState,carrierId);fuV98AttackKey=key;}
  return fuV98AttackValue;
 };

 // ======== Etapa 2a ========
 // ---- 1. Riesgo según marcador y tiempo restante (solo datos públicos: marcador y reloj) ----
 // En el último 40% del partido, perdiendo por uno o dos la CPU valora más un gol propio y su amenaza
 // ofensiva que el riesgo de recibir otro; ganando por uno o dos, prioriza no conceder y conservar la pelota.
 function fuV98RiskContext(){
  const total=MATCH_GAME_ACTIONS||360,left=Math.max(0,total-matchClockActions),frac=left/total;
  const diff=score[CPU_TEAM-1]-score[HUMAN_TEAM-1];
  const u=Math.max(0,Math.min(1,(0.40-frac)/0.40));
  const ctx={goalFor:1,goalAgainst:1,threatFor:1,threatAgainst:1,keepBall:0,push:0,urgency:u,diff};
  if(u<=0||diff===0||Math.abs(diff)>=3)return ctx;
  const k=Math.abs(diff)===1?1:0.65;
  if(diff<0){ctx.goalFor=1+0.45*u*k;ctx.goalAgainst=1-0.30*u*k;ctx.threatFor=1+0.35*u*k;ctx.threatAgainst=1-0.20*u*k;ctx.push=u*k;}
  else{ctx.goalFor=1-0.20*u*k;ctx.goalAgainst=1+0.45*u*k;ctx.threatFor=1-0.15*u*k;ctx.threatAgainst=1+0.40*u*k;ctx.keepBall=u*k;}
  return ctx;
 }
 const fuV98PrevEvaluate=evaluateSequencePosition;
 evaluateSequencePosition=function(rootTeam,goalDiff){
  let value=fuV98PrevEvaluate(rootTeam,goalDiff);
  if(!fuV98Ai.enabled||!fuV98Ai.risk||rootTeam!==CPU_TEAM)return value;
  const ctx=fuV98RiskContext();
  if(ctx.urgency<=0||ctx.goalFor===1&&ctx.goalAgainst===1)return value;
  value+=(goalDiff[CPU_TEAM-1]||0)*320*(ctx.goalFor-1)-(goalDiff[HUMAN_TEAM-1]||0)*320*(ctx.goalAgainst-1);
  const holder=owner();
  if(holder){
   const threat=estimateAttackingThreat(p,holder.id).probability;
   if(holder.t===CPU_TEAM)value+=threat*145*(ctx.threatFor-1)+ctx.keepBall*8+ctx.push*attackingProgress(CPU_TEAM,ball.c)*10;
   else value-=threat*145*(ctx.threatAgainst-1)+ctx.keepBall*8;
  }
  return value;
 };

 // ======== Etapa 2b ========
 // ---- 2. Remates por valor esperado y 4. variedad controlada (decisión de la raíz) ----
 // Cada jugada raíz se evalúa con las mismas tres muestras de azar que antes. Con tres muestras, un remate del
 // 30% puede contar como 0% o como 67% de gol según la suerte fija de esas semillas; ahora el valor del remate
 // pondera los resultados con gol y sin gol por la probabilidad de gol que calcula el motor (la misma que ve el
 // jugador). Si en las muestras falta una de las dos clases, se evalúa esa consecuencia con la misma búsqueda.
 function fuV98SearchCtx(){return {nodes:0,width:2,status:{textContent:''}};}
 async function fuV98ShotOutcomeValue(rootState,shotKey,goal){
  restoreSequenceState(rootState);forcedSearchPlanId=null;forcedSearchPlanTeam=null;simulationRandomState=CPU_SEARCH_SEEDS[0];
  const a=tacticalCandidates().find(x=>sequenceActionKey(x)===shotKey);if(!a)return null;
  const shooter=p.find(z=>z.id===a.playerId);
  if(goal){
   const goals=[0,0];simulateScoreGoal(CPU_TEAM,goals);
   return (await searchSequenceNode(CPU_SEARCH_DEPTH-1,CPU_TEAM,goals,-Infinity,Infinity,fuV98SearchCtx())).value;
  }
  // Sin gol: el arquero rival queda con la pelota (atajada), la consecuencia más frecuente de un remate al arco.
  const keeper=p.find(z=>z.t!==CPU_TEAM&&z.n===1);if(!keeper||!shooter)return null;
  ball={c:keeper.c,r:keeper.r,owner:keeper.id};kickoffPassRequired=false;clearFreeKickRequirement(shooter.id);
  if(restartPassOnlyId===shooter.id)restartPassOnlyId=null;
  advanceSimulatedAction(false,shooter.id);
  return (await searchSequenceNode(CPU_SEARCH_DEPTH-1,CPU_TEAM,[0,0],-Infinity,Infinity,fuV98SearchCtx())).value;
 }
 function fuV98PickRoot(scored){
  scored.sort((a,b)=>b.mean-a.mean);
  const best=scored[0];
  if(!fuV98Ai.variety)return best.key;
  // Corrección 2e: la variedad solo se usa con la pelota en la CPU; sin la pelota decide la mejor defensa.
  const holder=owner();
  if(!holder||holder.t!==CPU_TEAM)return best.key;
  const near=scored.filter(s=>s.mean>=best.mean-fuV98Ai.varietyMargin);
  if(near.length<2)return best.key;
  // Azar del propio partido en el momento de decidir: no anticipa ninguna tirada de las jugadas.
  const weights=near.map(s=>Math.exp((s.mean-best.mean)/2)),total=weights.reduce((x,y)=>x+y,0);
  let r=Math.random()*total;
  for(let i=0;i<near.length;i++){r-=weights[i];if(r<=0)return near[i].key;}
  return best.key;
 }
 // ======== Etapa 2d ========
 // ---- Valor esperado también en pases y disputas ----
 // Las tres semillas de la raíz empiezan siempre con las mismas tiradas (0,599 · 0,112 · 0,021), y la primera tirada
 // de una jugada decide su precisión o su falta. Por eso un pase del 85% nunca se veía impreciso y una disputa de
 // costado (30% de falta) se veía como falta dos de cada tres veces. Ahora el valor pondera "pase completado al
 // receptor" con precisión × (1 − intercepción) y "falta" con la probabilidad del reglamento (30% costado, 60% atrás).
 // Si en las muestras falta una clase, se evalúa con una semilla cuya primera tirada cae en esa clase.
 function fuV98NextState(s){let x=s>>>0;x^=x<<13;x^=x>>>17;x^=x<<5;return x>>>0;}
 function fuV98SeedWhere(test){
  for(let k=1;k<5000;k++){
   const seed=((0x5BD1E995^Math.imul(k,0x9E3779B1))>>>0)||1;
   let s=seed;const u=[];for(let i=0;i<3;i++){s=fuV98NextState(s);u.push(s/4294967296);}
   if(test(u))return seed;
  }
  return null;
 }
 function fuV98ClassModel(a){
  if(a.kind==='pass'&&a.receiverId!=null){
   const prec=Math.max(0,Math.min(1,Number(a.precision)||0)),risk=Math.max(0,Math.min(1,Number(a.interceptRisk)||0));
   const pSuccess=prec*(1-risk),receiverId=a.receiverId;
   if(!(pSuccess>0&&pSuccess<1))return null;
   const imprecise=1-prec>=prec*risk;
   return {type:'pase',p:pSuccess,isA:()=>ball.owner===receiverId,
    seedA:()=>fuV98SeedWhere(u=>u[0]<prec&&(risk<=0||u[1]>=risk)),
    seedB:()=>fuV98SeedWhere(u=>imprecise?u[0]>=prec:(u[0]<prec&&u[1]<risk))};
  }
  if(a.kind==='duel'){
   const x=p.find(z=>z.id===a.playerId),r=p.find(z=>z.id===a.opponentId);
   if(!x||!r)return null;
   const dc=r.c-x.c,dr=r.r-x.r,diagonal=Math.abs(dc)===1&&Math.abs(dr)===1,tipo=duelType(x,r);
   const pFoul=tipo==='atras'?.60:tipo==='costado'?.30:0,fouledTeam=r.t;
   if(pFoul<=0)return null;
   return {type:'disputa',p:pFoul,isA:result=>result===true&&freeKickAwardedTeam===fouledTeam,
    seedA:()=>fuV98SeedWhere(u=>u[0]<pFoul),seedB:()=>fuV98SeedWhere(u=>u[0]>=pFoul)};
  }
  return null;
 }
 async function fuV98ForcedValue(rootState,key,seed,model,wantA){
  if(seed===null)return null;
  restoreSequenceState(rootState);forcedSearchPlanId=null;forcedSearchPlanTeam=null;simulationRandomState=seed;
  const a=tacticalCandidates().find(x=>sequenceActionKey(x)===key);if(!a)return null;
  const goals=[0,0],result=simulateOneAction(a,goals);
  if(result==='blocked'||model.isA(result)!==wantA)return null;
  advanceSimulatedAction(result,a.playerId);
  return (await searchSequenceNode(CPU_SEARCH_DEPTH-1,CPU_TEAM,goals,-Infinity,Infinity,fuV98SearchCtx())).value;
 }
 let fuV98LastDecision=null;
 const fuV98PrevChooseCpuMove=chooseCpuMove;
 chooseCpuMove=async function(token){
  if(!fuV98Ai.enabled)return fuV98PrevChooseCpuMove(token);
  const rootState=captureSequenceState();
  const rootKeys=cpuSearchCandidateKeys();
  if(!rootKeys.length)return null;
  const scored=[];
  try{
   for(let ki=0;ki<rootKeys.length;ki++){
    let total=0,samples=0,shotP=null,model=null,modelReady=false,blockedAny=false;const goalValues=[],otherValues=[],aValues=[],bValues=[];
    for(let si=0;si<CPU_SEARCH_SEEDS.length;si++){
     if(token!==cpuEpoch||!cpuAutoEnabled)return null;
     restoreSequenceState(rootState);forcedSearchPlanId=null;forcedSearchPlanTeam=null;simulationRandomState=CPU_SEARCH_SEEDS[si];
     const a=tacticalCandidates().find(x=>sequenceActionKey(x)===rootKeys[ki]);
     if(!a)continue;
     if(a.kind==='shoot'&&shotP===null)shotP=Math.max(0,Math.min(1,Number(a.goalProbability)||0));
     if(!modelReady){model=fuV98Ai.expected?fuV98ClassModel(a):null;modelReady=true;}
     const goals=[0,0],result=simulateOneAction(a,goals);let value;
     const inA=model&&result!=='blocked'?model.isA(result):null;
     if(result==='blocked')value=evaluateSequencePosition(CPU_TEAM,[0,0])-16;
     else{
      advanceSimulatedAction(result,a.playerId);
      const child=await searchSequenceNode(CPU_SEARCH_DEPTH-1,CPU_TEAM,goals,-Infinity,Infinity,fuV98SearchCtx());
      value=child.value;
     }
     total+=value;samples++;
     if(a.kind==='shoot'&&result!=='blocked')(goals[CPU_TEAM-1]>0?goalValues:otherValues).push(value);
     if(model){if(result==='blocked')blockedAny=true;else (inA?aValues:bValues).push(value);}
     restoreSequenceState(rootState);
    }
    if(!samples)continue;
    let mean=total/samples;const sampledMean=mean;let shotDetail=null;
    if(fuV98Ai.shots&&shotP!==null&&goalValues.length+otherValues.length===samples){
     const avg=v=>v.reduce((x,y)=>x+y,0)/v.length;
     const vGoal=goalValues.length?avg(goalValues):await fuV98ShotOutcomeValue(rootState,rootKeys[ki],true);
     const vOther=otherValues.length?avg(otherValues):await fuV98ShotOutcomeValue(rootState,rootKeys[ki],false);
     restoreSequenceState(rootState);
     if(vGoal!==null&&vOther!==null){mean=shotP*vGoal+(1-shotP)*vOther;shotDetail={p:shotP,vGoal,vOther,goalSamples:goalValues.length,otherSamples:otherValues.length};}
    }
    let expectedDetail=null;
    if(model&&!blockedAny&&aValues.length+bValues.length===samples){
     const avg=v=>v.reduce((x,y)=>x+y,0)/v.length;
     const vA=aValues.length?avg(aValues):await fuV98ForcedValue(rootState,rootKeys[ki],model.seedA(),model,true);
     const vB=bValues.length?avg(bValues):await fuV98ForcedValue(rootState,rootKeys[ki],model.seedB(),model,false);
     restoreSequenceState(rootState);
     if(vA!==null&&vB!==null){mean=model.p*vA+(1-model.p)*vB;expectedDetail={type:model.type,p:model.p,vA,vB,aSamples:aValues.length,bSamples:bValues.length};}
    }
    scored.push({key:rootKeys[ki],mean,sampledMean,shot:shotDetail,expected:expectedDetail});
    if(token!==cpuEpoch||!cpuAutoEnabled)return null;
   }
  }finally{
   restoreSequenceState(rootState);forcedSearchPlanId=null;forcedSearchPlanTeam=null;simulationRandomState=rootState.simulationRandomState;
   activeTacticalPlan=chooseTacticalPlan(turn,owner());
  }
  if(!scored.length)return null;
  const pick=fuV98PickRoot(scored);
  // Diagnóstico interno de la última decisión (no cambia la elección).
  fuV98LastDecision={at:matchClockActions,scored:scored.map(x=>({...x})),pick};
  return tacticalCandidates().find(a=>sequenceActionKey(a)===pick)||null;
 };
 // ======== Etapa 2c ========
 // ---- 3. Anticipación defensiva: en el turno rival, la búsqueda incluye su amenaza inmediata más peligrosa ----
 // La lista corta de respuestas rivales sale de la heurística general. Si el rival tiene una amenaza que puede
 // ejecutar en ese mismo turno (remate del poseedor, o pase a un compañero que todavía no jugó y conserva una acción
 // para rematar) y no está en la lista, reemplaza la última respuesta, salvo que esa ya sea una amenaza igual o mayor.
 // Corrección 2e: las "conducciones para rematar" del mapa de v96 no cuentan, porque el mismo jugador no puede
 // conducir y rematar en un turno; tratarlas como inmediatas hacía que la búsqueda dejara de ver remates reales.
 function fuV98ImmediateDanger(a,options,holder){
  if(!a||a.playerId!==holder.id)return 0;
  if(a.kind==='shoot')return Math.max(0,Number(a.goalProbability)||0);
  if(a.kind==='pass'&&a.receiverId!=null){
   if(playedThisTurn.indexOf(a.receiverId)>=0||actionNo>=ACTIONS_PER_TURN)return 0;
   const option=options.find(o=>o.type==='pass-shot'&&o.receiverId===a.receiverId);
   return option?option.probability:0;
  }
  return 0;
 }
 function fuV98WithMostDangerous(shortlist,candidates){
  const holder=owner();
  if(!holder||holder.t===CPU_TEAM||!shortlist.length||playedThisTurn.indexOf(holder.id)>=0)return shortlist;
  const options=fuV96ThreatOptions(p,holder.id);
  let best=null,bestDanger=0;
  for(const a of candidates){const d=fuV98ImmediateDanger(a,options,holder);if(d>bestDanger){bestDanger=d;best=a;}}
  if(!best||bestDanger<0.12)return shortlist;
  const key=sequenceActionKey(best);
  if(shortlist.some(a=>sequenceActionKey(a)===key))return shortlist;
  const out=shortlist.slice();
  if(out.length<2){out.push(best);return out;}
  if(fuV98ImmediateDanger(out[out.length-1],options,holder)>=bestDanger)return shortlist;
  out[out.length-1]=best;
  return out;
 }
 async function fuV98SearchSequenceNode(depth,rootTeam,goalDiff,alpha,beta,ctx){
  sequenceVisitedNodes++;ctx.nodes++;
  if(ctx.nodes%14===0){ctx.status.textContent='Buscando respuestas rivales… '+ctx.nodes+' nodos explorados · profundidad restante '+depth+'.';await new Promise(resolve=>setTimeout(resolve,0));}
  const staticValue=evaluateSequencePosition(rootTeam,goalDiff);
  if(depth<=0)return {value:staticValue,pv:[]};
  const candidates=tacticalCandidates();
  if(!candidates.length)return {value:staticValue-5,pv:[]};
  const maximizing=turn===rootTeam;
  let shortlist=chooseSearchActions(candidates,ctx.width);
  if(!maximizing&&fuV98Ai.enabled&&fuV98Ai.anticipation)shortlist=fuV98WithMostDangerous(shortlist,candidates);
  let bestValue=maximizing?-Infinity:Infinity,bestPv=[];
  for(const a of shortlist){
   const snap=captureSequenceState(),beforeTurn=turn,beforeAction=actionNo,goals=[0,0];
   const actionSummary=sequenceActionSummary(a,beforeTurn,beforeAction);
   const result=simulateOneAction(a,goals);
   let value,pv;
   if(result==='blocked'){value=evaluateSequencePosition(rootTeam,goalDiff)-4;pv=[{...actionSummary,label:actionSummary.label+' (bloqueada en esta simulación)'}];}
   else{
    advanceSimulatedAction(result,a.playerId);
    const nextDiff=[goalDiff[0]+goals[0],goalDiff[1]+goals[1]];
    const child=await searchSequenceNode(depth-1,rootTeam,nextDiff,alpha,beta,ctx);
    value=child.value;pv=[actionSummary,...child.pv];
   }
   restoreSequenceState(snap);
   if(maximizing){if(value>bestValue){bestValue=value;bestPv=pv;}alpha=Math.max(alpha,bestValue);}
   else{if(value<bestValue){bestValue=value;bestPv=pv;}beta=Math.min(beta,bestValue);}
   if(beta<=alpha)break;
  }
  return {value:bestValue,pv:bestPv};
 }
 searchSequenceNode=fuV98SearchSequenceNode;

 // ================== FIN FÚTBOL ÚNICO v98 · IA (FASE 2) ==================
`;

const V98_TACTICAL_REBALANCE = String.raw`
 // ==================== FÚTBOL ÚNICO v98.2 · POSICIÓN Y PROGRESIÓN ====================
 // Capa táctica experimental: no modifica reglas ni probabilidades del motor.
 // 1) Protege la zona de acción del arquero de la CPU.
 // 2) Puntúa mejor los movimientos ofensivos de apoyo que ganan profundidad útil.
 // 3) Aumenta la participación adelantada cuando la CPU va perdiendo.
 const fuV982GoalieMaxDistance = 3;
 const fuV982PrevTacticalCandidates = tacticalCandidates;
 const fuV982PrevEvaluateSequencePosition = evaluateSequencePosition;
 const fuV982PrevChooseCpuMove = chooseCpuMove;

 function fuV982GoalAnchor(team){
  return {c:team===1?0:C-1,r:Math.floor((R-1)/2)};
 }
 function fuV982GoalDistance(team,cell){
  return cheb(cell,fuV982GoalAnchor(team));
 }
 function fuV982KeeperAction(action){
  return !!(action&&action.player&&action.player.t===CPU_TEAM&&action.player.n===1&&action.to&&['move','carry'].includes(action.kind));
 }
 function fuV982OffensiveRoleWeight(n){
  if([7,8,9,11].includes(n))return 1.28;
  if(n===10)return 1.20;
  if([5,6].includes(n))return 1.00;
  if([2,3,4].includes(n))return .62;
  return .50;
 }
 function fuV982ProjectedChaseFactor(projectedDiff){
  if(projectedDiff>=0)return 1;
  const total=MATCH_GAME_ACTIONS||360;
  const left=Math.max(0,total-matchClockActions);
  const remaining=left/total;
  const urgency=Math.max(0,Math.min(1,(.50-remaining)/.50));
  const deficit=Math.min(2,Math.abs(projectedDiff));
  // Incluso al principio, perder debe inclinar ligeramente al ataque; al final, mucho más.
  return 1+Math.min(.90,.18*deficit+.56*urgency+(deficit>=2?.08:0));
 }
 function fuV982CurrentScoreDiff(){
  return (score[CPU_TEAM-1]||0)-(score[HUMAN_TEAM-1]||0);
 }
 function fuV982UsefulAttackMoveBonus(action,holder){
  if(!action||action.kind!=='move'||action.mode!=='support'||!action.player||action.player.n===1||!holder||holder.t!==CPU_TEAM)return 0;
  const actor=action.player,from=action.from||{c:actor.c,r:actor.r},to=action.to;
  if(!to)return 0;
  const dir=CPU_TEAM===1?1:-1;
  const forward=(to.c-from.c)*dir;
  if(forward<=0)return 0;
  const beforeDistance=cheb(from,holder),afterDistance=cheb(to,holder);
  const reach=Math.max(2,Math.min(6,BALL_REACH(holder.n)));
  // No se premia avanzar hacia una zona desconectada de la jugada.
  if(afterDistance>reach||afterDistance<2)return 0;
  const role=fuV982OffensiveRoleWeight(actor.n);
  const distanceToGoal=CPU_TEAM===1?(C-1-to.c):to.c;
  const aheadOfBall=(to.c-holder.c)*dir;
  const crowding=p.filter(z=>z.t===CPU_TEAM&&z.id!==actor.id&&cheb(z,to)<=2).length;
  const diff=fuV982CurrentScoreDiff();
  const chase=fuV982ProjectedChaseFactor(diff);
  // Cada casilla útil de profundidad cuenta: dos casillas hacia una opción de gol
  // deben superar normalmente a un avance de una sola casilla.
  let bonus=forward*8.5*role;
  if(afterDistance<=5)bonus+=3.5*role;
  if(aheadOfBall>0&&aheadOfBall<=4)bonus+=3.0*role;
  if(distanceToGoal<=6)bonus+=2.2*role;
  if(forward>=2)bonus+=2.5*role;
  if(crowding>=3)bonus-=(crowding-2)*3.5;
  // Con desventaja, especialmente al final, premiar ocupación ofensiva de los espacios útiles.
  bonus*=chase;
  // Un movimiento lateral/retirada puede seguir ganando por otras razones tácticas; aquí solo
  // ajustamos acciones que ya avanzan y permanecen conectadas con el poseedor.
  return Math.max(0,Math.min(38,bonus));
 }
 function fuV982AttackingSupportValue(team,playersState,holder,projectedDiff){
  if(!holder||holder.t!==team)return 0;
  const dir=team===1?1:-1;
  const maxReach=Math.max(2,Math.min(6,BALL_REACH(holder.n)));
  const chase=team===CPU_TEAM?fuV982ProjectedChaseFactor(projectedDiff):1;
  let total=0;
  for(const z of playersState){
   if(z.t!==team||z.id===holder.id||z.n===1)continue;
   const distance=cheb(z,holder);
   if(distance<2||distance>maxReach)continue;
   const forwardGap=(z.c-holder.c)*dir;
   const role=fuV982OffensiveRoleWeight(z.n);
   let v=1.6*role;
   // Puntúa las opciones que se ofrecen por delante del balón y pueden conectar con el poseedor.
   if(forwardGap>0)v+=Math.min(4,forwardGap)*2.1*role;
   if(distance<=5)v+=1.0*role;
   const goalDistance=team===1?(C-1-z.c):z.c;
   if(forwardGap>0&&goalDistance<=6)v+=1.2*role;
   if(team===CPU_TEAM&&projectedDiff<0&&forwardGap>0)v*=chase;
   total+=v;
  }
  // Limita el peso total para que la ocupación ofensiva complemente la amenaza y no la suplante.
  return Math.min(18,total);
 }

 tacticalCandidates=function(){
  let actions=fuV982PrevTacticalCandidates();
  if(turn!==CPU_TEAM||!fuV98Ai.enabled)return actions;
  const keeper=p.find(z=>z.t===CPU_TEAM&&z.n===1);
  const keeperDistance=keeper?fuV982GoalDistance(CPU_TEAM,keeper):0;
  // El arquero nunca elige desplazamientos que lo lleven fuera de su radio de tres casillas.
  // Si ya estaba fuera, solo se permiten movimientos que reduzcan estrictamente la distancia al arco.
  if(keeper){
   actions=actions.filter(a=>{
    if(!fuV982KeeperAction(a)||a.playerId!==keeper.id)return true;
    const next=fuV982GoalDistance(CPU_TEAM,a.to);
    return keeperDistance>fuV982GoalieMaxDistance?next<keeperDistance:next<=fuV982GoalieMaxDistance;
   });
  }
  const holder=owner();
  if(holder&&holder.t===CPU_TEAM){
   for(const action of actions){
    const bonus=fuV982UsefulAttackMoveBonus(action,holder);
    if(bonus>0){action.fuV982ForwardSupportBonus=bonus;action.score=Math.min(500,(Number(action.score)||0)+bonus);}
   }
  }
  // Si el arquero ya está fuera de zona, su movimiento legal de retorno entra arriba de la lista.
  if(keeper&&keeperDistance>fuV982GoalieMaxDistance){
   for(const action of actions){
    if(!fuV982KeeperAction(action)||action.playerId!==keeper.id)continue;
    if(fuV982GoalDistance(CPU_TEAM,action.to)<keeperDistance){
     action.fuV982KeeperReturn=true;
     action.score=Math.min(650,(Number(action.score)||0)+320);
    }
   }
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };

 evaluateSequencePosition=function(rootTeam,goalDiff){
  let value=fuV982PrevEvaluateSequencePosition(rootTeam,goalDiff);
  const holder=owner();
  if(!holder)return value;
  const simulatedDiff=(goalDiff&&goalDiff.length>=2)?((goalDiff[CPU_TEAM-1]||0)-(goalDiff[HUMAN_TEAM-1]||0)):0;
  const projectedDiff=fuV982CurrentScoreDiff()+simulatedDiff;
  const support=fuV982AttackingSupportValue(holder.t,p,holder,projectedDiff);
  value+=(holder.t===rootTeam?1:-1)*support;
  return value;
 };

 chooseCpuMove=async function(token){
  if(token!==cpuEpoch||!cpuAutoEnabled)return null;
  // Si el portero quedó fuera de la zona por un estado previo, prioriza su retorno en la primera
  // acción disponible. No cambia reglas del motor ni limita al arquero humano.
  if(fuV98Ai.enabled&&turn===CPU_TEAM){
   const keeper=p.find(z=>z.t===CPU_TEAM&&z.n===1);
   const d=keeper?fuV982GoalDistance(CPU_TEAM,keeper):0;
   const alreadyPlayed=keeper&&(playedThisTurn.includes(keeper.id)||(actionNo>1&&keeper.id===lastPlayedId));
   if(keeper&&d>fuV982GoalieMaxDistance&&!alreadyPlayed){
    const returnActions=tacticalCandidates().filter(a=>fuV982KeeperAction(a)&&a.playerId===keeper.id&&fuV982GoalDistance(CPU_TEAM,a.to)<d);
    if(returnActions.length){
     returnActions.sort((a,b)=>fuV982GoalDistance(CPU_TEAM,a.to)-fuV982GoalDistance(CPU_TEAM,b.to)||(Number(b.score)||0)-(Number(a.score)||0));
     return returnActions[0];
    }
   }
  }
  return fuV982PrevChooseCpuMove(token);
 };
 // ==================== FIN FÚTBOL ÚNICO v98.2 · POSICIÓN Y PROGRESIÓN ====================
`;


// v98.3 · Estructura colectiva: líneas de defensa, mediocampo y ataque elásticas.
// No añade ni prohíbe acciones legales; cambia únicamente la valoración táctica de la CPU.
const V98_TACTICAL_STRUCTURE = String.raw`
 // ==================== FÚTBOL ÚNICO v98.3 · ESTRUCTURA COLECTIVA ====================
 const fuV983PrevTacticalCandidates=tacticalCandidates;
 const fuV983PrevEvaluateSequencePosition=evaluateSequencePosition;
 const fuV983LineGroups={defense:[2,3,4,6],midfield:[5,7,8],attack:[9,10,11]};
 const fuV983LineConfig={
  defense:{depthTolerance:1.65,rowTolerance:1.8,depthWeight:2.65,rowWeight:.82,cohesionWeight:2.15,responsiveness:.42},
  midfield:{depthTolerance:1.55,rowTolerance:2.0,depthWeight:2.15,rowWeight:.66,cohesionWeight:1.55,responsiveness:.68},
  attack:{depthTolerance:1.9,rowTolerance:2.25,depthWeight:1.55,rowWeight:.43,cohesionWeight:1.15,responsiveness:.82}
 };
 function fuV983Clamp(v,lo,hi){return Math.max(lo,Math.min(hi,Number.isFinite(v)?v:0));}
 function fuV983LineOf(player){
  if(!player||player.n===1)return 'keeper';
  for(const key of Object.keys(fuV983LineGroups))if(fuV983LineGroups[key].includes(player.n))return key;
  return 'midfield';
 }
 function fuV983Depth(team,cell){return team===1?cell.c:(C-1-cell.c);}
 function fuV983Median(values){
  if(!values.length)return 0;
  const sorted=values.slice().sort((a,b)=>a-b),m=Math.floor(sorted.length/2);
  return sorted.length%2?sorted[m]:(sorted[m-1]+sorted[m])/2;
 }
 function fuV983ProjectedDiff(goalDiff){
  return (Number(score&&score[CPU_TEAM-1])||0)-(Number(score&&score[HUMAN_TEAM-1])||0)
   +(Number(goalDiff&&goalDiff[CPU_TEAM-1])||0)-(Number(goalDiff&&goalDiff[HUMAN_TEAM-1])||0);
 }
 function fuV983Urgency(projectedDiff){
  if(projectedDiff>=0)return 0;
  const total=Math.max(1,Number(MATCH_GAME_ACTIONS)||360),left=Math.max(0,total-(Number(matchClockActions)||0));
  const time=fuV983Clamp((.52-left/total)/.52,0,1);
  const deficit=Math.min(2,Math.abs(projectedDiff));
  return fuV983Clamp(.12*deficit+.82*time*(deficit===1?.7:1),0,1);
 }
 function fuV983Anchor(team,player,playersState,ballState,projectedDiff){
  const base=FORMATION.find(d=>d[0]===team&&d[1]===player.n);
  if(!base)return {depth:fuV983Depth(team,player),row:player.r};
  const line=fuV983LineOf(player),cfg=fuV983LineConfig[line];
  const ballDepth=fuV983Depth(team,ballState||ball);
  const mid=(C-1)/2;
  // Las tres líneas acompañan la ubicación de la pelota, sin perseguirla hasta desarmarse.
  const fieldShift=fuV983Clamp((ballDepth-mid)/Math.max(1,mid),-1,1);
  const holder=(playersState||p).find(z=>z.id===(ballState||ball).owner)||null;
  const ownPossession=!!holder&&holder.t===team;
  let depth=team===1?base[2]:(C-1-base[2]);
  depth+=fieldShift*cfg.responsiveness;
  if(ownPossession)depth+=line==='defense'?.12:line==='midfield'?.26:.34;
  const urgency=team===CPU_TEAM?fuV983Urgency(projectedDiff):0;
  // Si la CPU necesita remontar, solo adelanta gradualmente las referencias de apoyo; no empuja a los once en bloque.
  if(line==='midfield')depth+=urgency*.38;
  if(line==='attack')depth+=urgency*.66;
  const lateralCoupling=line==='defense'?.16:line==='midfield'?.22:.18;
  const row=fuV983Clamp(base[3]+((ballState||ball).r-5)*lateralCoupling,0,R-1);
  return {depth:fuV983Clamp(depth,0,C-1),row,line};
 }
 function fuV983StructureCost(team,playersState=p,ballState=ball,projectedDiff=fuV983CurrentDiffSafe()){
  const own=playersState.filter(z=>z.t===team&&z.n!==1);
  if(own.length<7)return 0;
  let cost=0;
  const medians={};
  for(const group of Object.keys(fuV983LineGroups)){
   const config=fuV983LineConfig[group];
   const linePlayers=own.filter(z=>fuV983LineGroups[group].includes(z.n));
   if(!linePlayers.length)continue;
   const depths=linePlayers.map(z=>fuV983Depth(team,z));
   const median=fuV983Median(depths);medians[group]=median;
   for(const z of linePlayers){
    const anchor=fuV983Anchor(team,z,playersState,ballState,projectedDiff);
    const depthError=Math.abs(fuV983Depth(team,z)-anchor.depth);
    const rowError=Math.abs(z.r-anchor.row);
    const depthExcess=Math.max(0,depthError-config.depthTolerance);
    const rowExcess=Math.max(0,rowError-config.rowTolerance);
    cost+=depthExcess*depthExcess*config.depthWeight;
    cost+=rowExcess*rowExcess*config.rowWeight;
    // Los compañeros de una misma línea pueden escalonarse, pero no dispersarse sin propósito.
    const lineSpread=Math.max(0,Math.abs(fuV983Depth(team,z)-median)-1.55);
    cost+=lineSpread*lineSpread*config.cohesionWeight;
   }
  }
  // Evita que las líneas se amontonen o queden desconectadas. Se permiten brechas amplias si solo
  // un jugador rompe la línea con una carrera útil: aquí se usa la mediana, no cada jugador aislado.
  const gaps=[['defense','midfield'],['midfield','attack']];
  for(const pair of gaps){
   if(!Number.isFinite(medians[pair[0]])||!Number.isFinite(medians[pair[1]]))continue;
   const gap=medians[pair[1]]-medians[pair[0]];
   cost+=Math.max(0,1.15-gap)*3.6;
   cost+=Math.max(0,gap-5.6)*1.65;
  }
  // Una ruptura de línea es útil cuando ofrece una opción conectada por delante del poseedor.
  // Se admite hasta dos corredores: la formación es elástica, no una alineación rígida.
  const holder=(playersState||p).find(z=>z.id===(ballState||ball).owner)||null;
  if(holder&&holder.t===team){
   const dir=team===1?1:-1;let runners=0,credit=0;
   const reach=Math.max(2,Math.min(7,BALL_REACH(holder.n)+1));
   for(const z of own){
    if(runners>=2)break;
    if(z.id===holder.id)continue;
    const line=fuV983LineOf(z);if(!['midfield','attack'].includes(line))continue;
    const anchor=fuV983Anchor(team,z,playersState,ballState,projectedDiff);
    const depth=fuV983Depth(team,z),ahead=(z.c-holder.c)*dir,dist=cheb(z,holder);
    if(depth<=anchor.depth+1.1||ahead<1||dist<2||dist>reach)continue;
    const amount=Math.min(3.2,(depth-anchor.depth)*1.25);
    credit+=amount;runners++;
   }
   cost=Math.max(0,cost-credit);
  }
  return Math.max(0,Math.min(240,cost));
 }
 function fuV983CurrentDiffSafe(){return (Number(score&&score[CPU_TEAM-1])||0)-(Number(score&&score[HUMAN_TEAM-1])||0);}
 function fuV983PurposefulBreakBonus(action,holder,projectedDiff){
  if(!action||action.kind!=='move'||!action.player||action.player.t!==CPU_TEAM||action.player.n===1||!holder||holder.t!==CPU_TEAM||!action.to)return 0;
  const actor=action.player,line=fuV983LineOf(actor);
  if(line==='defense'&&fuV983Urgency(projectedDiff)<.78)return 0;
  if(!['midfield','attack','defense'].includes(line))return 0;
  const from=action.from||{c:actor.c,r:actor.r},dir=CPU_TEAM===1?1:-1;
  const forward=(action.to.c-from.c)*dir;
  if(forward<=0)return 0;
  const dist=cheb(action.to,holder),reach=Math.max(2,Math.min(7,BALL_REACH(holder.n)+1));
  if(dist<2||dist>reach)return 0;
  const ahead=(action.to.c-holder.c)*dir;
  if(ahead<1)return 0;
  const occupied=playersStateCountNear(action.to,CPU_TEAM);
  const pressure=p.filter(z=>z.t!==CPU_TEAM&&cheb(z,action.to)<=1).length;
  let bonus=line==='attack'?4.8:line==='midfield'?4.0:1.2;
  if(forward>=2)bonus+=1.4;
  const depth=fuV983Depth(CPU_TEAM,action.to);
  if(depth>=10)bonus+=1.2;
  if(occupied>=3)bonus-=3.2;
  if(pressure>=2)bonus-=Math.min(3.5,pressure*1.2);
  return fuV983Clamp(bonus,0,7.5);
 }
 function playersStateCountNear(cell,team){return p.filter(z=>z.t===team&&cheb(z,cell)<=1).length;}
 function fuV983CloneStateWithAction(action){
  const actorId=action.playerId??action.player?.id;
  const state=p.map(z=>z.id===actorId?{...z,c:action.to.c,r:action.to.r}:({...z}));
  let b={...ball};
  if(action.kind==='carry')b={c:action.to.c,r:action.to.r,owner:actorId};
  return {players:state,ball:b};
 }
 tacticalCandidates=function(){
  const actions=fuV983PrevTacticalCandidates();
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled)return actions;
  const holder=owner(),diff=fuV983CurrentDiffSafe();
  const before=fuV983StructureCost(CPU_TEAM,p,ball,diff);
  for(const a of actions){
   if(!a||!a.player||a.player.t!==CPU_TEAM||!['move','carry'].includes(a.kind)||!a.to)continue;
   const next=fuV983CloneStateWithAction(a);
   const after=fuV983StructureCost(CPU_TEAM,next.players,next.ball,diff);
   const gain=before-after;
   const weight=holder&&holder.t!==CPU_TEAM?1.0:holder&&holder.t===CPU_TEAM?.52:.78;
   const breakBonus=fuV983PurposefulBreakBonus(a,holder,diff);
   const adjustment=fuV983Clamp(gain*weight+breakBonus,-16,16);
   a.fuV983ShapeAdjustment=adjustment;
   a.fuV983ShapeBefore=before;a.fuV983ShapeAfter=after;
   a.score=fuV983Clamp((Number(a.score)||0)+adjustment,-120,380);
   if(Math.abs(adjustment)>=2)a.reason=(a.reason||'')+' Estructura colectiva: '+(adjustment>0?'mejora la coordinación de líneas o genera un apoyo útil':'se aleja de la estructura sin ventaja táctica suficiente')+' ('+(adjustment>0?'+':'')+adjustment.toFixed(1)+').';
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };
 const fuV983ShapeEvalWeightDefending=0.74,fuV983ShapeEvalWeightAttacking=0.43;
 evaluateSequencePosition=function(rootTeam,goalDiff){
  const value=fuV983PrevEvaluateSequencePosition(rootTeam,goalDiff);
  if(rootTeam!==CPU_TEAM||!fuV98Ai?.enabled)return value;
  const holder=owner();
  const projectedDiff=fuV983ProjectedDiff(goalDiff);
  const cost=fuV983StructureCost(CPU_TEAM,p,ball,projectedDiff);
  const weight=holder&&holder.t!==CPU_TEAM?fuV983ShapeEvalWeightDefending:fuV983ShapeEvalWeightAttacking;
  return value-cost*weight;
 };
 // ==================== FIN FÚTBOL ÚNICO v98.3 · ESTRUCTURA COLECTIVA ====================
`;


// v98.4 · Prioridad ofensiva contextual y respeto funcional de roles.
// Evita que un movimiento defensivo desconectado gane en el último tercio
// cuando existen alternativas ofensivas útiles. No altera reglas ni probabilidades.
const V98_ATTACK_PRIORITY_PATCH = String.raw`
 // ==================== FÚTBOL ÚNICO v98.4 · PRIORIDAD DE DECISIONES ====================
 const fuV984PrevTacticalCandidates=tacticalCandidates;
 const fuV984PrevPickRoot=fuV98PickRoot;
 function fuV984AttackContext(holder=owner()){
  return turn===CPU_TEAM&&!!holder&&holder.t===CPU_TEAM&&attackingProgress(CPU_TEAM,ball.c)>=.68;
 }
 function fuV984OwnGoalCounterThreat(){
  const ownGoal={c:CPU_TEAM===1?0:C-1,r:5};
  return p.some(z=>z.t!==CPU_TEAM&&attackingProgress(z.t,z.c)>=.62&&cheb(z,ownGoal)<=5);
 }
 function fuV984Forward(action){
  const from=action?.from||(action?.player?{c:action.player.c,r:action.player.r}:null);
  return from&&action?.to?(action.to.c-from.c)*attackDir(CPU_TEAM):0;
 }
 function fuV984UsefulAttackAction(action,holder){
  if(!action||!holder||holder.t!==CPU_TEAM)return false;
  const role=action.player?tacticalRole(action.player):'';
  const forward=fuV984Forward(action);
  if(action.playerId===holder.id){
   if(action.kind==='shoot')return Number(action.goalProbability||0)>=.08;
   if(action.kind==='pass'&&action.receiver){
    const rr=tacticalRole(action.receiver),success=actionSuccessEstimate(action);
    return forward>0&&['forward','wide','pivot'].includes(rr)&&success>=.45&&(action.exposureRisk||0)<18;
   }
   if(action.kind==='carry')return forward>0&&nearOpponents(CPU_TEAM,action.to,1)<=1;
  }
  if(action.kind==='move'&&action.mode==='support'&&action.playerId!==holder.id&&['forward','wide','pivot'].includes(role)){
   const after=cheb(action.to,holder),reach=Math.max(2,Math.min(7,BALL_REACH(holder.n)+1));
   const pressure=nearOpponents(CPU_TEAM,action.to,1);
   return forward>0&&after>=2&&after<=reach&&pressure<=1&&(action.fuV983ShapeAdjustment??0)>=-8;
  }
  return false;
 }
 function fuV984BadDefenderMove(action,holder,hasUsefulAttack){
  if(!action||action.kind!=='move'||!action.player||tacticalRole(action.player)!=='defender'||!action.to||!holder)return false;
  if(!fuV984AttackContext(holder)||!hasUsefulAttack||fuV984OwnGoalCounterThreat())return false;
  const actor=action.player,from=action.from||{c:actor.c,r:actor.r},forward=fuV984Forward(action);
  const beforeDistance=cheb(from,holder),afterDistance=cheb(action.to,holder);
  const urgency=fuV983Urgency(fuV983CurrentDiffSafe());
  const anchor=fuV983Anchor(CPU_TEAM,actor,p,ball,fuV983CurrentDiffSafe());
  const targetDepth=fuV983Depth(CPU_TEAM,action.to);
  // Un defensor no debería profundizar en la última línea rival sin una necesidad de remontada clara.
  const overextended=Math.max(0,targetDepth-(anchor.depth+2.0));
  const retreatsAway=forward<0&&afterDistance>beforeDistance&&afterDistance>=4;
  const retreatsFromPlay=forward<=0&&afterDistance>=beforeDistance+2&&afterDistance>=5;
  // Se permite la ruptura defensiva si hay urgencia extrema al final y la jugada está conectada.
  if(urgency>=.86&&forward>0&&afterDistance<=5&&overextended<=2)return false;
  return overextended>=1.0||retreatsAway||retreatsFromPlay;
 }
 function fuV984RoleAdjustment(action,holder,hasUsefulAttack){
  if(!action||!action.player||action.player.t!==CPU_TEAM||!action.to||!fuV984AttackContext(holder))return 0;
  const role=tacticalRole(action.player),forward=fuV984Forward(action);
  if(action.kind==='move'&&role==='defender'&&fuV984BadDefenderMove(action,holder,hasUsefulAttack)){
   const from=action.from||{c:action.player.c,r:action.player.r};
   const anchor=fuV983Anchor(CPU_TEAM,action.player,p,ball,fuV983CurrentDiffSafe());
   const excess=Math.max(0,fuV983Depth(CPU_TEAM,action.to)-(anchor.depth+2));
   const distancePenalty=cheb(action.to,holder)>=5?6:0;
   return -Math.min(42,24+excess*4+distancePenalty+(forward<0?4:0));
  }
  if(action.kind==='move'&&action.mode==='support'&&action.playerId!==holder?.id&&['forward','wide','pivot'].includes(role)){
   const after=cheb(action.to,holder),reach=Math.max(2,Math.min(7,BALL_REACH(holder.n)+1));
   const pressure=nearOpponents(CPU_TEAM,action.to,1);
   if(forward>0&&after>=2&&after<=reach&&pressure<=1){
    const roleBonus=role==='forward'?8:role==='wide'?7:5.5;
    return Math.min(15,roleBonus+Math.min(4,forward*1.2)+(after<=4?2:0));
   }
  }
  return 0;
 }
 tacticalCandidates=function(){
  const actions=fuV984PrevTacticalCandidates();
  const holder=owner();
  if(!fuV984AttackContext(holder))return actions;
  const hasUsefulAttack=actions.some(a=>fuV984UsefulAttackAction(a,holder));
  for(const action of actions){
   const adjustment=fuV984RoleAdjustment(action,holder,hasUsefulAttack);
   action.fuV984RolePriorityAdjustment=adjustment;
   if(adjustment){
    action.score=Math.max(-160,Math.min(420,(Number(action.score)||0)+adjustment));
    if(adjustment<=-18)action.reason=(action.reason||'')+' Prioridad ofensiva v98.4: este movimiento del defensor se aleja de la jugada o rompe la última línea sin amenaza de contraataque.';
    else if(adjustment>=5)action.reason=(action.reason||'')+' Prioridad ofensiva v98.4: ofrece un apoyo adelantado conectado con el poseedor.';
   }
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };
 fuV98PickRoot=function(scored){
  if(!Array.isArray(scored)||scored.length<2)return fuV984PrevPickRoot(scored);
  const holder=owner();
  if(!fuV984AttackContext(holder))return fuV984PrevPickRoot(scored);
  const actions=fuV984PrevTacticalCandidates(),byKey=new Map(actions.map(a=>[sequenceActionKey(a),a]));
  const usefulAvailable=actions.some(a=>fuV984UsefulAttackAction(a,holder));
  if(!usefulAvailable)return fuV984PrevPickRoot(scored);
  const usefulRootAvailable=scored.some(item=>{
   const action=byKey.get(item.key);
   return fuV984UsefulAttackAction(action,holder)&&!fuV984BadDefenderMove(action,holder,true);
  });
  if(!usefulRootAvailable)return fuV984PrevPickRoot(scored);
  const filtered=scored.filter(item=>!fuV984BadDefenderMove(byKey.get(item.key),holder,usefulAvailable));
  // Solo aparta la acción defensiva sin propósito si queda alguna alternativa ofensiva en la búsqueda raíz.
  return fuV984PrevPickRoot(filtered.length?filtered:scored);
 };
 // ==================== FIN FÚTBOL ÚNICO v98.4 · PRIORIDAD DE DECISIONES ====================
`;


// Fútbol Único v98.5 · ataque rápido, coordinado y con intención de gol.
// Ajusta la evaluación de decisiones de la CPU; no añade acciones ni modifica reglas/probabilidades.
const V98_FAST_ATTACK_PATCH = String.raw`
 // ==================== FÚTBOL ÚNICO v98.5 · ATAQUE COORDINADO ====================
 const fuV985PrevTacticalCandidates=tacticalCandidates;
 const fuV985PrevChooseSearchActions=chooseSearchActions;
 const fuV985PrevEvaluateSequencePosition=evaluateSequencePosition;
 const fuV985PrevPickRoot=fuV98PickRoot;
 const fuV985ForwardRoles=new Set([7,8,9,10,11]);
 function fuV985Clamp(v,lo,hi){return Math.max(lo,Math.min(hi,Number.isFinite(v)?v:0));}
 function fuV985ScoreDiff(goalDiff){
  return (Number(score&&score[CPU_TEAM-1])||0)-(Number(score&&score[HUMAN_TEAM-1])||0)
   +(Number(goalDiff&&goalDiff[CPU_TEAM-1])||0)-(Number(goalDiff&&goalDiff[HUMAN_TEAM-1])||0);
 }
 function fuV985AttackContext(holder=owner(),projectedDiff=null){
  if(!holder||holder.t!==CPU_TEAM||holder.n===1)return null;
  const progress=attackingProgress(CPU_TEAM,ball.c);
  const pressure=nearOpponents(CPU_TEAM,holder,1);
  const diff=projectedDiff===null?fuV985ScoreDiff():projectedDiff;
  const total=Math.max(1,Number(MATCH_GAME_ACTIONS)||360);
  const left=Math.max(0,total-(Number(matchClockActions)||0));
  const late=fuV985Clamp((.58-left/total)/.58,0,1);
  const deficit=Math.max(0,-diff);
  const urgency=fuV985Clamp(deficit*.24+late*(deficit===1?.45:deficit>=2?.78:0),0,1);
  // El contraataque se activa desde el medio campo si el poseedor tiene espacio para avanzar.
  const escaped=(progress>=.34&&(pressure<=1||progress>=.50))||(progress>=.27&&deficit>0&&pressure===0);
  if(!escaped)return null;
  return {progress,pressure,diff,left,late,deficit,urgency,intensity:fuV985Clamp(.88+progress*.66+(pressure===0?.16:0)+urgency*.48,.88,1.95)};
 }
 function fuV985ForwardCells(from,to){return (to.c-from.c)*attackDir(CPU_TEAM);}
 function fuV985GoalDistance(cell){return CPU_TEAM===1?(C-1-cell.c):cell.c;}
 function fuV985RoleWeight(n){return n===9||n===11?1.22:n===10?1.18:n===7||n===8?1.12:1;}
 function fuV985RoleRunBonus(action,holder,ctx){
  if(!action||!action.player||action.player.t!==CPU_TEAM||!action.to||!fuV985ForwardRoles.has(action.player.n))return 0;
  const actor=action.player,from=action.from||{c:actor.c,r:actor.r};
  if(action.kind==='move'&&action.mode==='support'&&actor.id!==holder.id){
   const forward=fuV985ForwardCells(from,action.to);
   if(forward<=0)return 0;
   const after=cheb(action.to,holder),reach=Math.max(5,Math.min(9,BALL_REACH(holder.n)+2));
   const ahead=(action.to.c-holder.c)*attackDir(CPU_TEAM);
   if(after>reach||ahead< -2)return 0;
   const pressure=nearOpponents(CPU_TEAM,action.to,1);
   const closeOwn=p.filter(z=>z.t===CPU_TEAM&&z.id!==actor.id&&z.id!==holder.id&&cheb(z,action.to)<=1).length;
   const role=fuV985RoleWeight(actor.n);
   const goalDist=fuV985GoalDistance(action.to);
   let bonus=(10+Math.min(3,forward)*4.7+(ahead>0?4.5:1.2)+(after<=5?2.2:0)+(goalDist<=6?3.2:0))*role;
   if(pressure===0)bonus+=3.0;else if(pressure>=2)bonus-=Math.min(10,(pressure-1)*5.2);
   if(closeOwn>=2)bonus-=Math.min(8,(closeOwn-1)*4.2);
   const base=FORMATION.find(d=>d[0]===CPU_TEAM&&d[1]===actor.n);
   if(base&&[7,8,9,11].includes(actor.n)){
    const shiftedRow=fuV985Clamp(base[3]+(holder.r-5)*.18,0,R-1);
    const rowError=Math.abs(action.to.r-shiftedRow);
    if(rowError<=2)bonus+=2.2;else if(rowError>=4)bonus-=2.5;
   }
   // Premia carreras útiles, no un simple movimiento hacia delante que deja al corredor desconectado.
   return fuV985Clamp(bonus*ctx.intensity,0,45);
  }
  if(actor.id!==holder.id)return 0;
  if(action.kind==='carry'){
   const forward=fuV985ForwardCells(from,action.to);
   if(forward<=0)return 0;
   const pressure=nearOpponents(CPU_TEAM,action.to,1);
   const goalDist=fuV985GoalDistance(action.to);
   let bonus=8+forward*5.5+(goalDist<=5?4:goalDist<=8?2:0);
   if(pressure===0)bonus+=3;else if(pressure>=2)bonus-=Math.min(8,pressure*3);
   return fuV985Clamp(bonus*ctx.intensity,0,30);
  }
  if(action.kind==='pass'&&action.receiver&&fuV985ForwardRoles.has(action.receiver.n)){
   const forward=fuV985ForwardCells(from,action.to);
   const success=actionSuccessEstimate(action);
   if(forward<=0||success<.28)return 0;
   const goalDist=fuV985GoalDistance(action.to);
   let bonus=(6+Math.min(4,forward)*2.8+(goalDist<=5?5:goalDist<=8?2.5:0))*fuV985RoleWeight(action.receiver.n);
   bonus*=.58+success*.62;
   if((action.exposureRisk||0)>16)bonus-=Math.min(7,(action.exposureRisk-16)*.35);
   return fuV985Clamp(bonus*ctx.intensity,0,34);
  }
  if(action.kind==='shoot'){
   const probability=fuV985Clamp(Number(action.goalProbability)||0,0,1);
   const distance=cheb(from,action.to),goalDist=fuV985GoalDistance(from);
   const emergency=ctx.deficit>=1&&ctx.late>.78;
   if(probability<.10&&distance>3&&!emergency)return -10;
   if(probability<.16&&!emergency)return 0;
   const quality=probability>=.42?19:probability>=.30?14:probability>=.20?9:5;
   return fuV985Clamp((quality+(goalDist<=3?4:goalDist<=5?2:0))*ctx.intensity,0,30);
  }
  return 0;
 }
 function fuV985RunnerStateValue(holder,projectedDiff){
  const ctx=fuV985AttackContext(holder,projectedDiff);if(!ctx)return 0;
  const dir=attackDir(CPU_TEAM),reach=Math.max(5,Math.min(9,BALL_REACH(holder.n)+2));
  const runners=[];let value=0;
  for(const z of p){
   if(z.t!==CPU_TEAM||z.id===holder.id||!fuV985ForwardRoles.has(z.n))continue;
   const ahead=(z.c-holder.c)*dir,dist=cheb(z,holder),pressure=nearOpponents(CPU_TEAM,z,1);
   const goalDist=fuV985GoalDistance(z);
   if(ahead>=1&&dist<=reach&&pressure<=1){
    let v=(3.2+Math.min(2,ahead)*1.25+(goalDist<=5?1.6:goalDist<=8?.8:0))*fuV985RoleWeight(z.n);
    if(pressure===0)v+=.8;
    value+=v;runners.push(z);
   }else if(ahead>=-1&&dist>=2&&dist<=5&&pressure===0){
    // Un apoyo de descarga detrás de la pelota también habilita una pared rápida.
    value+=1.25;
   }
  }
  const rows=new Set(runners.map(z=>z.r));
  value+=Math.min(3,Math.max(0,rows.size-1)*.9);
  // La urgencia debe acelerar apoyos y desmarques, no reemplazar una buena ocasión por remates absurdos.
  value*=1+ctx.urgency*.55;
  return Math.min(31,value);
 }
 tacticalCandidates=function(){
  const actions=fuV985PrevTacticalCandidates();
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled)return actions;
  const holder=owner(),ctx=fuV985AttackContext(holder);
  if(!ctx)return actions;
  for(const action of actions){
   const bonus=fuV985RoleRunBonus(action,holder,ctx);
   action.fuV985AttackSurgeBonus=bonus;
   if(bonus!==0){
    action.score=fuV985Clamp((Number(action.score)||0)+bonus,-180,520);
    if(bonus>=9)action.reason=(action.reason||'')+' Ataque coordinado v98.5: carrera o acción vertical conectada con el poseedor.';
    else if(bonus<0)action.reason=(action.reason||'')+' v98.5: se evita un remate de muy baja expectativa sin urgencia suficiente.';
   }
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };
 chooseSearchActions=function(candidates,limit){
  const holder=owner(),ctx=turn===CPU_TEAM?fuV985AttackContext(holder):null;
  if(!ctx||limit<3)return fuV985PrevChooseSearchActions(candidates,limit);
  const sorted=candidates.slice().sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0));
  const chosen=[],players=new Set(),kindCount={};
  const caps={pass:3,shoot:2,carry:2,move:3,duel:2,collect:1};
  // En una transición ofensiva deja que entren más desmarques diferentes en el análisis raíz,
  // evitando que una sola clase de acción monopolice las seis candidatas.
  for(const a of sorted){
   if(chosen.length>=limit)break;
   const kind=a.kind||'other';
   if((kindCount[kind]||0)>=(caps[kind]??1)||players.has(a.playerId))continue;
   chosen.push(a);players.add(a.playerId);kindCount[kind]=(kindCount[kind]||0)+1;
  }
  for(const a of sorted){
   if(chosen.length>=limit)break;
   if(chosen.some(x=>sequenceActionKey(x)===sequenceActionKey(a)))continue;
   const kind=a.kind||'other';if((kindCount[kind]||0)>=(caps[kind]??1))continue;
   chosen.push(a);kindCount[kind]=(kindCount[kind]||0)+1;
  }
  return chosen;
 };
 evaluateSequencePosition=function(rootTeam,goalDiff){
  const value=fuV985PrevEvaluateSequencePosition(rootTeam,goalDiff);
  if(rootTeam!==CPU_TEAM||!fuV98Ai?.enabled)return value;
  const holder=owner();
  if(!holder||holder.t!==CPU_TEAM)return value;
  const projected=fuV985ScoreDiff(goalDiff);
  return value+fuV985RunnerStateValue(holder,projected);
 };
 fuV98PickRoot=function(scored){
  if(!Array.isArray(scored)||scored.length<2)return fuV985PrevPickRoot(scored);
  const holder=owner(),ctx=fuV985AttackContext(holder);
  if(!ctx)return fuV985PrevPickRoot(scored);
  const actions=fuV985PrevTacticalCandidates(),byKey=new Map(actions.map(a=>[sequenceActionKey(a),a]));
  const bestMean=Math.max(...scored.map(x=>Number(x.mean)||-Infinity));
  const offensive=scored.filter(item=>{
   const a=byKey.get(item.key);if(!a)return false;
   const immediate=a.playerId===holder.id&&(['carry','pass'].includes(a.kind)&&fuV985ForwardCells(a.from||{c:holder.c,r:holder.r},a.to)>0||a.kind==='shoot'&&(Number(a.goalProbability)||0)>=.18);
   const run=a.kind==='move'&&a.mode==='support'&&a.playerId!==holder.id&&fuV985ForwardRoles.has(a.player?.n)&&fuV985RoleRunBonus(a,holder,ctx)>=10;
   return immediate||run;
  }).filter(item=>(Number(item.mean)||-Infinity)>=bestMean-18);
  // Si hay una vía ofensiva razonablemente competitiva, se prioriza sobre movimientos inconexos.
  // Nunca se fuerza una ofensiva si todas las opciones pierden claramente más valor.
  return fuV985PrevPickRoot(offensive.length?offensive:scored);
 };
 // ==================== FIN FÚTBOL ÚNICO v98.5 · ATAQUE COORDINADO ====================
`;


// v98.6 · Calibración global de éxito y límite duro del arquero de la CPU.
// Aumenta probabilidades en puntos porcentuales, no multiplicativamente; afecta el motor real y su estimación.
const V98_30_CPU_HANDICAP = String.raw`
 // ==================== FÚTBOL ÚNICO v98.30 · HANDICAP OCULTO DE CPU ====================
 // Handicap exclusivo de torneo, fijado por encuentro. No cambia las reglas ni las faltas.
 const FU_V9830_CPU_HANDICAP_KEY='fu_v98_30_cpu_handicap';
 const FU_V9830_CLUB_BASE_PP={
  // Base 8: clubes de dificultad alta
  'boca-juniors':8,'river-plate':8,'racing-club':8,'independiente':8,'san-lorenzo':8,
  'estudiantes-la-plata':8,'velez':8,'talleres':8,'huracan':8,'rosario-central':8,
  // Base 6: clubes de dificultad intermedia
  'argentinos-juniors':6,'belgrano':6,'defensa-y-justicia':6,'gimnasia-la-plata':6,
  'instituto':6,'lanus':6,'newells-old-boys':6,'platense':6,'tigre':6,'union':6,
  'atletico-tucuman':6,'banfield':6,'independiente-rivadavia':6,'gimnasia-mendoza':6,
  // Base 4: clubes de dificultad accesible
  'aldosivi':4,'barracas-central':4,'central-cordoba':4,'deportivo-riestra':4,
  'estudiantes-rio-cuarto':4,'sarmiento':4
 };
 function fuV9830Clamp(value,min,max){return Math.max(min,Math.min(max,Number(value)||0));}
 function fuV9830SeasonToken(){
  try{const state=JSON.parse(localStorage.getItem('fu_argentina_torneo_v1')||'null');if(state&&state.createdAt)return String(state.createdAt);}catch(_e){}
  return 'temporada-sin-id';
 }
 function fuV9830CreateOrLoadHandicap(){
  if(!tournamentMode||!tournamentOpponent)return {basePP:0,variationPP:0,totalPP:0,clubId:''};
  const clubId=String(tournamentOpponent.id||fuV96TournamentOpponentId||'rival');
  const fixtureId=String(typeof tournamentFixtureId==='string'&&tournamentFixtureId?tournamentFixtureId:'partido-sin-id');
  const key=FU_V9830_CPU_HANDICAP_KEY+'_'+encodeURIComponent(fuV9830SeasonToken())+'_'+encodeURIComponent(fixtureId);
  const basePP=fuV9830Clamp(FU_V9830_CLUB_BASE_PP[clubId]??6,4,8);
  try{
   const saved=JSON.parse(localStorage.getItem(key)||'null');
   if(saved&&saved.version===1&&saved.clubId===clubId&&Number.isInteger(saved.totalPP)&&saved.totalPP>=2&&saved.totalPP<=10){
    return {basePP:saved.basePP,variationPP:saved.variationPP,totalPP:saved.totalPP,clubId};
   }
  }catch(_e){}
  const variationPP=Math.floor(Math.random()*5)-2;
  const totalPP=fuV9830Clamp(basePP+variationPP,2,10);
  const result={version:1,basePP,variationPP,totalPP,clubId};
  try{localStorage.setItem(key,JSON.stringify(result));}catch(_e){}
  return result;
 }
 const fuV9830CpuHandicap=tournamentMode?fuV9830CreateOrLoadHandicap():{basePP:0,variationPP:0,totalPP:0,clubId:''};
 const fuV9830PreviousAccuracyPercent=fuV96AccuracyPercent;
 fuV96AccuracyPercent=function(kind,player,from,to){
  const base=Number(fuV9830PreviousAccuracyPercent(kind,player,from,to));
  if(!Number.isFinite(base))return 0;
  if(!tournamentMode||!player||player.t!==CPU_TEAM||!['pass','shoot'].includes(kind))return base;
  return fuV9830Clamp(base+fuV9830CpuHandicap.totalPP,0,100);
 };
 // No se expone el valor sorteado en pantalla ni en los avisos del partido.
 // ==================== FIN HANDICAP OCULTO v98.30 ====================
`;

const V98_6_SUCCESS_CALIBRATION = String.raw`
 // ==================== FÚTBOL ÚNICO v98.6 · CALIBRACIÓN DE ÉXITO ====================
 const FU_V986_GLOBAL_SUCCESS_BONUS_PP=10;
 const FU_V986_CPU_PASS_BONUS_PP=0;
 const FU_V986_CPU_CONVERSION_BONUS_PP=0;
 const FU_V986_KEEPER_MAX_DISTANCE=3;
 function fuV986Clamp(value,min,max){return Math.max(min,Math.min(max,Number.isFinite(Number(value))?Number(value):0));}
 // Las faltas son resultados negativos de la disputa: reducirlas 10 pp aumenta en igual medida
 // la posibilidad de una recuperación limpia, sin cambiar las reglas de ejecución.
 function fuV986AdjustedFoulChance(type){
  const base=type==='atras'?.60:type==='costado'?.30:0;
  return fuV986Clamp(base-(base>0?FU_V986_GLOBAL_SUCCESS_BONUS_PP/100:0),0,1);
 }
 const fuV986PreviousAccuracyPercent=fuV96AccuracyPercent;
 fuV96AccuracyPercent=function(kind,player,from,to){
  const base=Number(fuV986PreviousAccuracyPercent(kind,player,from,to));
  if(!Number.isFinite(base)||base<=0)return Number.isFinite(base)?base:0;
  const cpuPassBonus=kind==='pass'&&player&&player.t===CPU_TEAM?FU_V986_CPU_PASS_BONUS_PP:0;
  return fuV986Clamp(base+FU_V986_GLOBAL_SUCCESS_BONUS_PP+cpuPassBonus,0,100);
 };
 // Una atajada también es una acción exitosa: +10 pp para ambos arqueros.
 // La ventaja fija de conversión CPU se desactiva en v98.30: el handicap aleatorio actúa
 // sobre la precisión de pases y remates, y la estimación de gol reutiliza esa precisión ajustada.
 const fuV986PreviousKeeperSaveChance=fuV96KeeperSaveChance;
 fuV96KeeperSaveChance=function(shooter,from,to,playersState=p){
  const base=fuV986Clamp(fuV986PreviousKeeperSaveChance(shooter,from,to,playersState),0,1);
  const cpuConversionBonus=shooter&&shooter.t===CPU_TEAM?FU_V986_CPU_CONVERSION_BONUS_PP/100:0;
  return fuV986Clamp(base+FU_V986_GLOBAL_SUCCESS_BONUS_PP/100-cpuConversionBonus,0,.98);
 };
 // +10 pp para la probabilidad de una intercepción ejecutable. Los bloqueos seguros no cambian.
 function fuV986BaseInterceptionChance(interceptor){
  const base=interceptor&&[2,6].includes(interceptor.n)?.75:interceptor&&interceptor.n===5?.65:.5;
  return fuV986Clamp(base+FU_V986_GLOBAL_SUCCESS_BONUS_PP/100,0,1);
 }
 function fuV986AdjustedInterceptionResult(result){
  if(!result||result.blocked||!result.first||!(Number(result.risk)>0))return result;
  return {...result,risk:fuV986Clamp(Number(result.risk)+FU_V986_GLOBAL_SUCCESS_BONUS_PP/100,0,1)};
 }
 const fuV986PreviousTrajectoryInterceptionRisk=trajectoryInterceptionRisk;
 trajectoryInterceptionRisk=function(from,to,team,playersState=p){
  return fuV986AdjustedInterceptionResult(fuV986PreviousTrajectoryInterceptionRisk(from,to,team,playersState));
 };
 // Límite duro y final: la CPU no puede elegir move/carry que saque al arquero
 // del radio de tres casilleros desde el centro de su propio arco. Si ya está fuera,
 // solo se permiten movimientos que reduzcan la distancia, para poder regresar.
 const fuV986PreviousTacticalCandidates=tacticalCandidates;
 function fuV986KeeperDistance(team,cell){
  if(typeof fuV982GoalDistance==='function')return fuV982GoalDistance(team,cell);
  return cheb(cell,{c:team===1?0:C-1,r:Math.floor((R-1)/2)});
 }
 function fuV986IsKeeperMove(action,keeper){
  return !!(action&&keeper&&action.playerId===keeper.id&&action.player&&action.player.n===1&&action.player.t===CPU_TEAM&&action.to&&['move','carry'].includes(action.kind));
 }
 function fuV986KeeperMoveAllowed(team,from,to){
  const current=fuV986KeeperDistance(team,from),next=fuV986KeeperDistance(team,to);
  return current>FU_V986_KEEPER_MAX_DISTANCE?next<current:next<=FU_V986_KEEPER_MAX_DISTANCE;
 }
 tacticalCandidates=function(){
  const actions=fuV986PreviousTacticalCandidates();
  if(turn!==CPU_TEAM)return actions;
  const keeper=p.find(z=>z.t===CPU_TEAM&&z.n===1);
  if(!keeper)return actions;
  const current=fuV986KeeperDistance(CPU_TEAM,keeper);
  return actions.filter(action=>{
   if(!fuV986IsKeeperMove(action,keeper))return true;
   return fuV986KeeperMoveAllowed(CPU_TEAM,keeper,action.to);
  });
 };
 // Si por una posición previa/importada ya está fuera, la primera acción disponible debe acercarlo al arco.
 const fuV986PreviousChooseCpuMove=chooseCpuMove;
 chooseCpuMove=async function(token){
  if(token!==cpuEpoch||!cpuAutoEnabled)return null;
  if(turn===CPU_TEAM){
   const keeper=p.find(z=>z.t===CPU_TEAM&&z.n===1);
   const distance=keeper?fuV986KeeperDistance(CPU_TEAM,keeper):0;
   const alreadyPlayed=keeper&&(playedThisTurn.includes(keeper.id)||(actionNo>1&&keeper.id===lastPlayedId));
   if(keeper&&distance>FU_V986_KEEPER_MAX_DISTANCE&&!alreadyPlayed){
    const returnActions=tacticalCandidates().filter(a=>fuV986IsKeeperMove(a,keeper)&&fuV986KeeperDistance(CPU_TEAM,a.to)<distance);
    if(returnActions.length){
     returnActions.sort((a,b)=>fuV986KeeperDistance(CPU_TEAM,a.to)-fuV986KeeperDistance(CPU_TEAM,b.to)||(Number(b.score)||0)-(Number(a.score)||0));
     return returnActions[0];
    }
   }
  }
  return fuV986PreviousChooseCpuMove(token);
 };
 window.FUTBOL_UNICO_V986={
  version:'98.6',globalSuccessBonusPP:FU_V986_GLOBAL_SUCCESS_BONUS_PP,
  cpuPassBonusPP:FU_V986_CPU_PASS_BONUS_PP,cpuConversionBonusPP:FU_V986_CPU_CONVERSION_BONUS_PP,
  keeperMaxDistance:FU_V986_KEEPER_MAX_DISTANCE,adjustedFoulChance:fuV986AdjustedFoulChance,
  accuracy:(kind,player,from,to)=>fuV96AccuracyPercent(kind,player,from,to),
  saveChance:(shooter,from,to,state)=>fuV96KeeperSaveChance(shooter,from,to,state),
  interceptionChance:(from,to,team,state)=>trajectoryInterceptionRisk(from,to,team,state)?.risk??0,
  adjustedInterceptionResult:fuV986AdjustedInterceptionResult,
  baseInterceptionChance:fuV986BaseInterceptionChance,
  keeperMoveAllowed:fuV986KeeperMoveAllowed
 };
 // ================== FIN FÚTBOL ÚNICO v98.6 ==================
`;
// v98.12 · Restricción absoluta de ambos arqueros a las tres casillas lógicas del arco.
// No dibuja puntos ni altera el arco: limita las posiciones reales y los reinicios.
const V98_12_GOALKEEPER_LOCK = String.raw`
 // ==================== FÚTBOL ÚNICO v98.12 · ARQUEROS FIJOS EN SU ARCO ====================
 function fuV9812IsGoalkeeperCell(team,c,r){
  const ownGoalColumn=team===1?0:C-1;
  return Number.isInteger(c)&&Number.isInteger(r)&&c===ownGoalColumn&&r>=4&&r<=6;
 }
 function fuV9812ActionMovesPlayer(action,player){
  return !!(action&&player&&player.n===1&&action.playerId===player.id&&action.to&&!['pass','shoot'].includes(action.kind));
 }
 const fuV9812PreviousPLegal=pLegal;
 pLegal=function(c,r,x){
  if(x&&x.n===1&&!fuV9812IsGoalkeeperCell(x.t,c,r))return false;
  return fuV9812PreviousPLegal(c,r,x);
 };
 const fuV9812PreviousMovePlayer=movePlayer;
 movePlayer=function(c,r){
  const x=p.find(z=>z.id===selected);
  if(x&&x.n===1&&!fuV9812IsGoalkeeperCell(x.t,c,r)){
   say('El arquero debe permanecer en una de las tres casillas de su arco.');
   return;
  }
  return fuV9812PreviousMovePlayer(c,r);
 };
 const fuV9812PreviousTacticalCandidates=tacticalCandidates;
 tacticalCandidates=function(){
  return fuV9812PreviousTacticalCandidates().filter(action=>{
   const player=action&&action.player||p.find(z=>z.id===action?.playerId);
   if(!player||player.n!==1||!action?.to||['pass','shoot'].includes(action.kind))return true;
   return fuV9812IsGoalkeeperCell(player.t,action.to.c,action.to.r);
  });
 };
 const fuV9812PreviousDispatchCpuAction=dispatchCpuAction;
 dispatchCpuAction=function(action){
  const player=action&&p.find(z=>z.id===action.playerId);
  if(fuV9812ActionMovesPlayer(action,player)&&!fuV9812IsGoalkeeperCell(player.t,action.to.c,action.to.r)){
   cpuLastActionLabel='Movimiento del arquero rechazado: debe permanecer en su arco.';
   return false;
  }
  return fuV9812PreviousDispatchCpuAction(action);
 };
 const fuV9812PreviousSimulateOneAction=simulateOneAction;
 simulateOneAction=function(action,goals){
  const player=action&&p.find(z=>z.id===action.playerId);
  if(fuV9812ActionMovesPlayer(action,player)&&!fuV9812IsGoalkeeperCell(player.t,action.to.c,action.to.r))return 'blocked';
  return fuV9812PreviousSimulateOneAction(action,goals);
 };
 window.FUTBOL_UNICO_V9812={
  version:'98.12',
  goalkeeperCellAllowed:fuV9812IsGoalkeeperCell,
  allowedCellsForTeam:team=>{const c=team===1?0:C-1;return [4,5,6].map(r=>({c,r}));}
 };
 // ================== FIN FÚTBOL ÚNICO v98.12 · ARQUEROS FIJOS EN SU ARCO ==================
`;

// v98.17 · Perfil permanente de IA: ataque vertical, remate y recuperación agresiva.
// Solo modifica la valoración/selección de acciones legales y la función de utilidad de la CPU.
const V98_AGGRESSIVE_AI_PATCH = String.raw`
 // ==================== FÚTBOL ÚNICO v98.17 · IA EXPLOSIVA ====================
 const fuV9817PrevTacticalCandidates=tacticalCandidates;
 const fuV9817PrevChooseSearchActions=chooseSearchActions;
 const fuV9817PrevEvaluateSequencePosition=evaluateSequencePosition;
 const fuV9817PrevPickRoot=fuV98PickRoot;
 const FU_V9817_VERSION='98.17';
 const FU_V9817_FORWARD_ROLES=new Set([7,8,9,10,11]);
 function fuV9817Clamp(value,min,max){return Math.max(min,Math.min(max,Number.isFinite(Number(value))?Number(value):0));}
 function fuV9817Player(action){return action&&(action.player||p.find(z=>z.id===(action.playerId??action.player?.id)))||null;}
 function fuV9817Forward(from,to){return from&&to?(Number(to.c)-Number(from.c))*attackDir(CPU_TEAM):0;}
 function fuV9817GoalDistance(cell){return CPU_TEAM===1?C-1-cell.c:cell.c;}
 function fuV9817Depth(cell){return CPU_TEAM===1?cell.c:C-1-cell.c;}
 function fuV9817DistanceRank(team,target,id){
  const xs=p.filter(z=>z.t===team&&z.n!==1).slice().sort((a,b)=>cheb(a,target)-cheb(b,target)||a.n-b.n);
  const index=xs.findIndex(z=>z.id===id);return index<0?99:index;
 }
 function fuV9817ShotBias(probability,from,projectedDiff){
  const pGoal=fuV9817Clamp(probability,0,1),goalDistance=from?fuV9817GoalDistance(from):99;
  let bonus=pGoal>=.40?46:pGoal>=.30?41:pGoal>=.22?34:pGoal>=.16?27:pGoal>=.11?18:pGoal>=.075?8:0;
  if(goalDistance<=4&&pGoal>=.11)bonus+=6;
  else if(goalDistance<=7&&pGoal>=.16)bonus+=3;
  const diff=Number.isFinite(projectedDiff)?projectedDiff:(Number(score&&score[CPU_TEAM-1])||0)-(Number(score&&score[HUMAN_TEAM-1])||0);
  const total=Math.max(1,Number(MATCH_GAME_ACTIONS)||360),left=Math.max(0,total-(Number(matchClockActions)||0));
  if(diff<0&&left/total<.28&&pGoal>=.075)bonus+=8;
  return bonus;
 }
 function fuV9817ActionBias(action,holder){
  if(!action||!action.to)return 0;
  const actor=fuV9817Player(action);if(!actor||actor.t!==CPU_TEAM)return 0;
  const from=action.from||{c:actor.c,r:actor.r};
  const forward=fuV9817Forward(from,action.to);
  const goalDistance=fuV9817GoalDistance(from);
  if(holder&&holder.t===CPU_TEAM){
   if(action.kind==='shoot'&&action.playerId===holder.id){
    return fuV9817ShotBias(action.goalProbability,from,null);
   }
   if(action.kind==='carry'&&action.playerId===holder.id){
    if(forward>0)return 11+Math.min(3,forward)*9+(goalDistance<=6?5:goalDistance<=9?2:0)+(nearOpponents(CPU_TEAM,action.to,1)===0?3:0);
    if(forward<0)return -17;
    // Un avance lateral solo recibe una ayuda leve si libera presión inmediata.
    return nearOpponents(CPU_TEAM,action.to,1)<nearOpponents(CPU_TEAM,from,1)?4:-3;
   }
   if(action.kind==='pass'&&action.playerId===holder.id){
    const success=actionSuccessEstimate(action);
    if(action.receiver&&forward>0){
     let bonus=(7+Math.min(4,forward)*4.2+Math.max(0,8-goalDistance)*1.3)*(0.42+success*.58);
     if(FU_V9817_FORWARD_ROLES.has(action.receiver.n))bonus+=4.5;
     if(goalDistance<=5)bonus+=3.5;
     if((action.exposureRisk||0)>=12)bonus-=Math.min(7,(action.exposureRisk-12)*.35);
     return bonus;
    }
    if(action.receiver&&forward<0)return -Math.min(13,6+Math.abs(forward)*2.5)+(success>.8?2:0);
    if(!action.receiver&&forward>0)return Math.max(0,3+Math.min(3,forward)*2)*(0.5+success*.5);
    return 0;
   }
   if(action.kind==='move'&&action.playerId!==holder.id){
    const distanceAfter=cheb(action.to,holder),reach=Math.max(3,Math.min(11,(Number(BALL_REACH(holder.n))||8)+1));
    const ahead=fuV9817Forward({c:holder.c,r:holder.r},action.to);
    const roleRunner=FU_V9817_FORWARD_ROLES.has(actor.n);
    let bonus=forward>0?4+Math.min(4,forward)*5.2:forward<0?-10:0;
    if(distanceAfter>=2&&distanceAfter<=reach)bonus+=7;
    if(ahead>0&&distanceAfter>=2&&distanceAfter<=reach)bonus+=5;
    if(roleRunner&&ahead>0)bonus+=5;
    if(nearOpponents(CPU_TEAM,action.to,1)===0)bonus+=2;
    else if(nearOpponents(CPU_TEAM,action.to,1)>=2)bonus-=4;
    // No premiar que un compañero se acerque al poseedor hasta ocupar su misma casilla o amontonarse.
    if(distanceAfter<=1)bonus-=5;
    return fuV9817Clamp(bonus,-18,34);
   }
   return 0;
  }
  if(holder&&holder.t!==CPU_TEAM){
   if(action.kind==='duel'){
    if(action.duelOutcome==='frente')return 25;
    if(action.duelOutcome==='costado')return 16;
    return -5;
   }
   if(action.kind==='move'&&action.mode==='defense'){
    const before=cheb(actor,holder),after=cheb(action.to,holder),gain=before-after;
    const rank=fuV9817DistanceRank(CPU_TEAM,holder,actor.id);
    const threatGain=Number(action.threatReduction)||0;
    const shapeGain=Number(action.defensiveShapeAdjustment)||0;
    let bonus=0;
    if(gain>0){
     bonus+=gain*(rank===0?12:rank===1?9:rank===2?5.5:2.0);
     if(after<=1)bonus+=rank<=1?12:6;
     else if(after===2)bonus+=rank<=2?6:2;
    }else if(gain<0&&threatGain<.025&&shapeGain<=0){
     bonus-=12+Math.min(5,Math.abs(gain)*2);
    }
    if(threatGain>0)bonus+=Math.min(15,threatGain*65);
    if(shapeGain>0)bonus+=Math.min(5,shapeGain*.18);
    // Si un movimiento empeora a la vez la presión y la cobertura, es claramente improductivo.
    if(gain<=0&&threatGain<=0&&shapeGain<0)bonus-=7;
    return fuV9817Clamp(bonus,-28,28);
   }
   return 0;
  }
  // Pelota suelta: primero las piezas con opciones reales de alcanzarla; no se persigue con los once.
  if(!holder){
   if(action.kind==='collect')return 78;
   if(action.kind==='move'&&action.mode==='recovery'){
    const before=cheb(actor,ball),after=cheb(action.to,ball),gain=before-after;
    const rank=fuV9817DistanceRank(CPU_TEAM,ball,actor.id);
    if(gain>0)return gain*(rank===0?9:rank===1?7:rank===2?4.5:1.5)+(rank===0?12:rank===1?8:rank===2?4:0);
    if(gain<0)return -13;
    return 0;
   }
  }
  return 0;
 }
 tacticalCandidates=function(){
  const actions=fuV9817PrevTacticalCandidates();
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled)return actions;
  const holder=owner();
  for(const action of actions){
   const bonus=fuV9817ActionBias(action,holder);
   action.fuV9817AggressiveBias=bonus;
   if(bonus){
    action.score=fuV9817Clamp((Number(action.score)||0)+bonus,-220,650);
    if(bonus>=12)action.reason=(action.reason||'')+' IA explosiva v98.17: prioriza avance vertical, remate o recuperación de balón.';
    else if(bonus<=-12)action.reason=(action.reason||'')+' IA explosiva v98.17: penaliza una acción que retrocede o se aleja del balón sin ventaja defensiva.';
   }
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };
 function fuV9817UniquePush(out,action,limit){
  if(!action||out.length>=limit)return;
  const key=sequenceActionKey(action);if(out.some(z=>sequenceActionKey(z)===key))return;
  out.push(action);
 }
 function fuV9817PriorityActions(candidates,limit,holder){
  const sorted=candidates.slice().sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0));
  const out=[];
  if(holder&&holder.t===CPU_TEAM){
   const shots=sorted.filter(a=>a.kind==='shoot'&&a.playerId===holder.id&&(Number(a.goalProbability)||0)>=.11)
    .sort((a,b)=>(Number(b.goalProbability)||0)-(Number(a.goalProbability)||0));
   if(shots.length)fuV9817UniquePush(out,shots[0],limit);
   if(limit>=5&&shots.length>1&&(Number(shots[1].goalProbability)||0)>=.22)fuV9817UniquePush(out,shots[1],limit);
   const carry=sorted.find(a=>a.kind==='carry'&&a.playerId===holder.id&&fuV9817Forward(a.from||holder,a.to)>0);
   fuV9817UniquePush(out,carry,limit);
   const pass=sorted.find(a=>a.kind==='pass'&&a.playerId===holder.id&&a.receiver&&fuV9817Forward(a.from||holder,a.to)>0&&actionSuccessEstimate(a)>=.30);
   fuV9817UniquePush(out,pass,limit);
   const support=sorted.find(a=>a.kind==='move'&&a.mode==='support'&&a.playerId!==holder.id&&fuV9817Forward(a.from||a.player,a.to)>0&&cheb(a.to,holder)>=2);
   fuV9817UniquePush(out,support,limit);
  }else if(holder&&holder.t!==CPU_TEAM){
   const duel=sorted.find(a=>a.kind==='duel'&&a.duelOutcome!=='atras');
   fuV9817UniquePush(out,duel,limit);
   const pressure=sorted.filter(a=>a.kind==='move'&&a.mode==='defense')
    .filter(a=>{const actor=fuV9817Player(a);return actor&&cheb(a.to,holder)<cheb(actor,holder);})
    .sort((a,b)=>((Number(b.fuV9817AggressiveBias)||0)-(Number(a.fuV9817AggressiveBias)||0))||(Number(b.score)||0)-(Number(a.score)||0));
   if(pressure.length)fuV9817UniquePush(out,pressure[0],limit);
   if(limit>=4&&pressure.length>1)fuV9817UniquePush(out,pressure[1],limit);
   const cover=sorted.find(a=>a.kind==='move'&&a.mode==='defense'&&(Number(a.threatReduction)||0)>.04);
   fuV9817UniquePush(out,cover,limit);
  }else{
   const collect=sorted.find(a=>a.kind==='collect');
   fuV9817UniquePush(out,collect,limit);
   const approach=sorted.find(a=>a.kind==='move'&&a.mode==='recovery'&&cheb(a.to,ball)<cheb(a.from||a.player,ball));
   fuV9817UniquePush(out,approach,limit);
   if(limit>=5){const secondCollect=sorted.find(a=>a.kind==='collect'&&!out.some(z=>z.playerId===a.playerId));fuV9817UniquePush(out,secondCollect,limit);}
  }
  for(const action of sorted)fuV9817UniquePush(out,action,limit);
  return out;
 }
 chooseSearchActions=function(candidates,limit){
  const selected=fuV9817PrevChooseSearchActions(candidates,limit);
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled||!Array.isArray(candidates)||limit<=0)return selected;
  return fuV9817PriorityActions(candidates,limit,owner());
 };
 evaluateSequencePosition=function(rootTeam,goalDiff){
  let value=fuV9817PrevEvaluateSequencePosition(rootTeam,goalDiff);
  if(rootTeam!==CPU_TEAM||!fuV98Ai?.enabled)return value;
  const holder=owner();
  if(holder&&holder.t===CPU_TEAM){
   // Cada casillero ganado por cualquier jugador de campo tiene valor ofensivo real:
   // evita que la IA prefiera quedarse quieta por conservar una forma perfecta.
   const outfield=p.filter(z=>z.t===CPU_TEAM&&z.n!==1);
   value+=outfield.reduce((sum,z)=>sum+fuV9817Depth(z)*2.15,0);
   const threat=estimateAttackingThreat(p,holder.id);
   value+=Math.max(0,Number(threat?.direct)||0)*55;
   let runners=0;
   for(const z of outfield){
    if(runners>=4||z.id===holder.id||!FU_V9817_FORWARD_ROLES.has(z.n))continue;
    const ahead=fuV9817Forward({c:holder.c,r:holder.r},z),distance=cheb(z,holder);
    if(ahead>=1&&distance>=2&&distance<=Math.max(3,Math.min(11,(Number(BALL_REACH(holder.n))||8)+1))&&nearOpponents(CPU_TEAM,z,1)<=1){value+=2.2;runners++;}
   }
  }else if(holder&&holder.t!==CPU_TEAM){
   const distances=p.filter(z=>z.t===CPU_TEAM&&z.n!==1).map(z=>cheb(z,holder)).sort((a,b)=>a-b);
   if(distances.length)value+=Math.max(0,5-distances[0])*4.2;
   if(distances.length>1)value+=Math.max(0,4-distances[1])*2.1;
   if(distances.length>2)value+=Math.max(0,3-distances[2])*1.0;
  }else{
   const ownDistance=Math.min(...p.filter(z=>z.t===CPU_TEAM&&z.n!==1).map(z=>cheb(z,ball)));
   const rivalDistance=Math.min(...p.filter(z=>z.t===HUMAN_TEAM&&z.n!==1).map(z=>cheb(z,ball)));
   value+=Math.max(0,6-ownDistance)*2.4-Math.max(0,6-rivalDistance)*1.2;
  }
  return value;
 };
 function fuV9817RootBias(action,holder){
  if(!action||!action.to)return 0;
  const actor=fuV9817Player(action);if(!actor||actor.t!==CPU_TEAM)return 0;
  const from=action.from||{c:actor.c,r:actor.r},forward=fuV9817Forward(from,action.to);
  if(holder&&holder.t===CPU_TEAM){
   if(action.kind==='shoot'&&action.playerId===holder.id)return fuV9817ShotBias(action.goalProbability,from,null);
   if(action.kind==='carry'&&action.playerId===holder.id)return forward>0?12+Math.min(2,forward)*7+(fuV9817GoalDistance(from)<=6?4:0):forward<0?-12:0;
   if(action.kind==='pass'&&action.playerId===holder.id){
    const success=actionSuccessEstimate(action);
    if(action.receiver&&forward>0)return (7+Math.min(4,forward)*3.5+(FU_V9817_FORWARD_ROLES.has(action.receiver.n)?4:0))*(.45+success*.55);
    if(action.receiver&&forward<0)return -7;
   }
   if(action.kind==='move'&&action.playerId!==holder.id&&forward>0){
    const after=cheb(action.to,holder),reach=Math.max(3,Math.min(11,(Number(BALL_REACH(holder.n))||8)+1));
    return 5+Math.min(3,forward)*4+(after>=2&&after<=reach?8:0)+(FU_V9817_FORWARD_ROLES.has(actor.n)?4:0);
   }
   return 0;
  }
  if(holder&&holder.t!==CPU_TEAM){
   if(action.kind==='duel')return action.duelOutcome==='frente'?24:action.duelOutcome==='costado'?15:0;
   if(action.kind==='move'&&action.mode==='defense'){
    const gain=cheb(actor,holder)-cheb(action.to,holder),rank=fuV9817DistanceRank(CPU_TEAM,holder,actor.id);
    const threatGain=Number(action.threatReduction)||0;
    return Math.max(-10,gain)*(rank===0?9:rank===1?7:rank===2?4:1)+Math.min(13,Math.max(0,threatGain)*55)+(cheb(action.to,holder)<=1?7:0);
   }
   return 0;
  }
  if(action.kind==='collect')return 26;
  if(action.kind==='move'&&action.mode==='recovery'){
   const gain=cheb(actor,ball)-cheb(action.to,ball),rank=fuV9817DistanceRank(CPU_TEAM,ball,actor.id);
   return gain>0?gain*(rank===0?8:rank===1?6:rank===2?3:1)+(rank===0?9:rank===1?6:0):gain<0?-10:0;
  }
  return 0;
 }
 fuV98PickRoot=function(scored){
  const fallback=fuV9817PrevPickRoot(scored);
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled||!Array.isArray(scored)||!scored.length)return fallback;
  const holder=owner(),current=tacticalCandidates(),byKey=new Map(current.map(a=>[sequenceActionKey(a),a]));
  const valid=scored.filter(item=>byKey.has(item.key)&&Number.isFinite(Number(item.mean)));
  if(!valid.length)return fallback;
  const bestRaw=Math.max(...valid.map(item=>Number(item.mean)));
  let best=null,bestAdjusted=-Infinity;
  for(const item of valid){
   const action=byKey.get(item.key),bias=fuV9817RootBias(action,holder),mean=Number(item.mean);
   // No sacrificar una oportunidad netamente mejor: el perfil solo corrige decisiones cercanas.
   if(mean<bestRaw-Math.max(18,bias+8))continue;
   const adjusted=mean+bias;
   if(adjusted>bestAdjusted||(adjusted===bestAdjusted&&mean>(Number(best?.mean)||-Infinity))){best=item;bestAdjusted=adjusted;}
  }
  return best?best.key:fallback;
 };
 window.FUTBOL_UNICO_V9817={
  version:FU_V9817_VERSION,
  style:'explosive-vertical',
  priorities:['recuperar balón','rematar con probabilidad útil','avanzar hacia el arco','presionar sin movimientos inútiles'],
  actionBias:fuV9817ActionBias,
  rootBias:fuV9817RootBias
 };
 // ==================== FIN FÚTBOL ÚNICO v98.17 · IA EXPLOSIVA ====================
`;


// v98.18 · Mentalidad contextual A/B/C según resultado y minuto.
// Sólo cambia la valoración táctica de acciones ya legales; no modifica reglas ni probabilidades del motor.
const V98_MENTALITY_PATCH = String.raw`
 // ==================== FÚTBOL ÚNICO v98.18 · MENTALIDAD CONTEXTUAL ====================
 const fuV9818PrevTacticalCandidates=tacticalCandidates;
 const fuV9818PrevPickRoot=fuV98PickRoot;
 const FU_V9818_VERSION='98.18';
 function fuV9818Mentality(){
  const cpu=Number(score&&score[CPU_TEAM-1])||0, rival=Number(score&&score[HUMAN_TEAM-1])||0;
  const diff=cpu-rival;
  if(diff>0)return {id:'A',reason:'ganando'};
  if(diff<0)return {id:'C',reason:'perdiendo'};
  const total=Math.max(1,Number(MATCH_GAME_ACTIONS)||360);
  const minute=Math.max(0,Math.min(90,(Number(matchClockActions)||0)/total*90));
  if(minute<=15||minute>=85)return {id:'C',reason:minute<=15?'empate-primeros-15':'empate-ultimos-5'};
  return {id:'B',reason:'empate-tramo-medio'};
 }
 function fuV9818Forward(from,to){return from&&to?(Number(to.c)-Number(from.c))*attackDir(CPU_TEAM):0;}
 function fuV9818Risk(action){
  const explicit=Number(action&&action.exposureRisk);
  const intercept=Number(action&&action.interceptRisk);
  const success=typeof actionSuccessEstimate==='function'?Number(actionSuccessEstimate(action)):NaN;
  let risk=Number.isFinite(explicit)?Math.max(0,explicit):Number.isFinite(intercept)?intercept*100:Number.isFinite(success)?(1-success)*30:0;
  if(action&&action.receiver&&fuV9818Forward(action.from||action.player,action.to)<0)risk+=4;
  return Math.max(0,Math.min(40,risk));
 }
 function fuV9818Bias(action,holder,mentality){
  if(!action||!action.to)return 0;
  const actor=action.player||p.find(z=>z.id===(action.playerId??action.player?.id));
  if(!actor||actor.t!==CPU_TEAM)return 0;
  const id=mentality.id, from=action.from||{c:actor.c,r:actor.r}, forward=fuV9818Forward(from,action.to);
  const risk=fuV9818Risk(action), threat=Math.max(0,Number(action.threatReduction)||0);
  const cover=Math.max(0,Number(action.defensiveShapeAdjustment)||0);
  let b=0;
  if(holder&&holder.t===CPU_TEAM){
   if(action.kind==='shoot'&&action.playerId===holder.id){
    const pg=Math.max(0,Math.min(1,Number(action.goalProbability)||0));
    if(id==='A')b+=pg>=.22?3:pg>=.11?1:0;
    else if(id==='B')b+=pg>=.22?5:pg>=.11?3:0;
    else b+=pg>=.30?12:pg>=.16?9:pg>=.075?5:0;
   }else if(action.kind==='pass'&&action.playerId===holder.id){
    if(forward>0){b+=id==='C'?Math.min(10,2+forward*2.2):id==='B'?Math.min(6,1+forward*1.3):Math.min(3,forward*.7);}
    if(risk>12)b-=id==='A'?Math.min(13,(risk-12)*.8):id==='B'?Math.min(6,(risk-12)*.35):-Math.min(2,(risk-12)*.1);
    if(action.receiver&&Number(action.receiver.n)>=7&&forward>0)b+=id==='C'?3:id==='B'?2:1;
   }else if(action.kind==='carry'&&action.playerId===holder.id){
    if(forward>0)b+=id==='C'?Math.min(12,3+forward*2.5):id==='B'?Math.min(7,2+forward*1.4):Math.min(4,forward*.8);
    else if(forward<0)b-=id==='A'?5:id==='B'?3:0;
   }else if(action.kind==='move'&&action.playerId!==holder.id&&(action.mode==='support'||action.mode==='attack')){
    if(forward>0)b+=id==='C'?Math.min(9,2+forward*1.8):id==='B'?Math.min(6,1+forward*1.2):Math.min(3,forward*.6);
   }
   // No se castiga una ocasión clara por la mentalidad defensiva.
  }else if(holder&&holder.t!==CPU_TEAM){
   if(action.kind==='duel'){
    if(action.duelOutcome==='frente')b+=id==='C'?7:id==='B'?4:2;
    else if(action.duelOutcome==='costado')b+=id==='C'?4:id==='B'?2:1;
   }
   if(action.kind==='move'&&action.mode==='defense'){
    const before=Math.max(Math.abs(actor.c-holder.c),Math.abs(actor.r-holder.r));
    const after=Math.max(Math.abs(action.to.c-holder.c),Math.abs(action.to.r-holder.r));
    const gain=before-after;
    if(id==='C'&&gain>0)b+=Math.min(8,gain*2.2);
    if(id==='A'&&threat<=0&&cover<=0&&gain<0)b-=Math.min(7,2+Math.abs(gain)*1.8);
    if(id==='B'&&gain>0)b+=Math.min(4,gain*1.2);
    // La amenaza inmediata prevalece sobre el impulso de presionar o replegarse.
    if(threat>0)b+=Math.min(12,threat*55);
    if(cover>0)b+=Math.min(3,cover*.12);
   }
  }else if(!holder){
   if(action.kind==='collect')b+=id==='C'?5:id==='B'?4:3;
   if(action.kind==='move'&&action.mode==='recovery'){
    const before=Math.max(Math.abs(actor.c-ball.c),Math.abs(actor.r-ball.r));
    const after=Math.max(Math.abs(action.to.c-ball.c),Math.abs(action.to.r-ball.r));
    if(after<before)b+=id==='C'?4:id==='B'?3:2;
   }
  }
  // La urgencia nunca debe convertir una acción claramente inviable en la preferida.
  return Math.max(-18,Math.min(20,b));
 }
 tacticalCandidates=function(){
  const actions=fuV9818PrevTacticalCandidates();
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled)return actions;
  const holder=owner(),mentality=fuV9818Mentality();
  const aggressiveFactor=mentality.id==='A'?.35:mentality.id==='B'?.72:1;
  for(const action of actions){
   const oldAggressive=Number(action.fuV9817AggressiveBias)||0;
   const bias=fuV9818Bias(action,holder,mentality);
   action.fuV9818Mentality=mentality.id;
   action.fuV9818MentalityBias=bias;
   // Reduce the permanent explosive profile while protecting a lead; retain it in balance and full when chasing.
   action.score=Math.max(-240,Math.min(700,(Number(action.score)||0)+(aggressiveFactor-1)*oldAggressive+bias));
  }
  return actions.sort((a,b)=>(Number(b.score)||0)-(Number(a.score)||0)||String(sequenceActionKey(a)).localeCompare(String(sequenceActionKey(b))));
 };
 // v98.19 · Regla dura de finalización: toda ocasión legal con 20% o más se remata.
 // Se compara goalProbability, el mismo valor porcentual que muestra la interfaz al usuario.
 const fuV9819PrevPickRoot=fuV98PickRoot;
 const FU_V9819_VERSION='98.19';
 fuV98PickRoot=function(scored){
  const fallback=fuV9819PrevPickRoot(scored);
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled||!Array.isArray(scored)||!scored.length)return fallback;
  const holder=owner();
  if(!holder||holder.t!==CPU_TEAM)return fallback;
  const candidates=tacticalCandidates(),byKey=new Map(candidates.map(action=>[sequenceActionKey(action),action]));
  const legalScored=scored.filter(item=>byKey.has(item.key)&&Number.isFinite(Number(item.mean)));
  const qualifying=legalScored.map(item=>({item,action:byKey.get(item.key)}))
   .filter(entry=>entry.action.kind==='shoot'&&entry.action.playerId===holder.id&&Number(entry.action.goalProbability)>=.20)
   .sort((a,b)=>(Number(b.action.goalProbability)||0)-(Number(a.action.goalProbability)||0)||(Number(b.item.mean)||0)-(Number(a.item.mean)||0));
  if(qualifying.length)return qualifying[0].item.key;
  return fallback;
 };
 window.FUTBOL_UNICO_V9819={version:FU_V9819_VERSION,minimumGoalProbability:.20,rule:'remate obligatorio si existe un remate legal con probabilidad de gol >= 20%',pickRoot:fuV98PickRoot};
 window.FUTBOL_UNICO_V9818={version:FU_V9818_VERSION,mentalidad:fuV9818Mentality,bias:fuV9818Bias,reglas:{ganando:'A',empatandoPrimeros15:'C',empatandoTramoMedio:'B',empatandoUltimos5:'C',perdiendo:'C'}};
 // v98.21 · Integra protección de posesión con las mentalidades A/B/C.
 // La protección no reemplaza la personalidad táctica: A prioriza escapar; B lo hace
 // cuando la salida segura compite de cerca con la mejor alternativa; C solo la antepone
 // si el peligro es inmediato y no sacrifica una opción ofensiva claramente mejor.
 // El remate legal >=20% continúa siendo una regla absoluta y se resuelve primero.
 const fuV9820PrevPickRoot=fuV98PickRoot;
 const FU_V9820_VERSION='98.21';
 function fuV9820NearestRivalDistance(cell){
  const rivals=(p||[]).filter(z=>z&&z.t!==CPU_TEAM);
  if(!rivals.length)return Infinity;
  return Math.min(...rivals.map(z=>Math.max(Math.abs(Number(z.c)-Number(cell.c)),Math.abs(Number(z.r)-Number(cell.r)))));
 }
 function fuV9820EscapeChoices(scored,holder){
  const candidates=tacticalCandidates(),byKey=new Map(candidates.map(a=>[sequenceActionKey(a),a]));
  const before=fuV9820NearestRivalDistance(holder);
  if(before>2)return [];
  return scored.map(item=>({item,action:byKey.get(item.key)}))
   .filter(x=>x.action&&x.action.kind==='carry'&&x.action.playerId===holder.id&&x.action.to)
   .map(x=>({...x,before,after:fuV9820NearestRivalDistance(x.action.to)}))
   .filter(x=>x.after>=2&&x.after>before)
   .sort((a,b)=>(b.after-b.before)-(a.after-a.before)||(Number(b.item.mean)||0)-(Number(a.item.mean)||0));
 }
 function fuV9820ProtectionPolicy(mentality,distance){
  if(mentality==='A')return {apply:true,margin:Infinity,reason:'cuidar la ventaja'};
  if(mentality==='B')return {apply:true,margin:distance<=1?8:4,reason:'equilibrar seguridad y progresión'};
  if(mentality==='C'&&distance<=1)return {apply:true,margin:2,reason:'evitar el quite inminente sin frenar un ataque claramente mejor'};
  return {apply:false,margin:0,reason:'mantener prioridad ofensiva'};
 }
 fuV98PickRoot=function(scored){
  const fallback=fuV9820PrevPickRoot(scored);
  if(turn!==CPU_TEAM||!fuV98Ai?.enabled||!Array.isArray(scored)||!scored.length)return fallback;
  const holder=owner();
  if(!holder||holder.t!==CPU_TEAM||holder.n===1)return fallback;
  const candidates=tacticalCandidates(),byKey=new Map(candidates.map(a=>[sequenceActionKey(a),a]));
  const legal=scored.filter(item=>byKey.has(item.key)&&Number.isFinite(Number(item.mean)));
  // Regla absoluta: ningún parche táctico puede anular un remate legal >=20%.
  const sureShot=legal.map(item=>({item,action:byKey.get(item.key)}))
   .filter(x=>x.action.kind==='shoot'&&x.action.playerId===holder.id&&Number(x.action.goalProbability)>=.20)
   .sort((a,b)=>(Number(b.action.goalProbability)||0)-(Number(a.action.goalProbability)||0)||(Number(b.item.mean)||0)-(Number(a.item.mean)||0));
  if(sureShot.length)return sureShot[0].item.key;
  const distance=fuV9820NearestRivalDistance(holder);
  const escapes=fuV9820EscapeChoices(legal,holder);
  if(!escapes.length)return fallback;
  const mentality=fuV9818Mentality().id;
  const policy=fuV9820ProtectionPolicy(mentality,distance);
  if(!policy.apply)return fallback;
  const bestEscape=escapes[0];
  if(mentality==='A')return bestEscape.item.key;
  const bestAlternative=legal.filter(item=>item.key!==bestEscape.item.key)
   .sort((a,b)=>(Number(b.mean)||0)-(Number(a.mean)||0))[0];
  const escapeMean=Number(bestEscape.item.mean)||0;
  const alternativeMean=bestAlternative?(Number(bestAlternative.mean)||0):-Infinity;
  if(escapeMean>=alternativeMean-policy.margin)return bestEscape.item.key;
  return fallback;
 };
 window.FUTBOL_UNICO_V9820={version:FU_V9820_VERSION,threatDistance:2,rule:'protección contextual A/B/C; remate legal >=20% obligatorio',nearestRivalDistance:fuV9820NearestRivalDistance,escapeChoices:fuV9820EscapeChoices,protectionPolicy:fuV9820ProtectionPolicy,pickRoot:fuV98PickRoot};
 // ==================== FIN FÚTBOL ÚNICO v98.21 · PROTECCIÓN CONTEXTUAL · REMATE OBLIGATORIO DESDE 20% ====================
`;


(() => {
  "use strict";
  const BASELINE_COMMIT = "d62eae16f15984cdb4397b93d8c4a34e89392efd";
  const BASELINE_ENGINE_BLOB = "2a310f81554383936556146cbaabc31e3dbbdfcf";
  const BASE = new URL("./", document.baseURI).href;
  const PAGE_LABELS = { home: "Inicio", practice: "Práctica", tournament: "Torneo", multiplayer: "Multijugador", match: "Partido" };
  const PAGE_PATHS = { home: "index.html", practice: "practica/index.html", tournament: "torneo/index.html", match: "torneo/partido.html" };
  const BASELINE_BLOBS = {
    "index.html": "17e9f0af3e05cadbb71a457b50b38186343197c1",
    "practica/index.html": BASELINE_ENGINE_BLOB,
    "torneo/index.html": "21b1d396a5f2629f51273a180ccbd0cc48551a52",
    "torneo/partido.html": BASELINE_ENGINE_BLOB
  };
  const PAGE_BASES = { home: "", practice: "practica/", tournament: "torneo/", match: "torneo/" };
  const $ = (id) => document.getElementById(id);
  const stage = $("fuGameStage");
  const loading = $("fuLoading");
  const errorPanel = $("fuError");
  const statusTitle = $("fuStatusTitle");
  const statusText = $("fuStatusText");
  const statusDot = $("fuStatusDot");
  let page = pageFromUrl();
  let activeIframe = null;
  let activeReport = null;
  let latestAudit = null;
  let loadAttempt = 0;

  function pageFromUrl() {
    const value = new URLSearchParams(window.location.search).get("page");
    return value === "practice" || value === "tournament" || value === "multiplayer" || value === "match" ? value : "home";
  }
  function baselineUrl(path) { return new URL(`baseline/${path}`, BASE).href; }
  async function fetchOriginal(path) {
    const response = await fetch(baselineUrl(path), { cache: "no-cache" });
    if (!response.ok) throw new Error(`No se pudo cargar el archivo local ${path} (HTTP ${response.status}). El ZIP publicado debe incluir la carpeta baseline.`);
    const html = await response.text();
    if (!html.includes("<!doctype html") && !html.includes("<!DOCTYPE html")) throw new Error(`El archivo local ${path} no contiene el HTML esperado.`);
    return html;
  }
  async function gitBlobSha1(content) {
    if (!globalThis.crypto?.subtle) return null;
    const body = new TextEncoder().encode(content);
    const header = new TextEncoder().encode(`blob ${body.byteLength}\0`);
    const value = new Uint8Array(header.byteLength + body.byteLength);
    value.set(header, 0); value.set(body, header.byteLength);
    const digest = await globalThis.crypto.subtle.digest("SHA-1", value);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  function replaceOnce(html, search, replacement, label, report) {
    if (!html.includes(search)) { report.warnings.push(`No se encontró el punto de parche: ${label}`); return html; }
    report.patches.push(label);
    return html.replace(search, replacement);
  }
  function patchKeeperGoalState(html, report) {
    // Goal kick: el arquero ejecuta desde su propia casilla de gol, sin caminar al área de los defensores.
    html = replaceOnce(html,
      "if(type==='goal-kick')spot={c:team===1?1:C-2,r:5};",
      "if(type==='goal-kick'){const ownGoalC=team===1?0:C-1;const ownKeeper=p.find(z=>z.t===team&&z.n===1);spot={c:ownGoalC,r:ownKeeper&&ownKeeper.c===ownGoalC&&ownKeeper.r>=4&&ownKeeper.r<=6?ownKeeper.r:5};}",
      "saque de arco mantiene al arquero en su línea de gol", report);
    // La animación inicial del saque también termina sobre la propia línea de gol.
    html = replaceOnce(html,
      "type='goal-kick';awarded=defending;spotC=defending===1?1:C-2;spotR=5;",
      "type='goal-kick';awarded=defending;spotC=defending===1?0:C-1;spotR=5;",
      "trayectoria visual del saque de arco coincide con la línea del arquero", report);
    // Reinicios simulados por la IA deben usar el mismo punto legal.
    html = replaceOnce(html,
      "if(isGoalKick)spot={c:team===1?1:C-2,r:5};else spot.r=r<0?0:r>=R?R-1:spot.r;",
      "if(isGoalKick){const ownGoalC=team===1?0:C-1;const ownKeeper=p.find(z=>z.t===team&&z.n===1);spot={c:ownGoalC,r:ownKeeper&&ownKeeper.c===ownGoalC&&ownKeeper.r>=4&&ownKeeper.r<=6?ownKeeper.r:5};}else spot.r=r<0?0:r>=R?R-1:spot.r;",
      "simulación de saque de arco mantiene al arquero en su línea de gol", report);
    // Un saque lateral nunca traslada al arquero fuera de su puesto para ejecutar el reinicio.
    html = replaceOnce(html,
      "let kicker=type==='goal-kick'?p.find(z=>z.t===team&&z.n===1):p.filter(z=>z.t===team).sort((a,b)=>Math.max(Math.abs(a.c-spot.c),Math.abs(a.r-spot.r))-Math.max(Math.abs(b.c-spot.c),Math.abs(b.r-spot.r)))[0];",
      "let kicker=type==='goal-kick'?p.find(z=>z.t===team&&z.n===1):p.filter(z=>z.t===team&&z.n!==1).sort((a,b)=>Math.max(Math.abs(a.c-spot.c),Math.abs(a.r-spot.r))-Math.max(Math.abs(b.c-spot.c),Math.abs(b.r-spot.r)))[0];",
      "saque lateral elige un jugador de campo, no al arquero", report);
    html = replaceOnce(html,
      "let kicker=isGoalKick?p.find(z=>z.t===team&&z.n===1):p.filter(z=>z.t===team).sort((a,b)=>cheb(a,spot)-cheb(b,spot))[0];",
      "let kicker=isGoalKick?p.find(z=>z.t===team&&z.n===1):p.filter(z=>z.t===team&&z.n!==1).sort((a,b)=>cheb(a,spot)-cheb(b,spot))[0];",
      "simulación de saque lateral excluye al arquero como ejecutante", report);
    // Si el punto central de saque estuviera ocupado, el arquero cambia únicamente a otra de las tres casillas de su arco.
    html = replaceOnce(html,
      "if(p.some(z=>z!==kicker&&z.c===spot.c&&z.r===spot.r))spot=findFreeCellNear(spot.c,spot.r,[kicker.id]);",
      "if(p.some(z=>z!==kicker&&z.c===spot.c&&z.r===spot.r)){if(type==='goal-kick'){const ownGoalC=team===1?0:C-1;const freeGoalRow=[5,4,6].find(rr=>!p.some(z=>z!==kicker&&z.c===ownGoalC&&z.r===rr));if(freeGoalRow!==undefined)spot={c:ownGoalC,r:freeGoalRow};}else spot=findFreeCellNear(spot.c,spot.r,[kicker.id]);}",
      "conflicto de casilla en saque de arco resuelto dentro de los tres puestos", report);
    html = replaceOnce(html,
      "if(p.some(z=>z.id!==kicker.id&&z.c===spot.c&&z.r===spot.r))spot=findFreeCellNear(spot.c,spot.r,[kicker.id]);",
      "if(p.some(z=>z.id!==kicker.id&&z.c===spot.c&&z.r===spot.r)){if(isGoalKick){const ownGoalC=team===1?0:C-1;const freeGoalRow=[5,4,6].find(rr=>!p.some(z=>z.id!==kicker.id&&z.c===ownGoalC&&z.r===rr));if(freeGoalRow!==undefined)spot={c:ownGoalC,r:freeGoalRow};}else spot=findFreeCellNear(spot.c,spot.r,[kicker.id]);}",
      "conflicto en saque de arco simulado resuelto dentro de los tres puestos", report);
    // Las recolocaciones rápidas por falta no deben mover arqueros.
    html = replaceOnce(html,
      "const closeOpponents=p.filter(x=>x.t===otherTeam&&x.id!==kicker.id&&Math.max(Math.abs(x.c-spot.c),Math.abs(x.r-spot.r))<2);",
      "const closeOpponents=p.filter(x=>x.t===otherTeam&&x.id!==kicker.id&&x.n!==1&&Math.max(Math.abs(x.c-spot.c),Math.abs(x.r-spot.r))<2);",
      "recolocación por falta excluye a los arqueros", report);
    html = replaceOnce(html,
      "const teammates=p.filter(x=>x.t===awardedTeam&&x.id!==kicker.id);",
      "const teammates=p.filter(x=>x.t===awardedTeam&&x.id!==kicker.id&&x.n!==1);",
      "receptor de falta rápida excluye al arquero", report);
    html = replaceOnce(html,
      "const gk=owner();check('Saque de arco',!!gk&&gk.t===1&&gk.n===1&&ball.c===1&&ball.r===5&&restartPassOnlyId===null,'El arquero queda como ejecutante y puede elegir pase o remate según las reglas.');",
      "const gk=owner();check('Saque de arco con arquero fijo',!!gk&&gk.t===1&&gk.n===1&&gk.c===0&&gk.r>=4&&gk.r<=6&&ball.c===gk.c&&ball.r===gk.r&&restartPassOnlyId===null,'El arquero ejecuta desde una de sus tres casillas legales sin abandonar la línea de gol.');",
      "auditoría adapta el saque de arco a los tres puestos legales", report);
    return html;
  }

  function patchSimulationParity(html, report) {
    html = replaceOnce(html,
      "const CPU_SEARCH_DEPTH=5; // Un movimiento más de anticipación que el motor anterior.",
      "const CPU_SEARCH_DEPTH=6; // v96: completa tambien la respuesta rival dentro del horizonte.",
      "horizonte CPU de seis acciones", report);
    const earlyInterception = `   if(risk.first&&risk.first.index>0&&risk.first.index<passPathCells({c:ball.c,r:ball.r},a.to).length-1&&tacticalRandom()<risk.risk){
    const loose=deflectionCell(risk.first.player);ball={c:loose.c,r:loose.r,owner:null};
    if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;
    kickoffPassRequired=false;
    return false;
   }
   const accuracy=resolveAccuracy(a.player,{c:a.to.c,r:a.to.r}),target=accuracy.target;`;
    html = replaceOnce(html, earlyInterception,
      `   // v96: igual que moveBall(), primero se resuelve precision y legalidad del destino.
   const accuracy=resolveAccuracy(a.player,{c:a.to.c,r:a.to.r}),target=accuracy.target;`,
      "paridad de orden precision/intercepcion", report);
    const simulatedReceiver = `   const receiver=at(target.c,target.r);
   if(receiver&&receiver.t===team&&isOffsidePosition(receiver))return 'blocked';
   if(goalSide){`;
    html = replaceOnce(html, simulatedReceiver,
      `   const receiver=at(target.c,target.r);
   if(receiver&&receiver.t===team&&isOffsidePosition(receiver))return 'blocked';
   // v96: la tirada de intercepcion ocurre en el mismo punto que en el motor visible.
   if(risk.first&&risk.first.index>0&&risk.first.index<passPathCells({c:ball.c,r:ball.r},a.to).length-1&&tacticalRandom()<risk.risk){
    const loose=deflectionCell(risk.first.player);ball={c:loose.c,r:loose.r,owner:null};
    if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;
    kickoffPassRequired=false;
    return false;
   }
   if(goalSide){`,
      "intercepcion simulada diferida", report);
    const simulatedDuel = `   if(r.n===1&&ball.owner===r.id)return 'blocked';
   if(a.duelOutcome==='frente'){`;
    html = replaceOnce(html, simulatedDuel,
      `   if(r.n===1&&ball.owner===r.id)return 'blocked';
   // v96: el minimax ya no obtiene duelos gratuitos; usa los mismos porcentajes de falta.
   const simulatedDuelType=a.duelType||(Math.abs(dc)===1&&Math.abs(dr)===1?'costado':duelType(x,r));
   const simulatedFoulChance=simulatedDuelType==='atras'?.60:simulatedDuelType==='costado'?.30:0;
   if(simulatedFoulChance>0&&tacticalRandom()<simulatedFoulChance){
    const spot={c:r.c,r:r.r},quick=createQuickFoulMoves(r.t,r,spot,x);
    for(const z of p){const q=quick.layout.get(z.id);if(q){z.c=q.c;z.r=q.r;}}
    r.c=spot.c;r.r=spot.r;ball={c:spot.c,r:spot.r,owner:r.id};
    turn=r.t;actionNo=1;lastPlayedId=null;playedThisTurn=[];restartPassOnlyId=null;
    freeKickRequiredId=r.id;freeKickAwardedTeam=r.t;kickoffPassRequired=false;
    return true;
   }
   if(a.duelOutcome==='frente'){`,
      "faltas incluidas en duelos simulados", report);
    return html;
  }
  function patchProgressiveActionResolution(html, report) {
    // V96.1: igualar el traslado con pelota al traslado sin pelota.
  // Se conservan exactamente las mismas distancias y movimientos especiales de pLegal.
  html = replaceOnce(
    html,
    "  // Sin balón: todos avanzan hasta 2 casilleros en línea recta.\n  // Los números 3, 4, 7 y 8 avanzan hasta 3 en línea recta y hasta 2 en diagonal.\n  // Con balón, todos mantienen un máximo de 1 casillero.\n  const hasBall=ball.owner===x.id;\n  const special=[3,4,7,8].includes(x.n);\n  const straight=(dc===0||dr===0);\n  const diagonal=Math.abs(dc)===Math.abs(dr);\n  const dist=Math.max(Math.abs(dc),Math.abs(dr));\n  const maxStraight=!hasBall&&straight&&dist<=(special?3:2);\n  const maxDiagonal=!hasBall&&special&&diagonal&&dist<=2&&dist>0;\n  // Se habilita el salto tipo caballo: 2 casilleros en un eje y 1 en el otro.\n  const knightMove=!hasBall&&special&&((Math.abs(dc)===2&&Math.abs(dr)===1)||(Math.abs(dc)===1&&Math.abs(dr)===2));",
    "  // V96.1: alcance idéntico de traslado con y sin pelota.\n  // Todos: hasta 2 casilleros en línea recta. Jugadores 3, 4, 7 y 8:\n  // hasta 3 casilleros rectos, 2 diagonales y salto tipo caballo (2×1).\n  const special=[3,4,7,8].includes(x.n);\n  const straight=(dc===0||dr===0);\n  const diagonal=Math.abs(dc)===Math.abs(dr);\n  const dist=Math.max(Math.abs(dc),Math.abs(dr));\n  const maxStraight=straight&&dist<=(special?3:2);\n  const maxDiagonal=special&&diagonal&&dist<=2&&dist>0;\n  // El salto tipo caballo también está habilitado con o sin pelota.\n  const knightMove=special&&((Math.abs(dc)===2&&Math.abs(dr)===1)||(Math.abs(dc)===1&&Math.abs(dr)===2));",
    "alcance idéntico de movimiento con y sin balón v96.1",
    report,
  );

  // El motor compartido debe conservar si la acción elegida fue un remate,
    // incluso cuando su desviación termina fuera de las tres casillas del arco.
    html = replaceOnce(
      html,
      "  const path=passPathCells(from,{c,r});\n  const firstRival=firstTrajectoryRival(path,x.t);",
      "  let path=passPathCells(from,{c,r});\n  let firstRival=firstTrajectoryRival(path,x.t);",
      "trayectoria recalculada tras desviaciones",
      report,
    );
    html = replaceOnce(
      html,
      "  const accuracy=resolveAccuracy(x,{c,r});\n  c=accuracy.target.c;r=accuracy.target.r;",
      "  const intendedTarget={c,r};\n  const intendedShotTarget=!!goalSideForCell(c,r,x.t);\n  const accuracy=resolveAccuracy(x,{c,r});\n  c=accuracy.target.c;r=accuracy.target.r;\n  path=passPathCells(from,{c,r});\n  firstRival=firstTrajectoryRival(path,x.t);",
      "distinguir remate elegido de resultado desviado",
      report,
    );
    html = replaceOnce(
      html,
      "  if(passBeyondOffsideLine(c,x)){",
      "  if(!intendedShotTarget&&passBeyondOffsideLine(c,x)){",
      "fuera de juego solo para pases",
      report,
    );
    html = replaceOnce(
      html,
      "  if(intendedReceiver&&intendedReceiver.t===x.t&&isOffsidePosition(intendedReceiver)){",
      "  if(!intendedShotTarget&&intendedReceiver&&intendedReceiver.t===x.t&&isOffsidePosition(intendedReceiver)){",
      "fuera de juego del receptor solo para pases",
      report,
    );
    html = replaceOnce(
      html,
      "   if(!valid){say('El arquero bloquea ese ingreso al área chica.');return}",
      "   if(!valid&&!intendedShotTarget){say('El arquero bloquea ese ingreso al área chica.');return}",
      "el remate desviado se resuelve como jugada y no se cancela",
      report,
    );
    html = replaceOnce(
      html,
      "    beginManualAction(goalSideForCell(c,r,x.t)?'shoot':'pass',x,{from:{c:from.c,r:from.r},to:{c,r},interceptorNo:interceptor.n,interception:true});",
      "    beginManualAction(intendedShotTarget?'shoot':'pass',x,{from:{c:from.c,r:from.r},to:{c,r},intendedTo:intendedTarget,interceptorNo:interceptor.n,interception:true});",
      "registrar remates interceptados como remates",
      report,
    );
    html = replaceOnce(
      html,
      "  if(goalSide){\n   kickoffPassRequired=false;\n   clearFreeKickRequirement(x.id);\n   beginManualAction('shoot',x,{from:{c:from.c,r:from.r},to:{c,r},intendedTo:{c:accuracy.target.c,r:accuracy.target.r},goalSide});",
      `  if(intendedShotTarget){
     const shotKeeper=p.find(z=>z.t!==x.t&&z.n===1);
     if(shotKeeper&&(goalkeeperBlocksShot(x,from,{c,r},p)||(goalSideForCell(c,r,x.t)&&tacticalRandom()<fuV96KeeperSaveChance(x,from,{c,r},p)))){
      kickoffPassRequired=false;clearFreeKickRequirement(x.id);
      beginManualAction('shoot',x,{from:{c:from.c,r:from.r},to:{c,r},intendedTo:intendedTarget,keeperSave:true});
      if(restartPassOnlyId===x.id)restartPassOnlyId=null;
      ball={c:shotKeeper.c,r:shotKeeper.r,owner:shotKeeper.id};
      animationFinish('¡Atajada! El arquero detuvo el remate.',animateBall(from,{c:shotKeeper.c,r:shotKeeper.r,owner:shotKeeper.id},{arc:true,goal:true,duration:850}));
      return;
     }
     if(!goalSide){
      kickoffPassRequired=false;clearFreeKickRequirement(x.id);
      beginManualAction('shoot',x,{from:{c:from.c,r:from.r},to:{c,r},intendedTo:intendedTarget,shotMiss:true});
      if(restartPassOnlyId===x.id)restartPassOnlyId=null;
      ball={c,r,owner:null};
      const defendingTeam=x.t===1?2:1,goalKickC=defendingTeam===1?1:C-2;
      anim=true;
      Promise.resolve(animateBall(from,{c,r,owner:null},{arc:true,goal:true,duration:750}))
       .then(()=>prepareRestart('goal-kick',defendingTeam,goalKickC,5))
       .catch(()=>prepareRestart('goal-kick',defendingTeam,goalKickC,5));
      return;
     }
    }
    if(goalSide){
     kickoffPassRequired=false;
     clearFreeKickRequirement(x.id);
     beginManualAction('shoot',x,{from:{c:from.c,r:from.r},to:{c,r},intendedTo:intendedTarget,goalSide});`,
      "remate desviado, atajada y saque de arco",
      report,
    );
    html = replaceOnce(
      html,
      "  const receiver=at(c,r);\n  kickoffPassRequired=false;",
      "  const receiver=at(c,r,x.id);\n  kickoffPassRequired=false;",
      "un pase corto no se recibe por el mismo pasador",
      report,
    );
    // La zona de alcance se mantiene, pero ya no comunica falsamente 100%/50%/0%.
    html = replaceOnce(
      html,
      "  // Amarillo = 100% exacto; naranja = 50/50; rojo = 0% de precisión (desvío seguro).",
      "  // La zona tenue indica alcance; los porcentajes junto al arco muestran la probabilidad de gol estimada.",
      "leyenda visual acorde a la precisión progresiva",
      report,
    );
    html = replaceOnce(
      html,
      "  const reach=BALL_REACH(x.n),a=ACCURACY_RANGES(x.n);",
      "  const reach=BALL_REACH(x.n);",
      "presentación de alcance sin rangos de precisión obsoletos",
      report,
    );
    html = replaceOnce(
      html,
      "  addBand(reach,a.half[1],'#ff3030',.12);\n  addBand(a.half[1],a.exact,'#ff8a00',.16);\n  addBand(a.exact,0,'#ffe600',.17);",
      "  add(reach,'#fff7b0',.045);",
      "zona de alcance neutral",
      report,
    );
    // Actualizar controles de auditoría que comprobaban la antigua precisión por escalones.
    html = replaceOnce(
      html,
      "check('Porcentaje calculado desde la fila real del balón',realOriginShot.probability<wrongOriginShot.probability&&Math.abs(realOriginShot.probability-.5)<.001&&Math.abs(wrongOriginShot.probability-1)<.001,`Origen real ${Math.round(realOriginShot.probability*100)}%; fila incorrecta ${Math.round(wrongOriginShot.probability*100)}%.`);",
      "check('Porcentaje calculado desde la fila real del balón',realOriginShot.probability<wrongOriginShot.probability&&realOriginShot.probability>0&&wrongOriginShot.probability<.99,`Origen real ${Math.round(realOriginShot.probability*100)}%; fila incorrecta ${Math.round(wrongOriginShot.probability*100)}%.`);",
      "auditoría de probabilidad con curva progresiva",
      report,
    );
    html = replaceOnce(
      html,
      "check('Distribución de desvíos suma 100%',[exactOutcomes,mediumOutcomes,lowOutcomes].every(arr=>Math.abs(totalWeight(arr)-1)<.001)&&exactOutcomes.length===1&&mediumOutcomes.length===9&&lowOutcomes.length===16,`Resultados posibles: ${exactOutcomes.length}, ${mediumOutcomes.length} y ${lowOutcomes.length}; todas las distribuciones suman 100%.`);",
      "check('Distribución lateral progresiva suma 100%',[exactOutcomes,mediumOutcomes,lowOutcomes].every(arr=>Math.abs(totalWeight(arr)-1)<.001)&&exactOutcomes.length>1&&mediumOutcomes.length>=exactOutcomes.length&&lowOutcomes.length>=mediumOutcomes.length,`Resultados posibles: ${exactOutcomes.length}, ${mediumOutcomes.length} y ${lowOutcomes.length}; todas las distribuciones suman 100%.`);",
      "auditoría de desviación lateral progresiva",
      report,
    );
    // El simulador de la CPU utiliza las mismas consecuencias de un remate desviado.
    html = replaceOnce(
      html,
      "   const accuracy=resolveAccuracy(a.player,{c:a.to.c,r:a.to.r}),target=accuracy.target;\n   if(simulateExit(target,team)){kickoffPassRequired=false;if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;return true;}\n   const goalSide=goalSideForCell(target.c,target.r,team);",
      `   const intendedShot=a.kind==='shoot';
     const accuracy=resolveAccuracy(a.player,{c:a.to.c,r:a.to.r}),target=accuracy.target;
     if(simulateExit(target,team)){kickoffPassRequired=false;if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;return true;}
     const goalSide=goalSideForCell(target.c,target.r,team);
     if(intendedShot&&!isGoalCell(target.c,target.r,team===1?'R':'L')){
      ball={c:target.c,r:target.r,owner:null};if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;
      kickoffPassRequired=false;simulateRestart(team===1?2:1,true,team===1?C-2:1,5);return false;
     }`,
      "simulación de remate desviado y saque de arco",
      report,
    );
    html = replaceOnce(html,
      "   if(passBeyondOffsideLine(target.c,a.player))return 'blocked';",
      "   if(a.kind!=='shoot'&&passBeyondOffsideLine(target.c,a.player))return 'blocked';",
      "fuera de juego solo bloquea pases en simulación", report);
    html = replaceOnce(html,
      "   if(receiver&&receiver.t===team&&isOffsidePosition(receiver))return 'blocked';",
      "   if(a.kind!=='shoot'&&receiver&&receiver.t===team&&isOffsidePosition(receiver))return 'blocked';",
      "el fuera de juego no cancela un remate desviado", report);
    html = replaceOnce(
      html,
      "   const receiver=at(target.c,target.r);",
      "   const receiver=at(target.c,target.r,a.player.id);",
      "simulación de pase corto sin autorreceptor",
      report,
    );
    html = replaceOnce(
      html,
      "    if(!goalTargets(side).includes(target.r))return 'blocked';",
      "    const keeper=p.find(z=>z.t!==team&&z.n===1);if(keeper&&(goalkeeperBlocksShot(a.player,from,target,p)||tacticalRandom()<fuV96KeeperSaveChance(a.player,from,target,p))){ball={c:keeper.c,r:keeper.r,owner:keeper.id};if(restartPassOnlyId===a.playerId)restartPassOnlyId=null;kickoffPassRequired=false;return false;}",
      "simulación de atajada sin cancelar la acción",
      report,
    );
    const oldCarrierMoves = `for(let r=Math.max(0,x.r-1);r<=Math.min(R-1,x.r+1);r++)for(let c=Math.max(0,x.c-1);c<=Math.min(C-1,x.c+1);c++){
      if(!pLegal(c,r,x)||at(c,r,x.id)||isOffsideMove(c,x)||forbidsBackLineAdvance(x,c,holder,team))continue;
      const before=nearOpponents(team,x,1),after=nearOpponents(team,{c,r},1);
      const progress=(c-x.c)*dir;
      const safety=(before-after)*5;
      const central=(r>=3&&r<=7)?2:0;
      add({kind:'carry',player:x,playerId:x.id,from:{c:x.c,r:x.r},to:{c,r},progress,score:29+progress*7+safety+central,mode:'carrier'});
     }`;
    const allLegalCarrierMoves = `for(let r=0;r<R;r++)for(let c=0;c<C;c++){
      if(!pLegal(c,r,x)||at(c,r,x.id)||isOffsideMove(c,x)||forbidsBackLineAdvance(x,c,holder,team))continue;
      const before=nearOpponents(team,x,1),after=nearOpponents(team,{c,r},1);
      const progress=(c-x.c)*dir;
      const safety=(before-after)*5;
      const central=(r>=3&&r<=7)?2:0;
      add({kind:'carry',player:x,playerId:x.id,from:{c:x.c,r:x.r},to:{c,r},progress,score:29+progress*7+safety+central,mode:'carrier'});
     }`;
    html = replaceOnce(html, oldCarrierMoves, allLegalCarrierMoves, "CPU evalúa todos los traslados legales con pelota", report);
    return html;
  }

  // v98 · Coherencia del balón cuando un pase fallido no sale de la casilla del pasador.
  // Corrección del motor: no cambia reglas, probabilidades, resolución de acciones, IA ni cronómetro.
  // Cada reemplazo comprueba que exista fuV98ShortPassRestCell, así que nunca deja una referencia rota.
  function patchShortPassLooseBall(html, report) {
    html = replaceOnce(
      html,
      "  const receiver=at(c,r,x.id);\n  kickoffPassRequired=false;\n  clearFreeKickRequirement(x.id);\n",
      "  const receiver=at(c,r,x.id);\n" +
      "  // v98: si el pase fallido no salió de la casilla del pasador, la pelota queda suelta en una casilla libre a su lado.\n" +
      "  const fuV98ShortRest=!receiver&&(at(c,r)||{}).id===x.id&&typeof fuV98ShortPassRestCell==='function'?fuV98ShortPassRestCell(x,from,typeof intendedTarget!=='undefined'?intendedTarget:null):null;\n" +
      "  if(fuV98ShortRest){c=fuV98ShortRest.c;r=fuV98ShortRest.r;}\n" +
      "  kickoffPassRequired=false;\n  clearFreeKickRequirement(x.id);\n",
      "v98: el pase fallido que no sale del pasador deja la pelota suelta en una casilla libre",
      report,
    );
    html = replaceOnce(
      html,
      "  text=accuracy.description+' '+text;\n  if(bypassedInterceptor)",
      "  if(typeof fuV98ShortRest!=='undefined'&&fuV98ShortRest)text='La pelota queda suelta junto al Jugador '+x.n+', en la casilla '+(c+1)+'×'+(r+1)+'.';\n" +
      "  text=accuracy.description+' '+text;\n  if(bypassedInterceptor)",
      "v98: mensaje del pase fallido que queda suelto junto al pasador",
      report,
    );
    html = replaceOnce(
      html,
      "   ball={c:target.c,r:target.r,owner:receiver?receiver.id:null};\n",
      "   // v98: la simulación con la que la CPU anticipa jugadas deja la pelota en la misma casilla libre.\n" +
      "   const fuV98SimRest=!receiver&&(at(target.c,target.r)||{}).id===a.playerId&&typeof fuV98ShortPassRestCell==='function'?fuV98ShortPassRestCell(a.player,from,a.to):null;\n" +
      "   ball=fuV98SimRest?{c:fuV98SimRest.c,r:fuV98SimRest.r,owner:null}:{c:target.c,r:target.r,owner:receiver?receiver.id:null};\n",
      "v98: la simulación de la CPU usa la misma pelota suelta en casilla libre",
      report,
    );
    return html;
  }

  // v98 · Fase 1 de IA: en la simulación de la CPU también rige el tiro libre obligatorio.
  function patchSimulationFreeKick(html, report) {
    return replaceOnce(
      html,
      "  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1&&simulationRandomState===null){",
      "  if(freeKickRequiredId!==null&&freeKickAwardedTeam===turn&&actionNo===1){",
      "v98: la simulación de la CPU respeta el tiro libre obligatorio",
      report,
    );
  }

  function patchTournamentCpuProfiles(html, report) {
    html = replaceOnce(
      html,
      "const clubById=id=>CLUBS.find(c=>c.id===id);",
      `const clubById=id=>CLUBS.find(c=>c.id===id);
const CPU_TACTIC_PROFILES=[
 {id:'defensive',label:'Defensivo'},
 {id:'balanced',label:'Equilibrado'},
 {id:'aggressive',label:'Agresivo'},
 {id:'cautious',label:'Cauteloso'},
 {id:'counter',label:'Contraatacador'},
 {id:'adaptive',label:'Adaptativo'}
];
function cpuProfileHash(value){let h=2166136261;for(const ch of String(value))h=Math.imul(h^ch.charCodeAt(0),16777619);return h>>>0;}
function makeCpuProfiles(seed='liga'){
 const ordered=CLUBS.map(c=>({id:c.id,key:cpuProfileHash(seed+'|'+c.id)})).sort((a,b)=>a.key-b.key||a.id.localeCompare(b.id));
 const profiles={};ordered.forEach((item,index)=>{profiles[item.id]=CPU_TACTIC_PROFILES[index%CPU_TACTIC_PROFILES.length].id;});return profiles;
}
function ensureCpuProfiles(){if(!state)return;const seed=(state.selectedClubId||'liga')+'|'+(state.createdAt||state.season||'legacy');const generated=makeCpuProfiles(seed);state.cpuProfiles={...generated,...(state.cpuProfiles||{})};}`,
      "asignación equilibrada de perfil por club", report);
    html = replaceOnce(html,
      "function loadState(){try{state=JSON.parse(localStorage.getItem(STORE)||'null')}catch(_e){state=null}}",
      "function loadState(){try{state=JSON.parse(localStorage.getItem(STORE)||'null')}catch(_e){state=null}if(state&&state.started){ensureCpuProfiles();saveState();}}",
      "migración de temporadas guardadas con identidades", report);
    html = replaceOnce(html,
      "function beginSeason(){if(!chosenClub)return;state={version:1,started:true,season:1,selectedClubId:chosenClub,round:1,durationSeconds:Number($('seasonDuration').value||15),results:{},createdAt:new Date().toISOString()};simulateOtherMatches(1);saveState();renderDashboard();}",
      "function beginSeason(){if(!chosenClub)return;const createdAt=new Date().toISOString();state={version:1,started:true,season:1,selectedClubId:chosenClub,round:1,durationSeconds:Number($('seasonDuration').value||15),results:{},createdAt,cpuProfiles:makeCpuProfiles(chosenClub+'|'+createdAt)};simulateOtherMatches(1);saveState();renderDashboard();}",
      "perfil táctico persistente al iniciar temporada", report);
    html = replaceOnce(html,
      "<th>#</th><th>Club</th><th>PJ</th>",
      "<th>#</th><th>Club</th><th>Perfil rival</th><th>PJ</th>",
      "columna visible de identidad táctica en la tabla", report);
    html = replaceOnce(html,
      "<div class=\"table-club\">${crestMarkup(r.club)}<span title=\"${escapeHtml(r.club.name)}\">${escapeHtml(r.club.name)}</span></div></td><td>${r.pj}</td>",
      "<div class=\"table-club\">${crestMarkup(r.club)}<span title=\"${escapeHtml(r.club.name)}\">${escapeHtml(r.club.name)}</span></div></td><td>${r.club.id===state.selectedClubId?'Tu equipo':((CPU_TACTIC_PROFILES.find(x=>x.id===(state.cpuProfiles||{})[r.club.id])||{}).label||'—')}</td><td>${r.pj}</td>",
      "mostrar perfil táctico de cada rival en la tabla", report);
    html = replaceOnce(html,
      "function playMyMatch(){const fx=currentFixture();if(!fx||state.results[fx.id])return;const opponentId=fx.homeId===state.selectedClubId?fx.awayId:fx.homeId;const q=new URLSearchParams({mode:'torneo',club:state.selectedClubId,opponent:opponentId,fixture:fx.id,round:String(state.round),home:fx.homeId,away:fx.awayId,seconds:String(state.durationSeconds)});location.href=`./partido.html?${q.toString()}`;}",
      "function playMyMatch(){const fx=currentFixture();if(!fx||state.results[fx.id])return;ensureCpuProfiles();const opponentId=fx.homeId===state.selectedClubId?fx.awayId:fx.homeId;const opponent=clubById(opponentId);const q=new URLSearchParams({mode:'torneo',club:state.selectedClubId,opponent:opponentId,cpuProfile:state.cpuProfiles[opponentId]||'balanced',cpuName:opponent?.name||opponentId,fixture:fx.id,round:String(state.round),home:fx.homeId,away:fx.awayId,seconds:String(state.durationSeconds)});parent.postMessage({type:'fu:navigate',page:'match',query:q.toString()},'*');}",
      "paso de identidad del rival a su partido de torneo", report);
    html = replaceOnce(html,
      "function fixtureMarkup(f,mode='round'){const r=state.results[f.id],mine=f.homeId===state.selectedClubId||f.awayId===state.selectedClubId;const h=clubById(f.homeId),a=clubById(f.awayId);return `",
      "function fixtureMarkup(f,mode='round'){const r=state.results[f.id],mine=f.homeId===state.selectedClubId||f.awayId===state.selectedClubId;const h=clubById(f.homeId),a=clubById(f.awayId);const opponentId=f.homeId===state.selectedClubId?f.awayId:f.homeId;const profileId=mine?(state.cpuProfiles||{})[opponentId]:null;const profileLabel=(CPU_TACTIC_PROFILES.find(x=>x.id===profileId)||{}).label;return `",
      "mostrar identidad asignada al rival en el fixture", report);
    html = html.replace(
      "${mine?' · TU PARTIDO':''}",
      "${mine?` · TU PARTIDO${profileLabel?' · CPU '+profileLabel:''}`:''}",
    );
    return html;
  }

    function patchCleanPublicText(html, requestedPage, report) {
    if (requestedPage === "home") {
      const start = html.indexOf('<header class="topbar">');
      const end = html.indexOf('<div class="rules-backdrop"', start);
      if (start >= 0 && end > start) {
        const cleanHome = `
<main class="fu-clean-home-main">
  <h1>Elegí cómo jugar</h1>
  <section class="modes fu-clean-home-modes" aria-label="Modos de juego">
    <a class="mode available" href="../index.html?page=practice"><div class="mode-top"><span class="mode-icon" aria-hidden="true">⚽</span></div><h3>Práctica</h3><p>Jugá contra la CPU.</p><div class="mode-action"><span>Jugar</span><span class="arrow" aria-hidden="true">→</span></div></a>
    <a class="mode available" href="../index.html?page=tournament"><div class="mode-top"><span class="mode-icon" aria-hidden="true">🏆</span></div><h3>Torneo</h3><p>Elegí un club y jugá una temporada.</p><div class="mode-action"><span>Entrar al torneo</span><span class="arrow" aria-hidden="true">→</span></div></a>
    <a class="mode available" href="../index.html?page=multiplayer"><div class="mode-top"><span class="mode-icon" aria-hidden="true">⚔</span></div><h3>Multijugador</h3><p>Desafíos 1 vs. 1, ranking y estadísticas.</p><div class="mode-action"><span>Entrar</span><span class="arrow" aria-hidden="true">→</span></div></a>
  </section>
  <button type="button" class="rules-open fu-clean-rules" id="openOfficialRules">Reglas del juego</button>
</main>
</div>
`;
        html = html.slice(0, start) + cleanHome + html.slice(end);
        report.patches.push("portada simplificada: sólo modos de juego y acceso al reglamento");
      } else report.warnings.push("No se encontró el bloque de portada para simplificar.");
    }
    if (requestedPage === "tournament") {
      html = html.replace(/<section class="hero">[\s\S]*?<\/section>/, '<section class="hero fu-clean-tournament-hero"><h1>Torneo argentino</h1><p>Elegí tu club y jugá cada fecha.</p></section>');
      html = html.replace('La selección queda fijada al comenzar la temporada. Para cambiar de club, tendrás que iniciar una temporada nueva.', 'Podés cambiar de club al iniciar una nueva temporada.');
      html = html.replace('COMENZAR TEMPORADA →', 'COMENZAR TEMPORADA');
      html = html.replace('Seleccioná un club para continuar.', 'Elegí un club para continuar.');
      html = html.replace(/<footer class="footer">[\s\S]*?<\/footer>/, '');
      report.patches.push("torneo simplificado: se quitaron textos promocionales y explicaciones repetidas");
    }
    if (requestedPage === "practice" || requestedPage === "match") {
      // Mantener mensajes de estado y avisos de reglas; retirar texto editorial/técnico persistente.
      html = html.replace(/<div class="info">Fútbol Único · Partido táctico por turnos[\s\S]*?<\/div>/, '');
      report.patches.push("partido simplificado: se retiró el texto editorial fijo del pie");
    }
    if (requestedPage === "home") {
      html = injectBeforeClosingTag(html, "</head>", `<style id="fu-clean-home-ui">
        .fu-clean-home-main{max-width:1120px;margin:0 auto;padding:clamp(24px,5vh,58px) 0 28px}
        .fu-clean-home-main>h1{margin:0 0 20px;font-size:clamp(25px,4vw,40px);font-weight:950;letter-spacing:-.05em;color:#f0f5ee}
        .fu-clean-home-modes{grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding:0 0 18px}
        .fu-clean-home-modes .mode{min-height:174px;padding:17px;border-radius:12px;box-shadow:none}
        .fu-clean-home-modes .mode-top{align-items:center}
        .fu-clean-home-modes .mode-icon{width:34px;height:34px;border-radius:9px;font-size:20px}
        .fu-clean-home-modes .mode h3{margin:14px 0 5px;font-size:19px}
        .fu-clean-home-modes .mode p{margin:0 0 13px;font-size:12px;line-height:1.45;color:#b2bdb2}
        .fu-clean-home-modes .mode-action{padding-top:10px;border-top:1px solid #ffffff12}
        .fu-clean-rules{min-height:38px;padding:0 13px;border:1px solid #414d42;background:#111c14;color:#dbe8d9;box-shadow:none;font-size:11px}
        .fu-clean-rules:hover{background:#1a291c}
        .rules-header small{display:none}
        @media(max-width:760px){.fu-clean-home-main{padding:20px 0}.fu-clean-home-modes{grid-template-columns:minmax(0,1fr);gap:9px}.fu-clean-home-modes .mode{min-height:125px;padding:14px}.fu-clean-home-modes .mode-top{display:none}.fu-clean-home-modes .mode h3{margin:0 0 5px}.fu-clean-home-modes .mode-action{padding-top:8px}}
      </style>`);
    }
    if (requestedPage === "tournament") {
      html = injectBeforeClosingTag(html, "</head>", `<style id="fu-clean-tournament-ui">
        .fu-clean-tournament-hero{padding:22px 0 16px!important}
        .fu-clean-tournament-hero h1{font-size:clamp(25px,4vw,38px)!important;margin:0!important}
        .fu-clean-tournament-hero p{margin-top:7px!important;font-size:12px!important;line-height:1.45!important}
        #setupPanel .field-row{grid-template-columns:minmax(0,1fr)!important}
        #setupPanel .field-row>div:nth-child(2){display:none!important}
        #setupPanel .field-row>div:first-child>p.muted{margin:5px 0 10px!important}
        .footer{display:none!important}
      </style>`);
    }
    if (requestedPage === "practice" || requestedPage === "match") {
      html = injectBeforeClosingTag(html, "</head>", `<style id="fu-clean-match-ui">
        .bottom .info{display:none!important}
        .strategy-plan,.tactic-focus{display:none!important}
      </style>`);
    }
    return html;
  }

  function patchMatchIntro(html, report) {
    const before = html;
    // El texto inicial era un bloque de reglas demasiado extenso que ocupaba
    // el relato inferior y activaba el botón «Ver más» al entrar al partido.
    html = html.replace(/say\(`\$\{tournamentMode\?'Torneo Argentino':'Práctica'\} v95 · memoria defensiva adaptativa,[\s\S]*?primera acción debe ser pase o remate\.`\);/g,
      "say('Partido listo. Elegí una ficha para comenzar.');");
    if (html !== before) report.patches.push("se quitó el bloque informativo inicial extenso del partido");
    return html;
  }

  function patchInternalNavigation(html, report) {
    const before = html;
    html = html.replace("location.href=`./partido.html?${q.toString()}`;", "parent.postMessage({type:'fu:navigate',page:'match',query:q.toString()},'*');");
    html = html.replace(/(?:window\.)?location(?:\.href)?\s*=\s*(["'])(?:\.\/)?partido\.html\1\s*;?/g, "parent.postMessage({type:'fu:navigate',page:'match'},'*');");
    // Al finalizar un partido de torneo, volver al portal contenedor. Si el iframe
    // navega a ./index.html por su cuenta, carga el HTML base sin las correcciones.
    const tournamentReturn = "if(tournamentMode){window.location.href='./index.html';return;}";
    if (html.includes(tournamentReturn)) {
      html = html.replace(tournamentReturn, "if(tournamentMode){parent.postMessage({type:'fu:navigate',page:'tournament'},'*');return;}");
      report.patches.push("retorno desde partido finalizado al portal de torneo actualizado");
    }
    if (html !== before) report.patches.push("navegación interna del torneo");
    return html;
  }
  function patchEmbeddedLocation(html, report) {
    const searches = ["new URLSearchParams(location.search)", "new URLSearchParams(window.location.search)"];
    if (!searches.some((search) => html.includes(search))) return html;
    report.patches.push("parámetros de torneo compartidos con el host");
    return searches.reduce((output, search) => output.split(search).join("new URLSearchParams(parent.location.search)"), html);
  }
  function bridgeScript(currentPage) {
    return String.raw`<script id="fu-v96-navigation-bridge">
(function(){
  var currentPage='${currentPage}';
  function pageFor(href){
    if(!href)return null;
    // Los accesos de las tarjetas usan ../index.html?page=practice|tournament.
    // Leer primero el parámetro evita abrir otra copia del portal dentro del iframe.
    try {
      var targetPage=new URL(String(href),document.baseURI).searchParams.get('page');
      if(targetPage==='practice'||targetPage==='tournament'||targetPage==='multiplayer'||targetPage==='match')return targetPage;
    } catch(_e) {}
    var clean=String(href).split('#')[0].split('?')[0].replace(/\\/g,'/');
    if(/torneo\/partido\.html$|(^|\/)partido\.html$/.test(clean))return 'match';
    if(/(^|\/)practica\/?$|(^|\/)practica\/index\.html$/.test(clean))return 'practice';
    if(/(^|\/)torneo\/?$|(^|\/)torneo\/index\.html$/.test(clean))return 'tournament';
    if(/^(\.\/)?index\.html$/.test(clean)){
      if(currentPage==='match')return 'tournament';
      if(currentPage==='practice')return 'practice';
      if(currentPage==='tournament')return 'tournament';
      return 'home';
    }
    if(clean==='.'||clean==='./'||clean==='..'||clean==='../'||clean==='/'||clean===''){
      if(clean==='..'||clean==='../'||clean==='/')return 'home';
      return currentPage==='home'?'home':null;
    }
    return null;
  }
  document.addEventListener('click',function(event){
    var anchor=event.target&&event.target.closest?event.target.closest('a[href]'):null;
    if(!anchor)return;
    var page=pageFor(anchor.getAttribute('href'));
    if(!page)return;
    event.preventDefault();parent.postMessage({type:'fu:navigate',page:page},'*');
  },true);
  parent.postMessage({type:'fu:ready',title:document.title},'*');
})();
</script>`;
  }
  function injectBeforeClosingTag(html, tag, content) {
    const index = html.toLowerCase().lastIndexOf(tag.toLowerCase());
    if (index < 0) return `${html}${content}`;
    return `${html.slice(0, index)}${content}\n${html.slice(index)}`;
  }
  function injectEnginePatch(html, report) {
    let enginePatch = V96_ENGINE_PATCH + V98_DISCIPLINE_PATCH;
    try { new Function(enginePatch); report.patches.push("sintaxis JavaScript v96 verificada"); }
    catch (error) { throw new Error(`La capa v96 no superó el control de sintaxis: ${String(error)}`); }
    // v97 es sólo visual: si no supera el control de sintaxis, el partido sigue funcionando con la vista v96.
    let visualPatch = "";
    try { new Function(V97_MATCH_PATCH); visualPatch = V97_MATCH_PATCH; report.patches.push("sintaxis JavaScript v97 (rediseño visual) verificada"); }
    catch (error) { report.warnings.push(`La capa visual v97 no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    // v98 corrige estados imposibles del balón. Si no superara su control de sintaxis, sus parches de texto
    // quedan inactivos (comprueban que la función exista) y el partido sigue con el motor v96.
    let engineFixes = "";
    try { new Function(V98_ENGINE_FIXES); engineFixes = V98_ENGINE_FIXES; report.patches.push("sintaxis JavaScript v98 (correcciones del motor) verificada"); }
    catch (error) { report.warnings.push(`La capa v98 de correcciones del motor no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    // Fase 1 de IA: simulación coherente. Si no superara el control de sintaxis, la CPU sigue con la de v96.
    let simCoherence = "";
    try { new Function(V98_SIM_COHERENCE); simCoherence = V98_SIM_COHERENCE; report.patches.push("sintaxis JavaScript v98 (simulación coherente) verificada"); }
    catch (error) { report.warnings.push(`La capa v98 de simulación coherente no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    // Fase 2 de IA: decisiones de la CPU. Requiere la simulación coherente; sin ella, la CPU decide como en v96.
    let aiPatch = "";
    if (simCoherence) {
      try { new Function(V98_AI_PATCH); aiPatch = V98_AI_PATCH; report.patches.push("sintaxis JavaScript v98 (IA fase 2) verificada"); }
      catch (error) { report.warnings.push(`La capa v98 de IA no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    }
    let tacticalRebalance = "";
    if (aiPatch) {
      try { new Function(V98_TACTICAL_REBALANCE); tacticalRebalance = V98_TACTICAL_REBALANCE; report.patches.push("sintaxis JavaScript v98.2 (límite del arquero y progresión ofensiva) verificada"); }
      catch (error) { report.warnings.push(`La capa v98.2 de conducta táctica no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    }
    let tacticalStructure = "";
    if (tacticalRebalance) {
      try { new Function(V98_TACTICAL_STRUCTURE); tacticalStructure = V98_TACTICAL_STRUCTURE; report.patches.push("sintaxis JavaScript v98.3 (estructura colectiva de líneas) verificada"); }
      catch (error) { report.warnings.push(`La capa v98.3 de estructura colectiva no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    }
    let attackPriority = "";
    if (tacticalStructure) {
      try { new Function(V98_ATTACK_PRIORITY_PATCH); attackPriority = V98_ATTACK_PRIORITY_PATCH; report.patches.push("sintaxis JavaScript v98.4 (prioridad ofensiva contextual) verificada"); }
      catch (error) { report.warnings.push(`La capa v98.4 de prioridad ofensiva no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    }
    let fastAttack = "";
    if (attackPriority) {
      try { new Function(V98_FAST_ATTACK_PATCH); fastAttack = V98_FAST_ATTACK_PATCH; report.patches.push("sintaxis JavaScript v98.5 (ataque rápido coordinado) verificada"); }
      catch (error) { report.warnings.push(`La capa v98.5 de ataque coordinado no superó el control de sintaxis y no se instaló: ${String(error)}`); }
    }
    let successCalibration = "";
    if (fastAttack) {
      try {
        new Function(V98_6_SUCCESS_CALIBRATION);
        successCalibration = V98_6_SUCCESS_CALIBRATION;
        const actualFoul = "const foulChance=tipo==='atras'?.60:tipo==='costado'?.30:0;";
        const actualIntercept = "const interceptionChance=([2,6].includes(interceptor.n)?0.75:interceptor.n===5?0.65:0.5);";
        const simIntercept = "const interceptionChance=[2,6].includes(interceptor.n)?0.75:interceptor.n===5?0.65:0.5;";
        const simFoul = "const simulatedFoulChance=simulatedDuelType==='atras'?.60:simulatedDuelType==='costado'?.30:0;";
        const coherenceFoul = "const foulChance=tipo==='atras'?.60:tipo==='costado'?.30:0;";
        const modelFoul = "const pFoul=tipo==='atras'?.60:tipo==='costado'?.30:0,fouledTeam=r.t;";
        if (!html.includes(actualFoul) || !html.includes(actualIntercept) || !html.includes(simFoul) || !simCoherence.includes(simIntercept) || !simCoherence.includes(coherenceFoul) || !aiPatch.includes(modelFoul)) {
          throw new Error("No se encontraron todos los puntos de resolución real, simulación de intercepciones y estimación de faltas; no se aplicó la calibración parcial.");
        }
        const calibratedHtml = html.replace(actualFoul, "const foulChance=fuV986AdjustedFoulChance(tipo);").replace(actualIntercept, "const interceptionChance=fuV986BaseInterceptionChance(interceptor);").replace(simFoul, "const simulatedFoulChance=fuV986AdjustedFoulChance(simulatedDuelType);");
        const calibratedSimCoherence = simCoherence.replace(coherenceFoul, "const foulChance=fuV986AdjustedFoulChance(tipo);").replace(simIntercept, "const interceptionChance=fuV986BaseInterceptionChance(interceptor);");
        const calibratedAiPatch = aiPatch.replace(modelFoul, "const pFoul=fuV986AdjustedFoulChance(tipo),fouledTeam=r.t;");
        new Function(calibratedSimCoherence);
        new Function(calibratedAiPatch);
        html = calibratedHtml;
        simCoherence = calibratedSimCoherence;
        aiPatch = calibratedAiPatch;
        report.patches.push("v98.6: faltas −10 pp en el motor real y en ambas simulaciones de la CPU");
        report.patches.push("v98.6: +10 pp globales de precisión/éxito e intercepción real, simulada y estimada; handicap específico de CPU gestionado por v98.30");
        report.patches.push("v98.6: límite duro del arquero de CPU a 3 casilleros");
      } catch (error) {
        successCalibration = "";
        report.warnings.push(`La calibración v98.6 no se instaló por completo: ${String(error)}`);
      }
    }
    let cpuHandicap = "";
    if (successCalibration) {
      try {
        new Function(V98_30_CPU_HANDICAP);
        cpuHandicap = V98_30_CPU_HANDICAP;
        report.patches.push("v98.30: handicap oculto de precisión CPU por club + variación aleatoria de −2 a +2 pp; total +2 a +10 pp por encuentro");
        report.patches.push("v98.30: handicap aplicado a pases y remates en cálculo real y estimación táctica; sin bonus fijo adicional de pase/conversión");
      } catch (error) {
        report.warnings.push(`El handicap v98.30 no superó el control de sintaxis y no se instaló: ${String(error)}`);
      }
    }
    let goalkeeperLock = "";
    try {
      new Function(V98_12_GOALKEEPER_LOCK);
      goalkeeperLock = V98_12_GOALKEEPER_LOCK;
      report.patches.push("v98.12: ambos arqueros confinados a sus tres casillas de gol");
    } catch (error) {
      report.warnings.push(`La restricción v98.12 de los arqueros no superó el control de sintaxis: ${String(error)}`);
    }
    let aggressiveAi = "";
    if (goalkeeperLock && successCalibration && fastAttack) {
      try {
        new Function(V98_AGGRESSIVE_AI_PATCH);
        aggressiveAi = V98_AGGRESSIVE_AI_PATCH;
        report.patches.push("v98.17: IA explosiva con avance vertical, mayor prioridad de remate, recuperación y presión útil");
        report.patches.push("v98.17: evaluación posicional premia que los jugadores de campo acompañen el ataque y penaliza retrocesos defensivos improductivos");
      } catch (error) {
        report.warnings.push(`El perfil ofensivo v98.17 no superó el control de sintaxis y no se instaló: ${String(error)}`);
      }
    }
    let mentalityAi = "";
    if (aggressiveAi) {
      try {
        new Function(V98_MENTALITY_PATCH);
        mentalityAi = V98_MENTALITY_PATCH;
        report.patches.push("v98.18: mentalidad A cuando la CPU gana, B en empate intermedio y C cuando pierde o el empate entra en los tramos de urgencia");
        report.patches.push("v98.18: valoración contextual de remates, pases, conducciones, presión y recuperación; sin alterar legalidad ni probabilidades");
        report.patches.push("v98.19: remate obligatorio cuando la CPU dispone de una ocasión legal con probabilidad de gol mostrada >= 20%");
        report.patches.push("v98.20: protege la posesión y prioriza conducir fuera del alcance inmediato de rivales que pueden quitar la pelota");
      } catch (error) {
        report.warnings.push(`La capa de mentalidad contextual v98.18 no superó el control de sintaxis y no se instaló: ${String(error)}`);
      }
    }
    const finalIife = html.lastIndexOf("})();");
    if (finalIife < 0) { report.warnings.push("No se encontró el cierre del motor para instalar v96."); return html; }
    report.patches.push("motor táctico v96");
    if (engineFixes) report.patches.push("correcciones del motor v98");
    if (simCoherence) report.patches.push("simulación coherente de la CPU v98");
    if (aiPatch) report.patches.push("IA de la CPU v98 (fase 2)");
    if (tacticalRebalance) report.patches.push("ajustes v98.2: arquero dentro de tres casillas y mayor progresión ofensiva");
    if (tacticalStructure) report.patches.push("ajustes v98.3: líneas colectivas elásticas y ruptura táctica justificada");
    if (attackPriority) report.patches.push("ajustes v98.4: defensores no abandonan la jugada en el último tercio si existen opciones ofensivas útiles");
    if (fastAttack) report.patches.push("ajustes v98.5: desmarques coordinados de los dorsales 7–11 y progresión ofensiva rápida");
    if (successCalibration) report.patches.push("calibración v98.6: precisión global y límite duro del arquero CPU");
    if (goalkeeperLock) report.patches.push("restricción v98.12: solo columna 0, filas 4–6 para Equipo 1 y columna C-1, filas 4–6 para Equipo 2");
    if (aggressiveAi) report.patches.push("perfil base de IA v98.17: atacante vertical y recuperador agresivo");
    if (mentalityAi) report.patches.push("mentalidad contextual v98.18: A/B/C según resultado y minuto");
    if (mentalityAi) report.patches.push("protección de posesión v98.20: escape de rivales con amenaza inmediata, respetando remate obligatorio >=20%");
    if (visualPatch) { report.visualLayer = true; report.patches.push("rediseño visual del partido v97"); }
    // v98.48: se retira por completo el desplazamiento autónomo colectivo.
    // Los movimientos sólo ocurren por una acción explícita del motor; las animaciones
    // normales de cada acción se conservan.
    report.patches.push("v98.48: movimiento automático colectivo retirado; se conservan las animaciones de acciones individuales");
    const onlineBridge = String.raw`
/* v98.45 · Publicar el estado definitivo después del cierre de turno. */
(function(){
 const q=new URLSearchParams(parent.location.search); const matchId=q.get('multiplayer_match_id');
 if(!matchId)return;
 let onlineTeam=0, onlineTurnOwner=1, applying=false, saving=false, lastPublished='';
 const captureCore=captureSequenceState, restoreCore=restoreSequenceState;
 captureSequenceState=function(){return {...captureCore(),freeKickRequiredId,freeKickAwardedTeam,matchClockActions,matchClockFinished,halftimePaused,halftimePending,selectedActionSeconds};};
 restoreSequenceState=function(st){restoreCore(st);if(st.freeKickRequiredId!==undefined)freeKickRequiredId=st.freeKickRequiredId;if(st.freeKickAwardedTeam!==undefined)freeKickAwardedTeam=st.freeKickAwardedTeam;if(st.matchClockActions!==undefined)matchClockActions=st.matchClockActions;if(st.matchClockFinished!==undefined)matchClockFinished=st.matchClockFinished;if(st.halftimePaused!==undefined)halftimePaused=st.halftimePaused;if(st.halftimePending!==undefined)halftimePending=st.halftimePending;if(st.selectedActionSeconds!==undefined)selectedActionSeconds=st.selectedActionSeconds;};
 function snapshot(){return {schema:1,engine:'FU98',state:captureSequenceState(),goals1:Number(score[0]||0),goals2:Number(score[1]||0),updatedAt:new Date().toISOString()};}
 function paint(){drawPlayers();drawBall();if(typeof refresh==='function')refresh();setTurn();if(s1)s1.textContent=String(score[0]);if(s2)s2.textContent=String(score[1]);if(typeof renderMatchClock==='function')renderMatchClock();const h=document.getElementById('halftimeOverlay');if(h)h.hidden=!halftimePaused;const f=document.getElementById('finalMatchOverlay');if(f)f.hidden=!matchClockFinished;}
 const originalComplete=completeManualAction;
 // Publicar aquí conserva el registro de la acción, pero finish() todavía no cambió el turno.
 // Por eso se publica también al salir de finish(), cuando ya se reiniciaron actionNo,
 // lastPlayedId y playedThisTurn y el estado corresponde al equipo que empieza.
 completeManualAction=function(){const actingTeam=(pendingManualAction&&pendingManualAction.team)||turn;const result=originalComplete.apply(this,arguments);if(!applying&&actingTeam===onlineTeam)publish(actingTeam);return result;};
 const originalFinish=finish;
 finish=function(){const actingTeam=Number(turn);const result=originalFinish.apply(this,arguments);if(!applying&&actingTeam===onlineTeam)publish(actingTeam);return result;};
 function publish(actorTeam){const author=Number(actorTeam)||(turn===onlineTeam?onlineTeam:0);if(!onlineTeam||author!==onlineTeam)return;const value=snapshot();const key=JSON.stringify(value.state)+':'+value.goals1+':'+value.goals2;if(key===lastPublished)return;lastPublished=key;parent.postMessage({type:'fu:online-state',matchId,state:value,team:author},'*');}
 window.FU_ONLINE_ENGINE={snapshot,apply:function(value){if(!value||!value.state)return;applying=true;try{const oldPlayers=Array.isArray(p)?p.map(x=>({...x})):[];const oldBall=ball?{...ball}:null;const oldBallTransform=document.getElementById('ball')?.getAttribute('transform')||null;const oldTurn=Number(turn);restoreSequenceState(value.state);const receivedTurn=Number(turn);/* Cierre de turno: no arrastrar marcas de jugadores usados al equipo que empieza. */if(Number.isFinite(oldTurn)&&Number.isFinite(receivedTurn)&&oldTurn!==receivedTurn){playedThisTurn=[];lastPlayedId=null;actionNo=1;}/* Una selección/casillas legales del rival nunca debe sobrevivir en el cliente receptor. */selected=null;mode='player';const newPlayers=Array.isArray(p)?p.map(x=>({...x})):[];const moved=newPlayers.filter(n=>{const o=oldPlayers.find(x=>x.id===n.id);return o&&(o.c!==n.c||o.r!==n.r)}).map(n=>({id:n.id,from:oldPlayers.find(x=>x.id===n.id),to:n}));paint();const newBallTransform=document.getElementById('ball')?.getAttribute('transform')||null;for(const m of moved){const node=document.querySelector('#players [data-id="'+m.id+'"]');if(node)node.setAttribute('transform','translate('+X(m.from.c)+' '+Y(m.from.r)+')');animatePlayerMove(m.id,{c:m.from.c,r:m.from.r},{c:m.to.c,r:m.to.r},{slow:true}).catch(()=>{});}onlineTurnOwner=Number(value.state.turn)||onlineTurnOwner;lastPublished=JSON.stringify(value.state)+':'+Number(value.goals1||0)+':'+Number(value.goals2||0);parent.postMessage({type:'fu:online-applied',matchId,turn,actionNo,score:score.slice()},'*');say(onlineTeam===onlineTurnOwner?'Estado sincronizado. Es tu turno.':'Jugada del rival sincronizada. Esperá tu turno.');}finally{applying=false;}},setTeam:function(team,turnOwner){onlineTeam=Number(team)||0;onlineTurnOwner=Number(turnOwner)||1;setCpuEnabled(false);document.documentElement.dataset.fuOnline='true';const reset=document.getElementById('reset');if(reset)reset.disabled=true;const cpu=document.getElementById('cpuToggleBtn');if(cpu)cpu.hidden=true;paint();say(onlineTeam===onlineTurnOwner?'Conectado a la partida. Es tu turno.':'Conectado a la partida. Turno del rival; la cancha está sincronizada.');},publish};
 document.addEventListener('click',function(e){if(!onlineTeam)return;if(saving){e.preventDefault();e.stopImmediatePropagation();say('Guardando la jugada en Supabase…');return;}const id=e.target&&e.target.closest?e.target.closest('#secondHalfStartButton,#goalContinueButton,#finalMatchContinueButton'):null;if(id){if(turn===onlineTeam)setTimeout(()=>publish(onlineTeam),0);return;}if(turn!==onlineTeam||onlineTurnOwner!==onlineTeam){e.preventDefault();e.stopImmediatePropagation();say('Esperando el turno del rival. La partida se conserva; no podés mover por el otro jugador.');}},true);
 window.addEventListener('message',function(e){const d=e.data;if(!d||d.matchId!==matchId)return;if(d.type==='fu:online-role'){window.FU_ONLINE_ENGINE.setTeam(d.team,d.turnOwner);}else if(d.type==='fu:online-apply'){window.FU_ONLINE_ENGINE.apply(d.state);}else if(d.type==='fu:online-saving'){saving=!!d.value;}else if(d.type==='fu:online-rollback'){parent.postMessage({type:'fu:online-engine-ready',matchId},'*');}});
 parent.postMessage({type:'fu:online-engine-ready',matchId},'*');
})();
`;
    try { new Function(onlineBridge); report.patches.push('v98.45: publica el estado definitivo después de que finish() reinicia las acciones del turno'); } catch(error) { report.warnings.push('No se pudo validar el adaptador online: '+String(error)); }
    let directorModePatch = "";
    try { new Function(V98_DIRECTOR_MODE_PATCH); directorModePatch = V98_DIRECTOR_MODE_PATCH; report.patches.push('v98.69: panel DT en una columna y una acción por jugador/turno (hasta 11)'); }
    catch(error) { report.warnings.push('El Modo Director Técnico no superó la validación sintáctica y no se instaló: '+String(error)); }
    return `${html.slice(0, finalIife)}\n${enginePatch}\n${engineFixes}\n${simCoherence}\n${aiPatch}\n${tacticalRebalance}\n${tacticalStructure}\n${attackPriority}\n${fastAttack}\n${successCalibration}\n${cpuHandicap}\n${goalkeeperLock}\n${aggressiveAi}\n${mentalityAi}\n${visualPatch}\n${onlineBridge}\n${directorModePatch}\n${html.slice(finalIife)}`;
  }
  // v98.14 · Pases largos y diagonales universales con falta por detrás.
  // Se aplica al HTML ya compuesto para mantener la base protegida intacta.
  function patchLongRangeAndDiagonals(html, report) {
    let out = html;
    const once = (source, find, replacement, label) => {
      const count = source.split(find).length - 1;
      if (count !== 1) throw new Error(`v98.14 no aplicado: ${label}; se esperaba 1 coincidencia y hubo ${count}.`);
      return source.replace(find, replacement);
    };
    out = once(out, 'const BALL_REACH=n=>8;', 'const BALL_REACH=n=>12;', 'alcance máximo del balón');
    // Regla actualizada: sólo los jugadores 3, 4, 7 y 8 pueden desplazarse
    // dos casillas en diagonal. Los dorsales 2, 5, 6, 9, 10 y 11 no pueden hacerlo,
    // tengan o no la pelota. El motor normalizado puede llegar sin la condición hasBall.
    if (out.includes('const maxDiagonal=special&&diagonal&&dist<=2&&dist>0;')) {
      // La regla ya está aplicada; no modificarla.
    } else if (out.includes('const maxDiagonal=(!hasBall||special)&&diagonal&&dist<=2&&dist>0;')) {
      out = once(out, 'const maxDiagonal=(!hasBall||special)&&diagonal&&dist<=2&&dist>0;', 'const maxDiagonal=special&&diagonal&&dist<=2&&dist>0;', 'restricción diagonal por dorsal');
    } else {
      out = once(out, 'const maxDiagonal=!hasBall&&special&&diagonal&&dist<=2&&dist>0;', 'const maxDiagonal=special&&diagonal&&dist<=2&&dist>0;', 'restricción diagonal por dorsal');
    }
    out = once(out, '  if(c===x.c || r===x.r)return true;\n  return x.n===5 && Math.abs(dc)===1 && Math.abs(dr)===1;', '  if(c===x.c || r===x.r)return true;\n  return Math.abs(dc)===1 && Math.abs(dr)===1;', 'disputa diagonal en movimiento legal');
    out = once(out, "  if(dr!==0)return 'costado';\n  return Math.sign(dc)===attackDir(a.t)?'frente':'atras';", "  if(Math.abs(dc)===1&&Math.abs(dr)===1)return dc*attackDir(a.t)<0?'atras':'costado';\n  if(dr!==0)return 'costado';\n  return Math.sign(dc)===attackDir(a.t)?'frente':'atras';", 'clasificación de disputa diagonal por detrás');
    out = out.replaceAll("  if(diagonal && a.n!==5){say('La disputa diagonal sólo está permitida para el Jugador 5.');return}\n  const tipo=diagonal?'costado':duelType(a,r);", "  const tipo=duelType(a,r);");
    out = out.replaceAll('  if(diagonal&&a.n!==5)return null;\n  const type=diagonal?\'costado\':duelType(a,r);', '  const type=duelType(a,r);');
    out = out.replaceAll("  if(diagonal&&a.n!==5)return 'blocked';\n  const tipo=diagonal?'costado':duelType(a,r);", '  const tipo=duelType(a,r);');
    out = out.replaceAll("  if(diagonal&&a.n!==5)return 'blocked';\n  const type=diagonal?'costado':duelType(a,r);", '  const type=duelType(a,r);');
    // The new pass/shot curves live in v96 and are shared by live execution, estimates and CPU search.
    if (!out.includes('const FU_V96_SHOT_CURVE=[0,90,85,78,68,57,46,35,25,8,3,1];') ||
        !out.includes('const FU_V96_PASS_CURVE=[0,90,85,82,72,60,48,36,25,12,6,3];')) {
      throw new Error('v98.14 no aplicado: no se encontraron las curvas progresivas de precisión.');
    }
    if (!out.includes('const BALL_REACH=n=>12;') || !out.includes('const maxDiagonal=special&&diagonal&&dist<=2&&dist>0;')) {
      throw new Error('v98.62 incompleto: faltan alcance máximo 12 o desmarques diagonales.');
    }
    if (out.includes('if(diagonal&&a.n!==5)return') || out.includes('if(diagonal && a.n!==5)') || out.includes("diagonal?'costado':duelType(")) {
      throw new Error('v98.14 incompleto: quedó una restricción antigua de disputas diagonales.');
    }
    report.patches.push('v98.62: alcance máximo de pases y remates ampliado a 12 casillas');
    report.patches.push('v98.62: pase y remate a distancia 1–3 con 100% de precisión base, antes de intercepciones');
    report.patches.push('v98.62: curva progresiva preservada desde la cuarta casilla y desplazada una distancia');
    report.patches.push('v98.16: sólo los dorsales 3, 4, 7 y 8 pueden desplazarse dos casillas en diagonal; 2, 5, 6, 9, 10 y 11 quedan restringidos');
    report.patches.push('v98.14: todos pueden disputar en diagonal; las diagonales desde atrás conservan el riesgo de falta');
    return out;
  }

  // v98.13 · Ampliación lógica del estadio: 18×11 -> 20×13.
  // Se ejecuta después de comprobar el SHA-1 y de instalar las capas del motor,
  // para mantener baseline intacto y transformar de forma coherente el partido final.
  function patchExpandedStadium(html, report) {
    let out = html;
    const requiredOnce = (source, find, replacement, label) => {
      const count = source.split(find).length - 1;
      if (count !== 1) throw new Error(`Ampliación del estadio cancelada: ${label}; se esperaba 1 coincidencia y hubo ${count}.`);
      return source.replace(find, replacement);
    };
    if (!out.includes('const C=18,R=11,S=100,MAX=6;')) throw new Error('Ampliación del estadio cancelada: la base no tiene la cuadrícula 18×11 esperada.');

    // 1) Reubicar las coordenadas ya presentes en la lógica y las capas inyectadas.
    // Se añade una columna a cada lado de la zona central: c<=7 queda; c8-9 se desplazan +1; c>=10, +2.
    // Cada fila existente baja una posición al incorporar una fila en ambos extremos.
    const mapC = n => n <= 7 ? n : n <= 9 ? n + 1 : n + 2;
    const vectorA = '__FU_V9813_ZERO_VECTOR_A__';
    const vectorB = '__FU_V9813_ZERO_VECTOR_B__';
    out = out.replaceAll('dist({c:0,r:0},{c:a.c-spot.c,r:a.r-spot.r})', 'dist('+vectorA+', {c:a.c-spot.c,r:a.r-spot.r})');
    out = out.replaceAll('dist({c:0,r:0},{c:b.c-spot.c,r:b.r-spot.r})', 'dist('+vectorB+', {c:b.c-spot.c,r:b.r-spot.r})');

    // Objetos de posición concretos (c,r); los vectores de diferencia se protegen arriba.
    out = out.replace(/\bc\s*:\s*(\d+)\s*,\s*r\s*:\s*(\d+)/g, (_m,c,r) => `c:${mapC(Number(c))},r:${Number(r)+1}`);
    out = out.replaceAll(vectorA, '{c:0,r:0}').replaceAll(vectorB, '{c:0,r:0}');

    // Comparaciones/asignaciones de coordenadas literales en reinicios, controles y pruebas internas.
    out = out.replace(/((?:\.|\b)c\s*===\s*)(\d+)/g, (_m,p,n) => p + mapC(Number(n)));
    out = out.replace(/(\.c\s*=\s*)(\d+)/g, (_m,p,n) => p + mapC(Number(n)));
    out = out.replace(/((?:\.|\b)r\s*===\s*)(\d+)/g, (_m,p,n) => p + (Number(n)+1));
    out = out.replace(/(\.r\s*=\s*)(\d+)/g, (_m,p,n) => p + (Number(n)+1));

    // Bandas/umbrales geométricos (todas las filas originales se desplazan +1).
    const rowReplacements = [
      ['for(let r=4;r<=6;r++)','for(let r=5;r<=7;r++)'],
      ['for(let row=4;row<=6;row++)','for(let row=5;row<=7;row++)'],
      ['r>=4&&r<=6','r>=5&&r<=7'],
      ['r >= 4 && r <= 6','r >= 5 && r <= 7'],
      ['targetR>=4&&targetR<=6','targetR>=5&&targetR<=7'],
      ['x.targetR>=4&&x.targetR<=6','x.targetR>=5&&x.targetR<=7'],
      ['q.targetR>=4&&q.targetR<=6','q.targetR>=5&&q.targetR<=7'],
      ['r<4||r>6','r<5||r>7'],
      ['targetR<4||targetR>6','targetR<5||targetR>7'],
      ['[5,4,6]','[6,5,7]'],
      ['[4,5,6]','[5,6,7]'],
      ['r>=3&&r<=7','r>=4&&r<=8'],
      ['r >= 3 && r <= 7','r >= 4 && r <= 8'],
      ['holder.r<=2','holder.r<=3'], ['holder.r>=8','holder.r>=9'],
      ['cell.r<=2','cell.r<=3'], ['cell.r>=8','cell.r>=9'],
      ['z.r<=2','z.r<=3'], ['z.r>=8','z.r>=9'],
      ['r<=2','r<=3'], ['r>=8','r>=9'],
      ['r-5','r-6'], ['base[3]-5','base[3]-6'],
      ['5+(base[3]-6)*widthScale','6+(base[3]-6)*widthScale'],
      ['||0)-5','||0)-6'],
      ['row:5,to:{c:goalC,r:5}','row:6,to:{c:goalC,r:6}'],
      ['r:ownKeeper&&ownKeeper.c===ownGoalC&&ownKeeper.r>=4&&ownKeeper.r<=6?ownKeeper.r:5','r:ownKeeper&&ownKeeper.c===ownGoalC&&ownKeeper.r>=5&&ownKeeper.r<=7?ownKeeper.r:6'],
      ['spotR=5;','spotR=6;'],
      ['ownKeeper.r:5','ownKeeper.r:6'],
      ['c:team===1?1:C-2,r:5','c:team===1?1:C-2,r:6'],
      ['c:team===1?1:C-2,r: 5','c:team===1?1:C-2,r: 6'],
      ['r>=4&&r<=6?ownKeeper.r:5','r>=5&&r<=7?ownKeeper.r:6']
    ];
    for (const [a,b] of rowReplacements) out = out.replaceAll(a,b);

    // También cubrir comparaciones con espacios mixtos (por ejemplo, "r>=4 && r<=6"),
    // presentes en el motor base. Son bandas de las tres casillas de gol, no probabilidades.
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?r)\s*>=\s*4(\s*&&\s*\1\s*<=\s*)6\b/g, (_m, v, mid) => `${v}>=5${mid}7`);
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?targetR)\s*>=\s*4(\s*&&\s*\1\s*<=\s*)6\b/g, (_m, v, mid) => `${v}>=5${mid}7`);
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?r)\s*<\s*4(\s*\|\|\s*\1\s*>\s*)6\b/g, (_m, v, mid) => `${v}<5${mid}7`);
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?targetR)\s*<\s*4(\s*\|\|\s*\1\s*>\s*)6\b/g, (_m, v, mid) => `${v}<5${mid}7`);
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?r)\s*>=\s*3(\s*&&\s*\1\s*<=\s*)7\b/g, (_m, v, mid) => `${v}>=4${mid}8`);
    out = out.replace(/\b((?:[A-Za-z_$][\w$]*\.)?targetR)\s*>=\s*3(\s*&&\s*\1\s*<=\s*)7\b/g, (_m, v, mid) => `${v}>=4${mid}8`);
    out = out.replace(/\[\s*4\s*,\s*5\s*,\s*6\s*\]/g, '[5,6,7]');
    out = out.replace(/for\s*\(\s*let\s+(r|row)\s*=\s*4\s*;\s*\1\s*<=\s*6\s*;\s*\1\+\+\s*\)/g, (_m,v) => `for(let ${v}=5;${v}<=7;${v}++)`);

    // Valores centrales expresados como fórmulas (no coordenadas literales c:n,r:n).
    out = out.replaceAll('const isKickoffKicker=x=>!!x&&x.n===10&&x.t===turn&&x.r===6&&x.c===(x.t===1?8:9)&&ball.c===x.c&&ball.r===6&&ball.owner===x.id;',
      'const isKickoffKicker=x=>!!x&&x.n===10&&x.t===turn&&x.r===6&&x.c===(x.t===1?9:10)&&ball.c===x.c&&ball.r===6&&ball.owner===x.id;');
    out = out.replaceAll('const goal={c:team===1?0:C-1,r:5};','const goal={c:team===1?0:C-1,r:6};');
    out = out.replaceAll('const ownGoal={c:CPU_TEAM===1?0:C-1,r:5};','const ownGoal={c:CPU_TEAM===1?0:C-1,r:6};');
    out = out.replaceAll('let best={probability:0,row:5,to:{c:goalC,r:5}};','let best={probability:0,row:6,to:{c:goalC,r:6}};');
    out = out.replaceAll('const targetR=Math.max(0,Math.min(R-1,5+(base[3]-6)*widthScale));','const targetR=Math.max(0,Math.min(R-1,6+(base[3]-6)*widthScale));');

    // 2) Dimensionar tablero, viewBox y textura. La imagen sigue siendo la fotografía original.
    out = requiredOnce(out, 'const C=18,R=11,S=100,MAX=6;', 'const C=20,R=13,S=100,MAX=6;', 'dimensiones C/R');
    out = requiredOnce(out, '<svg id="field" viewBox="-95 0 1990 1100" aria-label="Cancha de fútbol 18 por 11 con césped fotorrealista">', '<svg id="field" viewBox="-45 0 2090 1300" aria-label="Cancha de fútbol 20 por 13 con césped fotorrealista">', 'SVG de cancha recortada v98.32');
    out = requiredOnce(out, 'const VB={x:-95,y:-45,w:1990,h:1160};', 'const VB={x:-45,y:0,w:2090,h:1300};', 'viewBox recortado de cancha v98.32');
    // El modo ampliado utiliza la misma geometría recortada para hacer seguimiento horizontal del balón.
    out = requiredOnce(out, 'const scale=field.clientWidth/1990;\n  const ballX=(X(ball.c)+95)*scale;', 'const scale=field.clientWidth/2090;\n  const ballX=(X(ball.c)+45)*scale;', 'coordenadas de seguimiento del balón v98.32');
    const imageRe = /<image id="pitchTexture" x="-33\.33" y="-31" width="1866\.67" height="1125\.5" preserveAspectRatio="none" href="data:image\/jpeg;base64,[^"]+"\s*\/>/g;
    const images = [...out.matchAll(imageRe)];
    if (images.length !== 1) throw new Error(`Ampliación del estadio cancelada: textura original no encontrada de forma única (${images.length}).`);
    out = out.replace(imageRe, '<image id="pitchTexture" x="-33.33" y="-31" width="2066.67" height="1331.5" preserveAspectRatio="none" href="estadio-ampliado-v98.13.jpg"/>');

    // Formación simétrica: las coordenadas de los jugadores se expresan con c/r de la nueva cuadrícula.
    const formation = `const FORMATION=[
  [1,1,0,6],[1,3,2,3],[1,2,2,5],[1,6,2,7],[1,4,2,9],[1,5,5,6],[1,10,9,6],[1,8,5,10],[1,9,9,3],[1,7,5,2],[1,11,9,9],
  [2,1,19,6],[2,3,17,3],[2,2,17,5],[2,6,17,7],[2,4,17,9],[2,5,14,6],[2,10,10,6],[2,8,14,10],[2,9,10,3],[2,7,14,2],[2,11,10,9]
 ];`;
    const formationRe = /const FORMATION=\[[\s\S]*?\n \];/g;
    const formations = [...out.matchAll(formationRe)];
    if (formations.length !== 1) throw new Error(`Ampliación del estadio cancelada: definición de formación encontrada ${formations.length} veces.`);
    out = out.replace(formationRe, formation);

    // Portería gráfica ampliada y movida a los extremos de la nueva cuadrícula.
    out = requiredOnce(out, '<rect id="gL" class="goal" x="-34" y="400" width="61" height="300"/>', '<rect id="gL" class="goal" x="-34" y="500" width="61" height="300"/>', 'rectángulo de gol izquierdo');
    out = requiredOnce(out, '<rect id="gR" class="goal" x="1773" y="400" width="61" height="300"/>', '<rect id="gR" class="goal" x="1973" y="500" width="61" height="300"/>', 'rectángulo de gol derecho');
    out = requiredOnce(out, "gL.setAttribute('x','-40');gL.setAttribute('y','400');gL.setAttribute('width','40');gL.setAttribute('height','300');", "gL.setAttribute('x','-40');gL.setAttribute('y','500');gL.setAttribute('width','40');gL.setAttribute('height','300');", 'animación/objetivo de arco izquierdo');
    out = requiredOnce(out, "gR.setAttribute('x','1800');gR.setAttribute('y','400');gR.setAttribute('width','40');gR.setAttribute('height','300');", "gR.setAttribute('x','2000');gR.setAttribute('y','500');gR.setAttribute('width','40');gR.setAttribute('height','300');", 'animación/objetivo de arco derecho');
    out = requiredOnce(out, "L:{gx:27,dir:-1,back:-25,top:400,bot:700},\n  R:{gx:1772,dir:1,back:1825,top:400,bot:700}", "L:{gx:27,dir:-1,back:-25,top:500,bot:800},\n  R:{gx:1972,dir:1,back:2025,top:500,bot:800}", 'geometría de red');

    if (!out.includes('const C=20,R=13,S=100,MAX=6;') || !out.includes('c===ownGoalColumn&&r>=5&&r<=7') || !out.includes('href="estadio-ampliado-v98.13.jpg"')) {
      throw new Error('Ampliación del estadio incompleta: falta una dimensión, una regla de gol o la textura ampliada.');
    }
    report.patches.push('v98.13: cancha ampliada de 18×11 a 20×13, con dos columnas junto al círculo central y una fila adicional en cada extremo');
    report.patches.push('v98.13: formación, saques, zonas de gol, arquero restringido y referencias tácticas ajustados a la cuadrícula ampliada');
    return out;
  }

  // v98.46 · ampliación final a 26×17.
  function patchPitch26x17(html, report) {
    let out = html;
    const once = (source, find, replacement, label) => {
      const count = source.split(find).length - 1;
      if (count !== 1) throw new Error(`v98.46: ${label}; se esperaba una coincidencia y hubo ${count}.`);
      return source.replace(find, replacement);
    };
    if (!out.includes('const C=20,R=13,S=100,MAX=6;')) throw new Error('v98.46 cancelado: la cuadrícula previa 20×13 no está presente.');
    const mapC = n => Math.round(Number(n) * 25 / 19);
    const mapR = n => Math.round(Number(n) * 16 / 12);
    const formationRe = /(const FORMATION=\[)([\s\S]*?)(\n \];)/;
    const fm = out.match(formationRe);
    if (!fm) throw new Error('v98.46 cancelado: no se encontró la formación 20×13.');
    const scaledFormation = fm[2].replace(/\[(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\]/g,
      (_m,t,n,c,r) => `[${t},${n},${mapC(c)},${mapR(r)}]`);
    out = out.replace(formationRe, fm[1] + scaledFormation + fm[3]);

    // Escalar únicamente coordenadas declaradas de forma explícita.
    out = out.replace(/\b(c|r|row|targetR|spotR|goalR)\s*:\s*(\d+)\b/g,
      (_m,key,n) => `${key}:${key==='c'?mapC(n):mapR(n)}`);
    out = out.replace(/((?:\.|\b)c\s*===\s*)(\d+)\b/g, (_m,prefix,n) => prefix + mapC(n));
    out = out.replace(/(\.c\s*=\s*)(\d+)\b/g, (_m,prefix,n) => prefix + mapC(n));
    out = out.replace(/((?:\.|\b)r\s*===\s*)(\d+)\b/g, (_m,prefix,n) => prefix + mapR(n));
    out = out.replace(/(\.r\s*=\s*)(\d+)\b/g, (_m,prefix,n) => prefix + mapR(n));
    out = out.replace(/((?:\b[A-Za-z_$][\w$]*\.)?r\s*(?:>=|<=|>|<)\s*)(\d+)\b/g,
      (_m,prefix,n) => prefix + mapR(n));
    out = out.replace(/((?:\b[A-Za-z_$][\w$]*\.)?targetR\s*(?:>=|<=|>|<)\s*)(\d+)\b/g,
      (_m,prefix,n) => prefix + mapR(n));
    out = out.replace(/((?:\b[A-Za-z_$][\w$]*\.)?c\s*(?:>=|<=|>|<)\s*)(\d+)\b/g,
      (_m,prefix,n) => prefix + mapC(n));

    out = out.replaceAll('x.c===(x.t===1?9:10)', 'x.c===(x.t===1?12:13)');
    out = out.replaceAll('spotR=6;', 'spotR=8;');
    out = out.replaceAll('r-6', 'r-8');
    out = out.replaceAll('base[3]-6', 'base[3]-8');
    out = out.replaceAll('6+(base[3]-8)*widthScale', '8+(base[3]-8)*widthScale');
    out = out.replaceAll('Number(from?.r)||0)-5', 'Number(from?.r)||0)-8');
    out = out.replaceAll('const goal={c:team===1?0:C-1,r:6};', 'const goal={c:team===1?0:C-1,r:8};');
    out = out.replaceAll('const ownGoal={c:CPU_TEAM===1?0:C-1,r:6};', 'const ownGoal={c:CPU_TEAM===1?0:C-1,r:8};');
    out = out.replaceAll('let best={probability:0,row:6,to:{c:goalC,r:6}};', 'let best={probability:0,row:8,to:{c:goalC,r:8}};');

    out = once(out, 'const C=20,R=13,S=100,MAX=6;', 'const C=26,R=17,S=100,MAX=6;', 'dimensiones C/R');
    out = once(out, 'viewBox="-45 0 2090 1300"', 'viewBox="-45 0 2690 1700"', 'viewBox del campo');
    out = once(out, 'const VB={x:-45,y:0,w:2090,h:1300};', 'const VB={x:-45,y:0,w:2690,h:1700};', 'ventana SVG');
    out = once(out, 'const scale=field.clientWidth/2090;\n  const ballX=(X(ball.c)+45)*scale;', 'const scale=field.clientWidth/2690;\n  const ballX=(X(ball.c)+45)*scale;', 'seguimiento horizontal del balón');
    out = once(out, 'aria-label="Cancha de fútbol 20 por 13 con césped fotorrealista"', 'aria-label="Cancha de fútbol 26 por 17 con césped fotorrealista"', 'etiqueta accesible de cancha');
    out = once(out, 'width="2066.67" height="1331.5"', 'width="2666.67" height="1731.5"', 'textura de cancha');
    out = once(out, "svg('rect',{x:0,y:0,width:1800,height:1100},svg('clipPath',{id:'fu97FieldClip',clipPathUnits:'userSpaceOnUse'},d));", "svg('rect',{x:0,y:0,width:2600,height:1700},svg('clipPath',{id:'fu97FieldClip',clipPathUnits:'userSpaceOnUse'},d));", 'recorte de zonas tácticas del campo');
    out = once(out, '<rect id="gL" class="goal" x="-34" y="500" width="61" height="300"/>', '<rect id="gL" class="goal" x="-34" y="700" width="61" height="300"/>', 'arco izquierdo');
    out = once(out, '<rect id="gR" class="goal" x="1973" y="500" width="61" height="300"/>', '<rect id="gR" class="goal" x="2573" y="700" width="61" height="300"/>', 'arco derecho');
    out = once(out, "gL.setAttribute('x','-40');gL.setAttribute('y','500');gL.setAttribute('width','40');gL.setAttribute('height','300');", "gL.setAttribute('x','-40');gL.setAttribute('y','700');gL.setAttribute('width','40');gL.setAttribute('height','300');", 'arco izquierdo animado');
    out = once(out, "gR.setAttribute('x','2000');gR.setAttribute('y','500');gR.setAttribute('width','40');gR.setAttribute('height','300');", "gR.setAttribute('x','2600');gR.setAttribute('y','700');gR.setAttribute('width','40');gR.setAttribute('height','300');", 'arco derecho animado');
    out = once(out, "L:{gx:27,dir:-1,back:-25,top:500,bot:800},\n  R:{gx:1972,dir:1,back:2025,top:500,bot:800}", "L:{gx:27,dir:-1,back:-25,top:700,bot:1000},\n  R:{gx:2572,dir:1,back:2625,top:700,bot:1000}", 'geometría de red');
    // v98.49: todas las rutinas de remate deben usar las mismas tres casillas
    // lógicas que ocupa la portería gráfica (filas 7, 8 y 9). El escalado genérico
    // anterior había dejado bucles 5–9, dibujando dos objetivos fuera del arco.
    const legacyGoalLoop = 'for(let r=5;r<=9;r++)';
    const goalLoopCount = out.split(legacyGoalLoop).length - 1;
    if (goalLoopCount !== 5) throw new Error(`v98.49 cancelado: se esperaban cinco rutinas de remate con rango antiguo 5–9 y se encontraron ${goalLoopCount}.`);
    out = out.replaceAll(legacyGoalLoop, 'for(let r=7;r<=9;r++)');
    const correctedGoalLoopCount = out.split('for(let r=7;r<=9;r++)').length - 1;
    if (correctedGoalLoopCount < 5 || out.includes(legacyGoalLoop)) throw new Error('v98.49 incompleto: quedaron rutinas de remate con filas fuera del arco.');

    if (!out.includes('const C=26,R=17,S=100,MAX=6;') || !out.includes('viewBox="-45 0 2690 1700"') || !out.includes('c===ownGoalColumn&&r>=7&&r<=9') || !out.includes('for(let r=7;r<=9;r++)') || out.includes('for(let r=5;r<=9;r++)') || !out.includes("width:2600,height:1700},svg('clipPath',{id:'fu97FieldClip'") || !out.includes('href="estadio-ampliado-v98.13.jpg"')) {
      throw new Error('v98.46 incompleto: faltan dimensiones, zona de gol o textura de cancha.');
    }
    report.patches.push('v98.46: cancha ampliada y remapeada a 26×17 en práctica y torneo, con portería centrada en filas 7–9');
    report.patches.push('v98.49: hitboxes, objetivos visibles y cálculos de remate alineados a las tres casillas reales del arco (filas 7–9)');
    report.patches.push('v98.46: posiciones, formaciones, reinicios, umbrales de filas, seguimiento del balón y geometría SVG ajustados');
    return out;
  }

  // v98.69 · cada jugador puede ejecutar exactamente una acción por turno de su equipo.
  // El turno contiene hasta 11 acciones; equipos con expulsados cierran al agotar sus jugadores activos.
  function patchConsecutivePlayerActions(html, report) {
    let out = html;
    const once = (source, find, replacement, label) => {
      const count = source.split(find).length - 1;
      if (count !== 1) throw new Error(`v98.69 no aplicado: ${label}; se esperaba 1 coincidencia y hubo ${count}.`);
      return source.replace(find, replacement);
    };
    const helper = ` function fuV9815PlayerUseCount(id){let count=0;for(const usedId of playedThisTurn)if(usedId===id)count++;return count;}
 function fuV9815CanPlayerAct(id){return fuV9815PlayerUseCount(id)===0;}
 function fuV9815TurnActionLimit(team){const t=team===undefined?turn:team;const active=p.filter(x=>x.t===t).length;return Math.max(1,Math.min(ACTIONS_PER_TURN,active));}
`;
    out = once(out,
      'const ACTIONS_PER_TURN=3; // Versión experimental: tres acciones por equipo y turno.',
      'const ACTIONS_PER_TURN=11; // v98.69: una acción por cada uno de los once jugadores del equipo.',
      'acciones por turno');
    out = once(out, ' function select(id){', helper + ' function select(id){', 'helper de disponibilidad por jugador');
    out = once(out,
      "if(playedThisTurn.includes(id)||(actionNo>1&&id===lastPlayedId)){say('Cada acción del turno debe hacerla un jugador diferente. Elegí otra ficha de tu equipo.');return}",
      "if(!fuV9815CanPlayerAct(id)){say('Este jugador ya realizó su acción de este turno. Elegí un compañero que todavía no haya actuado.');return}",
      'selección manual del jugador');
    out = once(out,
      'p.filter(x=>x.t===team&&!playedThisTurn.includes(x.id)&&!(actionNo>1&&x.id===lastPlayedId))',
      'p.filter(x=>x.t===team&&fuV9815CanPlayerAct(x.id))',
      'candidatos tácticos de la CPU y de la simulación');

    // Todas las rutas de ejecución registran cada acción efectuada; el contador no deduplica jugadores.
    const actionPush = 'if(!playedThisTurn.includes(action.playerId))playedThisTurn.push(action.playerId);';
    const actionPushCount = out.split(actionPush).length - 1;
    if (actionPushCount < 1) throw new Error('v98.69 no aplicado: no se encontró el registro de acción simulada.');
    out = out.replaceAll(actionPush, 'playedThisTurn.push(action.playerId);');
    out = once(out,
      'if(!playedThisTurn.includes(playerId))playedThisTurn.push(playerId);',
      'playedThisTurn.push(playerId);',
      'avance de estado simulado');
    out = once(out,
      'if(selected!==null&&!playedThisTurn.includes(selected))playedThisTurn.push(selected);',
      'if(selected!==null)playedThisTurn.push(selected);',
      'registro de acción real');

    // El evaluador no considera legal una conducción seguida de un remate por el mismo jugador en ese turno.
    const oldImmediateDanger = ` function fuV98ImmediateDanger(a,options,holder){
  if(!a||a.playerId!==holder.id)return 0;
  if(a.kind==='shoot')return Math.max(0,Number(a.goalProbability)||0);
  if(a.kind==='pass'&&a.receiverId!=null){
   if(playedThisTurn.indexOf(a.receiverId)>=0||actionNo>=ACTIONS_PER_TURN)return 0;
   const option=options.find(o=>o.type==='pass-shot'&&o.receiverId===a.receiverId);
   return option?option.probability:0;
  }
  return 0;
 }`;
    const newImmediateDanger = ` function fuV98ImmediateDanger(a,options,holder){
  if(!a||a.playerId!==holder.id)return 0;
  if(a.kind==='shoot')return Math.max(0,Number(a.goalProbability)||0);
  if(a.kind==='pass'&&a.receiverId!=null){
   if(!fuV9815CanPlayerAct(a.receiverId)||actionNo>=fuV9815TurnActionLimit(turn))return 0;
   const option=options.find(o=>o.type==='pass-shot'&&o.receiverId===a.receiverId);
   return option?option.probability:0;
  }
  return 0;
 }`;
    if (out.includes(oldImmediateDanger)) out = out.replace(oldImmediateDanger, newImmediateDanger);
    // El límite de cierre se adapta a expulsiones: diez jugadores disponibles implican diez acciones.
    out = out.replaceAll('if(actionNo<ACTIONS_PER_TURN)', 'if(actionNo<fuV9815TurnActionLimit(turn))');
    out = out.replaceAll('actionNo>=ACTIONS_PER_TURN', 'actionNo>=fuV9815TurnActionLimit(turn)');
    out = out.replaceAll('actionNo<ACTIONS_PER_TURN', 'actionNo<fuV9815TurnActionLimit(turn)');

    const keeperGate = 'playedThisTurn.includes(keeper.id)||(actionNo>1&&keeper.id===lastPlayedId)';
    if (out.includes(keeperGate)) out = out.replaceAll(keeperGate, '!fuV9815CanPlayerAct(keeper.id)');

    // Una ficha usada queda visualmente marcada como agotada hasta el próximo turno.
    const oldActed = 'const acted=x.t===turn&&(playedThisTurn.includes(id)||(actionNo>1&&id===lastPlayedId));';
    if (out.includes(oldActed)) out = out.replace(oldActed,
      'const used=playedThisTurn.reduce((n,v)=>n+(v===id?1:0),0);const acted=x.t===turn&&used>=1;');

    out = out.replace('debe actuar otro jugador del Equipo ${turn}.', 'debe actuar un compañero que todavía no haya usado su acción en el Equipo ${turn}.');
    out = out.replaceAll('debe usar tres jugadores diferentes', 'debe usar jugadores diferentes: cada ficha dispone de una sola acción por turno');
    out = out.replaceAll('Tres acciones por turno, tres jugadores diferentes y duración', 'Once acciones por turno, una por jugador. Duración');
    out = out.replaceAll('11 jugadores por equipo · 3 acciones por turno', '11 jugadores por equipo · 11 acciones por turno, una por jugador');
    out = out.replaceAll('3 acciones por turno', '11 acciones por turno');
    out = out.replaceAll('Tres acciones por turno', 'Once acciones por turno');
    out = out.replaceAll('tres acciones por turno', 'once acciones por turno');
    out = out.replaceAll('turno de tres acciones', 'turno de once acciones');
    out = out.replaceAll('dispone de tres acciones por turno', 'dispone de once acciones por turno');
    out = out.replaceAll('4 acciones por turno', '11 acciones por turno');
    out = out.replaceAll('cuatro acciones por turno', 'once acciones por turno');
    out = out.replaceAll('Cuatro acciones por turno', 'Once acciones por turno');
    out = out.replaceAll('Un mismo jugador puede hacer <strong>dos acciones consecutivas como máximo</strong>. No puede realizar una tercera en el turno. Si interviene otro compañero, el jugador anterior no puede volver a actuar hasta el próximo turno.', 'Cada turno de equipo dispone de hasta <strong>11 acciones, una por cada jugador disponible</strong>. Cada jugador puede actuar una sola vez por turno; no se permiten acciones dobles.');

    if (!out.includes('function fuV9815CanPlayerAct(id){return fuV9815PlayerUseCount(id)===0;}') ||
        !out.includes('const ACTIONS_PER_TURN=11;') ||
        !out.includes('playedThisTurn.push(action.playerId);') ||
        out.includes('puede actuar dos veces solo si son consecutivas') ||
        out.includes('puede repetir un jugador en dos acciones consecutivas') ||
        out.includes('const ACTIONS_PER_TURN=4;')) {
      throw new Error('v98.69 incompleto: quedaron reglas antiguas o el límite de acción única no está instalado.');
    }
    report.patches.push('v98.69: hasta once acciones por turno, una por cada jugador activo del equipo');
    report.patches.push('v98.69: no se permiten acciones dobles; las fichas usadas quedan agotadas hasta el turno siguiente');
    report.patches.push('v98.69: la duración del turno se adapta si hay expulsados');
    return out;
  }

  function patchHoldPositionAndTeamTurnClock(html, report) {
    let out = html;
    const once = (source, find, replacement, label) => {
      const count = source.split(find).length - 1;
      if (count !== 1) throw new Error(`v98.70: ${label}; se esperaba una coincidencia y hubo ${count}.`);
      return source.replace(find, replacement);
    };

    // v98.70: el reloj de partido avanza 30 segundos por turno completo, no por cada acción individual.
    out = once(out,
      '   <label class="match-duration-control" for="matchDuration">\n    <span class="match-duration-label">Duración</span>\n    <select id="matchDuration" aria-label="Duración del partido">\n     <option value="20">Corto</option>\n     <option value="15" selected>Normal</option>\n     <option value="10">Extenso</option>\n    </select>\n    <small id="matchDurationDetails" aria-live="polite">360 acciones por partido</small>\n   </label>',
      '   <div class="match-duration-control fu-fixed-turn-duration" id="turnClockSettings" aria-label="Reloj de partido">\n    <span class="match-duration-label">Reloj del partido</span>\n    <strong class="fu-turn-clock-value">30 segundos por turno completo</strong>\n    <small id="matchDurationDetails" aria-live="polite">180 turnos completos · 90 minutos de juego</small>\n   </div>',
      'selector variable de duración');

    out = once(out, 'let selectedActionSeconds=15;', 'let selectedActionSeconds=30;', 'duración fija inicial');
    out = once(out,
      'let ACTION_GAME_SECONDS=15,HALF_GAME_ACTIONS=HALF_GAME_SECONDS/ACTION_GAME_SECONDS,MATCH_GAME_ACTIONS=HALF_GAME_ACTIONS*2;',
      'let ACTION_GAME_SECONDS=30,HALF_GAME_ACTIONS=HALF_GAME_SECONDS/ACTION_GAME_SECONDS,MATCH_GAME_ACTIONS=HALF_GAME_ACTIONS*2;',
      'segundos por turno completo');
    out = once(out,
      ' function matchDurationActions(seconds){return (90*60)/seconds;}',
      ' function matchDurationActions(seconds){return 180;}',
      'cálculo de cantidad de turnos completos');
    out = once(out,
      ' function configureMatchClock(seconds){ACTION_GAME_SECONDS=Number(seconds);HALF_GAME_ACTIONS=HALF_GAME_SECONDS/ACTION_GAME_SECONDS;MATCH_GAME_ACTIONS=HALF_GAME_ACTIONS*2;}',
      ' function configureMatchClock(seconds){selectedActionSeconds=30;ACTION_GAME_SECONDS=30;HALF_GAME_ACTIONS=HALF_GAME_SECONDS/30;MATCH_GAME_ACTIONS=HALF_GAME_ACTIONS*2;}',
      'configuración fija del reloj');
    out = once(out,
      " function refreshMatchDurationDetails(){const details=$('matchDurationDetails');if(details){const locked=!!$('matchDuration')?.disabled;details.textContent=`${matchDurationActions(selectedActionSeconds)} acciones · ${locked?'duración fijada':'se fija al iniciar'}`;}}",
      " function refreshMatchDurationDetails(){const details=$('matchDurationDetails');if(details)details.textContent='30 segundos por turno completo · 180 turnos totales en 90 minutos';}",
      'descripción del reloj');

    out = once(out,
      ' function advanceMatchClock(){\n  if(matchClockFinished||halftimePaused)return;\n  matchClockActions=Math.min(MATCH_GAME_ACTIONS,matchClockActions+1);',
      " function advanceMatchClock(forceTurnCompletion=false){\n  if(matchClockFinished||halftimePaused)return;\n  if(!forceTurnCompletion&&typeof fuV9815TurnActionLimit==='function'&&actionNo<fuV9815TurnActionLimit(turn))return;\n  matchClockActions=Math.min(MATCH_GAME_ACTIONS,matchClockActions+1);",
      'reloj al cerrar turno');
    out = once(out,
      '  advanceMatchClock();\n  completeManualAction(t);',
      '  advanceMatchClock(false);\n  completeManualAction(t);',
      'avance normal del reloj');
    out = once(out,
      '  advanceMatchClock();\n  completeManualAction(`Gol del Equipo ${team}`);',
      '  advanceMatchClock(true);\n  completeManualAction(`Gol del Equipo ${team}`);',
      'avance del reloj en gol');
    out = once(out,
      '  slowCpuVisuals=false;anim=false;\n  advanceMatchClock();',
      '  slowCpuVisuals=false;anim=false;\n  advanceMatchClock(true);',
      'avance del reloj en falta que cambia turno');
    out = once(out,
      "  if(pendingManualAction){advanceMatchClock();completeManualAction(type==='throw-in'?'Saque de banda preparado':'Saque de arco preparado',type==='throw-in'?'saque de banda':'saque de arco');}",
      "  if(pendingManualAction){advanceMatchClock(true);completeManualAction(type==='throw-in'?'Saque de banda preparado':'Saque de arco preparado',type==='throw-in'?'saque de banda':'saque de arco');}",
      'avance del reloj en reanudación');

    out = once(out,
      '  <section class="match-narrative" id="matchNarrative"',
      '  <div class="fu-keep-position-row" id="fuKeepPositionRow"><button id="fuKeepPositionButton" class="fu-keep-position-button" type="button" disabled>⏸ Mantener posición</button><span id="fuKeepPositionHelp">Seleccioná un jugador disponible para consumir su acción sin moverlo.</span></div>\n  <section class="match-narrative" id="matchNarrative"',
      'botón Mantener posición');

    const drawEnd='\n }\n\n function drawBall(xOverride,yOverride){';
    if (out.split(drawEnd).length-1 !== 1) throw new Error('v98.70: no se encontró una única salida de drawPlayerActionButtons.');
    out = out.replace(drawEnd, `
  const holdButton=$('fuKeepPositionButton'),holdHelp=$('fuKeepPositionHelp');
  if(holdButton){
   const actor=p.find(z=>z.id===selected);
   const dtState=window.FUTBOL_UNICO_DIRECTOR&&typeof window.FUTBOL_UNICO_DIRECTOR.getState==='function'?window.FUTBOL_UNICO_DIRECTOR.getState():null;
   const compulsory=!!(actionNo===1&&(kickoffPassRequired||(freeKickRequiredId!==null&&freeKickAwardedTeam===turn)||(restartPassOnlyId!==null)));
   const ready=!!(actor&&actor.t===turn&&!blocked&&!anim&&!brainTrainingRunning&&!cpuSearching&&!isCpuTurn()&&!matchClockFinished&&typeof fuV9815CanPlayerAct==='function'&&fuV9815CanPlayerAct(actor.id)&&!compulsory&&!(dtState&&dtState.active));
   holdButton.disabled=!ready;
   holdButton.textContent=actor&&actor.t===turn?'⏸ Mantener posición · Jugador '+actor.n:'⏸ Mantener posición';
   holdButton.setAttribute('aria-label',actor&&actor.t===turn?'Jugador '+actor.n+': mantener posición y consumir su acción':'Mantener posición');
   holdButton.title=compulsory?'La reanudación obliga a pasar o rematar en esta acción.':'Consume la acción de la ficha seleccionada sin moverla.';
   if(holdHelp)holdHelp.textContent=actor&&actor.t===turn?(ready?'Consume una acción; la ficha y el balón permanecen donde están.':'Esta ficha no puede usar Mantener posición en este momento.'):'Seleccioná una ficha disponible; cada jugador tiene una sola acción por turno.';
  }
 }

 function drawBall(xOverride,yOverride){`);

    const functionMarker=' function findDisplacement(r,dc,dr,id){';
    const holdFn=` function fuV970KeepSelectedPosition(){
  if(matchClockFinished||anim||brainTrainingRunning||cpuSearching||isCpuTurn())return;
  const actor=p.find(z=>z.id===selected);
  if(!actor||actor.t!==turn){say('Primero seleccioná un jugador disponible de tu equipo.');return;}
  if(typeof fuV9815CanPlayerAct!=='function'||!fuV9815CanPlayerAct(actor.id)){say('Ese jugador ya utilizó su acción en este turno.');return;}
  if(actionNo===1&&(kickoffPassRequired||(freeKickRequiredId!==null&&freeKickAwardedTeam===turn)||(restartPassOnlyId!==null))){say('Esta reanudación exige resolver el pase o remate inicial antes de mantener posición.');return;}
  const dtState=window.FUTBOL_UNICO_DIRECTOR&&typeof window.FUTBOL_UNICO_DIRECTOR.getState==='function'?window.FUTBOL_UNICO_DIRECTOR.getState():null;
  if(dtState&&dtState.active){say('Pausá el Modo Director Técnico para usar Mantener posición manualmente.');return;}
  beginManualAction('hold',actor,{reason:'Mantener posición',position:{c:actor.c,r:actor.r}});
  finish('Jugador '+actor.n+' mantiene su posición. La acción fue consumida sin mover la ficha.');
 }
`;
    out = once(out,functionMarker,holdFn+functionMarker,'acción Mantener posición');
    const initMarker=" buildCells();if(typeof setupTournamentEngineUi==='function')setupTournamentEngineUi();resetMatchClock();";
    out = once(out,initMarker," const fuKeepPositionButton=$('fuKeepPositionButton');if(fuKeepPositionButton)fuKeepPositionButton.addEventListener('click',fuV970KeepSelectedPosition);\n buildCells();if(typeof setupTournamentEngineUi==='function')setupTournamentEngineUi();resetMatchClock();",'manejador de Mantener posición');

    out = out.replaceAll('turno de tres acciones', 'turno de equipo con una acción por jugador disponible');
    out = out.replaceAll('tres acciones por turno, tres jugadores diferentes y duración', 'hasta once acciones por turno, una por jugador, con 30 segundos de reloj por turno completo');
    out = out.replaceAll('cada equipo dispone de tres acciones por turno y debe usar tres jugadores diferentes', 'cada equipo dispone de hasta once acciones por turno, una por cada jugador disponible; el reloj avanza 30 segundos al completar el turno');
    out = out.replaceAll('Duración normal predeterminada: 15 segundos por acción, ${MATCH_GAME_ACTIONS} acciones en 90 minutos. Podés elegir Corto (20 s/acción, 270 acciones), Normal (15 s, 360) o Extenso (10 s, 540). La duración queda fijada al comenzar la primera acción y se habilita de nuevo al crear una nueva partida.', 'Reloj fijo: 30 segundos de juego por turno completo (180 turnos en 90 minutos). Mantener posición consume la acción de un jugador sin desplazarlo.');
    out = out.replaceAll('Nueva partida experimental. Tres acciones por turno, tres jugadores diferentes y duración ${matchDurationName(ACTION_GAME_SECONDS)}: ${ACTION_GAME_SECONDS} segundos por acción (${MATCH_GAME_ACTIONS} acciones en 90 minutos). Elegí duración antes de la primera acción.', 'Nueva partida. Cada jugador disponible tiene una acción por turno. El reloj de partido avanza 30 segundos cuando se completa el turno del equipo; el partido dura 90 minutos.');

    const styles='<style id="fu-v98-70-hold-clock-css">\n.fu-fixed-turn-duration .match-duration-label{grid-column:1/-1}.fu-fixed-turn-duration .fu-turn-clock-value{grid-column:1/-1;display:block;color:#eaf5ec;font-size:12px;font-weight:950;line-height:1.35}.fu-fixed-turn-duration small{grid-column:1/-1}.fu-keep-position-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:7px 0 9px;padding:9px 11px;border:1px solid rgba(160,195,150,.25);border-radius:10px;background:linear-gradient(135deg,rgba(20,38,27,.92),rgba(12,19,16,.92));color:#dce9dd;font:600 11px/1.4 system-ui,sans-serif}.fu-keep-position-button{flex:0 1 auto;min-width:220px;min-height:38px;padding:8px 13px;border:1px solid #6c914f;border-radius:8px;background:linear-gradient(135deg,#2a482e,#172d1d);color:#eaffd6;font:900 11px/1.25 system-ui,sans-serif;cursor:pointer}.fu-keep-position-button:hover:not(:disabled){border-color:#c8ff2e;background:#314d27}.fu-keep-position-button:disabled{opacity:.45;cursor:not-allowed;filter:saturate(.35)}.fu-keep-position-row span{flex:1 1 240px;min-width:0;color:#aabaaa;font-size:10px}.fu-keep-position-row button:focus-visible{outline:2px solid #c8ff2e;outline-offset:3px}@media(max-width:680px){.fu-keep-position-row{align-items:stretch;flex-direction:column;gap:6px;margin:6px 0;padding:8px}.fu-keep-position-button{width:100%;min-width:0;min-height:42px}.fu-keep-position-row span{flex:auto}}\n</style></head>';
    out = once(out, '</head>', styles, 'estilos del botón y reloj');
    report.patches.push('v98.70: acción Mantener posición consume la acción sin mover la ficha y la CPU del Director Técnico puede elegirla cuando conviene');
    report.patches.push('v98.70: reloj fijo a 30 segundos por turno completo; 180 turnos en 90 minutos y descanso después del turno 90');
    return out;
  }

  function patchConsecutiveActionRules(html, report) {
    // v98.48: mantiene la cancha 26×17 y no anuncia movimiento autónomo retirado.
    html = html.replace('20 columnas por 13 filas', '26 columnas por 17 filas');
    html = html.replace('diez casillas', 'doce casillas');
    html = html.replace('Cada turno de equipo tiene <strong>tres acciones</strong>.', 'Cada turno de equipo tiene <strong>hasta once acciones, una por jugador disponible</strong>.');
    html = html.replace('Un mismo jugador puede hacer <strong>dos acciones consecutivas como máximo</strong>. No puede realizar una tercera en el turno. Si interviene otro compañero, el jugador anterior no puede volver a actuar hasta el próximo turno.', 'Cada turno de equipo dispone de hasta <strong>11 acciones, una por cada jugador disponible</strong>. Cada jugador puede actuar una sola vez por turno; no se permiten acciones dobles.');
    html = html.replace('Antes de comenzar se elige la velocidad del reloj: <strong>Corto</strong> avanza más tiempo por acción, <strong>Normal</strong> usa un ritmo intermedio y <strong>Extenso</strong> avanza menos tiempo por acción. La duración oficial del partido es la misma en las tres opciones.', 'El reloj de partido avanza <strong>30 segundos al completar el turno entero de un equipo</strong>. Un turno tiene hasta once acciones, una por cada jugador disponible, y el partido completo dura 90 minutos de juego.');
    html = html.replace('Cada acción válida hace avanzar el reloj según la opción elegida. Una acción rechazada antes de ejecutarse no consume tiempo.', 'El reloj avanza al cerrar el turno completo. Una acción rechazada no consume acción ni adelanta el reloj; elegir <strong>Mantener posición</strong> sí consume la acción del jugador seleccionado.');
    html = html.replace(
      'Cuanto más largo sea el pase o el remate, más difícil resulta acertar el destino. La capacidad propia del dorsal también influye; en el remate, importa además el ángulo desde el que se patea.',
      'Los pases y remates dirigidos a una, dos o tres casillas de distancia tienen precisión exacta de base. Desde la cuarta casilla, la precisión disminuye progresivamente según la distancia y la capacidad del dorsal; en el remate también influye el ángulo desde el que se patea.'
    );
    html = html.replace(
      'Apuntar a una casilla no garantiza que la pelota llegue allí: un pase puede desviarse o quedar corto o largo, y un remate puede irse hacia otra casilla.',
      'Desde la cuarta casilla, apuntar no garantiza que la pelota llegue al destino: un pase puede desviarse o quedar corto o largo, y un remate puede irse hacia otra casilla. La precisión exacta en las tres primeras casillas no evita que un rival intercepte la trayectoria.'
    );
    const required = [
      'id="officialRulesContent"',
      '26 columnas por 17 filas',
      'una por cada jugador disponible',
      'una sola vez por turno',
      'doce casillas',
      'precisión exacta de base',
      'segunda falta sancionada',
      'segunda tarjeta amarilla',
      'no hay córner separado'
    ];
    const missing = required.filter(value => !html.includes(value));
    if (missing.length) throw new Error('Reglamento oficial incompleto: faltan referencias vigentes (' + missing.join(', ') + ').');
    if (/CPU/i.test(html.slice(html.indexOf('id="officialRulesContent"'), html.indexOf('id="officialRulesContent"') + 30000))) {
      throw new Error('El reglamento oficial no debe incluir explicaciones sobre la CPU.');
    }
    report.patches.push('v98.23: reglamento oficial reescrito de forma conceptual y sincronizado con las reglas vigentes');
    report.patches.push('v98.69: reglamento actualizado a una acción por jugador y hasta once acciones por turno');
    report.patches.push('v98.23: eliminadas tablas de porcentajes y referencias a reglas antiguas');
    return html;
  }

  function patchDisciplineRules(html, report) {
    const foulBranches = [
      ["  if(foulChance>0&&tacticalRandom()<foulChance){prepareFreeKick(a,r,tipo,foulChance);return;}", "  if(a.n!==1&&foulChance>0&&tacticalRandom()<foulChance){fuRecordDisciplinaryCard(a);prepareFreeKick(a,r,tipo,foulChance);return;}"],
      ["  if(foulChance>0&&Math.random()<foulChance){prepareFreeKick(a,r,tipo,foulChance);return;}", "  if(a.n!==1&&foulChance>0&&Math.random()<foulChance){fuRecordDisciplinaryCard(a);prepareFreeKick(a,r,tipo,foulChance);return;}"]
    ];
    const foulBranch = foulBranches.find(pair => html.includes(pair[0]));
    if (foulBranch) {
      html = html.replace(foulBranch[0], foulBranch[1]);
      report.patches.push("v98.22: falta real sancionada agrega amarilla; segunda amarilla expulsa; arquero exento");
    } else report.warnings.push("v98.22: no se encontró el punto de resolución de faltas reales; disciplina no instalada");
    const finishFoul = "  if(halftimePending){enterHalftimePause();return;}\n  maybeScheduleCpuAction(700);";
    const finishFoulDisciplined = "  if(halftimePending){fuApplyPendingDismissal();enterHalftimePause();return;}\n  fuApplyPendingDismissal();\n  maybeScheduleCpuAction(700);";
    if (html.includes(finishFoul)) {
      html = html.replace(finishFoul, finishFoulDisciplined);
      report.patches.push("v98.22: expulsión aplicada al terminar la falta y antes de la siguiente acción");
    } else report.warnings.push("v98.22: no se encontró el cierre de la falta rápida para aplicar expulsión");
    return html;
  }

  function patchGeneralCpuHoldPosition(html, report) {
    const runtimePatch = String.raw`
 // ==================== v98.71 · MANTENER POSICIÓN EN LA IA GENERAL ====================
 // Añade la acción sin desplazamiento a la lista general de decisiones de ambos equipos.
 // La simulación consume la acción del jugador; no modifica coordenadas ni posesión.
 function fuV971HoldIsForbidden(){
  return actionNo===1&&(!!kickoffPassRequired||
   (typeof freeKickRequiredId!=='undefined'&&freeKickRequiredId!==null&&typeof freeKickAwardedTeam!=='undefined'&&freeKickAwardedTeam===turn)||
   (typeof restartPassOnlyId!=='undefined'&&restartPassOnlyId!==null));
 }
 function fuV971CanAct(id){
  if(typeof fuV9815CanPlayerAct==='function')return fuV9815CanPlayerAct(id);
  return Array.isArray(playedThisTurn)&&!playedThisTurn.includes(id);
 }
 function fuV971HoldScore(actor,existingActions,team){
  const holder=owner();
  // Nunca sacrifica la acción del poseedor para dejar el balón quieto sin motivo táctico.
  if(holder&&holder.id===actor.id)return -75;
  let value=-1.5,target=null;
  // Si el Equipo 1 está en modo DT, respeta la formación elegida en su panel.
  try{
   if(team===1&&typeof fuDTFormationTarget==='function'&&typeof fuDTActive!=='undefined'&&fuDTActive){
    const cfg=(typeof fuDTRunningConfig!=='undefined'&&fuDTRunningConfig)||(typeof fuDTConfig!=='undefined'?fuDTConfig:null);
    if(cfg){const dtTarget=fuDTFormationTarget(actor,cfg);if(dtTarget)target={depth:dtTarget.depth,row:dtTarget.row};}
   }
   if(!target&&typeof fuV983Anchor==='function')target=fuV983Anchor(team,actor,p,ball,0);
  }catch(_e){}
  if(!target){
   const base=Array.isArray(FORMATION)?FORMATION.find(row=>row[0]===team&&row[1]===actor.n):null;
   if(base)target={depth:team===1?base[2]:C-1-base[2],row:base[3]};
  }
  if(target){
   const depth=team===1?actor.c:C-1-actor.c;
   const deviation=Math.abs(depth-target.depth)+Math.abs(actor.r-target.row)*.62;
   value+=Math.max(-5,Math.min(14,13-deviation*4.4));
  }
  if(holder&&holder.t!==team){
   const distance=Math.max(Math.abs(actor.c-holder.c),Math.abs(actor.r-holder.r));
   if(distance<=1)value-=15;
   else if(distance<=3)value-=Math.max(2,8-distance*1.8);
   const ownGoal=team===1?0:C-1;
   const between=(actor.c-holder.c)*(ownGoal-holder.c)>0&&Math.abs(actor.r-holder.r)<=3;
   if(between&&[2,3,4,5,6].includes(actor.n))value+=4.5;
  }
  if(ball.owner===null){
   const ownAvailable=p.filter(z=>z.t===team&&fuV971CanAct(z.id));
   const d=Math.max(Math.abs(actor.c-ball.c),Math.abs(actor.r-ball.r));
   const nearest=ownAvailable.length?Math.min(...ownAvailable.map(z=>Math.max(Math.abs(z.c-ball.c),Math.abs(z.r-ball.r)))):99;
   if(d<=3&&d<=nearest)value-=13;
   else if(d<=2)value-=4;
  }
  const bestAlternative=existingActions.filter(a=>a&&a.playerId===actor.id&&['move','carry','collect','duel'].includes(a.kind))
   .reduce((best,a)=>Math.max(best,Number(a.score)||0),-Infinity);
  if(bestAlternative>42)value=Math.min(value,bestAlternative-38);
  else if(bestAlternative>25)value=Math.min(value,bestAlternative-22);
  return Math.max(-55,Math.min(17,value));
 }
 const fuV971PreviousGeneralTacticalCandidates=tacticalCandidates;
 tacticalCandidates=function(){
  const actions=fuV971PreviousGeneralTacticalCandidates();
  if(!Array.isArray(actions)||fuV971HoldIsForbidden())return actions;
  const team=turn,seen=new Set(actions.filter(a=>a&&a.kind==='hold').map(a=>a.playerId));
  const actors=p.filter(actor=>actor&&actor.t===team&&fuV971CanAct(actor.id));
  for(const actor of actors){
   if(seen.has(actor.id))continue;
   const cell={c:actor.c,r:actor.r};
   const score=fuV971HoldScore(actor,actions,team);
   actions.push({kind:'hold',mode:'hold',playerId:actor.id,player:actor,from:cell,to:{...cell},label:'Mantener posición · Jugador '+actor.n,score,holdScore:score});
  }
  return actions;
 };
 const fuV971PreviousGeneralSimulateOneAction=simulateOneAction;
 simulateOneAction=function(action,goals){
  if(action&&action.kind==='hold'){
   const actor=p.find(z=>z.id===action.playerId);
   if(!actor||actor.t!==turn||!fuV971CanAct(actor.id)||fuV971HoldIsForbidden())return 'blocked';
   return false;
  }
  return fuV971PreviousGeneralSimulateOneAction.apply(this,arguments);
 };
 const fuV971PreviousGeneralDispatchCpuAction=dispatchCpuAction;
 dispatchCpuAction=function(action){
  if(!action||action.kind!=='hold')return fuV971PreviousGeneralDispatchCpuAction.apply(this,arguments);
  const actor=p.find(z=>z.id===action.playerId);
  if(!actor||turn!==CPU_TEAM||actor.t!==turn||!cpuAutoEnabled||anim||matchClockFinished||halftimePaused||!fuV971CanAct(actor.id)||fuV971HoldIsForbidden())return false;
  selected=actor.id;mode='player';slowCpuVisuals=true;
  if(bp)bp.classList.add('primary');if(bb)bb.classList.remove('primary');
  drawPlayers();refresh();cpuLastActionLabel='Mantener posición · Jugador '+actor.n;
  beginManualAction('hold',actor,{reason:'Mantener posición (CPU)',position:{c:actor.c,r:actor.r},strategicChoice:true});
  finish('CPU: Jugador '+actor.n+' mantiene su posición. La acción fue consumida sin desplazar la ficha.');
  return true;
 };
 window.FUTBOL_UNICO_HOLD_AI={version:'98.71',isAvailable:()=>true,score:fuV971HoldScore};
 // ==================== FIN v98.71 · MANTENER POSICIÓN EN LA IA GENERAL ====================
`;
    try { new Function(runtimePatch); }
    catch (error) { throw new Error('v98.71 no aplicado: la lógica general de Mantener posición no supera sintaxis: ' + String(error)); }
    // El parche se agrega dentro del IIFE principal, después de los wrappers de IA y Director Técnico,
    // para que ambos equipos compartan la lista de acciones, la simulación y el dispatcher reales.
    const closing = html.lastIndexOf('})();');
    if (closing < 0) throw new Error('v98.71 no aplicado: no se encontró el cierre del motor para conectar Mantener posición a la IA.');
    if (html.includes('FUTBOL_UNICO_HOLD_AI={version:\'98.71\'')) {
      report.patches.push('v98.71: lógica general de Mantener posición ya estaba instalada');
      return html;
    }
    html = html.slice(0, closing) + '\n' + runtimePatch + '\n' + html.slice(closing);
    report.patches.push('v98.71: Mantener posición disponible como candidata estratégica en la IA general de ambos equipos');
    report.patches.push('v98.71: búsqueda simulada consume la acción sin modificar posición, posesión ni balón');
    report.patches.push('v98.71: dispatcher real de CPU ejecuta y registra Mantener posición dentro del turno de 11 acciones');
    report.patches.push('v98.71: el Director Técnico reutiliza la candidata general sin duplicar opciones por jugador');
    return html;
  }

  async function loadGamePage(requestedPage) {
    const sourcePath = PAGE_PATHS[requestedPage];
    const enginePage = requestedPage === "practice" || requestedPage === "match";
    const report = { baselineCommit: BASELINE_COMMIT, sourcePath, enginePage, patches: [], warnings: [] };
    let html = await fetchOriginal(sourcePath);
    const expectedBlob = BASELINE_BLOBS[sourcePath];
    let actualBlob = null;
    try { actualBlob = await gitBlobSha1(html); }
    catch (error) { report.warnings.push(`No se pudo ejecutar la verificación SHA-1: ${String(error)}`); }
    if (actualBlob && actualBlob !== expectedBlob) report.warnings.push(`El contenido recibido no coincide con el blob protegido ${expectedBlob}.`);
    else if (actualBlob) report.patches.push("integridad SHA-1 de la base verificada");
    // Recursos comunes compartidos: reduce duplicación del paquete sin cambiar las bases HTML protegidas.
    // Las páginas de partido usan baseline/shared/escudos y baseline/shared/jugadores desde ambas rutas.
    if (enginePage) {
      html = html.replaceAll('src="./escudos/${tournamentClub.id}.png"', 'src="../shared/escudos/${tournamentClub.id}.png"');
      html = html.replaceAll('src="./escudos/${tournamentOpponent.id}.png"', 'src="../shared/escudos/${tournamentOpponent.id}.png"');
      report.patches.push("v98.59: escudos y sprites locales compartidos por Práctica y Torneo");
    }
    if (requestedPage === "tournament") {
      html = html.replaceAll('src="./escudos/${escapeHtml(c.id)}.png"', 'src="../shared/escudos/${escapeHtml(c.id)}.png"');
      html = html.replaceAll('./escudos/${my.id}.png', '../shared/escudos/${my.id}.png');
      report.patches.push("v98.59: galería de Torneo carga escudos desde la carpeta local compartida");
    }
    html = patchCleanPublicText(html, requestedPage, report);
    if (requestedPage === "home") html = patchConsecutiveActionRules(html, report);
    if (requestedPage === "tournament") html = patchTournamentCpuProfiles(html, report);
    if (enginePage) html = patchMatchIntro(html, report);
    html = patchInternalNavigation(html, report);
    html = patchEmbeddedLocation(html, report);
    if (enginePage) { html = patchKeeperGoalState(html, report); html = patchSimulationParity(html, report); html = patchProgressiveActionResolution(html, report); html = patchShortPassLooseBall(html, report); html = patchSimulationFreeKick(html, report); html = injectEnginePatch(html, report); html = patchLongRangeAndDiagonals(html, report); }
    if (enginePage) html = patchExpandedStadium(html, report);
    if (enginePage) html = patchPitch26x17(html, report);
    if (enginePage) html = patchConsecutivePlayerActions(html, report);
    if (enginePage) html = patchHoldPositionAndTeamTurnClock(html, report);
    if (enginePage) html = patchGeneralCpuHoldPosition(html, report);
    if (enginePage) html = patchDisciplineRules(html, report);
    if (enginePage && html.includes('3 acciones por turno')) {
      html = html.replaceAll('3 acciones por turno', '11 acciones por turno');
      report.patches.push('v98.69: la información visible del partido coincide con las once acciones por turno del motor');
    }
    const baseHref = new URL(`baseline/${PAGE_BASES[requestedPage]}`, BASE).href;
    html = injectBeforeClosingTag(html, "</head>", `<base href="${baseHref}"><style id="fu-v96-visual-layer">${enginePage ? V96_GAME_STYLES : V96_SHELL_STYLES}</style>`);
    if (enginePage) html = injectBeforeClosingTag(html, "</head>", `<style id="fu-v98-director-mode">${V98_DIRECTOR_MODE_STYLES}</style>`);
    // Estilos del rediseño v97: sólo en la pantalla de partido y sólo si su capa JS quedó instalada.
    if (enginePage && report.visualLayer) html = injectBeforeClosingTag(html, "</head>", `<style id="fu-v97-match-layer">${V97_MATCH_STYLES}</style>`);
    // La cabecera y navegación oficiales viven en la página contenedora.
    // Ocultar la cabecera propia de todas las páginas cargadas dentro del iframe
    // evita duplicar la navegación al entrar desde Inicio o desde el menú superior.
    if (requestedPage !== "home") {
      html = injectBeforeClosingTag(html, "</head>", `<style id="fu-single-navigation">
      /* Oculta la navegación del portal si la página de juego vuelve a incluirla.
         El selector anterior .topbar no coincidía con la clase real del encabezado. */
      .fu-shell-header, header.fu-shell-header, .fu-shell-nav { display: none !important; }
      .topbar, header.topbar { display: none !important; }
    </style>`);
    }
    html = injectBeforeClosingTag(html, "</head>", `<style id="fu-v98-mobile-views">${V98_MOBILE_VIEWS_STYLES}</style>`);
    html = injectBeforeClosingTag(html, "</body>", bridgeScript(requestedPage));
    html = html.replace(/<title>Fútbol Único · v95[^<]*<\/title>/g, "<title>Fútbol Único · Partido táctico</title>")
      .replace(/PRÁCTICA Y TORNEO v95/g, "Fútbol Único · Partido táctico")
      .replace(/Práctica v91/g, "Práctica libre");
    return { html, report };
  }
  function showStatus(kind, title, detail) {
    statusTitle.textContent = title;
    statusText.textContent = detail;
    statusDot.className = kind;
  }
  function updateNavigation() {
    document.querySelectorAll("[data-page]").forEach((button) => {
      const active = button.getAttribute("data-page") === page || (page === "match" && button.getAttribute("data-page") === "tournament");
      button.classList.toggle("active", active);
      if (active) button.setAttribute("aria-current", "page"); else button.removeAttribute("aria-current");
    });
  }
  function navigate(next, tournamentQuery) {
    if (!PAGE_LABELS[next]) return;
    const url = new URL(window.location.href);
    url.search = "";
    if (tournamentQuery) new URLSearchParams(tournamentQuery).forEach((value,key) => url.searchParams.set(key,value));
    if (next !== "home") url.searchParams.set("page", next);
    window.history.pushState({}, "", url);
    page = next;
    loadAttempt++;
    renderPage();
  }
  function setLoading() {
    stage.setAttribute("aria-busy", "true");
    loading.hidden = false; errorPanel.hidden = true;
    loading.querySelector("strong").textContent = `Preparando ${PAGE_LABELS[page]}`;
    showStatus("loading", "Preparando juego", "Cargando la cancha.");
    if (activeIframe) activeIframe.remove(); activeIframe = null;
    stage.querySelector('.fu-multiplayer-root')?.remove();
  }
  async function renderPage() {
    const attempt = loadAttempt;
    updateNavigation(); setLoading();
    if (page === "multiplayer") {
      try {
        const root = document.createElement("div");
        root.className = "fu-multiplayer-root";
        root.setAttribute("aria-label", "Multijugador");
        stage.appendChild(root);
        if (!window.FU_MULTIPLAYER || typeof window.FU_MULTIPLAYER.mount !== "function") throw new Error("No se pudo cargar el módulo multijugador.");
        window.FU_MULTIPLAYER.mount(root);
        if (attempt !== loadAttempt) return;
        loading.hidden = true; errorPanel.hidden = true; stage.setAttribute("aria-busy", "false");
        showStatus("ready", "Multijugador", "");
      } catch (reason) {
        stage.setAttribute("aria-busy", "false"); loading.hidden = true; errorPanel.hidden = false;
        $("fuErrorText").textContent = reason instanceof Error ? reason.message : String(reason);
        showStatus("error", "Error", "No se pudo abrir el multijugador.");
      }
      return;
    }
    try {
      const result = await loadGamePage(page);
      if (attempt !== loadAttempt) return;
      activeReport = result.report; latestAudit = null;
      activeIframe = document.createElement("iframe");
      activeIframe.className = "fu-game-frame";
      activeIframe.title = `Fútbol Único · ${PAGE_LABELS[page]}`;
      activeIframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups allow-modals");
      activeIframe.setAttribute("allow", "fullscreen"); activeIframe.allowFullscreen = true;
      activeIframe.srcdoc = result.html;
      activeIframe.addEventListener("load", () => {
        if (attempt !== loadAttempt) return;
        loading.hidden = true; errorPanel.hidden = true; stage.setAttribute("aria-busy", "false");
        showStatus("ready", "Juego listo", "Ya podés jugar.");
        if (new URLSearchParams(window.location.search).has("multiplayer_match_id")) setupOnlineMatch().catch(error=>showStatus("error","Error de conexión",error?.message||"No se pudo conectar la cancha con Supabase."));
      }, { once: true });
      stage.appendChild(activeIframe);
    } catch (reason) {
      if (attempt !== loadAttempt) return;
      stage.setAttribute("aria-busy", "false"); loading.hidden = true; errorPanel.hidden = false;
      $("fuErrorText").textContent = reason instanceof Error ? reason.message : String(reason);
      showStatus("error", "Error de carga", "Revisá los archivos de publicación.");
    }
  }
  window.addEventListener("popstate", () => { page = pageFromUrl(); loadAttempt++; renderPage(); });
  let onlineSupabase = null, onlineMatchId = null, onlineUserId = null, onlineTurnNumber = 0, onlineSaving = false, onlinePolling = null;
  async function setupOnlineMatch() {
    const params = new URLSearchParams(window.location.search);
    const requestedMatchId = params.get("multiplayer_match_id");
    if (!requestedMatchId) return;
    if (!window.FU_SUPABASE_CONFIG || !window.supabase?.createClient) { showStatus('error','Sin conexión','Falta la configuración de Supabase en esta publicación.'); return; }
    if (onlineSupabase && onlineMatchId === requestedMatchId) return;
    onlineMatchId = requestedMatchId;
    onlineSupabase = window.supabase.createClient(window.FU_SUPABASE_CONFIG.url, window.FU_SUPABASE_CONFIG.anonKey, {auth:{persistSession:true,autoRefreshToken:true}});
    const {data:{session}} = await onlineSupabase.auth.getSession();
    if (!session?.user) { showStatus("error","Iniciá sesión","Volvé a Multijugador para ingresar."); return; }
    onlineUserId = session.user.id;
    const {data:match,error} = await onlineSupabase.from("multiplayer_matches").select("id,player1_id,player2_id,status,game_state,turn_number,current_turn_player_id").eq("id",onlineMatchId).single();
    if(error || !match || !["accepted","playing"].includes(match.status)) { showStatus("error","No se pudo conectar",error?.message||"El duelo ya no está activo. Ejecutá la migración SQL v98.39 y volvé a abrir la cancha."); return; }
    const team = match.player1_id === onlineUserId ? 1 : match.player2_id === onlineUserId ? 2 : 0;
    if(!team){showStatus("error","Acceso denegado","Esta partida pertenece a otros usuarios.");return;}
    onlineTurnNumber = Number(match.turn_number)||0;
    const turnOwner = match.current_turn_player_id === match.player2_id ? 2 : 1;
    if(match.game_state?.engineState && activeIframe?.contentWindow){activeIframe.contentWindow.postMessage({type:"fu:online-apply",matchId:onlineMatchId,state:match.game_state.engineState},"*");}
    activeIframe?.contentWindow?.postMessage({type:"fu:online-role",matchId:onlineMatchId,team,turnOwner},"*");
    showStatus("ready","Partida conectada",team===turnOwner?"Conectado con Supabase. Es tu turno.":"Conectado con Supabase. Esperá la jugada del rival.");
    if(onlinePolling)clearInterval(onlinePolling);
    onlinePolling=setInterval(async()=>{try{const {data:m,error}=await onlineSupabase.from("multiplayer_matches").select("player1_id,player2_id,game_state,turn_number,current_turn_player_id,status").eq("id",onlineMatchId).single();if(error)throw error;if(m&&["accepted","playing"].includes(m.status)){const owner=m.current_turn_player_id===m.player2_id?2:1;if(Number(m.turn_number)>onlineTurnNumber){onlineTurnNumber=Number(m.turn_number);if(m.game_state?.engineState)activeIframe?.contentWindow?.postMessage({type:"fu:online-apply",matchId:onlineMatchId,state:m.game_state.engineState},"*");}activeIframe?.contentWindow?.postMessage({type:"fu:online-role",matchId:onlineMatchId,team:onlineUserId===m.player1_id?1:2,turnOwner:owner},"*");}}catch(_){ }},1800);
  }
  window.addEventListener("message", async (event) => {
    if (!event.data) return;
    if (event.source === window && event.data.type === "fu:play-multiplayer" && typeof event.data.matchId === "string") { navigate("match", `multiplayer_match_id=${encodeURIComponent(event.data.matchId)}`); return; }
    if (event.source !== activeIframe?.contentWindow) return;
    if (event.data.type === "fu:online-engine-ready" && onlineMatchId && event.data.matchId === onlineMatchId) { setupOnlineMatch().catch(()=>showStatus("error","Error online","No se pudo conectar la partida con Supabase. Revisá la migración v98.39 y la consola.")); return; }
    if (event.data.type === "fu:online-state" && onlineSupabase && !onlineSaving && event.data.matchId === onlineMatchId && event.data.team) {
      onlineSaving = true;
      activeIframe?.contentWindow?.postMessage({type:"fu:online-saving",matchId:onlineMatchId,value:true},"*");
      try {
        const {data:result,error} = await onlineSupabase.rpc("fu_commit_online_state", {p_match_id:onlineMatchId,p_expected_turn_number:onlineTurnNumber,p_state:event.data.state,p_action:{state:event.data.state.state,team:event.data.team}});
        if(error) throw error;
        onlineTurnNumber = Number(result?.turn_number ?? (onlineTurnNumber+1));
      } catch(error) {
        try { const {data:m}=await onlineSupabase.from("multiplayer_matches").select("game_state,turn_number").eq("id",onlineMatchId).single(); if(m){onlineTurnNumber=Number(m.turn_number)||0;if(m.game_state?.engineState)activeIframe?.contentWindow?.postMessage({type:"fu:online-apply",matchId:onlineMatchId,state:m.game_state.engineState},"*");} } catch(_) {}
        showStatus("error","Jugada no guardada",error.message||"Se rechazó la jugada; se recuperó el último estado guardado.");
      }
      finally { onlineSaving = false; activeIframe?.contentWindow?.postMessage({type:"fu:online-saving",matchId:onlineMatchId,value:false},"*"); }
      return;
    }
    if (event.data.type === "fu:audit" && event.data.report) {
      latestAudit = { passed: Number(event.data.report.passed) || 0, total: Number(event.data.report.total) || 0 };
      showStatus("ready", "Juego listo", "Ya podés jugar.");
      return;
    }
    if (event.data.type === "fu:navigate" && PAGE_LABELS[event.data.page]) navigate(event.data.page, typeof event.data.query === "string" ? event.data.query : undefined);
  });
  document.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => navigate(button.getAttribute("data-page"))));
  $("fuBrand").addEventListener("click", () => navigate("home"));
  $("fuRetry").addEventListener("click", () => { loadAttempt++; renderPage(); });
  renderPage();
})();
