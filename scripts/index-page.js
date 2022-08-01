// comment array api

axios.get("https://project-1-api.herokuapp.com/comments?api_key=%1818dc08-cb64-416f-8b2c-b696494b0038")
.then((response) => {
  displayComment(response.data.reverse());
})

//DOM elements selectors

const commentContainer = document.getElementById('commentList');
const formName = document.getElementById('formName');
const formComment = document.getElementById('formComment');
const formSubmit = document.getElementById('formSubmit');


formSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const newName = formName.value;
    const newComment = formComment.value;
    const newTimeStamp = new Date().toLocaleDateString();
    

    if( newName && newComment) {
        
        const commentObj = {
          name: newName,
          comment: newComment,
      }
        axios.post("https://project-1-api.herokuapp.com/comments?api_key=%1818dc08-cb64-416f-8b2c-b696494b0038", commentObj,{
          headers: {
            "Content-Type": "application/json",
          },
        } )
        .then((res) => {
          console.log(res);
          axios.get("https://project-1-api.herokuapp.com/comments?api_key=%1818dc08-cb64-416f-8b2c-b696494b0038")
            .then((res) => {
              const newComments = res.data.reverse();
              displayComment(newComments);
            });
        })
        
        console.log('hi')

        commentContainer.innerHTML = '';

        formName.value = '';
        formComment.value = '';
        
    }

    else {
        alert('Invalid comment')
    }
   
})

///Function to Display comments

function displayComment(commentList) {


 for ( let i=0; i < commentList.length; i++) {
 
  const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment__list--item');

    const commentArea = document.createElement('div')
    commentArea.classList.add('comment-area')
    
    const commentAreaUserImg = document.createElement('div')
    commentAreaUserImg.classList.add('comment-area__userimg')
    
    const commentContainerImg = document.createElement('img')
    commentContainerImg.classList.add('comment__container--img')

    const commentAreaContent = document.createElement('div')
    commentAreaContent.classList.add('comment-area__content')

    const commentListUser = document.createElement('p')
    commentListUser.classList.add('comment__list--user')

    const commentListUserSpan = document.createElement('span')
    commentListUserSpan.innerText = commentList[i].name
   
    const commentListTimestamp = document.createElement('small')
    commentListTimestamp.classList.add('comment__list--timestamp')
    commentListTimestamp.innerText = new Date(commentList[i].timestamp).toUTCString().slice(0,16);

    const commentListText = document.createElement('p')
    commentListText.classList.add('comment__list--text')
    commentListText.innerText = commentList[i].comment


commentListUser.appendChild(commentListUserSpan)
commentListUser.appendChild(commentListTimestamp)

commentAreaContent.appendChild(commentListUser)
commentAreaContent.appendChild(commentListText)

commentAreaUserImg.appendChild(commentContainerImg)

commentArea.appendChild(commentAreaUserImg)
commentArea.appendChild(commentAreaContent)

commentDiv.appendChild(commentArea)    

commentContainer.appendChild(commentDiv);

}
}
