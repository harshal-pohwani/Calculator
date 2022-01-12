let x = 0, z = 0, y = 0, t = 0, s = 0, r = 0,d = 10;
function callme(n) {
    if (t == 0) {
        if ((n != '+') && (n != '-') && (n != '*') && (n != '/') && (n != '.') && (n != '=')) {
            if (s == 0) {
                x = ((10 * x) + n);
                document.getElementById("view").innerHTML = x;
            }
            else if (s == 1) {
                x = (n / d) + x;
                d = (d*10);
                document.getElementById("view").innerHTML = x;               
            }
        }
        else if (n == '+') {
            document.getElementById("view").innerHTML = (x + '+');
            t = 1;
            s = 0, d=10;
            return;
        }
        else if (n == '-') {
            document.getElementById("view").innerHTML = (x + '-');
            t = 2;
            s = 0, d=10;
            return;
        }
        else if (n == '*') {
            document.getElementById("view").innerHTML = (x + '*');
            t = 3;
            s = 0, d=10;
            return;
        }
        else if (n == '/') {
            document.getElementById("view").innerHTML = (x + '/');
            t = 4;
            s = 0, d=10;
            return;
        }
        else if (n == '.') {
            document.getElementById("view").innerHTML = (x + '.' + 0);
            t = 0, s = 1;
            return;
        }
    }
    else if ((t != 0)) {
        if ((n != '+') && (n != '-') && (n != '*') && (n != '/') && (n != ".") && (n != '=')) {
            if (s == 0) {
                y = ((10 * y) + n);
            }
            else if (s == 1) {
                y = (n / d) + y;
                d = (d*10);
                // document.getElementById("view").innerHTML = y; 
            }
            if (t == 1) {
                document.getElementById("view").innerHTML = (x + '+' + y);
            }
            else if (t == 2) {
                document.getElementById("view").innerHTML = (x + '-' + y);
            }
            else if (t == 3) {
                document.getElementById("view").innerHTML = (x + '*' + y);
            }
            else if (t == 4) {
                document.getElementById("view").innerHTML = (x + '/' + y);
            }
            return;
        }
        if ((n == '.')) {
            if (t == 1) {
                document.getElementById("view").innerHTML = (x + '+' + y + '.' + 0);
            }
            else if (t == 2) {
                document.getElementById("view").innerHTML = (x + '-' + y + '.' + 0);
            }
            if (t == 3) {
                document.getElementById("view").innerHTML = (x + '*' + y + '.' + 0);
            }
            if (t == 4) {
                document.getElementById("view").innerHTML = (x + '/' + y + '.' + 0);
            }
            s = 1;
            return;
        }
        if ((n == '+') || (n == '-') || (n == '*') || (n == '/') || (n == '=')) {
            s = 0, d=10;
            if (t == 1) {
                r = (x + y);
            }
            if (t == 2) {
                r = (x - y);
            }
            if (t == 3) {
                r = (x * y);
            }
            if (t == 4) {
                r = (x / y);
            }
            if (n == '+') {
                x = r;
                y = 0;
                t = 1;
                document.getElementById("view").innerHTML = (x + '+');
                return;
            }
            else if ((n == '-')) {
                x = r;
                y = 0;
                t = 2;
                document.getElementById("view").innerHTML = (x + '-');
                return;
            }
            else if ((n == '*')) {
                x = r;
                y = 0;
                t = 3;
                document.getElementById("view").innerHTML = (x + '*');
                return;
            }
            else if ((n == '/')) {
                x = r;
                y = 0;
                t = 4;
                document.getElementById("view").innerHTML = (x + '/');
                return;
            }
            else if (n == '=') {
                document.getElementById("view").innerHTML = r;
            }
        }
    }
}
