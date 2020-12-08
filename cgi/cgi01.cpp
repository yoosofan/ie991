#include <iostream>
using namespace std;

int main () {
   cout << "Content-type:text/html\r\n\r\n";
   cout << "<html>\n";
   cout << "<head>\n";
   cout << "<title>Hello World - First CGI Program</title>\n";
   cout << "</head>\n";
   cout << "<body>\n";
   cout << "<h2>Hello World! This is my first CGI program</h2>\n";
   cout << "<div>Ahmad </div>";
   cout << "</body>\n";
   cout << "</html>\n";
   
   return 0;
}
// g++ cgi01.cpp
// mv a.out cgi01.cgi
// /usr/lib/cgi-bin/
// www

// http://yoosofan.github.io/cgi01.cgi?a=12&b=15
