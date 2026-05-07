const songs = {
  happy: [
    { title: "Happy", artist: "Pharrell Williams", tags: ["Pop", "Soul", "120 BPM"] },
    { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", tags: ["Pop", "Funk", "113 BPM"] },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", tags: ["Funk", "Pop", "115 BPM"] },
    { title: "Good as Hell", artist: "Lizzo", tags: ["Pop", "R&B", "96 BPM"] },
    { title: "Walking on Sunshine", artist: "Katrina & The Waves", tags: ["Rock", "Pop", "109 BPM"] },
    { title: "Shake It Off", artist: "Taylor Swift", tags: ["Pop", "Synth", "160 BPM"] },
  ],
  sad: [
    { title: "Someone Like You", artist: "Adele", tags: ["Soul", "Ballad", "67 BPM"] },
    { title: "The Night We Met", artist: "Lord Huron", tags: ["Indie", "Folk", "90 BPM"] },
    { title: "Skinny Love", artist: "Bon Iver", tags: ["Indie Folk", "72 BPM"] },
    { title: "Fix You", artist: "Coldplay", tags: ["Alternative", "Rock", "69 BPM"] },
    { title: "Liability", artist: "Lorde", tags: ["Indie Pop", "Piano", "56 BPM"] },
    { title: "All I Want", artist: "Kodaline", tags: ["Indie", "Ballad", "74 BPM"] },
  ],
  energetic: [
    { title: "POWER", artist: "Kanye West", tags: ["Hip-Hop", "130 BPM"] },
    { title: "Levels", artist: "Avicii", tags: ["EDM", "House", "126 BPM"] },
    { title: "Run the World (Girls)", artist: "Beyoncé", tags: ["Pop", "Dance", "128 BPM"] },
    { title: "Blinding Lights", artist: "The Weeknd", tags: ["Synth-Pop", "171 BPM"] },
    { title: "SICKO MODE", artist: "Travis Scott", tags: ["Hip-Hop", "Trap", "155 BPM"] },
    { title: "Eye of the Tiger", artist: "Survivor", tags: ["Rock", "Classic", "108 BPM"] },
  ],
  chill: [
    { title: "Sunset Lover", artist: "Petit Biscuit", tags: ["Electronic", "Chill", "97 BPM"] },
    { title: "Retrograde", artist: "James Blake", tags: ["Electronic", "Soul", "66 BPM"] },
    { title: "Electric Feel", artist: "MGMT", tags: ["Indie", "Psych", "107 BPM"] },
    { title: "Breathe (2 AM)", artist: "Anna Nalick", tags: ["Acoustic", "Indie", "66 BPM"] },
    { title: "Golden Hour", artist: "JVKE", tags: ["Pop", "Dreamy", "97 BPM"] },
    { title: "Voyager", artist: "Daft Punk", tags: ["Electronic", "Nu-Disco", "122 BPM"] },
  ],
  focused: [
    { title: "Comptine d'un autre été", artist: "Yann Tiersen", tags: ["Classical", "Piano", "85 BPM"] },
    { title: "Experience", artist: "Ludovico Einaudi", tags: ["Neoclassical", "60 BPM"] },
    { title: "Time", artist: "Hans Zimmer", tags: ["Cinematic", "Ambient", "56 BPM"] },
    { title: "Weightless", artist: "Marconi Union", tags: ["Ambient", "70 BPM"] },
    { title: "Carbon Based Lifeforms", artist: "Neuromancer", tags: ["Ambient", "Electronic"] },
    { title: "An Ending (Ascent)", artist: "Brian Eno", tags: ["Ambient", "Classical", "54 BPM"] },
  ],
  romantic: [
    { title: "Perfect", artist: "Ed Sheeran", tags: ["Pop", "Ballad", "95 BPM"] },
    { title: "Make You Feel My Love", artist: "Adele", tags: ["Soul", "73 BPM"] },
    { title: "La Vie En Rose", artist: "Édith Piaf", tags: ["French", "Classic"] },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", tags: ["Soul", "Pop", "79 BPM"] },
    { title: "All of Me", artist: "John Legend", tags: ["R&B", "Piano", "63 BPM"] },
    { title: "A Thousand Years", artist: "Christina Perri", tags: ["Pop", "Ballad", "89 BPM"] },
  ],
};

const moodLabels = {
  happy:     { emoji: "☀️", label: "Happy Vibes" },
  sad:       { emoji: "🌧️", label: "Feeling Sad" },
  energetic: { emoji: "⚡", label: "Full Energy" },
  chill:     { emoji: "🌊", label: "Chilling Out" },
  focused:   { emoji: "🎯", label: "Deep Focus" },
  romantic:  { emoji: "🌹", label: "Romantic Mood" },
};

function getSpotifyURL(title, artist) {
  const query = encodeURIComponent(`${title} ${artist}`);
  return `https://open.spotify.com/search/${query}`;
}

function showSongs(mood) {
  const list = songs[mood];
  const { emoji, label } = moodLabels[mood];
  const results = document.getElementById("results");
  const grid = document.getElementById("songs-grid");
  const title = document.getElementById("results-title");
  const badge = document.getElementById("results-mood-badge");

  title.textContent = "Your playlist ✦";
  badge.textContent = `${emoji} ${label}`;

  grid.innerHTML = "";

  list.forEach((song, i) => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.style.animationDelay = `${i * 0.07}s`;

    const spotifyURL = getSpotifyURL(song.title, song.artist);
    const tagsHTML = song.tags.map(t => `<span class="tag">${t}</span>`).join("");

    card.innerHTML = `
      <span class="song-num">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <div class="song-tags">${tagsHTML}</div>
      <a class="spotify-link" href="${spotifyURL}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        Open in Spotify
      </a>
    `;
    grid.appendChild(card);
  });

  results.classList.add("visible");

  setTimeout(() => {
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 100);
}

document.querySelectorAll(".mood-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".mood-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    showSongs(btn.dataset.mood);
  });
});
