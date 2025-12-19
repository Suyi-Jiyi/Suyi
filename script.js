// Collection of meditative poems inspired by Buddhism, The Little Prince, and the cosmos
const poems = [
    {
        text: [
            "On B612, the small prince tends his <span class='word-highlight'>rose</span>",
            "Each <span class='word-highlight'>petal</span> whispers <span class='word-highlight'>無常</span> — impermanence",
            "The universe blooms in a single <span class='word-highlight'>cœur</span>",
            "One breath at a time, we learn to <span class='word-highlight'>释放</span>"
        ]
    },
    {
        text: [
            "In silence, the <span class='word-highlight'>心</span> expands like <span class='word-highlight'>vide</span>",
            "Stars dissolve into <span class='word-highlight'>சுக</span> — pure peace",
            "The rose teaches: <span class='word-highlight'>amore</span> is <span class='word-highlight'>attachement</span>",
            "Yet we cherish, we remain, we <span class='word-highlight'>grow</span>"
        ]
    },
    {
        text: [
            "Baobab trees cannot bloom on all worlds",
            "Only <span class='word-highlight'>compassion</span> transcends <span class='word-highlight'>空間</span> and time",
            "The little prince wandered, learning: all <span class='word-highlight'>生き物</span> matter",
            "<span class='word-highlight'>दया</span> is the cosmic <span class='word-highlight'>Licht</span> that guides us"
        ]
    },
    {
        text: [
            "Observe the fox, <span class='word-highlight'>ren</span> — the essence of connection",
            "What we tame becomes <span class='word-highlight'>único</span>, irreplaceable",
            "The stars above B612 never truly shine <span class='word-highlight'>seul</span>",
            "We are <span class='word-highlight'>interlocked</span> in an infinite <span class='word-highlight'>دائرة</span>"
        ]
    },
    {
        text: [
            "The practice of <span class='word-highlight'>meditation</span> is <span class='word-highlight'>returning</span>",
            "To the <span class='word-highlight'>core</span> of being, <span class='word-highlight'>où</span> all is still",
            "<span class='word-highlight'>苦</span> transforms into <span class='word-highlight'>sabiduría</span> without grasping",
            "Each moment a <span class='word-highlight'>galaxy</span> dissolving into <span class='word-highlight'>Nichts</span>"
        ]
    },
    {
        text: [
            "On B612, sunsets paint the sky <span class='word-highlight'>mille</span> times daily",
            "The prince learned: true sight requires <span class='word-highlight'>heart</span>",
            "<span class='word-highlight'>眼睛</span> miss what <span class='word-highlight'>灵魂</span> knows",
            "In the garden of <span class='word-highlight'>shūnyatā</span>, all blooms eternal"
        ]
    },
    {
        text: [
            "The cosmos whispers <span class='word-highlight'>एकता</span> — oneness",
            "Each <span class='word-highlight'>語</span> carries the weight of <span class='word-highlight'>eternity</span>",
            "<span class='word-highlight'>Water</span> takes the shape of vessels",
            "Yet remains itself, <span class='word-highlight'>libre</span>, <span class='word-highlight'>unbound</span>"
        ]
    },
    {
        text: [
            "As the prince crossed galaxies, he understood:",
            "<span class='word-highlight'>Distance</span> is an illusion of <span class='word-highlight'>perception</span>",
            "The rose waits on B612 in <span class='word-highlight'>suerte</span> and <span class='word-highlight'>faith</span>",
            "All <span class='word-highlight'>monde</span> suffers, all <span class='word-highlight'>monde</span> can <span class='word-highlight'>awaken</span>"
        ]
    }
];

// Multilingual words for the word garden — inspired by Buddhism, universality, and The Little Prince
const collageWords = [
    { word: "無常 (Impermanence)", lang: "zh" },
    { word: "心 (Heart-Mind)", lang: "zh" },
    { word: "空 (Emptiness)", lang: "zh" },
    { word: "光 (Light)", lang: "ja" },
    { word: "星 (Star)", lang: "ja" },
    { word: "静寂 (Silence)", lang: "ja" },
    { word: "慈悲 (Compassion)", lang: "ja" },
    { word: "amor (Love)", lang: "es" },
    { word: "flor (Flower)", lang: "es" },
    { word: "príncipe (Prince)", lang: "es" },
    { word: "rosa (Rose)", lang: "es" },
    { word: "ciel (Sky)", lang: "fr" },
    { word: "rêve (Dream)", lang: "fr" },
    { word: "coeur (Heart)", lang: "fr" },
    { word: "vide (Void)", lang: "fr" },
    { word: "حكمة (Wisdom)", lang: "ar" },
    { word: "سلام (Peace)", lang: "ar" },
    { word: "جمال (Beauty)", lang: "ar" },
    { word: "Weg (Path)", lang: "de" },
    { word: "Licht (Light)", lang: "de" },
    { word: "Seele (Soul)", lang: "de" },
    { word: "Stein (Stone)", lang: "de" },
    { word: "B612 (Home)", lang: "fr" },
    { word: "étoile (Star)", lang: "fr" },
    { word: "灵魂 (Spirit)", lang: "zh" },
    { word: "永遠 (Eternity)", lang: "zh" },
    { word: "cosmos (Universe)", lang: "en" },
    { word: "om (Breath)", lang: "ja" },
    { word: "dharma (Truth)", lang: "en" },
    { word: "moksha (Liberation)", lang: "en" },
    { word: "观想 (Contemplation)", lang: "zh" },
    { word: "禅 (Zen)", lang: "ja" },
    { word: "botánico (Garden)", lang: "es" },
    { word: "baobab (Ancient Tree)", lang: "fr" },
    { word: "tame (Connect)", lang: "en" },
    { word: "solitude (Loneliness)", lang: "fr" },
];

// Function to display a random poem
function displayRandomPoem() {
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    const poemDisplay = document.getElementById('poemDisplay');
    
    const poemHtml = randomPoem.text
        .map(line => `<div class="poem-line">${line}</div>`)
        .join('');
    
    poemDisplay.innerHTML = poemHtml;
}

// Function to generate word collage
function generateWordCollage() {
    const wordCollage = document.getElementById('wordCollage');
    wordCollage.innerHTML = '';
    
    // Shuffle and select random words
    const shuffled = collageWords.sort(() => Math.random() - 0.5);
    const selectedWords = shuffled.slice(0, Math.floor(Math.random() * 8) + 12);
    
    selectedWords.forEach((wordObj, index) => {
        const wordEl = document.createElement('div');
        wordEl.className = `word language-${wordObj.lang}`;
        wordEl.textContent = wordObj.word;
        
        // Add random animation delay
        wordEl.style.animationDelay = `${Math.random() * 2}s`;
        
        wordCollage.appendChild(wordEl);
    });
}

// Button event listeners
const generateBtn = document.getElementById('generateBtn');
const wordInput = document.getElementById('wordInput');
const loadingSpinner = document.getElementById('loadingSpinner');
const poemDisplay = document.getElementById('poemDisplay');
const newPoemBtn = document.getElementById('newPoemBtn');

generateBtn.addEventListener('click', generatePoemFromInput);
wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') generatePoemFromInput();
});

newPoemBtn.addEventListener('click', () => {
    displayRandomPoem();
    generateWordCollage();
});

async function generatePoemFromInput() {
    const word = wordInput.value.trim();
    
    if (!word) {
        poemDisplay.innerHTML = '<div class="poem-line" style="color: #d4a574;">Please enter a word...</div>';
        return;
    }
    
    loadingSpinner.style.display = 'flex';
    generateBtn.disabled = true;
    poemDisplay.innerHTML = '';
    
    try {
        const response = await fetch('http://localhost:3001/api/generate-poem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ word })
        });
        
        if (!response.ok) {
            throw new Error('Failed to generate poem');
        }
        
        const data = await response.json();
        const poem = data.poem;
        
        // Format poem with line breaks
        const lines = poem.split('\n').filter(line => line.trim());
        const poemHtml = lines
            .map(line => `<div class="poem-line">${escapeHtml(line)}</div>`)
            .join('');
        
        poemDisplay.innerHTML = poemHtml;
        generateWordCollage();
        newPoemBtn.style.display = 'block';
        
    } catch (error) {
        console.error('Error:', error);
        poemDisplay.innerHTML = `<div class="poem-line" style="color: #d4a574;">Unable to connect to poem generator. Make sure the server is running on port 3001.</div>`;
    } finally {
        loadingSpinner.style.display = 'none';
        generateBtn.disabled = false;
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Initialize on page load
window.addEventListener('load', () => {
    // Focus input field
    document.getElementById('wordInput').focus();
    
    // Show word garden
    generateWordCollage();
    
    // Regenerate collage every 15 seconds
    setInterval(generateWordCollage, 15000);
});