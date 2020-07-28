<template>
  <div id="app">
    <header>
      <nav id="nav" class="blue lighten-3">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo valign-wrapper">
            <img src="./assets/img/Gorelektroset.jpg" width="40px" height="40px" class="logo">
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/">Список тем</router-link> </li>
            <li><router-link to="/about">Полезные ссылки</router-link></li>
          </ul>
        </div>
      </nav>
    </header>
   <main>
     <router-view/>
   </main>
   <footer class="page-footer blue lighten-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Приложение для проверки знаний персонала УАиЦЭС</h5>
                <p class="grey-text text-lighten-4">
                  <router-link to="/">Список тем</router-link>
                </p>
                <p class="grey-text text-lighten-4">
                  <router-link to="/about">Полезные ссылки</router-link>
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="http://www.pges.su/" target="_blank">
                      ЗАО "Пензенская горэлектросеть"
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="http://www.consultant.ru/document/cons_doc_LAW_314661/" target="_blank">
                      Федеральный закон от 27.12.2018 N 522-ФЗ
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="http://www.consultant.ru/document/cons_doc_LAW_156148/b3ff40ceea8ae665280131c2b50f9892cb958415/"
                      target="_blank"
                    >
                      Приказ Минтруда России от 24.07.2013 N 328н
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="http://www.consultant.ru/document/cons_doc_LAW_169008/" target="_blank">
                      Приказ Минтруда России от 28.03.2014 N 155н
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
  </div>
</template>

<style lang="scss">
@import url('../node_modules/materialize-css/dist/css/materialize.min.css');
@import url('./assets/style.scss');
#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .logo {
    margin-left: 15px;
  }
</style>
