let search_div = $("#search_show");
let close_btn = $("#close")
let search = `<form class="w-1/2 mx-auto mt-40" action="">
            <div class="relative">
                <input class="w-full p-2 rounded-xl bg-bg border-solid border-2 border-primary text-2xl text-primary drop-shadow-main focus:outline-none" type="text" name="search" id="search_input">
                <button class="text-primary text-2xl absolute top-[10px] right-[16px]" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>`;

// show search form
$("#search").on('click', showSearch);

// hide search form
search_div.on("click", function (e) {
    if ("search_show" == e.target.id) {
        hideSearch();
        e.stopPropagation();
    }
})
document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
        hideSearch();
    }
})



function showSearch() {
    search_div.removeClass("hidden");
    search_div.addClass("fixed");
    search_div.html(search);
}
function hideSearch() {
    search_div.removeClass("fixed");
    search_div.addClass("hidden");
}

let category = "mmorpg"
let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
getGameData(url)
$("#links a").on('click', function (e) {
    category = e.target.id;
    url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`
    getGameData(url)
    $("#links a").removeClass("active")
    $(e.target).addClass("active")
})

function getGameData(url) {
    $.ajax({
        url: url,
        method: "GET",
        headers: {
            'x-rapidapi-key': 'f44f564947mshb2731f45134a93fp1aea5cjsnab9f7f06a41a',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
        success: function (result) {
            let cont = ``;
            $("#main_img").attr("src", `${result[0].thumbnail}`)
            $("#main_name").text(`${result[0].title}`)
            $("#main_desc").text(`${result[0].short_description}`)
            $("#main_cate").html(`<li>
                                    <p>${result[0].genre}</p>
                                </li>
                                <li>
                                    <p>${result[0].platform}</p>
                                </li>`)
            $("#main_publisher").text(`${result[0].publisher}`)
            for (let i = 0; i < result.length; i++) {
                cont += `
                <a id="show_one_game" class="cursor-pointer" onclick="showOne('${result[i].title}','${result[i].thumbnail}','${result[i].short_description}','${result[i].genre}','${result[i].platform}','${result[i].publisher}','${result[i].game_url}')">
                    <div class="h-[420px] w-[269px] relative rounded-xl">
                        <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-linear-start-top to-linear-end-bottom rounded-xl"></div>
                        <img class="object-fill w-full h-full rounded-xl" src="${result[i].thumbnail}" alt="no">
                        <div class="text-primary absolute bottom-6 left-4">
                            <h3 class="text-3xl">${result[i].title}</h3>
                            <p class="mt-5">${result[i].platform}</p>
                        </div>
                    </div>
                </a>`
            }
            $("#all_games").html(cont);
            $("#main_game_link").on("click", function () {
                showOne(`${result[0].title}`, `${result[0].thumbnail}`, `${result[0].short_description}`, `${result[0].genre}`, `${result[0].platform}`, `${result[0].publisher}`, `${result[0].game_url}`)
            })
        }
    });
}

function showOne(title, img, desc, category, os, publisher, url) {
    $("#show_one").html(`<button id="close" class="text-primary float-end mr-5"><i class="fa-solid fa-x"></i></button>
        <div class="w-[50%] mx-auto flex flex-col gap-10">
            <img class="w-full h-[300px] object-cover rounded-2xl" src="${img}" alt=""
                srcset="">
            <div class="flex flex-col gap-5">
                <h1 class="text-primary text-6xl">${title}</h1>
                <p class="text-secondary">${desc}</p>
                <ul class="text-secondary flex gap-10 mb-5">
                    <li>
                        <p>${category}</p>
                    </li>
                    <li>
                        <p>${os}</p>
                    </li>
                </ul>
                <div class="text-secondary flex gap-4">
                    <p>published by</p>
                    <p class="text-primary">${publisher}</p>
                </div>
                <div class="flex justify-between">
                    <div class="text-secondary flex gap-4">
                        <p>Downloading</p>
                        <p class="text-primary">22,500</p>
                    </div>
                    <div>
                        <a href="${url}" target="_blank" class="text-bg px-14 text-2xl py-3 rounded-2xl z-20 bg-primary w-fit hover:bg-secondary transition-all duration-1000 cursor-pointer">Show</a>
                    </div>
                </div>
            </div>
        </div>`)
    openGame();
    // close game one
    $("#close").on("click", closeGame)
    document.addEventListener("keydown", function (e) {
        if (e.key == "Escape") {
            closeGame()
        }
    })

}

function closeGame() {
    $("#show_one").removeClass("fixed")
    $("#show_one").addClass("hidden")
}
function openGame() {
    $("#show_one").removeClass("hidden")
    $("#show_one").addClass("fixed")
}

$(function () {
    $(".loader").fadeOut(3000, function () {
        $(".loading").fadeOut(1000)
    })
})