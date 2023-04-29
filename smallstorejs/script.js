$(window).on("load", async function () {
  $('.loader').css('display','flex');
  const r = await fetch("https://fakestoreapi.com/products");
  const data = await r.json();
  $('.loader').css('display','none');
  data.map(addItem);
});

function addItem(item) {
  $(".products").append(`
        <div class="card">
            <img src="${item.image}" class="img" alt="...">
            <div class="crd-body">
                <h6 class="card-title my-4">${item.title}</h6>
                <a href="#" class="btn btn-primary">Buy Now</a>
            <div>
        </div>
`);
}
