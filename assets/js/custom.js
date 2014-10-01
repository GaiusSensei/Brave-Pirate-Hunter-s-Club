/**
 * Created with Brave-Pirate-Hunter-s-Club.
 * User: GaiusSensei
 * Date: 2014-09-28
 * Time: 06:20 AM
 */
(function(custom, undefined) {
    custom.headPhotoURL = "";
    custom.headPhotoTitle = "";
    custom.headPhotoOwner = "";
    custom.headPhotoOwnerURL = "";
    custom.awesomeness = 0;
    $("#flickr-img").load(function onImgLoad(){
        custom.resizeFlickr();
    });
    $(window).resize(function onWindowResize(){
        custom.resizeFlickr();
    });
    $(document).ready(function readyF() {
        $("body").css("min-width","320px");
        $("#flickr-img").attr("src",custom.headPhotoURL);
        $("#flickr-a").attr("href",custom.headPhotoOwnerURL);
        $("#flickr-a").text(custom.headPhotoTitle + " (Awesomness: " + custom.awesomeness + "*)");
        $("table").css("font-size", "0.7em");
        console.log("*Flickr Awesomeness Rating - Higher is Better.");
    });
    // Custom Functions
    custom.resizeFlickr = function(){
        if ($(window).width() <= 720) {
            $("#flickr-img").css("margin-top", 0);
            $(".image-cropper").css("height", 200);
        } else {
            $("#flickr-img").css("margin-top", ($("#flickr-img")[0].clientHeight / 4) * -1);
            $(".image-cropper").css("height", 300);
        }
    };
}(window.custom = window.custom || {}));
var jsonFlickrApi = function jsonFlickrApiF(rsp) {
    if(rsp.stat != "ok") {
        return;
    }
    var s = "";
    var i = Math.random();
    i = i * (rsp.photos.photo.length);
    i = Math.ceil(i);
    photo = rsp.photos.photo[i];
    t_url = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";
    p_url = "https://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
    custom.headPhotoURL = t_url;
    custom.headPhotoTitle = photo.title;
    custom.headPhotoOwner = photo.owner;
    custom.headPhotoOwnerURL = p_url;
    custom.awesomeness = i;
}