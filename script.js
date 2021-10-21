function displayTable(id) {
 
  id.attributes.class.value = "d-block";

  
}

function closeTable(id) {
  id.attributes.class.value = "d-none";
  
}

function displayIt(id) {
  if(id.style.display == "none") {
    id.style.display = "block";
  } else {
    id.style.display = "none";
  }
}