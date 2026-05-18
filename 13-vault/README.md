# Ansible Vault Example

## Commands

### 1. Encrypt a file
```bash
ansible-vault encrypt secrets.yml --vault-password-file vault_password.txt
```

### 2. View encrypted file
```bash
ansible-vault view secrets.yml --vault-password-file vault_password.txt
```

### 3. Edit encrypted file
```bash
ansible-vault edit secrets.yml --vault-password-file vault_password.txt
```

### 4. Decrypt a file
```bash
ansible-vault decrypt secrets.yml --vault-password-file vault_password.txt
```

### 5. Run playbook with vault
```bash
ansible-playbook -i inventory.yml playbook.yml --vault-password-file vault_password.txt
```

### 6. Encrypt a string (inline)
```bash
ansible-vault encrypt_string 'mysecret' --name 'my_variable' --vault-password-file vault_password.txt
```

## Notes
- Never commit vault_password.txt to git!
- Add vault_password.txt to .gitignore
- You can also use --ask-vault-pass instead of password file

