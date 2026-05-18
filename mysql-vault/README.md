# MySQL Installation with Ansible Vault

## Files
- `inventory.yml` - Host inventory
- `playbook.yml` - Main playbook
- `secrets.yml` - Encrypted credentials (vault)
- `vault_password.txt` - Vault password file

## Setup

### 1. Encrypt secrets file
```bash
ansible-vault encrypt secrets.yml --vault-password-file vault_password.txt
```

### 2. Run playbook
```bash
ansible-playbook -i inventory.yml playbook.yml --vault-password-file vault_password.txt
```

### 3. View/Edit secrets
```bash
# View
ansible-vault view secrets.yml --vault-password-file vault_password.txt

# Edit
ansible-vault edit secrets.yml --vault-password-file vault_password.txt
```

## What it does
1. Installs MySQL server
2. Sets root password (from vault)
3. Creates a database
4. Creates a user with privileges

## Security Note
Never commit `vault_password.txt` to git!

