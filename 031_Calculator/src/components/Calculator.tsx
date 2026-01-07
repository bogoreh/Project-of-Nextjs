'use client';

import React, { useState, useCallback, useEffect } from 'react';
import CalculatorButton from './CalculatorButton';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState<boolean>(false);

  const handleNumberClick = useCallback((num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  }, [display, waitingForNewValue]);

  const handleOperatorClick = useCallback((op: string) => {
    const inputValue = parseFloat(display);
    
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(result);
    }
    
    setOperator(op);
    setWaitingForNewValue(true);
  }, [display, previousValue, operator]);

  const calculate = (a: number, b: number, op: string): number => {
    switch (op) {
      case '+': return a + b;
      case '-': return a - b;
      case '×': return a * b;
      case '÷': return b !== 0 ? a / b : 0;
      default: return b;
    }
  };

  const handleEquals = useCallback(() => {
    if (previousValue !== null && operator !== null) {
      const inputValue = parseFloat(display);
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperator(null);
      setWaitingForNewValue(true);
    }
  }, [display, previousValue, operator]);

  const handleClear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForNewValue(false);
  }, []);

  const handlePercentage = useCallback(() => {
    const currentValue = parseFloat(display);
    setDisplay(String(currentValue / 100));
  }, [display]);

  const handleToggleSign = useCallback(() => {
    const currentValue = parseFloat(display);
    setDisplay(String(-currentValue));
  }, [display]);

  const handleDecimal = useCallback(() => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }, [display, waitingForNewValue]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') {
        handleNumberClick(e.key);
      } else if (e.key === '.') {
        handleDecimal();
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        const operatorMap: { [key: string]: string } = {
          '+': '+',
          '-': '-',
          '*': '×',
          '/': '÷'
        };
        handleOperatorClick(operatorMap[e.key]);
      } else if (e.key === 'Enter' || e.key === '=') {
        handleEquals();
      } else if (e.key === 'Escape' || e.key === 'Delete') {
        handleClear();
      } else if (e.key === '%') {
        handlePercentage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNumberClick, handleOperatorClick, handleEquals, handleClear, handleDecimal, handlePercentage]);

  return (
    <div className="glass-effect neon-glow rounded-2xl p-6 w-full max-w-md border border-slate-800">
      {/* Display */}
      <div className="mb-8">
        <div className="text-slate-500 text-sm font-medium mb-2 h-5">
          {previousValue !== null ? `${previousValue} ${operator || ''}` : '\u00A0'}
        </div>
        <div className="text-5xl font-light text-slate-100 text-right overflow-x-auto font-mono tracking-tight">
          {display.length > 10 ? parseFloat(display).toExponential(5) : display}
        </div>
      </div>

      {/* Keypad */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <CalculatorButton 
          label="AC" 
          onClick={handleClear}
          variant="secondary"
        />
        <CalculatorButton 
          label="±" 
          onClick={handleToggleSign}
          variant="secondary"
        />
        <CalculatorButton 
          label="%" 
          onClick={handlePercentage}
          variant="secondary"
        />
        <CalculatorButton 
          label="÷" 
          onClick={() => handleOperatorClick('÷')}
          variant="accent"
        />

        {/* Row 2 */}
        <CalculatorButton 
          label="7" 
          onClick={() => handleNumberClick('7')}
          variant="number"
        />
        <CalculatorButton 
          label="8" 
          onClick={() => handleNumberClick('8')}
          variant="number"
        />
        <CalculatorButton 
          label="9" 
          onClick={() => handleNumberClick('9')}
          variant="number"
        />
        <CalculatorButton 
          label="×" 
          onClick={() => handleOperatorClick('×')}
          variant="accent"
        />

        {/* Row 3 */}
        <CalculatorButton 
          label="4" 
          onClick={() => handleNumberClick('4')}
          variant="number"
        />
        <CalculatorButton 
          label="5" 
          onClick={() => handleNumberClick('5')}
          variant="number"
        />
        <CalculatorButton 
          label="6" 
          onClick={() => handleNumberClick('6')}
          variant="number"
        />
        <CalculatorButton 
          label="-" 
          onClick={() => handleOperatorClick('-')}
          variant="accent"
        />

        {/* Row 4 */}
        <CalculatorButton 
          label="1" 
          onClick={() => handleNumberClick('1')}
          variant="number"
        />
        <CalculatorButton 
          label="2" 
          onClick={() => handleNumberClick('2')}
          variant="number"
        />
        <CalculatorButton 
          label="3" 
          onClick={() => handleNumberClick('3')}
          variant="number"
        />
        <CalculatorButton 
          label="+" 
          onClick={() => handleOperatorClick('+')}
          variant="accent"
        />

        {/* Row 5 */}
        <CalculatorButton 
          label="0" 
          onClick={() => handleNumberClick('0')}
          variant="number"
          spanTwo
        />
        <CalculatorButton 
          label="." 
          onClick={handleDecimal}
          variant="number"
        />
        <CalculatorButton 
          label="=" 
          onClick={handleEquals}
          variant="equals"
        />
      </div>

      {/* Status Bar */}
      <div className="mt-8 pt-4 border-t border-slate-800">
        <div className="flex justify-between text-xs text-slate-500">
          <span>Professional Calculator</span>
          <span>Dark Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Calculator;