# SyncPatch React App - Docker Setup

## Prerequisites
- Docker installed on your system
- Docker Compose installed (usually comes with Docker Desktop)

## Quick Start Commands

### 1. Build and Run with Docker Compose (Recommended)
```bash
# Build and start the application
docker-compose up --build

# Run in detached mode (background)
docker-compose up -d --build

# Stop the application
docker-compose down

# View logs
docker-compose logs -f
```

### 2. Build and Run with Docker Commands
```bash
# Build the Docker image
docker build -t syncpatch-app .

# Run the container
docker run -p 3000:3000 --name syncpatch-container syncpatch-app

# Run in detached mode
docker run -d -p 3000:3000 --name syncpatch-container syncpatch-app

# Stop and remove container
docker stop syncpatch-container
docker rm syncpatch-container
```

### 3. Development Commands
```bash
# View running containers
docker ps

# View all containers (including stopped)
docker ps -a

# Access container bash
docker exec -it syncpatch-container /bin/sh

# View container logs
docker logs syncpatch-container

# Follow logs in real-time
docker logs -f syncpatch-container
```

### 4. Cleanup Commands
```bash
# Remove the image
docker rmi syncpatch-app

# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything unused (use with caution)
docker system prune -a
```

## Application Access
- Local URL: http://localhost:3000
- The application will be accessible from any machine on your network at: http://YOUR_IP:3000

## Testing Your Application

### Before Dockerizing:
1. Test locally first:
   ```bash
   npm install
   npm start
   ```
2. Ensure all features work correctly
3. Check all routes and navigation links
4. Test in different browsers

### After Dockerizing:
1. Build and run the Docker container
2. Test the same features as local environment
3. Check that all routes work correctly
4. Verify the application is accessible from other devices on your network
5. Test container restart: `docker-compose restart`

## Troubleshooting

### Common Issues:
1. **Port already in use**: Stop other applications using port 3000 or change the port mapping
   ```bash
   docker run -p 3001:3000 --name syncpatch-container syncpatch-app
   ```

2. **Application not accessible**: Check if Docker is running and port mapping is correct

3. **Build fails**: Ensure your package.json and all source files are present

4. **Container exits immediately**: Check logs with `docker logs container-name`

### Health Check:
The application includes a health check that runs every 30 seconds. You can check the health status with:
```bash
docker ps
```
Look for "healthy" in the STATUS column.

## File Structure Required:
```
your-project/
├── src/
├── public/
├── package.json
├── package-lock.json (if using npm)
├── Dockerfile
├── .dockerignore
├── docker-compose.yml
└── README.txt
```

## Important Notes:
- The application runs on port 3000 inside the container
- External access is available on http://localhost:3000
- The container uses a non-root user for security
- Health checks ensure the application is running correctly
- All node_modules are installed fresh in the container
- The .dockerignore file prevents unnecessary files from being copied

## Verification Checklist:
- [ ] Application builds without errors
- [ ] Container starts successfully
- [ ] Application is accessible at http://localhost:3000
- [ ] All routes work (home, projects, feeds, profiles)
- [ ] Mock data displays correctly
- [ ] Navigation between pages works
- [ ] No console errors in browser
- [ ] Container health check passes
- [ ] Application works after container restart