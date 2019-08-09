// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// console.log('DATA:', response.data.topics);  

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then( response => {
        response.data.topics.forEach(eachtopic =>{
            tabTopic(eachtopic);
        })      
    })

    .catch( err => {
        // deal with the error in here
        console.log('Sorry your axios call failed')
    })

   

    function tabTopic (eachtopic) {

        let topicTab = document.createElement('div');
        topicTab.classList.add('tab');
        topicTab.textContent = eachtopic;

        let tabEntryPoint = document.querySelector('.topics');
        tabEntryPoint.appendChild(topicTab);

        // console.log(topicTab);

        return topicTab

    }

    tabTopic();