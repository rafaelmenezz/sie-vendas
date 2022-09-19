<template>
      <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
</template>
    
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { meses } from '@/dados/dadosUtil.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
      name: 'BarChart',
      components: { Bar },
      props: {
            chartId: {
                  type: String,
                  default: 'bar-chart'
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
            }
      },
      data() {
            return {
                  chartData: {

                        labels: this.loadMeses(8),
                        datasets: [
                              {
                                    data: [512, 565, 517, 425, 427, 421, 322, 598, 512],
                                    label: '',
                                    backgroundColor: [
                                          '#92c7a3'
                                    ],
                                    borderColor: [
                                          'var(--blue)'
                                    ],
                                    barThickness: 20,
                                    maxBarThickness: 25,
                                    borderRadius: '50'

                              }


                        ]
                  },
                  chartOptions: {
                        responsive: true,
                        indexAxis: 'y',
                        scales: {
                              x: {
                                    grid: {
                                          display: false
                                    },

                              },
                              y: {

                                    grid: {
                                          display: false
                                    },
                              },
                        },
                        plugins: {
                              legend: {
                                    display: false
                              },
                              title: {
                                    display: true,
                                    text: 'Loja ',
                                    position: 'top',
                                    align: 'center',
                                    font: {
                                          size: '20em'
                                    }
                              },
                              label: {
                                    display: false
                              },
                              tooltip: {
                                    displayColors: true
                              }
                        }
                  }
            }
      },

      methods: {
            loadMeses(max) {
                  let x = parseInt(max)
                  let valor = []
                  for (let i = 0; i <= x; i++) {
                        valor[i] = meses[i].substring(0, 3)
                  }
                  return valor
            }
      }
}
</script>