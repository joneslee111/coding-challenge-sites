// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.

  using System;
  public class Sum
  {
     public int GetSum(int a, int b)
     {
       int lower = 0;
       int higher = 0;
       int total = 0;
       
       if (a < b) {
         lower = a;
         higher = b;
       } else {
         higher = a;
         lower = b;
       }
       
      while (lower <= higher) {
        total += lower;
        lower++;
      } return total;
     }
  }

// This can be refactored to:
using System;
public class Sum
{
    public int GetSum(int a, int b)
    {
        int max = Math.Max(a, b);
        int min = Math.Min(a, b);
        int result = 0;
        for (int i = min; i <= max; i++)
        {
            result += i;
        }
        return result;
    }
 }
