<script>
  let toggle = $state(false);

  function changeBgColor() {
    toggle = !toggle;
    document.body.classList.add("animate-background");
    if (toggle == true) {
      document.body.classList.add("animate-background");
    } else {
      document.body.style.animation = null;
    }
  }
</script>

<!-- import {Body} from '../App.svelte'; -->

<button id="color" style="float: right" onclick={changeBgColor}>
  {toggle == true
    ? "Click to view this page with my favourite background!"
    : "Click to revert"}</button
>
{#if toggle}
  <!-- A example where style is a classic string -->
  <!-- <Body style="background-color: #f2f2f2;" /> -->

  <!-- Style can also be an object of styles -->
  <!-- <Body style={{ color: "violet" }} /> -->
{/if}

<style>
  @keyframes change {
    0% {
      background-color: rgb(122, 209, 244);
    }

    25% {
      background-color: rgb(73, 190, 236);
    }

    50% {
      background-color: rgb(52, 191, 246);
    }

    75% {
      background-color: rgb(73, 190, 236);
    }

    100% {
      background-color: rgb(122, 209, 244);
    }
  }
</style>
