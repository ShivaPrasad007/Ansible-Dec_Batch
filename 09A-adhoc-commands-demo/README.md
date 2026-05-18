# Ansible Ad-Hoc Commands Demo (09A)

This folder demonstrates the most commonly used Ansible ad-hoc commands. Ad-hoc commands allow you to perform quick, one-off tasks without writing full playbooks.

## What are Ad-Hoc Commands?

Ad-hoc commands are Ansible's way of performing quick tasks on remote hosts without writing a full playbook. They're perfect for:
- Testing connectivity
- Running quick commands
- Making simple changes
- Gathering information
- Troubleshooting

## Basic Syntax

```bash
ansible [pattern] -m [module] -a "[arguments]" [options]
```

- **pattern**: Host pattern (all, webservers, localhost, etc.)
- **module**: Ansible module to use
- **arguments**: Module-specific arguments
- **options**: Additional options (-i inventory, -u user, etc.)

## Most Used Ad-Hoc Commands

### 1. Testing Connectivity (`ping` module)

The `ping` module tests basic connectivity and Python setup:

```bash
# Test connectivity to all hosts
ansible all -m ping -i inventory/hosts.ini

# Test specific host group
ansible webservers -m ping -i inventory/hosts.ini

# Test localhost only
ansible localhost -m ping -i inventory/hosts.ini
```

### 2. Running Shell Commands (`command` module)

The `command` module runs simple commands without shell features:

```bash
# Check system uptime
ansible all -m command -a "uptime" -i inventory/hosts.ini

# Check disk usage
ansible all -m command -a "df -h" -i inventory/hosts.ini

# List running processes
ansible all -m command -a "ps aux | head -10" -i inventory/hosts.ini
```

### 3. Running Shell Commands with Features (`shell` module)

The `shell` module runs commands with shell features like pipes and redirection:

```bash
# Use shell features (pipes, redirection, etc.)
ansible all -m shell -a "ps aux | grep python | wc -l" -i inventory/hosts.ini

# Check memory usage with complex command
ansible all -m shell -a "free -h && echo '---' && vmstat 1 3" -i inventory/hosts.ini

# Run multiple commands
ansible all -m shell -a "echo 'Current date:' && date && echo 'Uptime:' && uptime" -i inventory/hosts.ini
```

### 4. Copying Files (`copy` module)

The `copy` module copies files to remote hosts:

```bash
# Copy a file to remote host
ansible all -m copy -a "src=examples/sample.txt dest=/tmp/sample.txt" -i inventory/hosts.ini

# Copy with specific permissions
ansible all -m copy -a "src=examples/config.ini dest=/tmp/config.ini mode=0644" -i inventory/hosts.ini

# Copy content directly (without source file)
ansible all -m copy -a "content='Hello from Ansible!' dest=/tmp/hello.txt" -i inventory/hosts.ini
```

### 5. Managing Files and Directories (`file` module)

The `file` module manages files, directories, and permissions:

```bash
# Create a directory
ansible all -m file -a "path=/tmp/ansible-demo state=directory mode=0755" -i inventory/hosts.ini

# Create a file
ansible all -m file -a "path=/tmp/test.txt state=touch mode=0644" -i inventory/hosts.ini

# Set permissions
ansible all -m file -a "path=/tmp/sample.txt mode=0644" -i inventory/hosts.ini

# Delete a file
ansible all -m file -a "path=/tmp/old-file.txt state=absent" -i inventory/hosts.ini
```

### 6. Managing Services (`service` module)

The `service` module manages system services:

```bash
# Check service status
ansible all -m service -a "name=sshd state=started" -i inventory/hosts.ini

# Start a service
ansible all -m service -a "name=nginx state=started" -i inventory/hosts.ini

# Stop a service
ansible all -m service -a "name=apache2 state=stopped" -i inventory/hosts.ini

# Restart a service
ansible all -m service -a "name=mysql state=restarted" -i inventory/hosts.ini

# Enable service at boot
ansible all -m service -a "name=nginx enabled=yes" -i inventory/hosts.ini
```

### 7. Managing Packages (`package` module)

The `package` module manages packages (works on most distros):

```bash
# Install a package
ansible all -m package -a "name=vim state=present" -i inventory/hosts.ini

# Remove a package
ansible all -m package -a "name=telnet state=absent" -i inventory/hosts.ini

# Update package cache and upgrade
ansible all -m package -a "name=* state=latest update_cache=yes" -i inventory/hosts.ini
```

### 8. Distribution-Specific Package Management

For specific package managers:

```bash
# Yum/DNF (RedHat/CentOS/Fedora)
ansible all -m yum -a "name=httpd state=present" -i inventory/hosts.ini

# Apt (Debian/Ubuntu)
ansible all -m apt -a "name=apache2 state=present update_cache=yes" -i inventory/hosts.ini

# Pacman (Arch Linux)
ansible all -m pacman -a "name=nginx state=present" -i inventory/hosts.ini
```

### 9. Managing Users (`user` module)

The `user` module manages system users:

```bash
# Create a user
ansible all -m user -a "name=ansible-user state=present" -i inventory/hosts.ini

# Create user with home directory and shell
ansible all -m user -a "name=deployer state=present shell=/bin/bash create_home=yes" -i inventory/hosts.ini

# Set password (use encrypted password)
ansible all -m user -a "name=ansible-user password='$6$encryptedpassword'" -i inventory/hosts.ini

# Delete a user
ansible all -m user -a "name=temp-user state=absent remove=yes" -i inventory/hosts.ini
```

### 10. Gathering System Facts (`setup` module)

The `setup` module gathers system information:

```bash
# Gather all facts
ansible all -m setup -i inventory/hosts.ini

# Gather specific facts (filter)
ansible all -m setup -a "filter=ansible_distribution*" -i inventory/hosts.ini

# Gather memory facts
ansible all -m setup -a "filter=ansible_memory*" -i inventory/hosts.ini

# Gather network facts
ansible all -m setup -a "filter=ansible_interfaces" -i inventory/hosts.ini
```

## Advanced Ad-Hoc Command Examples

### Running Commands as Different User

```bash
# Run as specific user
ansible all -m command -a "whoami" -u deployer -i inventory/hosts.ini

# Run with sudo
ansible all -m command -a "tail /var/log/auth.log" -b -i inventory/hosts.ini
```

### Limiting to Specific Hosts

```bash
# Run on specific host
ansible localhost -m command -a "hostname" -i inventory/hosts.ini

# Run on multiple specific hosts
ansible "host1:host2" -m command -a "uptime" -i inventory/hosts.ini
```

### Using Variables

```bash
# Pass variables
ansible all -m copy -a "content='Server: {{ ansible_hostname }}' dest=/tmp/server.txt" -i inventory/hosts.ini
```

### Running with Custom SSH Key

```bash
# Use specific private key
ansible all -m ping --private-key=/path/to/key -i inventory/hosts.ini
```

## Common Options

- `-i INVENTORY`: Specify inventory file
- `-u USER`: Connect as specific user
- `-b`: Run operations with become (sudo)
- `-K`: Ask for become password
- `-v`: Verbose output
- `-vvv`: Very verbose output
- `--private-key`: Use specific SSH key
- `-f FORKS`: Number of parallel processes (default 5)

## Best Practices

1. **Test with ping first**: Always test connectivity before running commands
2. **Use -C (check mode)**: Test commands without making changes
3. **Limit with patterns**: Use host patterns to limit impact
4. **Use modules over shell**: Prefer Ansible modules over shell commands
5. **Document your commands**: Keep track of ad-hoc commands you run

## Demo Commands to Try

Here are some safe commands you can run to test the concepts:

```bash
# 1. Test connectivity
ansible localhost -m ping -i inventory/hosts.ini

# 2. Check system info
ansible localhost -m command -a "uname -a" -i inventory/hosts.ini

# 3. Check disk usage
ansible localhost -m shell -a "df -h | head -5" -i inventory/hosts.ini

# 4. Copy a file
ansible localhost -m copy -a "src=examples/sample.txt dest=/tmp/ansible-sample.txt" -i inventory/hosts.ini

# 5. Create a directory
ansible localhost -m file -a "path=/tmp/ansible-test state=directory" -i inventory/hosts.ini

# 6. Gather system facts
ansible localhost -m setup -a "filter=ansible_distribution*" -i inventory/hosts.ini
```

## When to Use Ad-Hoc vs Playbooks

**Use Ad-Hoc Commands for:**
- Quick one-off tasks
- Testing and troubleshooting
- Gathering information
- Simple file operations
- Service management

**Use Playbooks for:**
- Complex multi-step tasks
- Reusable automation
- Configuration management
- Application deployment
- Infrastructure provisioning

Ad-hoc commands are great for learning Ansible and performing quick tasks, while playbooks are better for complex, repeatable automation!