window.onload = async function(){
    var url = "http://richu.herokuapp.com/richu?action=cuterichu";
    fetch(url)
.then(res => res.json())
.then((json) => {
    console.log(json);
    if(json.status === true)
        console.log(json.data);
        generateVideoFrame(json.data);
        });
}

function getDIv(video){
var div = `<html>${video.videoId}</html>`;
return div;
}
function generateVideoFrame(videos){
    var html = videos.map(getDIv)
    console.log(html);
    var divCollections = "";
    for(let i = 0; i < html.length; i++){
        if(i % 3 === 0)
            divCollections += `<div class="row">`;
        divCollections += `<div class="col-md-4 col-lg-4 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
        <a href="preview/theme/deejee/single.html">
          <iframe class="img-fluid" src="https://www.youtube.com/embed/${html[i]}"></iframe>
        </a>
        <div class="p-4 bg-white">
          <span class="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
          <h2 class="h5 text-black mb-3">
            <a href="preview/theme/deejee/single.html">This Is The Day, Party, Party!</a>
          </h2>
        </div>
      </div>`;
        if(i % 3 === 2 || i === html.length-1)
            divCollections += "</div>"; 

    }
    document.getElementById('videoCollections').insertAdjacentHTML('beforeend', divCollections);
    console.log(divCollections)
}
