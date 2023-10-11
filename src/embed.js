(function (n) { 
  var t, e, u, i; 
  Array.prototype.indexOf || 
  (Array.prototype.indexOf = function (n, t) { 
    for (var i = t || 0, r = this.length; i < r;) 
    { 
      if (this[i] === n) return i; i++ 
    } 
    return -1 
  }
  );
  n.SignData || (n.SignData = {}); 
  t = n.SignData; 
  t.processedScripts || (t.processedScripts = []); 
  e = t.processedScripts; 
  t.styleTags || (t.styleTags = []); 
  var v = t.styleTags, 
  s = document.getElementsByClassName("signbsldata-embed"), 
  h = function (n) { 
    console.error(n) 
  }, 
  a = function (n, t, i) 
    { 
      var r = new XMLHttpRequest; 
      r.open("GET", "https://embed-api.signbsl.com/widgethtml/" + t + "?wordhint=" + i, !0); 
      r.onload = function () { 
        if (r.readyState === 4) 
        if (r.status === 200) { 
          var t = document.createElement("div"); 
          t.innerHTML = r.responseText; 
          n.parentNode.insertBefore(t, n); 
          n.remove() } else h(r.statusText) }; 
          r.onerror = function () { 
            h(r.statusText) }; r.send(null) }; 
            for (u = 0; u < s.length; u++) { 
              var r = s[u], c = r.getAttribute("data-vidref"), l = "", 
              f = r.getElementsByTagName("a"), o = "www.signbsl.com/sign/"; 
              for (i = 0; i < f.length; i++)
                if (f[i].href.indexOf(o)) { 
                  l = f[i].href.substring(f[i].href.indexOf(o) + o.length); break } 
                  c != "" && e.indexOf(r) < 0 && (e.push(r), a(r, c, l)) } })(this);
