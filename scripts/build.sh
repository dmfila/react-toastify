#!/bin/sh

rm -rf dist/*

#Full path because of W

./node_modules/.bin/webpack --output-filename=dist/ReactToastify.min.js --optimize-minimize

./node_modules/.bin/babel src -d lib
