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

