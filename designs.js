$('form').submit(function(event){
  $('table').html('');
  makeGrid();
  event.preventDefault();
});

function makeGrid() {
  let height = $('#input_height').val();
  let width = $('#input_width').val();
  let content = "";
  for (let  i = 0; i < height; i++){
    content += "<tr>"
    for (let j = 0; j < width; j++){
      content += "<td></td>";
    }
    content += "</tr>";
  }
  $('#pixel_canvas').append(content);
  let cells = $('td');
  let color;
  Array.prototype.forEach.call(cells, function(cell) {
    cell.addEventListener('mousedown', function() {
      color = $('#colorPicker').val();
      $(this).attr("bgcolor", color);
    })
    cell.addEventListener('dragstart', function(evt) {
      evt.preventDefault();
    })
    cell.addEventListener('mouseover', function(evt) {
      if (evt.buttons == 1) {
        color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);
      }
    })
    cell.addEventListener('dblclick', function(evt) {
        $(this).attr("bgcolor", "white");
    })
  })
}

$('#download_btn').click(function() {
  html2canvas(document.querySelector("#pixel_canvas")).then(canvas => {
    saveAs(canvas.toDataURL(), 'canvas.png');
  })
})

function saveAs(uri, filename) {
    var link = document.createElement('a');
    link.href = uri;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
