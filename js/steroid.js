"use strict";
class steroid {
    setSession(key, value) {
        if (value) {
            localStorage.setItem(key, value);
        }
    }
    getSession(key) {
        return localStorage.getItem(key);
    }
    clearSession(key) {
        localStorage.removeItem(key);
    }
    auth_clear() {
        if (this.getSession("forumAnnouncementModal") === "true") {
            localStorage.clear();
            this.setSession("forumAnnouncementModal", "true");
            return true;
        }
        localStorage.clear();
    }
    get_queryStringVal(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split("&"),
            sParameterName, i;
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
    spinner(option) {
        let spinner = $(".spinner");
        if (option == "show") {
            spinner.show();
        } else if (option == "hide") {
            spinner.hide();
        }
    }
    ajax(json_value, url_id, callback, asyncStatus = true) {
        let authorize = this;
        json_value = this.authTokenAppend(json_value);
        let json_data = JSON.stringify(json_value);
        let mapping = this.url_mapper(url_id);
        authorize.spinner("show");
        $.ajax({
            type: "POST",
            async: asyncStatus,
            data: {
                myData: json_data
            },
            timeout: 60000,
            url: mapping
        }).done(function(result) {
            authorize.loginCheck();
            authorize.spinner("hide");
            if (result == "access_denied") {
                $("main").removeClass("loading");
                authorize.auth_clear();
                authorize.loginCheck();
            } else {
                callback(result);
            }
        }).fail(function(result) {
            callback("ajax_timeout");
            return false;
        });
    }
    invisibleAjax(json_value, url_id, callback, asyncStatus = true) {
        json_value = this.authTokenAppend(json_value);
        let json_data = JSON.stringify(json_value);
        let mapping = this.url_mapper(url_id);
        $.ajax({
            type: "POST",
            async: asyncStatus,
            data: {
                myData: json_data
            },
            timeout: 60000,
            url: mapping
        }).done(function(result) {
            authorize.loginCheck();
            if (result == "access_denied") {
                $("main").removeClass("loading");
                authorize.auth_clear();
                authorize.loginCheck();
            } else {
                callback(result);
            }
        }).fail(function(result) {
            callback("ajax_timeout");
            return false;
        });
    }
    wecpCompiler(url_id, CompilerData, callback) {
        let sourceCode = JSON.stringify(CompilerData);
        let mapping = this.url_mapper(url_id);
        $(".spinner").show();
        $.ajax({
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: sourceCode,
            url: mapping
        }).done(function(result) {
            $(".spinner").hide();
            callback(result);
        });
    }
    HtmlEntityToStr(data) {
        if (data) {
            data = data.replace(/\n/g, "<br>");
        }
        return data;
    }
    guviHtmlEncode(string, type) {
        if (string) {
            if (typeof type !== "undefined") {
                if (type == "encodeEverything") {
                    return he.encode(string, {
                        encodeEverything: true
                    });
                } else if (type == "decimal") {
                    return he.encode(string, {
                        decimal: true
                    });
                } else if (type == "strict") {
                    return he.encode(string, {
                        strict: true
                    });
                } else if (type == "allowUnsafeSymbols") {
                    return he.encode(string, {
                        allowUnsafeSymbols: true
                    });
                }
            } else {
                return he.encode(string, {
                    useNamedReferences: false,
                    strict: false
                });
            }
        }
    }
    guviHtmldecode(string, type) {
        if (string) {
            return he.decode(string);
        }
    }
    sanitize(html) {
        var output = $($.parseHTML("<div>" + html + "</div>", null, false));
        output.find("*").each(function() {
            authorize.trimAttributes(this);
        });
        return output.html();
    }
    trimAttributes(node) {
        $.each(node.attributes, function() {
            var attrName = this.name;
            var attrValue = this.value;
            if (attrName.indexOf("on") == 0 || attrValue.indexOf("javascript:") == 0) {
                $(node).removeAttr(attrName);
            }
        });
    }
    guviEscape(string) {
        return he.escape(string);
    }
    guviUnescape(string) {
        return he.unescape(string);
    }
    RedirectPagesBasedOnUserType(key) {
        var redirect_path = this.getSession("redirection_path");
        var login_source = this.getSession("login_source");
        if (login_source) {
            this.clearSession("login_source");
            return login_source;
        } else if (redirect_path == "brand-register") {
            return "brandambassador-register.html";
        } else if (redirect_path == "login") {
            return "virtusa/index.html#virtusa-register";
        } else {
            var user_type = {
                "0": "courses.html",
                "1": "dashboard.html",
                "2": "dash.html",
                "3": "camp-index.html",
                "4": "camp-index.html",
                "5": "admin-index.html",
                "6": "college-index.html",
                "7": "admin-college-index.html",
                "8": "PublicPlaylists.html",
                "9": "courselist.html",
                "10": "suadmin.html",
                "11": "author-dashboard.html"
            };
            return user_type[key];
        }
    }
    GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split("&");
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split("=");
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    authTokenAppend(data) {
        var token = this.getSession("authToken");
        data.authtoken = token;
        return data;
    }
    url_mapper(id) {
        var model_path = {
            codekataTags: "model/v2/codekata/code-kata.php",
            Leaderboard: "model/v2/leaderboard.php",
            codekataFetchQuestions: "model/v2/codekata/codekataFetchQuestions.php",
            login: "model/v2/login_details.php",
            usercheck: "model/v2/usercheck.php",
            userGcheck: "model/v2/userGcheck.php",
            mregister: "model/v2/mregister.php",
            timer: "model/v2/timeClass.php",
            test: "model/v2/test1.php",
            profile: "model/v2/profile.php",
            profileView: "model/v2/profileView.php",
            courseFetch: "model/v2/courseFetch.php",
            "coupon-check": "model/v2/coupon-check.php",
            ratingList: "model/v2/ratingList.php",
            coupon: "model/v2/coupon.php",
            projectBoard: "model/v2/project.php",
            wecp: "model/v2/wecpCompiler.php",
            getProject: "model/v2/getProject.php",
            courseContent: "model/v2/course_content.php",
            courseContentNew: "../model/v2/course_content.php",
            getCodekata: "model/v2/getCodekata.php",
            signout: "model/v2/signout.php",
            profiledit: "model/v2/RegisterEdit.php",
            jobs: "model/v2/jobs.php",
            "job-apply": "model/v2/job-apply.php",
            job_details: "model/v2/job-details.php",
            microarcSkills: "https://www.guvijobs.com/quiz/skill/history/",
            microarcStart: "https://www.guvijobs.com/quiz/start/",
            microarcSubmit: "https://www.guvijobs.com/quiz/question/submit/",
            microarcSkip: "https://www.guvijobs.com/question/skip/",
            get_concept_to_cover: "model/v2/get_concepts_to_cover.php",
            graph: "model/v2/graph.php",
            "time-script": "model/v2/time-script.php",
            landing: "model/v2/landing.php",
            forgot: "model/v2/forgotPassword.php",
            reset: "model/v2/resetPass.php",
            "wecp2.0": "model/v2/codekataOperations.php",
            peer: "model/v2/peerActivity.php",
            registerCheck: "model/v2/registerCheck.php",
            fetchCoursePrice: "model/v2/coursePrice.php",
            fetchCoursePriceAnony: "model/v2/anonymousCoursePrice.php",
            rewards: "model/v2/rewards.php",
            discount_check: "model/v2/discount_check.php",
            courseActivatebyPoints: "model/v2/courseActivatebyPoints.php",
            changePass: "model/v2/changePassword.php",
            activate: "model/v2/activate.php",
            gethash: "model/v2/gethash.php",
            buyBundle: "model/v2/courseBundle.php",
            dlOrderHistory: "model/v2/order/dlOrderHistory.php",
            ownProject: "model/v2/ownProject.php",
            setPassword: "model/v2/setPassword.php",
            createFreeCourse: "model/v2/createFreeCourse.php",
            subscriptionConversion: "model/v2/subscriptionConversion.php",
            dlOrderInternal: "model/v2/order/dlOrderInternal.php",
            orders: "model/v2/orders.php",
            roboticsWorkshop: "model/v2/roboticsWorkshop.php",
            coursePack: "model/v2/coursePack.php",
            meetup: "model/v2/meetup.php",
            certificate: "model/v2/certificate.php",
            gitauth: "model/v2/gitauth.php",
            codeBattle: "model/v2/code-battle.php",
            idePoint: "model/v2/ide.php",
            zenEndPoint: "model/v2/zenRegistration.php",
            pygameActivate: "model/v2/pygame_activate.php",
            battleReport: "model/v2/battle-report.php",
            supportInfo: "model/v2/supportInfo.php",
            myBundle: "model/v2/myBundle.php",
            preRegister: "model/v2/preRegister.php",
            dlCourseDetails: "model/v2/automation/dlcoursedetails.php",
            dlCourseDetails2020: "model/v2/automation/dlcoursedetails2020.php",
            luckySpinner: "model/v2/luckySpinner.php",
            pageReport: "model/v2/pageReport.php",
            authorDashboard: "model/v2/authorDashboard.php",
            studentCourseStatus: "model/v2/studentsDetail.php",
            campaign: "model/v2/sourceCheck.php",
            microarcScores: "model/v2/microarc.php",
            bundleCourse: "model/v2/bundleCourse.php",
            test2: "model/v2/test.php",
            'desicrew-register': "model/v2/deiscrew-register.php",
            codekataInspect: "model/v2/codekataInspect.php",
            uploadImg: "model/v2/uploadimg.php",
            uploadResume: "model/v2/upload_resume.php",
            presign: "model/v2/PreSigned/PresignedURL.php",
            uploadImgs3: "model/v2/uploadimgs3.php",
            uploadResumes3: "model/v2/uploadresumeS3.php",
            profileTrigger: "model/v2/profileTrigger.php",
            hyre: "model/v2/hyre.php",
            presignedurlGET: "model/v2/PreSignedGet.php",
            skillathon: "model/v2/skillathon.php",
            skillathonCollege: "model/v2/skillathon-college.php",
            zen: "model/v2/zenNew.php",
            orderViewer: "model/v2/orderViewer.php",
            duration: "model/v2/courseDuration.php",
            courseCallback: "model/v2/requestCallback.php",
            nanoArc: "model/v2/nanoArc.php",
            courseEntry: "model/v2/courseEntry.php",
            author: "model/v2/author.php",
            webkataOperations: "model/v2/webkataOperations.php",
            marksheetUpload: "model/v2/marksheetUpload.php",
            otp: "model/v2/usercheckbb.php",
            turtleOperations: "model/v2/turtleOperations.php",
            "post-job": "model/v2/post-job.php",
            zen_activation: "model/v2/zenActivation.php",
            ipl: "model/v2/ipl.php",
            auth_verify: "model/v2/auth_verify.php",
            zenQuestionnaire: "model/v2/zen.php",
            cc_avenue_handler: "model/v2/ccavenue/ccavRequestHandler.php",
            notify: "model/v2/notifyMe.php",
            salesDetails: "model/v2/salesDetails.php",
        };
        return model_path[id];
    }
    githubAjaxcall(data, callback) {
        $.ajax({
            type: "GET",
            url: data.url,
            dataType: "json",
            headers: {
                Authorization: data.access_token
            },
            success: function(result) {
                callback(result);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                if (xhr.status == 404) {
                    callback("404");
                }
            }
        });
    }
    getCourseImage(courseKey) {
        const mapper = {
            c: "c-programming",
            cHindi: "c-programming",
            cpp: "cplusplus",
            html_css: "html-css",
            java_en: "java",
            java: "java",
            javaforqaenglish: "java",
            java_telugu: "java",
            java8: "java8",
            python: "python",
            python_en: "python",
            pythonEng: "python",
            python_ar: "python",
            python_hi: "python",
            pygame_english: "python",
            python_flask_english: "python",
            php: "php",
            php_hindi: "php",
            php_malayalam: "php",
            php01_hindi: "php",
            phpEng: "php",
            mysql: "mysql",
            sql_server_english: "sql-server",
            "introduction-to-ml": "ml",
            computational_thinking: "computational-thinking",
            mongodb: "mongodb",
            mongodb_tamil: "mongodb",
            mongodb_en: "mongodb",
            javascript_en: "javascript",
            aws: "aws",
            aws_en: "aws",
            awsCloudFormationTa: "aws",
            learn_aws_glue_by_doing_english: "aws",
            learn_aws_lambda_by_doing_tamil: "aws",
            struts_en: "struts",
            "web-dev": "webdevelopment",
            solidworks: "solidworks",
            solidworks_english: "solidworks",
            spring_tam: "spring",
            tqm_english: "tqm",
            git: "git",
            git_git: "git",
            servletjsp: "servlets-jsp",
            servletjsp_en: "servlets-jsp",
            autocad: "autocad",
            english: "mahendra",
            aptitude_tamil: "mahendra",
            dl_getting_started: "deep-learning",
            dl_primitive_neurons: "deep-learning",
            dl_sigmoid_neuron: "deep-learning",
            dl_feedforward_neural_networks: "deep-learning",
            dl_training_feedforward_neural_networks: "deep-learning",
            dl_optimization_algorithms: "deep-learning",
            dl_introduction_to_pytorch: "deep-learning",
            dl_convolutional_neural_networks: "deep-learning",
            dl_deep_convolutional_neural_networks: "deep-learning",
            dl_sequence_models: "deep-learning",
            dl_encoder_decoder_models: "deep-learning",
            dl_introduction_to_object_detection: "deep-learning",
            dl_capstone_project: "deep-learning",
            product_management: "product-management",
            azure_step_by_step_english: "azure",
            angular_step_by_step_english: "angular",
            powerbi_step_by_step_english: "power-bi",
            python_bundle: "python-bundle",
            seleniumAutomationPythonEng: "selenium",
            designPatternEng: "design-pattern",
            redux_tamil: "redux",
            matlab_english: "matlab",
            matlab_tamil: "matlab",
            reactNativeTa: "react",
            reactJs: "react",
            reactQna: "react",
            deploy_react_js_app_on_aws_english: "react",
            darkwebTa: "dark-web",
            javascriptTa: "javascript",
            rpa_english: "ui-path",
            rpadesignanddevelopment: "ui-path",
            opencart_tamil: "open-cart",
            codeigniter_tamil: "code-igniter",
            functional_programming_in_js_tamil: "functional",
            python_flask_with_restfull_api_hindi: "python",
            flaskEng: "python",
            cassandraEng: "python",
            seleniumJavaEng: "seleniumJava",
            selenium_automation_training_tamil: "seleniumJava",
            seleniumAdvancedEng: "seleniumJava",
            modern_html_css_tamil: "html-css",
            htmlCssHindi: "html-css",
            mobileHackingTa: "dark-web",
            ethicalHackingWebTa: "dark-web",
            ethicalHackingEng: "dark-web",
            selenium_automation_training_c: "seleniumC",
            pandasEng: "python",
            htmlCssEng: "html-css",
            cEng: "c-programming",
            data_collection___english: "data_collection",
            software_testing_english: "software_testing",
            _social_media_marketing_english_: "social_media_marketing",
            social_media_marketing_201__english: "social_media_marketing",
            social_media_marketing_301__english: "social_media_marketing",
            data_annotation_01_english: "data_annotation",
            getting_and_cleaning_data_english: "getting_and_cleaning_data",
            translation_101_english: "translation_101",
            transcription_101_english_: "transcription",
            transcription_201_english: "transcription",
            basics_of_bot_english: "basics_of_bot",
            ms_excel_english: "ms_excel",
            english_skill__english_: "english_skill",
            english_201: "english_skill",
            logical_thinking_problem_solving_english: "logical_thinking",
            data_science_101_: "data_science",
            building_rest_apis_using__net_core_english: "rest_api",
            restApiUsingDotNETCoreTa: "rest_api",
            "ai-pack": "aiPack",
            blockchainEng: "blockchain",
            matplotlibEng: "matplotlib",
            aptitudeTa: "aptitude",
            aptitude2Ta: "aptitude",
            aptitudeTam: "aptitude",
            quantitativeaptitudepart3english: "aptitude",
            lumenTa: "lumen",
            cyber_security_for_beginners__english: "dark-web",
            cyber_security_advanced_english: "dark-web",
            cppEng: "cplusplus",
            testng: "testng",
            redisEng: "redis",
            angularTa: "angular",
            jsGame: "javascript",
            rEng: "r",
            laravel_tamil: "laravel",
            jquery_tamil: "jquery",
            kerasHindi: "keras",
            google_assistant_using_nodemcu_tamil: "google-assistant",
            introduction_to_data_engineering_and_bigdata_english: "big-data",
            home_automation_using_esp32_tamil: "home_automation",
            dartforbeginners: "dart",
            data_visualization_in_python_english: "data_visualization",
            advanced_data_visualization__english: "data_visualization",
            data_science_with_r_english: "data_r",
            goforbeginnersenglish: "go",
            oracle_english9: "oracle",
            introductionenglish: "data-science",
            engineeringdatasciencesystemsenglish: "data-science",
            whatisstatisticsenglish: "data-science",
            gettingstartedwithpythonenglish: "data-science",
            descriptivestatisticspart1english: "data-science",
            pythoncontinuedenglish: "data-science",
            descriptivestatisticspart1english: "data-science",
            numpy: "data-science",
            descriptivestatisticspart3english: "data-science",
            pandasenglish: "data-science",
            pandascontinuedenglish: "data-science",
            visualisationenglish: "data-science",
            visualisationcontinuedenglish: "data-science",
            approachingopenendeddsproblems: "data-science",
            countingenglish: "data-science",
            samplespaceseventsenglish: "data-science",
            randomvariablesenglish: "data-science",
            distributionsandsamplingstrategiesenglish: "data-science",
            distributionsofsamplestatisticsenglish: "data-science",
            chisquaredistributionenglish: "data-science",
            pointandintervalestimatorsenglish: "data-science",
            hypothesistestingenglish: "data-science",
            centrallimittheoremenglish: "data-science",
            descriptivestatisticspart1english7: "data-science",
            vuejs_tamil: "vue",
            productThinkingEng: "product-thinking",
        };
        return mapper[courseKey];
    }
    wecpLanguageName(language) {
        var language_name = {
            c: "C",
            cpp: "CPP14",
            js: "JAVASCRIPT",
            pl: "PERL",
            php: "PHP",
            py: "PY2",
            py3: "PY3",
            cs: "CS",
            rb: "RUBY",
            java: "JAVA",
            sh: "BASH",
            scala: "SCALA",
            go: "GO",
            m: "OBJC",
            java8: "JAVA8",
            javascript: "JAVASCRIPT",
            javascript_en: "JAVASCRIPT",
            python_en: "PY3",
            BASH: "BASH",
            C: "C",
            "C++": "CPP14",
            "C#": "CS",
            GO: "GO",
            JAVA: "JAVA",
            "JAVA 8": "JAVA8",
            JAVASCRIPT: "JAVASCRIPT",
            "OBJECTIVE C": "OBJC",
            PERL: "PERL",
            PHP: "PHP",
            "PYTHON 2": "PY2",
            "PYTHON 3": "PY3",
            RUBY: "RUBY",
            SCALA: "SCALA",
            java_en: "JAVA",
            java_telugu: "JAVA",
            python: "PY3",
            python_ar: "PY3",
            python_hi: "PY3"
        };
        return language_name[language];
    }
    loginCheck() {
        $(".bookmarks-link").hide();
        $(".code-kata-link a span").text("Codekata");
        $("#account-box,#notification-box").addClass("shadow-sm");
        $(document).click(function(e) {
            if ($(e.target).parents("#account-box,#notification-box").length < 1) {
                $(".account-box.collapse,.notification-box.collapse").collapse("hide");
            }
        });
        let page = $("main").attr("id");
        if (page != "courses-product-page") {
            $(".navbar-brand").attr("href", "index.html");
        }
        let userPages = ["dashboard-page", "bookmarks-page", "microarc-test-page", "courses-video-page", "code-kata-editor-page", "payments-page", "user-profile-page", "course-upload-page", "refund-page", "orders-page", "admin-page"];
        let commonPages = ["sign-in-page"];
        let userButtons = [];
        if (authorize.getSession("authToken") == null) {
            if (page == "project-board-page") {
                $("#own-projects-tab").css("display", "none");
            }
            if (commonPages.indexOf(page) != -1) {} else if (page == "landing-page") {
                $(".account-links-group").html('<li class="nav-item"><a class="nav-link d-flex justify-content-center align-items-center text-green" href="sign-in.html">Log in</a></li><li class="nav-item"><a class="nav-link btn btn-primary text-white" href="register.html">Sign up</a></li>');
            } else if (userPages.indexOf(page) != -1) {
                $('<div class="modal fade" id="myModal" role="dialog" data-backdrop="static" data-keyboard="false" ><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><p id="content"><h4 id="title" class="modal-title">Session Ended</h4>This due to inactivity of your account for long time!.</p><div class="d-flex justify-content-end"><a class="btn btn-primary" href ="sign-in.html?sourceUri=' + encodeURIComponent(window.location.href) + '">Login</a></div></div></div></div></div>').appendTo("body");
                $("#myModal").modal("show");
            } else {
                $("#accountGroup").html('<ul class="navbar-nav account-links-group d-flex justify-content-center"><li class="nav-item "><a class="nav-link  text-green pl-5 pr-4" href="sign-in.html">Login</a></li><li class="nav-item"><a class="nav-link btn btn-primary text-white" href="register.html">Sign up</a></li></ul>');
                $(".dashboard-link").hide();
                $(".bookmarks-link").hide();
            }
        } else {
            let name = authorize.getSession("cusername");
            let profile = authorize.getSession("unique_url");
            let geekoins = authorize.getSession("userpoints") == null ? 0 : authorize.getSession("userpoints");
            let mail = authorize.getSession("mail");
            let college_student = authorize.getSession("college_student");
            let home = "courses.html";
            let redirectParams = new URLSearchParams(window.location.search)
            if (redirectParams.has('location')) {
                const urlParams = new URLSearchParams(window.location.search);
                const param = urlParams.get('location');
                if (param == "forum") {
                    var link = "https://forum.guvi.in/api/__/auth/guvi/login?auth=";
                    var auth = authorize.getSession("authToken");
                    window.location = link + auth;
                    return false
                }
            }
            if (college_student == "yes") {
                home = "dashboard.html";
            }
            if (page == "landing-page") {
                $(".account-links-group").html('<li class="nav-item"><a class="nav-link text-green" href=' +
                    home +
                    '>My account</a></li><li class="nav-item"><a class="nav-link btn btn-primary text-white" href="javascript:authorize.signout();">Sign out</a></li>');
            } else if (page == "sign-in-page") {
                if (authorize.getSession("setPassword")) {
                    let modal = '<div class="modal fade" id="setPasswordModal" tabindex="-1" role="dialog" aria-hidden="true" data-keyboard="false" data-backdrop="static">  <div class="modal-dialog modal-dialog-centered modal-md" role="document"><div class="modal-content"> <div class="modal-header justify-content-center">  <h5><strong>Set Your GUVI Password</strong></h5> </div> <div class="modal-body"><div class="form-group">  <label for="gpassword">New Password</label>  <input id="gpassword" class="form-control" type="password">  <div class="invalid-feedback">Password must be more than 5 characters.it must contain atleast one numeral and one alphabet</div> </div> <div class="form-group">  <label for="gconfirmpassword">Confirm Password</label>  <input id="gconfirmpassword" class="form-control" type="password">  <div class="invalid-feedback">Those password didn\'t match, Try again</div> </div>  <div class="d-flex justify-content-center" id="setPassSubmitDiv" ><button class="btn btn-primary" id="setPassword">Submit</button>  </div> </div></div>  </div> </div>';
                    $("body").append(modal);
                    $("#setPasswordModal").modal("show");
                    setPasswordBinder();
                    return false;
                }
                window.location = "index.html";
            } else {
                let s3url = "https://s3-ap-southeast-1.amazonaws.com/guvi-profile-images/";
                let pic = localStorage.getItem("profileimg");
                let rank = localStorage.getItem("rank");
                if (!rank) {
                    rank = "N/A";
                }
                var img_url = pic.split("/");
                var d = img_url.length - 1;
                var profilepic = s3url + img_url[d];
                $("#account-box > .card").html('<div class="d-flex flex-row border-bottom mb-2"><div class="gravatar-wrap mr-2"><img src=' +
                    profilepic +
                    ' class="gravatar" ></div><div class="account-info"><p class="mb-0">' +
                    name +
                    '</p><p class="mb-0"><a href="#">' +
                    mail +
                    '</a></p><p class="mb-0 highlight"><a href="' +
                    profile +
                    '">View profile</a></p></div></div><div class="d-flex flex-row mb-2pb-2 score-card" id="mainNavDefault" style="line-height: 2.5em;"><p class="experience"><i class="icon-geekoin" aria-hidden="true">Geekoin:</i><span>' +
                    geekoins +
                    '</p><p class="rank" style="border-right:0;"><strong>Rank:</strong><span>' +
                    rank +
                    '</span></p><p class="level" style="display:none;"><strong>Level:</strong><i class="icon-level"><span>01</span></i></p></div><!-- /ScoreCard --><ul class="list-group list-group-flush account-links-group"><li class="list-group-item account-links highlight"><strong><a href="change-password.html">Change Password</a></strong></li><li class="list-group-item account-links"><a href="javascript:authorize.signout();" id ="signout" >Sign out</a></li></ul>');
                $(".account-box-toggler").find(".gravatar-wrap").html("<img src=" + profilepic + ' class="gravatar" ></img>');
            }
        }
    }
    signout() {
        this.ajax({
            requestType: "signout"
        }, "signout", function(response) {
            authorize.auth_clear();
            window.location = "index.html";
        });
    }
    getHtmlText(code) {
        return code.replace(/</g, "&lt").replace(/>/g, "&gt");
    }
    share_modal() {
        $("head").append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
        var myElem = document.getElementById("shareModal");
        if (myElem === null)
            $("body").append('<div class="modal " tabindex="-1" role="dialog" id="shareModal" aria-hidden="true"></div><script>function copy(){var copyText=$("#windowurl");copyText.select();document.execCommand("copy");}</script>');
        var url_share = window.location.href.split("#");
        var page_url = url_share[0];
        var share_modal = '<div class="modal-dialog h-100 d-flex flex-column justify-content-center my-0 " role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Share</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="post-share-modal modal-body"><div id="social"><a target="_blank" style="text-decoration: none;" href="https://www.facebook.com/sharer/sharer.php?u=' +
            encodeURIComponent(page_url) +
            '" class="facebookBtn smGlobalBtn"></a><a target="_blank" style="text-decoration: none;" href="https://twitter.com/intent/tweet?text=' +
            page_url +
            '" data-size="large"class="twitterBtn smGlobalBtn"></a><a target="_blank" style="text-decoration: none;" href="https://www.linkedin.com/shareArticle?mini=true&url=' +
            encodeURIComponent(page_url) +
            '" class="linkedinBtn smGlobalBtn"></a><a target="_blank" href="whatsapp://send?text=' +
            encodeURIComponent(page_url) +
            '" data-action="share/whatsapp/share" class="no-underline whatsappBtn smGlobalBtn"></a></div><hr><div></input></div><div class="input-group mb-3"><input type="text" class="form-control form-rounded" id="windowurl" value="' +
            page_url +
            '"><div class="input-group-append"><span class="input-group-text" id="basic-addon2"><a href="javascript:copy();"><i class="fas fa-link"></i></a></span></div></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" style="color:white;">Close</button></div></div></div>';
        $("#shareModal").html(share_modal);
        $("#shareModal").modal("show");
    }
    login_modal() {
        let loginModal = '<div class="modal " tabindex="-1" role="dialog" id="loginModal" aria-hidden="true"><div class="modal-dialog h-100 d-flex flex-column justify-content-center my-0 " role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Login to continue</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="post-share-modal modal-body"><div class="form-group" id="email-div"><div class="google-sign-in" data-onsuccess="onSignIn">                            <a id="google-button" class="btn btn-outline-google">                                <i class="icon-google float-left "></i> Sign in with Google                            </a>                            <div  class="lineSpanDiv" align="center" ><span class="spanBtwLine">OR LOGIN WITH EMAIL</span></div>                        </div>                                <label for="emailInput">Email address</label>                                <input type="email" class="form-control" id="login_email" aria-describedby="emailHelp" placeholder="Enter email">                                <label id="email_warn" style="color: #da2424;"></label>                            </div>                            <div class="form-group" id="pass-div">                                <label for="passwordInput">Password</label>                                <input type="password" class="form-control" id="login_password" placeholder="Password">                                <label id="pass_warn" style="color: #da2424;"></label>                            </div>                            <div class="form-check">                                                               <a class="float-right" href="forgot-password.html">Forgot password?</a>                            </div>                            <div class="btn-wrap">                                <button type="submit" class="btn btn-primary" id="login_button">Sign in</button>                            </div>                            <p class="secondary-link">Don’t have an account? <a href="register.html">Sign up</a></p><div></div><div class="input-group mb-3"></div></div></div></div></div>';
        $("body").append(loginModal);
        $("#loginModal").modal("show");
        bindingInputs();
    }
    validate(id, type, required = 1, warnId = false, warnMsg = false) {
        let inputField = $(id);
        let data = inputField.val();
        data = $.trim(data);
        if (type == "email") {
            data = data.toLowerCase();
        }
        let regPattern = {
            email: /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i,
            name: /^[a-zA-Z ]*$/,
            password: /[\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
            mobile: /[0-9 -()+]{10}$/,
            url: /^[A-Z0-9._%+-]*$/,
            rollnum: /([\w\d]{3,})/,
            college_name: /\w/,
            company_name: /\w/
        };
        let typeName = {
            email: "E-mail",
            name: "Name",
            password: "Password",
            mobile: "Mobile No.",
            url: "Link",
            rollnum: "Roll Number / Register Number",
            college_name: "College Name",
            company_name: "Company Name"
        };
        if (type == "password") {
            if (data.length < 4) {
                inputField.addClass("is-invalid");
                return false;
            }
        }
        if (!required && !data) {
            return true;
        }
        if (data == "") {
            inputField.addClass("is-invalid");
            inputField.attr("placeholder", typeName[type] + " is required");
            return false;
        } else if (!regPattern[type].test(data)) {
            inputField.addClass("is-invalid");
            if (warnId && warnMsg) {
                $(warnId).html(warnMsg);
            }
            return false;
        } else {
            inputField.removeClass("is-invalid");
            inputField.removeClass("is-valid");
            if (warnId) {
                $(warnId).html("");
            }
            return data;
        }
    }
    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    setFirstViewSource() {
        let first_view_updated = this.getCookie("first_view_updated");
        let first_url = this.getCookie("first_utm_url");
        if (first_view_updated) {
            return false;
        } else {
            if (first_url !== undefined) {
                console.log("follow");
                return false;
            }
            let queries = {};
            let url = window.location.href;
            $.each(window.location.search.substr(1).split("&"), function(c, q) {
                var i = q.split("=");
                queries[i[0].toString()] = i[1];
            });
            if (queries.utm_source == null) {
                queries.utm_source = "Not_Set";
            }
            if (queries.utm_campaign == null) {
                queries.utm_campaign = "Not_Set";
            }
            if (queries.utm_medium == null) {
                queries.utm_medium = "Not_Set";
            }
            this.setCookie("first_utm_source", queries["utm_source"], 120);
            this.setCookie("first_utm_campaign", queries["utm_campaign"], 120);
            this.setCookie("first_utm_medium", queries["utm_medium"], 120);
            this.setCookie("first_utm_url", url, 120);
        }
    }
}
var authorize = new steroid();
$(document).on("click", ".navigationLink", function(e) {
    e.preventDefault();
    $('<div class="modal  fade" align="center" id="loginContinueModal" role="dialog"><div class="modal-dialog">   <div class="modal-content">      <div class="modal-body justify-content-end" ><p id="content" ><h4 id="title" class="modal-title">Kindly login to continue</h4></p><div class=""><a class="btn btn-primary login" href ="sign-in.html?sourceUri=' + encodeURIComponent(window.location.href) + '">Login</a></div>      </div>   </div></div></div>').appendTo("body");
    $("#loginContinueModal").modal("show");
});
$(document).on("click", "#subscriptionGoToCourses", function() {
    if (authorize.getSession("authToken") == null) {
        window.location = "courses.html";
    }
    authorize.ajax({
        requestType: "goToCourse"
    }, "subscriptionConversion", function() {
        window.location = "courses.html";
    });
});

function covidModal() {
    let modalString = `<div class="modal fade d-flex justify-content-center" tabindex="-1" role="dialog" id="covid_modal" >
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="position-relative modal-content border-0 bg-dark" >
                                <img src="images/modal/modal.svg" class="img-responsive w-100" alt="Covid-19">
                          
                            <div class="position-absolute" style="bottom: 1%; right:50%; left:50%">
                                <div class="d-flex justify-content-center mt-3 mb-3">
                                <a href="courses.html" class="btn btn-primary" id="dismissSkillModal">Explore</a>
                            </div>     
                            </div>
                            
                                </div>
                                </div>
                            </div>`;
    startSkillTimer();
}

function startSkillTimer() {
    setInterval(function() {
        $("#skillModalTimer").html(secondsHMS((1591266600000 - new Date().getTime()) / 1000));
    }, 1000);
}
$(document).on("click", "#dismissSkillModal", function() {
    $("#covid_modal").modal("hide");
    neverAsk();
    window.location.href = (window.location.href.includes("skillathon") ? "skillathon.html#leaderboard" : "rpa.html#leaderboard");
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

function secondsHMS(remainingTime) {
    remainingTime = parseInt(remainingTime);
    let days = Math.floor(remainingTime / (3600 * 24));
    let hours = Math.floor(remainingTime % (3600 * 24) / 3600);
    let minutes = Math.floor(remainingTime % 3600 / 60);
    let seconds = Math.floor(remainingTime % 3600 % 60);
    days = days > 0 ? (('0' + days).slice(-2) + "d: ") : "";
    return days + ('0' + hours).slice(-2) + "h: " + ('0' + minutes).slice(-2) + "m: " + ('0' + seconds).slice(-2) + "s";
}

function notificationBar() {
    console.log("notification");
    const primary = ["dashboard-page", "code-kata-page", "courses-page", "micro-arc-page", "project-board-page", "leader-board-page", "rewards-page", "jobs-page", "ide-page", "faq-page", "webkata-page"]
    primary.forEach(function(item, index) {
        if (authorize.getSession("subscribed") != "true") {
            $("head").append(`<style>
            @media (max-width:1238px){
                .tree{
                    display:none;
                }
                .tree1{
                    display:none;
                }
            }

            @media (min-width:768px) {
                .sidebar-offset{
                   top: 68px !important;
                }
        }
        .btn-outline-light{
            color: #fff;
            border-color: #fff; /*set the color you want here*/
        }
        .btnoutline-light:hover, .btn-outline-light:focus, .btn-outline-light:active, .btn-outline-light.active, .open>.dropdown-toggle.btn-outline-light {
            color: #de1447;
  
            border-color: #de1447; /*set the color you want here*/
        }
        #notificationModal{
            margin: 0 !important;
            background: #2c2c54;
        }
        
        .underHover{
            text-decoration: underline;
            color: white;
            
        }
        .underHover:hover, .underHover:focus, .underHover:active{
            text-decoration: underline;
            color: black;
        }
        .top-0{
            top:0 !important;
        }
        
        
        
        
        </style>`);
            if ($("#" + item).length == 1) {
                $("header").before(`<a style="text-decoration: none; font-size: 1.05rem;font-weight: 525 !important;" class="pointer" href="https://lp.guvi.in/web-development-course-bundle-with-online-certification?itm_source=page_notification&itm_medium=click"><div class="row"><div id="notificationModal" class="alert alert-dismissible fade show w-100 notificationBg m-0 rounded-0">
            <div class="d-inline-block close float-right text-dark p-2" data-dismiss="alert">
                <h3 class="font-weight-bold text-white pointer mr-4">&times;</h3>
            </div>
            <div>
                <div class="row m-0 d-flex justify-content-center">
                    <div class="row">
                      <div class="row d-flex justify-content-center align-elements-center " ><div class="mt-1"><span class="text-white mr-2 mt-1">Get Certified in 10 in-demand courses </span></div><div class="mt-1"><span class="text-white">@ just ₹ 2299 </span></div><div class="pl-2 mt-1"><span class="mr-2 underHover mt-1"> View Details </span></div></div>
                    </div>
                </div>    
            </div>      
        </div></div></a>`);
                document.querySelector("#sidebar").classList.add("sidebar-offset");
                $("body").append(`<script>window.onscroll = function(){
            if(window.pageYOffset > document.querySelector("#sidebar").offsetTop){
                document.querySelector("#sidebar").classList.add("top-0");
            }else{
                document.querySelector("#sidebar").classList.remove("top-0");
            }
        }
        $("#notificationModal").on("close.bs.alert", function(){
            document.querySelector("#sidebar").classList.remove("sidebar-offset");
        });
        </script>`);
            }
        }
    });
}
$(document).ready(function() {
    authorize.setFirstViewSource();
    $("#sidebar .main-menu").append('<li class="nav-item ide-link"><a class="nav-link" href="ide.html"><i class="material-icons">code</i><span>IDE</span></a></li><li class="nav-item faq-link"><a class="nav-link" href="faq.html"><i class="material-icons">help</i><span>FAQ</span></a></li>');
    $(".code-kata-link").after('<li class="nav-item webkata-link"><a class="nav-link" href="webkata.html"><i class="fas fa-laptop-code"></i><span>Webkata</span></a></li>');
    if (authorize.getSession("authToken") != null) {
        $("#sidebar .main-menu").append('<li class="nav-item jobs-link" id="forum_link"><a class="nav-link"><i class="material-icons">forum</i><span>Forum</span></a></li>');
        $("#forum_link").click(function() {
            var link = "https://forum.guvi.in/api/__/auth/guvi/login?auth=";
            var auth = authorize.getSession("authToken");
            window.location = link + auth;
        });
        if (authorize.getSession("usertype") == "11") {
            $("#sidebar .main-menu").append('<li class="nav-item jobs-link"><a class="nav-link" href="author-dashboard.html"><i class="material-icons">insights</i><span>Sales Stats</span></a></li>');
        }
        if (authorize.getSession("authToken") != null && authorize.getSession("isZenUser") == "true") {
            $("#sidebar .main-menu").prepend('<li class="nav-item jobs-link" id="zen_link"><a class="nav-link" href="#"><i class="material-icons">self_improvement</i><span>Zen</span></a></li>');
            $("#zen_link").click(function() {
                var link = "https://" + (window.location.origin.includes("guvi.in") ? "zen.guvi.in" : "zen.guvi.io") + "/authenticate/";
                var auth = authorize.getSession("authToken");
                window.open(link + auth);
            });
        }
        let homeUrl = authorize.getSession("ssoHomeUrl");
        if (homeUrl != null && homeUrl !== "") {
            $("#homeUrl").attr("href", homeUrl);
            if (homeUrl == "https://gotraininglive.com") {
                $(".page-header").parent().parent().before(`<div class="d-flex justify-content-end" id="goTraining"></div>`);
                $(".btn-breadcrumb").after(`<div class="d-flex justify-content-end pb-2" id="goTraining"></div>`);
                $("#goTraining").html(`<div><a class="btn btn-primary d-flex justify-content-center" href="https://gotraininglive.com"><i class="material-icons">home</i>Go training</a></div>`);
                $("#goTraining").show();
                $("#appNotification").hide();
            }
        }
    }
    console.log("%c⚠️ WARNING!", "color:red;font-family:system-ui;font-size:25px;-webkit-text-stroke: 1px black;font-weight:bold")
    console.log(`%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\nDo not enter or paste code that you do not understand.`, 'font-size: 15px; background-color: yellow; color:red;');
    console.log(`%cHi if your are Developer 💻 and 👀 looking for an Opening ? You are at the right place ! \nTo know more : https://www.guvi.io/current-openings`, 'font-size: 15px; color: white !important; background-color: #0963d7; color:red;');
    console.log(`%cIf you are a Security Tester 🐱‍👤, Hi 👋 You are welcomed !.. \nPlease consider Reading 📖 this Policy, https://guvi.io/Security-Policy.pdf`, 'font-size: 15px; color: white !important; background-color: #0963d7;');
});