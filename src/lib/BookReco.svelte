<script>
  let books = [
    "What Money Can't Buy",
    "The Inimitable Jeeves",
    "Percy Jackson series",
    "Lab Girl",
    "The Hitchhiker's Guide to the Galaxy",
    "A Wrinkle in Time",
    "Artemis Fowl",
    "Wonder",
    "Fintan Fedora: The World's Worst Explorer",
    "Inkheart",
    "A Brief History of Time",
  ];

  let random = $state();
  let index = $derived(Math.floor(random));
  let book = $derived(books[index]);

  function displayBook() {
    random = Math.random() * 11;
  }
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_distracting_elements -->
<marquee onmouseover={this.stop()} onmouseout={this.start()}>
  <button onclick={displayBook}>Click for a book recommendation</button>
</marquee>
<center><p>{book}</p></center>

<style>
  button:hover {
    cursor: pointer;
    background-color: rgba(152, 205, 245, 0.692);
  }

  button {
    height: 3.2em;
    font-size: 16px;
    font-family: "Anonymous Pro", monospace;
    font-weight: 400;
    background-color: rgba(181, 215, 241, 0.692);
    border-radius: 8px;
    border-color: rgb(181, 215, 241);
    margin: 1%;
  }
</style>
