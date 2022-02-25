#include <iostream>
#include <string>
#include <windows.h>
#include <stdio.h>
#include <conio.h>
using namespace std;

// HANDLE console = GetStdHandle(STD_OUTPUT_HANDLE);
// For use of SetConsoleTextAttribute()

void WaitKey();

int main()
{

    int y = 240;
    // SetConsoleTextAttribute(console, 150);
    // SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), BACKGROUND_BLUE | BACKGROUND_RED | BACKGROUND_INTENSITY);

    // to color whole console:
    // 0 = Black       8 = Gray
    // 1 = Blue        9 = Light Blue
    // 2 = Green       A = Light Green
    // 3 = Aqua        B = Light Aqua
    // 4 = Red         C = Light Red
    // 5 = Purple      D = Light Purple
    // 6 = Yellow      E = Light Yellow
    // 7 = White       F = Bright White
    // system("COLOR 2");
    // system("color %");
    // to see type of color avilable

    system("color 4");
    // system("color <background><foreground>")
    cout << "saadsfdsfasfsaan";
    cout << "@";
    cout << "ojhfdsafsaa";
    // system("color 74");
    // system("COLOR 1");
    cout << "~$fdsafsfdsfasa";
    getch();
    return 0;
}