let ratingArray = [];
let movieNameArray = [];
let idArray = [];

$.ajax({
    type: "GET",
    url: "https://dummyapi.online/api/movies",
    data: "data",
    dataType: "JSON",
    success: function (response) {
        // console.log(response);
        response.forEach(element => {
            ratingArray.push(element.rating);
            // console.log(ratingArray);
            movieNameArray.push(element.movie);
            // console.log(movieNameArray);
            idArray.push(element.id);
            // console.log(idArray);

        });

        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: movieNameArray,
                datasets: [{
                    label: 'Movies watched counter',
                    data: ratingArray,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // const data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [{
        //         label: 'Looping tension',
        //         data: ratingArray,
        //         fill: false,
        //         borderColor: 'rgb(75, 192, 192)',
        //     }]
        // };

        // const ctx1 = document.getElementById('myChart2');

        // new Chart(ctx1, {
        //     type: 'line',
        //     data: data,
        //     options: {
        //         animations: {
        //             tension: {
        //                 duration: 1000,
        //                 easing: 'linear',
        //                 from: 1,
        //                 to: 0,
        //                 loop: true
        //             }
        //         },
        //         scales: {
        //             y: {
        //                 min: 0,
        //                 max: 100
        //             }
        //         }
        //     }
        // });
    }
});

// const ctx2 = document.getElementById('myChart3');

// const data = {
//     labels: [
//         'Red',
//         'Blue',
//         'Yellow'
//     ],
//     datasets: [{
//         label: movieNameArray,
//         data: [300, 50, 100],
//         backgroundColor: [
//             'rgb(255, 99, 132)',
//             'rgb(54, 162, 235)',
//             'rgb(255, 205, 86)'
//         ],
//         hoverOffset: 4
//     }]
// };

// const config = {
//     type: 'doughnut',
//     data: data,
// };

// new Chart(ctx2, config);



let movieCount = 0;

function addMovie() {
    const movieNameInput = document.getElementById('movieName');
    const movieName = movieNameInput.value;

    if (movieName) {
        const movieList = document.getElementById('movieList');
        const newMovieItem = document.createElement('li');
        newMovieItem.textContent = movieName;
        movieList.appendChild(newMovieItem);

        movieCount++;
        document.getElementById('movieCount').textContent = movieCount;

        movieNameInput.value = '';
    }
}

google.charts.load("current", {
    packages: ["corechart"]
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Genre', 'Percentage'],
      ['The Shawshank Redemption', 30],
      ['The Godfather', 20],
      ['The Dark Knight', 15],
      ['Pulp Fiction', 10],
      ['The Lord of the Rings: The Return of the King', 25]
    ]);

    var options = {
      title: '',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }


