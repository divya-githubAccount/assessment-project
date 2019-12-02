//Movies
var url1='https://api.themoviedb.org/3/movie/550?api_key=96cdbfd4439a92ac248f81cae03ab9db'
var xhr1=new XMLHttpRequest()
xhr1.open('GET',url1)
xhr1.onreadystatechange=test1
function test1(){
  var a=JSON.parse(this.responseText)
  console.log(a)
}
xhr1.send()

//Discover Movies
var url4='https://api.themoviedb.org/3/discover/movie?api_key=96cdbfd4439a92ac248f81cae03ab9db&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
var xhr4=new XMLHttpRequest()
xhr4.open('GET',url4)
xhr4.onreadystatechange=test4
function test4(){
  var a=JSON.parse(this.responseText)
  console.log(a)
  var div_tag=document.getElementsByClassName('flip-card-back')
    for(let i=0;i<=7;i++)
    {
      div_tag[i].innerHTML=a.results[i].title+'<br>'+'<br>'+'Release Date:-'+a.results[i].release_date+'<br>'+'<br>'+'Overview:-'+a.results[i].overview;
    }
  }
xhr4.send()
//people
var url5='https://api.themoviedb.org/3/person/popular?api_key=96cdbfd4439a92ac248f81cae03ab9db&language=en-US&page=1'
var xhr5=new XMLHttpRequest()
xhr5.open('GET',url5)
xhr5.onreadystatechange=test5
function test5(){
  var a=JSON.parse(this.responseText)
  console.log(a)
}
xhr5.send()
