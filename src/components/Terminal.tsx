import React, { useState, useEffect, useRef } from 'react';
import { processCommand } from '../utils/commandProcessor';
import Banner from './Banner';
import TerminalPrompt from './TerminalPrompt';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set initial message
  useEffect(() => {
    setHistory([
      processCommand('banner'),
      'Welcome to the terminal!',
      'Type `help` to get started.',
    ]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when clicking on terminal
  useEffect(() => {
    const handleTerminalClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const terminal = terminalRef.current;
    if (terminal) {
      terminal.addEventListener('click', handleTerminalClick);
      return () => terminal.removeEventListener('click', handleTerminalClick);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const command = input.trim();
    const output = processCommand(command);
    const prompt = `bobi_gunardi@cli:~$ ${command}`;
    
    setHistory(prev => [...prev, prompt, output]);
    setInput('');
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        const commandLine = history[history.length - 1 - newIndex];
        if (commandLine?.startsWith('bobi_gunardi@cli:~$')) {
          setInput(commandLine.substring('bobi_gunardi@cli:~$ '.length));
          setHistoryIndex(newIndex);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        const commandLine = history[history.length - 1 - newIndex];
        if (commandLine?.startsWith('bobi_gunardi@cli:~$')) {
          setInput(commandLine.substring('bobi_gunardi@cli:~$ '.length));
          setHistoryIndex(newIndex);
        }
      } else if (historyIndex === 0) {
        setInput('');
        setHistoryIndex(-1);
      }
    }
  };

  return (
    <div 
      className="bg-black text-green-400 p-4 rounded-md w-full h-full overflow-auto font-mono leading-tight"
      ref={terminalRef}
    >
      <div className="min-h-full">
        {history.map((line, index) => (
          <div key={index} className={`whitespace-pre-wrap ${line === processCommand('banner') ? 'text-green-400' : ''}`}>
            {line}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <TerminalPrompt />
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none w-full text-green-400 caret-transparent"
              autoFocus
              aria-label="Terminal input"
            />
            <span className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
              <span className="invisible">{input}</span>
              <span className="animate-[blink_1s_infinite] inline-block w-2 h-5 bg-green-400 align-middle" />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Terminal;