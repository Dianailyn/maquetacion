var albums = ["The Dark Side of the Moon", "The Wall", "Fear of the Dark", "The Number of the Beast", "The Reazors Edge", "Highway to Hell", "Master of Puppets", "Metallica", "Trash", "Welcome to My Nightmare", "Lick it Up", "Destroyer", "The Final Countdown", "Wings of Tomorrow", "Ace of Spades", "Overkill", "Pleasure to Kill", "Endless Pain", "Kraken I", "Kraken II"];

var copiesSold = [45000000, 30000000, 7000000, 14000000, 5000000, 7000000, 10000000, 30000000, 5000000, 5000000, 3000000, 4000000, 3000000, 100000, 2000000, 1000000, 1500000, 2000000, 1000000, 1000000]; 

var genres = ["Progressive Rock", "Heavy Metal", "Trash Metal, Hard Rock" ]; 
var bandsCount = [5, 8, 6, 7];

var paises = ["United Kingdom", "Canadá", "United States", "Sweden", "Germany", "Colombia"]; 
var bandasCount = [6, 2, 6, 2, 2, 2]; 

var ciudades = ["London", "Toronto", "Berlin"]; 
var cantidadConciertos = [4, 1, 1]; 

var decadas = ["70's", "80's", "90's"]; 
var cantidadAlbumes = [6, 11, 4];

function graficarCopiasVendidas() {
    var data = [
        {
            x: albums,
            y: copiesSold,
            type: 'bar',
            marker: {
                color: 'rgb(93, 164, 214)',
            }
        }
    ];

    var layout = {
        title: 'Cantidad de Copias Vendidas por Álbum',
        xaxis: {
            title: 'Álbum'
        },
        yaxis: {
            title: 'Copias Vendidas'
        }
    };

    Plotly.newPlot('graph1', data, layout);
}

function graficarBandasPorGenero() {
    var data = [
        {
            x: genres,
            y: bandsCount,
            type: 'bar',
            marker: {
                color: 'rgb(255, 144, 14)',
            }
        }
    ];

    var layout = {
        title: 'Bandas por Género',
        xaxis: {
            title: 'Género'
        },
        yaxis: {
            title: 'Cantidad de Bandas'
        }
    };

    Plotly.newPlot('graph2', data, layout);
}
function graficarBandasPorPais() {
    var data = [
        {
            x: paises,
            y: bandasCount,
            type: 'bar',
            marker: {
                color: 'rgb(93, 164, 214)',
            }
        }
    ];

    var layout = {
        title: 'Bandas por País',
        xaxis: {
            title: 'País'
        },
        yaxis: {
            title: 'Cantidad de Bandas'
        }
    };

    Plotly.newPlot('graph3', data, layout);
}
function graficarConciertosPorCiudad() {
    var data = [
        {
            x: ciudades,
            y: cantidadConciertos,
            type: 'bar',
            marker: {
                color: 'rgb(93, 164, 214)',
            }
        }
    ];

    var layout = {
        title: 'Cantidad de Conciertos por Ciudad',
        xaxis: {
            title: 'Ciudad'
        },
        yaxis: {
            title: 'Cantidad de Conciertos'
        }
    };

    Plotly.newPlot('graph4', data, layout);
}
function graficarAlbumesPorDecada() {
    var data = [
        {
            x: decadas,
            y: cantidadAlbumes,
            type: 'bar',
            marker: {
                color: 'rgb(93, 164, 214)',
            }
        }
    ];

    var layout = {
        title: 'Cantidad de Álbumes por Década',
        xaxis: {
            title: 'Década'
        },
        yaxis: {
            title: 'Cantidad de Álbumes'
        }
    };

    Plotly.newPlot('graph5', data, layout);
}

