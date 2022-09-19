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
                                    data: tma[12],
                                    label: 'Média Dia Anual',
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
                                    data: tma[13],
                                    label: 'Hoje',
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
                        layout: {
                              padding: {
                                    top: 20
                              },
                              margin: 50
                        },

                        scales: {

                              x: {
                                    ticks: {
                                          display: false
                                    },
                                    grid: {
                                          display: false
                                    },

                              },
                              y: {
                                    stacked: true,
                                    grid: {
                                          display: false
                                    },
                                    ticks: {
                                          display: false
                                    },
                              },
                        },
                        plugins: {
                              legend: {
                                    position: 'right'
                              },

                              title: {
                                    display: true,
                                    text: `Açougue - Médias de Vendas 2022`,
                                    position: 'top',
                                    align: 'center',
                                    font: {
                                          family: 'Poppins',
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