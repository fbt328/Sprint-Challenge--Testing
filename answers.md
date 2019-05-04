1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?
describe() is a container for related tests. In this challenge one describe is used for all GET endpoint testing and one is used for all POST endpoint testing. it() is for individual tests within a describe().

2. What is the point of `Test Driven Development`? What do you think about this approach?
TDD is writing the tests first then writing the accompying code to pass the tests. This should result in better code. Instead of writing tests that pass because you know what your result should be, you are giving yourself parameters that the rest of your code must meet. Right now I see why we use it but since I am still new to testing I find it frustrating. I'm still at the point where sometimes I don't know if a test is failing because it failed or because I wrote it poorly. I think I will find it more useful with further practice.

3. Mention three types of automated tests.
unit testing, integration testing, end to end testing