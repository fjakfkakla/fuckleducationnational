/* Glyphes pleins des matières : grille 24, fill currentColor, les creux sont de vrais trous (masque). */
window.GLYPHES = {
  maths: '<path d="M3.4 21.6a1.4 1.4 0 0 1-1-2.4L19.2 2.4a1.4 1.4 0 0 1 2.4 1V20.2a1.4 1.4 0 0 1-1.4 1.4H3.4z"/><path class="cut" d="M9.6 18.6h8.6a.4.4 0 0 0 .4-.4V9.6L9.6 18.6z"/>',
  pc: '<rect x="7.6" y="1.2" width="8.8" height="2.6" rx="1.3"/><path d="M9.6 3.4h4.8v5l6.6 11.2a2.3 2.3 0 0 1-2 3.5H5a2.3 2.3 0 0 1-2-3.5L9.6 8.4z"/><circle class="cut" cx="12.4" cy="16.6" r="1.7"/><circle class="cut" cx="9" cy="19.2" r="1.1"/>',
  svt: '<path d="M21 2.6c-10.1-.6-17.5 5.4-18 15-.1 1.5 1.1 2.8 2.6 2.7C15.3 19.8 21.3 12.6 21 2.6z"/><path class="line" d="M5.4 19.9 16.2 8.4"/>',
  histoire: '<path d="M12 1.6 2 7.2a1 1 0 0 0 .5 1.9h19a1 1 0 0 0 .5-1.9L12 1.6z"/><rect x="4.2" y="10.6" width="3.4" height="8" rx="1.2"/><rect x="10.3" y="10.6" width="3.4" height="8" rx="1.2"/><rect x="16.4" y="10.6" width="3.4" height="8" rx="1.2"/><rect x="2.2" y="20" width="19.6" height="2.8" rx="1.4"/>',
  geo: '<circle cx="12" cy="12" r="10"/><path class="line" d="M2.4 12h19.2M12 2.2c-5.4 5.4-5.4 14.2 0 19.6M12 2.2c5.4 5.4 5.4 14.2 0 19.6"/>',
  francais: '<path d="M21.6 2.4c-7.2.1-12.4 3.6-14.6 10.4l-.9 3 2.7-1.2C15.6 11.6 20.3 8 21.6 2.4z"/><path d="M2.6 20.2 9.3 11a1.3 1.3 0 0 1 2.1 1.5l-6.7 9.2a1.3 1.3 0 0 1-2.1-1.5z"/>',
  ses: '<path d="M10.8 3.4a9.4 9.4 0 1 0 9.8 9.8h-9.8V3.4z"/><path d="M13.2 1.6a9.4 9.4 0 0 1 9.2 9.2h-9.2V1.6z"/>',
  snt: '<rect x="5.6" y="5.6" width="12.8" height="12.8" rx="2.8"/><rect class="cut" x="9.4" y="9.4" width="5.2" height="5.2" rx="1.2"/><rect x="8.2" y="1.4" width="2.2" height="3.4" rx="1.1"/><rect x="13.6" y="1.4" width="2.2" height="3.4" rx="1.1"/><rect x="8.2" y="19.2" width="2.2" height="3.4" rx="1.1"/><rect x="13.6" y="19.2" width="2.2" height="3.4" rx="1.1"/><rect x="1.4" y="8.2" width="3.4" height="2.2" rx="1.1"/><rect x="1.4" y="13.6" width="3.4" height="2.2" rx="1.1"/><rect x="19.2" y="8.2" width="3.4" height="2.2" rx="1.1"/><rect x="19.2" y="13.6" width="3.4" height="2.2" rx="1.1"/>',
  anglais: '<path d="M4.4 3h15.2a3 3 0 0 1 3 3v8.6a3 3 0 0 1-3 3h-7.2l-5 4.2v-4.2H4.4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><circle class="cut" cx="8.8" cy="10.3" r="1.6"/><circle class="cut" cx="15.2" cy="10.3" r="1.6"/>',
  emc: '<rect x="10.8" y="2.6" width="2.4" height="17" rx="1.2"/><rect x="2.6" y="5.2" width="18.8" height="2.4" rx="1.2"/><path d="M1.4 12.6h8.4a4.2 4.2 0 0 1-8.4 0z"/><path d="M14.2 12.6h8.4a4.2 4.2 0 0 1-8.4 0z"/><rect x="5.6" y="19.6" width="12.8" height="2.8" rx="1.4"/>'
};
let _gid = 0;
window.glyphe = function (key) {
  const g = window.GLYPHES[key]; if (!g) return '';
  const id = 'gm' + (++_gid);
  const m = g.replace(/ class="cut"/g, ' fill="#000"')
    .replace(/ class="line"/g, ' fill="none" stroke="#000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"');
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><mask id="' + id + '" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" fill="#fff" stroke="none">' + m + '</mask><rect width="24" height="24" fill="currentColor" stroke="none" mask="url(#' + id + ')"/></svg>';
};
/* icônes de geste, au trait */
window.GESTES = {
  fleche: '<svg viewBox="0 0 24 24" class="geste"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  coche: '<svg viewBox="0 0 24 24" class="geste"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>',
  croix: '<svg viewBox="0 0 24 24" class="geste"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" class="geste"><path d="m9 6 6 6-6 6"/></svg>',
  externe: '<svg viewBox="0 0 24 24" class="geste"><path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>'
};
