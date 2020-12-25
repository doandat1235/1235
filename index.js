var opened = false;
var animations = [
    "blind", "bounce", "clip", "drop", "explode", "fade", "fold", "highlight", "puff", "pulsate", "scale", "shake", "size", "slide"
]
var gifts = $('.item').click(giftOnClick);
$("#dial").dialog({
    autoOpen: false,
    resizable: false,
    width: "auto",
    height: "auto",
    modal: true,
    show: {
        effect: animations[Math.floor(Math.random() * animations.length)],
        duration: 1000
    },
    hide: {
        effect: animations[Math.floor(Math.random() * animations.length)],
        duration: 1000
    },
    buttons: {
        OK: function() {
            $( this ).dialog( "close" );
        }
    }
});

function giftOnClick() {
    var text;
    if (!opened) {
        text = texts[Math.floor(Math.random() * texts.length)];
        opened = true;
    } else {
        text = "Tham thế thôi!!!";
    }
    $('.text').html(text);
    $("#dial").dialog("open");
}

var texts = [
    "Chúc mừng bạn đã có được mềnh!!! bonus thêm suất bún đậu:))"
]