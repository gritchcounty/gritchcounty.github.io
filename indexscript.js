var n = new Date();
if (n.getDate() == 12) {
    document.write("<span style='font-family: figtree-blk; font-style: italic'>TODAY</span>");
} else  if (n.getDate() > 12) {
    if (n.getMonth() == 11) {
        var nextBill = new Date(n.getFullYear() + 1, 1, 12);
    } else {
        var nextBill = new Date(n.getFullYear(), n.getMonth() + 2, 12);
    }
    document.write("on " + nextBill.getMonth() + "/12/" + nextBill.getFullYear());
} else {
    var m = n.getMonth() + 1;
    var y = n.getFullYear();
    document.write("on " + m + "/12/" + y);
}