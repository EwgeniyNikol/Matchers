import { httpGet, httpPost } from '../http';

test('httpGet throws error with URL', () => {
  expect(() => httpGet('test-url')).toThrow('test-url');
});

test('httpPost throws error with URL', () => {
  expect(() => httpPost('test-url')).toThrow('test-url');
});