window.onload = init;

function init() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://picsum.photos/list", true);

    xhr.send(null);

    xhr.onload = function () {

        if (xhr.status == 200) {

            var picsum = JSON.parse(xhr.responseText);
            console.log(picsum);


            var scene = document.getElementById("scene");

            var width = Math.round(screen.width / 10);
            var height = Math.round(screen.height / 10);

            // Math.round(width);
            // Math.round(height);

            for (var i = 0; i < 100; i++) {
                var div = document.createElement("div");
                var front = document.createElement("IMG");
                var back = document.createElement("P");
                scene.appendChild(div);
                div.appendChild(front);
                div.appendChild(back);

                div.setAttribute("id", "card__" + i);
                div.setAttribute("class", "card");

                front.setAttribute("id", "card__" + i + "__face--front");
                front.setAttribute("class", "card__face card__face--front");
                front.setAttribute("src", 'https://picsum.photos/' + width + '/' + height + '/?image=' + i);

                back.setAttribute("id", "card__" + i + "__face--back");
                back.setAttribute("class", "card__face card__face--back");
                var author = '<a href="' + picsum[i].author_url + '">' + picsum[i].author + '</a>';
                var post_url = '<a href="' + picsum[i].post_url + '">' + picsum[i].post_url + '</a>';
                back.innerHTML = author + "<br>" + post_url;

                console.log(div);
            }

            var delay = 4000;

            $(".card").mouseenter(function () {
                console.log("1");
                // $(this).addClass("card__flip");
                TweenMax.to(this, 0.5, { ease: Linear.EaseNone, transformOrigin: "50% 50%", transform: "rotateY(180deg)" });
                // $(this).removeClass("card__flip");
                // setTimeout(function () {
                    // console.log("0");
                    
                    TweenMax.to(this, 0.5, { delay: delay / 1000, ease: Linear.EaseNone, transformOrigin: "50% 50%", transform: "rotateY(0deg)" });
                // }, delay);
            });



        }



    }



}


// author name and author post url

// author, 
// author_url, 
// filename, 
// format, 
// height, 
// id, 
// post_url, 
// width

// author: "Alejandro Escamilla"
// author_url: "https://unsplash.com/@alejandroescamilla"
// filename: "0000_yC-Yzbqy7PY.jpeg"
// format: "jpeg"
// height: 3744
// id: 0
// post_url: "https://unsplash.com/photos/yC-Yzbqy7PY"
// width: 5616

            // document.getElementById("gallery").innerHTML = "<img src='https://picsum.photos/200/300/?image" + picsum[0].id + "'>";

            // for (var i = 0; i < 10; i++) {
                // document.getElementById("gallery").innerHTML = "<img src='https://picsum.photos/200/300/?image" + picsum[i].id + "'>";
            // }

            // var imageString = "";
            // var imageList = [];
            // var r = []; // random number

            // for (var i = 1; i <= 12; i++) {
            //     // imageString += "<img src='https://picsum.photos/400/400/?random'><p>" + picsum[i].author + picsum[i].post_url + "</p>";
            //     // imageList.push("<img src='https://picsum.photos/400/400/?random'><p>" + picsum[i].author + picsum[i].post_url + "</p>");

            //     var newFig = document.createElement("FIGURE");
            //     var newImage = document.createElement("IMG");
            //     var newCaption = document.createElement("FIGCAPTION");

            //     gallery.appendChild(newFig);
            //     newFig.appendChild(newImage);
            //     newFig.appendChild(newCaption);

            //     newImage.setAttribute("src", 'https://picsum.photos/400/400/?image=' + i);
            //     newImage.setAttribute("alt", "Image by " + picsum[i].author);

            //     newCaption.innerHTML = picsum[i].author + "<br>" + picsum[i].post_url;

            //     console.log(newImage);

            // }

            //////////////////////////////////////////////////////////////////////////////

            // function Img(src, url, author) {
            //     this.src = src;
            //     this.url = url;
            //     this.author = author;
            // }

            // var imageList = [];
            // for (var i = 0; i < 12; i++) {
                // var source = "https://picsum.photos/200/300/?random";
                // imageList.push(new Img(source));
                // console.log(imageList[i]);

                // var newFig = document.createElement("FIGURE");
                // var newImage = document.createElement("IMG");
                // newImage.setAttribute("src", img.url);
                // newImage.setAttribute("alt", img.title);
            // }

            // document.getElementById("image01").innerHTML = '<img src="https://picsum.photos/200/300/?random">';
            // document.getElementById("image02").innerHTML = imageList[1];
            // document.getElementById("image03").innerHTML = imageList[2];

            // document.getElementById("gallery").innerHTML = imageString;