import { render, screen } from '@testing-library/react';
import Application from './application';

describe('Application Componet Test Cases', () => {


    test('Case_01 _Semantic Elements_Check', () => {

        render(<Application />);

        const header1 = screen.getByRole('heading', { level: 1 }); // can use name or level
        expect(header1).toBeInTheDocument();

        const header2 = screen.getByRole('heading', { level: 2 }); // can use name or level
        expect(header2).toBeInTheDocument();

        /* 
              Query Methods : 
              getByRole
              or 
                 getByLabeltext("Name :");
                 getByPlaceholderText 
                 getByText
                 getByDisplayValue
                 getByAltText
                 getByTitle
        */

        //input type="text" and <textarea> tag has same role 'textbox' to overcome we use "getByRole with label Name"
        const nameElement = screen.getByRole('textbox', { name: "Name :" });
        expect(nameElement).toBeInTheDocument();

        const adrsElement = screen.getByRole('textbox', { name: "Address :" });
        expect(adrsElement).toBeInTheDocument();


        const jobLocElement = screen.getByRole('combobox');
        expect(jobLocElement).toBeInTheDocument();

        const tcElement = screen.getByRole('checkbox');
        expect(tcElement).toBeInTheDocument();

        const buttonelement = screen.getByRole('button');
        expect(buttonelement).toBeInTheDocument();


        /** getByLabelText */

        const nameElement2 = screen.getByLabelText('Name :', { selector: 'input' })
        expect(nameElement2).toBeInTheDocument()

        const termsElement2 = screen.getByLabelText(
            'I agree to the terms and conditions'
        )
        expect(termsElement2).toBeInTheDocument()

        /** getByPlaceholderText */

        const nameElement3 = screen.getByPlaceholderText('Fullname')
        expect(nameElement3).toBeInTheDocument()

        /** getByText */

        const paragraphElement = screen.getByText('All fields are mandatory')
        expect(paragraphElement).toBeInTheDocument()

        /** getByDisplayValue */

        const nameElement4 = screen.getByDisplayValue('Abhiram')
        expect(nameElement4).toBeInTheDocument()

        /** getByAltText */

        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument()

        /** getByTitle */

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()

        /** getByTestId */

        const customElement = screen.getByTestId('custom-element')
        expect(customElement).toBeInTheDocument()
    })


})




