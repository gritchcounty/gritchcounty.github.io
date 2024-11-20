var n = new Date();
if (n.getMonth() == 11) {
    var nextBill = new Date(n.getFullYear() + 1, 0, 12)
} else {
    var nextBill = new Date(n.getFullYear(), n.getMonth() + 1, 12)
}
var d = nextBill.getDate();
var m = nextBill.getMonth() + 1;
var y = nextBill.getFullYear();
if (n.getDate() == 12) {
    document.write("<span style='font-family = figtree-ital'>TODAY</span>");
} else  if (n. getDate > 12) {
    document.write(n.getMonth() + "/12" + "/" + n.getFullYear())
} else {
    document.write(m + "/" + d + "/" + y);
}