const data=[['./img/pic-1.jpg','James','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo purus a neque hendrerit imperdiet. Mauris pretium finibus faucibus. Nullam dapibus urna non mi aliquet suscipit.'],
            ['./img/pic-2.jpg','Mary','Curabitur semper, dui a blandit ultricies, neque turpis vulputate augue, eu rutrum sem est at sem. Etiam dignissim accumsan sapien et faucibus.'],
            ['./img/pic-3.jpg','Nate','Aliquam scelerisque, libero vel tempus pharetra, augue ante mollis velit, sed consectetur ligula lectus a massa.'],
            ['./img/pic-4.jpg','Sam','Vestibulum eget nisi sit amet sem mollis dignissim sit amet vel massa. Curabitur elementum pharetra neque et ultricies. ']];

const pic=document.querySelector('.img');
const name=document.querySelector('.name');
const quote=document.querySelector('.quote');
const box=[pic,name,quote];

const btnr=document.querySelector('.btn-right');
const btnl=document.querySelector('.btn-left');

let currentIndex=0;

btnr.addEventListener('click',function(){
    currentIndex === data.length-1 ? currentIndex=0 : currentIndex++;
    data[currentIndex].forEach(function(item,index){
        index===0? box[index].src=item:box[index].textContent=item;
    });

});

btnl.addEventListener('click',function(){
    currentIndex === 0 ? currentIndex=data.length-1 : currentIndex--;
    console.log(currentIndex);
    data[currentIndex].forEach(function(item,index){
        index===0? box[index].src=item:box[index].textContent=item;
    });

});