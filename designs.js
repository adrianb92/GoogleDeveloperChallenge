let height;
let width;
let color;
let cells;
let content;

$(':submit').on('click', function(evt){
  evt.preventDefault();
  $('table').html('');
  makeGrid();
});

function makeGrid() {
  height = $('#input_height').val();
  width = $('#input_width').val();
  content = "";
  for (let  i = 0; i < height && i <= 100; i++){
    content += "<tr>"
    for (let j = 0; j < width && j <=100; j++){
      content += "<td></td>";
    }
    content += "</tr>";
  }
  $('#pixel_canvas').append(content);
  cells = $('td');
  Array.prototype.forEach.call(cells, function(cell) {
      cell.addEventListener('click', function() {
        let color = $('#colorPicker').val();
        $(this).attr("bgcolor", color);

    })})
}
