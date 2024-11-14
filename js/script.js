// js\script.js

function newItem() {
  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item from the list of items:
  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //3-1. Adding the delete button "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //3-2. Adding Event-Listener to the delete button "X":
  crossOutButton.on('click', deleteListItem);

  //3-3. Function for deleting the item from the list of items:
  function deleteListItem() {
    // li.addClass('delete');
    // li.remove();    // option 2
    li.fadeOut(); // option 3
  }

  // 4. Reordering the items:
  $('#list').sortable();
}
