const ShapeAnimation = document.getElementById('animation')

const loadAnimation = () => {
    ShapeAnimation.innerHTML +=
    `<div class="shape-logo-1">
   <div class="circle-1">
     <div class="square-1">
       <div class="diamond-1"></div>
     </div>
   </div>
 </div>
 <br>
 <br>
 <div class="shape-logo-1">
  <div class="circle-1">
    <div class="square-1">
      <div class="diamond-1"></div>
    </div>
  </div>
</div>
<br>
<br>
<br>
 <div class="shape-logo-2">
  <div class="circle-2">
    <div class="square-2">
      <div class="diamond-2"></div>
    </div>
  </div>
</div>
<br>
<br>
<br>
<div class="shape-logo-3">
  <div class="circle-3">
    <div class="square-3">
      <div class="diamond-3"></div>
    </div>
  </div>
</div>
</div>`
}

setTimeout(loadAnimation, 2500);




