<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
   
    <script>
        document.write("<h1>Hello World</h1>");    // string
        //document.write("Hello World");
       // document.write("100+1");
        document.write(99+"<br>");     // number
        // variables
       var a;
       a = 10;   // number variable
       var b;
       b = "Welcome All";
       document.write(a+b+"<br>"); //10Welcome All
       var c = 5;
       var d = 10;
       var e = "Hello";
       var f = "world";
       document.write(c+d+e+f+"<br>");   // 15Helloworld
       document.write(e+f+c+d+"<br>");   // Helloworld510
       document.write(c+e+d+f+"<br>");   // 5Hello10world
       document.write(e+e+c+d+f+"<br>");  // HelloHello510world
       document.write(c+d+c+e+c+d+"<br>"); // 20Hello510
    </script>
</body>
</html>