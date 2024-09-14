import http from 'http';
import https from 'https';
import { URL } from 'url';

export class Aneio {
  constructor(baseURL = '') {
    this.baseURL = baseURL;
  }

  request(method, path, options = {}) {
    const url = new URL(path, this.baseURL);
    const isHttps = url.protocol === 'https:';

    const lib = isHttps ? https : http;

    const requestOptions = {
      method: method,
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: options.headers || {}
    };

    return new Promise((resolve, reject) => {
      const req = lib.request(requestOptions, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: JSON.parse(data)
          });
        });
      });

      req.on('error', (err) => {
        reject(err);
      });

      if (options.body) {
        req.write(JSON.stringify(options.body));
      }

      req.end();
    });
  }

  get(path, options = {}) {
    return this.request('GET', path, options);
  }

  post(path, body = {}, options = {}) {
    options.body = body;
    return this.request('POST', path, options);
  }

  put(path, body = {}, options = {}) {
    options.body = body;
    return this.request('PUT', path, options);
  }

  delete(path, options = {}) {
    return this.request('DELETE', path, options);
  }
}