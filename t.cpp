#include <bits/stdc++.h>
using namespace std;

int main(){
   string s = "abcd";
//    s.substr(0,s.si);
// string t = "   rgreg";
// string l  = s + t;
int i=0;
while (true)
{
  cout<<s[i]<<endl;
  i=(i+1)%s.size();
}

 return 0;
}