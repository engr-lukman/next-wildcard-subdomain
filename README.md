# Next.js wildcard subdomain Example

## Getting started

```bash
git clone https://github.com/engr-lukman/next-wildcard-subdomain.git
cd next-wildcard-subdomain
yarn
yarn dev
```

Open [http://lvh.me:3000](http://localhost:3000) with your browser to see the result.

## If we are going to run this using `yarn dev:vh` we will have the following routes:

- [http://lvh.me:3000](http://lvh.me:3000)
- [http://admin.lvh.me:3000](http://admin.lvh.me:3000)
- [http://viva.lvh.me:3000](http://viva.lvh.me:3000)
- [http://sub1.lvh.me:3000](http://sub1.lvh.me:3000)

# What is `lvh.me:3000`?

`lvh.me:3000` is a domain name and port number used for local testing and development purposes. The domain name "lvh.me" stands for "localhost via HTTPS" and is a reserved domain that always points to the IP address 127.0.0.1, which is the loopback address of the local computer. The port number 3000 is often used as a default port for web servers and web applications.

By using `lvh.me:3000`, developers can test and debug their web applications locally without needing to deploy them to a public server. This is particularly useful during the development phase when frequent changes are made to the application code.

It is important to note that `lvh.me:3000` is only accessible on the local machine and cannot be accessed by other computers on the internet. It is also not a secure connection, as it does not use a valid SSL certificate. Therefore, it should not be used for hosting production websites or applications.

# What is `vhost`?

The `vhost` package is a Node.js module that provides a simple and flexible way to create virtual hosts in a Node.js web server. Virtual hosting allows a single web server to serve multiple domains or subdomains, each with its own set of files, configuration, and functionality.

With the `vhost` package, developers can define multiple virtual hosts within a single Node.js server, each with its own hostname and document root. This allows them to easily manage multiple websites or applications on the same server and reuse resources such as databases, caches, or other services.

To use the `vhost` package, developers need to define their virtual hosts using the vhost() function provided by the module, passing in the hostname and the middleware function for that particular virtual host. They can then mount the virtual host middleware onto the main server using the standard app.use() method.

The `vhost` package is often used in combination with popular Node.js web frameworks such as Express or Koa, providing a simple and flexible way to manage virtual hosts for web applications.

For more details: [https://github.com/expressjs/vhost](https://github.com/expressjs/vhost)
