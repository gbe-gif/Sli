import React from 'react';

export interface CharacterProfile {
  name: string;
  constellationName: string;
  appearance: {
    height: string;
    build: string;
    features: string[];
  };
  mbti: string;
  personality: string[];
  habits: string[];
  likes: string[];
  tmi: {
    label: string;
    value: string;
    isSensitive?: boolean;
  }[];
  images: {
    normal: string;
    secret: string;
  };
}

export interface WorldTerm {
  term: string;
  description: string;
  icon?: React.ReactNode;
}

export interface PrologueSegment {
  type: 'narrative' | 'dialogue' | 'system' | 'effect';
  content: string;
  speaker?: string;
  subContent?: string; // For system message sub-lines
  asciiArt?: string;
}

export interface CommandExample {
  command: string;
  description: string;
  outputTitle: string;
  outputContent: string; // The simulated text output
  isSecret?: boolean; // For !?? command
}