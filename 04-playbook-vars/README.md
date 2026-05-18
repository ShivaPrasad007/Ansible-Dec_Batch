# Playbook Variables

This example demonstrates variables defined at the playbook level.

## Files:
- `playbook2.yml` - Playbook with variables defined under `vars:` at play level

## Variable Types Shown:
- Play-level variables defined under `vars:` section
- Variables available to all tasks in that play

## Usage:
```bash
ansible-playbook -i inventory.yml playbook2.yml
```

## Key Points:
- Variables defined in playbook under `vars:` key
- Scope is the entire play
- Can be overridden by task vars and extra vars