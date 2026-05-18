# Extra Variables (--extra-vars)

This example demonstrates variables passed via command line using --extra-vars.

## Files:
- `inventory.yml` - Basic inventory
- `playbook.yml` - Playbook that uses extra variables

## Variable Types Shown:
- Command line variables passed with --extra-vars or -e
- Variables override all other sources

## Usage:
```bash
# Using --extra-vars
ansible-playbook -i inventory.yml playbook.yml --extra-vars "package_name=apache2 env=staging version=2.4"

# Using -e shorthand
ansible-playbook -i inventory.yml playbook.yml -e "package_name=mysql env=dev"
```

## Key Points:
- Variables passed via command line
- Highest precedence (override everything else)
- Can be JSON, YAML, or key=value format
- Useful for runtime configuration and CI/CD