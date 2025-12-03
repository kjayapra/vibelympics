# 🌤️😊🌧️ Mood Weather App

An emoji-only interactive web app that translates your mood into weather patterns! Select how you're feeling and watch the weather change to match your vibe.

## ✨ Features

- **🎯 6 Moods**: Choose from happy, sad, angry, love, tired, or excited
- **🌈 Dynamic Weather**: Each mood generates unique weather conditions
- **🔀 Shuffle**: Get random weather variations for your current mood
- **💾 History**: Save your favorite mood-weather combinations
- **📊 Visual History**: See all your saved combinations at a glance

## 🏗️ Built With

- Pure HTML, CSS, and JavaScript
- Chainguard nginx container
- 100% emoji interface (zero text in UI!)

## 🚀 Running the App

### Prerequisites
- Docker installed on your system

### Build and Run

1. Build the Docker image:
```bash
docker build -t mood-weather-app .
```

2. Run the container:
```bash
docker run -p 8080:8080 mood-weather-app
```

3. Open your browser and navigate to:
```
http://localhost:8080
```

## 🎮 How to Use

1. **Select Your Mood**: Click on any emoji face (😊 😢 😠 😍 😴 🤩)
2. **View Weather**: The app shows matching weather and temperature
3. **Shuffle (🔀)**: Get a different weather for the same mood
4. **Save (💾)**: Save your current mood-weather combo to history
5. **Reset (🔄)**: Clear current selection and start fresh
6. **History (📊)**: View all your saved combinations

## 🌟 Emoji UI Elements

All interactive elements use only emojis:

- **Moods**: 😊 😢 😠 😍 😴 🤩
- **Weather**: ☀️ 🌈 🌤️ ✨ 🌧️ ☔ 🌊 💧 ⚡ 🔥 🌪️ 💥 💕 🌸 🌺 🦋 🌙 ⭐ 🌌 💤 🎉 🎊 🎈 🚀
- **Temperature**: 🌡️⬆️ 🌡️⬇️ 🌡️➡️ 🌡️❤️
- **Actions**: 🔀 💾 🔄
- **History**: 📊

## 🎨 Design Philosophy

The app follows the "get weird" theme by creating an emotional weather forecast system. Your feelings become meteorological events, saved as a personal mood-weather journal!

## 🐳 Container Details

- Base Image: `cgr.dev/chainguard/nginx:latest`
- Exposed Port: 8080
- Minimal, distroless container for security

---

**Vibelympics Round 1 Submission** 🏆
