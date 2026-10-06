# Kobo Interns Site

A small personal side project built to learn the basics of web hosting, deployment, and reverse proxy setup.

This repo contains a simple multi-site setup for hosting a personal website and learning how services interact in a real web environment. The project explores things like:

- static site hosting with Apache
- Node.js app hosting
- Nginx reverse proxy configuration
- Docker-based local deployment
- subdomain-style site organization
- basic automation for pulling updates

## Project structure

- `kobo-interns.xyz/` - main static site served with Apache HTTPD
- `justin.kobo-interns.xyz/` - Node/Express site
- `nginx-proxy/` - Nginx reverse proxy configuration
- `docker-compose.yml` - multi-service Docker setup
- `auto-pull.sh` - helper script for updating the site on a remote host

## Purpose

This was mainly a learning project for understanding how websites are hosted in practice, including:

- routing traffic between domains and subdomains
- serving content from different containers/services
- using Docker to manage services
- setting up a reverse proxy
- debugging deployment issues as a small personal site grows

## Running locally

From the repository root:

```bash
docker compose up -d
```

## Notes

This is not a production-grade app or a large platform project. It is a hands-on learning repo focused on experimenting with hosting fundamentals and personal web infrastructure.
