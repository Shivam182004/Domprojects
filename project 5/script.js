let arr = [
    {dp:"https://images.unsplash.com/photo-1700431516632-507146465c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",story:"https://images.unsplash.com/photo-1700694177564-1bfae45112e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"},

    {dp:"https://plus.unsplash.com/premium_photo-1694618624660-aac1d45950a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1682687221363-72518513620e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://images.unsplash.com/photo-1701754052633-413399ffc65d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1702166923616-eee41abf229e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D"},

    {dp:"https://plus.unsplash.com/premium_photo-1701200952191-d4f6d93be9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1701816763485-62ec71f2cac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"},
]
var storyian =document.querySelector("#storypart")
var clutter =""
arr.forEach(function(elem,idx){
    clutter +=  `<div id="story">
             <img id="${idx}" src="${elem.dp}" alt=""
    </div>`
})
storypart.innerHtml=clutter
