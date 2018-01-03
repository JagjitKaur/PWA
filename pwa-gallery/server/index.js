require('export-import');
require('babel-core/register')({presets: ['es2015','react']});

const http = require('http');
const path = require('path');
const js = require('js');
const express = require('express');
const react = require('react');
const reactDomServer = require('react-domserver');
const reactRouterDom = require('react-router-dom');

const reactToString = reactDomServer.reactToString
const match = reactRouterDom.match
const ReactContext = reactRouterDom.reactContext