# Inventory Variables

This example demonstrates variables defined directly in inventory files.

## Files:
- `inventory3.yml` - Inventory with host and group variables
- `playbook3.yml` - Playbook that uses inventory variables

## Variable Types Shown:
- Host variables (defined per host in inventory)
- Group variables (defined under [groupname:vars])

## Usage:
```bash
ansible-playbook -i inventory3.yml playbook3.yml
```

## Key Points:
- Variables are defined alongside host definitions
- Host vars override group vars for the same variable name
- No special directory structure needed