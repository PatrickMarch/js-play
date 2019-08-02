              let fizzBuzz = (num) => 
                { let statement ="";
                  if (num%3 ===0)
                    {statement += "fizz"}
                  if(num%5===0)
                   {statement += "buzz"}
                 else 
                 {statement = num;}
                 return statement;
                }
              
               // basic testing
                console.log(fizzBuzz (5));
                console.log(fizzBuzz (15));
                console.log(fizzBuzz (25));
                // passing no issue

                // now some test cases for fun
                try 
                {fizzBuzz(1)}
                catch (error)
                  {console.log("fizzBuzz with 1 caused this error" +error);}
                try {fizzBuzz (500)}
                catch (error)
                  {console.log("fizzBuzz with 500 caused this error");}
                  // these never come back with an arror so no issue

                  // now for some random number generator
                for (let i = 0 ;i< 5;i++)
                {console.log(fizzBuzz(Math.round(Math.random()*1000)));}
                // works like a charm