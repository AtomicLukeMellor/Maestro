import React, { Component } from "react";
import "./App.css";
import Board from "react-trello";

class App extends Component {
  boardBuilder = () => {
    return {
      lanes: [
        {
          id: "Tobescheduled",
          title: "To be scheduled",
          style: {
            width: 280,
          },
          label: "1/1",
          cards: [
            {
              id: "Repeat1",
              title: "Morning Jog",
              label: "100000",
              description: "Track using fitbit",
            },
          ],
        },
      ],
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Maestro Project Management</h1>
            <Board data={data} draggable />
            <Board data={data} />
          </div>
        </header>
      </div>
    );
  }
}

const data = {
  lanes: [
    {
      id: "PLANNED",
      title: "January",
      label: "20/70",
      style: {
        width: 280,
      },
      cards: [],
    },
    {
      id: "REPEAT",
      title: "Febuary",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [],
    },
    {
      id: "ARCHIVED",
      title: "March",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [],
    },
    {
      id: "April",
      title: "April",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [],
    },
    {
      id: "Tobescheduled",
      title: "To be scheduled",
      style: {
        width: 280,
      },
      label: "1/1",
      cards: [
        {
          id: "Repeat1",
          title: "Morning Jog",
          label: "100000",
          description: "Track using fitbit",
        },
        {
          id: "Archived1",
          title: "Go Trekking",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
        {
          id: "Archived2",
          title: "Go Jogging",
          label: "300 mins",
          description: "Completed 10km on cycle",
        },
        {
          id: "Milk",
          title: "Buy milk",
          label: "15 mins",
          description: "2 Gallons of milk at the Deli store",
        },
        {
          id: "Plan2",
          title: "Dispose Garbage",
          label: "10 mins",
          description: "Sort out recyclable and waste as needed",
        },
        {
          id: "Plan3",
          title: "Write Blog",
          label: "30 mins",
          description: "Can AI make memes?",
        },
        {
          id: "Plan4",
          title: "Pay Rent",
          label: "5 mins",
          description: "Transfer to bank account",
        },
      ],
    },
  ],
};

export default App;
