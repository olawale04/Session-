function makeid(num = 4) {
  let result = "";
  let characters = "Lazack-wer123ghbkjnhbf";
  var characters9 = characters.length;
  for (var i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters9));
  }
  return result;
}
module.exports = {makeid};
