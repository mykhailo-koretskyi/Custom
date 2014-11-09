var Control = require('../../control');
var config = require('../../../conf/config');

function BarElements (){
}

BarElements.prototype = new Control();
BarElements.prototype.constructor = BarElements;

BarElements.prototype.handle = function(req, res){
    var self = this;

    var result;

    var args = self.templateArgs();
    if (args.request.query.type) {
        if (args.request.query.type === "tool") {
            result = {
                error : false,
                payload : [
                    {
                        title : "Text",
                        extention : '.svg',
                        urlToImg : 'img/edit/toolText.svg'
                    },
                    {
                        title : "Photo",
                        extention : '.svg',
                        urlToImg : 'img/edit/toolPhoto.svg'
                    },
                    {
                        title : "Video",
                        extention : '.svg',
                        urlToImg : 'img/edit/toolVideo.svg'
                    },
                    {
                        title : "MAP",
                        extention : ".svg",
                        urlToImg : "img/edit/toolMap.svg"
                    }
                ]
            }
        } else if (args.request.query.type === "status") {
            result = {
                error : false,
                payload : [
                    {
                        title : "1",
                        extention : '.svg',
                        urlToImg : 'img/edit/statusFirstChapter.svg'
                    },
                    {
                        title : "2",
                        extention : '.svg',
                        urlToImg : 'img/edit/statusChapter.svg'
                    },
                    {
                        title : "3",
                        extention : '.svg',
                        urlToImg : 'img/edit/statusChapter.svg'
                    },
                    {
                        title : "Add",
                        extention : '.svg',
                        urlToImg : 'img/edit/statusAdd.svg'
                    }
                ]
            }
        } else {
            result = {
                errorType : "Wrong type",
                error : true
            };
        }
    } else {
        result = {
            errorType : "Not valid request",
            error : true
        };
    }
    res.write(JSON.stringify(result));
    res.end();

};

module.exports = new BarElements();
