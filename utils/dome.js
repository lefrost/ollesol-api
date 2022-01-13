module.exports = {
  removeNonalphanumerics: (str) => {
    return str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  },
  removeNonnumerics: (str) => {
    return str.replace(/[^0-9]/g, "").toLowerCase();
  },
  stripHtml: (html) => {
    return html.replace(/(<([^>]+)>)/gi, "");
  },
  squeezeStr: (str) => {
    let m = module.exports;
    return m.stripHtml(m.removeNonalphanumerics(str));
  },
  squeezeNum: (str) => {
    let m = module.exports;
    return +m.stripHtml(m.removeNonnumerics(str));
  },
};
