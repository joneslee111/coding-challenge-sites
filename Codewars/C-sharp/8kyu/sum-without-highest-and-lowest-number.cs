// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

using System;
using System.Linq;

public static class Kata
{
  public static int Sum(int[] numbers)
  { 
    if (numbers != null) 
    {
      if (numbers.Length > 1) 
      { 
        int total = 0;
        int arrLength = numbers.Count();
        
        Array.Sort(numbers); 
    
        foreach ( var item in numbers) 
        {
          total += item;
        }
    
        return total - (numbers[arrLength - 1] + numbers[0]);
      } 
    } 
    return 0;
  }
}