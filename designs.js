const rowInput = $('#input_height');
const colInput = $('#input_width');
const colorPicker = $('#colorPicker');
const pixelCanvas = $('#pixel_canvas');

$('form').submit(function(event){
  $('table').html('');
  makeGrid();
  event.preventDefault();
});

function makeGrid() {
  let height = rowInput.val();
  let width = colInput.val();
  let content = "";
  for (let  i = 0; i < height; i++){
    content += "<tr>"
    for (let j = 0; j < width; j++){
      content += "<td></td>";
    }
    content += "</tr>";
  }
  pixelCanvas.append(content);
  let cells = $('td');
  let color;
  Array.prototype.forEach.call(cells, function(cell) {
    cell.addEventListener('mousedown', function(evt) {
      color = colorPicker.val();
      console.log(color);
      $(this).attr("bgcolor", color);
    })
    cell.addEventListener('dragstart', function(evt) {
      evt.preventDefault();
    })
    cell.addEventListener('mouseover', function(evt) {
      if (evt.buttons == 1) {
        color = colorPicker.val();
        $(this).attr("bgcolor", color);
      }
    })
    cell.addEventListener('dblclick', function(evt) {
        $(this).removeAttr("bgcolor");
    })
  })
}

$('#download_btn').click(function() {
  html2canvas(document.querySelector('#pixel_canvas')).then(canvas => {
    saveAs(canvas.toDataURL(), 'canvas.png');
  })
})

function saveAs(url, fileName) {
    var link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
