import React from "react";
import { QuestionProps } from "../components/Question";

export const questions: QuestionProps[] = [
    {
      text: 'What is the capital city of France?',
      correctAnswerIndex: 1,
      answers: [
        {
          text: 'London',
        },
        {
          text: 'Paris'
        },
        {
          text: 'Dubai'
        }, 
        {
          text: 'Bucharest'
        }
      ]
    },
    {
        text: 'What is the name of the highest peak in the world?',
        correctAnswerIndex: 1,
        answers: [
            {
                text: 'Himalaya'
            }, 
            {
                text: 'Everest'
            },
            {
                text: 'K2'
            },
            {
                text: 'Lhotse'
            }
        ]
    },
    {
        text: 'How many continents does the Earth have?',
        correctAnswerIndex: 1,
        answers: [
            {
                text: 'six'
            },
            {
                text: 'seven'
            },
            {
                text: 'eight'
            },
            {
                text: 'nine'
            }
        ]
    }, 
    {
        text: 'How many Oceans does the Earth have?',
        correctAnswerIndex: 2,
        answers: [
            {
                text: 'three'
            },
            {
                text: 'four'
            },
            {
                text: 'five'
            }, 
            {
                text: 'six'
            }
        ]
    },
    {
        text: 'What is the name of the longest river on earth?',
        correctAnswerIndex: 3,
        answers: [
          {
            text: 'Mississippi-Missouri'
          },
          {
            text: 'Yangtze'
          },
          {
            text: 'Amazon'
          },
          {
            text: 'Nil'
          },
          {
            text: 'Danube'
          }
        ]
    },
    {
        text: 'What is the largest continent on earth?',
        correctAnswerIndex: 2,
        answers: [
          {
            text: 'Antarctica'
          },
          {
            text: 'Africa'
          },
          {
            text: 'Asia'
          },
          {
            text: 'South America'
          }
        ]
    },
    {
      text: 'What is the easternmost point on Earth?',
      correctAnswerIndex: 0,
      answers: [
        {
          text: 'Caroline Island, Kiribati'
        },
        {
          text: 'Attu Island, Alaska'
        },
        {
          text: 'Cape Chelyuskin, Russia'
        }, 
        {
          text: 'Diomede Islands'
        }
      ]
    },
    {
      text: 'What is the capital city of Kosovo?',
      correctAnswerIndex: 0,
      answers: [
        {
          text: 'Pristina'
        },
        {
          text: 'Mitrovica'
        }, 
        {
          text: 'Pernik'
        },
        {
          text: 'Mostar'
        }
      ]
    }, 
    {
      text: 'What is the distance (meridional circumference) between the North and the South Pole?',
      correctAnswerIndex: 2,
      answers: [
        {
          text: '40,000 km'
        },
        {
          text: '40,004 km'
        },
        {
          text: '40,008 km'
        },
        {
          text: '40,012 km'
        },
        {
          text: '40,016 km'
        },
      ]
    },
    {
      text: 'What is the biggest tectonic plate in the world?',
      correctAnswerIndex: 3,
      answers: [
        {
          text: 'Eurasian Plate',
        },
        {
          text: 'North American Plate',
        },
        {
          text: 'African Plate'
        },
        {
          text: 'Pacific Plate'
        }
      ]
    }
  ]