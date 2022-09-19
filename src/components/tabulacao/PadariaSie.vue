<template>

      <div class="uk-flex uk-flex-column">
            <header class="uk-text-left uk-flex uk-flex-between">
                  <h2>Padaria</h2>
                  <input class="uk-input uk-width-1-5">
            </header>
            <section class="uk-section uk-margin-top uk-flex uk-flex-between">
                  <div class="uk-card uk-width-2-3">
                        <line-sie ref="lineHortifruti" />
                  </div>
                  <div class="uk-card uk-text-left">
                        <div class="uk-card-header">
                              <h4 class="uk-text-left uk-text-lead">Detalhe em Vendas</h4>
                        </div>
                        <div class="uk-card-body">
                              <p class="uk-text-default">Meta Dia: <span class="uk-text-lighter">
                                          {{parseInt(objDados.meta_dia).toLocaleString('pt-br',{style: 'currency',
                                          currency: 'BRL'})}}</span></p>
                              <p class="uk-text-default">Meta Mês: <span class="uk-text-lighter">
                                          {{parseInt(objDados.meta_mes).toLocaleString('pt-br',{style: 'currency',
                                          currency: 'BRL'})}}</span>
                              </p>
                              <p class="uk-text-default">Média Vendas Hora: <span class="uk-text-lighter">
                                          {{parseInt(objDados.mv_hora).toLocaleString('pt-br',{style: 'currency',
                                          currency: 'BRL'})}}</span></p>
                              <p class="uk-text-default">Média Vendas Dia: <span class="uk-text-lighter">
                                          {{parseInt(objDados.mv_dia).toLocaleString('pt-br',{style: 'currency',
                                          currency: 'BRL'})}}</span></p>
                              <p class="uk-text-default">Média Vendas Mês: <span class="uk-text-lighter">
                                          {{parseInt(objDados.mv_mes).toLocaleString('pt-br',{style: 'currency',
                                          currency: 'BRL'})}}</span></p>
                        </div>

                  </div>
            </section>

            <section class="uk-section uk-margin-top uk-flex uk-flex-between uk-margin-top">
                  <div class="uk-card uk-width-1-2">
                        <doughnut-receitas ref />
                  </div>
                  <div class="uk-card uk-width-1-2">
                        <doughnut-sie ref="dougHortifruit" />
                  </div>
            </section>
            <section class="uk-section uk-margin-top uk-flex uk-flex-between uk-margin-top">
                  <div class="uk-card uk-width-1-1">
                        <bar-hortifruit ref="barHortifruit"/>
                  </div>
            </section>
      </div>



</template>

<script>
import { dadosSetores } from '@/dados/dadosUtil';
import LineSie from '../graphsetores/padaria/LineSie.vue';
import DoughnutSie from '../graphsetores/padaria/DoughnutSie.vue';
import DoughnutReceitas from '../graphsetores/padaria/DoughnutReceitas.vue';
import BarHortifruit from '../graphsetores/padaria/BarHortifruit.vue';
export default {
      name: 'HortifrutiSie',
      components: {
            LineSie,
            DoughnutSie,
            DoughnutReceitas,
            BarHortifruit
      },
      computed: {

      },

      data() {
            return {
                  objDados: {}
            }
      },
      mounted() {
            this.objSetores()
      },
      methods: {
            objSetores() {
                  let i = Math.floor(Math.random() * dadosSetores.length)
                  this.objDados = dadosSetores[i]
                  console.log(this.objDados)
            }
      }
}
</script>

<style scoped>
header {
      margin: 10px 5px;
}

input {
      border: none;
      font-family: 'Poppins';
      font-size: 1.2em;
}
</style>