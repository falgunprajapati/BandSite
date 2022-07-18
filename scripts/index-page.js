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

/// funtion to display comments

function displayComment(comment) {
    // created div inside the comment list container

    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment__list--item';

    commentDiv.innerHTML = `
    <div class="comment-area">
    <div class="comment-area__userimg"><img class="comment__container--img" ></div>

    <div class="comment-area__content">
    <p class="comment__list--user">${comment.name} <small class="comment__list--timestamp">${comment.timestamp}</small></p>
   
    <p class="comment__list--text">${comment.comment}</p>
    </div>

    </div>`;

 commentContainer.appendChild(commentDiv);
 
}

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
    
        commentList.map(displayComment);
    }
    else {
        alert('Invalid comment')
    }
   
})

commentList.map(displayComment);