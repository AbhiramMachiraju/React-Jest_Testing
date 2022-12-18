import axios from 'axios';
import { render, screen } from '@testing-library/react'
import { fetchAllMockData } from './mockData';
import ListAllData from '../ListAllData';
import CreateData from '../CreateData';


describe('BIO DATA  Test Cases', () => {


  test("render the Buttons & Fields on the screen", async () => {
    render(<CreateData  match={{params: {id: '_add'} }} />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);

    const nameElement = screen.getByPlaceholderText('Name');
    expect(nameElement).toBeInTheDocument();
  });

})