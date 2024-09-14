import { Aneio } from './aneio.js'

const client = new Aneio('https://jsonplaceholder.typicode.com');

client.get('/posts/1')
  .then(response => {
    console.log('GET Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

client.post('/posts', { title: 'foo', body: 'bar', userId: 1 })
  .then(response => {
    console.log('POST Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });
