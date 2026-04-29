1. The console will print out the value of i, which should be 3 (price.length). This is because var variables are scoped to the function and it still has access to i even after the loop finishes.
2. The console will print out the last value of discountedPrice before the for loop ends, which should be 150. This is because var variables are scoped to the function and it still has access to discountedPrice even after the loop finishes.
3. The console will print out the last value of finalPrice right before the loop ends, which should be 150. This is because var variables are scoped to the function and it still has access to discountedPrice even after the loop finishes.
4. This function returns the array [50, 100, 150].
5. There will be an error because i is only in the scope of the for loop (because it was declared with let inside the for loop) so it would not be defined after the for loop.
6. There will be an error because discountedPrice is only in the scope of the for loop (because it was declared with let inside the for loop) so it would not be defined after the for loop.
7. Line 14 will print out 150 because it was declared outside of the for loop, and is scoped for the entire function.
8. The function will return the array [50, 100, 150] because it returns discounted, which was an array that was declared outside of the for loop and thus is scoped for the entire function.
9. There will be an error because i is only in the scope of the for loop (because it was declared with let inside the for loop) so it would not be defined after the for loop.
10. Line 12 will print 3 (which is price.length) because length is const declared outside of the for loop and thus accessible throughout the entire function.
11. The function will return the array [50, 100, 150] because discounted was declared outside of the for loop and has the scope of the entire function. Additionally, you can still modify the contents of array consts.
12. 
* A. student.name
* B. student['Grad Year']
* C. student.greeting()
* D. student['Favorite Teacher'].name
* D. student.courseLoad[0]
13. 
* A. '3' + 2 = '32'. The + operator performs string concatenation if one operand is a string, so 2 is converted to "2" and concatenated to become 32.
* B. '3' - 2 = 1. The - operator performs subtraction, so '3' is converted to the number 3, and 3 - 2 = 1.
* C. 3 + null = 3. null is converted to 0, so 3 + 0 = 3.
* D. '3' + null = '3null'. Since '3' is a string, it converts null into a string as well and concatenates them together.
* E. true + 3 = 4. true is converted to 1, so 1 + 3 = 4.
* F. false + null = 0. Both false and null are converted to 0, so 0 + 0 = 0.
* G. '3' + undefined = '3undefined.'
* H. '3' - undefined = undefined. The - operator only performs subtraction, so undefined would convert to NaN and thus the entire operation would result in NaN.
14. 
* A. '2' > 1 = true. When comparing a number and string, JavaScript converts the string to a number, so 2 > 1 is true.
* B. '2' < '12' = false. When comparing two strings, JavaScript compares the two string by lexicographical order, and since 2 comes before the 1 in 12, '2' < '12' is false.
* C. 2 == '2' = true. The == converts the string into numbers, so 2 == 2 is true.
* D. 2 === '2' = false. The === is a strict comparison so it compares the number 2 with the string '2', so the result is false.
* E. true == 2 = false. true is converted to 1, so 1 == 2 is false.
* F. true === Boolean(2) = true. Boolean(2) is true, so true === true is also true.
15. == does type conversion when it compares, while === is a strict equality and does not perform type conversion. This way, '2' == 2 is true but '2' === 2 is false.
16. see [part2-questions16.js](/sp26-cse110-lab4/expose/javascript/part2-question16.js)
17. The result is the function returns newArr that is [2, 4, 6]. First the modifyArray call has parameters of [1, 2 ,3] and the function doSomething, which multiplies the number by 2. Then, for every element in array, push the number of the array multiplied by two (by calling the function doSomething). Thus, newArr will be the elements of [1, 2, 3] multiplied by two, resulting in [2, 4, 6].
18. see [part2-questions18.js](/sp26-cse110-lab4/expose/javascript/part2-question18.js)
19. output:
1
4
3
2