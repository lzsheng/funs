define(["zepto","smExtend","app"],function(X,o,p){var n={};return n.init=function(){p.setPageTitle("相册");var o=X.photoBrowser({photos:["//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg","//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg","//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg"]});X(document).off("click",".pb-standalone").on("click",".pb-standalone",function(){o.open()});var n=X.photoBrowser({photos:["//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg","//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg","//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg"],type:"popup"});X(document).off("click",".pb-popup").on("click",".pb-popup",function(){n.open()});var i=X.photoBrowser({photos:[{url:"//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg",caption:"Caption 1 Text"},{url:"//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg",caption:"Second Caption Text"},{url:"//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg"}],theme:"dark",type:"standalone"});X(document).off("click",".pb-standalone-captions").on("click",".pb-standalone-captions",function(){i.open()})},n});