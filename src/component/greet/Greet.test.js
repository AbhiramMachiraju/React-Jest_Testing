import { render, screen } from '@testing-library/react';
import Greet from './Greet';


/* 

    jest_refrence : https://jestjs.io/docs/using-matchers

    test,test.skip,test.only,describe,describe.skip,describe.only
    describe - > multiple tests 

    reference_youtube_Codevolution: https://www.youtube.com/watch?v=T2sv8jXoP4s&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=1
    refrence : https://testing-library.com/docs/queries/byrole
 
 */

describe('Greet Componet TEST_CASES', () => {
   
    test('Test_case_01 :: Greet JSX render correctly', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument();
    })


    test('Test_case_02 :: Greet JSX render correctly with a dynamic Name', () => {
        render(<Greet name='Abhiram' />);
        const textElement = screen.getByText(/Hello Abhiram/i);
        expect(textElement).toBeInTheDocument();
    })

  
})