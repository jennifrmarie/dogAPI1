
function getDogImage(url) {
    fetch(url)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson.message))
      .catch(error => alert('Something went wrong. Try again later.'));
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
