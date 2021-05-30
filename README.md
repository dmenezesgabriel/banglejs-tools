# Web Bluetooth Espurino

## HTTPS local server

```sh
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

## References

- [Node HTTPS local server](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)
- [Node serve html page](https://flaviocopes.com/node-serve-html-page/)
