function addTask() {
  const judul = document.getElementById('judul').value;
  const desc = document.getElementById('deskripsi').value;

  const itemEl = document.createElement('div');
  itemEl.classList.add('task-item');

  const titleEl = document.createElement('h2');
  titleEl.classList.add('task-item__title');
  titleEl.innerText = judul;

  const descEl = document.createElement('p');
  descEl.classList.add('task-item__desc');
  descEl.innerText = desc;
  
  itemEl.appendChild(titleEl);
  itemEl.appendChild(descEl);

  document.getElementById('task-container').appendChild(itemEl);
}