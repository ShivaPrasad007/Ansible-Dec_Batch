// Simple Project JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickMe');
    const messageElement = document.getElementById('message');

    let clickCount = 0;
    const messages = [
        "Hello! Thanks for clicking! 🎉",
        "You clicked again! Keep going! 🚀",
        "Wow, you're really into this! 💪",
        "This button is loving the attention! ❤️",
        "You're a clicking champion! 🏆"
    ];

    clickButton.addEventListener('click', function() {
        clickCount++;
        const messageIndex = Math.min(clickCount - 1, messages.length - 1);
        messageElement.textContent = messages[messageIndex];
        messageElement.style.color = getRandomColor();

        // Add some animation
        clickButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            clickButton.style.transform = 'scale(1)';
        }, 100);
    });

    function getRandomColor() {
        const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Add some interactive features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.background = '#e9ecef';
        });

        feature.addEventListener('mouseleave', function() {
            this.style.background = '#f8f9fa';
        });
    });

    // Show page load message
    console.log('🚀 Simple project loaded successfully!');
    console.log('📅 Deployed on:', new Date().toLocaleDateString());
    console.log('🔧 Powered by Ansible & Nginx');
});