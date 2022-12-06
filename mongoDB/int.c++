#include <bits/stdc++.h>

using namespace std;
static bool yash(pair<int, int> ram, pair<int, int> brohan)
{
    double xhhj = (double)ram.second / (double)ram.first;
    double y = (double)brohan.second / (double)brohan.first;
    return xhhj < y ? true : false;
}
void ans()
{
    int number, ans = 0;
    cin >> number;
    vector<int> arr1(number);
    vector<int> arr2(number);
    vector<pair<int, int>> v(number);
    for (int i = 0; i < number; i++)
    {
        cin >> arr1[i];
    }
    for (int i = 0; i < number; i++)
    {
        cin >> arr2[i];
    }
    for (int i = 0; i < number; i++)
    {
        v[i] = {arr1[i], arr2[i]};
    }
    sort(v.begin(), v.end(), yash);
    int start = 0;
    for (int i = 0; i < number; i++)
    {
        auto it = v[i];
        ans = ans + it.second * start;
        start = start + it.first;
    }
    cout << ans << endl;
}
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        ans();
    }
}