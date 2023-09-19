function moment() {
  return {
    MMMM: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    Do: [
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
      "15th",
      "16th",
      "17th",
      "18th",
      "19th",
      "20th",
      "21st",
      "22nd",
      "23rd",
      "24th",
      "25th",
      "26th",
      "27th",
      "28th",
      "29th",
      "30th",
      "31st",
    ],

    format(str) {
      let date = new Date();
      if (str.includes("MMMM")) {
        str = str.replace("MMMM", this.MMMM[date.getMonth()]);
      }
      if (str.includes("MMM")) {
        str = str.replace("MMM", this.MMMM[date.getMonth()].slice(0, 3));
      }
      if (str.includes("Do")) {
        str = str.replace("Do", this.Do[date.getDate() - 1]);
      }
      if (str.includes("YYYY")) {
        str = str.replace("YYYY", date.getFullYear());
      }
      if (str.includes("YY")) {
        str = str.replace("YY", date.getFullYear().toString().slice(2));
      }
      if (str.includes("hh")) {
        let hour = date.getHours().toString();
        hour = (hour.length > 1 ? "" : "0") + hour;
        str = str.replace("hh", hour);
      }
      if (str.includes("h")) {
        str = str.replace("h", date.getUTCHours());
      }

      return str;
    },
  };
}

console.log(moment().format("MMM Do YY, h:mm:ss a"));
