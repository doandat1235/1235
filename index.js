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
    "Người đang đọc những dòng tin này có vị trí rất đặc biệt trong tim mình. Vì vậy, hãy luôn vui vẻ vào mỗi buổi sáng khi cậu thức giấc bởi luôn có tớ nghĩ đến cậu. Chúc cậu có một mùa Giáng Sinh an lành, hạnh phúc!"
]