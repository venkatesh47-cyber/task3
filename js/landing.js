$(document).ready(function() {
    $(function() {
        $('[data-toggle="popover"]').popover({
            trigger: 'hover'
        });
    });
    viewMore();
    lazyload();
    var testimonial = '<div class="gravatar-wrap mr-2"> <img src="./images/profile-pic-sample.jpeg" class="gravatar" alt="Mac1"> </div><div class="account-info d-flex flex-column justify-content-center"> <p class="learner-name">Mac1</p></div></div><p class="testimonial">Mollit mollit culpa magna eu Lorem sunt. Esse magna occaecat cupidatat velit mollit anim consequat cillum veniam magna esse minim veniam.</p><p class="work"><span class="package">CTC: 21 Lakhs</span> <span class="recruiter-paypal';
    authorize.loginCheck();
    var flag = localStorage.getItem("reset_mail");
    if (flag) {
        $("#mail").html("<div class='alert alert-success' align='center'><b>Check your registered email...</b><br/>Reset the password by clicking the Link sent to your mail.</div>");
        localStorage.removeItem("reset_mail");
    }
    if (localStorage.getItem("dontAsk1") == "true") {
        $("#covid_modal").modal("hide");
    } else {
        covidModal();
    }
    $("#btn1").on("click", () => {
        $("#covid_modal").modal("hide");
        askLater();
    });
    $("#btn2").on('click', () => {
        $("#covid_modal").modal("hide");
        neverAsk();
    });
    var count = 9000;
    var facts = "testing";
    var data = {
        "type": "fetch"
    };
    authorize.ajax(data, 'landing', function(data) {
        data = JSON.parse(data);
        if (data.login != undefined) {
            if (data.login == 0) {
                authorize.auth_clear();
                authorize.loginCheck();
            }
        }
        $("#users").text(data.users);
        $("#mentors").text(data.mentors);
        $("#lines").text(data.lines);
        $("#videos").text(data.videos);
        $("#userCount").html("Join over " + (data.users * 0.00001).toFixed(1) + " lakh+ programmers.")
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $(".spinner").hide();
    });
    $('.count').on("isvisible", function() {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    })
    $("#subscribe").on('click', function() {
        var subscriber_mail = $("#subscribeEmail").val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        if ((subscriber_mail.length) && (!pattern.test(subscriber_mail))) {
            $("#subscribeEmail").addClass("alert-danger");
            $("#subscribeEmail").attr("placeholder", "Enter Valid Input");
            var sub_flag = null;
        } else {
            $("#subscribeEmail").removeClass("alert-danger");
            $("#subscribeEmail").attr("placeholder", " ");
            if (subscriber_mail.length)
                var sub_flag = 1;
        }
        if (sub_flag) {
            authorize.ajax({
                "email": subscriber_mail,
                "type": "subscribe"
            }, 'landing', function(data) {
                if (data == "subscribed") {
                    $("#sub_msg").css("display", "inline");
                    $("#sub_msg").html("<div class='alert alert-success' align='center'><b>Subscription successful...</b><br/>Thank you for subscribing.</div>");
                    $("#subscribeEmail").val("");
                    $("#sub_msg").fadeOut(4000);
                }
            })
        }
    });
});

function neverAsk() {
    localStorage.setItem("dontAsk1", "true");
}

function askLater() {
    var d = new Date();
    d.setTime(d.getTime() + (86400000));
    var expires = "expires=" + d.toUTCString();
    localStorage.setItem("modal_expiration", expires);
}

function viewMore() {
    let x = window.matchMedia("(max-width: 700px)");
    let line = $("#view-more").data("line");
    let start;
    let end;
    if (x.matches) {
        end = line * 3;
        start = end - 2;
    } else {
        end = line * 6;
        start = end - 5;
    }
    for (let i = start; i <= end; i++) {
        selector = `#offer-courses-list div:nth-child(${i})`;
        $(selector).removeClass("hide");
    }
    if (end > 16) {
        $("#view-more").text("View all courses");
    }
    if (end > 18) {
        window.location = "courses.html";
    }
}
$(document).on("click", "#view-more", function(e) {
    e.preventDefault();
    let line = $("#view-more").data("line");
    $("#view-more").data("line", line + 1);
    viewMore();
});

function lazyload() {
    let lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".guvi-lazy-img");
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.classList.remove("guvi-lazy-img");
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyloadImages.forEach(function(image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".guvi-lazy-img");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }
            lazyloadThrottleTimeout = setTimeout(function() {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function(img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('guvi-lazy-img');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }
        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
}
$("#carousel-click1").click(function() {
    location.href = "courses?itm_source=banner&itm_medium=click&itm_campaign=republic-banner"
});
$("#carousel-click2").click(function() {
    location.href = "courses?itm_source=banner-2&itm_medium=click&itm_campaign=republic-banner-2"
});
$("#modalRegister").on("click", function() {
    let email = $("#modalEmail").val();
    let name = $("#modalName").val();
    let number = $("#modalNumber").val();
    var emailVal = authorize.validate("#modalEmail", "email");
    var nameVal = authorize.validate("#modalName", "name");
    var numberVal = authorize.validate("#modalNumber", "mobile");
    if (emailVal && nameVal && numberVal) {
        authorize.ajax({
            type: "offerModal",
            email: email,
            name: name,
            number: number
        }, "notify", function(response) {
            response = JSON.parse(response);
            if (response.status == "success") {
                $(".modalEmail").addClass("hide");
                $(".modalName").addClass("hide");
                $(".modalNumber").addClass("hide");
                $(".registered").html("<div class='d-flex flex-column justify-content-center align-items-center'><h5 class='fw-normal text-primary'>Registered successfully</h5><h5 class='fw-normal text-primary'> You will be notified once the offer is live </h5></div>");
                $("#modalRegister").addClass("hide");
            }
            console.log(response);
        });
    }
});