const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
function myHeader(title, date, temp) {
  const headerDiv = document.createElement('div');
  const dateSpan = document.createElement('class');
  const h1Title = document.createElement('h1');
  const tempSpan = document.createElement('class');

 headerDiv.classList.add('header');
 dateSpan.classList.add('date');
 h1Title.classList.add('title');
 tempSpan.classlist.add('temp');

 headerDiv.appendChild(dateSpan);
 headerDiv.appendChild(h1Title);
 headerDiv.appendChild(tempSpan);

 dateSpan.textContent = date;
 h1Title.textContent = title;
 tempSpan.textContent = temp;

 console.log(myHeader)
 return myHeader;
}





}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  function myAppender(selector) {
    const newHeaderAppender = document.querySelector('headerDiv');
    const newDateSpan = document.querySelector('dateSpan');
    const newH1Title = document.querySelector.apply('h1Title');
    const newTempSpan = document.querySelector('tempSpan');
  }
}

export { Header, headerAppender }
