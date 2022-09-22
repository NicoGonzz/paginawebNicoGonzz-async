const API='https://youtube-v31.p.rapidapi.com/search?channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet%2Cid&order=date&maxResults=8';

const content = null ||document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1834547412msh5069ee6c4e5ef58p1604c7jsn9d14ad4f17bb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fechData(urlAPI){
    const response = await fetch(urlAPI,options);
    const data=await response.json(); //los datos se pasan a json
    return data;//retorna la información de la API que estamos solicitando
}

//Funcion que se invoca a si  misma , se llama automaticamente
(async () => {
try{
    const videos = await fechData(API);
    let view =`
    ${videos.items.map(video => `
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
         <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
       </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
         <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
    </div>
    `)}
 
    `;  
     content.innerHTML = view;

}   catch (error){
    console.log(error);
}
})();
