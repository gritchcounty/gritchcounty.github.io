// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at https://web.archive.org/web/20180103001806/http://www.jottings.com/obfuscator/
coded = "bd6mudr6zRuZ6Y@suZ6qzqRrU6Y.qRe"
key = "UlZmytDAfIoLPGKx02MNq1jCQhbraJsnvieY6p48SRO9HEF75BVcW3kTzwudXg"
shift=coded.length
link=""
for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    link += (ltr)
    }
    else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    link += (key.charAt(ltr))
    }
}
document.write("<a href='mailto:"+link+"'>Email</a>")


