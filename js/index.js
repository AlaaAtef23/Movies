let sideBarinnerWidth = $(".sideBar-inner").innerWidth();
$("#sideBar").css('left', -sideBarinnerWidth + 'px');
$(".icon-1 ").click(function() {
    // $(".sideBar-inner").hide(1000);
    if ($("#sideBar").css('left') == "0px") {
        $("#sideBar").animate({ left: -sideBarinnerWidth }, 500)
        $(".icon-1 i").remove();
        $(".icon-1").append(`<i class="fa-solid fa-bars "></i>`);
    } else {
        $("#sideBar").animate({ left: '0px' }, 500);
        $(".icon-1 i").remove();
        $(".icon-1").append(`<i class="fa-solid fa-xmark"></i>`);

    }

    // let layerInnerWidth = $('layer').innerWidth();
    // $(".img").hover(function() {
    //     $(".layer").animate({ top: '0px' }, 600)
    //         // $('.layer').removeClass('top-0');

    // }, function() {
    //     // $(".layer").animate({ top: layerInnerWidth }, 600)
    //     $('.layer').addClass('top-0');
    // });
    // $(".item").click(function() {
    //     $(".layer").animate({ top: '0px' }, 600)

    // });
    // $(".layer").css({ "top": layerInnerWidth })


});
////////////////////////////////////////////////////
var result;
async function getcatigory(groupCode) {
    var categories = await fetch(`https://api.themoviedb.org/3/${groupCode}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    result = await categories.json();
    // console.log(result);
    displaycatigory();
}
var cartona;

function displaycatigory() {
    cartona = [];
    for (let i = 0; i < 20; i++) {
        cartona += `<div class="img col-lg-4 d-inline-block">
        <div class="item position-relative">
            <img src="https://image.tmdb.org/t/p/w500${result.results[i].poster_path}" class="w-100 image" alt="">
             <div class="layer p-3 position-absolute bg-white w-100  h-100 opacity-75  text-center flex-wrap d-flex align-items-center justify-content-center text-center">
               <div> 
                 <h3 id="title">${result.results[i].title}</h3>
                 <p>${result.results[i].overview}</p>
                 <br>
                 <h5>rate: ${result.results[i].vote_average}</h5>
                 <h5> ${result.results[i].release_date}</h5>
                 

                </div>
    
       </div>
        </div>
    </div>`
    }
    document.getElementById('imges').innerHTML = cartona;
}
getcatigory('movie/popular');

var groupCodes = document.querySelectorAll('ul li')
var groupCode = '';
for (let i = 0; i < groupCodes.length; i++) {
    groupCodes[i].addEventListener('click', function() {
        // var groupCode = $(".li").attr('groupCode');
        groupCode = groupCodes[i].getAttribute('groupCode')
            // console.log(groupCode);
        getcatigory(groupCode);
        // console.log(cartona[1]);


    })
}

//////////////////////search////////////////////
// const title = document.getElementById('title');
// const titleContent = title.textContent;

function search(term) {
    var searchMatch = [];
    for (let i = 0; i < 20; i++) {
        var movieTitle = result.results[i].title
        if (movieTitle.toLowerCase().includes(term.toLowerCase()) == true) {
            // console.log(movieTitle);
            searchMatch.push(cartona[i])
        }
        // console.log(cartona[i]);

    }
    cartona = [];
    for (let i = 0; i < 20; i++) {
        cartona += `<div class="img col-lg-4 d-inline-block">
        <div class="item position-relative">
            <img src="https://image.tmdb.org/t/p/w500${result.results[i].poster_path}" class="w-100 image" alt="">
             <div class="layer p-3 position-absolute bg-white w-100  h-100 opacity-75  text-center flex-wrap d-flex align-items-center justify-content-center text-center">
               <div> 
                 <h3 id="title">${result.results[i].title}</h3>
                 <p>${result.results[i].overview}</p>
                 <br>
                 <h5>rate: ${result.results[i].vote_average}</h5>
                 <h5> ${result.results[i].release_date}</h5>
                 

                </div>
    
       </div>
        </div>
    </div>`
    }
    document.getElementById('imges').innerHTML = cartona;
}
/////////////////////////////////////////form///////////
function validateName(term1) {
    var regex2 = /^[A-Za-z0-9]+$/;
    if (regex2.test(term1) == false) {
        document.getElementById('enterName').innerHTML = `<div class = "bg-danger-subtle p-3" > entre valid Name </div>`
    } else {
        document.getElementById('enterName').innerHTML = ``

    }
}
// 
function validateMail(term1) {
    var regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex1.test(term1) == false) {
        document.getElementById('enterMail').innerHTML = `<div class = "bg-danger-subtle p-3" > entre valid email </div>`
    } else {
        document.getElementById('enterMail').innerHTML = ``

    }
}

function validatePhone(term1) {
    var regex3 = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    if (regex3.test(term1) == false) {
        document.getElementById('enterPhone').innerHTML = `<div class = "bg-danger-subtle p-3" > entre valid phone </div>`
    } else {
        document.getElementById('enterPhone').innerHTML = ``

    }
}

function validateAge(term1) {
    var regex4 = /^(?:[1-9]|[1-9][0-9]|100)$/;
    if (regex4.test(term1) == false) {
        document.getElementById('enterAge').innerHTML = `<div class = "bg-danger-subtle p-3" > entre valid Age </div>`
    } else {
        document.getElementById('enterAge').innerHTML = ``

    }
}

function validatePass(term1) {
    var regex3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex3.test(term1) == false) {
        document.getElementById('enterPassword').innerHTML = `<div class = "bg-danger-subtle p-3" >entre valid password *Minimum eight characters, at least one letter and one number:*</div>`
    } else {
        document.getElementById('enterPassword').innerHTML = ``

    }
}
var password = document.getElementById('password')

function validateRepass(term1) {
    // var regex3 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (term1 !== password.value) {
        document.getElementById('enteRepassword').innerHTML = `<div class = "bg-danger-subtle p-3" >entre valid repassword </div>`
    } else {
        document.getElementById('enteRepassword').innerHTML = ``

    }
}