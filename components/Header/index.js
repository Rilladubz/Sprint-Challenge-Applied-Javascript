// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    
    // Element Creation
    let headerContainer = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    // Class creation 
    headerContainer.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Component Structure
    headerContainer.appendChild(date);
    headerContainer.appendChild(title);
    headerContainer.appendChild(temp);

    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';

    let headerEntryPoint = document.querySelector('.header-container');
    headerEntryPoint.appendChild(headerContainer);



    return headerContainer;
}


Header();