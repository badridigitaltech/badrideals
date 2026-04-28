<script>

/* AUTO % OFF */
document.querySelectorAll('.discount-badge').forEach(el=>{
let price=parseFloat(el.dataset.price);
let mrp=parseFloat(el.dataset.mrp);
if(price && mrp){
let off=Math.round(((mrp-price)/mrp)*100);
el.innerText=off+"% OFF";
}
});

</script>
