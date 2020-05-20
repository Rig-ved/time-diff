

var time = {
  suffix:'ago',
  now:'now',
  second:'second',
  seconds:'seconds',
  minute:'minute',
  minutes:'minutes',
  hour:'hour',
  hours:'hours',
}
const pluralize= (timew,type)=> {
  var str = "";
  str= (timew==1) ? (timew +" "+ type):(timew +" "+ type+'s')
  return str +" "+ time.suffix;  
}
const timeDifference=(current, previous)=> {
    
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var elapsed = current - previous;
  if (elapsed < msPerMinute) {
        if(elapsed === 0) {
          return time.now
        }
       return pluralize(Math.round(elapsed/1000) ,time.second)  
  }
  else if (elapsed < msPerHour) {
       return pluralize(Math.round(elapsed/msPerMinute),time.minute)
  }
  else if (elapsed < msPerDay ) {
       return pluralize(Math.round(elapsed/msPerHour),time.hour)
  }
} 

const constructToday = (item)=> {
      return String(new Date().getFullYear()) +"-"+String(new Date().getMonth())+"-"+String(new Date().getDate())+" "
}
const timeChecker = (currentTime,dates) =>{
      if(!dates) {
        return "Please enter corresponding dates"

      }
      if(!currentTime) {
        return "Please  give current time atleast!!! phew ."
      }
      currDateTime=constructToday() +currentTime

      dates.forEach((item)=>{
        var diffTime = constructToday()+ item;
        var result = timeDifference(new Date(currDateTime),new Date(diffTime))
        console.log(result)
       })
}

timeChecker("23:35:48",["23:35:48",'21:35:48','23:35:47','23:32:35'])
