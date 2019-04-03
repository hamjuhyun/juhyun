const form = document.querySelector('form');
const input = form.querySelector('input');

const USER_LS = "currentUser"

function loadName() {
  const currentUser = localStorage.getItem();
}

function init() {
  loadName();
}

init();