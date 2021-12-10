const getUserName = (id) => {
  let user = users.find((u) => u.id === id);
  return user.name;
};
const getUsers = (courseID) => {
  // get enrollments from one course
  course_enrolless = enrollments.filter((e) => e.course_id === 1);
  let users = course_enrolless.map((ce) => {
    // just return object
    // return { user_id: ce.user_id, role: ce.role };
    // than try to find name
    let name = getUserName(ce.user_id);
    return { name, role: ce.role };
  });
  return users;
};

const enrollments = [
  {
    id: 1,
    role: "Student",
    user_id: 1,
    course_id: 1,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 2,
    role: "Student",
    user_id: 2,
    course_id: 1,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 3,
    role: "Ta",
    user_id: 2,
    course_id: 2,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
  {
    id: 4,
    role: "Teacher",
    user_id: 1,
    course_id: 2,
    created_at: "2021-12-10T16:49:06.538Z",
    updated_at: "2021-12-10T16:49:06.538Z",
  },
];
const courses = [
  {
    id: 1,
    name: "Math",
    created_at: "2021-12-10T16:49:06.154Z",
    updated_at: "2021-12-10T16:49:06.154Z",
  },
  {
    id: 2,
    name: "English",
    created_at: "2021-12-10T16:49:06.154Z",
    updated_at: "2021-12-10T16:49:06.154Z",
  },
];
const users = [
  {
    id: 1,
    name: "Lamonica Ryan Esq.",
    created_at: "2021-12-10T16:49:06.496Z",
    updated_at: "2021-12-10T16:49:06.496Z",
  },
  {
    id: 2,
    name: "Bob Esq.",
    created_at: "2021-12-10T16:49:06.496Z",
    updated_at: "2021-12-10T16:49:06.496Z",
  },
];

// =>
[
  {
    course: "Math",
    users: [
      { name: "Lamonica Ryan Esq.", role: "Student" },
      { name: "BOb Esq.", role: "Student" },
    ],
  },
  {
    course: "English",
    users: [
      { name: "Lamonica Ryan Esq.", role: "Teacher" },
      { name: "BOb Esq.", role: "TA" },
    ],
  },
];

//step 1 go through courses
let step1 = courses.map((c) => {
  return c.name;
});
console.log("step1: ", step1);

//step 2 match data structure to how you want
let step2 = courses.map((c) => {
  return { name: c.name, users: [] };
});
console.log("step2: ", step2);

// step 3 getUsers() figure our how to get user
// for a given course

// or try to find the negrap the user_id and role
// const user_data1 = course_enrolless.map((ce) => {
//   return { user_id: ce.user_id, role: ce.role };
// });

let final = courses.map((c) => {
  return { name: c.name, users: getUsers() };
});
console.log(final);
