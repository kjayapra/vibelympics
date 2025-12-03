# Use Chainguard's nginx image
FROM cgr.dev/chainguard/nginx:latest

# Copy application files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose port 8080 (Chainguard nginx runs on 8080)
EXPOSE 8080

# The nginx image already has the correct entrypoint configured
