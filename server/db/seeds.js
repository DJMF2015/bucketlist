use bucket_list;
db.dropDatabase();

db.activities.insertMany([
  {
    description: "Travel to South Africa",
    location: "South Africa",
    type: "Travel",
    isDone: false
  },
  {
    description: "Run the Marathon Des Sables",
    location: "Sahara Desert, Morocco",
    type: "Personal",
    isDone: false
  },
  {
    description: "Learn Mandarin in 365 days",
    location: "n/a",
    type: "Skill",
    isDone: false
  },
  {
    description: "Swim Loch Ness",
    location: "Loch Ness, Scotland",
    type: "marine",
    isDone: false
  }
]);
