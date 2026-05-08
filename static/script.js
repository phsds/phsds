// --- Matrix Rain Canvas ---
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Katakana + Latin characters
const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    // Translucent black background to create trail effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Randomize color slightly (some brighter, some darker green)
        if (Math.random() > 0.98) {
            ctx.fillStyle = '#FFF'; // Occasional white character
        } else {
            ctx.fillStyle = '#0F0';
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly to create varied rain
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);

// Handle resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Recalculate columns and reset drops
    const newColumns = canvas.width / fontSize;
    drops.length = 0;
    for (let x = 0; x < newColumns; x++) {
        drops[x] = 1;
    }
});

// --- Typewriter Effect ---
const typewriterText = "Programador | Entusiasta Linux";
const typewriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
    if (i < typewriterText.length) {
        typewriterElement.innerHTML += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Speed of typing
    }
}

// Start typing effect slightly after load
setTimeout(typeWriter, 1000);

// --- Image Error Fallback ---
document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('error', function() {
        const altText = this.getAttribute('alt') || 'Project';
        this.src = `https://via.placeholder.com/300x150/002200/00ff41?text=${encodeURIComponent(altText)}`;
    });
});
