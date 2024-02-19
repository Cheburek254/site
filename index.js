let cookie = false
let cookies = document.cookie.split('; ')
cookies.forEach(function(element) { 
    if(element.split('=')[0] == 'choose-lang')
    {cookie= element.split('=')[1]}
    })
let main = document.querySelector('.main')
let lang = document.querySelector('.lang')
let eng_btn = document.querySelector('.E')
let rus_btn = document.querySelector('.R')
let back = document.querySelector('.back')
eng_btn.addEventListener('click',function(){
    cookie = 'E'
    document.cookie = 'choose-lang = E; max-age = 10000000'
    lang.style.display = 'none'
    main.style.displat = 'flex'
    back.innerHTML = 'back'
})
rus_btn.addEventListener('click',function(){
    cookie = 'R'
    document.cookie = 'choose-lang = R; max-age = 10000000'
    lang.style.display = 'none'
    main.style.display = 'flex'
    back.innerHTML = 'назад'
})

if (cookie==false){
    main.style.display = 'none'
    lang.style.display = 'flex'
}


let head = document.querySelector('.head')
let images = document.querySelectorAll('.img-block')

let texts_e = ['blahblah1', 'blahblah2']
let texts_r = ['блабла1', 'блабла2']

if (cookie == 'R'){
    head.innerHTML = 'ГАЛЕРЕЯ'
}
else{
    head.innerHTML = 'GALLERY'
}
let show = document.querySelector('.show')

for (let i = 0; i < images.length; i++){
    images[i].addEventListener('click',function(){
        main.style.display = 'none'
        images[i].style.display = 'flex'
        show.style.display = 'flex'
        back.style.display = 'flex'
        if(cookie == 'R'){
            show.innerHTML = texts_r[i]
            
        }
        else{
            show.innerHTML = texts_e[i]
        }
    })
}
