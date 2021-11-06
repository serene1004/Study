$(document).ready(function() {
    addPageEvent();
});

function addPageEvent() {
    $(document).on('click', "span > img", function(e){
        let tagMap = new Object();
        let thisText = $(e.target).parent().text();
        let thisId = $(e.target).parent().attr('id');
        tagMap.thisText = thisText;
        tagMap.thisId   = thisId;
        
        let test = templateParseObject("tmpl-makeTag", tagMap)

        $('#dragdrop-basebox').append(templateParseObject("tmpl-makeTag", tagMap));
        $(e.target).parent().remove();
    });
}

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    if (e.target.getAttribute('name') != 'drag') {
        if(e.target.nodeName == 'IMG') {
            e.target.parentElement.parentElement.appendChild(document.getElementById(data));
        } else if(e.target.nodeName == 'DIV') {
            e.target.appendChild(document.getElementById(data));
        }
    } else {
        // span 위에 올릴 경우만 해당
        e.target.parentElement.append(document.getElementById(data));
    }
}

function templateParseObject(templateId, data) {
    var tmpl = $("#"+templateId).text();
    if(data != null) {
        try {
            Object.keys(data).forEach(function(k){
                tmpl = tmpl.replace(new RegExp("#"+k+"#", "gi"), data[k]);
            });
        } catch (E) {
            log.error(E);
        }
    }
    return tmpl;
}