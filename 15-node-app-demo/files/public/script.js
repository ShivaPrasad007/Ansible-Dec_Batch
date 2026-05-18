// ITD Node.js App - Interactive JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize app
    initializeApp();

    // Set up event listeners
    setupEventListeners();

    // Start real-time updates
    startRealTimeUpdates();
});

function initializeApp() {
    console.log('🚀 ITD Node.js App initialized');

    // Check server status on load
    checkServerStatus();
}

function setupEventListeners() {
    // Health check button
    document.getElementById('healthBtn').addEventListener('click', checkHealth);

    // Time button
    document.getElementById('timeBtn').addEventListener('click', getServerTime);

    // Counter button
    document.getElementById('counterBtn').addEventListener('click', incrementCounter);
}

function startRealTimeUpdates() {
    // Update uptime every second
    setInterval(updateUptime, 1000);

    // Update current time every minute
    setInterval(updateCurrentTime, 60000);
    updateCurrentTime(); // Initial call
}

async function checkServerStatus() {
    try {
        const response = await fetch('/api/health');
        if (response.ok) {
            document.getElementById('statusDot').classList.add('online');
            document.getElementById('statusText').textContent = 'Online';
            console.log('✅ Server is online');
        } else {
            throw new Error('Server responded with error');
        }
    } catch (error) {
        document.getElementById('statusDot').classList.remove('online');
        document.getElementById('statusText').textContent = 'Offline';
        console.error('❌ Server status check failed:', error);
    }
}

async function checkHealth() {
    const resultBox = document.getElementById('healthResult');
    resultBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';

    try {
        const response = await fetch('/api/health');
        const data = await response.json();

        resultBox.innerHTML = `
            <div style="text-align: left;">
                <div><strong>Status:</strong> <span style="color: #10b981;">${data.status}</span></div>
                <div><strong>Version:</strong> ${data.version}</div>
                <div><strong>Uptime:</strong> ${Math.round(data.uptime)}s</div>
                <div><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</div>
            </div>
        `;
        console.log('✅ Health check successful:', data);
    } catch (error) {
        resultBox.innerHTML = `<span style="color: #ef4444;">❌ Error: ${error.message}</span>`;
        console.error('❌ Health check failed:', error);
    }
}

async function getServerTime() {
    const resultBox = document.getElementById('timeResult');
    resultBox.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...';

    try {
        const response = await fetch('/api/time');
        const data = await response.json();

        resultBox.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 1.25rem; font-weight: bold; color: #2563eb;">
                    ${data.currentTime}
                </div>
                <div style="font-size: 0.875rem; color: #6b7280; margin-top: 0.25rem;">
                    ${data.timezone}
                </div>
            </div>
        `;
        console.log('✅ Time fetched successfully:', data);
    } catch (error) {
        resultBox.innerHTML = `<span style="color: #ef4444;">❌ Error: ${error.message}</span>`;
        console.error('❌ Time fetch failed:', error);
    }
}

function incrementCounter() {
    const counterElement = document.getElementById('clickCount');
    const currentCount = parseInt(counterElement.textContent) || 0;
    const newCount = currentCount + 1;

    counterElement.textContent = newCount;
    counterElement.style.color = '#10b981';

    // Animate the counter
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
        counterElement.style.color = '';
    }, 200);

    console.log(`🔢 Counter incremented to: ${newCount}`);
}

function updateUptime() {
    const uptimeElement = document.getElementById('uptime');
    if (uptimeElement) {
        const currentUptime = parseFloat(uptimeElement.textContent) || 0;
        uptimeElement.textContent = Math.round(currentUptime + 1);
    }
}

function updateCurrentTime() {
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
        const now = new Date();
        timeElement.textContent = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        });
    }
}

// Add some visual feedback for button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('demo-btn')) {
        e.target.style.transform = 'scale(0.98)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 100);
    }
});

// Console logging for debugging
console.log('📱 ITD Node.js App loaded successfully');
console.log('🔧 Available features:');
console.log('   - Health check API');
console.log('   - Server time API');
console.log('   - Interactive counter');
console.log('   - Real-time updates');