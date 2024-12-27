let search_div = $("#search_show");
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