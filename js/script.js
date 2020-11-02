$('#search-button').click(function () {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${$("#search").val()}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error(response.statusText)
        })
        .then(response => {
            console.log(response)
        })
});