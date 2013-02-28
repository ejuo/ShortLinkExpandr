  var lib = {   
    expand: function(links) {
      var long_link, i, short_link,
      longs = [],
      ae_links = [];
      for (i=links.length-1; i>=0; --i) {
		short_link = links[i];
        long_link = this.find(short_link);
        if (long_link) {
          longs.push([links[i], long_link]);
        } else {
          ae_links.push([links[i], short_link]);
        }
      }
      if (ae_links.length > 0) {
        longs = longs.concat(this.aeExpand(ae_links));
      }
      return longs;
    },
    
    store: function(short_link, link) {      
      localStorage.setItem('sl-' + short_link, link);
    },
    
    aeExpand: function(short_links) {
      var i,
      tmp = [],
      len,
      expanded_links = [];
      for (i=0, len = short_links.length; i<len; ++i) {
        tmp.push(short_links[i][1]);
      }
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://4.expndr.appspot.com/?" + tmp.join('&'), false);
      xhr.send();

      tmp = xhr.responseText.split("\n");
      for (i=0, len = tmp.length; i<len; ++i) {
        expanded_links.push([short_links[i][0], tmp[i]]);
        this.store(short_links[i][1], tmp[i]);
      } 
      return expanded_links;
    },
    
    find: function(short_link) {      
      var long_link = localStorage.getItem('sl-' + short_link);
      
      if (long_link == undefined) {
        return false;
      } else {
        return long_link
      } 
    },
  };
  
  chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.expand) {
      sendResponse({longs: lib.expand(request.expand)});
    }
  });