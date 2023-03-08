<script lang="ts">

let title;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval: any = null;

function over(event: any) {
    let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter: any, index: any) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 15;
  }, 30);
}

</script>
<h1 data-value="helly" on:mouseover={over}  bind:this = {title}>HELLY</h1>