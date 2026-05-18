# Ansible Ad-Hoc Commands Quick Reference

## Essential Commands

### Connectivity & Testing
```bash
ansible all -m ping                                    # Test all hosts
ansible webservers -m ping                             # Test web servers
ansible localhost -m ping                              # Test localhost
```

### System Information
```bash
ansible all -m command -a "uptime"                     # System uptime
ansible all -m command -a "df -h"                      # Disk usage
ansible all -m command -a "free -h"                    # Memory usage
ansible all -m setup                                  # All system facts
ansible all -m setup -a "filter=ansible_*version*"     # Version info only
```

### File Operations
```bash
ansible all -m copy -a "src=file.txt dest=/tmp/file.txt"           # Copy file
ansible all -m file -a "path=/tmp/dir state=directory"             # Create dir
ansible all -m file -a "path=/tmp/file.txt state=touch"            # Create file
ansible all -m file -a "path=/tmp/file.txt mode=0644"              # Set permissions
```

### Package Management
```bash
ansible all -m package -a "name=vim state=present"                 # Install package
ansible all -m apt -a "name=nginx state=present"                   # Apt install
ansible all -m yum -a "name=httpd state=present"                   # Yum install
```

### Service Management
```bash
ansible all -m service -a "name=nginx state=started"               # Start service
ansible all -m service -a "name=mysql state=restarted"             # Restart service
ansible all -m service -a "name=apache2 state=stopped"             # Stop service
```

### User Management
```bash
ansible all -m user -a "name=newuser state=present"                # Create user
ansible all -m user -a "name=olduser state=absent"                 # Delete user
```

## Common Options
- `-i inventory.ini`    # Specify inventory file
- `-u username`         # Connect as different user
- `-b`                  # Become (sudo)
- `-K`                  # Ask for sudo password
- `-v`                  # Verbose output
- `-C`                  # Check mode (dry run)
- `-f 10`               # Number of parallel forks

## Patterns
- `all`                 # All hosts
- `webservers`          # Host group
- `host1:host2`         # Multiple specific hosts
- `*.example.com`       # Wildcard matching
- `!badhost`            # Exclude host

## Examples with Options
```bash
ansible webservers -m command -a "reboot" -u admin -b -K           # Reboot with sudo
ansible all -m copy -a "src=config dest=/etc/" -C                  # Dry run copy
ansible "web1:web2" -m service -a "name=nginx state=restarted" -f 2 # Limited parallelism
```