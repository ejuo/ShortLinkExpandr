function collectionToArray(collection)
{
	var ary = [];
	for(var i=0, len = collection.length; i < len; i++)
	{
		ary.push(collection[i]);
	}
	return ary;
}

(function() {
  var d = document,
  count = 0,
  limit = 15;

  function expandLinks() {
    var supported = {'bit.ly': null, 'bitly.com': null, 'j.mp': null, 'tinyurl.com': null, 'is.gd': null, 'tr.im': null, 'ow.ly': null, 'cli.gs': null, 'ping.fm': null, 'twurl.nl': null, 'tiny.cc': null, 'u.mavrev.com': null, 'short.to': null, 'budurl.com': null, 'snipr.com': null, '6url.com': null, 'snipurl.com': null, 'just.as': null, 'snurl.com': null, 'su.pr': null, 'kl.am': null, 'adjix.com': null, 'xrl.us': null, 'notlong.com': null, 'short.ie': null, 'sn.im': null, 'idek.net': null, '3.ly': null, 'easyurl.net': null, '4ru.ru': null, 'alturl.com': null, 'xr.com': null, 'twurl.cc': null, 'yep.it': null, 'redirx.com': null, 'to.ly': null, '0rz.tw': null, '2big.at': null, '2tu.us': null, '55c.cc': null, 'lnk.by': null, 'arm.in': null, 'aus.ly': null, 'b23.ru': null, 'bacn.me': null, 'bloat.me': null, 'br.st': null, 'buttn.me': null, 'chilp.it': null, 'cuthut.com': null, 'devnull.at': null, 'doiop.com': null, 'dwarfurl.com': null, 'dz.ly': null, 'fat.ly': null, 'fff.to': null, 'fur.ly': null, 'fwd4.me': null, 'gol.ly': null, 'good.ly': null, 'goo.gl': null, 'wp.me': null, 'href.in': null, 'hub.tm': null, 'i5.be': null, 'hurl.me': null, 'kissa.be': null, 'l.pr': null, 'korta.nu': null, 'lin.cr': null, 'r2.ly': null, 'l.pr': null, 'i5.be': null, '307.to': null, '7.ly': null, 'a.gg': null, 'a.nf': null, 'a2n.eu': null, 'ad.vu': null, 'adf.ly': null, 'atu.ca': null, 'azqq.com': null, 'b65.com': null, 'bon.no': null, 'buk.me': null, 'canurl.com': null, 'clck.ru': null, 'cliccami.info': null, 'clipurl.us': null, 'clop.in': null, 'cort.as': null, 'cuturls.com': null, 'decenturl.com': null, 'digg.com': null, 'eepurl.com': null, 'ewerl.com': null, 'ff.im': null, 'fhurl.com': null, 'flic.kr': null, 'flingk.com': null, 'flq.us': null, 'fly2.ws': null, 'fwdurl.net': null, 'fwib.net': null, 'g8l.us': null, 'gl.am': null, 'go.9nl.com': null, 'goshrink.com': null, 'hex.io': null, 'hiderefer.com': null, 'htxt.it': null, 'hugeurl.com': null, 'hurl.ws': null, 'icanhaz.com': null, 'jijr.com': null, 'klck.me': null, 'l9k.net': null, 'liip.to': null, 'liltext.com': null, 'linkgap.com': null, 'liurl.cn': null, 'ln-s.ru': null, 'lnkurl.com': null, 'lru.jp': null, 'lu.to': null, 'lurl.no': null, 'memurl.com': null, 'merky.de': null, 'migre.me': null, 'minilien.com': null, 'moourl.com': null, 'myurl.in': null, 'nanoref.com': null, 'nanourl.se': null, 'netnet.me': null, 'ni.to': null, 'nn.nf': null, 'nutshellurl.com': null, 'o-x.fr': null, 'offur.com': null, 'om.ly': null, 'omf.gd': null, 'onsaas.info': null, 'parv.us': null, 'peaurl.com': null, 'piurl.com': null, 'plumurl.com': null, 'plurl.me': null, 'pnt.me': null, 'poprl.com': null, 'post.ly': null, 'ptiturl.com': null, 'qlnk.net': null, 'qurlyq.com': null, 'r.im': null, 'rb6.me': null, 'rde.me': null, 'reallytinyurl.com': null, 'redir.ec': null, 'redirects.ca': null, 'ri.ms': null, 'rickroll.it': null, 'rubyurl.com': null, 's3nt.com': null, 's7y.us': null, 'shar.es': null, 'shink.de': null, 'shortenurl.com': null, 'shorterlink.com': null, 'shortlinks.co.uk': null, 'shoturl.us': null, 'shredurl.com': null, 'shrinkify.com': null, 'shrinkr.com': null, 'shrinkurl.us': null, 'shrt.fr': null, 'shrtnd.com': null, 'shurl.net': null, 'shw.me': null, 'smallr.com': null, 'smsh.me': null, 'smurl.com': null, 'sn.vc': null, 'snadr.it': null, 'sp2.ro': null, 'srnk.net': null, 'srs.li': null, 'starturl.com': null, 'surl.co.uk': null, 'ta.gd': null, 'tcrn.ch': null, 'tgr.me': null, 'tighturl.com': null, 'tiny.pl': null, 'tinylink.com': null, 'togoto.us': null, 'tra.kz': null, 'trunc.it': null, 'tubeurl.com': null, 'twitclicks.com': null, 'twitterurl.net': null, 'twiturl.de': null, 'u.nu': null, 'u76.org': null, 'ub0.cc': null, 'ulu.lu': null, 'updating.me': null, 'ur1.ca': null, 'url.az': null, 'url.co.uk': null, 'url.ie': null, 'urlborg.com': null, 'urlbrief.com': null, 'urlcut.com': null, 'urlcutter.com': null, 'urlhawk.com': null, 'urli.nl': null, 'urlkiss.com': null, 'urlpire.com': null, 'urlvi.be': null, 'urlx.ie': null, 'virl.com': null, 'w33.us': null, 'wapurl.co.uk': null, 'wipi.es': null, 'x.se': null, 'xil.in': null, 'xrl.in': null, 'xurl.jp': null, 'xzb.cc': null, 'yatuc.com': null, 'yfrog.com': null, 'zi.ma': null, 'zud.me': null, 'zurl.ws': null, 'zz.gd': null, 'zzang.kr': null, '2u.lc': null, 'dlvr.it': null};
    var links = collectionToArray(d.getElementsByTagName("a")), expand_map = {}, expansion_queue = [];
    var bad_chars = {'.': null, ',': null, ':': null, ';': null, '!': null, '?': null, ')': null, ']': null, '}': null};
    var i, len, queued_for_expansion = 0, expanded, cached_long_link, expansion_request;
    
    for (i=0, len=links.length; i<len; ++i) {
      var link = links[i];
      var href = link.getAttribute("href");
	  if (href != null) href = href.replace(/\/away.php\?(utf=1&)?to=/,'').replace(/&h=[\w\d]+/,'').replace(/%3A/,':').replace(/%2F/g,'/');

      if ((link.hasOwnProperty('linkExpanded') /*&& href == link.linkShortURL*/) || link.hasOwnProperty('expanding')) {
        continue;
      }

      match = /^http:\/\/(www\.)?(.*?)\/\??[a-zA-Z0-9\/\-]+[\.,:;!\?\)\}\]]?$/i.exec(href);
      if (match != null && match.hasOwnProperty('2') && supported.hasOwnProperty(match[2].toLowerCase())) {
        if (bad_chars.hasOwnProperty(href[href.length - 1])) {
          href = href.substr(0, href.length - 1);
          link.setAttribute('href', href);
        }

        link.expanding = true;

        cached_long_link = localStorage.getItem(href);
        if (cached_long_link != undefined) {
          addLongURL(link, cached_long_link);
        } else if (expand_map.hasOwnProperty(href)) {
          (function(href, i) {
            expand_map[href].push(i);
          })(href, i);
        } else {
          (function(href, i) {
            expansion_queue.push(href);
            expand_map[href] = [i];
          })(href, i);
          if (++queued_for_expansion >= limit) {
            break;
          }
        }
      }
    }
    expanded = 0
    if (expansion_queue.length == 0) {
      return false;
    }
   
    while (expansion_queue.length > 0) {
      expansion_request = [];
    
      if (expanded == 0) {
        expansion_request = [expansion_queue.shift()];
        ++expanded;
      } else if (expanded == 1) {
        expansion_request = expansion_queue.splice(0, 2);
        ++expanded; 
      } else {
        expansion_request = expansion_queue.splice(0, 3);
      }
		chrome.extension.sendMessage({expand: expansion_request}, function(response) {
			var i, j,
			longs = response.longs,
			indices;
        
        for (i=longs.length-1; i>=0; --i) {
          indices = expand_map[longs[i][0]];
          for (j=indices.length-1; j>=0; --j) {           
            addLongURL(links[indices[j]], longs[i][1]);
          }
        }
      });
    }
        
    if (queued_for_expansion >= limit) {
      setTimeout(function() {expandLinks();}, 2000);
      return false;
    }
  }
  
  function addLongURL(link, long_url) {
    var title, href;
    href = link.getAttribute('href');
    title = long_url;
    if (link.hasAttribute("title")) {
      title = link.getAttribute("title") + "\n" + title;
    }
    link.setAttribute("title", title);
    link.linkExpanded = 1;
    link.linkShortURL = href;
    delete link.expanding;
  }
  
  function tryExpandLinks() {
    setTimeout(function(c) {
        var c = c;
        return function () {
          if (count != c && c % 200 != 0) {
            return false;
          }      
          if ((count != c && c % 200 == 0) || count > 50) {
            limit = 15;
          }     
          expandLinks();
          count = 0;
        }
    } (++count), 100);
  }
  
  expandLinks();
  
  var body = d.getElementsByTagName('body')[0];
  body.addEventListener('DOMNodeInserted', tryExpandLinks, false);
  
})();
