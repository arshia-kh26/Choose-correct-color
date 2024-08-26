var colors = ["red", "green", "yellow"];
var targetElement = document.querySelector('.R_1 > div');
var clickableElements = document.querySelectorAll('.R_2 > div');

var randomColor = colors[Math.floor(Math.random() * colors.length)];
document.getElementById(randomColor).style.display = "block";

var targetColor = randomColor;

clickableElements.forEach(function (element) {
    element.addEventListener('click', function () {
        var selectedColor = this.id.replace("1", "");
        var good_word = ["wooow", "good job", "nice", "Bravo"]
        var randomword = good_word[Math.floor(Math.random() * good_word.length)]
        var bad_word = ["oh no", "wrong", "try again", "come on", "nooo"]
        var randomword_B = bad_word[Math.floor(Math.random() * bad_word.length)]
        var word_B = randomword_B.toUpperCase();
        var words = randomword.toUpperCase();
        if (selectedColor === targetColor) {
            alert(words + "✔");
            location.reload()
        } else {

            alert(word_B + "❌");
            location.reload()
        }
    });
});
