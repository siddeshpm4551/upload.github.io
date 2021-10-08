let getForm=document.querySelector('#Forms');
getForm.addEventListener('submit',function(){

    let imageFile=document.querySelector('#customFile').files[0];
    let imageNmae=imageFile.name;

    let reader=new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load',function(){
        if(this.result && localStorage){
            let imageList=localStorage.getItem('images')?JSON.parse(localStorage.getItem('images')):[];
            imageList.push(this.result);

            localStorage.setItem('images',JSON.stringify(imageList));
        }
    });
    displayImages();
});

let displayImages=()=>{
    let imageList=localStorage.getItem('images')?JSON.parse(localStorage.getItem('images')):[];
    if(imageList!==0){
        let imageRows='';
        for(image of imageList){
            imageRows+=`<div class="col-md-3">
            <div class="card" id="card1">
                <img src="${image}" alt="" class="img-fluid">
                
            </div>
        </div>`;
        }
        document.querySelector('#rows').innerHTML=imageRows;
    } 
};
displayImages();

let removeImages=document.querySelector('#removes');
removeImages.addEventListener('click',function(){
   
    localStorage.removeItem('images');
    displayImages();
});