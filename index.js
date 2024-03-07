console.log('bobbyhadz.com');

const setKeyButton = document.getElementById('set-key-btn');

setKeyButton.addEventListener('click', () => {
  localStorage.setItem('website', 'bobbyhadz.com');
});

// ---------------------------------------------

const deleteKeyButton =
  document.getElementById('delete-key-btn');

deleteKeyButton.addEventListener('click', () => {
  localStorage.removeItem('website');
});

// ---------------------------------------------

// ✅ Check if a localStorage key exists

const checkKeyButton = document.getElementById('check-key-btn');

checkKeyButton.addEventListener('click', () => {
  if (localStorage.getItem('website') !== null) {
    console.log('The website key exists');
    console.log(localStorage.getItem('website'));
  } else {
    console.log('The website key does NOT exist');
  }
});
