const list = document.querySelector('.directions__buttons-inner'),
    items=document.querySelectorAll('.directions__cards-item')

function filter(){
    list.addEventListener('click', event=>{
        const targetId=event.target.dataset.id
        console.log(targetId)
    })
}
filter()