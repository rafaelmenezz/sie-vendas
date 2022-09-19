<template>
  <div class="home">
    <header class="uk-section uk-flex uk-flex-column uk-text-left">
      <h2 class="uk-margin-remove-bottom">Home</h2>
      <span class="uk-text-muted">{{'Bem vindo Usuario, '   + hoje().dia + ' de '+ myMes[hoje().mes] + ' de '+
      hoje().ano
      }}</span>
    </header>

    <section class="uk-section uk-flex uk-flex-between uk-padding-remove">

      <div class="uk-card uk-card-default uk-padding uk-width-2-5 uk-margin-right">
        <doughnut-sie ref="pizza_vendas" :myDate="dataHoje" />
      </div>
      <div class="uk-card uk-card-default uk-padding-small uk-width-3-5 uk-margin-remove-top">
        <div class="uk-card-header">
          <h3 class="uk-text-left">Detalhes de Vendas</h3>
        </div>
        <div class="uk-card-body">
          <p class="uk-text-left"><span class="uk-text-lead uk-text-default uk-text-bold">Total média venda Mês:</span>
            R$ 5.330.942.25</p>
          <p class="uk-text-left"><span class="uk-text-lead uk-text-default uk-text-bold">Tempo Médio de
              Atendimento:</span> 31 minutos</p>
          <p class="uk-text-left"><span class="uk-text-lead uk-text-default uk-text-bold">Média de Venda Por
              Hora:</span> R$ 34.532.25</p>
          <p class="uk-text-left"><span class="uk-text-lead uk-text-default uk-text-bold">Média de Venda por Dia:</span>
            R$ 275.210.25</p>
          <p class="uk-text-left"><span class="uk-text-lead uk-text-default uk-text-bold">Meta de Venda Estipuda Para o
              Mês de {{mes}}:</span> R$ 4.498.532.25</p>
        </div>
      </div>
    </section>
    <section class="uk-section  uk-flex uk-flex-between">

      <div class="uk-card uk-card-default uk-padding uk-margin uk-width-1-1">
        <line-sie ref="line_vendas" class="uk-margin-remove" :meusDados="dados" />
      </div>

    </section>

    <section class="uk-section uk-width-1-1 uk-flex uk-flex-between">

      <div class="uk-card uk-card-default uk-padding uk-margin uk-width-1-1">
        <bar-vendas-sie ref="bar_vendas" class="uk-margin-remove" :meusDados="dadosVendas" />
      </div>

    </section>
  </div>
</template>

<script>
import { tma, dataDia, meses } from '@/dados/dadosUtil.js'
import DoughnutSie from '@/components/graphs/DoughnutSie.vue'
import LineSie from '@/components/graphs/LineSie.vue'
import BarVendasSie from '@/components/graphs/BarVendasSie.vue'


export default {
  name: 'HomeView',
  components: {
    DoughnutSie,
    LineSie,
    BarVendasSie

  },
  computed: {
    myMes() {
      return meses
    },
    hoje() {
      return dataDia
    }
  },


  data() {
    return {
      dia: '',
      mes: '',
      ano: '',
      dados: 1,
      dadosVendas: 5,
      dataHoje: {
        dia: '12',
        mes: '07',
        ano: '2022'
      },
      tamanhoArray: 15
    }
  },
  methods: {
    async grafico() {
      let i1 = Math.floor(Math.random() * this.tamanhoArray)
      let i2 = Math.floor(Math.random() * this.tamanhoArray)
      let i3 = Math.floor(Math.random() * this.tamanhoArray)
      let i4 = Math.floor(Math.random() * this.tamanhoArray)
      this.$refs.line_vendas.chartData.datasets[0].data = tma[i1]
      this.$refs.bar_vendas.chartData.datasets[0].data = tma[i2]
      this.$refs.bar_vendas.chartData.datasets[1].data = tma[i3]
      this.$refs.bar_vendas.chartData.datasets[2].data = tma[i4]

    },

    async gerarNumero() {
      let indice = Math.floor(Math.random * 15)
      this.dados = indice
    },

  },
  async mounted() {
   

  }
}
</script>

<style scoped>

</style>
