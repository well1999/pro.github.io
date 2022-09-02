
Config.set('assets', '../../assets');

(function (document, window, $) {
    'use strict';
    var Site = window.Site;
})(document, window, jQuery);

$(document).ready(function () {
    //AjaxErrorListener();

    //destravaTela(true);
    Site.run();
})
<!-- Global site tag (gtag.js) - Google Analytics -->
 async src="https://www.googletagmanager.com/gtag/js?id=UA-55693380-2">

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-55693380-2');</script>

function Login() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="/p/admin.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }
