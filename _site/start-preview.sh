#!/bin/bash

# Simple script to start Jekyll preview
echo "Starting Jekyll preview server..."
echo "----------------------------------------"

# Initialize rbenv
eval "$(rbenv init - zsh)"

# Start Jekyll
bundle exec jekyll serve --port 4000

# This will keep running until you press Ctrl+C
