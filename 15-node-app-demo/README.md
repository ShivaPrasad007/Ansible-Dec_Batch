# Simple Node.js Application Deployment

This demonstrates a complete Node.js web application deployment using Ansible on remote servers.

## What This Demonstrates

### 1. **Modern Node.js Application**
- Express.js web server with REST API endpoints
- Modern HTML5/CSS3/JavaScript frontend
- Interactive features and real-time updates
- Professional UI with responsive design

### 2. **Ansible Role Structure**
- Modular role-based deployment
- Variable-driven configuration
- Automated dependency installation
- File deployment with proper permissions

### 3. **Remote Server Deployment**
- Deploys to remote EC2 instances
- Installs Node.js automatically
- Sets up systemd service
- Production-ready application deployment

## Application Features

### **Frontend (Modern UI)**
- **Responsive Design**: Works on desktop and mobile
- **Interactive Elements**: API health checks, time display, click counter
- **Real-time Updates**: Live uptime and time display
- **Professional Styling**: Modern gradients, animations, and typography
- **Font Awesome Icons**: Beautiful iconography throughout

### **Backend (Express.js)**
- **REST API Endpoints**:
  - `GET /api/health` - Server health and uptime information
  - `GET /api/time` - Current server time and timezone
- **Static File Serving**: HTML, CSS, and JavaScript files
- **Error Handling**: Proper error responses and logging

### **Interactive Features**
- **Health Check Button**: Tests server connectivity and displays status
- **Time Display Button**: Fetches and displays current server time
- **Click Counter**: Interactive counter with animations
- **Status Indicator**: Real-time server status in header
- **Live Updates**: Automatic uptime and time updates

## Usage

```bash
# Deploy the application to remote servers
ansible-playbook -i inventory/hosts.yml site.yml

# Access the deployed applications
open http://3.110.224.103:3000
open http://43.204.212.9:3000
open http://15.207.221.25:3000
```

## What Gets Deployed

### **Server Setup**
- Updates package cache
- Installs Node.js 18.x
- Installs npm dependencies
- Creates systemd service
- Starts application automatically

### **Application Deployment**
- Deploys to `~/app/node-app` on each server
- Runs as ubuntu user
- Managed by systemd service
- Automatic restarts on failure

## Files Deployed

- **package.json**: Node.js dependencies and scripts
- **server.js**: Express.js web server with API endpoints
- **public/index.html**: Modern web interface
- **public/styles.css**: Professional CSS styling
- **public/script.js**: Interactive JavaScript functionality

## API Endpoints

- `GET /` - Main web application
- `GET /api/health` - Health check endpoint
- `GET /api/time` - Server time endpoint

The application will be deployed to `~/node-app` and can be accessed at `http://localhost:3000` after starting the server.