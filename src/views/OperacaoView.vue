<template>
  <div class="operacao">
    <header class="uk-section uk-flex uk-flex-column uk-text-left">
      <h2 class="uk-margin-remove-bottom">Operação</h2>
      <span class="uk-text-muted">{{'Dados da operação, ' + hoje().dia + ' de '+ myMes[hoje().mes] + ' de '+ hoje().ano }}</span>
    </header>
    <section class="uk-section uk-margin-remove-top uk-padding-remove">
      <div class="uk-card uk-card-default">
        <table class="uk-table uk-table-divider uk-table-small uk-table-striped">
          <thead>
            <tr>
              <th class="uk-text-center" >Caixa</th>
              <th class="uk-text-center">Tipo</th>
              <th class="uk-text-center">TMA</th>
              <th class="uk-text-center">TMO</th>
              <th class="uk-text-center">Venda p/ Hora</th>
              <th class="uk-text-center">Venda Dia</th>
              <th class="uk-text-center">Venda Mês</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dadosCaixa" :key="item.caixa">
              <td>{{item.caixa}}</td>
              <td>{{item.descricao}}</td>
              <td>{{item.tma}}</td>
              <td>{{item.tmo}}</td>
              <td>{{item.vendaDia.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</td>
              <td>{{item.vendaHora.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td>
              <td>{{item.vendaMes.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
  import { caixas, meses, dataDia } from '@/dados/dadosUtil';
export default {
  name: 'OperacaoView',
  computed:{
    dadosCaixa(){
      return caixas
    },
    myMes(){
      return meses
    },
    hoje(){
      return dataDia
    }
  }
}
</script>

<style>

</style>