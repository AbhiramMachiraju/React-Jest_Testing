import { deleteById_API, fetchAllData_API, findById_API, saveorUpdateData_API } from './BioApi';
import axios from 'axios';
import { fetchAllMockData, saveMockData } from './mockData';

jest.mock("axios");

describe('BIO DATA MOCK API Test Cases', () => {

  // Does nothing, then returns undefined:when mocked empty behaviour
  test('TEST_1 :: getById API WITH MOCK', async () => {
    axios.get.mockResolvedValue({ data: fetchAllMockData.data[0] });
    const name = await findById_API(1);
    expect(name).toEqual('ABHIRAM');
  })

  test('TEST_2 :: FetchALL API WITH  MOCK', async () => {
    axios.get.mockResolvedValue({ data: fetchAllMockData });
    const allData = await fetchAllData_API();
    expect(allData.data[0].name).toEqual(fetchAllMockData.data[0].name);
  });


  test('TEST_3 :: deleteById API WITH  MOCK', async () => {
    axios.delete.mockResolvedValue({ data: 'Deleted Successfully' });
    const result = await deleteById_API(15);
    expect(result).toEqual('Deleted Successfully');
  });

  test('TEST_4 :: SAVE API WITH MOCK', async () => {
    axios.post.mockResolvedValue({ data: saveMockData });
    const RequestBody={
        "name": "TEST_DATA",
        "age": 27,
        "mobile": "7893466277",
        "adrs": "Tokyo Tower near",
        "state": "TKY",
        "country": "JPN"
    }
    const responseMessage = await saveorUpdateData_API(0,RequestBody);  
     expect(responseMessage).toEqual("SUCESS"); 
 });

 test('TEST_5 :: UPDATE API WITH MOCK', async () => {
  axios.put.mockResolvedValue({ data: saveMockData });
    const RequestBody={
        "autoId":13,
        "name": "TEST_DATA_UPDATE",
        "age": 27,
        "mobile": "7893466277",
        "adrs": "Tokyo Tower near",
        "state": "TKY",
        "country": "JPN"
    }
    const responseMessage = await saveorUpdateData_API(13,RequestBody);  
     expect(responseMessage).toEqual("SUCESS"); 
 }); 



})