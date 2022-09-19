<template>
      <Line ref="line" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
            :height="height" />
</template>
    
<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, LinearScale, PointElement, LineElement, CategoryScale } from 'chart.js'
import { tma, horarios } from '@/dados/dadosUtil.js';

ChartJS.register(Title, Tooltip, LinearScale, PointElement, LineElement, CategoryScale)

export default {
      name: 'LineChart',
      components: { Line },
      props: {
            chartId: {
                  type: String,
                  default: 'line-chart'
            },
            datasetIdKey: {
                  type: String,
                  default: 'label'
            },
            width: {
                  type: Number,
                  default: 0
            },
            height: {
                  type: Number,
                  default: 0
            },
            cssClasses: {
                  default: '',
                  type: String
            },
            styles: {
                  type: Object,
                  default: () => { }
            },
            plugins: {
                  type: Object,
                  default: () => { }
            },
            meusDados: Number
      },
      computed: {
            chartData() {
                  return {

                        labels: horarios,
                        datasets: [
                              {
                                    data: tma[0],
                                    label: 'Frente de Caixa',
                                    backgroundColor: [
                                          '#83af9b'
                                    ],
                                    borderColor: [
                                          '#83af9b'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              },
                              {
                                    data: tma[1],
                                    label: 'Padaria',
                                    backgroundColor: [
                                          '#47667b'
                                    ],
                                    borderColor: [
                                          '#47667b'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              },
                              {
                                    data: tma[2],
                                    label: 'Açougue',
                                    backgroundColor: [
                                          '#fe4365'
                                    ],
                                    borderColor: [
                                          '#fe4365'
                                    ],
                                    barThickness: 25,
                                    maxBarThickness: 1050,
                                    mmaxBarLength: 10,
                              },


                        ]
                  }
            },
            chartOptions() {
                  return {
                        responsive: true,
                        plugins: {
                              legend: {
                                    position: 'right'
                              },
                              title: {
                                    display: true,
                                    text: `Loja - Tempo Médio de Atendimento (Em minutos)`,
                                    position: 'top',
                                    align: 'start',
                                    font: {
                                          size: '20em'
                                    }
                              },
                        }
                  }
            }
      },
      data() {
            return {
                  
            }
      },
      methods: {

      },
      watch: {
            meusDados: function () {
                  console.log(this.$refs)
            }
      }
}
</script>