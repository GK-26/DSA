function getGrade (s1, s2, s3) {
    // Code here
    let rsMax = Math.max(s1, s2, s3);
    let rsMin = Math.min(s1, s2, s3);

    let rs = s1+s2+s3 -rsMax-rsMin
    console.log(rs)
    if(90 <= rs && rs <= 100) return "A"
    if(80 <= rs && rs < 90	) return "B"
    if(70 <= rs && rs < 80) return "C"
    if(60 <= rs && rs < 70) return "D"
    if(0 <= rs && rs < 60) return "F"


  }
console.log(getGrade(48,70,529))
