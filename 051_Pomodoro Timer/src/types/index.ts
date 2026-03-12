export type TimerMode = 'pomodoro' | 'shortBreak' | 'longBreak';

export interface TimerSettings {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  longBreakInterval: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  pomodoros: number;
}