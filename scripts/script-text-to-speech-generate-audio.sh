#!/bin/bash

echo "=== Inworld TTS Generator ==="
echo ""

# Ask for the text
read -p "Enter the text to generate audio: " TEXT

# Ask for the file name
read -p "Output filename (e.g., audio.wav): " OUTPUT

# Default extension if the user omits it
if [[ "$OUTPUT" != *.wav ]]; then
  OUTPUT="${OUTPUT}.wav"
fi

echo ""
echo "Generating audio..."
echo ""

# Call the endpoint + decode
curl 'https://inworld.ai/api/create-speech' \
  -H 'origin: https://inworld.ai' \
  -H 'pragma: no-cache' \
  -H 'priority: u=1, i' \
  -H 'referer: https://inworld.ai/' \
  -H 'sec-ch-ua: "Chromium";v="142", "Google Chrome";v="142", "Not_A Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36' \
  --data-raw "{\"text\":\"$TEXT\",\"voice_id\":\"Maitê\",\"audio_config\":{\"audio_encoding\":\"LINEAR16\",\"speaking_rate\":1,\"sample_rate_hertz\":24000,\"pitch\":0,\"temperature\":0.5}}" \
  | jq -r '.audioContent' \
  | base64 -d > "$OUTPUT"

echo ""
echo "✔ Audio generated successfully!"
echo "File saved in: $OUTPUT"
echo ""
file "$OUTPUT"
