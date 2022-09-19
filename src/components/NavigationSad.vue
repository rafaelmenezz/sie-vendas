<template>
      <header class="uk-flex uk-flex-row uk-flex-between uk-padding-small">
            <div class="logo">
                  <h3 class="uk-margin-remove">SIE- Sistema de Informação Execultivo</h3>
            </div>
            <nav class="uk-width-1-3 uk-flex uk-flex-right">
                  <router-link to="/">Home</router-link>
                  <router-link to="/operacao">Operação</router-link>
                  <router-link to="/setores">Setores</router-link>
            </nav>
      </header>

</template>

<script>
export default {

}
</script>

<style scoped>
      header{
            width: 100%;
            background-color: var(--blue);
            color: #fff;
      }
      div h3{
            color: #fff;
      }

      header nav a{
            margin: 0 15px;
            text-decoration: none;
            color: #fff;
      }

</style>