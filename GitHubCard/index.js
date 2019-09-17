/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/kirawoods')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function userCardCreator(userObject){
  const userCard = document.createElement('div');
  userCard.classList.add('card');

  const UserImage = document.createElement('img');
  UserImage.src = userObject.data.avatarUrl;
  userCard.appendChild(UserImage);

//   const article = document.createElement('div');
//   article.classList.add('article')

//   const title = document.createElement('h2');
//   title.textContent = articleText.title;
//   article.appendChild(title);

//   const date = document.createElement('p');
//   date.classList.add('date');
//   date.textContent = articleText.date;
//   article.appendChild(date);

//   const paragraph1 = document.createElement('p');
//   paragraph1.textContent = articleText.firstParagraph; 
//   article.appendChild(paragraph1); 

//   const paragraph2 = document.createElement('p');
//   paragraph2.textContent = articleText.secondParagraph; 
//   article.appendChild(paragraph2); 

//   const paragraph3 = document.createElement('p');
//   paragraph3.textContent = articleText.thirdParagraph; 
//   article.appendChild(paragraph3); 

//   const button = document.createElement('span');
//   button.classList.add('expandButton');
//   button.textContent = "Expand Article";
//   button.addEventListener('click', (e) => {
//     article.classList.toggle('article-open');
// });
  // article.appendChild(button);

  return userCard;
}

const cardContainer = document.querySelector('.cards');

axios.get('https://api.github.com/users/kirawoods')
    .then( response => {
      let newUserCard = userCardCreator(response);
      cardContainer.appendChild(newUserCard);
    })
    .catch( error => {
        console.log("Error:", error);
    })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
