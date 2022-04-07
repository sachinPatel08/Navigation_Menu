document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{

document.querySelector('.navigation').classList.toggle('sidebarGo');
if(document.querySelector('.navigation').classList.contains('sidebarGo')){

    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'

}
else{
    document.querySelector('.cross').style.display = 'inline'
    document.querySelector('.ham').style.display = 'none'   
}


})