'use strict';

function getDogImage() {
    let url = "https://dog.ceo/api/breeds/image/random/" + $('#text').val();
    $.getJSON(url)
    .then((res) => {
        let dogArr = res.message
        for (let i = 0; i < dogArr.length; i++) { 
            console.log(dogArr[i]);
        } 
    })
    .catch((error) => console.log(error));
}

function watchForm() {
    $('form').submit(event => {
        let url = "https://dog.ceo/api/breeds/image/random/" + $("#text").val();
        console.log(url);        
        event.preventDefault();
        getDogImage(url) 
})
                 
}

$(function() {
    console.log('waiting for submit');
    watchForm();
})
