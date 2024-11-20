var n = new Date();
var m = n.getMonth() + 1;
var y = n.getFullYear();
if (n.getDate > 12) {
    m++;
}

if (n.getDate() = 12) {
    document.write(m + "/12/" + y)
    document.write("<span style='font-family = figtree-ital'>TODAY</span>");
} else {
    document.write(m + "/12/" + y);
}