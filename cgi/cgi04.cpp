#include <iostream>
#include <stdlib.h>
using namespace std;

int main () {
   char mm1[1000];
   cin>>mm1;
   cout << "Content-type:text/html\r\n\r\n";
   cout << "<html>\n";
   cout << "<head>\n";
   cout << "<title>CGI Environment Variables</title>\n";
   cout << "</head>\n";
   cout << "<body>\n";
   cout <<mm1;
   cout << "</body>\n";
   cout << "</html>\n";
   
   return 0;
}
