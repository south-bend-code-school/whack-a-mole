
(function(){
  $(document).ready(initialize);

  function initialize(){
    $(".yeti").click(rawr);
  }

  function rawr(){
      alert("Rawwrrrr!");
      $('body').css('background-image','url("https://i.ytimg.com/vi/PMpBvbA-XmU/maxresdefault.jpg")');

    }


})();
