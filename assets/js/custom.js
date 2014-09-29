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
    $("#flickr-img").load(function onImgLoad(){
        $("#flickr-img").css("margin-top", ($("#flickr-img")[0].clientHeight / 4) * -1);
    });
    $(window).resize(function onWindowResize(){
        if ($(window).width() <= 720) {
            $("#flickr-img").css("margin-top", 0);
        } else {
            $("#flickr-img").css("margin-top", ($("#flickr-img")[0].clientHeight / 4) * -1);
        }
    });
    $(document).ready(function readyF() {
        $("body").css("min-width","320px");
        $("#flickr-img").attr("src",custom.headPhotoURL);
        $("#flickr-a").attr("href",custom.headPhotoOwnerURL);
        $("#flickr-a").text(custom.headPhotoTitle + " by " + custom.headPhotoOwner);
        console.log("Hello, World!");
    });
}(window.custom = window.custom || {}));
var jsonFlickrApi = function jsonFlickrApiF(rsp) {
    if(rsp.stat != "ok") {
        return;
    }
    var s = "";
    var i = Math.random();
    i = i * 100;
    i = Math.ceil(i);
    photo = rsp.photos.photo[i];
    t_url = "https://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";
    p_url = "https://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
    custom.headPhotoURL = t_url;
    custom.headPhotoTitle = photo.title;
    custom.headPhotoOwner = photo.owner;
    custom.headPhotoOwnerURL = p_url;
}