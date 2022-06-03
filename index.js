function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
      console.log(string.toUpperCase())
    return string;
  }
  function logWhisper(string) {
    console.log(string.toLowerCase())
  return string;
}
function sayHiToHeadphonedRoommate(string) {

    if(string === string.toLowerCase()){
      return "I can't hear you!"
    }
    else if(string === string.toUpperCase()){
      return "YES INDEED!"
    }
    else(string === "Let's have dinner together!")
      return "I would love to!"
      }
      sayHiToHeadphonedRoommate(string= "try")
    //   sayHiToHeadphonedRoommate(string= "YES INDEED!")
    //   sayHiToHeadphonedRoommate(string= "I would love to!")