$(document).ready(function () {
    const searchAnime = () => {
        $('#anime-list').html('');
        fetch(`https://api.jikan.moe/v3/search/anime?q=${$("#search").val()}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText)
            })
            .then(response => {
                let anime = response.results;
                $.each(anime, (i, data) => {
                    $('#anime-list').append(`
                    <div class="col-md-4">
                        <div class="card bg-dark text-light mb-3">
                            <img src="${data.image_url}" class="card-img-top" alt="${data.title}">
                            <div class="card-body">
                                <h4 class="card-title font-weight-bold">${data.title}</h4>
                                <h5 class="card-title">${data.episodes} Episodes</h5>
                                <h5 class="card-title font-italic">Rate: ${data.score}</h5>
                                <p class="card-text">${data.synopsis}</p>
                                <button class="btn btn-info" id="detail-button" data-toggle="modal" data-target="#animeModal">Selengkapnya</button>
                            </div>
                        </div>
                    </div>    
                `);
                });
                $('#search').val('');
            })
    }

    $('#search-button').click(() => {
        searchAnime();
    });

    $('#search-button').keyup((e) => {
        if (e.keyCode === 13) {
            searchAnime()
        }
    })

    $('#anime-list').on("click", "#detail-button", function() {
        fetch(`https://api.jikan.moe/v3/anime/${$(this.data('id'))}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(response => {
                $('.modal-body').html(`
                
            `);
        });
    })
});

