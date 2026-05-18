# NGINX Production Role with App Deployment

This Ansible setup provides a complete production-grade deployment solution for different types of web applications with NGINX as the reverse proxy.

## Supported Application Types

- **Express (Node.js)**: Deploys Node.js/Express apps with PM2-like process management
- **Flask (Python)**: Deploys Python/Flask apps with Gunicorn
- **Java (Spring Boot)**: Deploys Java applications with Maven/Gradle build
- **Static HTML**: Deploys static websites served directly by NGINX

## Roles Included

- `nginx`: Configures NGINX as reverse proxy/load balancer
- `express_app`: Deploys Node.js applications
- `flask_app`: Deploys Python Flask applications
- `java_app`: Deploys Java applications
- `static_app`: Deploys static HTML sites

## Usage

1. Place your application code in the appropriate `files/` subdirectory
2. Update the playbook variables as needed
3. Run the playbook:

```bash
ansible-playbook -i inventory.ini playbook.yml
```

## Example Application Code Structure

```
files/
├── express/
│   ├── package.json
│   └── server.js
├── flask/
│   ├── app.py
│   └── requirements.txt
├── java/
│   ├── pom.xml
│   └── src/main/java/com/example/App.java
└── static/
    └── index.html
```

## Testing Results

✅ **All application types successfully deployed and tested with sudo privileges:**

- **Express App**: Node.js installed via Snap, dependencies installed with sudo, app started on port 3000, NGINX proxy configured
- **Flask App**: Python/Flask installed via apt, Gunicorn started on port 8000, NGINX proxy configured  
- **Java App**: OpenJDK 17 and Maven installed, JAR built and started on port 8080, NGINX proxy configured
- **Static App**: HTML files served directly by NGINX on port 80

**Updated Architecture**: All applications now run with sudo privileges instead of dedicated system users, simplifying deployment while maintaining production-grade configuration.

**Playbook Execution**: All plays completed successfully with proper error handling and handler management.

## Production Features

- Automatic dependency installation
- Process management with async tasks
- Health checks and wait conditions
- **All applications run with sudo privileges** (no dedicated system users)
- Graceful restarts via handlers
- NGINX configuration templating

## Customization

Each role has extensive defaults that can be overridden in the playbook vars. See the `defaults/main.yml` files in each role for available options.