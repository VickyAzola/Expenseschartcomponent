
async function getJson() {
    return await fetch('./data.json')
    .then(function(response) {
        return response.json()
    })
}

const spendingChart = document.getElementById('chart');

(async function createChart() {
    const data = await getJson()

    const noTitle = () => {
        return ""
    }

    const dolar = function(value) {
        return "$" + value.formattedValue;
    }

    new Chart(spendingChart, {
        type: 'bar',
        data: {
            labels: data.map(row => row.day),
            datasets: [{
                label: '',
                data: data.map(row => row.amount),
                backgroundColor: '#ec775f',
                borderRadius: 12,
                borderWidth: 6,
                borderColor: '#fffcf7',
                inflateAmount: 6,
                hoverBackgroundColor: '#76b5bc',
            }],
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: '#93867b',
                        padding: 6,
                        font: {
                            weight: 'lighter'
                        },
                    },
                    grid: {
                        display: false,
                        drawTicks: false
                    }
                },
                y: {
                    ticks: {
                        display: false,
                        drawTicks: false
                    },
                    grid: {
                        display: false,
                        drawTicks: false
                    }   
                }
            },
            plugins:  {
                legend: {
                    display: false
                },
                title: {
                    display: false
                },
                subtitle: {
                    display: false
                },
                tooltip: {
                    position: 'nearest',
                    backgroundColor: '#382314',
                    displayColors: false,
                    caretSize: 0,
                    bodyFont: {
                        weight: 'bold'
                    },
                    callbacks: {
                        title: noTitle,
                        label: dolar
                    }
                }
            }
        },
    });

}) ()
