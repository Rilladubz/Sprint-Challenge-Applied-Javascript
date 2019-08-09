// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//

//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( res => {
    //    console.log(res.data.articles)
        res.data.articles.bootstrap.forEach(element => {
            articleCard(element)
        });
            res.data.articles.javascript.forEach(element => {
            articleCard(element)
            });
            res.data.articles.technology.forEach(element => {
                articleCard(element)
                });
                res.data.articles.jquery.forEach(element => {
                    articleCard(element)
                    });
                    res.data.articles.node.forEach(element => {
                        articleCard(element)
                        });
    })
    .catch( err => {
        // deal with the error in here
        console.log('Sorry your axios call failed', err);
    })


    function articleCard (data) {

        // Element Creation
        let articleCardDiv = document.createElement('div');
        let headline = document.createElement('div');
        let author = document.createElement('div');
        let ImgContainer = document.createElement('div');
        let img = document.createElement('img');
        let authorsName = document.createElement('span');

        // Class Structure
        articleCardDiv.appendChild(headline);
        articleCardDiv.appendChild(author);
        author.appendChild(ImgContainer);
        ImgContainer.appendChild(img);
        ImgContainer.appendChild(authorsName);

        // Class Creation
        articleCardDiv.classList.add('card')
        headline.classList.add('headline');
        author.classList.add('author');
        ImgContainer.classList.add('img-container');

        // Atrribute
        img.setAttribute('src', data.authorPhoto)

        //Content
        headline.textContent = data.headline;
        authorsName.textContent = `By: ${data.authorName}`;


        let articleEntryPoint = document.querySelector('.cards-container');
        articleEntryPoint.appendChild(articleCardDiv);

        console.log(data);
        return articleCardDiv;
    }

    articleCard();

    // <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>