window.onload =function () {
  const addButton = document.getElementById('ajouter');
  const resetButton = document.getElementById('reset');

  addButton.onclick = ajouterTache;
  resetButton.onclick = reinitialiserTache;
}
// function ajouterTache() {
//     const tache = document.getElementById('tache');
//     const taskList = document.getElementById('list');

//    if (tache.value) {
//     let newItem = document.createElement('li');
//    newItem.innerHTML = tache.value; 

//        $(newItem).on('swiperight', function () {
//            $(this).toggleClass('done');
//        });

//        $(newItem).on('swipeleft', function () {
//             $(this).hide('slow', function () {
//                 $(this).remove();
//            });
//         });

//         taskList.appendChild(newItem);
//         $(taskList).listview('refresh');
//         tache.value = '';
//     }

// }

function ajouterTache() {
  const task = document.getElementById("tache");
  const taskList = document.getElementById("list");
  const taskDoneList = document.getElementById("listDone");

  if (task.value) {
    let newItem = document.createElement("li");
    newItem.innerHTML = task.value;

    $(newItem).on("swiperight", function () {
      $(this).toggleClass("done");
      if ($(this).hasClass("done")) {
        taskDoneList.appendChild(this);
      } else {
        taskList.appendChild(this);
      }
    });

    $(newItem).on("swipeleft", function () {
      $(this).hide("slow", function () {
        $(this).remove();
      });
    });

    taskList.appendChild(newItem);
    $(taskList).listview("refresh");
    task.value = "";
  }
}
function reinitialiserTache(){
  list.innerHTML = '';
  listDone.innerHTML = '';
};

//function reinitialiserTache() {
//   const tache = document.getElementById('tache');

//   taskList.innerHTML = '';
//}