var url="https://api.themoviedb.org/3/movie/upcoming?api_key=f29c80c39ceace2ef3f36ad59c1fd7e3&language=en-US&page=1"
  var xhr=new XMLHttpRequest()
  xhr.open('GET',url)
  xhr.onreadystatechange = test
  function test()
  {
    if(this.status==200 && this.readyState==4)
    {
    var res_data= JSON.parse(xhr.responseText)
    console.log(res_data)
    for(var i=0;i<5;i++)
    {
    var get_tag=document.getElementsByClassName('content')
    var ele=document.createElement('h3')
    ele.innerHTML=res_data.results[i].title
    var para=document.createElement('p')
    para.innerHTML='<br>'+'Release Date: '+res_data.results[i].release_date+'<br>'+'Overview:-'+'<br>'+res_data.results[i].overview
    get_tag[i].appendChild(ele)
    get_tag[i].appendChild(para)
    }
}
}
  xhr.send();
