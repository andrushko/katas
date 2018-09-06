// https://www.codewars.com/kata/the-hashtag-generator/
function generateHashtag (s) {
    s = s.replace(/\s+/g, ' ').trim();
    if(!s) return false;
    var hashtag = '#' + s[0].toUpperCase() + s.slice(1).replace(/\s\w/g, x => x[1].toUpperCase());

    return hashtag.length <= 140 ? hashtag : false;
}