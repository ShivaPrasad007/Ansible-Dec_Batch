#!/bin/bash

# ITD Ansible Ad-Hoc Commands Demo Script
# This script demonstrates various ad-hoc commands

echo "🚀 ITD Ansible Ad-Hoc Commands Demo"
echo "===================================="
echo ""

INVENTORY="inventory/hosts.ini"

echo "📋 Testing connectivity with ping module..."
ansible webservers -m ping -i $INVENTORY
echo ""

echo "💻 Running basic command (hostname)..."
ansible webservers -m command -a "hostname" -i $INVENTORY
echo ""

echo "🖥️  Running shell command with pipes..."
ansible webservers -m shell -a "echo 'Current user: $(whoami)' && echo 'Home directory: $HOME'" -i $INVENTORY
echo ""

echo "📄 Copying a file..."
ansible webservers -m copy -a "src=examples/sample.txt dest=/tmp/ansible-demo.txt" -i $INVENTORY
echo ""

echo "📁 Creating a directory..."
ansible webservers -m file -a "path=/tmp/ansible-test-dir state=directory mode=0755" -i $INVENTORY
echo ""

echo "📊 Gathering system facts (distribution info)..."
ansible webservers -m setup -a "filter=ansible_distribution*" -i $INVENTORY
echo ""

echo "✅ Demo completed! Commands executed on remote servers."
echo "📖 See README.md for more ad-hoc command examples."