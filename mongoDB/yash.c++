#include <bits/stdc++.h>
using namespace std;

static bool p(pair<int,int> &xx,pair<int,int> &yy){
    double aa = (double)xx.second/(double)xx.first;
    double bb = (double)yy.second/(double)yy.first;
    return aa<bb ? true:false;
}
int main() {
  int test1;
  cin>>test1;
  while(test1--)
  {
      int number;
      cin>>number;
      vector<int> bc(number);
      vector<int> mc(number);
      vector<pair<int,int>> ram(number);
      for(int i = 0;i<number;i++)
      {
          cin>>bc[i];
      }
      for(int i = 0;i<number;i++)
      {
          cin>>mc[i];
      }
      for(int i = 0;i<number;i++)
      {
          ram[i] = {bc[i],mc[i]};
      }
      sort(ram.begin(),ram.end(),p);
      long long s = 0;
      long long add = 0;
      for(auto &itt : ram)
      {
          add += itt.second*s;
          s += itt.first;
      }
      cout<<add<<endl;
  }
  return 0;
}