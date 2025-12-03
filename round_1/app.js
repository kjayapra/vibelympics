// Mood to weather mapping
const moodWeatherMap = {
    happy: [
        { icon: '☀️', temp: '🌡️⬆️' },
        { icon: '🌈', temp: '🌡️➡️' },
        { icon: '🌤️', temp: '🌡️⬆️' },
        { icon: '✨', temp: '🌡️➡️' }
    ],
    sad: [
        { icon: '🌧️', temp: '🌡️⬇️' },
        { icon: '☔', temp: '🌡️⬇️' },
        { icon: '🌊', temp: '🌡️⬇️' },
        { icon: '💧', temp: '🌡️⬇️' }
    ],
    angry: [
        { icon: '⚡', temp: '🌡️⬆️⬆️⬆️' },
        { icon: '🔥', temp: '🌡️⬆️⬆️⬆️' },
        { icon: '🌪️', temp: '🌡️⬆️⬆️' },
        { icon: '💥', temp: '🌡️⬆️⬆️' }
    ],
    love: [
        { icon: '💕', temp: '🌡️❤️' },
        { icon: '🌸', temp: '🌡️➡️' },
        { icon: '🌺', temp: '🌡️⬆️' },
        { icon: '🦋', temp: '🌡️➡️' }
    ],
    tired: [
        { icon: '🌙', temp: '🌡️⬇️' },
        { icon: '⭐', temp: '🌡️⬇️' },
        { icon: '🌌', temp: '🌡️⬇️⬇️' },
        { icon: '💤', temp: '🌡️⬇️' }
    ],
    excited: [
        { icon: '🎉', temp: '🌡️⬆️⬆️' },
        { icon: '🎊', temp: '🌡️⬆️⬆️' },
        { icon: '🎈', temp: '🌡️⬆️' },
        { icon: '🚀', temp: '🌡️⬆️⬆️⬆️' }
    ]
};

let currentMood = null;
let history = [];

// Get DOM elements
const moodButtons = document.querySelectorAll('.mood-btn');
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemp = document.querySelector('.weather-temp');
const shuffleBtn = document.getElementById('shuffle');
const saveBtn = document.getElementById('save');
const resetBtn = document.getElementById('reset');
const historyContainer = document.getElementById('history');

// Initialize
function init() {
    loadHistory();
    renderHistory();

    moodButtons.forEach(btn => {
        btn.addEventListener('click', () => selectMood(btn));
    });

    shuffleBtn.addEventListener('click', shuffleWeather);
    saveBtn.addEventListener('click', saveCurrentWeather);
    resetBtn.addEventListener('click', resetApp);
}

// Select mood and display weather
function selectMood(btn) {
    // Remove selected class from all buttons
    moodButtons.forEach(b => b.classList.remove('selected'));

    // Add selected class to clicked button
    btn.classList.add('selected');

    // Get mood and display weather
    currentMood = btn.dataset.mood;
    displayWeather();
}

// Display random weather based on mood
function displayWeather() {
    if (!currentMood) return;

    const weatherOptions = moodWeatherMap[currentMood];
    const randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

    weatherIcon.textContent = randomWeather.icon;
    weatherTemp.textContent = randomWeather.temp;

    // Trigger animation
    weatherIcon.style.animation = 'none';
    setTimeout(() => {
        weatherIcon.style.animation = '';
    }, 10);
}

// Shuffle weather for current mood
function shuffleWeather() {
    if (!currentMood) {
        // If no mood selected, show random mood
        const randomMood = ['happy', 'sad', 'angry', 'love', 'tired', 'excited'][Math.floor(Math.random() * 6)];
        const btn = document.querySelector(`[data-mood="${randomMood}"]`);
        selectMood(btn);
    } else {
        displayWeather();
    }
}

// Save current weather to history
function saveCurrentWeather() {
    if (!currentMood) return;

    const moodEmoji = document.querySelector(`[data-mood="${currentMood}"]`).textContent;
    const weather = weatherIcon.textContent;

    const historyItem = {
        mood: moodEmoji,
        weather: weather,
        timestamp: Date.now()
    };

    history.unshift(historyItem);

    // Keep only last 20 items
    if (history.length > 20) {
        history = history.slice(0, 20);
    }

    saveHistory();
    renderHistory();

    // Show save animation
    saveBtn.style.transform = 'scale(0.8)';
    setTimeout(() => {
        saveBtn.style.transform = '';
    }, 200);
}

// Reset app
function resetApp() {
    currentMood = null;
    moodButtons.forEach(b => b.classList.remove('selected'));
    weatherIcon.textContent = '❓';
    weatherTemp.textContent = '🌡️';

    // Animation
    resetBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        resetBtn.style.transform = '';
    }, 500);
}

// Render history
function renderHistory() {
    historyContainer.innerHTML = '';

    history.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.textContent = `${item.mood}→${item.weather}`;
        historyContainer.appendChild(div);
    });
}

// Save history to localStorage
function saveHistory() {
    try {
        localStorage.setItem('moodWeatherHistory', JSON.stringify(history));
    } catch (e) {
        console.error('Failed to save history:', e);
    }
}

// Load history from localStorage
function loadHistory() {
    try {
        const saved = localStorage.getItem('moodWeatherHistory');
        if (saved) {
            history = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Failed to load history:', e);
        history = [];
    }
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
