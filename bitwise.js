// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

function consecutiveDucks(num) {
    // your code here
    return (num & (num - 1)) !== 0
  }

//   There's a simple trick for this problem:

//   bool IsPowerOfTwo(ulong x)
//   {
//       return (x & (x - 1)) == 0;
//   }
//   Note, this function will report true for 0, which is not a power of 2. If you want to exclude that, here's how:
  
//   bool IsPowerOfTwo(ulong x)
//   {
//       return (x != 0) && ((x & (x - 1)) == 0);
//   }
//   Explanation
//   First and foremost the bitwise binary & operator from MSDN definition:
  
//   Binary & operators are predefined for the integral types and bool. For integral types, & computes the logical bitwise AND of its operands. For bool operands, & computes the logical AND of its operands; that is, the result is true if and only if both its operands are true.
  
//   Now let's take a look at how this all plays out:
  
//   The function returns boolean (true / false) and accepts one incoming parameter of type unsigned long (x, in this case). Let us for the sake of simplicity assume that someone has passed the value 4 and called the function like so:
  
//   bool b = IsPowerOfTwo(4)
//   Now we replace each occurrence of x with 4:
  
//   return (4 != 0) && ((4 & (4-1)) == 0);
//   Well we already know that 4 != 0 evals to true, so far so good. But what about:
  
//   ((4 & (4-1)) == 0)
//   This translates to this of course:
  
//   ((4 & 3) == 0)
//   But what exactly is 4&3?
  
//   The binary representation of 4 is 100 and the binary representation of 3 is 011 (remember the & takes the binary representation of these numbers). So we have:
  
//   100 = 4
//   011 = 3
//   Imagine these values being stacked up much like elementary addition. The & operator says that if both values are equal to 1 then the result is 1, otherwise it is 0. So 1 & 1 = 1, 1 & 0 = 0, 0 & 0 = 0, and 0 & 1 = 0. So we do the math:
  
//   100
//   011
//   ----
//   000
//   The result is simply 0. So we go back and look at what our return statement now translates to:
  
//   return (4 != 0) && ((4 & 3) == 0);
//   Which translates now to:
  
//   return true && (0 == 0);
//   return true && true;
//   We all know that true && true is simply true, and this shows that for our example, 4 is a power of 2.