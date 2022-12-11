import { Signin,validateEmail } from "./Signin";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const onSubmit = jest.fn();

describe("Test the Login Component", () => {
    test("render the login form submit button on the screen", async () => {
      render(<Signin />);
      //console.log(component);
      const buttonList = await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(2);
    });

    test("should be failed on email validation ", () => {
        const testEmail = "abhiram.com";
        expect(validateEmail(testEmail)).not.toBe(true);
      });


      test("email input field should accept email ", () => {
        render(<Signin />);
        const email = screen.getByPlaceholderText("Enter email");
        userEvent.type(email, "abhiram");
        expect(email.value).not.toMatch("abhiram.malvia@gmail.com");
      });

      test("passport input should have type password ", () => {
        render(<Signin />);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
      });

      test("should display alert if error", () => {
        render(<Signin />);
        const email = screen.getByPlaceholderText("Enter email");
        const password = screen.getByPlaceholderText("Password");
        const buttonList = screen.getAllByRole("button");
    
        userEvent.type(email, "abhiram");
        userEvent.type(password, "123456");
        userEvent.click(buttonList[0]);
        const error = screen.getByText("Email is not valid");
        expect(error).toBeInTheDocument();
      });


      test("should be able to reset the form ", () => {
        const { getByLabelText, getByTestId } = render(<Signin />);
        const resetBtn = getByTestId("reset");
        const emailInputNode = getByLabelText("Email");
        const passwordInputNode = getByLabelText("Password");
        fireEvent.click(resetBtn);
        expect(emailInputNode.value).toMatch("");
        expect(passwordInputNode.value).toMatch("");
      });

      test("should be able to submit the form", () => {
        const component = render(<Signin />);
        const email = screen.getByPlaceholderText("Enter email");
        const password = screen.getByPlaceholderText("Password");
        const btnList = screen.getAllByRole("button");
    
        userEvent.type(email, "abhiram@gmail.com");
        userEvent.type(password, "123456");
        userEvent.click(btnList[0]);
    
        const user = screen.getByText("abhiram@gmail.com");
        expect(user).toBeInTheDocument();
      });




});





/*
‘enzyme

https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675


import { mount, shallow, render } from ‘enzyme';
const clickFn = jest.fn();
describe('MyComponent', () => {
  it('button click should hide component', () => {
    const component = shallow(<MyComponent onClick={clickFn} />);
    component
      .find('button#my-button-two')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
}); */