<script>
  // document.body.style.backgroundColor="red";
  //For background
  let toggle = $state(false);
  function changeBgColor() {
    toggle = !toggle;

    if (toggle == true) {
      //document.body.style.animation = "change 10s infinite";
      //  document.body.style.backgroundColor= "rgb(73, 190, 236)";
      document.body.classList.add("animate-background");
    } else {
      document.body.classList.remove("animate-background");
    }
  }

  import DisplayReco from "./lib/BookReco.svelte";
</script>

<h1>Shivani</h1>

<button id="color" style="float: right" onclick={changeBgColor}>
  {toggle == true
    ? "Click to revert"
    : "Click to view this page with my favourite background!"}</button
>

<br /><br />
<h2 style="text-align: center;">Hello There!</h2>
<p>I am an undergraduate student living in India</p>
<p>Scroll to know more!</p>

<div class="banner" id="codingBanner" style="text-decoration: dashed">
  Coding <code>&lt;/&gt;</code>
</div>
<p>Kode With Klossy Website Development Scholar, 2021 &lt;br&gt;</p>
<p>Kode With Klossy Data Science Scholar, 2024 &lt;br&gt;</p>
<p>
  Programming Languages (in decreasing order of proficiency):<large>
    <large> C++, </large>
  </large>
  <large>C, </large><small
    >Java, <small
      >HTML, <small>
        CSS, JavaScript, <small>Assembly, Python</small></small
      ></small
    ></small
  >&lt;br&gt;
</p>
<p>I can code in more languages than I can speak! &lt;br&gt;</p>

<div class="banner" style="text-decoration: dashed">Hobbies</div>
<center>
  <div style="font-size: 50px;">
    READING <br /><small>
      READING <br /><small>
        Reading <br /><small>
          Reading <br />
          <small>
            Reading <br /><small>
              Reading <br /><small> Reading </small></small
            ></small
          ></small
        ></small
      ></small
    >
  </div>
</center>

<p>It's reading all the way</p>
<p>My favourite genre is science fiction</p>
<p>I love writing as well, expecially haiku</p>

<div class="banner">Random</div>
<DisplayReco />

<ul>
  <li>I love reading and writing inspirational quotes</li>
  <li>
    Here's a <a
      title="The Climb"
      href="https://www.youtube.com/watch?v=NG2zyeVRcbs">song</a
    > I like
  </li>
  <li>I like making lists</li>
</ul>

<div id="fancy" style="text-align: center">
  <i
    >I am passionate about many things, such as literature, coding and sports
    &#10024; &#x2728;</i
  >
</div>
<p id="hearts" style="color: goldenrod; font-size: 30px;">
  &hearts; &hearts; &hearts; &hearts; &hearts; &hearts; &hearts; &hearts;
  &hearts; &hearts; &hearts; &hearts; &hearts;
</p>

<style>
  h1 {
    color: #2c3e50;
    font-family: Arial, sans-serif;
  }
</style>
