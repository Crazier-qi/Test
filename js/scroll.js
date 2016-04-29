function scroll(wraper,prev,next,i,speed,or)
 {
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var i = $(i).find('ul');
  var w = i.find('li').outerWidth(true);//true计算margin留白
  var s = speed;
  next.click(function()
       {
        i.animate({'margin-left':-w},function()
                  {
                   i.find('a').eq(0).appendTo(i);
                   i.css({'margin-left':0});
                   });
        });
  prev.click(function()
       {
        i.find('a:last').prependTo(i);
        i.css({'margin-left':-w});
        i.animate({'margin-left':0});
        });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*1000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});

  }
 }
 scroll('.img-scroll','.prev','.next','.img-list',3,true);
 