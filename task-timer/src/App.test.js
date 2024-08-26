import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Timer from './components/Timer'

// Mock the timer intervals
jest.useFakeTimers();

describe('Timer Component', () => {

  test('renders Timer component', () => {
    render(<Timer />);
    expect(screen.getByText('Task Timer')).toBeInTheDocument();
    expect(screen.getByText('0:00')).toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  test('startTimer function starts the timer', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Start'));
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('0:03')).toBeInTheDocument();
  });

  test('pauseTimer function pauses the timer', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Start'));
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByText('Pause'));
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText('0:03')).toBeInTheDocument();
  });

  test('resetTimer function resets the timer', () => {
    render(<Timer />);
    fireEvent.click(screen.getByText('Start'));
    
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    fireEvent.click(screen.getByText('Reset'));

    expect(screen.getByText('0:00')).toBeInTheDocument();
  });

  test('buttons are disabled/enabled correctly', () => {
    render(<Timer />);

    // Initially
    expect(screen.getByText('Start')).not.toBeDisabled();
    expect(screen.getByText('Pause')).toBeDisabled();
    expect(screen.getByText('Reset')).toBeDisabled();

    // After start
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText('Start')).toBeDisabled();
    expect(screen.getByText('Pause')).not.toBeDisabled();
    expect(screen.getByText('Reset')).not.toBeDisabled();

    // After pause
    fireEvent.click(screen.getByText('Pause'));
    expect(screen.getByText('Start')).not.toBeDisabled();
    expect(screen.getByText('Pause')).toBeDisabled();
    expect(screen.getByText('Reset')).not.toBeDisabled();

    // After reset
    fireEvent.click(screen.getByText('Reset'));
    expect(screen.getByText('Start')).not.toBeDisabled();
    expect(screen.getByText('Pause')).toBeDisabled();
    expect(screen.getByText('Reset')).toBeDisabled();
  });
});