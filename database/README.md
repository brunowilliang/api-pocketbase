# PocketBase Database

This directory contains the PocketBase setup for deployment with Coolify.

## ⚠️ CRITICAL: Data Persistence

**MUST configure persistent volumes in Coolify or data will be lost on every deploy!**

## Files

- `Dockerfile` - Downloads PocketBase automatically
- `docker-compose.yml` - Local development reference
- `.dockerignore` - Optimize Docker builds

**Note**: PocketBase executable and data files are NOT versioned in Git.

## Deployment with Coolify

1. **Create new application** in Coolify
2. **Source**: Point to this repository
3. **Build Pack**: Docker
4. **Dockerfile location**: `database/Dockerfile`
5. **Port**: 8080
6. **⚠️ CRITICAL - Volumes** (MUST configure or data will be lost):
   - `/app/pb_data` → persistent volume (database + configs)
   - `/app/pb_hooks` → persistent volume (custom hooks)  
   - `/app/pb_public` → persistent volume (public files)

## Environment Variables

Optional in Coolify:
- `POCKETBASE_VERSION=0.22.21` (specify version)

## Data Migration

For first deploy, upload your existing data:
1. Create persistent volumes in Coolify
2. SSH/Console access to container
3. Upload your `pb_data/`, `pb_hooks/`, `pb_public/` folders

## Local Development

```bash
cd database
docker-compose up --build
```

Access: http://localhost:8080

## Important Notes

- ⚠️ **CRITICAL**: Configure persistent volumes or lose data on every deploy
- ✅ PocketBase downloads automatically (no 31MB executable in Git)
- ✅ Database files stay in persistent volumes (not in Git)
- ✅ Small repository size (~few KBs instead of MBs)
- ✅ All configurations preserved across deployments 