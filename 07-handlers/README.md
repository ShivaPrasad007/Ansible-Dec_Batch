# Handlers - Event-Driven Task Execution

This example demonstrates Ansible handlers and their behavior clearly.

## What Handlers Demonstrate:

### 1. **Event-Driven Execution**
- Handlers only run when explicitly notified by tasks
- Tasks use `notify:` to trigger handlers when they make changes

### 2. **Delayed Execution**
- Handlers run at the **END** of the playbook, not immediately
- All tasks complete first, then handlers execute

### 3. **Idempotent Behavior**
- Handlers run only **ONCE** per play, even if notified multiple times
- Multiple notifications for the same handler = single execution

### 4. **Change-Triggered**
- Handlers only run if the notifying task reports `changed: true`
- No changes = no handler execution

## Playbook Flow (from test output):

```
Tasks Execute:
├── Show start of playbook execution
├── Simulate config change → NOTIFY handler (changed: true)
├── Another config change → NOTIFY handler (changed: true)
├── Task that does NOT notify handler
└── Show that handlers run at the END

Handlers Execute (at end):
└── Restart nginx and show effect (runs once, even though notified twice)
```

## Key Handler Behaviors Shown:

- ✅ **Multiple notifications** → Single execution
- ✅ **End-of-play execution** → After all tasks complete
- ✅ **Clear debug output** → Shows exactly when handlers run
- ✅ **Timestamped execution** → Shows handler ran at specific time

## Test Output Highlights:

```
TASK [Simulate config change (will notify handler)] ************ changed: [localhost]
TASK [Another config change (will notify handler again)] ******* changed: [localhost]
TASK [Task that does NOT notify handler] *********************** ok: [localhost]
TASK [Show that handlers run at the END of the play] *********** ok: [localhost]

RUNNING HANDLER [Restart nginx and show effect] **************** ok: [localhost]
🔄 HANDLER EXECUTING: Simulating nginx restart at 2025-12-23T14:21:15Z
```

## Usage:
```bash
ansible-playbook -i inventory.yml playbook.yml
```

Watch the output to see handlers execute at the end with clear debug messages!