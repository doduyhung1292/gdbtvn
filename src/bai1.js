console.log("Đỗ Duy Hưng 20183754 ");

var str = " odao   oaso f   efw   ";
var i;
str = str.replace(/\s+/g, ' ');
var arr = str.split('');
for(i = 0; i<arr.length; i++) {
  if (arr[i] == " ") arr.splice(i,1);
  else break;
}
for(i=arr.length-1; i>=0; i--) {
  if (arr[i] == " ") arr.splice(i,1);
  else break;
}
var str2 = arr.join('');

console.log(str2);
