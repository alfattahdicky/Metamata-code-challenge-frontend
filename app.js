// Favorite to localStorage
const btnFav = document.querySelectorAll(".btn-favourite");
  const cardEl = document.querySelector('.card');

const bookmarks = () => {
  const bookmark = localStorage.getItem('card');
    if(bookmark === null) {
      localStorage.setItem('card', JSON.stringify(cardEl.innerHTML));
    } else {
      let arr = [];
      arr.push(bookmark);
      arr.push(cardEl.innerHTML);
      
      localStorage.setItem('card', JSON.stringify(arr));
      localStorage.setItem('card', JSON.stringify(arr));
     // console.log(bookmark);
      alert('save');
    }
}

btnFav.forEach(e => {
  e.addEventListener('click', bookmarks)
});


