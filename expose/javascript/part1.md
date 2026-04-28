1. Line 9 prints out value added: 20.
2. Line 13 prints out final result: 20. 
3. You shouldn't use var because that means result could still be accessed even if add was false.
4. Line 9 prints out value added: 20.
5. Line 13 prints out final result: 20.
6. There is an error. On line 7, the code tries to change the value of the result const, which will cause an error.
7. There is an error. The code would've been stopped by the error in line 6, but if the previous error did not occur, it would still would have an error because the scope of result was only inside the if statement.