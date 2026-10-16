(function () {
  const U = (id, w) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + w + '&q=70';
  const bar = (bg, line, ink, mute, btn, btnLine, accent, sel, dim) => ({ bg, line, ink, mute, btn, btnLine, field: btn, accent, sel, dim });
  const T = {
    'Rừng': { img: '1441974231531-c6227db76b6e', bar: bar('#3a5e47', '#4a6f57', '#f2f7f0', '#c3d8c6', '#44694f', '#5a7f65', '#cdeccf', '#4b7258', '#e2eee2'), page: '#f6f9f3', aside: '#edf4e9', accent: '#2f6b45', sel: '#dcead5', tint: ['#2c4d38', '#4a7a58'] },
    'Rêu': { img: '1501854140801-50d01698950b', bar: bar('#e9f1e5', '#d0dfcc', '#1b2a20', '#56665a', '#f6faf3', '#c0d2bd', '#2f6b45', '#d6e6d0', '#2f3d33'), page: '#f7faf3', aside: '#eef5e8', accent: '#3f6b2a', sel: '#e0ecd4', tint: ['#2f4d22', '#6f9a4a'] },
    'Sương mù': { img: '1448375240586-882707db888b', bar: bar('#4a5856', '#5a6865', '#f1f4f2', '#c5d0cc', '#55635f', '#6b7a76', '#d3e6dd', '#5a6a66', '#e1e8e5'), page: '#f5f7f6', aside: '#eaefed', accent: '#3e5e57', sel: '#dbe5e1', tint: ['#2b3836', '#6d827b'] },
    'Thung lũng': { img: '1506744038136-46273834b3fb', bar: bar('#3e6470', '#4e7581', '#f1f7f8', '#c2d7dc', '#48707c', '#5e8792', '#c9eaf0', '#4c7682', '#e0edf0'), page: '#f4f8f9', aside: '#e8f1f3', accent: '#2d6273', sel: '#d6e7ec', tint: ['#24434e', '#5f93a0'] },
    'Biển': { img: '1501785888041-af3ef285b470', bar: bar('#2f6f78', '#3f818a', '#effafa', '#b9dfe2', '#3a7c85', '#529399', '#bff1ee', '#3d8189', '#dcf2f2'), page: '#f3f9f9', aside: '#e4f2f2', accent: '#1f6d74', sel: '#cfe9e9', tint: ['#184a54', '#3c9aa0'] },
    'Hoàng hôn': { img: '1475924156734-496f6cac6ec1', bar: bar('#6a4a5e', '#7c5a6f', '#fbf3f4', '#e2c6cf', '#765569', '#8d6c80', '#ffd3b5', '#7b5a6e', '#f1e1e5'), page: '#fbf7f5', aside: '#f5ece9', accent: '#9a4f3a', sel: '#f0ddd5', tint: ['#45304a', '#c2715e'] },
    'Anh đào': { img: '1522383225653-ed111181a951', bar: bar('#8a5a6a', '#9b6b7b', '#fff6f8', '#ecd0d8', '#956575', '#aa7d8c', '#ffd9e3', '#9a6a7a', '#f6e4ea'), page: '#fdf8f9', aside: '#f8edf0', accent: '#a04a66', sel: '#f3dbe3', tint: ['#6e3a4e', '#d68fa6'] },
    'Đêm sao': { img: '1419242902214-272b3f66ee7a', bar: bar('#3b3a5c', '#4b4a6e', '#f2f1fa', '#c3c1de', '#46456a', '#5d5c82', '#d8ccff', '#4c4b72', '#e3e1f3'), page: '#f7f7fb', aside: '#eeedf6', accent: '#4f4a8f', sel: '#e1dff0', tint: ['#201f38', '#6a4f8f'] },
    'Sa mạc': { img: '1509316785289-025f5b846b35', bar: bar('#7a5340', '#8b6450', '#fdf5ef', '#ead2c3', '#85604c', '#9c7763', '#ffd9b0', '#8a6450', '#f5e5da'), page: '#fcf8f4', aside: '#f6eee6', accent: '#9a5530', sel: '#f0e0d2', tint: ['#553424', '#c98a5a'] },
    'Nắng xuân': { img: '1490750967868-88aa4486c946', bar: bar('#3f6687', '#4f7697', '#f3f8fc', '#c6d8e8', '#4a7192', '#6188a8', '#ffd36b', '#4e7798', '#e2ecf5'), page: '#fbfaf3', aside: '#f5f3e3', accent: '#7f6210', sel: '#efe9c8', tint: ['#2a4c6b', '#d9a52a'] },
    'Zalo': { bar: bar('#0068ff', '#2a7fff', '#ffffff', '#d2e3ff', '#1674ff', '#4d93ff', '#cfe6ff', '#2a80ff', '#e6f0ff'), page: '#f6f9ff', aside: '#ebf2ff', accent: '#0055d4', sel: '#d9e8ff', tint: ['#0047b3', '#2f8cff'] },
    'Sáng': { bar: bar('#ffffff', '#e4e1da', '#171614', '#7c7a74', '#ffffff', '#d3cfc5', '#3f5a6b', '#efece4', '#3a3935'), page: '#ffffff', aside: '#faf9f6', accent: '#3f5a6b', sel: '#efece4', tint: ['#2f4553', '#5a7686'] },
    'Giấy': { bar: bar('#f3efe4', '#ddd6c4', '#2a251c', '#857c69', '#faf7ef', '#cfc6b0', '#7a5a2e', '#e6dfcd', '#4a4335'), page: '#fbf8f1', aside: '#f3efe4', accent: '#7a5a2e', sel: '#e6dfcd', tint: ['#5a4226', '#9a7a4a'] },
    'Mực': { bar: bar('#1c2328', '#2f3a42', '#eef0f1', '#9aa6ae', '#252e34', '#3a4750', '#9cc3d8', '#2a353d', '#c3cbd0'), page: '#f6f7f8', aside: '#eceff1', accent: '#2f5468', sel: '#dde4e8', tint: ['#1c2328', '#3a4a55'] }
  };
  window.LT_THEMES = T;
  window.LT_header = (t) => t.img
    ? 'linear-gradient(90deg,' + t.bar.bg + 'f2 0%,' + t.bar.bg + 'dd 55%,' + t.bar.bg + 'c8 100%),url(' + U(t.img, 1600) + ') center 40%/cover'
    : t.bar.bg;
  window.LT_hero = (t) => t.img
    ? 'linear-gradient(100deg,' + t.tint[0] + 'e6 0%,' + t.tint[0] + 'b0 45%,' + t.tint[1] + '40 100%),url(' + U(t.img, 1800) + ') center 45%/cover'
    : 'linear-gradient(135deg,' + t.tint[0] + ' 0%,' + t.tint[1] + ' 100%)';
  {
    const VI = /[ăâđêôơưàảãạáằẳẵặắầẩẫậấèẻẽẹéềểễệếìỉĩịíòỏõọóồổỗộốờởỡợớùủũụúừửữựứỳỷỹỵý]/i;
    const SKIP = { SCRIPT: 1, STYLE: 1, svg: 1, IMG: 1, INPUT: 1, TEXTAREA: 1 };
    let memo = new WeakMap();
    const kidsOf = (el) => Array.from(el.children).filter(k => !SKIP[k.tagName]);
    const words = (tx) => tx.match(/\p{L}+/gu) || [];
    const cls = (w) => { if (!w.length) return ''; const v = w.filter(x => VI.test(x)).length / w.length; return v > 0.45 ? 'vi' : (v < 0.1 ? 'en' : ''); };
    const ratio = (el) => cls(words(el.textContent || ''));
    const len = (el) => words(el.textContent || '').join('').length;
    const MEDIA = /^(IMG|svg|VIDEO|CANVAS|IFRAME|PICTURE)$/;
    const kind = (el) => {
      if (memo.has(el)) return memo.get(el);
      let r;
      const pair = /var\(--cols/.test(el.getAttribute('style') || '');
      if (pair || MEDIA.test(el.tagName) || el.querySelector('img,svg,video,canvas,iframe,picture,image-slot')) r = 'mix';
      else {
        const kids = kidsOf(el), ks = kids.map(kind);
        const tot = len(el) || 1;
        let enLen = kids.reduce((s, k, i) => s + (ks[i] === 'en' ? len(k) : 0), 0);
        let viLen = kids.reduce((s, k, i) => s + (ks[i] === 'vi' ? len(k) : 0), 0);
        const ow = words(Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.nodeValue).join(' ')), oc = cls(ow), ol = ow.join('').length;
        if (oc === 'en') enLen += ol; else if (oc === 'vi') viLen += ol;
        const enBlock = kids.some((k, i) => ks[i] === 'en' && len(k) >= 12 && getComputedStyle(k).display !== 'inline');
        if (ks.includes('mix') || enBlock || (enLen / tot >= 0.25 && viLen / tot >= 0.25)) r = 'mix'; else r = ratio(el);
      }
      memo.set(el, r); return r;
    };
    const walk = (el) => {
      const kids = kidsOf(el);
      const ks = kids.map(kind);
      const ownTxt = Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.nodeValue).join(' ');
      const hasEn = /var\(--cols/.test(el.getAttribute('style') || '') || ks.includes('en') || ks.includes('mix') || (words(ownTxt).length && cls(words(ownTxt)) === 'en');
      const gs = getComputedStyle(el).display; const safe = !/^(TABLE|THEAD|TBODY|TFOOT|TR)$/.test(el.tagName) && (!/grid/.test(gs) || /var\(--cols/.test(el.getAttribute('style') || ''));
      kids.forEach((k, i) => {
        if (hasEn && safe && ks[i] === 'vi') { if (!k.hasAttribute('data-lt-vi')) k.setAttribute('data-lt-vi', ''); }
        else { if (k.hasAttribute('data-lt-vi')) k.removeAttribute('data-lt-vi'); walk(k); }
      });
    };
    let on = false, st = null, mo = null, tm = 0;
    const run = () => { clearTimeout(tm); tm = setTimeout(() => { if (!on) return; memo = new WeakMap(); walk(document.body); }, 80); };
    window.LT_setLang = (en) => {
      en = !!en; if (en === on) return; on = en;
      if (on) {
        st = document.createElement('style');
        st.textContent = '[data-lt-vi]{display:none!important}[style*="--cols"]{--cols:1fr!important;--en:#1b2a20!important}';
        document.head.appendChild(st);
        const go = () => { run(); mo = new MutationObserver(run); mo.observe(document.body, { childList: true, subtree: true, characterData: true }); };
        if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
      } else {
        if (st) st.remove(); if (mo) mo.disconnect(); st = mo = null;
        document.querySelectorAll('[data-lt-vi]').forEach(e => e.removeAttribute('data-lt-vi'));
      }
    };
    window.LT_urlEn = new URLSearchParams(location.search).get('lang') === 'en';
    if (window.LT_urlEn) window.LT_setLang(true);
  }
})();
