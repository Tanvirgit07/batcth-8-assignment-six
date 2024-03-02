const loadingHandler = async() =>{
    const url = 'https://openapi.programming-hero.com/api/videos/categories';
    const res =await fetch(url);
    const data =await res.json();
    const dataCategoryBtn = data.data;
    btnCategory(dataCategoryBtn);
}

const btnCategory = (element) =>{
    const buttonContainer = document.getElementById('Dynamic_btn')
    for(const btn of element){
        const singleButton = document.createElement
        ('button')
        singleButton.className = 'bg-[#25252526] text-lg px-3 py-1 rounded-md' 
        singleButton.innerText = `${btn.category}`
        const categoryId = btn.category_id;
        buttonContainer.appendChild(singleButton);
        singleButton.addEventListener('click',() => {
        categoryIdByClick(categoryId);
            
        })
    }
    
}

const categoryIdByClick = async (element) =>{
    const url = `https://openapi.programming-hero.com/api/videos/category/${element}`
    const res = await fetch(url);
    const data = await res.json();
    const videoData = data.data;
    displayVideo(videoData);
}

const displayVideo = (element) =>{
    const videoContainer = document.getElementById('video_container');
    for(const singleElement of element){
       const videoDiv = document.createElement('div');
       console.log(singleElement)
       videoDiv.innerHTML = `
        <div class="card bg-base-100 shadow-xl h-[500px]">
        <img class="h-[300px] object-fill bg-cover rounded-lg" src="${singleElement.thumbnail}" alt="Shoes" />
        <div class="">
        <h2 class="card-title">${singleElement.authors[0].profile_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
       `;

       videoContainer.appendChild(videoDiv);
    }
}
loadingHandler();