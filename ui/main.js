//erkgn
var button=document.getElementById('counter');

button.onclick= function(){
    
    var request = new XMLHttpRequest();
    
    
    request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.DONE){
          if(ready.status ===200)
          {
          var counter= request.responseText;
          var span = document.getElementById('count');
          span.innerHTML=counter.getString();
          }
      }    
    };
    request.open('GET', 'http://svkrclg.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
};