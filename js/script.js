(function($){"use strict";$(function(){mobileSearch();bottomNavBorder();navMoreBox();count();closeCard();ticketsBox();employeesBox();taskBox();serverBox();favoritesBox();similarProfiles();userSkills();triggerAlert();triggerAnimations();});function mobileSearch(){$('.mobile-search-trigger').on('click',function(){$('.mobile-search-active').css("display","block");return false;});$('.close').on('click',function(){$('.mobile-search-active').css("display","none");return false;});}function bottomNavBorder(){$('.nav-dash, .nav-api, .nav-profile, .nav-news, .nav-contacts, .nav-price').on('mouseover',function(){$(this).addClass('currentPageHover');});$('.nav-dash, .nav-api, .nav-profile, .nav-news, .nav-contacts, .nav-price').on('mouseout',function(){$(this).removeClass('currentPageHover');});}function navMoreBox(){$('.nav-more').on('click',function(){$('#box').css("display","block");return false;});$(document).on('click',function(e){if(e.target.id!=='box'&&!$('#box').find(e.target).length){$("#box").hide();}});}function count(){$('.count').each(function(){$(this).prop('Counter',0).animate({Counter:$(this).text()},{duration:1500,easing:'swing',step:function(now){$(this).text(Math.ceil(now));}});});}function closeCard(){$('.salesBox').on('click',function(){$('.card-sales').fadeOut();});$('.rateBox').on('click',function(){$('.card-stats').fadeOut();});$('.usersBox').on('click',function(){$('.card-users').fadeOut();});$('.visitsBox').on('click',function(){$('.card-visits').fadeOut();});$('.chartBox').on('click',function(){$('#chartBox').fadeOut();});$('.closeTickets').on('click',function(){$('.ticketBox').fadeOut();});$('.closeEmoloyess').on('click',function(){$('.employees').fadeOut();});$('.tasksBox').on('click',function(){$('.tasks').fadeOut();});$('.closeServer').on('click',function(){$('.server-load').fadeOut();});$('.closeModal').on('click',function(){$('.modal').fadeOut();});$('.closeProfile').on('click',function(){$('.profiles').fadeOut();});$('.users-close').on('click',function(){$(this).closest('div').fadeOut(500,function(){$(this).remove();});});}function ticketsBox(){$('.hideTickets').on('click',function(){$(".ticket-body").fadeToggle();});$('.ticketBox').on("click",".deleteTicket",function(event){$(this).closest('tr').fadeOut(500,function(){$(this).remove();});event.stopPropagation();});$('.closeTicket').on('click',function(){$(this).closest('td').children('div:nth-child(2)').hide().html('<h4><span class="ticket-closed">Closed</span></h4>').fadeIn(600);});}function employeesBox(){$('.hideEmoloye').on('click',function(){$("#employe").fadeToggle();});}function taskBox(){$('#task-list').on("click","li",function(){$(this).toggleClass("completed");});$('#task-list').on("click","span",function(event){$(this).parent().fadeOut(500,function(){$(this).remove();});event.stopPropagation();});$("input[type='text'").keypress(function(event){if(event.which===13){var taskText=$(this).val();$('#task-list').append("<li><span><i class='fa fa-trash'></i></span> "+taskText+"</li>");}});$(".hideTasks").on('click',function(){$("#task").fadeToggle();});}function serverBox(){$(".hideServer").on('click',function(){$(".server-items").fadeToggle();});}function favoritesBox(){$(".fav").on('click',function(){if($(this).hasClass("favorites-uncheck")){$(this).removeClass('favorites-uncheck').addClass('favorites-check').html('<i class="fa fa-heart" aria-hidden="true"></i>');}else if($(this).hasClass("favorites-check")){$(this).removeClass('favorites-check').addClass('favorites-uncheck').html('<i class="fa fa-heart-o" aria-hidden="true"></i>');}var numFav=$('.favorites-check').length
$('#fav-num').css("color","#fff").html('('+numFav+')');});}function similarProfiles(){$('.hideProfile').on('click',function(){$("#similarProfile").fadeToggle();});}function userSkills(){$('#skill').keypress(function(e){if(e.which===13){var s=$('#skill').val();if(s!==''){$('.skills').append('<span>'+s+' <i class="skill add-skill fa fa-times" aria-hidden="true"></i></span>');}}$('.skill').on('click',function(){$(this).parent().remove();});});}function triggerAlert(){$('.btn-trigger').on('click',function(){$('.alert-message').html('<div class="alert alert-success alert-dismissable animated swing"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> Indicates a successful or positive action.</div>');});}function triggerAnimations(){$('.animation-btn').on('click',function(){var button_text=$(this).text();$(this).parent().parent().parent().find('img').addClass(button_text).delay(1500).queue(function(next){$(this).removeClass(button_text);next();});});}})(jQuery);addEventListener('DOMContentLoaded',function(){document.querySelector('#logo').setAttribute('class','animated rubberBand');setTimeout(function(){document.querySelector('#logo').setAttribute('class','animated bounceOutRight');},5000);setInterval(function(){document.querySelector('#logo').setAttribute('class','animated rubberBand');setTimeout(function(){document.querySelector('#logo').setAttribute('class','animated bounceOutRight');},5000);},10000);});

function domLoaded() {
    var start_sinoni = document.querySelector('#start-sinoni');
    if (start_sinoni) {
        start_sinoni.addEventListener('click', req);
    }
    var text_sinoni = document.querySelector('#text-sinoni');
    if (text_sinoni) {
        var symbol = document.querySelector('#symbol');
        symbol.textContent = ((text_sinoni.value.replace(/(\s+|<.*?>)/g, '')).length).toString();
        text_sinoni.oninput = function () {
            symbol.textContent = ((this.value.replace(/(\s+|<.*?>)/g, '')).length).toString();
        };
    }
}
function req() {
    var self = this;
    self.innerText = 'Уникализация ...';
    self.removeEventListener('click', req);
    var text_sinoni = document.querySelector('#text-sinoni');
    if (text_sinoni && text_sinoni.value) {
        var params = 'lang=ru&text=' + encodeURIComponent(text_sinoni.value);
        httpReq(params, function (err, result) {
            if (err) {
                console.log(err);
                self.innerText = 'Рерайт текста онлайн';
                self.addEventListener('click', req);
                return;
            }
            if (result.result && result.result.id) {
                var i = 0;
                var r = setInterval(function () {
                    i++;
                    if (i === 10) {
                        self.innerText = 'Рерайт текста онлайн';
                        self.addEventListener('click', req);
                        clearInterval(r);
                        return;
                    }
                    params = 'id=' + result.result.id;
                    httpReq(params, function (err, result) {
                        if (err) {
                            console.log(err);
                            if (err.status !== 400) {
                                self.innerText = 'Рерайт текста онлайн';
                                self.addEventListener('click', req);
                            }
                            return;
                        }
                        if (result.result && result.result.text) {
                            text_sinoni.value = result.result.text;
                        }
                        self.innerText = 'Рерайт текста онлайн';
                        self.addEventListener('click', req);
                        clearInterval(r);
                    });
                }, 1000);
            }
            else {
                self.innerText = 'Рерайт текста онлайн';
                self.addEventListener('click', req);
            }
        });
    }
}
function httpReq(params, callback) {
    var http = new XMLHttpRequest();
    http.open('POST','https://api.sinoni.men',true);
    http.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200 && http.responseText) {
            var res = tryParseJSON(http.responseText);
            callback(null, res);
        }
        else {
            callback(http);
        }
    };
    http.send(params);
}
function tryParseJSON(jsonString) {
    try {
        var o = JSON.parse(jsonString);
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }
    return {}
}
document.addEventListener('DOMContentLoaded', domLoaded);