const app = Vue.createApp({
  // template: "<h4>Hello World , AM {{firstname}}  {{lastname}}</h4>",
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
      async getUser() {
          const response = await fetch("https://randomuser.me/api");
          const { results } = await response.json()
          const user = results[0]

          this.firstName = user.name.first
          this.lastName = user.name.last;
          this.email = user.email
          this.gender = user.gender
          this.picture = user.picture.large;
    }
  },
});

app.mount("#app")


/*
cell: "790-883-6889"
dob: {date: '1962-03-01T11:02:44.500Z', age: 59}
email: "anthony.singh@example.com"
gender: "male"
id: {name: '', value: null}
location: {street: {…}, city: 'Carleton', state: 'Ontario', country: 'Canada', postcode: 'Z4R 7A3', …}
login: {uuid: '1dbf1291-7511-44e4-8757-9599ce6bd2fd', username: 'greenladybug652', password: 'horseman', salt: 'Dtfes7pG', md5: '5697c383917fc580f1418564180f5420', …}
name:
first: "Anthony"
last: "Singh"
title: "Mr"
[[Prototype]]: Object
nat: "CA"
phone: "783-781-9876"
picture: {large: 'https://randomuser.me/api/portraits/men/61.jpg', medium: 'https://randomuser.me/api/portraits/med/men/61.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/61.jpg'}
registered: {date: '2012-04-19T03:02:05.626Z', age: 9}
*/