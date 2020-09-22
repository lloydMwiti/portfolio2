//create html element
function createNode(element){
    return document.createElement(element);
}
//append child element to its parent
function append(parentel,childel){
    return parentel.appendChild(childel);
}

//declaring variables
const postContainer=document.getElementById("body-right");
const url='https://randomuser.me/api/?results=20';

//fetching api results in json
fetch(url).then((resp) => resp.json()).then(function(data){
    let author=data.results;
    return author.map(function(author){
        let card = createNode('div'),
        card_top = createNode('div'),
        w = createNode('div'),
        feed_img = createNode('img'),
        vertical = createNode('div'),
        name = createNode('p'), 
        email = createNode('p'), 
        post_img =createNode('img'),
        button=createNode('button');

        //design and classing
        card.class="card";
        card_top.class="card-top";
        w.class="w center";
        feed_img.class="circle c feed-img";
        vertical.class="vertical"
        name.class="poster";
        email.class="light-text";
        post_img.class="feed-img-post ww100";
        button.innerHTML=`...`;

        //feeding api images
        feed_img.src=author.picture.medium;
        name.innerHTML=`${author.name.first} ${author.name.last}`;
        email.innerHTML=`${author.email}`;
        post_img.src=author.picture.large;

        //appending children
        append(card,card_top);
        append(card,post_img);
        append(card_top,w);
        append(card_top,button);
        append(w,feed_img);
        append(w,vertical);
        append(vertical,name);
        append(vertical,email);
    })
})
.catch(function(error){
    console.log(JSON.stringify(error));
})
