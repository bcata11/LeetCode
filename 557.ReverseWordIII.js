let = s = "Let's take LeetCode contest"

var reverseWords = function(s) {
//we will use js method for this
// first we will split the phrase into words, after that we will map and split every word
//then we will reverse the order and rejoin first every word, after that the whole phrase
    s = s.split(" ").map(word => word.split("").reverse().join("")).join(" ")
    return s
};