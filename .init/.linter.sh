#!/bin/bash
cd /home/kavia/workspace/code-generation/grid-system-demonstration-2102-2111/frontend_grid_demo
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

