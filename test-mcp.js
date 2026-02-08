#!/usr/bin/env node

const { spawn } = require('child_process');

console.log('Testing MCP Search Servers...\n');

// Test 1: Check if brave-search-mcp-server is installed
console.log('1. Testing brave-search-mcp-server installation:');
const braveTest = spawn('brave-search-mcp-server', ['--help'], { shell: true });

braveTest.stdout.on('data', (data) => {
  console.log('✓ brave-search-mcp-server is working');
});

braveTest.stderr.on('data', (data) => {
  console.error('Error:', data.toString());
});

braveTest.on('close', (code) => {
  if (code === 0) {
    console.log('✓ brave-search-mcp-server test passed\n');
  } else {
    console.log(`✗ brave-search-mcp-server test failed with code ${code}\n`);
  }

  // Test 2: Check if tavily-mcp is installed
  console.log('2. Testing tavily-mcp installation:');
  const tavilyTest = spawn('tavily-mcp', ['--help'], { shell: true });

  tavilyTest.stdout.on('data', (data) => {
    console.log('✓ tavily-mcp is working');
  });

  tavilyTest.stderr.on('data', (data) => {
    console.error('Error:', data.toString());
  });

  tavilyTest.on('close', (code) => {
    if (code === 0) {
      console.log('✓ tavily-mcp test passed\n');
    } else {
      console.log(`✗ tavily-mcp test failed with code ${code}\n`);
    }

    // Summary
    console.log('\n=== MCP Configuration Summary ===');
    console.log('Config file: C:\\Users\\15353\\AppData\\Roaming\\Claude\\claude_desktop_config.json');
    console.log('\nInstalled MCP Servers:');
    console.log('  1. Brave Search (@brave/brave-search-mcp-server)');
    console.log('     - Requires: BRAVE_API_KEY');
    console.log('     - Get API key from: https://brave.com/search/api/');
    console.log('\n  2. Tavily Search (tavily-mcp)');
    console.log('     - Requires: TAVILY_API_KEY');
    console.log('     - Get API key from: https://tavily.com/');
    console.log('\n=== Next Steps ===');
    console.log('1. Get API keys from the respective services');
    console.log('2. Update YOUR_API_KEY_HERE in the config file');
    console.log('3. Restart Claude Desktop to load the MCP servers');
    console.log('4. Use search tools in Claude conversations');
  });
});