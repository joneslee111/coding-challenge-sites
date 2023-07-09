// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

public class Kata
{
  public static string DoubleChar(string s)
  {    
    string b = "";
    
    foreach(char a in s) {
      b += a;
      b += a;
    } return b;
  }
}

// REFACTOR:
