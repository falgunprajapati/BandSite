// list of comment array

let commentList =  [
    {
      name: 'Connor Walton',
      comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
      timestamp: '02/17/2021',
      
    },
    {
      name: 'Emilie Beach',
      comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
      timestamp: '02/17/2021',
    
    },
    {
      name: 'Miles Acosta',
      comment: 'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.',
      timestamp: '02/17/2021',
    
    }
] 

//DOM elements selectors

const commentContainer = document.getElementById('commentList');
const formName = document.getElementById('formName');
const formComment = document.getElementById('formComment');
const formSubmit = document.getElementById('formSubmit');


displayComment(commentList)

formSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const newName = formName.value;
    const newComment = formComment.value;
    const newTimeStamp = new Date().toLocaleDateString();
    const commentObj = {
        name: newName,
        comment: newComment,
        timestamp: newTimeStamp
    }

    if( newName && newComment) {
        commentList.unshift(commentObj);

        commentContainer.innerHTML = '';

        formName.value = '';
        formComment.value = '';
        
        displayComment(commentList)
        
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
    commentListTimestamp.innerText = commentList[i].timestamp

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
