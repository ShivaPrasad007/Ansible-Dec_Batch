# Simple Nginx Project Deployment

This demonstrates a complete web project deployment using Ansible on remote servers.

## What This Demonstrates

### 1. **Complete Web Project**
- HTML5 page with modern design
- CSS3 with responsive layout and animations
- JavaScript with interactive features
- Professional-looking landing page

### 2. **Ansible Role Structure**
- Modular role-based deployment
- Variable-driven configuration
- File deployment with proper permissions
- Automated project setup

### 3. **Remote Server Deployment**
- Deploys to remote EC2 instances
- Installs and configures Nginx
- Uses SSH key authentication
- Production-ready web server setup

## Usage

```bash
# Deploy the project to remote servers
ansible-playbook -i inventory/hosts.yml site.yml

# Access the deployed sites
open http://3.110.224.103
open http://43.204.212.9
open http://15.207.221.25
```

## What Gets Deployed

### **Server Setup**
- Updates package cache
- Installs Nginx web server
- Configures proper permissions
- Starts and enables Nginx service

### **Files Deployed**
- **HTML**: Main landing page with project information
- **CSS**: Modern styling with animations and responsive design
- **JS**: Interactive features and console logging

The project will be deployed to `/var/www/html` on each remote server and served by Nginx.