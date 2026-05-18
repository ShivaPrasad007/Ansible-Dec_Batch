# Group Variables (group_vars)

This example demonstrates variables defined in the `group_vars/` directory.

## Files:
- `inventory6.yml` - Basic inventory with groups
- `playbook6.yml` - Playbook that uses group variables
- `group_vars/webservers.yml` - Variables for webservers group

## Variable Types Shown:
- Group-specific variables in `group_vars/{groupname}.yml`
- Variables apply to all hosts in the group

## Usage:
```bash
ansible-playbook -i inventory6.yml playbook6.yml
```

## Key Points:
- Variables are in `group_vars/` directory
- Files named after group names
- Variables available to all hosts in that group
- Lower precedence than host_vars