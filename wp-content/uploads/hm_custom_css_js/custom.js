 <script>
   var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

$(document).ready(function(){
        $(".swiper-pagination").prepend
        ("<div class='slider-album-indicator' style='opacity: 1; display: block;'><div class='topnav'><a href='#menu' class='icon' onclick='menuProject()'><i class='fa fa-bars'></i></a></div><div class='album-info-text'><a href='#info' onclick=' display()' title='Info' class='album-name-indicator' ><?php echo the_title();?><i class='fa fa-plus'></i></div>");
});
function display(){
document.getElementById('info').style.visibility= "visible"
}
function displayCaption(){
document.getElementById('info').style.visibility= "hidden";
document.getElementById('info').style.visibility= "hidden";
}

function menuProject(){
document.getElementById('menu').style.visibility= "visible"

}
 