# Host Variables (host_vars)

This example demonstrates variables defined in the `host_vars/` directory.

## Files:
- `inventory5.yml` - Basic inventory
- `playbook5.yml` - Playbook that uses host variables
- `host_vars/web1.yml` - Variables specific to web1 host

## Variable Types Shown:
- Host-specific variables in `host_vars/{hostname}.yml`
- Variables apply only to the specific host

## Usage:
```bash
ansible-playbook -i inventory5.yml playbook5.yml
```

## Key Points:
- Variables are in `host_vars/` directory
- Files named after host names
- Variables available only to that specific host
- Highest precedence among inventory variable sources