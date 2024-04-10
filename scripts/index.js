let navbar = document.querySelector('.navbar');
navbar.style.display = 'block';
navbar.innerHTML = '<img src="assets/images/icon-menu.svg" alt="menu" class="hamburger-menu"/>';


if(window.innerWidth <1024){
    navbar.addEventListener('click', (e) => {
        e.preventDefault();
            if(!navbar.innerHTML.includes('icon-menu-close')){
                navbar.innerHTML = `
        <img src="assets/images/icon-menu-close.svg" alt="menu" class="close-btn"/>
        <ul class="menu-links">
        <li><a href="#" target="_blank" >Home</a></li>
         <li><a href="#" target="_blank">New</a></li>
         <li><a href="#" target="_blank">Popular</a></li>
         <li><a href="#" target="_blank">Trending</a></li>
         <li><a href="#" target="_blank">Categories</a></li>
         </ul>
         `
         document.querySelector('main').style.opacity = '.6';
    
        }else{
            navbar.innerHTML = '<img src="assets/images/icon-menu.svg" alt="menu" class="hamburger-menu"/>';
            document.querySelector('main').style.opacity = '1';
    
        } 
       
    
    })
}


if(window.innerWidth > 1024){
    navbar.innerHTML = `
    <ul class="horizontal-menu">
    <li><a href="#" target="_blank" >Home</a></li>
    <li><a href="#" target="_blank">New</a></li>
    <li><a href="#" target="_blank">Popular</a></li>
    <li><a href="#" target="_blank">Trending</a></li>
    <li><a href="#" target="_blank">Categories</a></li>
    </ul>
    `
}

