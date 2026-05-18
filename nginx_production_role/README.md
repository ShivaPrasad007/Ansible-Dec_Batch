# NGINX Production Role

This Ansible role provides a clean, reusable, production-grade NGINX configuration for different types of web applications.

## Supported Application Types

- **Static Websites**: Serves static files from a specified root directory.
- **MERN Apps**: Proxies requests to a Node.js application (default port 3000).
- **Flask/Django Apps**: Proxies requests to Python applications (default port 8000).

## Role Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `nginx_app_type` | `static` | Type of application (static, mern, flask, django) |
| `nginx_domain` | `example.com` | Server name/domain |
| `nginx_root` | `/var/www/html` | Document root for static sites |
| `nginx_proxy_port` | `3000` | Port for proxying to backend app |
| `nginx_ssl` | `false` | Enable SSL |
| `nginx_ssl_cert` | `/etc/ssl/certs/ssl-cert-snakeoil.pem` | SSL certificate path |
| `nginx_ssl_key` | `/etc/ssl/private/ssl-cert-snakeoil.key` | SSL key path |
| `nginx_listen_port` | `80` | Port to listen on |
| `nginx_server_name` | `{{ nginx_domain }}` | Server name |
| `nginx_index_files` | `index.html index.htm` | Index files for static sites |
| `nginx_static_src` | - | Source directory for static files (when app_type is static) |

## Usage

Include the role in your playbook with appropriate variables:

```yaml
- hosts: webservers
  roles:
    - role: nginx
      vars:
        nginx_app_type: mern
        nginx_domain: myapp.com
        nginx_proxy_port: 3000
```

## Features

- Automatic NGINX installation and configuration
- Template-based configuration for flexibility
- Support for SSL/TLS
- Proxy configuration for dynamic apps
- Gzip compression
- Security headers (basic)
- Handler for graceful reloads

## Production Considerations

- For production, consider using SSL (set `nginx_ssl: true`)
- Adjust `nginx_listen_port` for SSL (443)
- Use proper SSL certificates
- Configure firewall rules
- Monitor NGINX logs
- Use rate limiting for APIs
- Implement caching strategies